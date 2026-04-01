# Agent Instructions — Portfolio Diego Vargas

## Project Context
Personal portfolio for Diego Vargas (@temps-code) — Full-Stack Developer.
Goal: land a remote job in Latam / Spain.

## Tech Stack
- Astro (SSG) + React 19 + TypeScript strict
- Tailwind CSS v4
- Framer Motion for animations
- Deploy on Vercel

## Agent Rules

### Components
- Components with animations or interactivity → `.tsx` (React)
- Static components → `.astro`
- Always type props with `interface` in TypeScript
- Use `cn()` from `src/lib/utils.ts` for conditional classes

### Animations
- All animations via Framer Motion
- Preferred patterns: `fadeInUp`, `staggerChildren` (see `.claude/skills/animations.md`)
- React components with Framer Motion in Astro require `client:load`

### i18n
- All user-facing text must go through the translation system
- Never hardcode strings inside components — use translation keys
- Both `en.ts` and `es.ts` must stay in sync (same keys)
- Language state managed client-side via localStorage

### Data
- All portfolio content lives in `src/data/`
- `projects.ts` → typed projects array
- `skills.ts` → skill categories
- Never hardcode content inside components

### Style
- No emojis
- Style: minimalist, professional, strong typography
- Color palette: white/black/gray with one accent (defined in global.css)

## Featured Projects (Tier 1)
1. LION — Business Management System (React 19, Supabase, LIVE on Vercel)
2. StackWise — Mobile app (React Native, Expo, Supabase)
3. 404-Group Backend — Clean Architecture .NET 8
4. Tourism Microservice — Docker + .NET 9
5. ecommerce-b2c — Laravel 12 / PHP 8.4

## DO NOT
- Add dependencies without justification in CLAUDE.md
- Mix content with component structure
- Use `any` in TypeScript
- Over-animate — subtle and professional only
- Hardcode user-facing text outside of i18n files
