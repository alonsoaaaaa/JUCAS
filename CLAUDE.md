# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **Vite** - Build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **TanStack Query** - Server state management

## Development Commands

```bash
# Install dependencies
npm i

# Start dev server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development (includes dev tooling)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm preview
```

## Architecture

### Component Organization

The app follows a single-page application (SPA) architecture with section-based components:

- **[src/App.tsx](src/App.tsx)** - Root component that sets up providers (QueryClient, TooltipProvider, BrowserRouter) and route configuration
- **[src/pages/Index.tsx](src/pages/Index.tsx)** - Main landing page composed of section components (Navbar, Hero, Mission, Works, Impact, Join, Footer)
- **[src/components/](src/components/)** - Page section components (Hero, Mission, Works, etc.)
- **[src/components/ui/](src/components/ui/)** - shadcn/ui component library (managed by shadcn CLI)

### Routing

Routes are defined in [App.tsx](src/App.tsx:17-20). New routes must be added **above** the catch-all `*` route to avoid being caught by the NotFound handler.

### Path Aliases

The project uses `@/` alias for imports, configured in both [vite.config.ts](vite.config.ts:14-16) and [components.json](components.json:13-18):

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

### Styling System

- Tailwind CSS with CSS variables for theming
- Uses HSL color format defined in `src/index.css`
- `cn()` utility function in [src/lib/utils.ts](src/lib/utils.ts) for className merging
- Custom animations: `fade-in`, `accordion-down`, `accordion-up`
- Dark mode support via `class` strategy

### shadcn/ui Components

UI components are managed by shadcn CLI. Configuration in [components.json](components.json):
- Components installed to `src/components/ui/`
- Styles use CSS variables with `slate` base color
- Add new components: `npx shadcn@latest add [component-name]`

### Development Notes

- Dev server runs on `localhost:8080` (IPv6 enabled)
- Uses React SWC plugin for fast refresh
- `lovable-tagger` plugin enabled in development mode only
- All custom routes must be added before the wildcard route in App.tsx
