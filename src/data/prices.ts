/** Cartão Medicar (B2C) — benefícios e tabela de preços (associado × particular). */

export interface PriceTier {
  associate: string
  regular: string
  specialties: readonly string[]
}

export const priceTiers: readonly PriceTier[] = [
  {
    associate: 'R$ 29,00',
    regular: 'R$ 109,00',
    specialties: ['Clínico Geral'],
  },
  {
    associate: 'R$ 54,00',
    regular: 'R$ 130,00',
    specialties: [
      'Cardiologia',
      'Dermatologia',
      'Fisioterapia',
      'Fonoaudiologia',
      'Gastroenterologia',
      'Ginecologia',
      'Nutrição',
      'Oftalmologia',
      'Ortopedia',
      'Otorrinolaringologia',
      'Pediatria',
      'Pneumologia',
      'Proctologia',
      'Psicologia',
      'Urologia',
      'Vascular',
    ],
  },
  {
    associate: 'R$ 98,00',
    regular: 'R$ 210,00',
    specialties: [
      'Endocrinologia',
      'Geriatria',
      'Infectologia',
      'Neurologia',
      'Psiquiatria',
      'Reumatologia',
    ],
  },
]

export interface CardBenefit {
  title: string
  text: string
  note?: string
}

export const cardBenefits: readonly CardBenefit[] = [
  {
    title: 'Telemedicina 24h',
    text: 'Pronto atendimento on-line por videochamada, a qualquer hora, para você e sua família.',
  },
  {
    title: '70% de desconto na Clínica Medicar',
    text: 'Consultas a partir de R$ 29,00 em mais de 20 especialidades, em Ribeirão Preto.',
  },
  {
    title: 'Descontos em medicamentos',
    text: 'Até 40% de desconto informando o CPF nas redes parceiras: Pague Menos, Droga Raia, Drogasil, Drogão Super e Extrafarma.',
    note: 'Válido presencialmente nas lojas.',
  },
  {
    title: 'Descontos em exames no Sabin',
    text: '30% de desconto em exames laboratoriais e de imagem, em cerca de 350 unidades pelo país.',
  },
  {
    title: 'Proteção a terceiros no trânsito',
    text: 'Associado condutor e terceiros envolvidos em ocorrências de trânsito atendidos pela Central 24h.',
  },
  {
    title: 'Urgência odontológica 24h',
    text: 'Atendimento odontológico de urgência a qualquer hora.',
    note: 'Disponível em Ribeirão Preto.',
  },
  {
    title: 'UTIs móveis 24h',
    text: 'Atendimento de urgência e emergência com UTIs móveis, incluso na mensalidade de associado.',
  },
]
