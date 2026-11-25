# HerStory Design and UI System

Design system, screen specifications, and a runnable pixel-parity prototype for **HerStory** — a
feminist historical-knowledge platform: sources, entities, adjudication, community review, and
publication.

This repository holds the *design and interface layer* only. It is published so the UI surface,
component contracts, and interaction model can be reviewed, reused, and built on.

## Contents

| Path | What it is |
|---|---|
| `design-system/` | Subframe-derived React + Tailwind component library: `src/ui/` (theme tokens, primitives, layouts), `src/pages/` (per-screen compositions) |
| `prototype/` | Astro + React pixel-parity prototype. Builds every board route, renders screens from `uis.yaml`, and verifies parity headlessly (`npm run shoot`, `npm run diff`) |
| `docs/` | Screen inventory (`HerStory UIs.md`), IA map (`HerStory UI Map.md`), the UI gate/QA plan and prototypes plan notes |
| `docs/ux/` | Usability requirements, the round-1 interaction evaluation, and its remediation plan |
| `docs/gate/` | `task-scripts.md` — protocol tasks T1–T7 as runnable steps against the prototype |
| `skills/` | `interaction-usability-audit` — the evaluation skill: workflow, dimension index (M1–M8), requirement index, evidence protocol, report template |
| `assets/` | `General UI.svg` — the system overview diagram |

## Prototype

```bash
cd prototype
npm install
npm run dev        # http://localhost:4321
npm run verify     # build → screenshots → parity diff → regenerate yaml/routes/labels → interaction gates
```

`prototype/uis.yaml` is the single machine-readable index of every screen and the components it
contains, keyed by the control's own visible label (a `Button` rendering "Search" is catalogued as
`Search`, not `Button`). `prototype/scripts/` holds the generators and the parity harness;
`node_modules/`, `dist/`, `.astro/`, and local screenshot output are not tracked.

## License

**Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)** — see [`LICENSE`](LICENSE).
You may share and adapt this material, including commercially, provided you give appropriate credit,
link to the license, indicate changes, and license your derivative under the same terms.

Code carve-out: the source files under `design-system/src/` and `prototype/` are software, and the
ShareAlike condition is intended to reach derivative *designs and interface work* built from this
system. If you reuse the code in a product, keep the attribution notice and state your changes;
you do not need to relicense unrelated code in your own application under CC BY-SA. Where CC BY-SA
4.0 is not a suitable license for executable code in your jurisdiction, CC BY-SA 4.0 remains the
governing license of this repository's contents as distributed here.

Third-party material — Subframe-generated component scaffolding, Radix UI primitives, and their
dependency licenses — remains under its own terms; see `design-system/package.json` and
`prototype/package.json` for the dependency set.

## Attribution

If you build on this work, credit it as:

> HerStory Design and UI System, CC BY-SA 4.0.
