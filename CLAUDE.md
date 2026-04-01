# Portfolio — Diego Vargas

## Stack
- Astro + React 19 + TypeScript (strict)
- Tailwind CSS v4
- Framer Motion (animations)
- Deploy: Vercel

## Project Structure
```
src/
├── components/
│   ├── ui/         → reusable components (Button, Badge, Card...)
│   └── sections/   → page sections (Hero, Projects, About...)
├── layouts/        → Astro layouts (BaseLayout.astro)
├── i18n/           → translations (en.ts, es.ts, utils.ts)
├── lib/            → utilities (cn, animations)
├── data/           → static data (projects.ts, skills.ts)
├── styles/
│   └── global.css  → global styles + Tailwind import
└── pages/
    └── index.astro → main page
```

## Conventions
- Interactive components (animations/events) → `.tsx` (React)
- Static components (structure/layout) → `.astro`
- Animations with `client:load` directive when using React components in Astro
- Tailwind classes with `cn()` from `src/lib/utils.ts`
- No emojis in portfolio content
- Typography: Inter or defined in global.css

## i18n
- Default language: English (`en`)
- Supported languages: English (`en`), Spanish (`es`)
- Translations live in `src/i18n/en.ts` and `src/i18n/es.ts`
- Language toggle is a React component (client-side, localStorage persistence)
- No URL-based routing for languages — toggle switches in-place

## Commands
```bash
npm run dev      # dev server at localhost:4321
npm run build    # production build
npm run preview  # preview build
```

## Rules
- Do not add dependencies without justification
- Framer Motion only in React components with `client:load`
- Keep data separate from components (in src/data/)
- Keep translations complete — both `en.ts` and `es.ts` must have the same keys
