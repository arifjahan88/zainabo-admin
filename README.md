# Zainabo Seller Center

A modern **seller marketplace admin UI** for managing catalog, orders insights, and store operations. Built as a responsive React SPA with a fixed dashboard shell (sidebar + header) and feature-based pages.

> Demo app with **dummy data only** — no backend or real API yet.

---

## What you can do

| Area | Status | Description |
|------|--------|-------------|
| **Dashboard** | Built | KPI cards, revenue & order charts, recent orders, live activity rail, pending tasks |
| **All Products** | Built | Search/filter catalog, stats, table, pagination, right-rail widgets |
| **Other nav routes** | Coming soon | Orders, inventory, delivery, marketing, customers, analytics, finance, reports, settings, support |

Default route: `/` → `/dashboard`

---

## Tech stack

- **React 19** + **TypeScript** + **Vite 8**
- **React Router 7** (`createBrowserRouter`)
- **Tailwind CSS 4** + **shadcn/ui** (`base-nova` / Base UI)
- **Recharts** — dashboard charts & KPI sparklines
- **react-day-picker** + **date-fns** — date range picker
- **Lucide React** — icons
- **Inter Variable** — typography
- **React Compiler** enabled via Babel

---

## Getting started

### Requirements

- Node.js 20+ recommended  
- Yarn (or npm/pnpm)

### Install & run

```bash
yarn
yarn dev
```

App runs at `http://localhost:5173` (Vite default).

### Other scripts

| Command | Purpose |
|---------|---------|
| `yarn build` | Typecheck + production build → `dist/` |
| `yarn build:test` | TypeScript only (`tsc -b`) |
| `yarn preview` | Preview production build |
| `yarn lint` | ESLint |
| `yarn format` | Prettier write |
| `yarn format:check` | Prettier check |

---

## Project structure

```
src/
├── App.tsx                 # RouterProvider + TooltipProvider
├── main.tsx
├── index.css               # Tailwind + design tokens (brand red, sidebar)
├── routes/
│   ├── router.tsx          # Route tree + lazy pages
│   └── routes.url.ts       # Central URL helpers (URLProducts, URLDashboard, …)
├── layouts/
│   ├── dashboard-layout.tsx
│   └── components/         # Sidebar, header, nav config, promo
├── features/
│   ├── dashboard/          # Dashboard page, charts, widgets, mock data
│   ├── products/           # All Products page, table, filters, widgets
│   └── common/             # Shared Coming Soon page
├── components/
│   ├── ui/                 # shadcn primitives (button, table, sidebar, …)
│   └── shared/             # PageLoader, StatusBadge, shell loader
├── lib/
│   ├── loadable.tsx        # lazy() + Suspense helper
│   └── utils.ts            # cn()
└── hooks/
    └── use-mobile.ts
```

### Conventions

- **Feature folders** — `pages/`, `components/`, `data/`, `types.ts`
- **Routes** — always use helpers from `src/routes/routes.url.ts` (no hardcoded paths)
- **Lazy loading** — layout, pages, and heavy chart chunks via `loadable()`
- **Dummy data** — under each feature’s `data/` folder

---

## Key screens

### Dashboard (`/dashboard`)

- Date range picker + settings toolbar  
- 5 KPI cards with sparklines (tooltips on hover)  
- Revenue overview (this week vs last week)  
- Order status & sales-by-channel donuts  
- Recent orders table + pending task cards  
- Right rail: live activities, system status, top categories  

Chart components on this page are code-split separately.

### All Products (`/products`)

- Header actions (export / import / add)  
- Product stat cards  
- Search + category / brand / status / stock filters  
- Selectable products table + pagination  
- Right rail: completion, help, quick actions, tips  

Responsive: stacks filters and hides secondary table columns on smaller screens; right rail moves below content below `xl`.

### Shell

- Dark sidebar (`#00143b`) with expandable Products menu  
- Header: breadcrumbs, global search (`⌘/Ctrl + K`), country/language, notifications, user menu  

---

## Routing

All path strings live in [`src/routes/routes.url.ts`](src/routes/routes.url.ts):

```ts
URLDashboard()  // '/dashboard'
URLProducts()   // '/products'
URLOrders()     // '/orders'
// …
```

Router: [`src/routes/router.tsx`](src/routes/router.tsx)

- `/` redirects to dashboard  
- Built pages: dashboard, products  
- Other sidebar links → Coming Soon  
- Unknown paths → dashboard  

---

## UI & theming

- Design tokens in `src/index.css` (`--primary` brand red, sidebar colors, chart vars)  
- Components via shadcn (`components.json` → `base-nova`)  
- Path alias: `@/` → `src/`  

To add a UI piece:

```bash
npx shadcn@latest add <component>
```

---

## Notes for contributors

1. Prefer extending an existing feature folder over adding new top-level pages.  
2. Keep new links/paths in `routes.url.ts` and wire them in `router.tsx` + `nav-config.ts`.  
3. Use `loadable()` for new route-level or heavy chart modules.  
4. Dummy data is intentional — swap `data/` modules when connecting a real API.  

---

## License

Private demo project (`"private": true` in `package.json`).
