/**
 * Mapa estilizado (low-poly) do Brasil em SVG com pins das bases próprias.
 * Contorno e pins projetados de lon/lat: x=(lon+74.5)*9.8, y=(5.8−lat)*9.8.
 */

interface Pin {
  x: number
  y: number
  label: string
}

const pins: readonly Pin[] = [
  { x: 262, y: 265, label: 'Ribeirão Preto' },
  { x: 267, y: 281, label: 'Campinas' },
  { x: 273, y: 289, label: 'Grande São Paulo' },
  { x: 278, y: 296, label: 'Baixada Santista' },
  { x: 307, y: 281, label: 'Rio de Janeiro' },
  { x: 300, y: 252, label: 'Belo Horizonte' },
  { x: 261, y: 212, label: 'Brasília' },
  { x: 247, y: 221, label: 'Goiânia' },
]

const outline =
  'M142 6 L147 39 L180 37 L195 34 L217 28 L227 16 L230 47 L240 56 L256 63 L295 79 ' +
  'L323 85 L349 92 L386 108 L389 126 L378 152 L365 169 L353 184 L348 217 L341 241 ' +
  'L335 256 L318 281 L293 286 L275 292 L255 307 L254 337 L228 368 L219 382 L207 388 ' +
  'L166 353 L181 337 L193 326 L195 308 L198 293 L187 292 L184 275 L163 273 L163 260 ' +
  'L160 251 L164 228 L140 216 L137 205 L139 189 L89 170 L57 166 L38 165 L38 149 ' +
  'L23 155 L8 129 L13 117 L44 98 L48 67 L44 51 L73 40 L97 17 L116 18 L136 9 Z'

export function BrazilMap() {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Mapa do Brasil com as bases próprias da Medicar: Ribeirão Preto, Campinas, Grande São Paulo, Baixada Santista, Rio de Janeiro, Belo Horizonte, Brasília e Goiânia"
      className="h-auto w-full max-w-md"
    >
      <path
        d={outline}
        fill="var(--color-canvas)"
        stroke="var(--color-line-strong)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {pins.map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="10" fill="var(--color-medicar-red)" opacity="0.15" />
          <circle
            cx={p.x}
            cy={p.y}
            r="4"
            fill="var(--color-medicar-red)"
            stroke="#ffffff"
            strokeWidth="1.5"
          >
            <title>{p.label}</title>
          </circle>
        </g>
      ))}
    </svg>
  )
}
