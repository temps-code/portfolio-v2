# Portfolio — Diego Vargas

Sitio web de portfolio personal construido con Astro, React 19, Tailwind CSS v4 y Framer Motion.

[View in English](README.md)

## Stack Tecnológico

- **Framework**: [Astro](https://astro.build) — generación de sitios estáticos, mínimo JS
- **UI**: [React 19](https://react.dev) — componentes interactivos
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Lenguaje**: TypeScript (strict)
- **Deploy**: [Vercel](https://vercel.com)

## Características

- Soporte bilingüe — inglés (predeterminado) y español, alternado desde el cliente
- Animaciones activadas por scroll con Framer Motion
- Diseño totalmente responsivo
- Rendimiento optimizado — HTML estático, JavaScript mínimo
- Listo para SEO

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/          # Componentes reutilizables (Button, Badge, Card)
│   └── sections/    # Secciones de la página (Hero, Projects, About, Contact)
├── layouts/         # Layouts de Astro
├── i18n/            # Archivos de traducción (en.ts, es.ts)
├── lib/             # Utilidades (cn, animations)
├── data/            # Datos estáticos (projects, skills)
├── styles/          # Estilos globales
└── pages/           # Rutas
```

## Primeros Pasos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Autor

**Diego Vargas** — Desarrollador Full-Stack
- GitHub: [@temps-code](https://github.com/temps-code)
