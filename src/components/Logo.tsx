import logoColor from '../assets/logo-color.svg'
import logoWhite from '../assets/logo-white.svg'

interface LogoProps {
  /** 'default' = logo colorido (fundos claros) · 'onRed' = logo branco (fundos vermelhos) */
  variant?: 'default' | 'onRed'
  className?: string
}

/**
 * Logo oficial da Medicar em vetor (SVG) — traçado a partir do material
 * institucional e recolorido com as cores exatas da marca. Por ser vetorial,
 * mantém nitidez impecável em qualquer tamanho e densidade de tela, sem
 * distorção (proporção 519:205 travada por `w-auto` + altura fixa).
 */
export function Logo({ variant = 'default', className = '' }: LogoProps) {
  const onRed = variant === 'onRed'
  return (
    <img
      src={onRed ? logoWhite : logoColor}
      alt="Medicar — soluções em saúde"
      width={519}
      height={205}
      // max-w-none: anula o `img { max-width: 100% }` do preflight — sem isso
      // o flex do header espremia a logo na horizontal (deformação histórica).
      className={`h-[68px] w-auto max-w-none md:h-[80px] ${className}`}
    />
  )
}
