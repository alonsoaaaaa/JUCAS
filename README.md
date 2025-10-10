# JUCAS Landing Page

A responsive, accessible landing page for JUCAS (Jóvenes Unidos en Cristo en Acción Social), built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- Section-based landing page (Navbar, Hero, Mission, Works, Impact, Join, Footer)
- Smooth scrolling navigation
- Theming via HSL CSS variables with dark mode support
- Reusable UI components from shadcn/ui
- SEO-ready meta tags and Open Graph/Twitter cards
- Clean project structure with path aliases (`@/`)

## Tech Stack

- Vite 5 + React 18 (SWC plugin)
- TypeScript
- Tailwind CSS + tailwindcss-animate
- shadcn/ui (Radix UI)
- React Router
- TanStack Query

## Quick Start

Requirements: Node.js and npm. We recommend installing Node with nvm.

```sh
# Install dependencies
npm i

# Start development server (http://localhost:8080)
npm run dev

# Lint code
npm run lint

# Build for production
npm run build

# Preview a production build locally
npm run preview
```

## Project Structure

```text
src/
  pages/
    Index.tsx        # Composes the landing page sections
    NotFound.tsx     # Fallback 404 page
  components/
    Navbar.tsx       # Fixed top navigation with smooth scroll
    Hero.tsx         # Intro section with CTA
    Mission.tsx      # Values/mission cards
    Works.tsx        # Project highlights with images from src/assets
    Impact.tsx       # Stats grid
    Join.tsx         # Contact/CTA card
    Footer.tsx       # Footer content
    ui/              # shadcn/ui components
  assets/            # Images used by Works.tsx
  lib/utils.ts       # Utility helpers (e.g., cn)
  index.css          # Theme tokens (HSL), dark mode, base styles
App.tsx              # Providers, router, routes
main.tsx             # App entry and root mount
index.html           # Meta tags and root div
```

Path alias: `@` → `./src` (configured in `vite.config.ts` and `components.json`).

## Editing Content

Most content is defined directly in the section components:

- Navbar (`src/components/Navbar.tsx`)
  - Update brand text "JUCAS"
  - Buttons scroll to sections with IDs: `works`, `join`
  - Mobile "Únete" button visible under md

- Hero (`src/components/Hero.tsx`)
  - Headline and subcopy (Spanish strings)
  - Primary CTA "Únete Ahora" scrolls to Join
  - Secondary CTA "Conoce Nuestro Trabajo" scrolls to Works
  - Background gradient and subtle scroll indicator

- Mission (`src/components/Mission.tsx`)
  - Edit the `values` array (icon, title, description)
  - Icons come from `lucide-react` (imported at top)

- Works (`src/components/Works.tsx`)
  - Edit the `works` array (image, title, description)
  - Images live in `src/assets/` and are imported at the top
  - To add a new image:
    1. Place the file in `src/assets/`
    2. Import it at the top of `Works.tsx`
    3. Add a new object to the `works` array
  - Each `<img>` uses `alt={work.title}` for accessibility

- Impact (`src/components/Impact.tsx`)
  - Edit the `stats` array (icon, value, label)

- Join (`src/components/Join.tsx`)
  - Update contact details (email, WhatsApp/phone, social links)
  - Primary CTA "Quiero Ser Parte de JUCAS" links to WhatsApp
  - Buttons use `asChild` when wrapping anchor `<a>` elements

- Footer (`src/components/Footer.tsx`)
  - Brand text and attribution message

## Styling and Theme

- Theme tokens (HSL CSS variables) are defined in `src/index.css` under `:root` and `.dark`
  - Key variables: `--primary`, `--secondary`, `--accent`, `--background`, `--foreground`, `--radius`, etc.
  - Update these to adjust brand colors and border radii
- Tailwind is configured in `tailwind.config.ts`
  - Dark mode via `class` strategy
  - Custom animations: `fade-in`, `accordion-down`, `accordion-up`
  - Container defaults and extended color system mapped to CSS variables

## SEO and Meta

- `index.html` contains the document `<title>` and meta tags for description, author, Open Graph, and Twitter cards.
  - Update:
    - `<title>` and `meta[name="description"]` to match your messaging
    - `og:image` and `twitter:image` to point to your own social preview image
- `public/robots.txt` exists for crawler directives
- `public/favicon.ico` and `public/placeholder.svg` can be replaced with your branding

## UI Components (shadcn/ui)

- shadcn/ui components live in `src/components/ui/` and are configured via `components.json`
- To add new UI components:
  ```sh
  npx shadcn@latest add button card dialog ...
  ```
- Base color is `slate` and the project uses CSS variables for theming

## Routing

- Routes are defined in `src/App.tsx`
- Add new routes above the catch‑all `"*"` route to avoid falling through to `NotFound`

## Accessibility

- Maintain descriptive `alt` text for images
- Ensure sufficient color contrast when adjusting theme variables
- Keep interactive elements (buttons/links) keyboard-accessible and focus-visible

## Deployment

- Standard Vite build:
  ```sh
  npm run build
  npm run preview
  ```
- If using Lovable hosting, open your project and use Share → Publish.

## Notes

- Dev server runs on port `8080` (IPv6 enabled)
- Path imports use the `@/` alias for clarity
- Linting is configured via `eslint.config.js`
