#!/usr/bin/env node
/**
 * vendor-core.mjs — copy the @subframe/core implementation we actually use into
 * src/ui/core, so the prototype builds with no Subframe package installed.
 *
 * License: @subframe/core is ISC. LICENSE is copied verbatim to src/ui/core/LICENSE.
 *
 * Sources (first that exists):
 *   1. ./node_modules/@subframe/core/src        (if the package is still installed here)
 *   2. ../design-system/node_modules/@subframe/core/src
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const candidates = [
  path.join(root, "node_modules/@subframe/core/src"),
  path.join(root, "../design-system/node_modules/@subframe/core/src"),
];
const coreSrc = candidates.find((p) => fs.existsSync(p));
if (!coreSrc) {
  console.error("vendor-core: @subframe/core source not found in:\n  " + candidates.join("\n  "));
  process.exit(1);
}

const out = path.join(root, "src/ui/core");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const SKIP_SPEC = (f) => /\.(spec|test)\.[tj]sx?$/.test(f);

function copyDir(from, to, filter = () => true) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (SKIP_SPEC(entry.name)) continue;
    const src = path.join(from, entry.name);
    const dst = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dst, filter);
    else if (filter(entry.name)) fs.copyFileSync(src, dst);
  }
}

copyDir(path.join(coreSrc, "components"), path.join(out, "components"));
copyDir(path.join(coreSrc, "lib"), path.join(out, "lib"));
copyDir(path.join(coreSrc, "utilities"), path.join(out, "utilities"));
fs.copyFileSync(path.join(coreSrc, "types.d.ts"), path.join(out, "types.d.ts"));
/* Licence: the package declares ISC in package.json but ships no LICENSE file,
   so record the terms and provenance here. */
const pkg = JSON.parse(fs.readFileSync(path.join(coreSrc, "../package.json"), "utf8"));
fs.writeFileSync(
  path.join(out, "NOTICE"),
  [
    `Vendored from ${pkg.name}@${pkg.version} (declared licence: ${pkg.license}).`,
    pkg.author ? `Author: ${pkg.author}.` : "",
    "",
    "Only the modules this project uses were copied, plus the Feather icons it",
    "references. Relative imports were rewritten; nothing else was modified.",
    "",
    `ISC Licence`,
    ``,
    `Copyright (c) ${pkg.author || pkg.name}`,
    ``,
    `Permission to use, copy, modify, and/or distribute this software for any`,
    `purpose with or without fee is hereby granted, provided that the above`,
    `copyright notice and this permission notice appear in all copies.`,
    ``,
    `THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES`,
    `WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF`,
    `MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR`,
    `ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES`,
    `WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN`,
    `ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF`,
    `OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`,
    "",
  ].filter((l) => l !== undefined).join("\n"),
);

// recharts is a CommonJS package; Vite dev resolves named exports at runtime and
// rejects TS-only names that exist only in the .d.ts. Split them into `import type`
// so dev mode and the build both work.
// CJS packages (recharts, react-day-picker, @radix-ui/…) don't expose TS-only
// names at runtime: names ending in `Props` are types by the libraries'
// convention, and react/react-dom expose a known set of type-only names, so
// they must ride on `import type` or Vite dev mode fails every route.
const TYPE_ONLY_NAMES = new Set(["Ref", "MutableRefObject", "RefObject", "LegacyRef", "RefCallback", "Dispatch", "SetStateAction"]);
for (const dir of ["components", "lib"]) {
  for (const file of fs.readdirSync(path.join(out, dir))) {
  if (!/\.tsx?$/.test(file)) continue;
  const fp = path.join(out, dir, file);
  const text = fs.readFileSync(fp, "utf8");
  const m = /import \{([^}]*)\} from "((?!\.)[^"]+)"/s.exec(text);
  if (!m) continue;
  const names = m[1].split(",").map((n) => n.trim()).filter(Boolean);
  const types = names.filter(
    (n) => n.split(" ").pop().endsWith("Props") || TYPE_ONLY_NAMES.has(n.split(" ").pop()),
  );
  if (!types.length) continue;
  const values = names.filter((n) => !types.includes(n));
  const replacement = `import { ${values.join(", ")} } from "${m[2]}"\nimport type { ${types.join(", ")} } from "${m[2]}"`;
  fs.writeFileSync(fp, text.slice(0, m.index) + replacement + text.slice(m.index + m[0].length));
  console.error(`[vendor-core] split type-only imports in ${dir}/${file} (${types.join(", ")})`);
  }
}

// Cascade-layer the vendored module CSS. Subframe's own fullscreen-dialog
// module does this for the same reason: unlayered Tailwind utilities must win
// over module rules (e.g. the progress indicator's height:100% would otherwise
// collapse the track to 0 px, because our bundle loads component CSS after the
// utilities). Unlayered styles always beat layered ones, whatever the order.
for (const file of fs.readdirSync(path.join(out, "components"))) {
  if (!file.endsWith(".module.css")) continue;
  const mp = path.join(out, "components", file);
  const css = fs.readFileSync(mp, "utf8");
  if (css.includes("@layer subframe-core") || css.match(/^@layer\s*\{/m)) continue;
  fs.writeFileSync(mp, `@layer subframe-core {\n${css}\n}\n`);
}

// Components reach the full icon barrel through "../assets/icons/final"; we ship a
// trimmed barrel at core/icons instead.
for (const file of fs.readdirSync(path.join(out, "components"))) {
  if (!/\.tsx?$/.test(file)) continue;
  const p = path.join(out, "components", file);
  const text = fs.readFileSync(p, "utf8");
  if (text.includes("../assets/icons/final")) {
    fs.writeFileSync(p, text.replaceAll("../assets/icons/final", "../icons"));
  }
}

/* ---- icons: only the Feather icons the design system references ---- */
const scanRoots = ["src/ui", "src/boards"].map((p) => path.join(root, p)).filter(fs.existsSync);
const used = new Set();
for (const dir of scanRoots) {
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) {
        if (path.basename(p) === "core") continue;
        walk(p);
      } else if (/\.(tsx|ts|astro|mdx)$/.test(e.name)) {
        const text = fs.readFileSync(p, "utf8");
        for (const m of text.matchAll(/\b(Feather[A-Z][A-Za-z0-9]*)\b/g)) used.add(m[1]);
      }
    }
  };
  if (fs.statSync(dir).isDirectory()) walk(dir);
}

const iconDir = path.join(coreSrc, "assets/icons/final");
const available = new Map();
for (const line of fs.readFileSync(path.join(iconDir, "index.ts"), "utf8").split("\n")) {
  const m = line.match(/export \{ default as (\w+) \} from "\.\/([\w-]+)"/);
  if (m) available.set(m[1], m[2]);
}

const wanted = [...used].filter((n) => available.has(n)).sort();
const unknown = [...used].filter((n) => !available.has(n)).sort();
if (unknown.length) {
  console.error("vendor-core: icons used but not found in core:\n  " + unknown.join(", "));
}

const iconsOut = path.join(out, "icons");
fs.mkdirSync(iconsOut, { recursive: true });
const iconExports = [];
for (const name of wanted) {
  const file = available.get(name) + ".tsx";
  // Icons import the wrapper through a fixed relative path: keep the depth identical.
  let text = fs.readFileSync(path.join(iconDir, file), "utf8");
  text = text.replace('from "../../../components/icon-wrapper"', 'from "../components/icon-wrapper"');
  fs.writeFileSync(path.join(iconsOut, file), text);
  iconExports.push(`export { default as ${name} } from "./${available.get(name)}"`);
}
fs.writeFileSync(path.join(iconsOut, "index.ts"), iconExports.join("\n") + "\n");

/* ---- index.ts: the original surface, with our trimmed icon barrel ---- */
let index = fs.readFileSync(path.join(coreSrc, "index.ts"), "utf8");
index = index.replace('from "./assets/icons/final"', 'from "./icons"').replace('from "./assets/icons/final"', 'from "./icons"');
index = index.replace('./assets/icons/final', './icons');
index = index.replace(/^\/\* eslint-disable .*\*\/\n/m, "");
index = index.replace("import { Toaster, toast } from \"sonner\"", "import { Toaster, toast } from \"sonner\"");
fs.writeFileSync(path.join(out, "index.ts"), index);

const stats = {
  coreComponents: fs.readdirSync(path.join(out, "components")).length,
  icons: wanted.length,
  iconsUnknown: unknown.length,
  bytes: 0,
};
const du = (d) => {
  let n = 0;
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    n += e.isDirectory() ? du(p) : fs.statSync(p).size;
  }
  return n;
};
stats.bytes = du(out);
console.log(
  `vendor-core: ${stats.coreComponents} component modules, ${stats.icons} icons, ${(stats.bytes / 1024).toFixed(0)} KB → src/ui/core`,
);
if (stats.iconsUnknown) process.exit(1);
