export const en = {
  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I\'m',
    name: 'Diego Vargas',
    role: 'Systems Engineering Student · Software Developer',
    description: 'I build digital tools that solve real problems.',
    cta_projects: 'Explore my work',
    cta_contact: 'Discuss a project',
    code: `const developer = {
  name: "Diego Vargas",
  role: "Software Developer",
  focus: "digital tools for real problems",
  stack: {
    backend: [".NET / C#", "PostgreSQL", "Supabase"],
    frontend: ["React", "TypeScript", "React Native"],
  },
  approach: ["listen", "design", "build"],
  available: true,
}`,
  },
  about: {
    title: 'About Me',
    paragraph1:
      'I\'m a Systems Engineering student and software developer based in Tarija, Bolivia. I build practical digital tools across backend systems, web interfaces, databases, and mobile experiences.',
    paragraph2:
      'I work from the problem outward: I listen to the people using a process, clarify what matters, and turn it into maintainable software. That lets me communicate with technical teams, recruiters, and local clients without losing sight of the outcome.',
    paragraph3:
      'For LION, I helped turn a manual billing process from about one hour into 15 minutes — 75% less time — and the system remains in active use by the agency.',
    download_cv: 'Download CV',
    years_experience: 'Years of Experience',
    major_projects: 'Major Projects',
    tech_stacks: 'Tech Stacks',
    metrics: [
      { value: '20%', label: 'Higher pass rate' },
      { value: '30%', label: 'Lower assignment dropout' },
      { value: '40+', label: 'Support sessions' },
      { value: '150+', label: 'Requests answered' },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Selected academic and client-facing work, with context for what is live, in progress, or available as evidence.',
    live: 'Live',
    code: 'Code',
    no_demo: 'No live demo',
    status: {
      active: 'Active use',
      development: 'Academic MVP · Active development',
      unavailable: 'Demo temporarily unavailable · Repository and screenshots available',
      academic: 'Academic project',
      repository: 'Academic project · Repository only',
    },
    mockup: 'Mockup',
    screenshot: 'Screenshot',
    fullscreen: 'View fullscreen',
    close: 'Close',
  },
  skills: {
    title: 'Skills',
    subtitle: 'Tools I use to turn real requirements into working software.',
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Open to remote roles and selected projects, including practical work with local businesses.',
    email_label: 'Email',
    github_label: 'GitHub',
    linkedin_label: 'LinkedIn',
    availability: 'Open to remote roles and selected projects',
    form_name: 'Your name',
    form_email: 'Your email',
    form_message: 'Your message',
    form_send: 'Send message',
    form_sending: 'Sending...',
    form_success: 'Message sent. I\'ll get back to you soon.',
    form_error: 'Something went wrong. Try emailing me directly.',
  },
  footer: {
    built_with: 'Software for real work — for recruiters, collaborators, and local businesses.',
    copyright: '© 2026 Diego Vargas. All rights reserved.',
  },
  meta: {
    title: 'Diego Vargas — Software Developer',
    description: 'Systems Engineering student and software developer in Bolivia. I build digital tools that solve real problems.',
    locale: 'en_US',
  },
  language_toggle: {
    label: 'ES',
  },
}

export type Translation = typeof en
