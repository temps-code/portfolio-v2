# Portfolio — Diego Vargas

Personal portfolio website built with Astro, React 19, Tailwind CSS v4, and Framer Motion.

[Ver en español](README.es.md)

## Tech Stack

- **Framework**: [Astro](https://astro.build) — static site generation, minimal JS output
- **UI**: [React 19](https://react.dev) — interactive components
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: TypeScript (strict)
- **Deploy**: [Vercel](https://vercel.com)

## Features

- Bilingual support — English (default) and Spanish, toggled client-side
- Scroll-triggered animations with Framer Motion
- Fully responsive design
- Optimized performance — static HTML, minimal JavaScript
- SEO-ready

## Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable components (Button, Badge, Card)
│   └── sections/    # Page sections (Hero, Projects, About, Contact)
├── layouts/         # Astro layouts
├── i18n/            # Translation files (en.ts, es.ts)
├── lib/             # Utilities (cn, animations)
├── data/            # Static data (projects, skills)
├── styles/          # Global styles
└── pages/           # Routes
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Author

**Diego Vargas** — Full-Stack Developer
- GitHub: [@temps-code](https://github.com/temps-code)
