---
tags:
  - op/doc/report
planType:
  - Workpackage
source: "[[HerStory UI Map]]"
---

# HerStory UI gate plan — pending links, UI inventory, deleted UIs

Human-gated verification of the two truth sources (`HerStory UIs.md`, `HerStory UI Map.md`). The agent prepares evidence; the approver records a decision per item. Truth-source edits happen only in the apply phase, after approval.

## Scope snapshot (pre-gate, 2026-11-23)

| Item | Count |
|---|---|
| Primary → secondary links (`Map §2.x`) | 106 |
| …marked `:pending` | 51 |
| …using `row / node click` (many contradicted by an existing button) | 30 |
| Onward links (`Map §3.1–3.8`) | 96 |
| …marked `:pending` | 57 |
| UIs in `uis.yaml` | 153 — 101 verified · 27 deviated · 21 failed · 2 missing-source · 2 represented |
| Deleted / removed UIs | 4 — `UI-13.1`, `UI-13.2`, `UI-09.1`, `UI-10.1` |
| Audit evidence already recorded | Map §7.1–§7.8 (clusters 2.3, 2.1, 2.2, 2.4, 2.5, 2.6, 2.7, 2.8) |

## Gate model

One approver per item — the design/product owner, with a cluster reviewer (coordinator, inquirer or superadmin as relevant). The agent prepares the packet; it never decides.

| Decision | Meaning | Follow-up |
|---|---|---|
| **APPROVE** | Link/UI stands as written | none |
| **RELABEL** | Control exists under another type/name | edit the Map label |
| **IMPLEMENT** | No control exists | ticket; link keeps `:pending` until built |
| **REMOVE** | Obsolete, duplicate or wrong surface | delete link/UI, fix counts |
| **DEFER** | Blocked on a design decision | record owner + date |

No bulk approvals by default. Patterns (e.g. every “Close” return) may be approved as a group only with an explicit note in the decision log.

## Phases

| # | Phase | Work | Exit criterion |
|---|---|---|---|
| 0 | **Prep** (½ day) | Freeze the two truth docs; record hashes; generate the review queue from Map + `uis.yaml`; pre-compute candidate controls per edge | Queue covers every pending/suspect item; no doc edits |
| 1 | **Pending links** (8 sessions, one per cluster) | Per edge: UIs.md flow step, current label, board candidates (`Component:Name`, line), proposed decision | Every `:pending` and every `row`-vs-button edge has a decision |
| 2 | **UI inventory** (3 batches) | Primaries + design system; secondaries; split/empty/duplicate boards (`UI-11S/C`, `UI-37.x`, `UI-16.1`, `UI-22.1`, `UI-35.4`, `UI-35.8`, `UI-17.1/17.2`) | Every one of the 153 surfaces has APPROVE/RENAME/MERGE/DELETE/DEFER |
| 3 | **Deleted UIs** (1 session) | `UI-09.1` / `UI-10.1`: restore board, redefine as inline parent state, or delete from §16 | One decision each + impact list (counts, §13 flows, Map §7, gen-yaml) |
| 4 | **Apply & verify** (1 session) | Apply approved changes in one batch; regenerate `uis.yaml`; run `gen-yaml --check`; structural Map check; diff review | `check:yaml` current; counts consistent; sign-off recorded |

## Review packet per item

```
ID            LINK-2.3-014 / UI-16.4 / DEL-UI-09.1
Current       UI-16 → 16.4  “View · row / node click”
Flow evidence HerStory UIs.md §13.2 UI-16 flow (inspect triples; no SHACL step)
Board evidence src/boards/UI16StagingReview.tsx: Table rows; no detail button
Candidates    Button:ApproveBatch, Button:ApproveAndPublish, Button:Reject
Proposed      RELABEL → Button:View (or row stays)
Decision      ______  Owner ____  Date ____  Note ____________
```

Every packet shows the *flow* node, the *map* label and the *board* control, so the approver decides between “what should be wired” and “what exists”.

## Decision log

Single record of the gate; one row per item.

| ID | Type | Cluster | Current | Candidate | Decision | Owner | Date | Follow-up |
|---|---|---|---|---|---|---|---|---|
| LINK-2.3-014 | link | 2.3 | `View · row` | `Button:View` | RELABEL | — | — | apply in phase 4 |
| UI-16.1 | ui | 2.3 | empty board | — | IMPLEMENT | — | — | ticket |
| DEL-UI-09.1 | deleted | 2.1/2.3 | no board | remove from §16 | REMOVE | — | — | fix counts |

Suggested IDs:

- `LINK-<cluster>-<nnn>` for §2.x / §3.x links.
- `UI-<id>` for surface decisions.
- `DEL-<id>` for the deleted surfaces.

## Sequencing rules

1. Cluster 2.3 first (it has the audit baseline), then 2.1, 2.2, 2.4 → 2.8.
2. Quick wins first: confirm the machine-detected candidates (button exists where the map says `pending` / `row`), then decide the truly missing controls.
3. No edits during review: decisions accumulate; apply once in phase 4 to avoid drift between the two truth docs.
4. Deleted UIs last, because their outcome changes §16 counts and Map §7.

## Acceptance criteria

- No link left `:pending` without a recorded decision (APPROVE / RELABEL / IMPLEMENT / REMOVE / DEFER).
- No `row / node click` label contradicted by an existing button without an explicit exception note.
- All 153 surfaces carry an approval state; duplicates and empty boards resolved.
- `UI-09.1` / `UI-10.1` either restored or removed, with §16 counts, §13 flow references and Map §7 consistent.
- `npm run check:yaml` current; Map structure intact (16 mermaid blocks, tables); audit sections updated with the gate outcomes.

## Risks

- **Approval fatigue** (147 pending onward/incoming links): batch by cluster, cap at 15 items per session, group identical return labels.
- **“Pending” conflates missing control with missing decision**: the decision states separate them.
- **Evidence drift**: docs are frozen in phase 0; `uis.yaml` is regenerated only in phase 4.
- **Static boards cannot prove wiring**: the gate approves intent (which control should open which surface), not runtime behavior.
- **Truth-source edits mid-gate**: one apply batch only; hashes recorded before and after.

## First action

Generate the phase-0 queue (`gate/queue.csv`) with one row per pending/suspect link and per surface, including the candidate controls already identified in Map §7.1–§7.8. Freeze the two truth docs and record their hashes before the first review session.

## Session 1 — cluster 2.3, batch 1A (incoming links)

Prepared 2026-11-23. Evidence: Map §2.3 and §7.1; board inventory from `uis.yaml`. Scope: 21 primary → secondary links. Queue rows are `LINK-2.3-<edge>` in `gate/queue.csv`.

Decision keys: **APPROVE** · **RELABEL → key** · **IMPLEMENT** (backlog) · **REMOVE** · **DEFER**. Candidates marked `?` are weak (one shared word), not recommendations. Truth sources stay untouched; decisions are transcribed into the queue after the session.

| Edge    | Current label                                     | Candidate(s)                      | Proposed                                | Decision                                                                                     |
| ------- | ------------------------------------------------- | --------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------- |
| 09→09.2 | `IconButton / Dialog:pending`                     | `Button:EditSource`               | RELABEL → `Button:EditSource`           | do as proposed                                                                               |
| 10→10.2 | `Button:RetryRun / DropdownMenu:pending`          | `Button:RetryRun`                 | APPROVE (DropdownMenu absent)           | Complete Dropdown menu                                                                       |
| 12→12.1 | `IconButton:pending / Dialog:pending`             | `Button:EditRule`, `Button:Edit`  | RELABEL → `Button:EditRule`             | do as proposed                                                                               |
| 12→12.2 | `Button:pending`                                  | —                                 | IMPLEMENT                               | do as proposed                                                                               |
| 13→13.1 | `IconButton:pending / Dialog:pending`             | `Button:EditShape`, `Button:Edit` | RELABEL → `Button:EditShape`            | UI-13.1 is deleted UI13 fills the functions                                                  |
| 13→13.2 | `row / node click`                                | `Button:ViewValidationReport`     | RELABEL → `Button:ViewValidationReport` | UI-13.2 is deleted UI13 fills the functions                                                  |
| 14→14.1 | `row / node click`                                | `Button:NewCQ?`                   | APPROVE (row)                           | do as proposed                                                                               |
| 14→14.2 | `Button:NewCQ`                                    | `Button:NewCQ`                    | APPROVE                                 | `Button:NewCQ?` should go to UI-14.2 and the eye icon button should connect with UI-14.1     |
| 15→15.1 | `Button:RunTransformation / DropdownMenu:pending` | `Button:RunTransformation`        | APPROVE (DropdownMenu absent)           | Complete Dropdown menu                                                                       |
| 15→15.2 | `row / node click`                                | `Button:DryRun`                   | RELABEL → `Button:DryRun`               | do as proposed                                                                               |
| 16→16.1 | `Button:ApproveBatch + Dialog:pending`            | `Button:ApproveBatch`             | APPROVE (Dialog absent)                 | do as proposed, complete dialog. Does this needs an approbation and publish button?          |
| 16→16.2 | `Button:ApproveAndPublish + Dialog:pending`       | `Button:ApproveAndPublish`        | APPROVE                                 | do as proposed, complete dialog. Does this needs an approbation and publish button?          |
| 16→16.3 | `Button:Reject + Dialog:pending`                  | `Button:Reject`                   | APPROVE                                 | do as proposed, complete dialog. Does this needs an approbation and publish button?          |
| 16→16.4 | `row / node click`                                | `Button:ApproveAndPublish?`       | APPROVE (row)                           | I don't understand the proposal                                                              |
| 17→17.1 | `row / node click`                                | `Button:Review`                   | RELABEL → `Button:Review`               | do as proposed, differentiatiate between the human icon button and the bot (LLM) icon button |
| 17→17.2 | `row / node click`                                | `Button:Review`                   | RELABEL → `Button:Review`               | do as proposed, differentiatiate between the human icon button and the bot (LLM) icon button |
| 17→17.3 | `row / node click`                                | —                                 | APPROVE (row)                           | do as proposed, differentiatiate between the human icon button and the bot (LLM) icon button |
| 18→18.1 | `IconButton / Dialog:pending`                     | `IconButton:Edit2`                | RELABEL → `IconButton:Edit2`            | do as proposed                                                                               |
| 18→18.2 | `row / node click`                                | —                                 | APPROVE (row)                           | do as proposed and explain                                                                   |
| 19→19.1 | `Button:Export`                                   | `Button:Export`                   | APPROVE                                 | do as proposed                                                                               |
| 19→19.2 | `row / node click`                                | —                                 | APPROVE (row)                           | do as proposed                                                                               |

### Six items requiring judgment

| Item        | Why                                                                                               | Options                                    | Judgement     |
| ----------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------- |
| **09→09.2** | Cross-type relabel: map says IconButton/Dialog, board has `Button:EditSource`                     | accept `Button:EditSource` / keep pending  | Explain       |
| **12→12.2** | No conflict-adjudication opener; only `Alert:14QTypingSlipsPendingAdjudication`                   | IMPLEMENT backlog / REMOVE edge            | Explain       |
| **14→14.1** | Board exposes `IconButton:Eye` (view) and `IconButton:Edit2`; “CQ detail” matches neither by name | keep row / RELABEL `Eye` / RELABEL `Edit2` | Explain       |
| **17→17.3** | `Button:Review` exists but is shared by 17.1–17.3                                                 | keep row / RELABEL `Review` (ambiguous)    | Differentiate |
| **16→16.4** | No open-report control; 16.4 has `ExportReport`, `CancelJob`, `Close`                             | keep row / IMPLEMENT “Open report”         | Explain       |
| **19→19.2** | Board has `Button:Download`; map says row                                                         | keep row / RELABEL `Download`              | relabel       |

### Session 1 — resolutions (1A, 2026-11-23)

- **09→09.2** — cross-type relabel accepted: UI-09 exposes `Button:EditSource`, not IconButton/Dialog. The mapper's type was inferred from the action; the control is a button.
- **10→10.2 / 15→15.1** — `DropdownMenu` is missing, not the button. Keep the named Button; backlog the overflow menu.
- **12→12.2** — no opener exists (only `Alert:14QTypingSlipsPendingAdjudication`). IMPLEMENT = add an “Adjudicate” action; the edge stays pending until built.
- **13→13.1 / 13→13.2** — **UI-13.1 and UI-13.2 are deleted; UI-13 fills their functions.** Cascade: remove both surfaces and their edges; UI-13 carries validation/report inline. Consequential decisions: `13.1→13.2` and `13.2→13` are REMOVE; `12.1→13` stays (target UI-13); `11.5→13.2` (2.2) and `16.4→13.2` (1B) must be retargeted to UI-13 or removed. Counts drop from 149 to 147 boards and 106 to 104 secondaries when applied.
- **14→14.1 / 14→14.2** — `IconButton:Eye` opens CQ detail; `Button:NewCQ` opens New CQ. Row click retired.
- **16→16.1 / 16.2 / 16.3** — dialogs need their own actions: **16.1 Approve batch** needs an Approve (and optionally Approve & publish) button; **16.2 Approve and publish** needs Publish; **16.3** already has `Button:RejectTriple`. Without them the chain 16.1 → 16.2 → 19 cannot complete. IMPLEMENT for 16.1/16.2, COMPLETE for 16.3.
- **16→16.4** — proposal means: 16.4 opens from a job row in UI-16 (no dedicated button); the weak `Button:ApproveAndPublish?` is a false positive (“and”). APPROVE (row) recorded; optionally add an “Open SHACL report” action later.
- **17→17.1 / 17.2 / 17.3** — differentiate controls: human review icon (`IconButton:Review`) for 17.1, LLM/bot icon (`IconButton:ReviewLLM`) for 17.2; 17.3 stays a row (trace opens from either). IMPLEMENT the two icons, then relabel.
- **18→18.2** — row is correct: candidate comparison opens from an ambiguous-match row; UI-18 has no dedicated Compare button. APPROVE (row).
- **19→19.2** — relabel to `Button:Download` (judgement overrides the earlier row proposal).

23 decisions recorded in `gate/queue.csv` (21 links + UI-13.1/UI-13.2 REMOVE).

## Session 1 — cluster 2.3, batch 1B (onward links)

19 onward links from §3.8. Decisions blank; cascade from 1A marked in the proposal.

| Edge | Current label | Candidate(s) | Proposed | Decision |
|---|---|---|---|---|
| 09.2→09 | `Save · Button:SaveChanges` | `Button:SaveChanges` | APPROVE | — |
| 10.2→10 | `Retry · Button:RetryRun` | `Button:RetryRun` | APPROVE | — |
| 12.1→13 | `Save and validate · Button:pending` | `Button:SaveRule?` | RELABEL → `Button:SaveRule`; keep target UI-13 | — |
| 12.2→12 | `Resolve · Button:pending` | `Button:SaveDecision` (manual) | RELABEL → `Button:SaveDecision` | — |
| 13.1→13.2 | `Run validation · Button:pending` | — | REMOVE (13.1/13.2 deleted) | — |
| 13.2→13 | `Close · Button:pending` | — | REMOVE (13.2 deleted) | — |
| 14.1→30 | `Run as SPARQL · Button:pending` | `Button:RunAgainstGraph?` | REVIEW → `RunAgainstGraph`; target UI-30 or inline result | — |
| 14.2→14 | `Save · Button:SaveAndRun` | `Button:SaveAndRun` | APPROVE | — |
| 15.1→15.2 | `Show report · Button:pending` | — | IMPLEMENT or REMOVE (dry run starts at the parent) | — |
| 15.2→16 | `Send to staging · Button:pending` | — | IMPLEMENT | — |
| 16.1→16.2 | `Approve · Button:pending` | — | IMPLEMENT Approve action in 16.1 | — |
| 16.2→19 | `Publish · Button:pending` | — | IMPLEMENT Publish action in 16.2 | — |
| 16.3→16 | `Save reason · Button:pending` | `Button:RejectTriple?` | RELABEL → `Button:RejectTriple` | — |
| 16.4→13.2 | `Open report · Button:pending` | `Button:ExportReport?` | RETARGET → UI-13; then decide Export vs Open report | — |
| 17.1→16 | `Accept · Button:pending` | — | IMPLEMENT Accept in 17.1 (with human icon) | — |
| 17.2→16 | `Accept · Button:AcceptOutput` | `Button:AcceptOutput` | APPROVE | — |
| 18.1→18 | `Save · Button:SaveAlias` | `Button:SaveAlias` | APPROVE | — |
| 19.1→19.2 | `Open artifact · Button:pending` | `Button:DownloadWhenReady` (manual) | RELABEL → `Button:DownloadWhenReady` | — |
| 19.2→19 | `Close · Button:Close` | `Button:Close` | APPROVE | — |

### Session 1 — resolutions (1B, 2026-11-23)

All 19 approved as proposed. Normalized decisions:

- RELABEL: `12.1→13` `Button:SaveRule`; `12.2→12` `Button:SaveDecision`; `14.1→30` `Button:RunAgainstGraph` (target UI-30 kept); `16.3→16` `Button:RejectTriple`; `19.1→19.2` `Button:DownloadWhenReady`.
- REMOVE: `13.1→13.2`, `13.2→13` (cascade).
- RETARGET: `16.4→13` (Open report, still pending); `11.5→13` (cascade, 2.2).
- IMPLEMENT (edge stays pending until built): `15.1→15.2` Show report; `15.2→16` Send to staging; `16.1→16.2` Approve; `16.2→19` Publish; `17.1→16` Accept.
- APPROVE: `09.2→09`, `10.2→10`, `14.2→14`, `17.2→16`, `18.1→18`, `19.2→19`.

20 decisions recorded in `gate/queue.csv` (19 + the `11.5→13` cascade).

### Applied (2026-11-23)

- **Map:** §1 cluster 2.3 = 19; §2.3 relabels and `13.1/13.2` edges removed; §3.1 `11.5→13`; §3.2 relabels/removals, `16.4→13`; §3.8 updated; §4 104 rows; §5 recomputed after the Subframe backlog and post-gate relabels (104; Button named 82, row 11, IconButton named 2, SplitButton 1); §6 104 connections / 102 active secondaries.
- **`HerStory UIs.md`:** §16.1 rows `UI-13.1`/`UI-13.2` removed (75) and `UI-09.1`/`UI-10.1` removed (73); summary 145 active boards, 102 secondaries, batches 100; §13 cells for UI-10/12/15 now list the new controls.
- **`uis.yaml`:** `DELETED` set in `gen-yaml.mjs` now also covers `UI-09.1`/`UI-10.1`; regenerated **149 surfaces (147 pulled, 0 missing-source)** and 147 routes; `check:yaml` current.
- **Board files:** `src/boards/UI131EditShape.tsx` and `UI132ValidationReport.tsx` deleted (2026-11-23); `pull-subframe.mjs` skips all four removed ids, so a full pull cannot recreate them. 147 board files remain.
- **Remaining backlog:** none — `11.5→13` was implemented in Session 3.
- **Subframe backlog implemented (MCP, 2026-11-23):** UI-16.1 Cancel + Approve batch; UI-16.2 Cancel + Publish; UI-16.4 Open report; UI-17.1 Reject + Accept suggestion; UI-15.1 Show report; UI-15.2 Send to staging; UI-12 Adjudicate; UI-10/UI-15 More + DropdownMenu; UI-17 human/bot Review buttons already existed and are now named `ReviewHuman` / `ReviewLLM` in the Map. Nine boards pulled; inventory regenerated.

Session 1 closed. Next: **Session 2 — cluster 2.2 (Ontology)** — 6 incoming + 6 onward links; the `11.5→13` cascade is already applied.

## Post-gate consistency review — 2026-11-23

Reviewed all 104 incoming + 94 onward connections against the current `uis.yaml`/boards. Structural state is consistent: §2 = §4 = 104, §3.8 = 94, §5 sums to 104, 16 mermaid blocks, no dangling `UI-13.x` nodes. Cluster 2.3 has zero `:pending`.

| Finding | Count / detail |
|---|---|
| Pending rows (incoming + onward) | **85** — 2.1: 19 · 2.2: 8 · 2.4: 17 · 2.5: 18 · 2.6: 17 · 2.8: 6 |
| Pending but relabel-ready (control exists, per §7) | **17** — 2.1: `Inspect`, `SaveChanges`, `Review`, `Edit`, `View` ×2 · 2.2: `EditProperty`, `AddClass`, `ViewMappings`, `EditClass` · 2.4: `FlagNewTerm`, `Reclassify`, `Edit` · 2.5: `AddCondition`, `SaveQuery` · 2.6: `ContactSupport`, `Submit` |
| Row label while a button exists | **7** unambiguous + 1 ambiguous (`UI-21.3` shares `Button:Review` with 21.2) |
| Semantic aliases | `Button:ReviewHuman` / `ReviewLLM` = two `Review` buttons; `DropdownMenu` on 10/15 opened by `Button:More` |

### Applied by this review

- 7 row → button relabels: `02→02.1` `Button:Inspect`, `04→04.2` `Button:Review`, `06→06.3` `Button:View`, `07→07.1` `Button:View`, `20→20.1` `Button:View`, `21→21.2` `Button:Review`, `27→27.1` `Button:GenerateImpactReport`; §4 synced.
- §5 recomputed: Button named **39**, row **17** (sum still 104).
- Legend now documents the semantic aliases.

### Remaining steps

| # | Step | Scope | Exit |
|---|---|---|---|
| 1 | Gate session **2.1** | 19 pending; start with the relabel-ready `03.1 SaveChanges`, `05.2 Edit` | no `:pending` without a decision |
| 2 | Gate session **2.2** | 8 pending; `11.1/11.2/11.3/11.6` relabel-ready; `11.5→13` backlog | same |
| 3 | Gate session **2.4** | 17 pending; start with `21.1`, `22.2`, `24.1` | same |
| 4 | Gate session **2.5** | 18 pending; start with `29.1 AddCondition`, `30.1 SaveQuery` | same |
| 5 | Gate session **2.6** | 17 pending; `35.5 ContactSupport`, `36.1 Submit`; decide guides (Accordion, not Dialog) | same |
| 6 | Gate session **2.8** | 6 pending (`38.1/38.2`, `39.2`, onward) | same |
| 7 | Decide **`UI-21.3`** row vs `Button:Review` ambiguity | 2.4 | explicit mapping |
| 8 | Re-run the connection validator after each session | all | 0 stale pending / 0 unexplained row labels; §4/§5 synced |

Run `node gate/review-connections.mjs` after each session; it compares every named/pending token with the source board inventory and flags row labels that have a matching button.

## Session 2 — cluster 2.1, batch 2A (incoming links)

Prepared 2026-11-23. Evidence: Map §2.1 and §7.2; board inventory. Proposals marked RELABEL have an existing control; IMPLEMENT means no opener on the parent board.

| Edge | Current label | Proposed | Decision |
|---|---|---|---|
| 01→01.1 | `Create · Button:InviteUser (primary)` | APPROVE | — |
| 01→01.2 | `Edit · IconButton:pending / Dialog:pending` | IMPLEMENT (no edit pen) | — |
| 01→01.3 | `Open · Button:pending` | IMPLEMENT (no auth-policy opener) | — |
| 02→02.1 | `View · Button:Inspect` | APPROVE | — |
| 02→02.2 | `Create · Button:CreateWorkspace (primary)` | APPROVE | — |
| 02→02.3 | `Edit · IconButton:pending / Dialog:pending` | IMPLEMENT (no edit opener) | — |
| 02→02.4 | `Open · Button:pending` | IMPLEMENT (no sovereignty opener) | — |
| 03→03.1 | `Edit · IconButton:pending / Dialog:pending` | RELABEL → `Button:SaveChanges` | — |
| 03→03.2 | `Open · Button:Discard` | APPROVE | — |
| 04→04.1 | `Create · Button:NewPolicy (primary)` | APPROVE | — |
| 04→04.2 | `View · Button:Review` | APPROVE | — |
| 04→04.3 | `Edit · IconButton:pending / Dialog:pending` | IMPLEMENT (no authority-matrix opener) | — |
| 04→04.4 | `View · row / node click` | APPROVE (row; no dedicated button) | — |
| 05→05.1 | `Run · Button:RunRetentionSweep / DropdownMenu:pending` | APPROVE button; IMPLEMENT DropdownMenu | — |
| 05→05.2 | `Edit · IconButton:pending / Dialog:pending` | RELABEL → `Button:Edit` | — |
| 06→06.1 | `Create · Button:AddStakeholder (primary)` | APPROVE | — |
| 06→06.2 | `Export · Button:Export (secondary)` | APPROVE | — |
| 06→06.3 | `View · Button:View` | APPROVE | — |
| 06→06.4 | `Edit · IconButton:pending / Dialog:pending` | IMPLEMENT (no edit opener) | — |
| 07→07.1 | `View · Button:View` | APPROVE | — |
| 07→07.2 | `Edit · IconButton:pending / Dialog:pending` | IMPLEMENT (no assign opener) | — |
| 08→08.1 | `Export · Button:ExportLogs (secondary)` | APPROVE | — |
| 08→08.2 | `Open · Button:Revoke` | APPROVE | — |
| 08→08.3 | `View · row / node click` | APPROVE (row; table detail) | — |

## Session 2 — batch 2B (onward links)

| Edge | Current label | Proposed | Decision |
|---|---|---|---|
| 01.1→01 | `Send invitation · Button:pending` | RELABEL → `Button:SendInvite` | — |
| 01.2→01 | `Save · Button:SaveChanges` | APPROVE | — |
| 01.3→01 | `Save policy · Button:SavePolicy` | APPROVE | — |
| 02.1→02 | `Close · Button:Close` | APPROVE | — |
| 02.2→02 | `Create · Button:CreateWorkspace` | APPROVE | — |
| 02.3→02 | `Save · Button:SaveWorkspace` | APPROVE | — |
| 02.4→02 | `Save · Button:SaveSettings` | APPROVE | — |
| 03.1→03 | `Save · Button:Save3Changes` | APPROVE | — |
| 03.2→03 | `Discard · Button:DiscardChanges` | APPROVE | — |
| 04.1→04.2 | `Save draft · Button:pending` | RELABEL → `Button:CreatePolicy` | — |
| 04.2→04 | `Approve · Button:ApprovePolicy` | APPROVE | — |
| 04.3→04 | `Save matrix · Button:SaveMatrix` | APPROVE | — |
| 04.4→04 | `Close · Button:pending` | REVIEW: `Button:ExportRecord` vs IMPLEMENT Close | — |
| 05.1→05 | `Confirm purge · Button:pending` | RELABEL → `Button:DeleteFiles` | — |
| 05.2→05 | `Save · Button:SaveRule` | APPROVE | — |
| 06.1→06 | `Save · Button:pending` | RELABEL → `Button:AddStakeholder` | — |
| 06.2→06 | `Download · Button:pending` | RELABEL → `Button:Export` | — |
| 06.3→06 | `Close · Button:Close` | APPROVE | — |
| 06.4→06 | `Save · Button:SaveRecord` | APPROVE | — |
| 07.1→07 | `Close · Button:Close` | APPROVE | — |
| 07.2→07 | `Assign · Button:pending` | RELABEL → `Button:Apply` | — |
| 08.1→08 | `Download · Button:pending` | RELABEL → `Button:ExportLogs` | — |
| 08.2→08 | `Revoke · Button:RevokeSession` | APPROVE | — |
| 08.3→08 | `Close · Button:pending` | IMPLEMENT Close (board has Verify/Revoke) | — |

### Session 2 judgment calls

| Item | Why | Options |
|---|---|---|
| 01.2 / 02.3 / 02.4 / 04.3 / 06.4 / 07.2 | no opener on the parent board | IMPLEMENT the control / keep pending / REMOVE edge |
| 05.1 | `DropdownMenu` missing, button present | IMPLEMENT menu / drop the menu from the label |
| 04.4 → 04 | action says Close, board has `ExportRecord` | RELABEL ExportRecord / IMPLEMENT Close |
| 08.3 → 08 | no Close control | IMPLEMENT Close / RELABEL Verify with owner |

### Session 2 — applied (2026-11-23)

- **Incoming:** `01.2` `Button:EditRole` · `01.3` `Button:AuthenticationPolicy` · `02.3` `Button:EditWorkspace` · `02.4` `Button:SovereigntyAndQuota` · `03.1` `Button:SaveChanges` · `04.3` `Button:AuthorityMatrix` · `05.1` `Button:RunRetentionSweep / DropdownMenu` · `05.2` `Button:Edit` · `06.4` `Button:EditRecord` · `07.2` `Button:AssignOrEscalate`. `04.4` and `08.3` remain row triggers.
- **New Subframe controls (8 pages pulled):** UI-01 Authentication policy + Edit role; UI-02 Edit workspace + Sovereignty and quota; UI-04 Authority matrix; UI-05 More + DropdownMenu; UI-06 Edit record; UI-07 Assign or escalate; UI-08.3 Close; UI-04.4 Close.
- **Onward:** `Button:SendInvite`, `Button:CreatePolicy`, `Button:Close` (04.4), `Button:DeleteFiles`, `Button:AddStakeholder`, `Button:Export`, `Button:Apply`, `Button:ExportLogs`, `Button:Close` (08.3).
- **State:** pending rows **85 → 66**; validator 1 issue (the intentional `21.3` ambiguity); build passes (149 pages); §5 = Button named 48, row 17, sum 104.
- 48 link decisions recorded in `gate/queue.csv`.

Session 2 closed. Next: **Session 3 - cluster 2.2 (Ontology)** - 8 pending rows; `11.1/11.2/11.3/11.6` are relabel-ready, `11.5->13` is backlog.

### Session 3 - applied (2026-11-23)

- **Incoming:** `11.1` `Button:EditProperty` · `11.2` `SplitButton:Add` · `11.3` `Button:ViewMappings` · `11.4` `Button:ImportExport` · `11.5` `Button:RunReasoner / DropdownMenu` · `11.6` `Button:EditClass`.
- **New Subframe controls (2 pages pulled):** UI-11C Import / export + Run reasoner; UI-11.5 Open validation report.
- **Onward:** `11.2->11S` `Button:AddClass` · `11.5->13` `Button:OpenValidationReport` · `11.6->11S` `Button:Guardar`.
- **State:** pending rows **66 -> 58**; validator 1 issue (the intentional `21.3` ambiguity); §5 = Button named 54, row 16, sum 104; build passes (149 pages).
- **Repo fix:** `ProcessStepper` was missing from the prototype's `src/ui/components`; copied from the design-system sync so UI-11C/11S compile.
- 12 link decisions recorded in `gate/queue.csv`.

Session 3 closed. Next: **Session 4 - cluster 2.4 (Participation & justice)** - 17 pending rows; `21.1`, `22.2`, `24.1` are relabel-ready, plus the `21.3` ambiguity.

### Session 4 - applied (2026-11-23)

- **Incoming:** `20.2` `Button:RegisterGap` · `21.1` `Button:FlagNewTerm` · `21.3` `Button:Escalate` (resolves the ambiguity) · `22.2` `Button:Reclassify` · `22.3` `Button:RejectionRationale` · `23.1` `Button:Publish` (Dialog suffix dropped) · `24.1` `Button:Edit` · `25.1` `Button:Compare` · `25.2` `Button:DivergenceReport` · `26.2` `Button:AssignMitigation`. `22.1` and `26.1` remain row triggers.
- **New Subframe controls (11 pages pulled):** UI-20 Register gap; UI-21 Escalate; UI-22 Rejection rationale; UI-25 Divergence report; UI-26 Assign mitigation; UI-20.1 Close; UI-22.1 Close; UI-23.1 Close + Open exporter; UI-24.1 Cancel + Save; UI-25.2 Close; UI-27.1 Close.
- **Onward:** `Button:Close` (20.1) · `Button:FlagForReview` · `Button:ApproveTerm` · `Button:Escalate` · `Button:Close` (22.1) · `Button:RecordDecision` · `Button:OpenExporter` · `Button:Save` · `Button:Close` (25.2) · `Close` (27.1).
- **State:** pending rows **58 -> 41**; validator **0 issues**; §5 = Button named 63, row 13, sum 104; build passes (149 pages).
- 2.4 decisions recorded in `gate/queue.csv`.

Session 4 closed. Next: **Session 5 - cluster 2.5 (Exploration)** - 18 pending rows; `29.1`, `30.1` are relabel-ready.

### Session 5 - applied (2026-11-23)

- **Incoming:** `28.1` `Button:OpenSearch` · `28.3` `Button:RaiseObjection` · `28.4` `Button:LlinatgePanel` · `29.1` `Button:AddCondition` · `29.2` `Button:RunQuery / DropdownMenu` · `30.1` `Button:SaveQuery` · `31.1` `Button:SourceCitation` · `31.3` `Button:FirstSteps` · `32.1` `Button:Open` · `33.2` `Button:Open`. `28.2`, `31.2`, `34.2` remain row triggers.
- **New Subframe controls (11 pages pulled):** UI-28 Open search + Raise objection + Llinatge panel; UI-29 More + DropdownMenu; UI-31 Source citation + First steps; UI-28.2 Close; UI-28.4 Back; UI-31.1 Open in corpus; UI-31.3 Close; UI-32.1 Close; UI-33.2 Close; UI-34.1 Open place; UI-34.2 Close.
- **Onward:** `Button:Close` (28.2) · `Button:Back` · `Button:AddCondition` · `Button:OpenInSPARQLEditor` · `Button:OpenInCorpus` · `Button:Close` (31.3) · `Button:Close` (32.1) · `Button:Close` (33.2) · `Button:OpenPlace` · `Button:Close` (34.2).
- **Diagram:** §3.5 expanded to include the return edges, so it now matches §3.8.
- **State:** pending rows **41 -> 23**; validator **0 issues**; §5 recomputed canonically (Button named 71, row 11, SplitButton 1; sum 104); build passes (149 pages).
- 2.5 decisions recorded in `gate/queue.csv`.

Session 5 closed. Next: **Session 6 - cluster 2.6 (Help & feedback)** - 17 pending rows; `35.5` and `36.1` are relabel-ready.

### Session 6 - applied (2026-11-24)

- **Incoming:** `35.1` `Button:GettingStarted` · `35.2` `Button:RolesAndPermissions` · `35.3` `Button:TheKGPipeline` · `35.4` `Button:Glossary` · `35.5` `Button:ContactSupport` · `35.6` `Button:FAQ` · `35.7` `Button:VideoIndex` · `35.8` `Button:Changelog` · `35.9` `Button:KeyboardShortcuts` · `36.1` `Button:Submit`.
- **New Subframe controls (6 pages pulled):** UI-35 four cards relabelled to their guide names, plus FAQ / Video index / Changelog / Keyboard shortcuts; Back-to-help added to UI-35.4/35.6/35.7/35.8/35.9.
- **Onward:** all nine guide returns now `Button:BackToHelp`; `35.5->36` `Button:SendMessage`; `36.1->36` `Button:Close`.
- **Diagram:** §3.6 expanded from one edge to the full guide/index/request flow.
- **State:** pending rows **23 -> 6** (all remaining are 2.8); validator **0 issues**; §5 Button named 79, row 11, Button pending 3; build passes.
- 2.6 decisions recorded in `gate/queue.csv`.

Session 6 closed. Next: **Session 7 - cluster 2.8 (Provenance & observability)** - 6 pending rows (`38.1`, `38.2`, `39.1`, `39.2`).

### Session 7 - applied (2026-11-24)

- **Incoming:** `38.1` `Button:OpenProvenance` · `38.2` `Button:DualVoiceDiff` · `39.2` `Button:AlertAction`. `39.1` remains a row trigger.
- **New Subframe controls (4 pages pulled):** UI-38 Open provenance + Dual-voice diff; UI-39 Alert action; UI-38.2 Close; UI-39.1 Close.
- **Onward:** `38.1->38` and `38.2->38` `Button:Close`; `39.1->39` `Button:Close`; `39.2->39` `Button:ApplyAction`.
- **Diagram:** §3.7 expanded to the full provenance/observability/personalisation flow.
- **State:** pending rows **6 -> 0**; validator **0 pending / 0 issues**; §5 Button named 82, row 11, sum 104; build passes (149 pages).
- 2.8 decisions recorded in `gate/queue.csv`.

**All seven sessions are closed.** 104/104 incoming and 94/94 onward connections now name a real control (or an intentional row/role/composed trigger); no `:pending` remains in the Map.
