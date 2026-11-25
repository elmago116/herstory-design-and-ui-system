import { parse } from "yaml";

type Effect = "navigate" | "back" | "action";

interface ConfirmSpec {
  title: string;
  body?: string;
  confirmLabel?: string;
}

interface Rule {
  control?: string;
  match: string;
  nth?: number;
  scope?: string;
  effect: Effect;
  action?: string;
  role?: string;
  to?: string;
  /** human label for the control; used as accessible name and dialog/undo copy */
  label?: string;
  /** carry the outcome message across the navigation that follows the action */
  carry?: boolean;
  /** require confirmation before the action runs */
  confirm?: ConfirmSpec;
  /** offer a time-boxed undo after the action */
  undo?: boolean;
  undoExempt?: string;
  /** append ?row=<row key> to the destination */
  rowScoped?: boolean;
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
  /** proof that a simulated destructive action ran, so undo is observable */
  destructiveRuns?: number;
}

interface ActionResult {
  ok: boolean;
  message?: string;
}

interface Flash {
  kind: "success" | "error" | "info";
  message: string;
  at: number;
}

const STORE_KEY = "herstory-prototype/v1";
const FLASH_KEY = "herstory-flash";
const UNDO_KEY = "herstory-undo";
const DRAFT_PREFIX = "herstory-draft:";
const CONTROL_SELECTOR =
  "button, [role='button'], [role='menuitem'], [role='option'], a, [data-nav-item]";
const BATCH_ID = "staging-2026-11-02a";
const SUGGESTION_ID = "suggestion-1";
const UNDO_MS = 10_000;
const DRAFT_MS = 400;

const shots = () => document.documentElement.hasAttribute("data-shots");
const norm = (value: string | null | undefined) =>
  (value ?? "").replace(/\s+/g, " ").trim().toLowerCase();
const raw = (value: string | null | undefined) =>
  (value ?? "").replace(/\s+/g, " ").trim();

let config: Config | null = null;
let labels: Record<string, string[]> | null = null;

/* ------------------------------------------------------------------ store -- */

function readStore(): Store {
  try {
    const stored = localStorage.getItem(STORE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Store;
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

/* --------------------------------------------------------------------- ui -- */

interface ToastOptions {
  actionLabel?: string;
  onAction?: () => void;
  durationMs?: number;
}

function toastHost(): HTMLElement {
  let host = document.getElementById("herstory-toast-host");
  if (!host) {
    host = document.createElement("div");
    host.id = "herstory-toast-host";
    host.setAttribute("aria-live", "polite");
    host.style.cssText =
      "position:fixed;right:16px;bottom:16px;z-index:9999;display:flex;flex-direction:column;gap:8px;max-width:380px";
    document.body.append(host);
  }
  return host;
}

function toast(
  message: string,
  kind: "success" | "error" | "info",
  options: ToastOptions = {},
): void {
  const host = toastHost();
  const item = document.createElement("div");
  item.setAttribute("role", "status");
  item.style.cssText = [
    "display:flex",
    "align-items:center",
    "gap:12px",
    "padding:10px 14px",
    "border-radius:8px",
    "font:14px/1.4 system-ui,sans-serif",
    "color:#fff",
    `background:${kind === "success" ? "#1f2937" : kind === "info" ? "#334155" : "#b42318"}`,
    "box-shadow:0 8px 24px rgba(0,0,0,.18)",
  ].join(";");

  const text = document.createElement("span");
  text.textContent = message;
  item.append(text);

  if (options.actionLabel && options.onAction) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = options.actionLabel;
    button.style.cssText =
      "background:transparent;border:1px solid rgba(255,255,255,.45);color:#fff;border-radius:6px;padding:2px 10px;font:600 13px/1.4 system-ui,sans-serif;cursor:pointer";
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      item.remove();
      options.onAction?.();
    });
    item.append(button);
  }

  host.append(item);
  window.setTimeout(() => item.remove(), options.durationMs ?? 3800);
}

/**
 * Banner used for two things the toast cannot do: a message that must survive a
 * navigation (flash), and a state the user must not miss (loader failure).
 * Lives outside [data-board-root] and is suppressed in parity shots.
 */
function banner(
  kind: "success" | "error" | "info",
  message: string,
  options: { persistent?: boolean; retry?: boolean } = {},
): HTMLElement | null {
  if (shots()) return null;
  document.getElementById("herstory-banner")?.remove();
  const element = document.createElement("div");
  element.id = "herstory-banner";
  element.setAttribute("role", kind === "error" ? "alert" : "status");
  element.style.cssText = [
    "position:fixed",
    "left:50%",
    "top:12px",
    "transform:translateX(-50%)",
    "z-index:9998",
    "display:flex",
    "align-items:center",
    "gap:12px",
    "max-width:min(640px,calc(100vw - 32px))",
    "padding:10px 14px",
    "border-radius:8px",
    "font:14px/1.4 system-ui,sans-serif",
    "color:#fff",
    `background:${kind === "error" ? "#b42318" : kind === "success" ? "#1f2937" : "#334155"}`,
    "box-shadow:0 8px 24px rgba(0,0,0,.18)",
  ].join(";");

  const text = document.createElement("span");
  text.textContent = message;
  element.append(text);

  if (options.retry) {
    const retry = document.createElement("button");
    retry.type = "button";
    retry.textContent = "Retry";
    retry.style.cssText =
      "background:transparent;border:1px solid rgba(255,255,255,.45);color:#fff;border-radius:6px;padding:2px 10px;font:600 13px/1.4 system-ui,sans-serif;cursor:pointer";
    retry.addEventListener("click", () => window.location.reload());
    element.append(retry);
  }

  const dismiss = document.createElement("button");
  dismiss.type = "button";
  dismiss.textContent = "×";
  dismiss.setAttribute("aria-label", "Dismiss message");
  dismiss.style.cssText =
    "background:transparent;border:none;color:#fff;font:16px/1 system-ui,sans-serif;cursor:pointer;padding:2px 4px";
  dismiss.addEventListener("click", () => element.remove());
  element.append(dismiss);

  document.body.append(element);
  if (!options.persistent) window.setTimeout(() => element.remove(), 5000);
  return element;
}

/* ------------------------------------------------------------------ flash -- */

function writeFlash(flash: Flash): void {
  try {
    sessionStorage.setItem(FLASH_KEY, JSON.stringify(flash));
  } catch {
    /* message is a nicety, never a requirement for navigation */
  }
}

function readFlash(): Flash | null {
  try {
    const stored = sessionStorage.getItem(FLASH_KEY);
    if (!stored) return null;
    sessionStorage.removeItem(FLASH_KEY);
    const parsed = JSON.parse(stored) as Flash;
    if (!parsed?.message) return null;
    // stale flashes from an abandoned tab are not worth showing
    if (typeof parsed.at === "number" && Date.now() - parsed.at > 5 * 60_000) return null;
    return parsed;
  } catch {
    return null;
  }
}

/* --------------------------------------------------------------- overlays -- */

let dialogOpen = false;

function confirmDialog(
  spec: ConfirmSpec,
  rule: Rule,
  onConfirm: () => void,
): void {
  if (shots()) {
    onConfirm();
    return;
  }
  if (dialogOpen) return;
  dialogOpen = true;

  const previouslyFocused = document.activeElement as HTMLElement | null;
  const backdrop = document.createElement("div");
  backdrop.className = "herstory-confirm";
  backdrop.style.cssText =
    "position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(15,23,42,.45)";

  const panel = document.createElement("div");
  panel.setAttribute("role", "alertdialog");
  panel.setAttribute("aria-modal", "true");
  panel.setAttribute("aria-labelledby", "herstory-confirm-title");
  panel.style.cssText =
    "width:min(480px,100%);background:#fff;color:#0f172a;border-radius:12px;padding:20px 22px;box-shadow:0 24px 64px rgba(15,23,42,.28);font:14px/1.5 system-ui,sans-serif";

  const title = document.createElement("h2");
  title.id = "herstory-confirm-title";
  title.textContent = spec.title;
  title.style.cssText = "margin:0 0 8px;font:600 17px/1.35 system-ui,sans-serif";

  panel.append(title);
  if (spec.body) {
    const body = document.createElement("p");
    body.textContent = spec.body;
    body.style.cssText = "margin:0 0 18px;color:#334155";
    panel.append(body);
  }

  const actions = document.createElement("div");
  actions.style.cssText = "display:flex;justify-content:flex-end;gap:8px";

  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = "Cancel";
  cancel.style.cssText =
    "padding:8px 14px;border-radius:8px;border:1px solid #cbd5e1;background:#fff;font:600 13px system-ui,sans-serif;cursor:pointer";

  const confirm = document.createElement("button");
  confirm.type = "button";
  confirm.textContent = spec.confirmLabel ?? "Confirm";
  confirm.style.cssText =
    "padding:8px 14px;border-radius:8px;border:none;background:#b42318;color:#fff;font:600 13px system-ui,sans-serif;cursor:pointer";

  const close = (confirmed: boolean) => {
    backdrop.remove();
    dialogOpen = false;
    document.removeEventListener("keydown", onKey, true);
    previouslyFocused?.focus?.();
    if (confirmed) onConfirm();
  };

  function onKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      event.preventDefault();
      close(false);
    }
    if (event.key === "Tab") {
      const focusables = [cancel, confirm];
      const index = focusables.indexOf(document.activeElement as HTMLButtonElement);
      event.preventDefault();
      const next = event.shiftKey ? index - 1 : index + 1;
      focusables[(next + focusables.length) % focusables.length].focus();
    }
  }

  cancel.addEventListener("click", () => close(false));
  confirm.addEventListener("click", () => close(true));
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) close(false);
  });
  document.addEventListener("keydown", onKey, true);

  actions.append(cancel, confirm);
  panel.append(actions);
  backdrop.append(panel);
  document.body.append(backdrop);
  confirm.focus();

  // The label is used by the audit suite and by screen readers on the trigger.
  panel.dataset.rule = rule.control ?? rule.match;
}

/* ------------------------------------------------------------------ undo -- */

interface UndoEntry {
  before: Store;
  message: string;
  timer: number;
}

let pendingUndo: UndoEntry | null = null;

function revert(): void {
  try {
    const stored = sessionStorage.getItem(UNDO_KEY);
    if (!stored) return;
    sessionStorage.removeItem(UNDO_KEY);
    const entry = JSON.parse(stored) as { before: Store; at: number };
    if (Date.now() - entry.at > UNDO_MS) return;
    writeStore(entry.before);
    toast("Change reverted", "info");
  } catch {
    /* nothing to revert */
  }
}

/**
 * The reversal offer has to outlive the navigation that follows the action,
 * otherwise it is unreachable. When the rule navigates, the snapshot travels
 * with it in sessionStorage and the destination offers the same undo.
 */
function offerUndo(before: Store, message: string, carry: boolean): void {
  if (carry) {
    try {
      sessionStorage.setItem(UNDO_KEY, JSON.stringify({ before, at: Date.now() }));
    } catch {
      /* undo is a nicety; the action still ran */
    }
    return;
  }
  if (pendingUndo) window.clearTimeout(pendingUndo.timer);
  const entry: UndoEntry = { before, message, timer: 0 };
  entry.timer = window.setTimeout(() => {
    if (pendingUndo === entry) pendingUndo = null;
  }, UNDO_MS);
  pendingUndo = entry;
  toast(message, "success", {
    actionLabel: "Undo",
    durationMs: UNDO_MS,
    onAction: () => {
      writeStore(entry.before);
      pendingUndo = null;
      window.clearTimeout(entry.timer);
      toast("Change reverted", "info");
    },
  });
}

function announceUndo(): void {
  try {
    const stored = sessionStorage.getItem(UNDO_KEY);
    if (!stored) return;
    const entry = JSON.parse(stored) as { before: Store; at: number };
    if (Date.now() - entry.at > UNDO_MS) {
      sessionStorage.removeItem(UNDO_KEY);
      return;
    }
    window.setTimeout(
      () =>
        toast("Action applied — undo within 10 s", "success", {
          actionLabel: "Undo",
          durationMs: Math.max(1500, UNDO_MS - (Date.now() - entry.at)),
          onAction: revert,
        }),
      400,
    );
  } catch {
    /* ignore malformed snapshots */
  }
}

/* ----------------------------------------------------------------- labels -- */

async function loadLabels(): Promise<void> {
  try {
    const response = await fetch("/control-labels.json", { cache: "no-store" });
    if (!response.ok) return;
    labels = (await response.json()) as Record<string, string[]>;
  } catch {
    labels = null;
  }
}

/**
 * Boards are verbatim design exports: icon-only controls arrive without a
 * name. The inventory (`uis.yaml` → `/control-labels.json`) is generated from
 * the same source in document order, so a positional zip is deterministic.
 * When the counts disagree the zip is skipped rather than guessed, and the
 * audit gate fails so the drift is visible.
 */
function labelUnnamedControls(surface: string): void {
  const root =
    document.querySelector(`[data-board-root][data-ui-id='${surface}']`) ??
    document.querySelector("[data-board-root]");
  if (!root) return;
  const expected = labels?.[surface] ?? [];
  const unnamed = Array.from(root.querySelectorAll<HTMLButtonElement>("button")).filter(
    (button) => !raw(button.getAttribute("aria-label")) && !raw(button.textContent) && !button.getAttribute("title"),
  );
  if (!unnamed.length) return;
  if (expected.length !== unnamed.length) {
    console.warn(
      `[interactions] label inventory mismatch on ${surface}: ${unnamed.length} unnamed buttons, ${expected.length} labels`,
    );
    unnamed.forEach((button, index) => {
      if (!button.getAttribute("aria-label")) button.setAttribute("aria-label", `Control ${index + 1}`);
    });
    return;
  }
  unnamed.forEach((button, index) => {
    const label = expected[index];
    if (label) button.setAttribute("aria-label", label);
  });
}

/* ---------------------------------------------------------------- actions -- */

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
  destructive: (store) => {
    store.destructiveRuns = (store.destructiveRuns ?? 0) + 1;
    return { ok: true, message: "Destructive action simulated — use Undo within 10 s to reverse it." };
  },
  copy: () => {
    try {
      void navigator.clipboard?.writeText("HerStory prototype");
    } catch {
      /* clipboard permission is not required for the demo */
    }
    return { ok: true, message: "Copied prototype text to the clipboard." };
  },
};

const SAVE_ACTIONS: Record<string, true> = {
  confirm: true,
  approveBatch: true,
  publishBatch: true,
  acceptSuggestion: true,
  sendToStaging: true,
};

function runAction(rule: Rule): ActionResult | null {
  if (!rule.action) {
    toast("This interaction has no action defined", "error");
    return null;
  }
  const action = actions[rule.action];
  if (!action) {
    toast(`Unknown action: ${rule.action}`, "error");
    return null;
  }
  const store = readStore();
  const before: Store = JSON.parse(JSON.stringify(store)) as Store;
  const result = action(store, rule);
  if (result.ok) {
    writeStore(store);
    if (SAVE_ACTIONS[rule.action]) clearDraft(window.location.pathname);
    if (rule.undo) offerUndo(before, result.message ?? "Change applied", Boolean(rule.to));
    else if (result.message) toast(result.message, "success");
  } else if (result.message) {
    toast(result.message, "error");
  }
  return result;
}

/* --------------------------------------------------------------- matching -- */

function surfaceOf(element: Element): string | null {
  const root = element.closest("[data-board-root]");
  if (root) return root.getAttribute("data-ui-id");
  const portal = element.closest(
    "[data-radix-popper-content-wrapper], [role='menu'], [role='listbox'], [role='dialog']",
  );
  return portal
    ? (document.querySelector('meta[name="ui-id"]')?.getAttribute("content") ?? null)
    : null;
}

function findRule(surface: string, control: HTMLElement, rules: Rule[]): Rule | null {
  const text = norm(control.getAttribute("data-match") ?? control.getAttribute("aria-label") ?? control.textContent);
  if (!text) return null;

  const sameLabel = Array.from(document.querySelectorAll<HTMLElement>(CONTROL_SELECTOR)).filter(
    (element) =>
      surfaceOf(element) === surface &&
      norm(element.getAttribute("data-match") ?? element.getAttribute("aria-label") ?? element.textContent) === text,
  );
  const index = sameLabel.indexOf(control) + 1;
  if (index < 1) return null;

  const scoped = rules.filter((rule) => {
    if (norm(rule.match) !== text) return false;
    if (!rule.scope) return true;
    const container = control.closest("tr, [role='row'], [data-layer-name]");
    return norm(container?.textContent).includes(norm(rule.scope));
  });

  return scoped.find((rule) => rule.nth === index) ?? scoped.find((rule) => !rule.nth) ?? null;
}

function rowKeyOf(control: HTMLElement): string | null {
  const row = control.closest("tr, [role='row'], [data-layer-name]");
  if (!row) return null;
  const cell = row.querySelector("td, th, [data-cell]") ?? row;
  const text = raw(cell.textContent).slice(0, 80);
  return text || null;
}

const explainedOnce = new Set<string>();

/**
 * A control without a rule is still a real control. Say so once per label so a
 * reviewer does not mistake a visual-parity artefact for a broken click, and
 * point at the coverage page for the full list.
 */
function explainMissing(surface: string, control: HTMLElement): void {
  if (shots()) return;
  if (control.closest(".proto-nav, .general-nav, .pipeline-flow")) return;
  if (control.matches("[role='option'], [role='menuitem'], [role='tab'], [aria-haspopup], [aria-disabled='true'], [disabled]")) return;
  if (control instanceof HTMLAnchorElement && control.getAttribute("href") && control.getAttribute("href") !== "#") return;
  const label =
    raw(control.getAttribute("aria-label")) ||
    raw(control.getAttribute("data-match")) ||
    raw(control.textContent);
  const key = `${surface}:${label || "(unnamed)"}`;
  if (explainedOnce.has(key)) return;
  explainedOnce.add(key);
  toast(
    label
      ? `Prototype: “${label}” is present for visual parity but has no wired destination. Coverage: /prototype`
      : `Prototype: this control has no accessible name and no wired destination (${surface}). Coverage: /prototype`,
    "info",
  );
}

/* ------------------------------------------------------------- navigation -- */

function navigate(rule: Rule, control?: HTMLElement): void {
  if (rule.effect === "back") {
    if (window.history.length > 1) window.history.back();
    else window.location.assign("/");
    return;
  }
  if (!rule.to || !rule.to.startsWith("/")) {
    console.warn("[interactions] rule has no valid target", rule);
    return;
  }

  let destination = rule.to;
  if (rule.rowScoped && control) {
    const key = rowKeyOf(control);
    if (key) {
      const separator = destination.includes("?") ? "&" : "?";
      destination += `${separator}row=${encodeURIComponent(key)}`;
    }
  }
  window.location.assign(destination);
}

/* --------------------------------------------------------------- controls -- */

function perform(rule: Rule, control: HTMLElement): void {
  if (rule.effect === "action") {
    const result = runAction(rule);
    if (!result?.ok) return;
    if (rule.to) {
      if (rule.carry && result.message) writeFlash({ kind: "success", message: result.message, at: Date.now() });
      navigate(rule, control);
    }
    return;
  }
  navigate(rule, control);
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

  if (rule.effect === "action" && rule.confirm) {
    confirmDialog(rule.confirm, rule, () => perform(rule, control));
    return;
  }
  perform(rule, control);
}

/* ----------------------------------------------------------------- drafts -- */

function draftKey(pathname: string): string {
  return `${DRAFT_PREFIX}${pathname}`;
}

function draftFields(): HTMLInputElement[] {
  return Array.from(
    document.querySelectorAll<HTMLInputElement>(
      "[data-board-root] input, [data-board-root] textarea",
    ),
  ).filter((field) => field.type !== "hidden" && field.type !== "checkbox" && field.type !== "radio");
}

function saveDraft(pathname: string): void {
  const fields = draftFields();
  if (!fields.length) return;
  const values = fields.map((field) => field.value);
  if (values.every((value) => !value)) {
    try {
      sessionStorage.removeItem(draftKey(pathname));
    } catch {
      /* storage may be unavailable; drafts are a convenience */
    }
    return;
  }
  try {
    sessionStorage.setItem(draftKey(pathname), JSON.stringify(values));
  } catch {
    /* ignore quota/private-mode failures */
  }
}

function clearDraft(pathname: string): void {
  try {
    sessionStorage.removeItem(draftKey(pathname));
  } catch {
    /* ignore */
  }
}

function restoreDraft(pathname: string): void {
  let values: string[] | null = null;
  try {
    const stored = sessionStorage.getItem(draftKey(pathname));
    values = stored ? (JSON.parse(stored) as string[]) : null;
  } catch {
    values = null;
  }
  if (!values?.length) return;
  const fields = draftFields();
  if (fields.length !== values.length) return;
  let restored = 0;
  fields.forEach((field, index) => {
    if (!values?.[index]) return;
    field.value = values[index];
    restored++;
  });
  if (!restored || shots()) return;

  const strip = document.createElement("div");
  strip.id = "herstory-draft-strip";
  strip.style.cssText =
    "display:flex;align-items:center;gap:12px;margin:0 0 12px;padding:8px 12px;border-radius:8px;background:#eef2ff;color:#312e81;font:13px/1.4 system-ui,sans-serif";
  const text = document.createElement("span");
  text.textContent = "Draft restored from this session.";
  const discard = document.createElement("button");
  discard.type = "button";
  discard.textContent = "Discard draft";
  discard.style.cssText =
    "background:transparent;border:1px solid #a5b4fc;border-radius:6px;padding:2px 10px;font:600 12px system-ui,sans-serif;color:#312e81;cursor:pointer";
  discard.addEventListener("click", () => {
    fields.forEach((field) => {
      field.value = "";
    });
    clearDraft(pathname);
    strip.remove();
  });
  strip.append(text, discard);
  const board = document.querySelector("[data-board-root]");
  board?.parentElement?.insertBefore(strip, board);
}

/* ------------------------------------------------------------ row context -- */

function renderRowContext(): void {
  const row = new URL(window.location.href).searchParams.get("row");
  if (!row || shots()) return;
  const board = document.querySelector("[data-board-root]");
  if (!board?.parentElement) return;
  const strip = document.createElement("div");
  strip.id = "herstory-row-context";
  strip.setAttribute("aria-label", "Row context");
  strip.style.cssText =
    "display:flex;align-items:center;gap:12px;margin:0 0 12px;padding:8px 12px;border-radius:8px;background:#f1f5f9;color:#0f172a;font:13px/1.4 system-ui,sans-serif";
  const label = document.createElement("span");
  label.innerHTML = "";
  label.append(document.createTextNode("Viewing: "));
  const strong = document.createElement("strong");
  strong.textContent = row;
  label.append(strong);
  const clear = document.createElement("a");
  clear.href = window.location.pathname;
  clear.textContent = "Clear";
  clear.style.cssText = "margin-left:auto;color:#1d4ed8;text-decoration:underline";
  strip.append(label, clear);
  board.parentElement.insertBefore(strip, board);
}

/* --------------------------------------------------------------- priming -- */

const PIPELINE_LABELS: Record<string, true> = {
  "Source registration": true,
  Ingestion: true,
  Ontology: true,
  Mapping: true,
  Validation: true,
  Publish: true,
};

function makeFocusable(element: HTMLElement, label: string): void {
  element.dataset.navItem = "true";
  element.dataset.match = label;
  element.style.cursor = "pointer";
  if (!element.hasAttribute("role")) element.setAttribute("role", "link");
  if (!element.hasAttribute("tabindex")) element.setAttribute("tabindex", "0");
  if (!element.hasAttribute("aria-label")) element.setAttribute("aria-label", label);
  if (element.dataset.keyboardBound === "true") return;
  element.dataset.keyboardBound = "true";
  element.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (event.target !== element) return;
    event.preventDefault();
    element.click();
  });
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
  // are not links. Mark them so the YAML can address them by visible label, and
  // make them operable by keyboard: a div is not a control.
  document.querySelectorAll<HTMLElement>("[data-board-root] nav div").forEach((element) => {
    const className = typeof element.className === "string" ? element.className : "";
    if (!className.includes("group/2713e17b")) return;
    const label =
      element.querySelector("span.line-clamp-1")?.textContent?.trim() || element.textContent?.trim();
    if (!label) return;
    makeFocusable(element, label);
  });

  // The board's own PipelineStepper (UI-09) renders divs, not links. Mark its
  // six labelled steps so the same YAML labels navigate; skip the ProcessStepper
  // root, which wraps and has its own sub-process labels.
  document.querySelectorAll<HTMLElement>("[data-board-root] div").forEach((root) => {
    const className = typeof root.className === "string" ? root.className : "";
    if (!className.includes("shadow-sm") || !className.includes("rounded-lg") || className.includes("flex-wrap")) return;
    for (const span of root.querySelectorAll("span")) {
      const label = span.textContent?.trim() ?? "";
      if (!(label in PIPELINE_LABELS)) continue;
      const step = span.parentElement;
      if (!step || step === root) continue;
      makeFocusable(step as HTMLElement, label);
    }
  });

  const targets = [
    ...document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      'input[value]:not([data-unlocked]), textarea:not([data-unlocked])',
    ),
  ];
  for (const element of targets) {
    if (element.closest("#general-nav") || element.closest(".proto-nav")) continue;
    const clone = element.cloneNode(true) as typeof element;
    clone.removeAttribute("value");
    clone.value = element.value; // keep any prefill (value prop may not be serialised)
    clone.dataset.unlocked = "true";
    element.replaceWith(clone);
  }

  const surface =
    document.querySelector("meta[name='ui-id']")?.getAttribute("content") ?? "";
  if (surface) labelUnnamedControls(surface);
  restoreDraft(window.location.pathname);
  renderRowContext();
}

/* ------------------------------------------------------------------ boot -- */

function bindDrafts(): void {
  let timer = 0;
  document.addEventListener(
    "input",
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (!target.closest("[data-board-root]")) return;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => saveDraft(window.location.pathname), DRAFT_MS);
    },
    true,
  );
}

let bootBanner: HTMLElement | null = null;

async function load(): Promise<void> {
  document.documentElement.dataset.interactions = "loading";
  const pending = window.setTimeout(() => {
    if (document.documentElement.dataset.interactions !== "loading") return;
    if (document.getElementById("herstory-banner")) return;
    bootBanner = banner("info", "Loading interactions…", { persistent: true });
  }, 300);

  try {
    const response = await fetch("/interactions.yaml", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const parsed = parse(await response.text()) as Config;
    if (!parsed || typeof parsed !== "object" || !parsed.surfaces) {
      throw new Error("missing `surfaces` map");
    }
    config = parsed;
    document.documentElement.dataset.interactions = "ready";
    window.clearTimeout(pending);
    bootBanner?.remove();

    await loadLabels();
    // Islands hydrate after the initial render; wait a beat before unlocking.
    window.setTimeout(primePrototypeDom, 250);
  } catch (error) {
    window.clearTimeout(pending);
    bootBanner?.remove();
    document.documentElement.dataset.interactions = "error";
    banner(
      "error",
      "Interactions are unavailable on this page: the rule file did not load. Controls will not navigate.",
      { persistent: true, retry: true },
    );
    console.warn("[interactions] could not load /interactions.yaml", error);
  }
}

function announceFlash(): void {
  const flash = readFlash();
  if (!flash) return;
  banner(flash.kind, flash.message, { persistent: false });
}

document.addEventListener("click", onClick, true);
bindDrafts();
announceFlash();
announceUndo();
void load();
