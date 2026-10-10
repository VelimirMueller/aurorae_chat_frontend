<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/banner/hero-v2-light.svg">
  <img alt="SYNTHWERK-WIDGETS. Embeddable AI chat and vision widgets. Rewrite planned. Widgets, chat, vision, iframe." src="assets/banner/hero-v2-dark.svg" width="100%">
</picture>

<p align="center">

[![status: rewrite planned](https://img.shields.io/badge/status-rewrite_planned-10b981?style=flat-square&labelColor=0a0a0b)](#-05-status) [![VM. flagship](https://img.shields.io/badge/VM.-flagship-6366f1?style=flat-square&labelColor=0a0a0b)](https://github.com/VelimirMueller) [![license: MIT](https://img.shields.io/badge/license-MIT-a1a1aa?style=flat-square&labelColor=0a0a0b)](LICENSE) [![stack: Vue 3.5 custom elements](https://img.shields.io/badge/stack-Vue_3.5_custom_elements-a1a1aa?style=flat-square&labelColor=0a0a0b)](#-01-what-it-does)

</p>

> Embeds AI. Keeps its distance.

```text
 █████  ██  ██  ██  ██  ██████  ██  ██  ██   ██  ██████  █████   ██  ██
██      ██  ██  ███ ██    ██    ██  ██  ██   ██  ██      ██  ██  ██ ██
 ████    ████   ██████    ██    ██████  ██ █ ██  █████   █████   ████
    ██    ██    ██ ███    ██    ██  ██  ███████  ██      ██ ██   ██ ██
█████     ██    ██  ██    ██    ██  ██   ██ ██   ██████  ██  ██  ██  ██  ██
██   ██  ██████  █████    █████  ██████  ██████   █████
██   ██    ██    ██  ██  ██      ██        ██    ██
██ █ ██    ██    ██  ██  ██ ███  █████     ██     ████
███████    ██    ██  ██  ██  ██  ██        ██        ██
 ██ ██   ██████  █████    █████  ██████    ██    █████   ██

 ------  embeddable chat and vision widgets  -------------------------------
```

**synthwerk-widgets** holds the embeddable AI chat and vision widgets for [synthwerk](https://github.com/VelimirMueller/synthwerk).
The rewrite is planned. Until then, `main` holds a README. It holds it well.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/stats-v2-dark.svg">
  <img alt="2 WIDGETS PLANNED, CHAT AND VISION. 3 SERVICES BEHIND THEM. 1 ISOLATED IFRAME PER PAGE. 0 LINES OF CODE ON MAIN" src="assets/readme/stats-v2-light.svg" width="100%">
</picture>

<br>

## // 01 WHAT IT DOES

<img alt="01 WHAT IT DOES. A BUTTON. IT KNOWS ITS PLACE." src="assets/readme/divider-what-v2.svg" width="100%">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/features-v2-dark.svg">
  <img alt="ANY PAGE: A small loader element puts a launcher on any page. The widget app runs in an isolated iframe. DESKTOP AND MOBILE: Floating button on desktop, bottom sheet on mobile. Position, theme and language come from studio settings. SIGN-IN FIRST: Signed-in users only. Logged-out visitors see a sign-in prompt" src="assets/readme/features-v2-light.svg" width="100%">
</picture>

- One loader element puts a launcher on the page. The widget app runs in an isolated iframe.
- Floating button on desktop, bottom sheet on mobile.
- Position, theme and language come from studio settings.
- Signed-in users only. Logged-out visitors see a sign-in prompt.

<br>

## // 02 QUICK START

<img alt="02 QUICK START. NOTHING TO RUN. YET." src="assets/readme/divider-start-v2.svg" width="100%">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/start-v2-dark.svg">
  <img alt="Terminal: $ gh repo clone VelimirMueller/synthwerk-widgets | $ cd synthwerk-widgets | $ ls | LICENSE  README.md | # that is all of it today" src="assets/readme/start-v2-light.svg" width="100%">
</picture>

```bash
gh repo clone VelimirMueller/synthwerk-widgets
cd synthwerk-widgets
ls   # LICENSE and README.md, that is all of it today
```

- There is nothing to install, build or run yet. This is the honest quick start.

<br>

## // 03 HOW IT WORKS

<img alt="03 HOW IT WORKS. BOXES AND ARROWS, AS PLANNED." src="assets/readme/divider-how-v2.svg" width="100%">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/flow-v2-dark.svg">
  <img alt="PAGE -> LOADER -> IFRAME -> SERVICES. The iframe isolates the widget from the host page. On purpose." src="assets/readme/flow-v2-light.svg" width="100%">
</picture>

```text
 +--------+        +--------+        +---------------+
 |  any   |        | loader |        | widget iframe |
 |  page  |------->| element|------->| chat, vision  |
 +--------+        +--------+        +-------+-------+
                                          |  |  |
                 +------------------------+  |  +------------+
                 |                           |               |
            +----v---+                  +----v---+     +-----v----+
            |   llm  |                  | vision |     | identity |
            +--------+                  +--------+     +----------+
```

- The widget calls `synthwerk-llm`, `synthwerk-vision` and `synthwerk-identity`.
- The host page only meets the loader element. The iframe keeps the rest away from it.

<br>

## // 04 USAGE

<img alt="04 USAGE. FACTS FROM THE OLD README. KEPT." src="assets/readme/divider-usage-v2.svg" width="100%">

### Where it fits

- Ecosystem map: [synthwerk](https://github.com/VelimirMueller/synthwerk).
- Shared CI, lint configs and templates: [synthwerk-blueprint](https://github.com/VelimirMueller/synthwerk-blueprint).
- This repo was renamed. The old URL still redirects here.

### Old code

- Tag [`legacy-final`](../../tree/legacy-final): a Nuxt 3 chat page for the old GPT4All server.

### Branching

- `main` deploys to dev, a `vX.Y.Z` tag to stg, an approved digest to prd.

<br>

## // 05 STATUS

<img alt="05 STATUS. TRUE THINGS. IN SMALL BOXES." src="assets/readme/divider-status-v2.svg" width="100%">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme/status-v2-dark.svg">
  <img alt="rewrite: planned in epic E3, chat vertical slice. old code: tag legacy-final: Nuxt 3 chat page, old GPT4All server. chat widget: planned. vision widget: planned. branching: main to dev, tag to stg, approved digest to prd" src="assets/readme/status-v2-light.svg" width="100%">
</picture>

```text
[ STATUS ]  rewrite planned, epic E3
[ WORKS  ]  the README
[ NEXT   ]  chat vertical slice
```

There is no code and no test command yet. When the rewrite lands, the blueprint CI runs on every PR.

<br>

```text
-- EOF ------------------------------------------------ STAYS IN ITS FRAME --
```

---

<sub>VM. studio / flagship · open source · look per <code>vm-brand</code> playbook · [MIT](LICENSE) © 2026 Velimir Mueller</sub>
