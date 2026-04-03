import { useTranslation } from '../../lib/useTranslation'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-footer dark:bg-footer-dark px-8 lg:px-16 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-body text-on-surface-variant dark:text-on-surface-variant-dark">
          {t.footer.built_with}
        </p>
        <p className="text-xs font-body text-on-surface-variant dark:text-on-surface-variant-dark">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
