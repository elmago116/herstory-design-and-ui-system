#!/usr/bin/env node
/**
 * gen-labels.mjs — emit public/control-labels.json from uis.yaml.
 *
 * Boards are verbatim design exports: icon-only controls arrive without an
 * accessible name. The interaction runtime restores names at load time by
 * zipping the unnamed buttons in a surface against this list, in document order.
 * uis.yaml derives its component list from the same source order, so the zip is
 * deterministic; when the counts disagree the runtime refuses to guess and the
 * audit suite fails on the unnamed control instead.
 *
 *   npm run gen:labels
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inventory = YAML.parse(fs.readFileSync(path.join(root, "uis.yaml"), "utf8"));

/** Feather icon names are component identifiers, not verbs. Map the frequent ones. */
const VERBS = {
  PenLine: "Edit",
  Pencil: "Edit",
  Trash: "Delete",
  Trash2: "Delete",
  X: "Close",
  Copy: "Copy",
  Plus: "Add",
  Minus: "Remove",
  Search: "Search",
  Download: "Download",
  Upload: "Upload",
  ExternalLink: "Open externally",
  MoreHorizontal: "More actions",
  MoreVertical: "More actions",
  ChevronDown: "Expand",
  ChevronUp: "Collapse",
  RefreshCw: "Refresh",
  Eye: "View",
  EyeOff: "Hide",
  Settings: "Settings",
  Filter: "Filter",
  Check: "Confirm",
  Link: "Copy link",
  Play: "Run",
  Square: "Stop",
  RotateCcw: "Reset",
};

const words = (name) =>
  name
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .trim();

const labelOf = (name) => VERBS[name] ?? (name ? words(name) : "");

const labels = {};
let total = 0;
for (const surface of inventory.ui ?? []) {
  const names = (surface.components ?? [])
    .filter((component) => component.component === "IconButton")
    .map((component) => labelOf(component.name));
  if (!names.length) continue;
  labels[surface.id] = names;
  total += names.length;
}

const out = path.join(root, "public/control-labels.json");
fs.writeFileSync(out, `${JSON.stringify(labels, null, 1)}\n`);
console.log(
  `gen-labels: ${total} icon-button names across ${Object.keys(labels).length} surfaces → public/control-labels.json`,
);
