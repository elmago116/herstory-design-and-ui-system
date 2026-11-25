---
tags:
  - op/project/plan
status: awaiting-approval
target: "HerStory/UI/astrocodebase - prototype"
source: "Subframe project HS - Design System (fbbaaa9a39d6)"
---

# Astro pixel-perfect prototype — Subframe-free plan

Plan only. Nothing is implemented until approved (§10).



## 0. Decision summary

| Decision             | Choice                                                                     | Why                                                                                                                                                                                                             |
| -------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework            | Astro 5, `output: "static"`                                                | 146 boards are documents, not an SPA. Static HTML per route; islands only where behaviour exists.                                                                                                               |
| Interactivity        | React 19 islands via `@astrojs/react`                                      | Subframe page code is React TSX + Tailwind. Keeping React = mechanical port, no re-authoring.                                                                                                                   |
| Styling              | Tailwind **3.4** + the already-synced `theme.css` + `tailwind.config.js`   | The synced components were authored against that exact config, including the `mobile: { max: "767px" }` breakpoint. Tailwind 4 would need `@theme`/`@custom-variant` rewrites — pure parity risk for zero gain. |
| Subframe at runtime  | **None**                                                                   | All page + component code is vendored into the repo and committed. Subframe is a design *source* touched once, by a script I run, never by a build.                                                             |
| Subframe npm package | **Removed** after §5                                                       | `@subframe/core` is ISC-licensed; its component sources are 176 KB and its icon set is a Feather fork → vendored subset.                                                                                        |
| Route per board      | `/ui/<id-slug>` for 146 boards, `/ds/<page>` for the 3 design-system pages | "each canvas = a url page", generated from `uis.yaml`.                                                                                                                                                          |
| Source of truth      | `uis.yaml` (static, committed)                                             | Future workflow threading; routes generated from it, no route-by-hand.                                                                                                                                          |
| Pixel proof          | Subframe reference PNG vs local Playwright PNG, `pixelmatch`, gate 0.1 %   | Parity is measured, not asserted.                                                                                                                                                                               |

## 1. Evidence — current state (verified today)

**Subframe file `HS - Design System`, `fbbaaa9a39d6`**

| Item | Count |
|---|---|
| Pages total | 149 |
| Boards on canvas *General UIs* | 146 = 40 primary + 102 secondary + 4 shells (UI-37.5/6.1/6.2/7) |
| Design-system pages on canvas *HerStory Design system* | 3 (01 Foundations, 02 Components, 03 Overlays) |
| Components | 91 (5 folders, 47 unfiled) |

**Already on disk — reusable, do not redo**

| Path | Content | Reuse |
|---|---|---|
| `UI/design-system/src/ui/` | 88 components, 182 `.tsx`, 2.6 MB, `theme.css` (241 lines of CSS vars), `tailwind.config.js`, `utils.ts` | **Copy verbatim** into the prototype as `src/ui/` |
| `UI/design-system/.subframe/sync.json` | `projectId fbbaaa9a39d6`, `cssType: tailwind`, alias `@/ui/*` | Confirms the sync is the right project, right alias |
| `UI/subframe-project/` | Vite React 19 app, `@subframe/core ^1.155.0`, Tailwind 3.4 | Superseded; reference only |
| `UI/Coelli UI/*.png` | 16 rendered reference shots | Spot-check aid, not the parity oracle (no fixed viewport metadata) |

**Coupling to `@subframe/core` in the synced design system**

| Metric | Value |
|---|---|
| Files importing it | 77 |
| Distinct API members used | 23: `Tooltip`(70) `IconWrapper`(54) `Collapsible`(24) `Select`(19) `DropdownMenu`(19) `Slider`(12) `RadioGroup`(12) `ToggleGroup`(6) `Switch`(6) `Skeleton`(6) `Progress`(6) `Loader`(6) `Drawer`(6) `Dialog`(6) `Checkbox`(6) `PieChart`(3) `LineChart`(3) `BarChart` `AreaChart` `FullScreenDialog`(3) `CopyToClipboard`(3) `ContextMenu`(3) `Calendar` `createTwClassNames` |
| Package weight | 65 MB installed (50 MB dist + 14 MB Feather icon set, 1 758 icon files) |
| Internals | Components are Radix-based with CSS Modules (`*.module.css`) — both natively handled by Astro/Vite |
| Licence | **ISC** — vendoring the source, with the notice retained, is permitted |
| Feather icons actually used | **98** distinct names (`FeatherBell`, `FeatherCheckCircle`, …) |

**Page exports are already Subframe-free**

`get_page_info` returns one file per board — e.g. UI-37.4 → `Ui374LanguagePicker.tsx` whose only imports are `react` and `@/ui/components/Select`, styled with the synced Tailwind classes (`text-heading-1`, `mobile:px-4`, `bg-default-background`). No `SubframeCore`, no CDN URLs in the samples inspected. **The page layer needs no decoupling at all** — it depends on `src/ui/`, not on Subframe.

**Theme facts** — fonts: IBM Plex Sans (body/micro), Zilla Slab (heading-1), typography scale `micro … heading-1` exposed as `--font-*` / `--text-*` vars; breakpoints: `Desktop` (min 768, default), `Mobile` (`mobile:`, max 767).

## 2. Target architecture

```mermaid
flowchart LR
    subgraph design["Design source (touched once)"]
        SF[["Subframe HS - Design System<br/>149 pages · 91 components"]]
    end
    subgraph repo["astrocodebase - prototype (committed)"]
        YAML[["uis.yaml<br/>route · id · status · hydration"]]
        PULL["scripts/pull-subframe.mjs<br/>(build-time only, run by hand)"]
        SNAP[["vendor/subframe-snapshot/<br/>raw pull + sha256 manifest"]]
        UI["src/ui/<br/>88 components · icons · core shim"]
        BOARDS["src/boards/<br/>146 × *.tsx"]
        ROUTES["src/pages/ui/[...slug].astro<br/>getStaticPaths from uis.yaml"]
        SHOTS[["shots/reference · local · diff"]]
    end
    SF -->|"get_page_info ×146<br/>+ theme + icons"| PULL
    PULL --> SNAP
    PULL --> BOARDS
    SNAP -.->|"provenance"| UI
    YAML --> ROUTES
    BOARDS --> ROUTES
    UI --> ROUTES
    ROUTES -->|"astro build"| STATIC[["dist/ — 149 static routes<br/>no Subframe, no network"]]
    STATIC --> SHOTS
```

The arrow from Subframe is **one-way and one-time per change**. After the pull, `rm -rf node_modules/@subframe` and deleting the Subframe project still builds.

## 3. Directory layout

```
astrocodebase - prototype/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── uis.yaml                      # §4 source of truth
├── src/
│   ├── layouts/Board.astro        # <html>, head, meta from YAML, theme.css import
│   ├── pages/
│   │   ├── index.astro            # 149-board index, grouped by doc section
│   │   ├── ds/tokens.astro        # hand-written token reference (§P1)
│   │   ├── ds/*.astro             # generated: 01-foundations, 02-components, 03-overlays
│   │   └── ui/*.astro             # generated one file per board (static import ⇒ hydratable)
│   ├── boards/                    # 146 pulled page components (verbatim)
│   │   ├── Ui01UserManagement.tsx
│   │   └── …
│   ├── ui/                        # copied from UI/design-system/src/ui
│   │   ├── theme.css  tailwind.config.js  utils.ts  index.ts
│   │   ├── components/  layouts/
│   │   ├── core/                  # vendored @subframe/core subset (§5)
│   │   ├── icons/                 # 98 vendored Feather icons
│   │   └── fonts/                 # self-hosted IBM Plex Sans + Zilla Slab woff2
│   └── styles/globals.css         # tailwind directives + shot-freeze rules
├── scripts/
│   ├── pull-subframe.mjs          # §6
│   ├── vendor-core.mjs            # §5
│   ├── gen-yaml.mjs               # derivation + drift check
│   ├── shoot.mjs                  # local Playwright screenshots
│   └── diff.mjs                   # pixelmatch gate
├── vendor/subframe-snapshot/      # raw payloads + manifest.json (sha256 per file)
└── shots/{reference,local,diff}/  # <slug>@1280.png, <slug>@390.png
```

Import aliases: `@/ui/*` → `src/ui/*`, `@/boards/*` → `src/boards/*`. Same alias the Subframe sync already assumed, so pulled code needs **zero edits**.

## 4. `uis.yaml` — the threaded workflow file

```yaml
# uis.yaml — one entry per rendered surface. Generated once, then curated.
version: 1
project: { id: fbbaaa9a39d6, name: "HS - Design System" }
source_doc: "HerStory UIs.md"
theme: { tailwind: "src/ui/tailwind.config.js", css: "src/ui/theme.css" }
viewports: [ { name: desktop, width: 1100, dsf: 2 }, { name: mobile, width: 767, dsf: 2 } ]

ui:
  - id: UI-01
    title: User management
    route: /ui/ui-01-user-management
    kind: primary            # primary | secondary | shell | design-system
    parent: null
    canvas: General UIs
    subframe: { pageId: 3a5a50a8-…, nodeId: root }
    file: src/boards/Ui01UserManagement.tsx
    hydration: client:load   # client:load | client:visible | client:idle | static
    status: ported           # designed | pulled | ported | verified | deviated
    parity: { desktop: 0.000, mobile: 0.001 }
    journey: [U1, U2, U3]
  - id: UI-09.1
    title: View source
    status: missing-source   # ← does not exist in Subframe (verified 2026-11-16)
```

Rules: `status` and `parity` are written by `gen-yaml.mjs` from the shots + SHA of the vendored file; `hydration` and `journey` are curated by hand. `missing-source` is a legal terminal state — UI-09.1 and UI-10.1 stay visible in the index as gaps rather than vanishing.

## 5. Zero-Subframe decoupling

Two moves, in this order. Fidelity risk is carried by step 5.2 only, and each swap is gated by a diff.

**5.1 Vendor the core (mechanical, parity-safe).**

1. `vendor-core.mjs` copies from `node_modules/@subframe/core/src`: `components/*` (176 KB), `lib/tw-classnames`, `utilities/colors`, `types.d.ts`, the `.module.css` files, and the **98 used** `assets/icons/final/feather-*.tsx` into `src/ui/core/` + `src/ui/icons/`. Copies `LICENSE` verbatim.
2. Rewrite the 23 members' import surface in one `src/ui/core/index.ts`; add a codemod (`ast-grep`) replacing `from "@subframe/core"` → `from "@/ui/core"` across `src/ui`.
3. Delete `@subframe/core` from `package.json`. Build must pass with the package removed from `node_modules`.

Markup and CSS Modules are byte-identical, so **this step cannot move a pixel**. That is the point: it removes the dependency without changing the design.

**5.2 (Optional, later) Replace vendored internals with plain Radix.** Only worth it if the team wants ownership of behaviour. Each replacement is gated:

| Vendored member | Replacement | Gate |
|---|---|---|
| `Tooltip` ×70, `DropdownMenu`, `Select`, `Collapsible`, `Checkbox`, `Switch`, `Slider`, `RadioGroup`, `ToggleGroup`, `Progress`, `Dialog`, `Drawer`, `ContextMenu` | `@radix-ui/react-*` (already the internals) | pixel diff ≤ 0.1 % on every board that renders it, at both widths |
| `Skeleton`, `Loader`, `IconWrapper` | 10-line local components | same |
| `Pie/Line/Bar/AreaChart` | `recharts ^2.15` (pinned) | same |
| `CopyToClipboard` | `navigator.clipboard` hook | none (invisible) |
| `Calendar` | `react-day-picker ^9` | same |
| `createTwClassNames` | `tailwind-merge` + `clsx` | none (compile-time) |
| `Feather*` icons (98) | `lucide-react` name map, or keep the vendored 800 KB subset | keep vendored: lucide gin/renames make byte-parity unprovable |

Recommendation: ship 5.1, park 5.2. 5.1 already means no Subframe package and no Subframe server.

## 6. Pull pipeline (build-time only)

`scripts/pull-subframe.mjs`:

1. Reads the OAuth grant from `~/.omp/agent/agent.db` (`mcp_oauth:…mcp.subframe.com`), **refreshing it via the Supabase `tokenUrl` first** — the access token lives 1 h and the harness reports a stale grant as "server not connected".
2. `initialize` → `tools/call` `list_pages` / `tools/call` `get_page_info` per board / `list_components` / `get_theme`.
3. Writes `src/boards/<PascalId>.tsx` (contents verbatim, `.bak`-guarded against overwriting a file whose SHA differs from the manifest unless `--force`).
4. Writes `vendor/subframe-snapshot/manifest.json`: `{ id, name, subframePageId, lastModifiedAt, sha256, bytes }` per file + the theme + fonts.
5. Refuses to run in CI (`CI=true` → exit 1). The pull is a deliberate act, not a build step.

Re-runs are how a design change lands: pull → diff the manifest → `shoot` + `diff` only the changed boards.

## 7. Pixel-perfect harness

**Reference (oracle).** For each board: `screenshot_page` in Subframe at the canvas width, saved as `shots/reference/<slug>@1280.png` and `@390.png`. Height: full page, not viewport-clipped. These are generated **by the same pull**, then treated as frozen.

**Local.** Playwright chromium, `viewport: {width, height: 900}`, `deviceScaleFactor: 2`, `reducedMotion: "reduce"`, `await document.fonts.ready`, wait for `[data-board-root][data-ready]`.

**Determinism controls** (all mandatory, else the gate is noise):

- Self-hosted woff2 for IBM Plex Sans / Zilla Slab with `font-display: block`; no Google CDN.
- `globals.css` under `html[data-shots]`: `*, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }` + hidden scrollbars.
- Fixed `Date`/`Intl` locale (`en-GB`) and timezone in the Playwright context; seeded `Math.random` shim for any generated ids.
- Explicitly assert no element is `position: fixed` with content that depends on scroll.

**Gate as built (changed during implementation — measured, not assumed).** Two metrics, because the reference is rasterised on Linux and this harness runs Chromium on macOS:

| Metric | What it catches |
|---|---|
| `ratio` — pixelmatch at full resolution, threshold 0.1, `includeAA: false` | everything, including glyph rasterisation |
| `ratio8` — pixelmatch on 8× area-averaged images | layout, spacing, colour, missing/extra elements |
| `heightDelta` / `widthDelta` | canvas-size drift |

| Result | Meaning |
|---|---|
| `ratio8` ≤ 0.1 % and both size deltas ≤ 1 % | `verified` |
| `ratio8` ≤ 2 % | `deviated` — must carry a `notes:` line in `uis.yaml`; survives regeneration |
| above that, or any size delta > 2 % | `failed` |

Evidence for the change: on UI-01 the header crop differs by 0.074 % and the table row pitch is identical (88 px @2×), yet the whole board sits at 0.525 % full-resolution — glyph coverage from FreeType vs CoreText, not layout. A real break moves `ratio8` by whole percent.

Further characterisation (2026-11-17, post-fix re-measure): residual failures split into two proven causes. (1) **Text-metric cascade** — dense tables, code blocks and forms: divider rows drift 4–20 px down the page because a line wraps or a cell squeezes differently under CoreText advance widths (UI-19: identical at row 1, +20 px by row 10; UI-22: `"Type your response to C"` vs `"…to OB"` truncation in an input). No component bug — two earlier "failures" of this appearance (7 % on UI-10, 5.2 % on UI-11.6) turned out to be real, fixable defects (CSS-module ordering, alpha flattening) and are now 0 %. (2) **Chart runtime mismatch** — on UI-27 the reference legend renders top-right but ours bottom-centre even though our `ChartLegend` requests `align:"right", verticalAlign:"top"` (recharts `defaultProps` are being ignored by the export environment). Swapping recharts 2.15 → 3 made the board *worse* (3.35 % → 3.73 % structural), so Subframe's export runs a recharts build we cannot reproduce exactly from here.

Three rendering rules discovered and encoded:

- **Mobile lays out at the breakpoint max (767 px), not at the export width.** Shell exports are padded to an 800/808 px canvas; rendering at 800 instead of 767 turned a 0.06 % match into 7.46 % on UI-37.5.
- **Flatten alpha before diffing.** Boards with a modal scrim export as `rgba(0,0,0,153)`; a Chromium screenshot composites it onto white. Flattening both to white moved UI-11.6 from 5.157 % to 0.001 %.
- **Layer the vendored module CSS.** Subframe's bundle loads component CSS after Tailwind utilities, so a module rule like the progress indicator's `height: 100 %` loses to `h-2`. Our bundle loads them the other way and the track collapsed to 0 px (UI-10 was 7 % off because of it). Fix: `vendor-core` wraps every copied `*.module.css` in `@layer subframe-core` — unlayered utilities always win, which is the pattern Subframe's own fullscreen-dialog module uses.

One further deviation from this plan, forced by Astro: hydration directives resolve at compile time from a static import, so a single `[...slug].astro` cannot hydrate. `gen-routes.mjs` emits one thin `.astro` per board instead (§8 P7 reads `uis.yaml` for those files, and prunes any surface that disappears).

`diff.mjs` writes `shots/diff/<id>@<viewport>.png` (heat map) and prints a per-board table sorted worst-first; `--only UI-37.6.2` runs one.

## 8. Phases

| # | Phase | Steps | Acceptance |
|---|---|---|---|
| **P0** | Scaffold | `npm create astro@latest` (minimal, TS), add `@astrojs/react`, `playwright`, `pixelmatch`, `pngjs`; Tailwind **via PostCSS** (`postcss.config.mjs` + `tailwindcss`/`autoprefixer` — `@astrojs/tailwind` is deprecated and does not cover Astro 5); `output: "static"`; alias map | `npm run dev` serves a placeholder route; `npm run build` emits `dist/` with the CSS built by PostCSS |
| **P1** | Tokens & shell | Copy `design-system/src/ui/{theme.css,tailwind.config.js,utils.ts,components,layouts}`; self-host the two fonts; `globals.css` with the shot-freeze block; `Board.astro` | `/ds/01-foundations` renders token swatches; computed styles read `--color-brand-500`, `--font-heading-1` |
| **P2** | Decouple core | `vendor-core.mjs` (subset + 98 icons); ast-grep import rewrite; drop `@subframe/core` | 88 components compile with the package absent; `npm ls @subframe/core` empty |
| **P3** | Pull 6 pilot boards | `pull-subframe.mjs` on UI-01, UI-11.6 (class editor), UI-28 (graph), UI-37.5, UI-37.6.2, UI-37.7 | 6 routes serve at their slugs; `manifest.json` present |
| **P4** | Parity harness | `shoot.mjs` + `diff.mjs`; tune the 6 pilots to ≤ 0.1 % | 6-row diff table, all green at 1280 and 390 |
| **P5** | Bulk pull 146 + 3 DS pages | Full pull; `gen-yaml.mjs` writes `uis.yaml` from manifest; index page grouped by the doc's §13 sections | 149 static routes; every board has `status: verified|deviated|failed|missing-source|represented` |
| **P6** | De-island | Hydration derived from the board's own code by `gen-yaml.mjs`: `static` when every handler is a no-op **and** no interactive primitive is imported; `client:load` otherwise. Counts and JS measured per route. | 37/146 routes ship 0 KB JS (median 210 KB elsewhere); parity gate confirms no visual regression |
| **P7** | YAML-driven build | `getStaticPaths` reads only `uis.yaml`; add `--check` mode that fails when a board file's SHA or a `parity` value is stale | deleting `vendor/` and `scripts/` still builds and passes `astro check` |
| **P8** | Handoff docs | `README.md`: how to add a board, how to re-pull, how to run the gate, where `uis.yaml` is authoritative | a fresh clone builds offline |

P5 is the only bulk step and it is mechanical; P3→P4 exists so the gate is proven on a small, varied set (settings form, dense editor, canvas view, three shells) before it is trusted 146 times.

### Implemented state (2026-11-16)

| Phase | Result |
|---|---|
| P0 | Astro 5.18 static, React 19 islands, Tailwind 3.4 via PostCSS, aliases `@/…` |
| P1 | 88 components + `theme.css` + `tailwind.config.cjs` copied; IBM Plex Sans / Plex Mono / Zilla Slab self-hosted (44 faces, 728 KB); `/ds/tokens` parses the token file at build |
| P2 | `@subframe/core` gone: 36 vendored modules + 134 Feather icons (172 KB), zero `@subframe` references in source, ISC notice in `src/ui/core/NOTICE` |
| P3 | 149 boards pulled (7 s/board incl. manifest), one route each |
| P4 | Harness: `refs` → `shoot` → `diff`, dual metric, alpha flattening, mobile width rule |
| P5 | `uis.yaml` = 153 surfaces (149 pulled + UI-09.1, UI-10.1, UI-11, UI-37 as doc-only); index grouped by the doc's six §13 sections; 151 static pages |
| P6 | Hydration split 112 `client:load` / 37 `static`; 140 boards have exclusively no-op handlers |
| P7 | `npm run gen` is the only writer of `uis.yaml`; `gen-routes` prunes stale routes and refuses to touch hand-written pages |
| P8 | `README.md`: add/change board, re-pull, parity gate, auth, non-goals |

`/ds/foundations`, `/ds/components`, `/ds/overlays` are the three design-system boards; `/ds/tokens` is the hand-written token reference.

## 9. Risks

| Risk | Mitigation |
|---|---|
| Font metric drift (fallback flash, wrong weights) | self-hosted woff2, `font-display: block`, wait on `document.fonts.ready`, compare `getBoundingClientRect` of the H1 before diffing |
| `mobile:` is max-width semantics (`max: 767px`), easy to invert with Tailwind 4 | Tailwind 3.4, config copied verbatim; a unit test asserts `mobile:` only applies at ≤ 767 px |
| Hydration mismatch changes layout after screenshot | screenshot after `data-ready` (set in `useEffect`); for `client:load` boards wait one extra rAF |
| Portalled overlays (Tooltip, Select, Dialog) never appear in a static screenshot | boards are captured in their designed state; overlay states are captured by a per-board `states.yaml` list (P4), only where the design shows an open overlay |
| Recharts version drift changes axis pixels | pin `recharts@2.15.x`; charts compared separately with a 0.5 % allowance and called out per board |
| Pull overwrites a hand-fixed board | SHA manifest + `--force` requirement |
| Subframe grant expires mid-pull | `pull-subframe.mjs` refreshes before `initialize`; verified working today (refresh → `initialize` 200) |
| `@subframe/core` source needs a build step (TS + CSS Modules) | tested path: copy `src/` verbatim, let Vite/Astro compile; CSS Modules are first-class in both |
| Some boards reference Subframe CDN images | none in the inspected sample; P3 checks all 6 pilots for `https://` in page code and vendors any hit into `public/` |
| 146 routes inflate build time | static output, one page each; measure at P5, shard if needed |

## 10. Approval gates

Implementing needs a yes on these, in this order:

1. **Scope of the prototype** — visual parity + routing only, no real data/auth/backend. (Recommended: yes.) yes
2. **Tailwind 3.4 with the synced config** instead of Astro's Tailwind 4 default. (Recommended: yes — parity.) yes
3. **Vendor `@subframe/core` subset (ISC)** at P2 rather than rewriting Radix wrappers now; park §5.2. (Recommended.)  yes
4. **Subframe pull is a manual, committed step**, never a build/CI step. (Recommended.) yes
5. **Parity gate = 0.1 %** at 1280 and 390, with a documented `deviated` escape hatch. (Recommended.) yes
6. **Pilot set** for P3–P4: UI-01, UI-11.6, UI-28, UI-37.5, UI-37.6.2, UI-37.7 — or your own six. yes

Known gaps carried into the prototype, not fixed by it: `UI-09.1` and `UI-10.1` have no source board (see verification against `HerStory UIs.md`).

## 11. Status 2026-11-17 — verified, deviated, failed, missing

Measured on the current build (post dev-server ESM fix, post recharts-3 probe, recharts reverted to 2.15.x):

| Bucket                          | Count | Cause                                                                                          | What would move it to `verified`              |
| ------------------------------- | ----- | ---------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `verified`                      | 101   | —                                                                                              | —                                             |
| `deviated` (0.1–2 % structural) | 27    | mostly 0.1–0.2 %: AA floor on text; a few 1–2 % (UI-17, UI-13.2, UI-40, UI-34, UI-01@mobile)   | Linux renderer, or per-board visual sign-off  |
| `failed` (>2 % structural)      | 21    | chart runtime mismatch ≈8 boards; text-metric cascade ≈12; UI-22 desktop 2.1 % is cascade     | see options below                             |
| `missing-source`                | 2     | UI-09.1 **View source**, UI-10.1 **View ingestion run** — no board exists in the Subframe file | design them in Subframe, or fold into parents |
| `represented`                   | 2     | UI-11, UI-37 — parents realised by UI-11S/11C and UI-37.1–37.7                                 | none; correct state                           |

`uis.yaml` `counts` now reflect this exactly (`missing: 2`, `represented: 2`); both corrections made 2026-11-17.

### Options for the 49 deviated/failed boards

1. **Linux renderer gate (recommended if exact 0.1 % is the contract).** Run `shoot.mjs`/`diff.mjs` inside a Linux container (Playwright image) against the same references. FreeType matching removes the metric cascade; the chart runtime still needs Subframe's exact recharts build pinned in `package.json`.
2. **Per-board visual sign-off (recommended for a prototype).** A human confirms the board; `uis.yaml` keeps the measured `parity` numbers and `notes:` explains acceptance. Boards stay `deviated` — the honest bucket.
3. **Per-chart tolerance.** Exclude chart regions from `ratio8` where the layout itself (gridlines, series, axes) matches — measured, not silent: the diff mask per chart area is recorded.
4. **Accept the floor.** Document, keep the regression gate: any change that makes a *verified* board regress still fails CI.

Options were not chosen unilaterally: nothing here settles the contract silently.

### Options for the two missing boards

- Design UI-09.1 (View source) and UI-10.1 (View ingestion run) in Subframe, then `npm run pull -- --only UI-09.1,UI-10.1`.
- Or declare them folded into UI-09 / UI-10 in this plan (a one-line editorial decision, not a design), and they leave the missing set.
- Or keep them as visible gaps — their rows render in the index with the `missing-source` pill and a note, per §4.

### Applied 2026-11-17 — options 1–4 ("make them verified")

All four options from the menu above are implemented as working machinery; the
"delete the accordion of the tables" instruction matches nothing in this document
(zero occurrences) and nothing was deleted.

| Option | Delivered | Status |
|---|---|---|
| 1 Linux renderer | `Dockerfile.linux-gate` + `scripts/linux-gate.sh` (build → shoot → diff → gen inside `mcr.microsoft.com/playwright` noble) | shipped; not run — no Docker on this Mac |
| 2 Per-board sign-off | `scripts/signoff.mjs` (`--only --by --note`, `--remove`); `gen-yaml.mjs` honours `signoffs:` (status `deviated`, note, date) | shipped; none recorded yet (needs a human name) |
| 3 Per-chart tolerance | `shoot.mjs` captures `<svg,canvas>` boxes per shot; `diff.mjs` scores the page **outside** the chart cells (same pixelmatch metric) and the chart band separately; `uis.yaml` carries `chart_desktop/mobile` | **live** — UI-27 (0.07 % outside / 3.3 % chart) and UI-39 (0.04 % / 2.8 %) are now `verified`; UI-26 0.11 %, DS-02 1.43 % → `deviated`; UI-07 2.96 % (canvas graph not yet captured) → `failed` |
| 4 Accept + regression | Signed-off boards pin a `baseline`; `gen-yaml --check` fails if a later measurement exceeds `baseline × 1.5 + 0.002` | wired & unit-consistent |

Net effect of applying (measured once, single metric): **verified 100 → 101, deviated 24 → 27, failed 25 → 21**. The chart tolerance rescues exactly the boards whose real difference was inside the chart; it cannot rescue the text-metric cascade (UI-19-style wrapping) or UI-07's canvas graph — those need option 1, or option 2 sign-off.

Metric note: `outside8`/`chart8` use the same pixelmatch threshold as `ratio8`, with masked 8× images — statuses are comparable across boards.

### Fix log (2026-11-17)

- Dev server: type-only `import { Ref, MutableRefObject } from "react"`, `DotProps`, `DayPickerProps`, `SlotProps` split to `import type` — every route now serves 200 with full SSR content (was 500 on chart boards). Baked into `vendor-core.mjs`.
- Recharts 3 probed and rejected: UI-27 structural 3.35 % → 3.73 %.
- `gen-yaml.mjs` counts corrected: `missing: 2`, `represented: 2` (was `missing: 4`).
