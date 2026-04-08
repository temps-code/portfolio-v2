import { motion } from 'framer-motion'
import { useTranslation } from '../../lib/useTranslation'
import { fadeInUp, staggerContainer } from '../../lib/animations'

export function About() {
  const { t } = useTranslation()

  const stats = [
    { value: '2+', label: t.about.years_experience },
    { value: '3', label: t.about.major_projects },
    { value: '6', label: t.about.tech_stacks },
  ]

  return (
    <section id="about" className="py-20 lg:min-h-screen lg:flex lg:items-center lg:py-0 lg:pb-[14rem]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-label uppercase tracking-widest text-accent mb-2"
          >
            00 —
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-headline font-bold text-3xl lg:text-4xl text-on-surface dark:text-on-surface-dark"
          >
            {t.about.title}
          </motion.h2>
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
            {t.about.paragraph1}
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-base font-body text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed"
          >
            {t.about.paragraph2}
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-base font-body text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed"
          >
            {t.about.paragraph3}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="flex flex-col gap-1 p-5 rounded-lg bg-surface-container dark:bg-surface-container-dark"
              >
                <span className="font-headline font-black text-3xl text-on-surface dark:text-on-surface-dark">
                  {stat.value}
                </span>
                <span className="text-xs font-label text-on-surface-variant dark:text-on-surface-variant-dark uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
      </div>
    </section>
  )
}
