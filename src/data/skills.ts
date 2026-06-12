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
    id: 'backend',
    label: { en: 'Backend', es: 'Backend' },
    skills: ['C#', 'ASP.NET Core', 'PHP', 'Laravel', 'Python', 'TypeScript'],
  },
  {
    id: 'architecture',
    label: { en: 'Architecture', es: 'Arquitectura' },
    skills: ['Clean Architecture', 'Repository Pattern', 'Unit of Work', 'REST API', 'SOLID'],
  },
  {
    id: 'databases',
    label: { en: 'Databases', es: 'Bases de datos' },
    skills: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Supabase', 'InsForge'],
  },
  {
    id: 'devops',
    label: { en: 'DevOps & Tools', es: 'DevOps y Herramientas' },
    skills: ['Git', 'Docker', 'Docker Compose', 'Linux', 'Streamlit', 'Vercel', 'Scrum'],
  },
  {
    id: 'frontend',
    label: { en: 'Frontend', es: 'Frontend' },
    skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Astro', 'Vite', 'Vitest'],
  },
  {
    id: 'mobile',
    label: { en: 'Mobile', es: 'Mobile' },
    skills: ['React Native', 'Expo', 'NativeWind', 'Zustand'],
  },
  {
    id: 'ai-tools',
    label: { en: 'AI Tools', es: 'Herramientas IA' },
    skills: ['Pi Agent', 'OpenCode', 'Codex'],
  },
  {
    id: 'soft-skills',
    label: { en: 'Soft Skills', es: 'Habilidades Blandas' },
    skills: ['Client Communication', 'Problem Solving', 'Team Collaboration', 'Adaptability', 'Technical Leadership'],
  },
]
