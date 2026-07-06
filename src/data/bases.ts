/** Bases próprias com endereço (Sobre nós e Contato). */

export interface Base {
  city: string
  address: string
}

export const bases: readonly Base[] = [
  { city: 'Ribeirão Preto', address: 'Av. Caramuru, 644 – República' },
  { city: 'São Paulo', address: 'Av. dos Bandeirantes, 1.856 – Itaim Bibi' },
  { city: 'São Paulo', address: 'R. do Oratório, 1.077 – Alto da Mooca' },
  { city: 'Santos', address: 'Av. Conselheiro Nébias, 236 – Vila Mathias' },
  { city: 'Campinas', address: 'Av. Dr. Alberto Sarmento, 838 – Bonfim' },
  { city: 'Rio de Janeiro', address: 'R. Estácio de Sá, 151 – Estácio' },
  { city: 'Goiânia', address: 'Av. T-63, 3362, Qd 332 lt 10, Jardim América' },
  { city: 'Brasília', address: 'SCRS 516, Bloco B, 66, 1º andar, Asa Sul' },
]

/** Cobertura "Medicar pelo Brasil" — cidades/regiões com bases próprias. */
export const coverageAreas: readonly string[] = [
  'Ribeirão Preto',
  'Campinas e região metropolitana',
  'Indaiatuba',
  'Jundiaí',
  'Itu',
  'Salto',
  'Grande São Paulo',
  'Baixada Santista',
  'Rio de Janeiro',
  'Belo Horizonte',
  'Brasília',
  'Goiânia',
]

export const coverageNote =
  'Abrangência nacional por meio de +350 parceiros homologados.'
