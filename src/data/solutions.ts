/**
 * "Nossas Soluções" — grid da Home, agrupado por público (adendo do carrossel).
 * Textos literais do site oficial. Ícone de linha vermelho por card; `image?`
 * opcional para o hover-reveal (TODO: asset de foto por serviço).
 */

export type SolutionIconKey =
  | 'hospital'
  | 'shield-people'
  | 'clipboard'
  | 'brain-heart'
  | 'house-heart'
  | 'telemedicine'
  | 'phone-paw'
  | 'ambulance'

export interface Solution {
  slug: string
  title: string
  description: string
  icon: SolutionIconKey
  /** Foto revelada no hover (opcional). TODO: asset por serviço. */
  image?: string
  href: string
  audience: 'empresa' | 'voce'
}

export const solutions: readonly Solution[] = [
  // Para sua empresa
  {
    slug: 'area-protegida',
    title: 'Área Protegida',
    description: 'Segurança para seus funcionários, clientes e visitantes.',
    icon: 'hospital',
    href: '/solucoes/empresa/area-protegida',
    audience: 'empresa',
  },
  {
    slug: 'coletivo-empresarial',
    title: 'Coletivo Empresarial',
    description: 'Proteção para seus colaboradores dentro e fora da empresa.',
    icon: 'shield-people',
    href: '/solucoes/empresa/coletivo-empresarial',
    audience: 'empresa',
  },
  {
    slug: 'terceirizacao-de-ambulatorio',
    title: 'Terceirização de Ambulatório',
    description: 'Deixe sua equipe focada no que realmente importa: seu negócio.',
    icon: 'clipboard',
    href: '/solucoes/empresa/terceirizacao-de-ambulatorio',
    audience: 'empresa',
  },
  {
    slug: 'nr-1',
    title: 'Gestão de Risco Psicossocial 360º',
    description:
      'Programa de ações diagnósticas, preventivas e educativas para promover o bem-estar emocional e atender às normas da NR-1.',
    icon: 'brain-heart',
    href: '/solucoes/empresa/nr-1',
    audience: 'empresa',
  },
  // Para você e sua família
  {
    slug: 'lar-protegido',
    title: 'Lar Protegido Medicar',
    description: 'Socorro e cuidado na sua casa para você, sua família e seus pets.',
    icon: 'house-heart',
    href: '/solucoes/lar-protegido',
    audience: 'voce',
  },
  {
    slug: 'telemedicina',
    title: 'Telemedicina Medicar',
    description:
      'Atendimento médico rápido, sem sair de casa ou do trabalho e sem filas em consultórios.',
    icon: 'telemedicine',
    href: '/solucoes/empresa/telemedicina',
    audience: 'voce',
  },
  {
    slug: 'medicar-pet',
    title: 'Medicar Pet',
    description: 'Veterinário disponível 24 horas por videochamada com uso ilimitado para cães e gatos.',
    icon: 'phone-paw',
    href: '/medicar-pet',
    audience: 'voce',
  },
  {
    slug: 'locacao-de-ambulancia',
    title: 'Locação de Ambulâncias',
    description: 'Sua frota sem investimentos inicial e sem dores de cabeça com administração.',
    icon: 'ambulance',
    href: '/solucoes/empresa/locacao-de-ambulancia',
    audience: 'voce',
  },
]

export const solutionGroups = [
  { label: 'Para sua empresa', audience: 'empresa' as const },
  { label: 'Para você e sua família', audience: 'voce' as const },
]

export const solutionsIntro =
  'A Medicar oferece soluções personalizadas para atender qualquer tipo de necessidade.'
