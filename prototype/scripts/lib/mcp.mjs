/**
 * lib/mcp.mjs — minimal MCP client for the Subframe endpoint.
 *
 * Auth reuses the harness OAuth grant in ~/.omp/agent/agent.db and refreshes it
 * before use: the access token lives 1 h and the server answers a stale grant with
 * 401, which the harness surfaces as "MCP server not connected".
 *
 * Used only by scripts that write files into the repo. Nothing at build or run
 * time imports this module.
 */
import { execFileSync } from "node:child_process";
import path from "node:path";

export const MCP_URL = process.env.SUBFRAME_MCP_URL ?? "https://mcp.subframe.com/mcp";
const DB = process.env.SUBFRAME_CREDENTIAL_DB ?? path.join(process.env.HOME, ".omp/agent/agent.db");
const PROVIDER = process.env.SUBFRAME_OAUTH_PROVIDER ?? `mcp_oauth:profile:default:${MCP_URL}`;

function sqlite(sql) {
  return execFileSync("sqlite3", [DB, sql], { encoding: "utf8" }).trim();
}

export async function accessToken(force = false) {
  if (process.env.SUBFRAME_ACCESS_TOKEN) return process.env.SUBFRAME_ACCESS_TOKEN;

  let cred;
  try {
    const row = sqlite(
      `select data from auth_credentials where provider='${PROVIDER}' order by updated_at desc limit 1;`,
    );
    if (row) cred = JSON.parse(row);
  } catch (err) {
    throw new Error(`cannot read ${DB}: ${err.message}`);
  }
  if (!cred) throw new Error(`no stored grant for ${PROVIDER} in ${DB}`);
  if (!force && cred.expires && cred.expires - 60_000 > Date.now()) return cred.access;

  const res = await fetch(cred.tokenUrl, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SUBFRAME_REFRESH_TOKEN ?? cred.refresh,
      client_id: cred.clientId,
    }),
  });
  if (!res.ok) throw new Error(`token refresh failed: ${res.status} ${await res.text()}`);
  const tok = await res.json();
  cred.access = tok.access_token;
  cred.refresh = tok.refresh_token ?? cred.refresh;
  cred.expires = Date.now() + (tok.expires_in ?? 3600) * 1000;
  try {
    sqlite(
      `update auth_credentials set data='${JSON.stringify(cred).replaceAll("'", "''")}', updated_at=cast(strftime('%s','now') as integer) where provider='${PROVIDER}';`,
    );
  } catch {
    /* read-only DB is fine: the refreshed token still works for this run */
  }
  console.error("[mcp] refreshed Subframe OAuth grant");
  return cred.access;
}

export async function connect(maybeToken) {
  let token = maybeToken ?? (await accessToken());
  let reauth = Boolean(process.env.SUBFRAME_ACCESS_TOKEN);
  let sessionId = null;

  const post = async (payload) => {
    const headers = {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
      accept: "application/json, text/event-stream",
    };
    if (sessionId) headers["mcp-session-id"] = sessionId;
    const res = await fetch(MCP_URL, { method: "POST", headers, body: JSON.stringify(payload) });
    sessionId = res.headers.get("mcp-session-id") ?? sessionId;
    const text = await res.text();
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`);
    const line = text
      .split("\n")
      .filter((l) => l.startsWith("data: "))
      .map((l) => l.slice(6))
      .find(Boolean);
    return line ?? text ? JSON.parse(line ?? text) : null;
  };

  const init = await post({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
      protocolVersion: "2025-06-18",
      capabilities: {},
      clientInfo: { name: "herstory-astro-prototype", version: "0.1.0" },
    },
  });
  if (init?.error) throw new Error(`initialize → ${JSON.stringify(init.error)}`);

  await post({ jsonrpc: "2.0", method: "notifications/initialized", params: {} }).catch(() => {});

  let seq = 2;
  const call = async (name, args, retried = false) => {
    let msg;
    try {
      msg = await post({
        jsonrpc: "2.0",
        id: seq++,
        method: "tools/call",
        params: { name, arguments: args },
      });
    } catch (err) {
      // A long run outlives the 1 h access token: refresh once and replay.
      if (!retried && /HTTP 401/.test(err.message) && !reauth) {
        token = await accessToken(true);
        sessionId = null;
        await post({
          jsonrpc: "2.0",
          id: 1,
          method: "initialize",
          params: {
            protocolVersion: "2025-06-18",
            capabilities: {},
            clientInfo: { name: "herstory-astro-prototype", version: "0.1.0" },
          },
        });
        return call(name, args, true);
      }
      throw err;
    }
    if (msg?.error) throw new Error(`${name} → ${JSON.stringify(msg.error)}`);
    const result = msg.result;
    if (result?.isError) throw new Error(`${name} → ${JSON.stringify(result.content)}`);
    const text = result?.content?.[0]?.text;
    if (!text) return result?.content;
    // Some tools answer with prose ("Exported … as a 2200×2200 png at 2x: <url>"),
    // others with JSON. Return whatever we got and let the caller decide.
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  };

  return { call };
}

/** "UI-37.6.2 General operation - Coordinator team" → { id, title, slug, file } */
export function describePage(page) {
  const name = page.name;
  const ds = /^(\d+)\s*[—-]\s*(.+)$/.exec(name);
  if (ds) {
    return {
      kind: "design-system",
      id: `DS-${ds[1]}`,
      title: ds[2].trim(),
      slug: `ds-${slugify(ds[2])}`,
      file: `Ds${ds[1]}${pascal(ds[2])}.tsx`,
    };
  }
  const m = /^(UI-[0-9]+(?:\.[0-9]+)*[A-Z]?)\s+(.*)$/.exec(name);
  if (!m) return null;
  const id = m[1];
  const title = m[2].trim();
  return {
    kind: id.includes(".") ? "secondary" : "primary",
    id,
    title,
    slug: slugify(`${id} ${title}`),
    file: `${pascal(id)}${pascal(title)}.tsx`,
  };
}

export const pascal = (s) =>
  s
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");

export const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
