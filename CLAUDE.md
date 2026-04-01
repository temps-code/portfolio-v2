# Portfolio — Diego Vargas

## Stack
- Astro + React 19 + TypeScript (strict)
- Tailwind CSS v4
- Framer Motion (animaciones)
- Deploy: Vercel

## Estructura
```
src/
├── components/
│   ├── ui/         → componentes reutilizables (Button, Badge, Card...)
│   └── sections/   → secciones de la página (Hero, Projects, About...)
├── layouts/        → layouts Astro (BaseLayout.astro)
├── lib/            → utilidades (cn, helpers)
├── data/           → datos estáticos (projects.ts, skills.ts)
├── styles/
│   └── global.css  → estilos globales + Tailwind import
└── pages/
    └── index.astro → página principal
```

## Convenciones
- Componentes interactivos (con animaciones/eventos) → `.tsx` en React
- Componentes estáticos (estructura/layout) → `.astro`
- Animaciones con `client:load` directive en Astro cuando se usan componentes React
- Clases Tailwind con `cn()` de `src/lib/utils.ts`
- Sin emojis en el contenido del portfolio
- Tipografía: Inter (sistema) o definida en global.css

## Comandos
```bash
npm run dev      # dev server en localhost:4321
npm run build    # build de producción
npm run preview  # preview del build
```

## Reglas
- No agregar dependencias sin justificación
- Framer Motion solo en componentes React con `client:load`
- Mantener data separada de los componentes (en src/data/)
