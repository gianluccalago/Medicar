/** Linha do tempo institucional (Sobre nós). */

export interface TimelineEntry {
  year: number
  text: string
}

export const timeline: readonly TimelineEntry[] = [
  { year: 1993, text: 'Fundação em Ribeirão Preto' },
  { year: 2002, text: 'Unidade Campinas' },
  { year: 2012, text: 'Início do atendimento ao setor público' },
  { year: 2014, text: 'Unidade São Paulo' },
  { year: 2021, text: 'Unidade Santos' },
  { year: 2022, text: 'App de Telemedicina e inauguração da Clínica Medicar' },
  { year: 2023, text: 'Unidade Rio de Janeiro' },
  { year: 2024, text: 'Unidades Brasília, Belo Horizonte, Goiânia, Indaiatuba e Jundiaí' },
  { year: 2025, text: 'Medicar Pet e aquisição da Bem Emergências' },
]
