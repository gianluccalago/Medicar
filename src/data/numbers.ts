/** Grandes números institucionais (faixa de números). */

export interface StatItem {
  /** Valor numérico usado pelo contador animado */
  value: number
  prefix: string
  suffix: string
  /** Casas decimais na animação (ex.: 4,5 mi) */
  decimals?: number
  label: string
}

export const stats: readonly StatItem[] = [
  { value: 30, prefix: '+', suffix: '', label: 'anos de história' },
  { value: 700, prefix: '+', suffix: '', label: 'ambulâncias pelo Brasil' },
  { value: 600, prefix: '+', suffix: '', label: 'médicos' },
  { value: 900, prefix: '+', suffix: '', label: 'colaboradores' },
  { value: 4.5, prefix: '+', suffix: ' mi', decimals: 1, label: 'de vidas protegidas' },
  { value: 350, prefix: '+', suffix: '', label: 'parceiros homologados' },
  { value: 70, prefix: '+', suffix: '%', label: 'dos casos resolvidos no local, sem remoção' },
]
