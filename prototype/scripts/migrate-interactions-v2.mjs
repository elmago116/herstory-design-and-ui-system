#!/usr/bin/env node
/**
 * migrate-interactions-v2.mjs — one-shot, idempotent migration to schema v2.
 *
 * v2 adds four optional rule keys used by the interaction runtime:
 *   carry      the outcome message survives the navigation the action triggers
 *   confirm    a dialog that must be accepted before a destructive action runs
 *   undo       a 10 s reversal offer after the action
 *   rowScoped  append ?row=<row key> to the destination
 *
 *   node scripts/migrate-interactions-v2.mjs          # write
 *   node scripts/migrate-interactions-v2.mjs --check  # exit 1 if not migrated
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const file = path.join(root, "public/interactions.yaml");
const original = fs.readFileSync(file, "utf8");

// Preserve the hand-written header comment block only; `version:` is emitted
// from the parsed document, so keeping the raw prefix would duplicate it.
function splitHeader(text) {
  const lines = text.split("\n");
  let index = 0;
  if (/^version:/.test(lines[0] ?? "")) index = 1;
  const collected = [];
  for (; index < lines.length; index++) {
    const line = lines[index];
    if (!line.startsWith("#") && line.trim() !== "") break;
    collected.push(line);
  }
  return collected.length ? `${collected.join("\n")}\n` : "";
}

const header = splitHeader(original);
const parsed = YAML.parse(original);
const inventory = YAML.parse(fs.readFileSync(path.join(root, "uis.yaml"), "utf8"));
const surfaceById = new Map((inventory.ui ?? []).map((surface) => [surface.id, surface]));

const CONFIRM = {
  "UI-05.1/Button:DeleteFiles": {
    title: "Delete files past the retention window?",
    body: "Files older than the active retention rule are removed from the staging bucket. This prototype simulates the deletion and keeps the data; the undo offer below is the pattern the product needs.",
    confirmLabel: "Delete files",
  },
  "UI-09/IconButton:Trash": {
    title: "Remove this source?",
    body: "The registered source and its upload are detached from the workspace. Re-uploading is the only way back.",
    confirmLabel: "Remove source",
  },
  "UI-12/Button:Remove#5": {
    title: "Remove this mapping rule?",
    body: "Records already mapped with this rule keep their current triples until the pipeline is re-run.",
    confirmLabel: "Remove rule",
  },
  "UI-40.1/Button:ClearHistory": {
    title: "Clear search history?",
    body: "Recent searches and suggestions are forgotten in this workspace. Saved views are not affected.",
    confirmLabel: "Clear history",
  },
};

let carried = 0;
let confirmed = 0;
let undoable = 0;
let rowScoped = 0;
const duplicateGroups = new Map();

for (const [surface, rules] of Object.entries(parsed.surfaces ?? {})) {
  // Label groups with a single unscoped rule cannot tell their rows apart.
  const counts = new Map();
  for (const component of surfaceById.get(surface)?.components ?? []) {
    const key = (component.name ?? "").toLowerCase().trim();
    if (key) counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  for (const rule of rules) {
    const name = String(rule.match ?? "").toLowerCase().trim();
    const groupKey = `${surface}|${name}`;
    if (!duplicateGroups.has(groupKey)) duplicateGroups.set(groupKey, []);
    duplicateGroups.get(groupKey).push(rule);
    if ((counts.get(name) ?? 0) > 1) rule.__duplicate = true;
  }

  for (const rule of rules) {
    const key = `${surface}/${rule.control ?? ""}`;
    if (rule.effect === "action" && rule.to && !rule.carry) {
      rule.carry = true;
      carried++;
    }
    if (rule.action === "destructive") {
      const spec = CONFIRM[key];
      if (!spec) {
        console.error(`migrate: no confirmation copy for ${key}`);
        process.exitCode = 1;
      } else if (!rule.confirm) {
        rule.confirm = spec;
        confirmed++;
      }
      if (rule.undo === undefined) {
        rule.undo = true;
        undoable++;
      }
    }
    if (rule.effect === "navigate" && rule.__duplicate && !rule.rowScoped && !rule.nth && !rule.scope) {
      rule.rowScoped = true;
      rowScoped++;
    }
    delete rule.__duplicate;
  }
}

parsed.version = 2;

const SCHEMA_NOTE = "# Schema v2 — see scripts/migrate-interactions-v2.mjs for the added keys.\n";
const body = YAML.stringify(parsed, { lineWidth: 0 });
const next = `${header}${header.includes("# Schema v2") ? "" : SCHEMA_NOTE}${body}`;

if (process.argv.includes("--check")) {
  if (original !== next) {
    console.error("migrate: public/interactions.yaml is not at schema v2");
    process.exit(1);
  }
  console.log("migrate: schema v2 already applied");
  process.exit(0);
}

if (original === next) {
  console.log("migrate: nothing to change");
} else {
  fs.writeFileSync(file, next);
  console.log(
    `migrate: version 2 — carry ${carried}, confirm ${confirmed}, undo ${undoable}, rowScoped ${rowScoped}`,
  );
}
