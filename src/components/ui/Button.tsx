import { cn } from '../../lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'ghost'
  href?: string
  download?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export function Button({
  variant = 'primary',
  href,
  download,
  onClick,
  children,
  className,
  disabled,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-body font-medium transition-all duration-200 cursor-pointer'

  const variants = {
    primary:
      'bg-gradient-to-r from-accent to-accent-to text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed',
    ghost:
      'text-accent hover:bg-surface-container dark:hover:bg-surface-container-dark',
  }

  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} download={download} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
