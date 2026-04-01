export interface Project {
  id: string
  title: string
  description: {
    en: string
    es: string
  }
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'lion',
    title: 'LION — Business Management System',
    description: {
      en: 'Full-featured business management platform built for a real client. Handles inventory, sales, and reporting in real time.',
      es: 'Plataforma de gestión empresarial construida para un cliente real. Maneja inventario, ventas y reportes en tiempo real.',
    },
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    liveUrl: 'https://lion-app.vercel.app',
    repoUrl: 'https://github.com/temps-code/lion-front',
    featured: true,
  },
  {
    id: 'stackwise',
    title: 'StackWise',
    description: {
      en: 'Mobile application for managing tech stacks and learning paths. Built with React Native and Supabase.',
      es: 'Aplicación móvil para gestionar stacks tecnológicos y rutas de aprendizaje. Construida con React Native y Supabase.',
    },
    tags: ['React Native', 'Expo', 'Supabase', 'NativeWind', 'Zustand'],
    repoUrl: 'https://github.com/temps-code/stackwise',
    featured: true,
  },
  {
    id: '404-group-backend',
    title: '404-Group Backend',
    description: {
      en: 'Learning management system API built with Clean Architecture. Handles courses, modules, evaluations, and user enrollment.',
      es: 'API de sistema de gestión de aprendizaje construida con Clean Architecture. Maneja cursos, módulos, evaluaciones e inscripciones.',
    },
    tags: ['.NET 8', 'C#', 'Clean Architecture', 'SQL Server', 'EF Core'],
    repoUrl: 'https://github.com/temps-code/404-Group---Backend',
    featured: true,
  },
  {
    id: 'tourism-microservice',
    title: 'Tourism Microservice',
    description: {
      en: 'Containerized REST API for tourism data management. The only project in the portfolio running on Docker Compose.',
      es: 'API REST contenerizada para gestión de datos turísticos. El único proyecto del portfolio que corre en Docker Compose.',
    },
    tags: ['.NET 9', 'C#', 'Docker', 'Docker Compose', 'REST API'],
    repoUrl: 'https://github.com/temps-code/turis-bolivia',
    featured: false,
  },
  {
    id: 'ecommerce-b2c',
    title: 'eCommerce B2C',
    description: {
      en: 'Full-stack e-commerce platform with product catalog, cart, orders, and admin panel.',
      es: 'Plataforma de e-commerce full-stack con catálogo de productos, carrito, pedidos y panel de administración.',
    },
    tags: ['Laravel 12', 'PHP 8.4', 'MySQL', 'Blade', 'Tailwind CSS'],
    repoUrl: 'https://github.com/temps-code/ecommerce-b2c',
    featured: false,
  },
]

export const featuredProjects = projects.filter(p => p.featured)
