import { type ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'figure' | 'li'
}

/** Wrapper that fades/slides children in when scrolled into view. */
export default function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const ref = useReveal<HTMLDivElement>()
  const Tag = as as 'div'
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
