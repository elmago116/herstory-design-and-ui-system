#!/usr/bin/env node
/**
 * refs.mjs — freeze the design as reference PNGs (the parity oracle).
 *
 * Exports each board from Subframe at both breakpoints, downloads the PNG, and
 * records the CSS width the export was rendered at. Treated as immutable: the
 * harness compares against these files, never against a live Subframe call.
 *
 *   npm run refs -- --only UI-01,UI-28
 *   npm run refs -- --all
 *
 * Writes: shots/reference/<slug>@<viewport>.png, shots/reference/index.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import { accessToken, connect } from "./lib/mcp.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PROJECT_ID = process.env.SUBFRAME_PROJECT_ID ?? "fbbaaa9a39d6";
const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => (args.indexOf(n) === -1 ? null : args[args.indexOf(n) + 1]);

const REF_DIR = path.join(root, "shots/reference");
const INDEX = path.join(REF_DIR, "index.json");
const config = YAML.parse(fs.readFileSync(path.join(root, "uis.yaml"), "utf8"));
const index = fs.existsSync(INDEX) ? JSON.parse(fs.readFileSync(INDEX, "utf8")) : { refs: {} };

const only = opt("--only") ? new Set(opt("--only").split(",").map((s) => s.trim())) : null;
const targets = config.ui.filter(
  (u) => u.subframe?.pageId && (flag("--all") || (only && only.has(u.id))),
);
if (!targets.length) {
  console.error("usage: refs.mjs (--all | --only UI-01,UI-28)");
  process.exit(1);
}

const { call } = await connect(await accessToken());
const theme = (await call("get_theme", { projectId: PROJECT_ID })).breakpoints;
const mobile = theme.find((b) => b.name === "Mobile");
if (!mobile) throw new Error("theme has no Mobile breakpoint");
// The export service renders a page at its display width; `breakpointId` is no
// longer accepted. Desktop renders at its default width (1440), mobile at the
// breakpoint max so the layout is deterministic and matches tailwind's `mobile`.
const breakpoints = {
  desktop: { width: null },
  mobile: { width: mobile.maxWidth },
};
const SCALE = { desktop: 2, mobile: 2 };

function parseExport(text) {
  // "Exported UI-01 … as a 2200×2200 png at 2x: https://…png."
  const m = /as a (\d+)×(\d+) (\w+) at ([\d.]+)x: (https:\/\/\S+?)\.?$/.exec(text);
  if (!m) throw new Error(`unexpected export response: ${text.slice(0, 200)}`);
  return { width: Number(m[1]), height: Number(m[2]), scale: Number(m[4]), url: m[5] };
}

fs.mkdirSync(REF_DIR, { recursive: true });
let done = 0;
for (const entry of targets) {
  for (const viewport of Object.keys(breakpoints)) {
    const out = path.join(REF_DIR, `${entry.id}@${viewport}.png`);
    const key = `${entry.id}@${viewport}`;
    const width = breakpoints[viewport].width;
    const payload = {
      projectId: PROJECT_ID,
      id: entry.subframe.pageId,
      format: "png",
      scale: SCALE[viewport],
      ...(width ? { width } : {}),
    };
    try {
      let text;
      let payloadForShot = payload;
      try {
        text = await call("export_image", payloadForShot);
      } catch (err) {
        // Very tall boards make the export service lower the raster scale; a 1x
        // export is deterministic and still gives a 1440 css-wide layout.
        if (!/Scale was lowered/i.test(err?.message ?? "")) throw err;
        payloadForShot = { ...payload, scale: 1 };
        text = await call("export_image", payloadForShot);
      }
      const meta = parseExport(typeof text === "string" ? text : JSON.stringify(text));
      const res = await fetch(meta.url);
      if (!res.ok) throw new Error(`download ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(out, buf);
      index.refs[key] = {
        id: entry.id,
        viewport,
        pxWidth: meta.width,
        pxHeight: meta.height,
        cssWidth: Math.round(meta.width / meta.scale),
        cssHeight: Math.round(meta.height / meta.scale),
        scale: meta.scale,
        bytes: buf.length,
        exportedAt: new Date().toISOString(),
      };
      done++;
      console.log(`[refs] ${key}  ${meta.width}×${meta.height}px  (css ${meta.width / meta.scale}×${meta.height / meta.scale})`);
    } catch (err) {
      console.error(`[refs] ${key} FAILED: ${err.message}`);
    }
  }
  fs.writeFileSync(INDEX, JSON.stringify(index, null, 2) + "\n");
}
console.log(`[refs] ${done} reference image(s) → shots/reference/`);
