import { motion } from 'framer-motion'
import { useTranslation } from '../../lib/useTranslation'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { featuredProjects } from '../../data/projects'
import type { Project } from '../../data/projects'
import type { Translation } from '../../i18n/en'
import type { Locale } from '../../i18n/utils'

const gradientMap: Record<string, string> = {
  lion: 'from-yellow-500 via-amber-400 to-orange-400',
  stackwise: 'from-blue-600 via-violet-500 to-purple-400',
  'tourism-microservice': 'from-emerald-500 via-teal-400 to-cyan-500',
}

export function Projects() {
  const { t, locale } = useTranslation()

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 mb-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-12"
      >
        <motion.div variants={fadeInUp} className="flex flex-col gap-2">
          <p className="text-xs font-label uppercase tracking-widest text-accent">01 —</p>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-on-surface dark:text-on-surface-dark">
            {t.projects.title}
          </h2>
          <p className="text-base font-body text-on-surface-variant dark:text-on-surface-variant-dark">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={locale} t={t} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  locale: Locale
  t: Translation
}

function ProjectCard({ project, locale, t }: ProjectCardProps) {
  const gradient = gradientMap[project.id] ?? 'from-accent to-accent-to'

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="flex flex-col rounded-lg overflow-hidden bg-surface-container dark:bg-surface-container-dark hover:bg-surface-container-high dark:hover:bg-surface-container-high-dark transition-colors duration-300"
    >
      <motion.div
        initial={{ filter: 'grayscale(100%)' }}
        whileHover={{ filter: 'grayscale(0%)' }}
        transition={{ duration: 0.3 }}
        className={`h-48 bg-gradient-to-br ${gradient}`}
      />

      <div className="flex flex-col gap-4 p-6">
        <h3 className="font-headline font-bold text-lg text-on-surface dark:text-on-surface-dark">
          {project.title}
        </h3>
        <p className="text-sm font-body text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed">
          {project.description[locale]}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-label px-3 py-1 rounded-full bg-surface-container-high dark:bg-surface-container-high-dark text-on-surface-variant dark:text-on-surface-variant-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80 transition-opacity"
            >
              <ExternalLinkIcon />
              {t.projects.live}
            </a>
          )}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-on-surface-variant dark:text-on-surface-variant-dark hover:text-on-surface dark:hover:text-on-surface-dark transition-colors"
            >
              <GitHubIcon />
              {t.projects.code}
            </a>
          ) : (
            <span className="text-sm text-on-surface-variant dark:text-on-surface-variant-dark opacity-50">
              {t.projects.no_demo}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
