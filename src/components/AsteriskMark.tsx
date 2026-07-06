import markColor from '../assets/mark-color.webp'
import markWhite from '../assets/mark-white.webp'

interface AsteriskMarkProps {
  size?: number
  /**
   * 'brand'/'solid' = mark colorido oficial (vermelho/cinza/preto)
   * 'white' = mark branco, para fundos vinho/vermelho
   */
  variant?: 'brand' | 'white' | 'solid'
  className?: string
}

/**
 * Símbolo (mark) oficial da Medicar — artwork real extraído em alta resolução
 * do material institucional. Usado como ícone/acento e como motivo decorativo.
 */
export function AsteriskMark({ size = 32, variant = 'brand', className }: AsteriskMarkProps) {
  const src = variant === 'white' ? markWhite : markColor
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={`object-contain ${className ?? ''}`}
    />
  )
}
