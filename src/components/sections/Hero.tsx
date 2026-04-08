import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '../../lib/useTranslation'
import { fadeInUp, staggerContainer, scaleIn } from '../../lib/animations'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

const CODE_TEXT = `const developer = {
  name: "Diego Vargas",
  role: "Backend Developer",
  focus: "backend systems",
  stack: {
    backend: [".NET / C#", "PostgreSQL", "Supabase"],
    frontend: ["React", "TypeScript", "React Native"],
  },
  architecture: ["Clean Architecture", "SOLID"],
  available: true,
}`

export function Hero() {
  const { t, locale } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-[32rem] h-[32rem] bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-64 h-64 bg-accent-to/5 dark:bg-accent-to/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm font-label uppercase tracking-widest text-accent"
            >
              {t.hero.greeting}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-headline font-black text-5xl lg:text-7xl tracking-tight text-on-surface dark:text-on-surface-dark leading-none"
              style={{ letterSpacing: '-0.04em' }}
            >
              {t.hero.name}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-headline font-bold text-xl lg:text-2xl text-on-surface-variant dark:text-on-surface-variant-dark"
            >
              {t.hero.role}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base font-body text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed max-w-lg"
            >
              {t.hero.description}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-4 pt-2">
              <Button href="#projects">{t.hero.cta_projects}</Button>
              <Button href="#contact" variant="ghost">
                {t.hero.cta_contact}
              </Button>
              <Button
                href={`/cv/diego_vargas_cv_${locale}.pdf`}
                download={`diego_vargas_cv_${locale}.pdf`}
                variant="ghost"
              >
                {t.about.download_cv}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <CodeBlock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CodeBlock() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(CODE_TEXT.slice(0, i))
      if (i >= CODE_TEXT.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 18)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rounded-lg bg-surface-container dark:bg-surface-container-dark p-6 font-mono text-sm leading-relaxed">
      <div className="flex gap-2 mb-5">
        <span className="w-3 h-3 rounded-full bg-red-500/50" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <span className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <pre className="text-on-surface-variant dark:text-on-surface-variant-dark overflow-x-auto min-h-[18rem]">
        <code>
          {displayed}
          {!done && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-[2px] h-[1em] bg-accent align-middle ml-px"
            />
          )}
        </code>
      </pre>
    </div>
  )
}
