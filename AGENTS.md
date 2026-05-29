# AGENTS.md — Michael Portfolio

> Single source of truth for AI agents in this repo.
> Public portfolio at [michael-baylard.dev](https://michael-baylard.dev).

---

## What this repo is

Next.js App Router portfolio (Once UI). MDX project pages, static content in `src/resources/`, deployed separately from Klarix and the research hub.

**Not Speaksense App.** No Neon agency schema, Stack Auth, or speaksense_app patterns.

---

## Session read tiers

| Tier | When | Read |
|---|---|---|
| **A — always** | Every session | This file + auto-loaded `.cursor/rules/*.mdc` |
| **B — content** | Editing projects, about, resume links | `src/resources/content.js` · relevant MDX in `src/app/work/projects/` |
| **C — deploy** | Env, auth gate, Vercel | `.env.example` · `src/app/api/check-auth/` |

---

## Auto-loaded rules

| Rule | Triggers on | Purpose |
|---|---|---|
| `portfolio-core.mdc` | always | Stack, paths, voice |
| `portfolio-content.mdc` | `src/**`, `public/**` | MDX, content.js, project cards |
| `model-routing.mdc` | always | Model selection (shared pattern) |

---

## Key paths

| Intent | Path |
|---|---|
| Home + featured projects | `src/app/page.tsx` · `src/resources/content.js` |
| Project MDX | `src/app/work/projects/*.mdx` |
| Project routing | `src/app/work/[slug]/page.tsx` |
| Global layout / meta | `src/app/layout.tsx` |
| Styles | `src/resources/custom.css` |
| Icons / static | `public/` |
| Resume PDF | `public/resume_ai_engineer.pdf` |

---

## Conventions

- **pnpm** for package management
- **App Router** — server components default; `"use client"` only when needed
- Project facts must match resume and LinkedIn — no inflated metrics
- Klarix and John Deere work are primary; Speaksense is historical portfolio entry only
- Run `pnpm lint` before claiming done on TS/React changes

---

## Global Cursor user rules

See `~/GitHub/research/CURSOR-USER-RULES.md` for the paste-ready User Rules block that routes across all four repos.
