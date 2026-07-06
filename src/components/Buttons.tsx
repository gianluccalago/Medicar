import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'onRed' | 'ghostOnRed'

/*
 * Vocabulário de botões do sistema:
 * - primary: o ÚNICO botão chromatic (vermelho Medicar) — um por viewport
 * - ghost: neutro com hairline border
 * - onRed / ghostOnRed: variantes para as faixas vermelhas full-bleed
 */
const base =
  'inline-flex items-center justify-center gap-2 rounded-btn px-4 py-2.5 text-[15px] font-medium tracking-[-0.011em] transition-colors'

const variants: Record<Variant, string> = {
  primary: `${base} bg-medicar-red text-white hover:bg-medicar-red-deep`,
  ghost: `${base} border border-line-strong bg-canvas text-ink hover:border-ink-muted hover:bg-surface`,
  onRed: `${base} bg-white text-medicar-red-deep hover:bg-red-wash`,
  ghostOnRed: `${base} border border-white/40 text-white hover:border-white hover:bg-white/10`,
}

interface ButtonLinkProps {
  to: string
  variant?: Variant
  children: ReactNode
  className?: string
}

export function ButtonLink({ to, variant = 'primary', children, className = '' }: ButtonLinkProps) {
  const cls = `${variants[variant]} ${className}`
  if (/^(https?:|tel:|mailto:)/.test(to)) {
    const external = to.startsWith('http')
    return (
      <a
        href={to}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  )
}
