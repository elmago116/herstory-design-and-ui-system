#!/usr/bin/env node
/**
 * pull-subframe.mjs — one-way, build-time-only pull from the Subframe MCP server.
 *
 * Nothing in the build depends on this script: it writes plain files that are
 * committed. Run it deliberately when the design changes.
 *
 *   npm run pull -- --list
 *   npm run pull -- --only UI-01,UI-11.6 --force
 *   npm run pull -- --all
 *
 * Writes: src/boards/*.tsx, vendor/subframe-snapshot/manifest.json
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { accessToken, connect, describePage } from "./lib/mcp.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PROJECT_ID = process.env.SUBFRAME_PROJECT_ID ?? "fbbaaa9a39d6";

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name) => {
  const i = args.indexOf(name);
  return i === -1 ? null : args[i + 1];
};

const token = await accessToken();
const { call } = await connect(token);

const { pages } = await call("list_pages", { projectId: PROJECT_ID });
const DELETED = new Set(["UI-13.1", "UI-13.2", "UI-09.1", "UI-10.1"]); // gate 2026-11-24
const described = pages
  .filter((p) => !DELETED.has(describePage(p).id))
  .map((p) => ({ page: p, ...describePage(p) }))
  .filter((d) => d.id);
const unparsed = pages.filter((p) => !describePage(p));
if (unparsed.length) console.error("[pull] unparsed page names:", unparsed.map((p) => p.name));

if (flag("--list")) {
  for (const d of described.sort((a, b) => a.slug.localeCompare(b.slug))) {
    console.log(`${d.id.padEnd(11)} ${d.kind.padEnd(13)} ${d.slug}`);
  }
  console.log(`\n${described.length} pages, ${unparsed.length} unparsed`);
  process.exit(0);
}

let targets;
if (flag("--all")) targets = described;
else if (opt("--only")) {
  const wanted = new Set(opt("--only").split(",").map((s) => s.trim()).filter(Boolean));
  targets = described.filter((d) => wanted.has(d.id));
  const missing = [...wanted].filter((w) => !targets.some((t) => t.id === w));
  if (missing.length) throw new Error(`unknown ids: ${missing.join(", ")}`);
} else {
  console.error("usage: pull-subframe.mjs (--all | --only UI-01,UI-11.6 | --list) [--force]");
  process.exit(1);
}

const boardsDir = path.join(root, "src/boards");
fs.mkdirSync(boardsDir, { recursive: true });
const manifestPath = path.join(root, "vendor/subframe-snapshot/manifest.json");
const manifest = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
  : { projectId: PROJECT_ID, pulledAt: null, pages: {}, theme: null, components: null };

const added = [];
const skipped = [];
for (const d of targets) {
  const info = await call("get_page_info", { projectId: PROJECT_ID, id: d.page.id });
  const file = info.files?.[0];
  if (!file) {
    console.error(`[pull] ${d.id}: no code returned`);
    continue;
  }
  // The export imports the core through the package name; point it at the vendored copy.
  const contents = file.contents.replaceAll('"@subframe/core"', '"@/ui/core"');
  const sha = crypto.createHash("sha256").update(contents).digest("hex");
  const dest = path.join(boardsDir, d.file);
  const prev = manifest.pages[d.id];
  if (fs.existsSync(dest) && prev && prev.sha256 !== sha && !flag("--force")) {
    skipped.push(d.id);
    console.error(`[pull] ${d.id}: local file differs from manifest — rerun with --force`);
    continue;
  }
  fs.writeFileSync(dest, contents);
  manifest.pages[d.id] = {
    kind: d.kind,
    id: d.id,
    title: d.title,
    slug: d.slug,
    file: d.file,
    subframePageId: d.page.id,
    canvasName: d.page.canvasName,
    lastModifiedAt: d.page.lastModifiedAt ?? null,
    exportedFileName: file.fileName,
    bytes: Buffer.byteLength(contents),
    sha256: sha,
    pulledAt: new Date().toISOString(),
  };
  added.push(d.id);
}

manifest.theme = await call("get_theme", { projectId: PROJECT_ID });
manifest.components = (await call("list_components", { projectId: PROJECT_ID })).components;
manifest.pulledAt = new Date().toISOString();
fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

console.log(`[pull] wrote ${added.length} board(s): ${added.join(", ") || "—"}`);
if (skipped.length) console.log(`[pull] skipped ${skipped.length}: ${skipped.join(", ")}`);
console.log("[pull] manifest: vendor/subframe-snapshot/manifest.json");
