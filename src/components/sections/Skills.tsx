import { motion } from 'framer-motion'
import { useTranslation } from '../../lib/useTranslation'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { Badge } from '../ui/Badge'
import { skillCategories } from '../../data/skills'

export function Skills() {
  const { t, locale } = useTranslation()

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24 mb-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-12"
      >
        <motion.div variants={fadeInUp} className="flex flex-col gap-2">
          <p className="text-xs font-label uppercase tracking-widest text-accent">02 —</p>
          <h2 className="font-headline font-bold text-3xl lg:text-4xl text-on-surface dark:text-on-surface-dark">
            {t.skills.title}
          </h2>
          <p className="text-base font-body text-on-surface-variant dark:text-on-surface-variant-dark">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={fadeInUp}
              className="flex flex-col gap-4 p-6 rounded-lg bg-surface-container dark:bg-surface-container-dark"
            >
              <h3 className="text-sm font-label uppercase tracking-wider text-on-surface dark:text-on-surface-dark">
                {category.label[locale]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
