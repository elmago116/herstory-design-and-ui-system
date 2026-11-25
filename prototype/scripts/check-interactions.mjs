#!/usr/bin/env node
/**
 * check-interactions.mjs — validate public/interactions.yaml against uis.yaml.
 *
 * Errors: unknown surface, unknown target route, missing match, bad effect,
 * duplicate rule key. Warnings: control key not present in the surface inventory.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const interactionsPath = path.join(root, "public/interactions.yaml");
const inventoryPath = path.join(root, "uis.yaml");

if (!fs.existsSync(interactionsPath)) {
  console.error("check-interactions: public/interactions.yaml is missing");
  process.exit(1);
}

const interactions = YAML.parse(fs.readFileSync(interactionsPath, "utf8"));
const inventory = YAML.parse(fs.readFileSync(inventoryPath, "utf8"));
const VIRTUAL_SURFACES = new Set(["UI-START"]);
const surfaces = new Map(inventory.ui.map((entry) => [entry.id, entry]));
const routes = new Set(inventory.ui.map((entry) => entry.route).filter(Boolean));

const errors = [];
const warnings = [];
const seen = new Set();
let rules = 0;

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

    const key = `${surface}|${String(rule.match).toLowerCase()}|${rule.nth ?? 0}|${String(rule.scope ?? "").toLowerCase()}`;
    if (seen.has(key)) errors.push(`${where}: duplicate rule key`);
    seen.add(key);

    if (entry && rule.control && !components.has(rule.control)) {
      warnings.push(`${where}: control not in inventory (${rule.control})`);
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
  `check-interactions: ${rules} rules across ${Object.keys(interactions.surfaces ?? {}).length} surfaces; targets valid`,
);
