import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useTranslation } from '../../lib/useTranslation'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { cn } from '../../lib/utils'

const EMAILJS_SERVICE_ID = 'service_lveaqcx'
const EMAILJS_TEMPLATE_ID = 'template_vj8civr'
const EMAILJS_PUBLIC_KEY = 'PTntg3OhvhPXJpWjf'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const { t } = useTranslation()
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass = cn(
    'w-full px-4 py-3 rounded-lg text-sm font-body',
    'bg-surface-container dark:bg-surface-container-dark',
    'text-on-surface dark:text-on-surface-dark',
    'placeholder:text-on-surface-variant/50 dark:placeholder:text-on-surface-variant-dark/50',
    'border border-transparent focus:outline-none focus:border-accent',
    'transition-colors duration-200',
  )

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-4"
    >
      <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="from_name"
          placeholder={t.contact.form_name}
          required
          className={inputClass}
        />
        <input
          type="email"
          name="from_email"
          placeholder={t.contact.form_email}
          required
          className={inputClass}
        />
      </motion.div>

      <motion.textarea
        variants={fadeInUp}
        name="message"
        placeholder={t.contact.form_message}
        required
        rows={5}
        className={cn(inputClass, 'resize-none')}
      />

      <motion.div variants={fadeInUp}>
        <button
          type="submit"
          disabled={status === 'sending'}
          className={cn(
            'inline-flex items-center gap-2 px-6 py-3 rounded-lg',
            'text-sm font-body font-medium',
            'bg-accent text-white',
            'hover:opacity-90 transition-opacity duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          )}
        >
          {status === 'sending' ? t.contact.form_sending : t.contact.form_send}
        </button>

        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-sm font-body text-accent"
          >
            {t.contact.form_success}
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-sm font-body text-red-500"
          >
            {t.contact.form_error}
          </motion.p>
        )}
      </motion.div>
    </motion.form>
  )
}
