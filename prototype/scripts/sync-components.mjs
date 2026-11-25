#!/usr/bin/env node
/**
 * sync-components.mjs — make src/ui match the Subframe design-system library.
 *
 * Boards are pulled with `npm run pull`; components were copied once by hand and
 * drift when Subframe changes a shared component. This script fetches every
 * component (and the three page layouts) and writes the same file tree the app
 * imports. It rewrites the package import to the vendored core, exactly like the
 * board pull does.
 *
 *   npm run sync            # all components + layouts
 *   npm run sync -- --check # report files that would change, write nothing
 *
 * Run after `npm run pull` when a board references a component that does not
 * exist locally, or when parity drifts on table/border-heavy boards.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { accessToken, connect } from "./lib/mcp.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PROJECT_ID = process.env.SUBFRAME_PROJECT_ID ?? "fbbaaa9a39d6";
const COMPONENTS = path.join(root, "src/ui/components");
const LAYOUTS = path.join(root, "src/ui/layouts");
const check = process.argv.includes("--check");

const pascal = (name) =>
  name
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");

const rewrite = (contents) => contents.replaceAll('"@subframe/core"', '"@/ui/core"');

const { call } = await connect(await accessToken());
const { components } = await call("list_components", { projectId: PROJECT_ID });

let written = 0;
let changed = 0;
for (const component of components) {
  const info = await call("get_component_info", { projectId: PROJECT_ID, id: component.id });
  if (!info.files?.length) {
    console.error(`[sync] ${component.name}: no files returned`);
    continue;
  }
  const base = /Layout$/.test(component.name) ? LAYOUTS : COMPONENTS;
  const dir = path.join(base, pascal(component.name));
  for (const file of info.files) {
    const dest = path.join(dir, file.fileName);
    const contents = rewrite(file.contents);
    const prev = fs.existsSync(dest) ? fs.readFileSync(dest, "utf8") : null;
    if (prev === contents) continue;
    changed++;
    if (check) {
      console.log(`[sync] would update ${path.relative(root, dest)}`);
      continue;
    }
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dest, contents);
    written++;
  }
}
if (check) {
  console.log(`[sync] ${changed} file(s) differ`);
  process.exit(changed ? 1 : 0);
}
console.log(`[sync] ${written} file(s) written from ${components.length} components`);
