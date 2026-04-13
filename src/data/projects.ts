export interface Project {
  id: string
  title: string
  description: {
    en: string
    es: string
  }
  detailedDescription?: {
    en: string
    es: string
  }
  role: string
  tags: string[]
  imageUrl?: string
  imageLabel?: string
  screenshotUrl?: string
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
    detailedDescription: {
      en: 'Built end-to-end for a real design agency spending over an hour on manual billing every cycle. The system covers the full business pipeline — quotation generation with line items and discounts, job tracking across stages, client history, and payment recording with outstanding balance alerts. Key technical decisions: React 19 concurrent features for a snappy UI, Supabase with Row Level Security for data isolation, and a PostgreSQL schema modeled around the agency\'s actual workflow — not a generic template. Went from first client meeting to a system actively used in production.',
      es: 'Desarrollado de extremo a extremo para una agencia de diseño real que perdía más de una hora en facturación manual cada ciclo. El sistema cubre el pipeline completo — generación de cotizaciones con ítems y descuentos, seguimiento de trabajos por etapas, historial de clientes y registro de pagos con alertas de saldo pendiente. Decisiones técnicas clave: React 19 con features concurrentes para una UI ágil, Supabase con Row Level Security para aislamiento de datos, y un esquema PostgreSQL modelado según el flujo real de la agencia. Desde la primera reunión con el cliente hasta un sistema usado activamente en producción.',
    },
    role: 'Lead Developer — end to end, from client meeting to production',
    tags: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL'],
    imageUrl: "/MockUp's/Lion-MockUp.png",
    screenshotUrl: '/Capturas/Lion.jpg',
    repoUrl: 'https://github.com/temps-code/lion-business-manager',
    featured: true,
  },
  {
    id: 'tourism-microservice',
    title: 'Tourism Microservice',
    description: {
      en: 'REST API for tour management, reservations, and payments — dockerized with SQL Server, auto-migration on startup.',
      es: 'API REST para gestión de tours, reservas y pagos — dockerizada con SQL Server, migración automática al inicio.',
    },
    detailedDescription: {
      en: 'REST API covering the full lifecycle of a tourism system: tour catalog, user registration, reservations with capacity validation, and payment tracking. Built with ASP.NET Core 9 and Entity Framework Core — the database migrates and seeds automatically on container startup, so there is no manual setup. Containerized with Docker Compose: the API and SQL Server 2022 run as isolated services with a single command. Key decisions: soft delete with IsActive flag on all entities, password hashing with HMACSHA512 + salt, and CORS configured for development environments.',
      es: 'API REST que cubre el ciclo completo de un sistema de turismo: catálogo de tours, registro de usuarios, reservas con validación de capacidad y seguimiento de pagos. Construida con ASP.NET Core 9 y Entity Framework Core — la base de datos migra y seedea automáticamente al iniciar el contenedor, sin configuración manual. Dockerizada con Docker Compose: la API y SQL Server 2022 corren como servicios aislados con un solo comando. Decisiones clave: soft delete con flag IsActive en todas las entidades, hash de contraseñas con HMACSHA512 + salt, y CORS configurado para entornos de desarrollo.',
    },
    role: 'Backend Developer — API design, containerization & deployment · Presented at Expotec UPDS 2025',
    tags: ['ASP.NET Core 9', 'C#', 'Docker', 'SQL Server'],
    imageUrl: '/Capturas/Tourism%20Microservice.png',
    imageLabel: 'Architecture',
    repoUrl: 'https://github.com/temps-code/Web-Api---Microservicio-Turismo',
    featured: true,
  },
  {
    id: 'brecha-digital',
    title: 'Digital Labor Gap — BI Strategy',
    description: {
      en: 'End-to-end BI pipeline measuring the digital skills gap in Bolivian IT education — ELT medallion architecture, Snowflake schema data warehouse, AI assistant via Groq, and 9 KPIs across 4 dashboards.',
      es: 'Pipeline BI de extremo a extremo que mide la brecha de habilidades digitales en educación IT boliviana — arquitectura medallón ELT, data warehouse Snowflake schema, asistente IA con Groq y 9 KPIs en 4 dashboards.',
    },
    detailedDescription: {
      en: 'Led the dashboard integration and deployment of a team BI pipeline that makes the digital skills gap in Bolivian IT education visible and measurable. The pipeline follows medallion architecture: raw academic data ingested into SQL Server (Bronze), cleaned and normalized with Python (Silver), then loaded into a Snowflake schema data warehouse (Gold). The dashboard exposes 9 KPIs across 4 pages — skill gap analysis via fuzzy matching against real job postings extracted by a Groq LLM, graduate employability rate, dropout risk index, and a regional benchmark comparing Bolivia against 17 Latin American countries using CEPALSTAT ODS 4.4.1 data. Includes an AI assistant for natural language queries over the full dataset, deployed on Streamlit Cloud. Academic records were synthetically generated via seeders — standard practice when real institutional data is unavailable.',
      es: 'Lideré la integración del dashboard y el despliegue de un pipeline BI que hace visible y medible la brecha de habilidades digitales en la educación IT boliviana. El pipeline sigue arquitectura medallón: datos académicos crudos ingestados en SQL Server (Bronze), limpiados y normalizados con Python (Silver), y cargados en un data warehouse con Snowflake schema (Gold). El dashboard expone 9 KPIs en 4 páginas — análisis de brecha con fuzzy matching contra vacantes reales extraídas por un LLM de Groq, tasa de empleabilidad de egresados, índice de riesgo de deserción, y un benchmark regional comparando Bolivia con 17 países de Latinoamérica usando datos CEPALSTAT ODS 4.4.1. Incluye asistente IA para consultas en lenguaje natural sobre el dataset completo, desplegado en Streamlit Cloud. Los registros académicos fueron generados sintéticamente mediante seeders — práctica estándar cuando no se dispone de datos institucionales reales.',
    },
    role: 'Dashboard Lead — pipeline integration, data warehouse & deployment (team of 5)',
    tags: ['Python', 'SQL Server', 'Streamlit', 'Groq API'],
    imageUrl: "/MockUp's/Brecha-digital-MockUp.png",
    screenshotUrl: '/Capturas/Brecha.jpg',
    liveUrl: 'https://brecha-digital-bolivia-bi.streamlit.app/',
    repoUrl: 'https://github.com/temps-code/brecha-digital-bi',
    featured: true,
  },
]

export const featuredProjects = projects.filter(p => p.featured)
