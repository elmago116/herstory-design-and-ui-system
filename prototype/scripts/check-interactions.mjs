#!/usr/bin/env node
/**
 * check-interactions.mjs — validate public/interactions.yaml against uis.yaml.
 *
 * Errors: unknown surface, unknown target route, missing match, bad effect,
 * duplicate rule key, unknown rule key, and the schema-v2 gates:
 *   I01 action + to without `carry`
 *   I02 destructive action without `confirm`
 *   I03 confirm without `undo` or `undoExempt`
 *   I04 navigate rule on a repeated label without nth/scope/rowScoped
 * Warnings: control key not present in the surface inventory, action rule on a
 * repeated label (same action for every row is allowed, but must be deliberate).
 *
 * Also reports instance coverage and, when HerStory/UI/gate/task-scripts.md
 * exists, whether every control named by a task script has a rule (I06).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const interactionsPath = path.join(root, "public/interactions.yaml");
const inventoryPath = path.join(root, "uis.yaml");
const taskScriptPath = path.join(root, "..", "gate", "task-scripts.md");

if (!fs.existsSync(interactionsPath)) {
  console.error("check-interactions: public/interactions.yaml is missing");
  process.exit(1);
}

const interactions = YAML.parse(fs.readFileSync(interactionsPath, "utf8"));
const inventory = YAML.parse(fs.readFileSync(inventoryPath, "utf8"));
const VIRTUAL_SURFACES = new Set(["UI-START"]);
const surfaces = new Map(inventory.ui.map((entry) => [entry.id, entry]));
const routes = new Set(inventory.ui.map((entry) => entry.route).filter(Boolean));

const RULE_KEYS = new Set([
  "control",
  "match",
  "nth",
  "scope",
  "effect",
  "action",
  "role",
  "to",
  "label",
  "carry",
  "confirm",
  "undo",
  "undoExempt",
  "rowScoped",
]);
const CONFIRM_KEYS = new Set(["title", "body", "confirmLabel"]);

const errors = [];
const warnings = [];
const seen = new Set();
let rules = 0;

const norm = (value) => String(value ?? "").replace(/\s+/g, " ").trim().toLowerCase();

function instanceIndex(entry, surface) {
  const counts = new Map();
  for (const component of entry?.components ?? []) {
    const key = norm(component.name);
    if (key) counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

for (const [surface, list] of Object.entries(interactions.surfaces ?? {})) {
  const entry = surfaces.get(surface);
  if (!entry && !VIRTUAL_SURFACES.has(surface)) {
    errors.push(`unknown surface ${surface}`);
    continue;
  }
  if (!Array.isArray(list)) {
    errors.push(`${surface}: expected a list of rules`);
    continue;
  }

  const counts = instanceIndex(entry, surface);
  const components = new Set(
    (entry?.components ?? []).map((component) =>
      component.key.startsWith(`${surface}/`)
        ? component.key.slice(surface.length + 1)
        : component.key,
    ),
  );

  for (const rule of list) {
    rules++;
    const where = `${surface} / ${rule.control ?? rule.match ?? "(no control)"}`;
    if (!rule.match || typeof rule.match !== "string") {
      errors.push(`${where}: missing string \`match\``);
    }
    for (const key of Object.keys(rule)) {
      if (!RULE_KEYS.has(key)) errors.push(`${where}: unknown rule key \`${key}\``);
    }
    if (!["navigate", "back", "action"].includes(rule.effect)) {
      errors.push(`${where}: effect must be navigate, back or action`);
    }
    if (rule.effect === "navigate" || rule.effect === "action") {
      if (!rule.to || !rule.to.startsWith("/")) {
        if (rule.effect === "navigate") errors.push(`${where}: navigate needs \`to\` starting with /`);
      } else if (!routes.has(rule.to)) errors.push(`${where}: target route not found: ${rule.to}`);
    }
    if (rule.effect === "action" && !rule.action) errors.push(`${where}: action needs \`action\``);
    if (rule.action === "selectRole" && !rule.role) errors.push(`${where}: selectRole needs \`role\``);
    if (rule.effect === "back" && rule.to) errors.push(`${where}: back must not define \`to\``);
    if (rule.nth !== undefined && (!Number.isInteger(rule.nth) || rule.nth < 1)) {
      errors.push(`${where}: \`nth\` must be a positive integer`);
    }

    /* ---------------------------------------------------------- I01–I04 -- */
    if (rule.effect === "action" && rule.to && !rule.carry) {
      errors.push(`${where}: I01 action navigates away; set \`carry: true\` so the outcome is visible`);
    }
    if (rule.action === "destructive" && !rule.confirm) {
      errors.push(`${where}: I02 destructive action needs a \`confirm\` block`);
    }
    if (rule.confirm) {
      if (typeof rule.confirm !== "object" || Array.isArray(rule.confirm)) {
        errors.push(`${where}: I02 \`confirm\` must be an object`);
      } else {
        for (const key of Object.keys(rule.confirm)) {
          if (!CONFIRM_KEYS.has(key)) errors.push(`${where}: unknown confirm key \`${key}\``);
        }
        if (!rule.confirm.title) errors.push(`${where}: I02 \`confirm.title\` is required`);
        if (!rule.undo && !rule.undoExempt) {
          errors.push(`${where}: I03 confirmation without \`undo: true\` (or \`undoExempt\` with a reason)`);
        }
      }
    }

    const repeated = (counts.get(norm(rule.match)) ?? 0) > 1;
    if (repeated && rule.effect === "navigate" && !rule.nth && !rule.scope && !rule.rowScoped) {
      errors.push(
        `${where}: I04 label repeats on ${surface}; navigate needs \`rowScoped\`, \`nth\` or \`scope\``,
      );
    }
    if (repeated && rule.effect === "action" && !rule.nth && !rule.scope && !rule.rowScoped) {
      warnings.push(`${where}: same action for every repeated label (intentional?)`);
    }

    const key = `${surface}|${String(rule.match).toLowerCase()}|${rule.nth ?? 0}|${String(rule.scope ?? "").toLowerCase()}`;
    if (seen.has(key)) errors.push(`${where}: duplicate rule key`);
    seen.add(key);

    if (entry && rule.control && !components.has(rule.control)) {
      warnings.push(`${where}: control not in inventory (${rule.control})`);
    }
  }
}

/* ----------------------------------------------------------- coverage ----- */

const perSurface = [];
let instances = 0;
let wiredByControl = 0;
let wiredReachable = 0;
for (const entry of inventory.ui) {
  const list = interactions.surfaces?.[entry.id] ?? [];
  const controls = new Set(list.map((rule) => rule.control).filter(Boolean));
  const labels = new Set(list.map((rule) => norm(rule.match)));
  const keys = (entry.components ?? []).map((component) =>
    component.key.startsWith(`${entry.id}/`) ? component.key.slice(entry.id.length + 1) : component.key,
  );
  let wired = 0;
  let reachable = 0;
  (entry.components ?? []).forEach((component, index) => {
    const byControl = controls.has(keys[index]);
    if (byControl) wired++;
    if (byControl || labels.has(norm(component.name))) reachable++;
  });
  instances += keys.length;
  wiredByControl += wired;
  wiredReachable += reachable;
  perSurface.push({ id: entry.id, keys: keys.length, wired, rules: list.length });
}

const pct = (part) => (instances ? ((part / instances) * 100).toFixed(1) : "0.0");

/* ------------------------------------------------------ task scripts ----- */

let taskChecked = 0;
let taskMissing = 0;
if (fs.existsSync(taskScriptPath)) {
  const text = fs.readFileSync(taskScriptPath, "utf8");
  const wanted = new Map(
    [...text.matchAll(/`?(UI-[0-9A-Z.]+)\/([A-Za-z]+:[^\s`|]+)`?/g)].map((match) => [
      `${match[1]}/${match[2]}`,
      { surface: match[1], control: match[2] },
    ]),
  );
  for (const want of wanted.values()) {
    taskChecked++;
    const list = interactions.surfaces?.[want.surface] ?? [];
    // Inventory keys disambiguate repeated components as `Button:View#4`; a task
    // script names the control, not the instance.
    const wired = list.some(
      (rule) =>
        rule.control === want.control ||
        rule.control?.startsWith(`${want.control}#`) ||
        (rule.control === undefined && rule.match === want.control.split(":").pop()),
    );
    if (!wired) {
      taskMissing++;
      errors.push(`I06 task script needs ${want.surface}/${want.control}, which has no rule`);
    }
  }
}

for (const warning of warnings) console.warn(`warning: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`error: ${error}`);
  console.error(`check-interactions: ${errors.length} error(s)`);
  process.exit(1);
}

console.log(
  `check-interactions: ${rules} rules across ${Object.keys(interactions.surfaces ?? {}).length} surfaces; targets valid; schema v${interactions.version ?? 1}`,
);
console.log(
  `coverage: ${wiredByControl}/${instances} instances keyed by control (${pct(wiredByControl)}%), ${wiredReachable}/${instances} reachable by label (${pct(wiredReachable)}%) — reported, not targeted`,
);
if (taskChecked) {
  console.log(`task scripts: ${taskChecked - taskMissing}/${taskChecked} controls wired`);
}
const thin = perSurface
  .filter((entry) => entry.keys > 0 && entry.wired === 0)
  .map((entry) => entry.id);
if (thin.length) console.log(`surfaces with no wired control (${thin.length}): ${thin.join(", ")}`);
