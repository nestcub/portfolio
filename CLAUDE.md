# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Next.js on port 3000)
npm run build    # Production build
npm run lint     # ESLint via next lint
npx drizzle-kit push       # Push schema changes to Neon (no migration files)
npx drizzle-kit generate   # Generate migration SQL files
npx drizzle-kit migrate    # Apply generated migrations
```

No test suite is configured. TypeScript and ESLint errors are intentionally ignored during builds (`next.config.mjs` sets `ignoreBuildErrors: true` and `ignoreDuringBuilds: true`).

## Architecture

Next.js 15 App Router portfolio site with a dark-only theme (black background, `text-white`, `border-white/10` accents throughout). There is no light mode — `ThemeProvider` is locked to `defaultTheme="dark"` with `enableSystem={false}`.

**Routes (under `app/`):**
- `/` — Home/intro page (`app/page.tsx`) — static, no data fetching
- `/projects` — Client component with a hardcoded projects array; opens a `<Dialog>` on click
- `/blog` — Public blog listing; shows only published posts ordered by `published_at` desc
- `/blog/[slug]` — Public post page; renders Markdown via `react-markdown` + `remark-gfm` with `prose-invert` typography
- `/admin/login` — Password form; validates against `ADMIN_SECRET` env var, sets a 7-day httpOnly cookie
- `/admin/posts` — Protected post list with status badges, Edit links, and Delete actions
- `/admin/posts/new` — Create post; split-pane Markdown editor with live preview
- `/admin/posts/[id]/edit` — Edit post; pre-populated form, "View live" link when published

**UI components (`components/ui/`):**
shadcn/ui components (full suite installed). Use `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for conditional class names. `hooks/use-mobile.tsx` and `hooks/use-toast.ts` are consumed internally by shadcn/ui's `sidebar.tsx` and `toaster.tsx`.

**Layout:**
`app/layout.tsx` wraps everything in `ThemeProvider` and renders `<Navbar />` as a fixed bottom bar. Active navbar routes: Know me (`/`), Projects (`/projects`), Blog (`/blog`). A Photos route exists but is commented out.

**Styling:**
Tailwind CSS v3 with CSS variable-based color tokens (defined in `app/globals.css`). `Inter` is the only font, loaded via `next/font/google` as `--font-sans`. `@tailwindcss/typography` is installed — use `prose prose-invert` for Markdown-rendered content.

## Database

- **Provider:** Neon (serverless PostgreSQL)
- **ORM:** Drizzle ORM (`drizzle-orm/neon-http` adapter via `@neondatabase/serverless`)
- **Client:** `app/db/index.ts` — exports `db` (Drizzle instance with full schema)
- **Schema:** `app/db/schema.ts` — single `posts` table
- **Config:** `drizzle.config.ts` — uses `DATABASE_URL` from `.env`

### posts table

| Column | Type | Notes |
|---|---|---|
| `id` | serial PK | |
| `title` | text | required |
| `slug` | text | unique; auto-generated from title at creation, never changed |
| `excerpt` | text | nullable; shown on listing page and in meta description |
| `content` | text | raw Markdown |
| `status` | enum(`draft`, `published`) | default `draft` |
| `published_at` | timestamptz | set once when first published; never overwritten |
| `created_at` | timestamptz | default now |
| `updated_at` | timestamptz | manually set to `new Date()` on every update |

## CMS / Blog conventions

- **Auth:** `middleware.ts` guards all `/admin/*` routes (except `/admin/login`) by checking the `admin_token` cookie against `ADMIN_SECRET`. Cookie is httpOnly, 7-day expiry.
- **Slug:** Generated via `slugify()` in `app/admin/posts/actions.ts` at creation. Never regenerated on edit to keep URLs stable.
- **Published_at:** Set to `new Date()` only on the first publish transition. Subsequent saves do not overwrite it.
- **Cache invalidation:** All server actions call `revalidatePath` on `/admin/posts`, `/blog`, and `/blog/[slug]` after mutations.
- **Dynamic rendering:** All DB-querying pages use `export const dynamic = 'force-dynamic'` to avoid prerender failures at build time when the table may not exist.
- **Markdown editor:** `components/post-form.tsx` is a client component — split-pane with raw Markdown on the left and `ReactMarkdown` live preview on the right.
- **Reading time:** Computed at render time from word count (`words / 200`, min 1 min). No DB column.

## Required env vars

```
DATABASE_URL=     # Neon connection string
ADMIN_SECRET=     # Arbitrary secret; used as the admin cookie value
```

## Rules

- After every session where Claude has implemented a feature or made architectural changes, Claude must ask the user: **"Should I update CLAUDE.md to document what we built?"** before closing out. Do not update CLAUDE.md silently — always ask first.
