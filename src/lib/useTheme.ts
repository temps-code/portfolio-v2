import { useState, useEffect } from 'react'

type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('theme') as Theme) ?? 'dark'
  })

  useEffect(() => {
    function handleThemeChange(e: Event) {
      setTheme((e as CustomEvent<Theme>).detail)
    }
    window.addEventListener('theme-change', handleThemeChange)
    return () => window.removeEventListener('theme-change', handleThemeChange)
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    setTheme(next)
    window.dispatchEvent(new CustomEvent<Theme>('theme-change', { detail: next }))
  }

  return { theme, toggle }
}
