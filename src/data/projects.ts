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
      en: 'Reduced a 1-hour manual billing process to 15 minutes for a real design agency — 75% operational improvement. Full business pipeline: quotations, jobs, clients, and payments. From first client meeting to production.',
      es: 'Redujo un proceso de facturación manual de 1 hora a 15 minutos para una agencia de diseño real — mejora operativa del 75%. Pipeline completo: cotizaciones, trabajos, clientes y pagos. Desde la primera reunión hasta producción.',
    },
    tags: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL'],
    liveUrl: 'https://lion-business-manager.vercel.app',
    repoUrl: 'https://github.com/temps-code/lion-business-manager',
    featured: true,
  },
  {
    id: 'stackwise',
    title: 'StackWise — Tech Hiring Platform',
    description: {
      en: 'Mobile platform connecting developers with companies through real coding challenges. 12-table schema, RLS, real-time notifications.',
      es: 'Plataforma móvil que conecta desarrolladores con empresas mediante desafíos de código reales. Esquema de 12 tablas, RLS, notificaciones en tiempo real.',
    },
    tags: ['React Native', 'TypeScript', 'Supabase', 'Zustand'],
    repoUrl: 'https://github.com/temps-code/StackWise',
    featured: true,
  },
  {
    id: 'tourism-microservice',
    title: 'Tourism Microservice',
    description: {
      en: 'REST API for tour management, reservations, and payments — dockerized with SQL Server, auto-migration on startup.',
      es: 'API REST para gestión de tours, reservas y pagos — dockerizada con SQL Server, migración automática al inicio.',
    },
    tags: ['ASP.NET Core 9', 'C#', 'Docker', 'SQL Server'],
    repoUrl: 'https://github.com/temps-code/Web-Api---Microservicio-Turismo',
    featured: true,
  },
]

export const featuredProjects = projects.filter(p => p.featured)
