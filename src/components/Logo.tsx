import logoColor from '../assets/logo-color.webp'
import logoWhite from '../assets/logo-white.webp'

interface LogoProps {
  /** 'default' = logo colorido (fundos claros) · 'onRed' = logo branco (fundos vermelhos) */
  variant?: 'default' | 'onRed'
  className?: string
}

/**
 * Logo oficial da Medicar — PNGs nativos com alpha extraídos do material
 * institucional (capa e contracapa), sem recorte artificial: bordas limpas.
 */
export function Logo({ variant = 'default', className = '' }: LogoProps) {
  const onRed = variant === 'onRed'
  return (
    <img
      src={onRed ? logoWhite : logoColor}
      alt="Medicar — soluções em saúde"
      width={onRed ? 794 : 519}
      height={onRed ? 323 : 205}
      className={`h-14 w-auto md:h-[60px] ${className}`}
    />
  )
}
