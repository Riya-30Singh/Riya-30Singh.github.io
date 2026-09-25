# Riya Singh Portfolio

An editable single-page portfolio for Riya Singh, an MCA student and aspiring software developer.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/riya-portfolio/src/App.tsx` — portfolio content, sections, links, and interactions
- `artifacts/riya-portfolio/src/index.css` — visual system, responsive layout, and motion
- `artifacts/riya-portfolio/public/` — public static assets
- `artifacts/riya-portfolio/.replit-artifact/artifact.toml` — artifact routing and workflow metadata

## Architecture decisions

- The portfolio is a static client-side page; it does not require a database or API.
- The original page copy and section order are kept in the React source so the user can edit them directly.
- The design uses plain CSS with Manrope and DM Mono instead of the scaffolded utility styles.

## Product

The portfolio presents Riya's introduction, skills, selected projects, education, experience, and contact paths. It includes responsive anchor navigation, a mobile menu, project expansion and case-study dialogs, and mailto-based contact actions.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Add the real resume file at `artifacts/riya-portfolio/public/resume.pdf` if resume download links should serve a document.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
