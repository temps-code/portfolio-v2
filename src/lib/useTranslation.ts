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

  useEffect(() => {
    const meta = getTranslation(locale).meta
    const setMetaContent = (selector: string, content: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
    }

    document.documentElement.lang = locale
    document.querySelector('title')?.replaceChildren(meta.title)
    setMetaContent('meta[name="description"]', meta.description)
    setMetaContent('meta[property="og:title"]', meta.title)
    setMetaContent('meta[property="og:description"]', meta.description)
    setMetaContent('meta[property="og:locale"]', meta.locale)
    setMetaContent('meta[name="twitter:title"]', meta.title)
    setMetaContent('meta[name="twitter:description"]', meta.description)
  }, [locale])

  function toggle() {
    const next: Locale = locale === 'en' ? 'es' : 'en'
    localStorage.setItem('locale', next)
    setLocale(next)
    window.dispatchEvent(new CustomEvent<Locale>('locale-change', { detail: next }))
  }

  return { t: getTranslation(locale), locale, toggle }
}
