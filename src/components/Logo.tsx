import logoColor from '../assets/logo-color.webp'
import logoWhite from '../assets/logo-white.webp'

interface LogoProps {
  /** 'default' = logo colorido (fundos claros) · 'onRed' = logo branco (fundos vinho/vermelho) */
  variant?: 'default' | 'onRed'
  className?: string
}

/**
 * Logo oficial da Medicar (mark + wordmark "medicar soluções em saúde"),
 * artwork real extraído em alta resolução do material institucional.
 */
export function Logo({ variant = 'default', className = '' }: LogoProps) {
  const onRed = variant === 'onRed'
  return (
    <img
      src={onRed ? logoWhite : logoColor}
      alt="Medicar — soluções em saúde"
      width={onRed ? 620 : 620}
      height={onRed ? 199 : 250}
      className={`h-11 w-auto md:h-12 ${className}`}
    />
  )
}
