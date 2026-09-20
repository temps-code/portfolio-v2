export type ProjectStatus = 'active' | 'development' | 'unavailable' | 'academic' | 'repository'

export interface LocalizedText {
  en: string
  es: string
}

export interface Project {
  id: string
  title: string
  description: LocalizedText
  detailedDescription?: LocalizedText
  role: LocalizedText
  status: ProjectStatus
  tags: string[]
  imageUrl?: string
  imageLabel?: LocalizedText
  screenshotUrl?: string
  screenshotLabel?: LocalizedText
  liveUrl?: string
  repoUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'lion',
    title: 'LION — Business Management System',
    description: {
      en: 'Helped reduce a manual billing process from about 1 hour to 15 minutes — 75% less time. Covers quotations, jobs, clients, and payments, and remains in active use.',
      es: 'Ayudé a reducir un proceso de facturación manual de aproximadamente 1 hora a 15 minutos — 75% menos tiempo. Cubre cotizaciones, trabajos, clientes y pagos, y sigue en uso activo.',
    },
    detailedDescription: {
      en: 'Built end-to-end for a design agency that spent about an hour on manual billing each cycle. The system covers quotation generation with line items and discounts, job tracking across stages, client history, and payment recording with outstanding balance alerts. Key technical decisions include React 19 for the UI, Supabase with Row Level Security for data isolation, and a PostgreSQL schema modeled around the agency\'s workflow. The system remains actively used in production.',
      es: 'Desarrollado de extremo a extremo para una agencia de diseño que tardaba aproximadamente una hora en cada ciclo de facturación manual. El sistema cubre generación de cotizaciones con ítems y descuentos, seguimiento de trabajos por etapas, historial de clientes y registro de pagos con alertas de saldo pendiente. Decisiones técnicas clave: React 19 para la interfaz, Supabase con Row Level Security para aislamiento de datos y un esquema PostgreSQL modelado según el flujo de la agencia. El sistema sigue en uso activo en producción.',
    },
    role: {
      en: 'Lead Developer — end-to-end delivery from client meeting to production',
      es: 'Desarrollador principal — entrega de extremo a extremo, desde la reunión con el cliente hasta producción',
    },
    status: 'active',
    tags: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL'],
    imageUrl: "/MockUp's/Lion-MockUp.png",
    imageLabel: { en: 'Mockup', es: 'Mockup' },
    screenshotUrl: '/Capturas/Lion.jpg',
    screenshotLabel: { en: 'Screenshot', es: 'Captura' },
    repoUrl: 'https://github.com/temps-code/lion-business-manager',
    featured: true,
  },
  {
    id: 'innhub',
    title: 'InnHub — Accommodation Management System',
    description: {
      en: 'Academic MVP in active development for accommodation operations, covering properties, reservations, housekeeping, maintenance, billing, and reporting.',
      es: 'MVP académico en desarrollo activo para operaciones de alojamiento, con propiedades, reservas, housekeeping, mantenimiento, facturación y reportes.',
    },
    detailedDescription: {
      en: 'Academic MVP in active development that centralizes the operational workflow of accommodation businesses: properties, rooms, guests, reservations, check-ins, housekeeping, maintenance, billing, payments, occupancy reports, and dashboard metrics. Designed as a configurable product with Clean Architecture layers, Atomic Design for shared UI primitives, and feature-based organization. Built with React, TypeScript, Tailwind CSS, and InsForge as the BaaS backend with PostgreSQL. Product documentation covers the MVP scope, domain model, architecture decisions, and functional specification.',
      es: 'MVP académico en desarrollo activo que centraliza el flujo operativo de negocios de alojamiento: propiedades, habitaciones, huéspedes, reservas, check-in, housekeeping, mantenimiento, facturación, pagos, reportes de ocupación y métricas de dashboard. Diseñado como producto configurable con capas de Clean Architecture, Atomic Design para primitivas de UI compartidas y organización por features. Construido con React, TypeScript, Tailwind CSS e InsForge como BaaS con PostgreSQL. La documentación cubre el alcance del MVP, el modelo de dominio, las decisiones de arquitectura y la especificación funcional.',
    },
    role: {
      en: 'Full-Stack Developer — architecture, design, and implementation',
      es: 'Desarrollador Full-Stack — arquitectura, diseño e implementación',
    },
    status: 'development',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'InsForge', 'Vitest'],
    imageUrl: '/assets/innhub-hero.png',
    imageLabel: { en: 'Prototype', es: 'Prototipo' },
    screenshotUrl: '/assets/architecture-overview.png',
    screenshotLabel: { en: 'Architecture', es: 'Arquitectura' },
    liveUrl: 'https://inn-hub.vercel.app/',
    repoUrl: 'https://github.com/temps-code/InnHub',
    featured: true,
  },
  {
    id: 'brecha-digital',
    title: 'Digital Labor Gap — BI Strategy',
    description: {
      en: 'Team BI project measuring the digital skills gap in Bolivian IT education through an ELT pipeline, data warehouse, AI assistant, and dashboards.',
      es: 'Proyecto grupal de BI que mide la brecha de habilidades digitales en la educación IT boliviana mediante un pipeline ELT, data warehouse, asistente IA y dashboards.',
    },
    detailedDescription: {
      en: 'Led dashboard integration for a team BI pipeline that makes the digital skills gap in Bolivian IT education visible and measurable. The pipeline follows medallion architecture: academic data is ingested into SQL Server (Bronze), cleaned and normalized with Python (Silver), then loaded into a Snowflake schema data warehouse (Gold). The dashboard includes skill gap analysis, graduate employability, dropout risk, and a regional benchmark using public reference data. It also includes an AI assistant for natural language queries over the dataset. The demo is temporarily unavailable; the repository and screenshots remain available as evidence.',
      es: 'Lideré la integración del dashboard para un pipeline grupal de BI que hace visible y medible la brecha de habilidades digitales en la educación IT boliviana. El pipeline sigue una arquitectura medallón: los datos académicos se ingestan en SQL Server (Bronze), se limpian y normalizan con Python (Silver) y se cargan en un data warehouse con Snowflake schema (Gold). El dashboard incluye análisis de brecha, empleabilidad de egresados, riesgo de deserción y un benchmark regional con datos públicos de referencia. También incluye un asistente IA para consultas en lenguaje natural sobre el dataset. La demo está temporalmente no disponible; el repositorio y las capturas siguen disponibles como evidencia.',
    },
    role: {
      en: 'Dashboard Lead — pipeline integration, data warehouse, and deployment',
      es: 'Líder del dashboard — integración del pipeline, data warehouse y despliegue',
    },
    status: 'unavailable',
    tags: ['Python', 'SQL Server', 'Streamlit', 'Groq API'],
    imageUrl: "/MockUp's/Brecha-digital-MockUp.png",
    imageLabel: { en: 'Mockup', es: 'Mockup' },
    screenshotUrl: '/Capturas/Brecha.jpg',
    screenshotLabel: { en: 'Screenshot', es: 'Captura' },
    repoUrl: 'https://github.com/temps-code/brecha-digital-bi',
    featured: true,
  },
  {
    id: 'tourism-microservice',
    title: 'Tourism Microservice',
    description: {
      en: 'Academic, repository-only REST API for tour management, reservations, and payments, containerized with SQL Server and automatic migrations.',
      es: 'API REST académica, disponible solo en el repositorio, para gestión de tours, reservas y pagos, dockerizada con SQL Server y migraciones automáticas.',
    },
    detailedDescription: {
      en: 'Academic REST API covering the lifecycle of a tourism system: tour catalog, user registration, reservations with capacity validation, and payment tracking. Built with ASP.NET Core 9 and Entity Framework Core; the database migrates and seeds automatically on container startup. Docker Compose runs the API and SQL Server 2022 as isolated services. Technical decisions include soft delete with an IsActive flag, password hashing with HMACSHA512 and salt, and CORS configured for development environments.',
      es: 'API REST académica que cubre el ciclo de un sistema de turismo: catálogo de tours, registro de usuarios, reservas con validación de capacidad y seguimiento de pagos. Construida con ASP.NET Core 9 y Entity Framework Core; la base de datos migra y se carga automáticamente al iniciar el contenedor. Docker Compose ejecuta la API y SQL Server 2022 como servicios aislados. Decisiones técnicas: soft delete con un flag IsActive, hash de contraseñas con HMACSHA512 y salt, y CORS configurado para entornos de desarrollo.',
    },
    role: {
      en: 'Backend Developer — API design and containerization',
      es: 'Desarrollador Backend — diseño de API y containerización',
    },
    status: 'repository',
    tags: ['ASP.NET Core 9', 'C#', 'Docker', 'SQL Server'],
    imageUrl: '/Capturas/Tourism%20Microservice.png',
    imageLabel: { en: 'Architecture', es: 'Arquitectura' },
    repoUrl: 'https://github.com/temps-code/Web-Api---Microservicio-Turismo',
    featured: false,
  },
]

export const featuredProjects = projects
