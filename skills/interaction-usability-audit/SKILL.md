---
name: interaction-usability-audit
description: Audits an interface's interaction layer against the HerStory usability protocol (M1–M8 dimensions) and the REQ catalogue, producing severity-rated, reproducible findings. Use when evaluating clicks, state changes, feedback, error handling, keyboard access, or interaction coverage of the historical-data → Wikidata KG system, its prototype, or any of its surfaces.
---

# Interaction Usability Audit

Evaluates **behaviour**, not appearance: what a control does, what the user sees after acting, what happens to state, and what happens when the action fails. Appearance review belongs to `penpot-audit-accessibility` / `figure-table-audit`; requirement authoring belongs to the Requirements note itself.

## Sources (read before scoring, never re-derive)

| Role | Path |
|---|---|
| Protocol — dimensions, severity scale, tasks T1–T9, template | `PhD/Working docs/UX/Protocol — Usability dimensions for the historical-data to Wikidata KG system.md` |
| Requirements — REQ-* with MUST/SHOULD, module M1–M8 | `HerStory/ux/Requirements — Design requirements for the historical-data → Wikidata KG system.md` |
| Dimension IDs and names, condensed | `references/01-dimension-index.md` |
| REQ catalogue, condensed with strengths | `references/02-requirement-index.md` |
| Evidence tiers, severity anchors, sampling, boundary rule | `references/03-evidence-protocol.md` |
| Report skeleton | `references/04-report-template.md` |

If a dimension is not in the protocol, it is out of scope for the report — do not invent a module. One exception is pre-declared: the Requirements note carries **M11 — epistemic justice & participatory governance** (REQ-11.*), which the protocol has no dimension for (it says so: *"Lacks: epistemic justice and biases components"*). Report those as module **M11 / requirements-only** and state the protocol gap; never mint `M11.x` dimension IDs.

## Workflow

1. **Scope the round.** Name the evaluated artefact and version (commit sha, prototype build date, service URL). Pick surfaces by *capability*, not by convenience: at least one surface per capability touched, ≥3 surfaces per module under review. Write the surface list in the report before inspecting.

2. **Inventory the interaction model.** For the HerStory prototype:

   ```bash
   cd "HerStory/UI/astrocodebase - prototype"
   node scripts/check-interactions.mjs      # rule validity: unknown surfaces/routes, dupes
   ```

   Then compute coverage and label-collision exposure with `references/03-evidence-protocol.md` §5. Record: surfaces, component instances, wired instances, rule effects (`navigate`/`action`/`back`), live `onClick` handlers, duplicate-label groups with a single unscoped rule.

3. **Static pass (tier T1).** Read the runtime that turns rules into behaviour (`src/scripts/interactions.ts`): rule matching, action table, navigation order, toast lifetime, missing-rule path, input priming. Each behaviour claim later needs either this line reference or a T0 observation.

4. **Runtime probe (tier T0).** Start the app, drive it, record the trace:

   ```bash
   cd "HerStory/UI/astrocodebase - prototype" && npm run dev
   # then: browser.open → real mouse clicks → read #herstory-toast-host, URL, localStorage
   ```

   Mandatory probes per surface: (a) a state-changing action, (b) the same action in its pre-condition-false state, (c) a destructive action, (d) an unwired control, (e) keyboard-only traversal, (f) navigate away and back after typing. Keep the selector + URL in the finding so it reproduces.

5. **Score.** Severity 0–4 per finding, anchored by `references/03-evidence-protocol.md`. One finding = one behaviour, one dimension ID, one REQ ID. Split compound observations.

6. **Classify.** Every finding gets a class: `defect` (wrong or missing behaviour inside declared scope), `boundary` (absent because the artefact is a prototype/parity build — declare it, count it, do not rate as a design defect above severity 2), `validity` (the instrument cannot measure it: real users, live service, cross-channel, bias).

7. **Report.** Fill `references/04-report-template.md`. Separate M5 (explainability) and M6 (provenance/observability) findings into their own section — the protocol requires it. State which T1–T9 tasks were *not* runnable and why.

8. **Iterate.** Findings → redesign → re-probe. Preserve finding IDs across rounds and mark `fixed` / `regressed` / `unchanged`; three rounds minimum per protocol §4.

## Output format

Report file: `HerStory/ux/Interaction evaluation — <artefact> (<YYYY-MM-DD>).md`. Up to four files per round (one per evaluated module cluster) only when a single file exceeds ~400 lines; keep one index file either way.

Non-negotiables in every report:

- Severity summary per module, with counts by class.
- Requirement coverage matrix over the REQs actually in scope.
- Per-finding block: `ID | Dimension | REQ | Severity | Class | Evidence tier | Repro | Recommendation`.
- A "not evaluable" section listing dimensions and tasks the instrument cannot reach.
- Positive findings — the protocol evaluates effectiveness, so working guards and feedback paths must be recorded, not only defects.

## Guardrails

- **Never** rate a missing backend, missing service call, or unwired control as a usability defect without checking whether the artefact declares it as a boundary; rate it as `boundary` and quantify coverage instead.
- **Never** infer user satisfaction, emotional impact (M7) or cultural fit (M8.2) from inspection. Those need participants; state them as not evaluable.
- Severity anchors are fixed: 4 = irreversible data loss or task-blocking in the primary flow; 3 = task failure or silent wrong outcome; 2 = recoverable friction; 1 = cosmetic; 0 = not a problem. Do not raise severity because a finding is frequent or because a requirement uses MUST — MUST-violating frictions stay at their behavioural anchor.
- Every finding cites evidence that a second person can replay: URL, selector or file:line, and the observed before/after value.
- Do not modify the artefact while evaluating. Probe state (`localStorage`) is cleared between probes and noted if not.
- Do not report the same behaviour twice under two dimensions; pick the primary dimension and cross-reference.
