import { cn } from '../../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-4 py-2 rounded-full text-sm',
        'bg-surface-container dark:bg-surface-container-dark',
        'text-violet-500 dark:text-violet-400',
        className,
      )}
    >
      {children}
    </span>
  )
}
