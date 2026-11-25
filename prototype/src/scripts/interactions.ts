import { parse } from "yaml";

type Effect = "navigate" | "back" | "action";

interface Rule {
  control?: string;
  match: string;
  nth?: number;
  scope?: string;
  effect: Effect;
  action?: string;
  role?: string;
  to?: string;
}

interface Config {
  version?: number;
  surfaces?: Record<string, Rule[]>;
}

type BatchStatus = "pending" | "staging" | "approved" | "published";

interface Store {
  version: 1;
  batches: Record<string, { status: BatchStatus }>;
  suggestions: Record<string, { status: "pending" | "accepted" }>;
  role?: string;
}

interface ActionResult {
  ok: boolean;
  message?: string;
}

const STORE_KEY = "herstory-prototype/v1";
const CONTROL_SELECTOR =
  "button, [role='button'], [role='menuitem'], [role='option'], a, [data-nav-item]";
const BATCH_ID = "staging-2026-11-02a";
const SUGGESTION_ID = "suggestion-1";

const clean = (value: string | null | undefined) =>
  (value ?? "").replace(/\s+/g, " ").trim().toLowerCase();

let config: Config | null = null;

function readStore(): Store {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Store;
      if (parsed?.version === 1 && parsed.batches && parsed.suggestions) return parsed;
    }
  } catch (error) {
    console.warn("[interactions] could not read state", error);
  }
  return {
    version: 1,
    batches: { [BATCH_ID]: { status: "pending" } },
    suggestions: { [SUGGESTION_ID]: { status: "pending" } },
  };
}

function writeStore(store: Store): void {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch (error) {
    console.warn("[interactions] could not save state", error);
  }
}

function toast(message: string, kind: "success" | "error" | "info"): void {
  let host = document.getElementById("herstory-toast-host");
  if (!host) {
    host = document.createElement("div");
    host.id = "herstory-toast-host";
    host.setAttribute("aria-live", "polite");
    host.style.cssText =
      "position:fixed;right:16px;bottom:16px;z-index:9999;display:flex;flex-direction:column;gap:8px;max-width:360px";
    document.body.append(host);
  }
  const item = document.createElement("div");
  item.textContent = message;
  item.setAttribute("role", "status");
  const background = kind === "success" ? "#1f2937" : kind === "info" ? "#334155" : "#b42318";
  item.style.cssText = [
    "padding:10px 14px",
    "border-radius:8px",
    "font:14px/1.4 system-ui,sans-serif",
    "color:#fff",
    `background:${background}`,
    "box-shadow:0 8px 24px rgba(0,0,0,.18)",
    "opacity:1",
  ].join(";");
  host.append(item);
  window.setTimeout(() => item.remove(), 3800);
}

const explained = new Set<string>();

/**
 * A control without a rule is still a real control. Say so once per label so a
 * reviewer does not mistake a visual-parity artefact for a broken click, and
 * point at the coverage page for the full list.
 */
function explainMissing(surface: string, control: HTMLElement): void {
  if (document.documentElement.hasAttribute("data-shots")) return;
  if (control.closest(".proto-nav, .general-nav, .pipeline-flow")) return;
  if (control.matches("[role='option'], [role='menuitem'], [role='tab'], [aria-haspopup], [aria-disabled='true'], [disabled]")) return;
  if (control instanceof HTMLAnchorElement && control.getAttribute("href") && control.getAttribute("href") !== "#") return;
  const label =
    clean(control.getAttribute("aria-label")) ||
    clean(control.getAttribute("data-match")) ||
    clean(control.textContent);
  if (!label || explained.has(`${surface}:${label}`)) return;
  explained.add(`${surface}:${label}`);
  toast(
    `Prototype: “${control.getAttribute("aria-label") ?? control.textContent?.trim()}” is present for visual parity but has no wired destination. Coverage: /prototype`,
    "info",
  );
}

const actions: Record<string, (store: Store, rule: Rule) => ActionResult> = {
  selectRole: (store, rule) => {
    if (!rule.role) return { ok: false, message: "No role defined" };
    store.role = rule.role;
    try {
      localStorage.setItem("herstory-role", rule.role);
    } catch {
      /* role still lands in the action store */
    }
    return { ok: true, message: `Entering as ${rule.role.replaceAll("-", " ")}` };
  },
  approveBatch: (store) => {
    store.batches[BATCH_ID].status = "approved";
    return { ok: true, message: "Batch approved" };
  },
  publishBatch: (store) => {
    const batch = store.batches[BATCH_ID];
    if (batch.status !== "approved") {
      return { ok: false, message: "Approve the batch before publishing" };
    }
    batch.status = "published";
    return { ok: true, message: "Published to Wikidata" };
  },
  sendToStaging: (store) => {
    store.batches[BATCH_ID].status = "staging";
    return { ok: true, message: "Sent to staging review" };
  },
  acceptSuggestion: (store) => {
    store.suggestions[SUGGESTION_ID].status = "accepted";
    return { ok: true, message: "Suggestion accepted" };
  },
  confirm: () => ({
    ok: true,
    message: "Saved in this prototype — no backend is connected.",
  }),
  simulate: () => ({
    ok: true,
    message: "Action simulated; the prototype has no live service.",
  }),
  download: () => ({
    ok: true,
    message: "Export is visual only — no file service in this prototype.",
  }),
  external: () => ({
    ok: true,
    message: "External page is outside this prototype.",
  }),
  destructive: () => ({
    ok: true,
    message: "Destructive action simulated; data left unchanged.",
  }),
  copy: () => {
    try {
      void navigator.clipboard?.writeText("HerStory prototype");
    } catch {
      /* clipboard permission is not required for the demo */
    }
    return { ok: true, message: "Copied prototype text to the clipboard." };
  },
};

function runAction(rule: Rule): boolean {
  if (!rule.action) {
    toast("This interaction has no action defined", "error");
    return false;
  }
  const action = actions[rule.action];
  if (!action) {
    toast(`Unknown action: ${rule.action}`, "error");
    return false;
  }
  const store = readStore();
  const result = action(store, rule);
  if (result.ok) writeStore(store);
  if (result.message) toast(result.message, result.ok ? "success" : "error");
  return result.ok;
}

function surfaceOf(element: Element): string | null {
  const root = element.closest("[data-board-root]");
  if (root) return root.getAttribute("data-ui-id");
  const portal = element.closest(
    "[data-radix-popper-content-wrapper], [role='menu'], [role='listbox'], [role='dialog']",
  );
  return portal
    ? document.querySelector('meta[name="ui-id"]')?.getAttribute("content") ?? null
    : null;
}

function findRule(surface: string, control: HTMLElement, rules: Rule[]): Rule | null {
  const text = clean(control.getAttribute("data-match") ?? control.textContent);
  if (!text) return null;

  const sameLabel = Array.from(
    document.querySelectorAll<HTMLElement>(CONTROL_SELECTOR),
  ).filter(
    (element) =>
      surfaceOf(element) === surface &&
      clean(element.getAttribute("data-match") ?? element.textContent) === text,
  );
  const index = sameLabel.indexOf(control) + 1;
  if (index < 1) return null;

  const scoped = rules.filter((rule) => {
    if (clean(rule.match) !== text) return false;
    if (!rule.scope) return true;
    const container = control.closest("tr, [role='row'], [data-layer-name]");
    return clean(container?.textContent).includes(clean(rule.scope));
  });

  return scoped.find((rule) => rule.nth === index) ?? scoped.find((rule) => !rule.nth) ?? null;
}

function navigate(rule: Rule): void {
  if (rule.effect === "back") {
    if (window.history.length > 1) window.history.back();
    else window.location.assign("/");
    return;
  }
  if (!rule.to || !rule.to.startsWith("/")) {
    console.warn("[interactions] rule has no valid target", rule);
    return;
  }
  window.location.assign(rule.to);
}

function onClick(event: MouseEvent): void {
  if (!config || event.defaultPrevented) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const target = event.target;
  if (!(target instanceof Element)) return;

  const control = target.closest<HTMLElement>(CONTROL_SELECTOR);
  if (!control) return;

  const surface = surfaceOf(control);
  if (!surface) return;

  const rules = config.surfaces?.[surface];
  if (!rules?.length) {
    explainMissing(surface, control);
    return;
  }

  const rule = findRule(surface, control, rules);
  if (!rule) {
    explainMissing(surface, control);
    return;
  }

  event.preventDefault();
  event.stopImmediatePropagation();
  if (rule.effect === "action" && !runAction(rule)) return;
  if (rule.effect === "back" || rule.effect === "navigate" || rule.to) navigate(rule);
}

/**
 * Boards ship controlled inputs (`value=""` + a no-op onChange), so typing is
 * reset by React the moment a key lands. The prototype has no data model, so
 * the controlled binding is dead weight: swap the node for a clone without the
 * `value` attribute, making it uncontrolled and usable. Radix Select triggers
 * are left alone (their menus open; selection is demo-only).
 */
function primePrototypeDom(): void {
  // The role shells (UI-37.5/6/7) draw their sidebar from NavItem divs, which
  // are not links. Mark them so the YAML can address them by visible label.
  document.querySelectorAll<HTMLElement>("[data-board-root] nav div").forEach((el) => {
    const className = typeof el.className === "string" ? el.className : "";
    if (!className.includes("group/2713e17b")) return;
    const label = el.querySelector("span.line-clamp-1")?.textContent?.trim() || el.textContent?.trim();
    if (!label) return;
    el.dataset.navItem = "true";
    el.dataset.match = label;
    el.style.cursor = "pointer";
  });

  // The board's own PipelineStepper (UI-09) renders divs, not links. Mark its
  // six labelled steps so the same YAML labels navigate; skip the ProcessStepper
  // root, which wraps and has its own sub-process labels.
  const PIPELINE_LABELS: Record<string, true> = {
    "Source registration": true,
    Ingestion: true,
    Ontology: true,
    Mapping: true,
    Validation: true,
    Publish: true,
  };
  document.querySelectorAll<HTMLElement>("[data-board-root] div").forEach((root) => {
    const className = typeof root.className === "string" ? root.className : "";
    if (!className.includes("shadow-sm") || !className.includes("rounded-lg") || className.includes("flex-wrap")) return;
    for (const span of root.querySelectorAll("span")) {
      const label = span.textContent?.trim() ?? "";
      if (!PIPELINE_LABELS[label]) continue;
      const step = span.parentElement;
      if (!step || step === root) continue;
      step.dataset.navItem = "true";
      step.dataset.match = label;
      step.style.cursor = "pointer";
    }
  });

  const targets = [
    ...document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      'input[value]:not([data-unlocked]), textarea:not([data-unlocked])',
    ),
  ];
  for (const el of targets) {
    if (el.closest("#general-nav") || el.closest(".proto-nav")) continue;
    const clone = el.cloneNode(true) as typeof el;
    clone.removeAttribute("value");
    el.value = el.value; // keep any prefill (value prop may not be serialised)
    clone.value = el.value;
    clone.dataset.unlocked = "true";
    el.replaceWith(clone);
  }
}

async function load(): Promise<void> {
  document.documentElement.dataset.interactions = "loading";
  try {
    const response = await fetch("/interactions.yaml", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const parsed = parse(await response.text()) as Config;
    if (!parsed || typeof parsed !== "object" || !parsed.surfaces) {
      throw new Error("missing `surfaces` map");
    }
    config = parsed;
    document.documentElement.dataset.interactions = "ready";
    // Islands hydrate after the initial render; wait a beat before unlocking.
    window.setTimeout(primePrototypeDom, 250);
  } catch (error) {
    document.documentElement.dataset.interactions = "error";
    console.warn("[interactions] could not load /interactions.yaml", error);
  }
}

document.addEventListener("click", onClick, true);
void load();
