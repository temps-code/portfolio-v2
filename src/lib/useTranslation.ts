import { useState, useEffect } from 'react'
import { getTranslation } from '../i18n/utils'
import type { Locale } from '../i18n/utils'

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved) setLocale(saved)
  }, [])

  useEffect(() => {
    function handleLocaleChange(e: Event) {
      setLocale((e as CustomEvent<Locale>).detail)
    }
    window.addEventListener('locale-change', handleLocaleChange)
    return () => window.removeEventListener('locale-change', handleLocaleChange)
  }, [])

  function toggle() {
    const next: Locale = locale === 'en' ? 'es' : 'en'
    localStorage.setItem('locale', next)
    setLocale(next)
    window.dispatchEvent(new CustomEvent<Locale>('locale-change', { detail: next }))
  }

  return { t: getTranslation(locale), locale, toggle }
}
