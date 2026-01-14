
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

All 35+ components are fully functional with consistent variants and sizing. Each component is in `src/components/`:

### Core Components with Props & Variants

#### **Button.astro**
- **Props:** `variant`, `size`, `shape`, `disabled`, `href`, `type`, `text`, `class`
- **Variants:** `primary` | `secondary` | `outline` | `danger` | `link`
- **Sizes:** `sm` | `md` (default) | `lg`
- **Shapes:** `rounded` (default) | `pill` | `square`
- **Example:** `<Button variant="primary" size="lg" shape="pill" text="Click me" />`

#### **Input.astro**
- **Props:** `type`, `value`, `placeholder`, `name`, `disabled`, `required`, `size`, `className`
- **Types:** `text` (default) | `email` | `password` | `number`
- **Sizes:** `sm` | `md` (default) | `lg`
- **Example:** `<Input type="email" placeholder="Enter email" size="md" />`

#### **Card.astro**
- **Props:** `title`, `value`, `icon`, `variant`, `className`
- **Variants:** `default` | `elevated` | `outlined`
- **Example:** `<Card title="Stats" value="150" variant="elevated" />`

#### **Badge.astro**
- **Props:** `text`, `size`, `variant`, `className`
- **Variants:** `default` | `primary` | `success` | `warning` | `danger` | `info`
- **Sizes:** `sm` | `md` (default) | `lg`
- **Example:** `<Badge text="New" variant="success" size="md" />`

#### **Alert.astro**
- **Props:** `type`, `title`, `children`, `closeable`, `onClose`, `className`
- **Types:** `success` | `error` | `warning` | `info` (default)
- **Example:** `<Alert type="success" title="Success!">Operation completed</Alert>`

#### **Modal.astro**
- **Props:** `open`, `title`, `children`, `size`, `onClose`, `showCloseButton`
- **Sizes:** `sm` | `md` (default) | `lg` | `xl`
- **Example:** `<Modal open={true} title="Confirm" size="md">Content here</Modal>`

#### **Tabs.astro**
- **Props:** `tabs` (array), `active` (index), `onTabChange`
- **Example:** `<Tabs tabs={['Tab 1', 'Tab 2']} active={0} />`

#### **Checkbox.astro**
- **Props:** `label`, `checked`, `onChange`, `size`, `disabled`, `name`, `value`, `className`
- **Sizes:** `sm` | `md` (default) | `lg`
- **Example:** `<Checkbox label="Agree" checked={false} />`

#### **Radio.astro**
- **Props:** `label`, `checked`, `onChange`, `size`, `name`, `value`, `disabled`
- **Sizes:** `sm` | `md` (default) | `lg`
- **Example:** `<Radio label="Option" name="group" value="1" />`

#### **Select.astro**
- **Props:** `options` (array), `value`, `onChange`, `placeholder`, `disabled`, `size`
- **Sizes:** `sm` | `md` (default) | `lg`
- **Example:** `<Select options={[{label: 'A', value: '1'}]} />`

#### **Textarea.astro**
- **Props:** `value`, `placeholder`, `disabled`, `rows`, `className`, `onChange`
- **Rows:** Default is 4
- **Example:** `<Textarea placeholder="Enter text" rows={6} />`

#### **Toggle.astro**
- **Props:** `checked`, `onChange`, `disabled`, `label`
- **Example:** `<Toggle label="Enable" checked={false} />`

### Display Components

#### **Pagination.astro**
- **Props:** `currentPage`, `totalPages`, `onPageChange`
- **Example:** `<Pagination currentPage={1} totalPages={5} />`

#### **Progress.astro**
- **Props:** `percentage`, `label`, `variant`
- **Variants:** `default` | `success` | `warning` | `danger`
- **Example:** `<Progress percentage={75} label="Loading" />`

#### **Spinner.astro**
- **Props:** `size`, `variant`
- **Sizes:** `sm` | `md` | `lg`
- **Variants:** `primary` | `secondary`
- **Example:** `<Spinner size="md" />`

#### **Avatar.astro**
- **Props:** `src`, `alt`, `size`, `initials`
- **Sizes:** `sm` | `md` | `lg` | `xl`
- **Example:** `<Avatar size="lg" initials="JD" />`

#### **Breadcrumb.astro**
- **Props:** `items` (array of {label, href})
- **Example:** `<Breadcrumb items={[{label: 'Home', href: '/'}, {label: 'Page'}]} />`

#### **Link.astro**
- **Props:** `href`, `text`, `external`, `variant`
- **Variants:** `primary` | `secondary` | `danger`
- **Example:** `<Link href="/page" text="Visit" external={false} />`

#### **Tooltip.astro**
- **Props:** `text`, `position`, `children`
- **Positions:** `top` | `bottom` | `left` | `right`
- **Example:** `<Tooltip text="Hint" position="top"><button>Hover me</button></Tooltip>`

### Layout Components

#### **Grid.astro**
- **Props:** `cols`, `gap`, `children`
- **Cols:** Number 1-12 or responsive like "md:grid-cols-2"
- **Example:** `<Grid cols={3} gap="4"><Item /><Item /><Item /></Grid>`

#### **Stack.astro**
- **Props:** `direction`, `gap`, `align`, `children`
- **Direction:** `row` (default) | `col`
- **Gaps:** `1` | `2` | `3` | `4` | `6` | `8`
- **Example:** `<Stack direction="col" gap="4"><Item /><Item /></Stack>`

#### **Divider.astro**
- **Props:** `orientation`, `className`
- **Orientation:** `horizontal` (default) | `vertical`
- **Example:** `<Divider orientation="horizontal" />`

#### **Navbar.astro**
- Props for navigation with responsive design
- **Features:** Logo, links, dropdown menu support
- **Example:** `<Navbar />`

#### **Sidebar.astro**
- Props for collapsible sidebar layout
- **Features:** Responsive, nested items support
- **Example:** `<Sidebar />`

#### **VerticalNav.astro**
- Props for vertical navigation menu
- **Features:** Active state, icons, nested items
- **Example:** `<VerticalNav />`

#### **Footer.astro**
- Responsive footer with multiple sections
- **Features:** Links, social icons, copyright
- **Example:** `<Footer />`

### Data Display Components

#### **Table.astro**
- **Props:** `columns`, `rows`, `striped`, `hover`
- **Example:** `<Table columns={['Name', 'Email']} rows={data} />`

#### **List.astro**
- **Props:** `items`, `ordered`, `className`
- **Example:** `<List items={['Item 1', 'Item 2']} ordered={false} />`

#### **Accordion.astro**
- **Props:** `items` (array with title/content), `allowMultiple`
- **Example:** `<Accordion items={[{title: 'Q', content: 'A'}]} />`

#### **Dropdown.astro**
- **Props:** `trigger`, `items`, `position`, `onSelect`
- **Positions:** `top` | `bottom` (default) | `left` | `right`
- **Example:** `<Dropdown trigger="Menu" items={['Item 1', 'Item 2']} />`

### Specialized Components

#### **Chip.astro**
- **Props:** `label`, `onRemove`, `variant`, `icon`
- **Variants:** `default` | `primary` | `outlined`
- **Example:** `<Chip label="Tag" onRemove={() => {}} />`

#### **Stepper.astro**
- **Props:** `steps`, `activeStep`, `onStepChange`, `variant`
- **Variants:** `vertical` | `horizontal` (default)
- **Example:** `<Stepper steps={['Step 1', 'Step 2']} activeStep={0} />`

#### **SectionTitle.astro**
- **Props:** `title`, `subtitle`, `alignment`, `className`
- **Alignment:** `left` | `center` (default) | `right`
- **Example:** `<SectionTitle title="Section" subtitle="Description" />`

#### **Toast.astro**
- **Props:** `message`, `type`, `position`, `duration`, `onClose`
- **Types:** `success` | `error` | `warning` | `info`
- **Positions:** `top-right` (default) | `top-left` | `bottom-right` | `bottom-left`
- **Example:** `<Toast message="Saved!" type="success" />`

#### **Typography.astro**
- **Props:** `element`, `size`, `weight`, `className`, `children`
- **Elements:** `h1` | `h2` | `h3` | `p` | `span` | `small`
- **Sizes:** `xs` | `sm` | `md` | `lg` | `xl` | `2xl`
- **Weights:** `light` | `normal` | `semibold` | `bold`
- **Example:** `<Typography element="h2" size="lg" weight="bold">Title</Typography>`

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

- **Supabase:** Optional authentication for login/signup/logout
  - Client initialized in `src/lib/supabase.ts`
  - Credentials stored as environment variables
  - React auth components: `LoginForm.jsx`, `SignupForm.jsx`, `LogoutButton.jsx`
- **Middleware** (`src/middleware.ts`):
  - Sets `locals.user` from Supabase session on every request (if configured)
  - Gracefully handles missing Supabase configuration
  - Includes comprehensive error handling with try-catch blocks
  - Dashboard is public demo (comment out protection to re-enable auth requirement)

## Deployment

- **Live URL:** https://ui-library-sepia-one.vercel.app/
- **Repository:** https://github.com/muneerkhanTD/ui-library
- **Deployment Platform:** Vercel (auto-deploys on GitHub push)
- **Build Adapter:** @astrojs/vercel
- **Dashboard:** Prerendered as static page at `/dashboard`

## Directory Structure

```
src/
├── components/              # 35+ reusable UI components
│   └── auth/               # React auth components (LoginForm, SignupForm, LogoutButton)
├── content/                # MDX content and config
├── layouts/                # Page layouts (BaseLayout, DashboardLayout, Sidebar)
├── lib/                    # Utilities (supabase.ts)
├── pages/                  # Routable pages
│   └── docs/              # Dynamic docs pages
├── sections/               # Reusable page sections
├── styles/                 # Global CSS
├── types/                  # TypeScript definitions
├── utils/                  # Helpers (classnames.ts)
└── middleware.ts           # Auth and request middleware
```

## Build & Environment

- **Adapter:** `@astrojs/vercel` for production deployment
- **Env vars required:**
  - `PUBLIC_SUPABASE_URL` - Supabase project URL (optional, for auth features)
  - `PUBLIC_SUPABASE_ANON_KEY` - Supabase public key (optional, for auth features)
- **Commands:** 
  - `npm run dev` - Start development server on `http://localhost:3000`
  - `npm run build` - Create production build (outputs to `.vercel/output/`)
  - `npm run preview` - Preview production build locally
- **Deployment:** Configured for Vercel, Netlify, and other Node.js hosts
- **Tailwind config:** Verifies all file extensions (`.astro`, `.jsx`, `.js`, `.ts`, `.tsx`) are included in `content`

## Common Tasks

- **Add new component:** Create `src/components/MyComponent.astro` with props following the variant/size pattern
- **Create new page:** Create `src/pages/my-page.astro`, import `BaseLayout` and `Footer`
- **Style components:** Use Tailwind utility classes, use `cn()` from `src/utils/classnames.ts` for conditional styles
- **Add variants:** Define as object in component (see Button, Badge, Card examples)
- **Add sizes:** Define as object with standard sizes: `sm`, `md`, `lg`
- **Deploy:** Push to GitHub, Vercel auto-deploys within 1-2 minutes

## Performance & Best Practices

- Astro generates zero JavaScript by default (islands of interactivity with React when needed)
- Static pages prerendered at build time for best performance
- Use `export const prerender = true;` for static pages, `export const prerender = false;` for dynamic pages
- Middleware runs on every request and should be kept lightweight
- Lazy load images and use responsive sizes
- Keep component props simple and well-documented

## Styling Best Practices

- Always use Tailwind utility classes (no custom CSS when possible)
- Use the `cn()` helper for conditional classes: `cn(base, condition && conditional, extraClass)`
- Variants should be defined as objects: `const variants = { primary: 'text-blue-600', ... }`
- Sizes should be consistent: `sm | md | lg`
- Colors should use Tailwind palette: `indigo`, `purple`, `blue`, `gray`, `red`, `green`, etc.

## If Uncertain

- Check existing components in `src/components/` for patterns (Button.astro, Card.astro, Badge.astro)
- Review `src/layouts/BaseLayout.astro` for page structure patterns
- Ask before changing middleware or build configuration
- Many pages rely on `locals.user` context from middleware
- Test changes locally with `npm run dev` before pushing

---
**Last updated: January 14, 2026**
