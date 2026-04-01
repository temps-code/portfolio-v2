# Agent Instructions — Portfolio Diego Vargas

## Contexto del proyecto
Portfolio personal de Diego Vargas (@temps-code) — Full-Stack Developer.
Objetivo: conseguir trabajo remoto en Latam/España.

## Stack técnico
- Astro (SSG) + React 19 + TypeScript strict
- Tailwind CSS v4
- Framer Motion para animaciones
- Deploy en Vercel

## Reglas para agentes

### Componentes
- Componentes con animaciones o interactividad → `.tsx` (React)
- Componentes estáticos → `.astro`
- Siempre tipar props con `interface` en TypeScript
- Usar `cn()` de `src/lib/utils.ts` para clases condicionales

### Animaciones
- Todas las animaciones vía Framer Motion
- Patrones preferidos: `fadeInUp`, `staggerChildren`
- Los componentes React con Framer Motion en Astro requieren `client:load`

### Datos
- Todo el contenido del portfolio vive en `src/data/`
- `projects.ts` → array de proyectos con tipado
- `skills.ts` → categorías de skills
- Nunca hardcodear contenido dentro de componentes

### Estilo
- Sin emojis
- Estilo: minimalista, profesional, tipografía fuerte
- Paleta: blanco/negro/gris con un acento (definido en global.css)

## Proyectos destacados (Tier 1)
1. LION — Business Management System (React 19, Supabase, LIVE en Vercel)
2. StackWise — Mobile app (React Native, Expo, Supabase)
3. 404-Group Backend — Clean Architecture .NET 8
4. Tourism Microservice — Docker + .NET 9
5. ecommerce-b2c — Laravel 12 / PHP 8.4

## NO hacer
- No agregar dependencias sin justificación en CLAUDE.md
- No mezclar contenido con estructura de componentes
- No usar `any` en TypeScript
- No animaciones exageradas — sutil y profesional
