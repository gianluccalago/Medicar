/**
 * Blog — 8 títulos reais como placeholders.
 * O corpo dos posts está "em migração" do site antigo: substituir `body`
 * pelo conteúdo definitivo quando a migração for concluída.
 */

export interface Post {
  slug: string
  title: string
  excerpt: string
  category: string
  /** PLACEHOLDER: conteúdo em migração do site antigo */
  body: string
}

const MIGRATION_NOTICE =
  'Este conteúdo está em migração do site anterior da Medicar e será publicado em breve. Enquanto isso, fale com a nossa equipe pelos canais de contato para saber mais sobre o tema.'

export const posts: readonly Post[] = [
  {
    slug: 'area-protegida-para-clinicas-de-estetica',
    title: 'Área Protegida para clínicas de estética',
    excerpt:
      'Por que clínicas de estética estão adotando a Área Protegida para dar resposta médica imediata a intercorrências.',
    category: 'Área Protegida',
    body: MIGRATION_NOTICE,
  },
  {
    slug: 'locacao-de-ambulancia-no-rio-de-janeiro',
    title: 'Locação de ambulância no Rio de Janeiro',
    excerpt:
      'Como funciona a locação de ambulâncias no Rio de Janeiro e o que avaliar antes de contratar.',
    category: 'Locação de Ambulância',
    body: MIGRATION_NOTICE,
  },
  {
    slug: 'medicar-consolida-lideranca-maior-frota-de-ambulancias-do-brasil',
    title: 'Medicar consolida liderança com a maior frota de ambulâncias do Brasil',
    excerpt:
      'Com mais de 700 ambulâncias, a Medicar reforça sua posição de maior player nacional do setor.',
    category: 'Institucional',
    body: MIGRATION_NOTICE,
  },
  {
    slug: 'o-que-a-nova-nr-1-exige-e-e-obrigatoria-para-todas-as-empresas',
    title: 'O que a nova NR-1 exige e é obrigatória para todas as empresas',
    excerpt:
      'Entenda as exigências da nova NR-1 e o impacto para empresas de todos os portes.',
    category: 'NR-1',
    body: MIGRATION_NOTICE,
  },
  {
    slug: 'o-que-e-a-nr-1-o-que-mudou-e-como-se-adequar-em-2026',
    title: 'O que é a NR-1, o que mudou e como se adequar em 2026',
    excerpt:
      'Um guia direto sobre a NR-1: o que é, o que mudou e o caminho de adequação em 2026.',
    category: 'NR-1',
    body: MIGRATION_NOTICE,
  },
  {
    slug: 'cuidados-com-idosos-em-casa',
    title: 'Cuidados com idosos em casa',
    excerpt:
      'Boas práticas para a segurança e o bem-estar de idosos no ambiente doméstico.',
    category: 'Saúde',
    body: MIGRATION_NOTICE,
  },
  {
    slug: 'diferenca-entre-atendimento-pre-hospitalar-cti-e-uti',
    title: 'Diferença entre atendimento pré-hospitalar, CTI e UTI',
    excerpt:
      'APH, CTI e UTI: entenda o papel de cada etapa no cuidado com pacientes graves.',
    category: 'Saúde',
    body: MIGRATION_NOTICE,
  },
  {
    slug: 'nr-1-para-empresas',
    title: 'NR-1 para empresas',
    excerpt:
      'O que a sua empresa precisa saber sobre a NR-1 e como a Medicar pode ajudar na adequação.',
    category: 'NR-1',
    body: MIGRATION_NOTICE,
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
