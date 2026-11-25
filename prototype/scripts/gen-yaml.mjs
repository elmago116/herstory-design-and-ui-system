#!/usr/bin/env node
/**
 * gen-yaml.mjs — build uis.yaml from three inputs:
 *   1. vendor/subframe-snapshot/manifest.json  (what has been pulled, with SHAs)
 *   2. HerStory UIs.md                          (READ ONLY — the inventory reference)
 *   3. the existing uis.yaml                    (curated fields are preserved)
 *
 * Curated (never overwritten): hydration, journey, notes.
 * Derived (always rewritten): title, route, kind, parent, section, canvas, file,
 *   status (unless curated to `deviated`), subframe metadata.
 *
 * The doc is opened read-only and never written. Its path comes from UI_DOC or
 * the default below; a missing doc is a hard error so drift is loud.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const UI_DIR = path.join(root, "..");
const DOC = process.env.UI_DOC ?? path.join(UI_DIR, "HerStory UIs.md");
const MANIFEST = path.join(root, "vendor/subframe-snapshot/manifest.json");
const OUT = path.join(root, "uis.yaml");

if (!fs.existsSync(DOC)) throw new Error(`inventory reference not found: ${DOC} (never modify it; set UI_DOC to relocate)`);
if (!fs.existsSync(MANIFEST)) throw new Error(`manifest not found: ${MANIFEST} — run npm run pull first`);

const docLines = fs.readFileSync(DOC, "utf8").split("\n");
const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
const previous = fs.existsSync(OUT) ? YAML.parse(fs.readFileSync(OUT, "utf8")) : { ui: [] };
const signoffs = previous.signoffs ?? {};
const PARITY = path.join(root, "shots/parity.json");
const measured = fs.existsSync(PARITY) ? JSON.parse(fs.readFileSync(PARITY, "utf8")) : {};
const VERIFIED = 0.001; // 0.1 % structural
const DEVIATED = 0.02; // 2 % structural
const curated = new Map((previous.ui ?? []).map((u) => [u.id, u]));

/* --------------------------------------------------- doc: sections + rows ---- */

const sections = new Map(); // "13.1" → { heading, ids: [] }
let current = null;
for (const line of docLines) {
  const h = /^### (13\.\d)\s+(.*)$/.exec(line);
  if (h) {
    current = h[1];
    sections.set(current, { heading: h[2].trim(), ids: [] });
    continue;
  }
  if (/^#{1,3} /.test(line)) current = null;
  if (!current) continue;
  const row = /^\|\s*\*\*(UI-[0-9]+[A-Z]?)\*\*/.exec(line);
  if (row) sections.get(current).ids.push(row[1]);
}

const sectionOf = new Map();
for (const [num, s] of sections) for (const id of s.ids) sectionOf.set(id, `${num} ${s.heading}`);

/** A child surface inherits the section of its top-level parent (UI-37.6.1 → UI-37). */
function sectionFor(id) {
  return sectionOf.get(id.replace(/(\.[0-9]+)+$/, "")) ?? null;
}

/* doc: secondary + shell rows → titles, so a doc-only surface is still described */
const docRows = new Map();
for (const line of docLines) {
  const m = /^\|\s*(UI-[0-9]+)\s*\|\s*(UI-[0-9]+(?:\.[0-9]+)*[A-Z]?)\s*\|\s*([^|]+?)\s*\|/.exec(line);
  if (m && !docRows.has(m[2])) docRows.set(m[2], { parent: m[1], title: m[3].trim() });
}

/* ------------------------------------------------- hydration → from code ----- */

/**
 * A board hydration decision is derived from its own code: a board whose handlers
 * are all no-ops (the common case in these exports) never needs React in the
 * browser, and Astro renders the identical DOM at build time. An explicit
 * `hydration:` in uis.yaml wins.
 */
const INTERACTIVE = new Set([
  "Tooltip", "HoverCard", "Select", "Combobox", "DropdownMenu", "ContextMenu", "Dialog",
  "Drawer", "FullscreenDialog", "Collapsible", "CollapsibleSection", "Switch", "Slider",
  "Tabs", "ToggleGroup", "Checkbox", "CheckboxGroup", "RadioGroup", "Table", "Calendar",
  "Pagination", "TreeNode", "TreeView", "RichTextEditor", "NumberStepper", "SplitButton",
]);

/** Surfaces deleted by the 2026-11-23 gate; the inventory and local boards drop them. */
const DELETED = new Set(["UI-13.1", "UI-13.2", "UI-09.1", "UI-10.1"]);

function classify(file) {
  const abs = path.join(root, file);
  if (!fs.existsSync(abs)) return { hydration: "static", handlers: { total: 0, live: 0 } };
  const src = fs.readFileSync(abs, "utf8");
  const found = [...src.matchAll(/on[A-Z][A-Za-z]*=\{/g)].length;
  const compact = src.replace(/\s+/g, " ");
  const empty = [
    ...compact.matchAll(/on[A-Z][A-Za-z]*=\{\s*\([^)]*\)\s*=>\s*\{\s*\}\s*\}/g),
  ].length;
  const live = found - empty;
  const hooks = /useState|useReducer|useEffect|useRef/.test(src);
  // Component-internal behaviour (a tooltip, an expandable row) is worth keeping
  // even when the board's own handlers are no-ops.
  const primitives = [...src.matchAll(/@\/ui\/components\/([A-Za-z]+)/g)]
    .map((m) => m[1])
    .filter((n) => INTERACTIVE.has(n));
  const hydration = live === 0 && !hooks && primitives.length === 0 ? "static" : "client:load";
  return { hydration, handlers: { total: found, live }, primitives: [...new Set(primitives)].length };
}

/* --------------------------------------- board code → component inventory ---- */

/**
 * Every board is a tree of design-system components. A generic primitive is named
 * by what it actually shows in that board — <Button>Search</Button> is the
 * component `Button:Search`, not another anonymous `Button` — while the props
 * written in code stay verbatim under `config`, so nothing about the primitive
 * is lost and the identifier stays unique inside the surface.
 *
 * Only components imported from `@/ui/components/*` count: dotted sub-components
 * (`Table.Cell`), icons and Subframe primitives belong to their parent instance.
 */
const pascal = (s) =>
  s
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");

function componentInventory(id, file) {
  if (!file) return [];
  const abs = path.join(root, file);
  if (!fs.existsSync(abs)) return [];
  const src = fs.readFileSync(abs, "utf8");
  const sf = ts.createSourceFile(abs, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

  const locals = new Set();
  for (const stmt of sf.statements) {
    if (!ts.isImportDeclaration(stmt)) continue;
    const mod = stmt.moduleSpecifier;
    if (!ts.isStringLiteral(mod) || !/^@\/ui\/components\/[A-Za-z0-9_]+$/.test(mod.text)) continue;
    const bindings = stmt.importClause?.namedBindings;
    if (bindings && ts.isNamedImports(bindings)) {
      for (const el of bindings.elements) locals.add(el.name.text);
    }
  }
  if (!locals.size) return [];

  const flat = (node) => node.getText(sf).replace(/\s+/g, " ").trim();
  const literal = (node) =>
    ts.isStringLiteralLike(node) || ts.isNumericLiteral(node) ? node.text : null;

  function valueOf(init) {
    if (!init) return true;
    if (ts.isStringLiteral(init)) return init.text;
    if (ts.isJsxExpression(init) && init.expression) {
      const e = init.expression;
      if (e.kind === ts.SyntaxKind.TrueKeyword) return true;
      if (e.kind === ts.SyntaxKind.FalseKeyword) return false;
      const lit = literal(e);
      if (lit !== null) return lit;
      if (ts.isIdentifier(e) && e.text === "undefined") return null;
      return flat(e);
    }
    return flat(init);
  }

  function propsOf(opening) {
    const props = {};
    for (const attr of opening.attributes.properties) {
      if (!ts.isJsxAttribute(attr)) continue;
      props[attr.name.getText(sf)] = valueOf(attr.initializer);
    }
    return props;
  }

  /** Direct text children only: a nested element is its own inventory entry. */
  function ownText(node) {
    if (!node.children) return "";
    const parts = [];
    for (const child of node.children) {
      if (ts.isJsxText(child)) {
        const t = child.text.replace(/\s+/g, " ").trim();
        if (t) parts.push(t);
      } else if (ts.isJsxExpression(child) && child.expression) {
        const lit = literal(child.expression);
        if (lit !== null) parts.push(lit);
      }
    }
    return parts.join(" ").trim();
  }

  const iconName = (icon) => {
    const m = typeof icon === "string" ? /\bFeather([A-Za-z0-9_]+)/.exec(icon) : null;
    return m ? pascal(m[1]) : "";
  };

  const used = new Map();
  const out = [];

  function walk(node) {
    let opening = null;
    if (ts.isJsxElement(node)) opening = node.openingElement;
    else if (ts.isJsxSelfClosingElement(node)) opening = node;

    if (opening) {
      const tag = opening.tagName;
      if (ts.isIdentifier(tag) && locals.has(tag.text)) {
        const component = tag.text;
        const config = propsOf(opening);
        const label = [
          ownText(node),
          config.label,
          config.title,
          config.placeholder,
          config["aria-label"],
          typeof config.value === "string" ? config.value : "",
          iconName(config.icon),
        ].find((v) => typeof v === "string" && /[\p{L}\p{N}]/u.test(v)) ?? "";

        const slug = label ? pascal(label) : "";
        const base = `${id}/${component}${slug ? `:${slug}` : ""}`;
        const n = (used.get(base) ?? 0) + 1;
        used.set(base, n);
        out.push({
          key: n === 1 ? base : `${base}#${n}`,
          component,
          name: label || component,
          line: sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1,
          config,
        });
      }
    }
    ts.forEachChild(node, walk);
  }
  walk(sf);
  return out;
}

/* ------------------------------------------------- measurement → status ----- */

/** status/parity come from shots/parity.json; a hand-set `deviated` note survives. */
function measure(id, prev = {}) {
  const d = measured[`${id}@desktop`];
  const m = measured[`${id}@mobile`];
  // Chart-region split (§11 option 3): the page gate uses outside8 when present.
  const desk = d?.outside8 ?? d?.ratio8;
  const mob = m?.outside8 ?? m?.ratio8;
  const parity = {
    desktop: desk ?? null,
    mobile: mob ?? null,
    px_desktop: d ? d.ratio : null,
    px_mobile: m ? m.ratio : null,
    ...(d?.outside8 !== undefined ? { chart_desktop: Number(d.chart8.toFixed(6)) } : {}),
    ...(m?.outside8 !== undefined ? { chart_mobile: Number(m.chart8.toFixed(6)) } : {}),
  };
  if (!d && !m) return { status: "pulled", parity };
  const worst = Math.max(desk ?? 0, mob ?? 0);
  let status = worst <= VERIFIED ? "verified" : worst <= DEVIATED ? "deviated" : "failed";
  // A signed-off board (§11 option 2) stays deviated with its recorded note.
  if (signoffs[id]) status = "deviated";
  else if (prev.status === "deviated" && prev.notes) status = "deviated";
  const note =
    status === "verified"
      ? null
      : signoffs[id]
        ? signoffs[id].note
        : prev.notes ?? null;
  return { status, parity, measured_at: (d ?? m).measuredAt, ...(note ? { notes: note } : {}) };
}

/* ------------------------------------------------------------ manifest → ui -- */

const p = (s) =>
  s
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");

const entries = [];
for (const [id, page] of Object.entries(manifest.pages ?? {})) {
  if (DELETED.has(id)) continue;
  const prev = curated.get(id) ?? {};
  const route = page.kind === "design-system" ? `/ds/${page.slug.replace(/^ds-/, "")}` : `/ui/${page.slug}`;
  const file = `src/boards/${page.file}`;
  const info = classify(file);
  entries.push({
    id,
    title: page.title,
    route,
    kind: page.kind,
    parent: page.kind === "secondary" ? id.replace(/\.[0-9]+[A-Z]?$/, "") : null,
    section: sectionFor(id),
    canvas: page.canvasName ?? null,
    subframe: {
      pageId: page.subframePageId,
      lastModifiedAt: page.lastModifiedAt ?? null,
      exportedAs: page.exportedFileName,
    },
    file,
    bytes: page.bytes,
    sha256: page.sha256,
    hydration: prev.hydrationOverride ?? info.hydration,
    ...(prev.pipeline ? { pipeline: prev.pipeline } : {}),
    handlers: info.handlers,
    interactive_primitives: info.primitives,
    components: componentInventory(id, file),
    ...measure(id, prev),
    journey: prev.journey ?? [],
    ...(prev.notes ? { notes: prev.notes } : {}),
  });
}

/* ------------------------------------------ inventory drift: doc vs Subframe --- */

const pulledIds = new Set(entries.map((e) => e.id));
const missing = [...docRows.entries()]
  .filter(([id]) => !pulledIds.has(id) && !/^UI-11\./.test(id))
  .map(([id, row]) => ({
    id,
    title: row.title,
    route: null,
    kind: "secondary",
    parent: row.parent,
    section: sectionFor(row.parent),
    canvas: null,
    subframe: null,
    file: null,
    bytes: 0,
    sha256: null,
    hydration: "static",
    status: "missing-source",
    parity: { desktop: null, mobile: null },
    components: [],
    journey: curated.get(id)?.journey ?? [],
    notes: "Listed as designed in HerStory UIs.md; no board exists in the Subframe file.",
  }));

/* doc surfaces absent from the doc's own §16 tables (e.g. UI-11S/C, 37.x shells) */
const extraFromDoc = [...sectionOf.keys()]
  .filter((id) => !pulledIds.has(id) && !missing.some((m) => m.id === id))
  .map((id) => ({
    id,
    title: id,
    route: null,
    kind: "primary",
    parent: null,
    section: sectionFor(id),
    canvas: null,
    subframe: null,
    file: null,
    bytes: 0,
    sha256: null,
    hydration: "static",
    // UI-11 and UI-37 are split into child boards, they are not missing.
    status: "represented",
    parity: { desktop: null, mobile: null },
    components: [],
    journey: [],
    notes: "Parent surface, realised by its child boards.",
  }));

/* ------------------------------------------------------------- ordering ------ */

const sortKey = (id) => {
  const m = /^UI-([0-9]+)(?:\.([0-9]+))?(?:\.[0-9]+)?([A-Z]?)$/.exec(id);
  if (!m) return [9999, 9999, id];
  return [Number(m[1]), m[2] ? Number(m[2]) : -1, m[3] ?? ""];
};
const all = [...entries, ...missing, ...extraFromDoc].sort((a, b) => {
  const ka = sortKey(a.id);
  const kb = sortKey(b.id);
  for (let i = 0; i < 3; i++) {
    if (ka[i] < kb[i]) return -1;
    if (ka[i] > kb[i]) return 1;
  }
  return 0;
});

let counts = {
  designed: entries.length,
  verified: 0,
  deviated: 0,
  failed: 0,
  pulled: 0,
  missing: 0,
  represented: 0,
};
for (const e of all) {
  if (e.status === "verified") counts.verified++;
  else if (e.status === "deviated") counts.deviated++;
  else if (e.status === "failed") counts.failed = (counts.failed ?? 0) + 1;
  else if (e.status === "pulled") counts.pulled++;
  else if (e.status === "missing-source") counts.missing++;
  else if (e.status === "represented") counts.represented++;
}

const out = {
  version: 1,
  generated_at: new Date().toISOString(),
  ...(Object.keys(signoffs).length ? { signoffs } : {}),
  ...(previous.roles ? { roles: previous.roles } : {}),
  ...(previous.kpg_pipeline ? { kpg_pipeline: previous.kpg_pipeline } : {}),
  ...(previous.workspaces ? { workspaces: previous.workspaces } : {}),
  project: { id: manifest.projectId, name: "HS - Design System" },
  inventory_reference: path.relative(root, DOC),
  theme: { tailwind: "tailwind.config.cjs", tokens: "src/ui/theme.css", source: "src/ui/tailwind.config.cjs" },
  viewports: [
    { name: "desktop", width: 1280, dsf: 2 },
    { name: "mobile", width: 390, dsf: 2 },
  ],
  counts,
  sections: [...sections.entries()].map(([num, s]) => ({ id: num, heading: s.heading, count: s.ids.length })),
  ui: all,
};

const rendered = YAML.stringify(out, { lineWidth: 100 });

if (process.argv.includes("--check")) {
  const before = fs.existsSync(OUT) ? YAML.parse(fs.readFileSync(OUT, "utf8")) : null;
  const strip = (o) => (o ? JSON.stringify({ ...o, generated_at: null }) : null);
  if (strip(before) === strip(out)) {
    console.log(`gen-yaml --check: uis.yaml is current (${all.length} surfaces)`);
    process.exit(0);
  }
  const stale = [];
  const prevById = new Map((before?.ui ?? []).map((u) => [u.id, u]));
  for (const entry of all) {
    const prev = prevById.get(entry.id);
    if (!prev) stale.push(`${entry.id}: new`);
    else if (prev.status !== entry.status) stale.push(`${entry.id}: ${prev.status} → ${entry.status}`);
    else if (JSON.stringify(prev.parity) !== JSON.stringify(entry.parity)) stale.push(`${entry.id}: parity`);
    else if (prev.sha256 !== entry.sha256) stale.push(`${entry.id}: sha`);
  }
  for (const id of prevById.keys()) if (!all.some((e) => e.id === id)) stale.push(`${id}: gone`);
  // Signed-off boards must not drift past their recorded baseline (§11 option 4).
  for (const [id, so] of Object.entries(signoffs)) {
    if (!so.baseline) continue;
    for (const vp of ["desktop", "mobile"]) {
      const base = so.baseline[vp];
      const cur = measured[`${id}@${vp}`]?.outside8 ?? measured[`${id}@${vp}`]?.ratio8;
      if (cur == null || base == null) continue;
      if (cur > base * 1.5 + 0.002) stale.push(`${id}@${vp}: signed-off baseline ${base} → ${cur}`);
    }
  }
  console.error(`gen-yaml --check: uis.yaml is stale (${stale.length} entries)`);
  for (const line of stale.slice(0, 40)) console.error(`  ${line}`);
  if (stale.length > 40) console.error(`  … ${stale.length - 40} more`);
  process.exit(1);
}

fs.writeFileSync(OUT, rendered);
console.log(
  `gen-yaml: ${all.length} surfaces (${counts.designed} pulled, ${counts.missing} missing-source) → uis.yaml`,
);
if (missing.length) console.log(`gen-yaml: missing-source → ${missing.map((m) => m.id).join(", ")}`);
