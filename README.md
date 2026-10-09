# synthwerk-widgets

**Synthwerk** · embeddable AI chat and vision widgets

[![status: rewrite](https://img.shields.io/badge/status-rewrite%20in%20progress-EE4FFF)](#status)
[![stack](https://img.shields.io/badge/stack-Vue%203.5%20custom%20elements-00FFF7)](#status)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## In 30 seconds

- A small loader element puts a launcher on any page. The widget app runs in an isolated iframe.
- Floating button on desktop, bottom sheet on mobile. Position, theme and language come from studio settings.
- Signed-in users only. Logged-out visitors see a sign-in prompt.

## Where it fits

```mermaid
flowchart LR
  host[any website or app] --> loader[loader element]
  loader --> frame[widget iframe: chat · vision]
  frame --> llm[synthwerk-llm]
  frame --> vision[synthwerk-vision]
  frame --> idn[synthwerk-identity]
```

- Ecosystem map: [synthwerk](https://github.com/VelimirMueller/synthwerk).
- Shared CI, lint configs and templates: [synthwerk-blueprint](https://github.com/VelimirMueller/synthwerk-blueprint).

## Status

| Item | State |
|---|---|
| Rewrite | Planned in epic **E3 Chat vertical slice** |
| Old code | Tag [`legacy-final`](../../tree/legacy-final): a Nuxt 3 chat page for the old GPT4All server |
| Branching | `main` deploys to dev, a `vX.Y.Z` tag to stg, an approved digest to prd |

- This repo was renamed. The old URL still redirects here.
