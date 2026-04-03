import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from '../../lib/useTranslation'
import { useTheme } from '../../lib/useTheme'
import { cn } from '../../lib/utils'

export function Navbar() {
  const { t, toggle: toggleLocale } = useTranslation()
  const { theme, toggle: toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-surface/80 dark:bg-surface-low-dark/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-8 lg:px-16 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-headline font-bold text-lg text-on-surface dark:text-on-surface-dark"
        >
          DV
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-body text-on-surface-variant dark:text-on-surface-variant-dark hover:text-on-surface dark:hover:text-on-surface-dark transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="text-sm font-medium text-on-surface-variant dark:text-on-surface-variant-dark hover:text-on-surface dark:hover:text-on-surface-dark transition-colors px-2 py-1"
          >
            {t.language_toggle.label}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 text-on-surface-variant dark:text-on-surface-variant-dark hover:text-on-surface dark:hover:text-on-surface-dark transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <button
          className="md:hidden p-2 text-on-surface dark:text-on-surface-dark"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface dark:bg-surface-low-dark border-t border-outline/20 dark:border-outline-dark/20"
          >
            <ul className="px-8 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-body text-on-surface-variant dark:text-on-surface-variant-dark hover:text-on-surface dark:hover:text-on-surface-dark transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-2 border-t border-outline/20 dark:border-outline-dark/20">
                <button
                  onClick={toggleLocale}
                  className="text-sm font-medium text-on-surface-variant dark:text-on-surface-variant-dark"
                >
                  {t.language_toggle.label}
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-1 text-on-surface-variant dark:text-on-surface-variant-dark"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
