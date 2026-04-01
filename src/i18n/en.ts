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
    role: 'Full-Stack Developer',
    description:
      'I build web and mobile applications with real users in mind. From clean backends to polished UIs.',
    cta_projects: 'View Projects',
    cta_contact: 'Get in Touch',
  },
  about: {
    title: 'About Me',
    paragraph1:
      'I\'m a full-stack developer focused on building products that solve real problems. I work across the stack — from .NET and PHP backends to React and React Native frontends.',
    paragraph2:
      'I care about clean architecture, maintainable code, and shipping things that actually work in production.',
    download_cv: 'Download CV',
  },
  projects: {
    title: 'Projects',
    subtitle: 'A selection of work I\'m proud of.',
    live: 'Live',
    code: 'Code',
    no_demo: 'No demo available',
  },
  skills: {
    title: 'Skills',
    subtitle: 'Technologies I work with.',
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Open to remote opportunities. Let\'s talk.',
    email_label: 'Email',
    github_label: 'GitHub',
    linkedin_label: 'LinkedIn',
  },
  language_toggle: {
    label: 'ES',
  },
} as const

export type Translation = typeof en
