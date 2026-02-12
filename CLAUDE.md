# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Create production build
npm start        # Run production server
npm run lint     # Run ESLint (uses next/core-web-vitals config)
```

## Architecture

This is a Next.js 16 application using the App Router architecture (not Pages Router).

**Tech Stack:**
- Next.js 16.1.6 with React 19
- Tailwind CSS v4 (PostCSS integration)
- ESLint v9 with flat config format

**Source Structure:**
- `src/app/` - App Router pages and layouts
- `src/app/layout.js` - Root layout with Geist fonts and metadata
- `src/app/page.js` - Home page component
- `src/app/globals.css` - Global styles with Tailwind and dark mode CSS variables

**Path Alias:**
- `@/*` maps to `./src/*` for imports

**Styling:**
- Uses Tailwind utility classes
- Dark mode via `prefers-color-scheme` CSS media query
- Geist font family (sans and mono variants)
