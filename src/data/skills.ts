export interface SkillCategory {
  id: string
  label: {
    en: string
    es: string
  }
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: { en: 'Frontend', es: 'Frontend' },
    skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Astro', 'Vite', 'Alpine.js'],
  },
  {
    id: 'mobile',
    label: { en: 'Mobile', es: 'Mobile' },
    skills: ['React Native', 'Expo', 'NativeWind', 'Zustand'],
  },
  {
    id: 'backend',
    label: { en: 'Backend', es: 'Backend' },
    skills: ['ASP.NET Core', 'C#', 'Laravel', 'PHP', 'Node.js'],
  },
  {
    id: 'architecture',
    label: { en: 'Architecture', es: 'Arquitectura' },
    skills: ['Clean Architecture', 'Repository Pattern', 'Unit of Work', 'REST API', 'SOLID'],
  },
  {
    id: 'databases',
    label: { en: 'Databases', es: 'Bases de datos' },
    skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    id: 'devops',
    label: { en: 'DevOps & Tools', es: 'DevOps y Herramientas' },
    skills: ['Linux', 'Docker', 'Docker Compose', 'Vercel', 'Git', 'GitHub'],
  },
  {
    id: 'soft-skills',
    label: { en: 'Soft Skills', es: 'Habilidades Blandas' },
    skills: ['Client Communication', 'Problem Solving', 'Team Collaboration', 'Adaptability', 'Technical Leadership'],
  },
]
