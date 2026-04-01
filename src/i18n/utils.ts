import { en } from './en'
import { es } from './es'

export type Locale = 'en' | 'es'

export const translations = { en, es } as const

export function getTranslation(locale: Locale) {
  return translations[locale]
}
