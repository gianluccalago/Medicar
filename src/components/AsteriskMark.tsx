interface AsteriskMarkProps {
  size?: number
  /** 'brand' = pás vermelhas + pá horizontal cinza · 'white' = outline branco (fundos vermelhos) */
  variant?: 'brand' | 'white'
  className?: string
}

/** Asterisco Medicar de 8 pontas, recriado em SVG fiel ao logo do vídeo. */
export function AsteriskMark({ size = 32, variant = 'brand', className }: AsteriskMarkProps) {
  const blade = { x: 27.5, y: 6, width: 9, height: 52, rx: 4.5 }
  if (variant === 'white') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={className}
      >
        {[0, 45, 90, 135].map((angle) => (
          <rect
            key={angle}
            {...blade}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            transform={angle ? `rotate(${angle} 32 32)` : undefined}
          />
        ))}
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <rect {...blade} fill="var(--color-medicar-red)" />
      <rect {...blade} fill="var(--color-medicar-red)" transform="rotate(45 32 32)" />
      <rect {...blade} fill="var(--color-medicar-red)" transform="rotate(135 32 32)" />
      <rect {...blade} fill="var(--color-brand-gray)" transform="rotate(90 32 32)" />
    </svg>
  )
}
