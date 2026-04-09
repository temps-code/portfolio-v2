import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../lib/useTranslation'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { featuredProjects } from '../../data/projects'
import type { Project } from '../../data/projects'
import type { Translation } from '../../i18n/en'
import type { Locale } from '../../i18n/utils'

const gradientMap: Record<string, string> = {
  lion: 'from-yellow-500 via-amber-400 to-orange-400',
  'tourism-microservice': 'from-emerald-500 via-teal-400 to-cyan-500',
  'brecha-digital': 'from-indigo-600 via-blue-500 to-cyan-400',
}

export function Projects() {
  const { t, locale } = useTranslation()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeTab, setActiveTab] = useState<'mockup' | 'screenshot'>('mockup')

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const openProject = (project: Project) => {
    if (!project.imageUrl) return
    setSelectedProject(project)
    setActiveTab('mockup')
  }

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
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              t={t}
              onExpand={openProject}
            />
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            locale={locale}
            t={t}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  locale: Locale
  t: Translation
  onExpand: (project: Project) => void
}

function ProjectCard({ project, locale, t, onExpand }: ProjectCardProps) {
  const gradient = gradientMap[project.id] ?? 'from-accent to-accent-to'
  const expandable = Boolean(project.imageUrl)

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={() => expandable && onExpand(project)}
      className={`flex flex-col rounded-lg overflow-hidden bg-surface-container dark:bg-surface-container-dark hover:bg-surface-container-high dark:hover:bg-surface-container-high-dark transition-colors duration-300 ${expandable ? 'cursor-pointer' : ''}`}
    >
      {expandable ? (
        <motion.div
          initial={{ filter: 'grayscale(100%)' }}
          whileHover={{ filter: 'grayscale(0%)' }}
          transition={{ duration: 0.3 }}
          className="relative h-48 overflow-hidden group"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/15 backdrop-blur-sm rounded-full p-2.5">
              <ExpandIcon />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ filter: 'grayscale(100%)' }}
          whileHover={{ filter: 'grayscale(0%)' }}
          transition={{ duration: 0.3 }}
          className={`h-48 bg-gradient-to-br ${gradient}`}
        />
      )}

      <div className="flex flex-col gap-4 p-6">
        <h3 className="font-headline font-bold text-lg text-on-surface dark:text-on-surface-dark">
          {project.title}
        </h3>
        <p className="text-xs font-label text-accent">
          {project.role}
        </p>
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
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
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

interface ProjectModalProps {
  project: Project
  locale: Locale
  t: Translation
  activeTab: 'mockup' | 'screenshot'
  setActiveTab: (tab: 'mockup' | 'screenshot') => void
  onClose: () => void
}

function ProjectModal({ project, locale, t, activeTab, setActiveTab, onClose }: ProjectModalProps) {
  const hasScreenshot = Boolean(project.screenshotUrl)
  const currentImage = activeTab === 'mockup' ? project.imageUrl : project.screenshotUrl
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || !hasScreenshot) return
    const delta = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) {
      setActiveTab(delta > 0 ? 'screenshot' : 'mockup')
    }
    setTouchStartX(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl bg-surface-container dark:bg-surface-container-dark"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 pt-5 pb-3">
          {hasScreenshot ? (
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('mockup')}
                className={`text-xs font-label px-3 py-1.5 rounded-full transition-colors ${
                  activeTab === 'mockup'
                    ? 'bg-accent text-white'
                    : 'text-on-surface-variant dark:text-on-surface-variant-dark hover:bg-surface-container-high dark:hover:bg-surface-container-high-dark'
                }`}
              >
                {project.imageLabel ?? 'MockUp'}
              </button>
              <button
                onClick={() => setActiveTab('screenshot')}
                className={`text-xs font-label px-3 py-1.5 rounded-full transition-colors ${
                  activeTab === 'screenshot'
                    ? 'bg-accent text-white'
                    : 'text-on-surface-variant dark:text-on-surface-variant-dark hover:bg-surface-container-high dark:hover:bg-surface-container-high-dark'
                }`}
              >
                {locale === 'es' ? 'Captura' : 'Screenshot'}
              </button>
            </div>
          ) : (
            <span className="text-xs font-label text-on-surface-variant dark:text-on-surface-variant-dark">{project.imageLabel ?? 'MockUp'}</span>
          )}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsFullscreen(true)}
              className="p-1.5 rounded-full text-on-surface-variant dark:text-on-surface-variant-dark hover:bg-surface-container-high dark:hover:bg-surface-container-high-dark transition-colors"
              aria-label="Fullscreen"
            >
              <MaximizeIcon />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-on-surface-variant dark:text-on-surface-variant-dark hover:bg-surface-container-high dark:hover:bg-surface-container-high-dark transition-colors"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div
          className="bg-black/40 flex items-center justify-center relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              src={currentImage}
              alt={`${project.title} — ${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="w-full object-contain max-h-[65vh]"
            />
          </AnimatePresence>
          {hasScreenshot && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
              <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${activeTab === 'mockup' ? 'bg-white' : 'bg-white/35'}`} />
              <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${activeTab === 'screenshot' ? 'bg-white' : 'bg-white/35'}`} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 p-6">
          <div>
            <h3 className="font-headline font-bold text-xl text-on-surface dark:text-on-surface-dark">
              {project.title}
            </h3>
            <p className="text-xs font-label text-accent mt-1">{project.role}</p>
          </div>
          <p className="text-sm font-body text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed">
            {(project.detailedDescription ?? project.description)[locale]}
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
          <div className="flex items-center gap-3 pt-1">
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
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-on-surface-variant dark:text-on-surface-variant-dark hover:text-on-surface dark:hover:text-on-surface-dark transition-colors"
              >
                <GitHubIcon />
                {t.projects.code}
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation()
              setIsFullscreen(false)
            }}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setIsFullscreen(false)}
              aria-label="Exit fullscreen"
            >
              <CloseIcon />
            </button>
            <img
              src={currentImage}
              alt={`${project.title} — ${activeTab}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function MaximizeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
    </svg>
  )
}

function ExpandIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
