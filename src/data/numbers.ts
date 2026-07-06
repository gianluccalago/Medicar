/**
 * Grandes números institucionais — faixa vermelha (clone do site anterior):
 * 5 números com ícone de linha branco, número gigante e rótulo em caixa alta.
 */

export type StatIconKey = 'scroll' | 'siren' | 'stethoscope' | 'badge' | 'heart'

export interface StatItem {
  /** Valor numérico usado pelo contador animado */
  value: number
  prefix: string
  suffix: string
  /** Casas decimais na animação (ex.: 4,5 mi) */
  decimals?: number
  label: string
  icon: StatIconKey
}

export const stats: readonly StatItem[] = [
  { value: 30, prefix: '+', suffix: '', label: 'anos de história', icon: 'scroll' },
  { value: 700, prefix: '+', suffix: '', label: 'ambulâncias pelo Brasil', icon: 'siren' },
  { value: 600, prefix: '+', suffix: '', label: 'médicos', icon: 'stethoscope' },
  { value: 900, prefix: '+', suffix: '', label: 'colaboradores', icon: 'badge' },
  { value: 4.5, prefix: '+', suffix: ' mi', decimals: 1, label: 'de vidas protegidas', icon: 'heart' },
]

/** Texto de apoio oficial da seção. */
export const statsIntro =
  'Ao longo dos anos, a Medicar construiu uma trajetória marcada por eficiência, organização e alto volume de atendimentos realizados com qualidade. Nossos números refletem compromisso, estrutura e confiança conquistada.'

/** Números complementares (usados em texto corrido, não na faixa). */
export const secondaryStats = {
  partners: '+350 parceiros homologados',
  onSiteResolution: '+70% dos casos resolvidos no local, sem remoção',
} as const
