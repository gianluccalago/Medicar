/**
 * Grandes números institucionais.
 * Seleção dos 5 números de maior impacto, cada um com um contexto descritivo
 * (quando · com quem · onde). Os NÚMEROS são canônicos; o texto de contexto é
 * ilustrativo/editorial e pode ser ajustado conforme material aprovado.
 */

export interface StatItem {
  /** Valor numérico usado pelo contador animado */
  value: number
  prefix: string
  suffix: string
  /** Casas decimais na animação (ex.: 4,5 mi) */
  decimals?: number
  /** Rótulo curto (uma linha) */
  label: string
  /** Contexto descritivo: quando, com quem, onde */
  context: string
}

export const stats: readonly StatItem[] = [
  {
    value: 30,
    prefix: '+',
    suffix: '',
    label: 'anos de história',
    context:
      'Desde a fundação em Ribeirão Preto, em 1993, socorrendo pessoas e empresas sem interrupção.',
  },
  {
    value: 700,
    prefix: '+',
    suffix: '',
    label: 'ambulâncias pelo Brasil',
    context:
      'De UTIs móveis a suporte básico, prontas 24h em bases próprias e parceiras, de norte a sul do país.',
  },
  {
    value: 4.5,
    prefix: '+',
    suffix: ' mi',
    decimals: 1,
    label: 'de vidas protegidas',
    context:
      'Trabalhadores, famílias e clientes de empresas de todos os portes — em casa, no trabalho e na estrada.',
  },
  {
    value: 600,
    prefix: '+',
    suffix: '',
    label: 'médicos',
    context:
      'Reguladores e assistenciais, coordenando cada atendimento pela Central 24h e nas equipes de campo.',
  },
  {
    value: 70,
    prefix: '+',
    suffix: '%',
    label: 'dos casos resolvidos no local',
    context:
      'Atendimentos concluídos no próprio local, sem remoção hospitalar — mais agilidade, menos deslocamento.',
  },
]

/** Números complementares (usados em texto corrido, não na faixa principal). */
export const secondaryStats = {
  collaborators: '+900 colaboradores',
  partners: '+350 parceiros homologados',
} as const
