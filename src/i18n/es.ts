import type { Translation } from './en'

export const es: Translation = {
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    skills: 'Habilidades',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Diego Vargas',
    role: 'Estudiante de Ingeniería en Sistemas · Desarrollador de Software',
    description: 'Construyo herramientas digitales que resuelven problemas reales.',
    cta_projects: 'Ver mi trabajo',
    cta_contact: 'Hablemos de un proyecto',
    code: `const desarrollador = {
  nombre: "Diego Vargas",
  rol: "Desarrollador de Software",
  enfoque: "herramientas digitales para problemas reales",
  stack: {
    backend: [".NET / C#", "PostgreSQL", "Supabase"],
    frontend: ["React", "TypeScript", "React Native"],
  },
  enfoqueDeTrabajo: ["escuchar", "diseñar", "construir"],
  disponible: true,
}`,
  },
  about: {
    title: 'Sobre Mí',
    paragraph1:
      'Soy estudiante de Ingeniería en Sistemas y desarrollador de software con base en Tarija, Bolivia. Construyo herramientas digitales prácticas para sistemas backend, interfaces web, bases de datos y experiencias móviles.',
    paragraph2:
      'Trabajo desde el problema: escucho a las personas que usan un proceso, aclaro lo importante y lo convierto en software mantenible. Así puedo comunicarme con equipos técnicos, reclutadores y clientes locales sin perder de vista el resultado.',
    paragraph3:
      'En LION, ayudé a convertir un proceso de facturación manual de aproximadamente una hora en uno de 15 minutos — 75% menos tiempo — y el sistema sigue en uso activo por la agencia.',
    download_cv: 'Descargar CV',
    years_experience: 'Años de Experiencia',
    major_projects: 'Proyectos Principales',
    tech_stacks: 'Stacks Tecnológicos',
    metrics: [
      { value: '20%', label: 'Mayor tasa de aprobación' },
      { value: '30%', label: 'Menor abandono de tareas' },
      { value: '40+', label: 'Sesiones de apoyo' },
      { value: '150+', label: 'Solicitudes respondidas' },
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Trabajo académico y para clientes, con contexto sobre qué está activo, en desarrollo o disponible como evidencia.',
    live: 'Demo',
    code: 'Código',
    no_demo: 'Sin demo en vivo',
    status: {
      active: 'En uso activo',
      development: 'MVP académico · En desarrollo activo',
      unavailable: 'Demo temporalmente no disponible · Repositorio y capturas disponibles',
      academic: 'Proyecto académico',
      repository: 'Proyecto académico · Solo repositorio',
    },
    mockup: 'Mockup',
    screenshot: 'Captura',
    fullscreen: 'Ver en pantalla completa',
    close: 'Cerrar',
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Herramientas que uso para convertir necesidades reales en software funcional.',
  },
  contact: {
    title: 'Hablemos',
    subtitle: 'Estoy abierto a roles remotos y proyectos seleccionados, incluidos proyectos prácticos con negocios locales.',
    email_label: 'Email',
    github_label: 'GitHub',
    linkedin_label: 'LinkedIn',
    availability: 'Abierto a roles remotos y proyectos seleccionados',
    form_name: 'Tu nombre',
    form_email: 'Tu correo',
    form_message: 'Tu mensaje',
    form_send: 'Enviar mensaje',
    form_sending: 'Enviando...',
    form_success: 'Mensaje enviado. Te respondo pronto.',
    form_error: 'Algo salió mal. Escribime directamente al correo.',
  },
  footer: {
    built_with: 'Software para el trabajo real — para reclutadores, colaboradores y negocios locales.',
    copyright: '© 2026 Diego Vargas. Todos los derechos reservados.',
  },
  meta: {
    title: 'Diego Vargas — Desarrollador de Software',
    description: 'Estudiante de Ingeniería en Sistemas y desarrollador de software en Bolivia. Construyo herramientas digitales que resuelven problemas reales.',
    locale: 'es_BO',
  },
  language_toggle: {
    label: 'EN',
  },
}
