import markColor from '../assets/mark.svg'
import markWhite from '../assets/mark-white.svg'

interface LoadingMarkProps {
  /** Lado do quadrado, em px */
  size?: number
  /** 'default' = marca colorida (fundos claros) · 'onRed' = branca (fundos vermelhos) */
  variant?: 'default' | 'onRed'
  /**
   * Texto anunciado a leitores de tela. Passe '' quando houver um texto
   * visível ao lado (ex.: "Enviando…") para não anunciar em dobro.
   */
  label?: string
  className?: string
}

/**
 * Indicador de carregamento da Medicar: o asterisco da logo (vetor, cores
 * exatas da marca) girando. Usado em todo load real — troca de rota
 * (Suspense) e envio de formulário. Com prefers-reduced-motion o giro é
 * desativado e a marca pulsa suavemente.
 */
export function LoadingMark({
  size = 44,
  variant = 'default',
  label = 'Carregando…',
  className = '',
}: LoadingMarkProps) {
  return (
    <span
      role="status"
      className={`inline-flex items-center justify-center ${className}`}
    >
      <img
        src={variant === 'onRed' ? markWhite : markColor}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className="animate-mark-spin motion-reduce:animate-mark-pulse"
        style={{ width: size, height: size }}
      />
      {label && <span className="sr-only">{label}</span>}
    </span>
  )
}
