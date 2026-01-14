
# DevPath UI Library — Copilot Instructions

## Project Overview

- **Framework:** Astro (v5) with Tailwind CSS, some React support, and MDX integration
- **Purpose:** A complete, beautiful UI component library and starter site for .NET, Blazor, React, and modern web projects
- **Key Integrations:**
  - `@astrojs/mdx`, `@astrojs/react`, `astro-icon`
  - Supabase for authentication (see `src/lib/supabase.ts`)

## Where to Look First

- **Pages:** `src/pages/` (e.g. `home.astro`, `about.astro`, `components.astro`, `services.astro`, `docs/[slug].astro`)
- **Components:** `src/components/` (all UI components, each in its own file)
- **Layouts:** `src/layouts/` (e.g. `BaseLayout.astro`, `DashboardLayout.astro`)
- **Middleware:** `src/middleware.ts` (sets `locals.user` from Supabase, protects `/dashboard`)
- **Supabase Client:** `src/lib/supabase.ts` (uses env vars for Supabase)

## Project Conventions

- **Astro-first components:** All UI components use `Astro.props` for configuration. Example: `Button.astro` supports `variant`, `size`, `shape`, `disabled`, `href`, and `text`.
- **Styling:** Tailwind utility classes are used throughout. Use the `cn` helper (`src/utils/classnames.ts`) for conditional classes.
- **Variants pattern:** Most controls (Button, Input, Badge, etc.) use `variant` (e.g. `primary`, `secondary`, `outline`, `danger`, `link`) and `size` (`sm`, `md`, `lg`).
- **Component location:** All components are in `src/components/` (see list below).
- **Props:** Use clear, documented props for all components. Follow the pattern in `Button.astro` and `Card.astro`.

## UI Components Implemented

All components listed on the components page are now implemented and available in `src/components/`:

- Accordion
- Alert
- Avatar
- Badge
- Breadcrumb
- Button
- Card
- Checkbox
- Chip
- Divider
- Dropdown
- Footer
- Grid
- Input
- Link
- List
- Modal
- Navbar
- Pagination
- Progress
- Radio
- SectionTitle
- Select
- Sidebar
- Spinner
- Stack
- Stepper
- Table
- Tabs
- Textarea
- Toast
- Toggle
- Tooltip
- Typography
- VerticalNav

## Pages & Features

- **Home:** UI library showcase, .NET/Blazor benefits, component grid, tech stack, CTA
- **About:** Mission, team, values, timeline, benefit cards
- **Blog:** Dynamic posts, featured post, categories, author showcase, newsletter
- **Contact:** Hero, contact methods, form, quick info, FAQ, CTA
- **Services:** Hero, services grid, process, pricing, FAQ, CTA
- **Components:** Full component gallery, filter by category, feature highlights, quick start, category breakdown
- **Docs:** `/docs/[slug].astro` — detailed documentation for each component (variants, API, usage, accessibility)
- **Dashboard:** Professional layout, sidebar, stats, charts, table

## Navigation

- **Navbar:** Horizontal navigation on all pages (see `Navbar.astro`)
- **Sidebar:** Vertical navigation for dashboard (see `VerticalNav.astro`)

## Auth & Middleware

- **Supabase:** Handles login, signup, logout, and session management
- **Middleware:** `src/middleware.ts` sets `locals.user` and protects `/dashboard`

## Build & Environment

- **Env vars:** `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_ANON_KEY` required
- **Commands:** `npm run dev`, `npm run build`, `npm run preview`
- **Tailwind config:** Ensure all relevant file extensions are included in `content` for class scanning

## Patterns for Changes & PRs

- Add new components to `src/components/` using the same prop/variant conventions
- Use Tailwind and the `cn` helper for all styling
- Update `src/middleware.ts` for any auth/session changes
- Keep edits small and test locally (no automated tests yet)

## If Uncertain

- Ask before changing global behavior (middleware, env usage, build integrations)
- Many pages rely on `locals.user` and Tailwind class names

---
**This file is up to date as of January 8, 2026.**
