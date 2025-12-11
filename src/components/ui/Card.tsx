import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md'
}: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={`
        bg-navy-800 rounded-2xl border border-gold-500/10
        ${hover ? 'hover:border-gold-500/30 hover:scale-[1.02]' : ''}
        transition-all duration-300
        ${paddings[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
