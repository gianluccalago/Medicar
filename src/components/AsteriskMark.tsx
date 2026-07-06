interface AsteriskMarkProps {
  size?: number
  /**
   * 'brand' = 8 pás em burst (diagonais vermelhas, ortogonais cinza) + hub — logo oficial
   * 'white' = todas as pás brancas, para fundos vermelhos
   * 'solid' = todas as pás no vermelho da marca (motivo decorativo mono)
   */
  variant?: 'brand' | 'white' | 'solid'
  className?: string
}

/*
 * Asterisco Medicar de 8 pontas, reconstruído em SVG a partir do logo oficial
 * (apresentação institucional): 8 pás em pílula irradiando de um hub central,
 * a 45° cada. Na versão colorida, as pás diagonais são vermelhas e as
 * ortogonais são cinza-grafite.
 */
const W = 14
const Y0 = 9
const Y1 = 46
const RX = W / 2

export function AsteriskMark({ size = 32, variant = 'brand', className }: AsteriskMarkProps) {
  const blades = Array.from({ length: 8 }, (_, k) => {
    let fill: string
    if (variant === 'white') fill = '#ffffff'
    else if (variant === 'solid') fill = 'var(--color-medicar-red)'
    else fill = k % 2 === 1 ? 'var(--color-medicar-red)' : 'var(--color-brand-gray)'
    return (
      <rect
        key={k}
        x={50 - W / 2}
        y={Y0}
        width={W}
        height={Y1 - Y0}
        rx={RX}
        fill={fill}
        transform={`rotate(${k * 45} 50 50)`}
      />
    )
  })
  const hub =
    variant === 'white'
      ? '#ffffff'
      : variant === 'solid'
        ? 'var(--color-medicar-red)'
        : 'var(--color-brand-gray)'
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className={className}>
      {blades}
      <circle cx="50" cy="50" r="5" fill={hub} />
    </svg>
  )
}
