import { motion } from 'framer-motion'
import { useTranslation } from '../../lib/useTranslation'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { contact } from '../../data/contact'
import { ContactForm } from './ContactForm'

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-40 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-label uppercase tracking-widest text-accent mb-2"
          >
            03 —
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-headline font-bold text-3xl lg:text-4xl text-on-surface dark:text-on-surface-dark mb-4"
          >
            {t.contact.title}
          </motion.h2>
          <motion.span
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container dark:bg-surface-container-dark text-xs font-label uppercase tracking-wider text-accent"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t.contact.availability}
          </motion.span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <motion.p
            variants={fadeInUp}
            className="text-base font-body text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed"
          >
            {t.contact.subtitle}
          </motion.p>

          <ContactForm />

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-6 pt-2">
            <motion.a
              variants={fadeInUp}
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-sm font-body text-on-surface-variant dark:text-on-surface-variant-dark hover:text-on-surface dark:hover:text-on-surface-dark transition-colors group"
              aria-label={contact.email}
            >
              <EmailIcon />
              <span className="hidden sm:inline group-hover:underline underline-offset-4">{contact.email}</span>
            </motion.a>
            <motion.a
              variants={fadeInUp}
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-body text-on-surface-variant dark:text-on-surface-variant-dark hover:text-on-surface dark:hover:text-on-surface-dark transition-colors group"
              aria-label={t.contact.github_label}
            >
              <GitHubIcon />
              <span className="hidden sm:inline group-hover:underline underline-offset-4">{t.contact.github_label}</span>
            </motion.a>
            <motion.a
              variants={fadeInUp}
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-body text-on-surface-variant dark:text-on-surface-variant-dark hover:text-on-surface dark:hover:text-on-surface-dark transition-colors group"
              aria-label={t.contact.linkedin_label}
            >
              <LinkedInIcon />
              <span className="hidden sm:inline group-hover:underline underline-offset-4">{t.contact.linkedin_label}</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
