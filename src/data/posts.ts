/**
 * Blog — textos oficiais do site anterior (adendo de copy).
 * Post 1 (APH/CTI/UTI) está na íntegra. Posts 2 e 3 têm resumo literal e
 * corpo PENDENTE (não inventar conteúdo técnico/normativo). Os demais são
 * placeholders "em migração".
 */

export interface PostBlock {
  heading?: string
  subheading?: string
  paragraph?: string
  list?: readonly string[]
}

export interface Post {
  slug: string
  title: string
  excerpt: string
  category: string
  /** Aviso de conteúdo em migração/pendente (quando não há corpo aprovado) */
  body?: string
  /** Corpo estruturado do artigo (quando há texto oficial completo) */
  content?: readonly PostBlock[]
  /** CTA ao final do post */
  ctaText?: string
}

const MIGRATION_NOTICE =
  'Este conteúdo está em migração do site anterior da Medicar e será publicado em breve. Enquanto isso, fale com a nossa equipe pelos canais de contato para saber mais sobre o tema.'

const PENDING_NOTICE =
  'O conteúdo completo deste artigo está em aprovação e será publicado em breve. Para informações sobre o tema, fale com a nossa equipe.'

const aphCtiUtiContent: readonly PostBlock[] = [
  {
    paragraph:
      'Entender a diferença entre atendimento pré-hospitalar, CTI e UTI é essencial para saber qual tipo de suporte buscar em situações críticas. Embora todos estejam relacionados ao cuidado de pacientes em estado grave, cada um possui finalidade, estrutura e equipes específicas.',
  },
  {
    paragraph:
      'Compreender a diferença entre atendimento pré-hospitalar, CTI e UTI é essencial tanto para profissionais quanto para pacientes e familiares, pois ajuda a identificar o nível certo de assistência em cada momento da linha de cuidado.',
  },
  {
    paragraph: 'Neste artigo, você vai entender:',
    list: [
      'O que é atendimento pré-hospitalar e como ele funciona;',
      'O papel do CTI no tratamento intensivo;',
      'Como a UTI atua na estabilização e recuperação do paciente;',
      'Diferenças práticas entre cada modalidade;',
      'Casos em que cada nível de atendimento é indicado;',
      'Insights para empresas e famílias que buscam segurança médica.',
    ],
  },
  {
    heading: 'O que é o Atendimento Pré-Hospitalar (APH)?',
    paragraph:
      'O atendimento pré-hospitalar, também chamado de APH, é o conjunto de ações realizadas antes da chegada do paciente ao hospital. Ele pode ocorrer no local da ocorrência (residência, empresa, via pública, evento, academia, condomínio) e durante o transporte até uma unidade de saúde. O APH é dividido em duas categorias:',
  },
  {
    subheading: 'APH de Suporte Básico de Vida (SBV)',
    paragraph:
      'Realizado por profissionais treinados (como socorristas e técnicos de enfermagem) em ambulâncias de Suporte Básico (tipo B). Inclui:',
    list: [
      'Avaliação inicial;',
      'Controle de hemorragias;',
      'Imobilizações;',
      'Administração de oxigênio;',
      'Monitoramento de sinais vitais;',
      'Transporte seguro.',
    ],
  },
  {
    subheading: 'APH de Suporte Avançado de Vida (SAV)',
    paragraph:
      'Executado por equipes formadas por médicos e enfermeiros, em ambulâncias de Suporte Avançado (tipo D). Permite:',
    list: [
      'Intubação orotraqueal;',
      'Administração de medicamentos controlados;',
      'Suporte ventilatório avançado;',
      'Monitorização cardíaca completa;',
      'Intervenções para arritmias e parada cardiorrespiratória.',
    ],
  },
  {
    heading: 'Por que o APH é tão importante?',
    paragraph: 'O atendimento pré-hospitalar é decisivo porque:',
    list: [
      'Reduz o tempo até o primeiro cuidado, fundamental nos traumas, AVCs e infartos;',
      'Estabiliza o paciente antes do hospital, aumentando as chances de recuperação;',
      'Direciona para a unidade certa, evitando atrasos no tratamento adequado;',
      'Previne agravamentos do quadro de saúde durante o transporte.',
    ],
  },
  {
    paragraph:
      'Para empresas, condomínios, clínicas e academias, contar com cobertura de APH significa resposta rápida, maior segurança e proteção jurídica.',
  },
  {
    heading: 'O que é CTI (Centro de Terapia Intensiva)?',
    paragraph:
      'O CTI é um setor hospitalar dedicado ao tratamento de pacientes graves que necessitam de monitoramento contínuo, porém com enfoque especial em estabilização prolongada e intervenções complexas. Em alguns estados brasileiros, o termo CTI é mais usado que UTI, embora ambos representem unidades de terapia intensiva. No entanto, muitos hospitais fazem distinções internas:',
  },
  {
    subheading: 'Características gerais do CTI',
    list: [
      'Monitorização multiparamétrica 24h;',
      'Equipe médica intensivista em regime de plantão;',
      'Suporte avançado de ventilação mecânica;',
      'Tratamento para doenças agudas graves (sepse, insuficiência respiratória, acidentes vasculares);',
      'Uso de tecnologias de ponta (hemodiálise contínua, bombas de infusão, marcapasso transcutâneo);',
      'Espaço estruturado para intervenções rápidas sem deslocamento do paciente.',
    ],
  },
  {
    subheading: 'Quando o paciente vai para o CTI?',
    paragraph: 'O CTI recebe pacientes que:',
    list: [
      'Estão clinicamente instáveis;',
      'Precisam de suporte avançado contínuo;',
      'Estão na fase crítica de uma doença;',
      'Necessitam ser monitorados de forma intensiva após cirurgias de grande porte.',
    ],
  },
  {
    heading: 'O que é UTI (Unidade de Terapia Intensiva)?',
    paragraph:
      'A UTI é a unidade destinada ao atendimento de pacientes em estado crítico, semelhante ao CTI, mas costuma ter organização e protocolos específicos. Em muitos hospitais, a UTI apresenta categorias de atendimento:',
  },
  {
    subheading: 'UTI Geral',
    paragraph: 'Para pacientes adultos com quadros graves, como:',
    list: ['Infarto agudo;', 'Pneumonia grave;', 'Traumas múltiplos;', 'Complicações pós-cirúrgicas.'],
  },
  {
    subheading: 'UTI Especializada',
    paragraph: 'Alguns exemplos:',
    list: [
      'UTI Cardiológica;',
      'UTI Neurológica;',
      'UTI Neonatal;',
      'UTI Pediátrica;',
      'UTI Queimados.',
    ],
  },
  {
    paragraph: 'A estrutura da UTI inclui:',
    list: [
      'Equipamentos de suporte avançado;',
      'Monitorização à beira-leito 24 horas;',
      'Protocolos de segurança do paciente;',
      'Equipe multidisciplinar (médicos, enfermeiros, fisioterapeutas, nutricionistas, psicólogos).',
    ],
  },
  {
    paragraph:
      'Em resumo, tanto CTI quanto UTI são ambientes para tratamento intensivo. Em muitos hospitais, são praticamente sinônimos; em outros, o CTI pode ser uma subdivisão da UTI ou uma denominação usada para setores específicos.',
  },
  {
    heading: 'Diferença entre Atendimento Pré-Hospitalar, CTI e UTI',
    paragraph:
      'A distinção principal está no momento do cuidado, no local e no nível de suporte oferecido.',
  },
  {
    subheading: 'Atendimento Pré-Hospitalar (APH)',
    list: [
      'Ocorre antes do hospital.',
      'Tem como missão estabilizar e transportar o paciente.',
      'Trabalha em ambientes móveis (ambulâncias) ou na cena da ocorrência.',
      'Foca na resposta rápida e nos primeiros cuidados.',
    ],
  },
  {
    subheading: 'CTI',
    list: [
      'Está dentro do hospital.',
      'Recebe pacientes críticos em fase aguda, muitas vezes imediatamente após procedimentos complexos.',
      'Trabalha com suporte intensivo contínuo, podendo envolver tecnologias mais específicas dependendo do hospital.',
    ],
  },
  {
    subheading: 'UTI',
    list: [
      'Também hospitalar e com função semelhante ao CTI.',
      'Em muitos lugares, é o termo oficial para unidades de terapia intensiva.',
      'Muitas vezes é dividida por especialidades e protocolos.',
    ],
  },
  {
    heading: 'Quando cada serviço é indicado?',
    subheading: 'Atendimento Pré-Hospitalar — indicado para:',
    list: [
      'Acidentes domésticos, automobilísticos ou ocupacionais;',
      'Crises súbitas (convulsão, parada cardíaca, desmaio);',
      'Sintomas de infarto ou AVC;',
      'Quedas e fraturas;',
      'Transportes inter-hospitalares.',
    ],
  },
  {
    subheading: 'CTI — usado quando:',
    list: [
      'O paciente precisa de vigilância avançada e intervenções imediatas;',
      'Há risco iminente de falência de órgãos;',
      'Cirurgias de grande porte que exijam acompanhamento intensivo.',
    ],
  },
  {
    subheading: 'UTI — recomendada para:',
    list: [
      'Pacientes críticos em recuperação;',
      'Casos de infecções graves;',
      'Suporte ventilatório prolongado;',
      'Doenças graves com necessidade de observação contínua.',
    ],
  },
  {
    heading: 'A importância de ter acesso rápido ao APH',
    paragraph:
      'Em emergências, cada minuto importa. Ambientes protegidos por serviços de APH, como os oferecidos por empresas especializadas como a Medicar, reduzem drasticamente possíveis complicações.',
  },
  {
    paragraph:
      'Rapidez, experiência da equipe e equipamentos adequados são determinantes para a sobrevivência do paciente antes mesmo da chegada à UTI ou CTI.',
  },
  {
    heading: 'Conclusão',
    paragraph:
      'Embora muitas vezes mencionados juntos, atendimento pré-hospitalar, CTI e UTI representam etapas distintas e complementares no cuidado ao paciente crítico. O APH cuida das primeiras ações e garante um transporte seguro; o CTI atua na fase aguda e de estabilização; e a UTI acompanha o paciente até sua recuperação intensiva.',
  },
  {
    paragraph:
      'Saber reconhecer essas diferenças ajuda a tomar decisões mais rápidas e assertivas em situações extremas — seja em casa, no trabalho ou em espaços públicos.',
  },
]

export const posts: readonly Post[] = [
  {
    slug: 'diferenca-entre-atendimento-pre-hospitalar-cti-e-uti',
    title:
      'Diferença entre Atendimento Pré-Hospitalar, CTI e UTI: entenda cada etapa do cuidado crítico',
    excerpt:
      'Entender a diferença entre atendimento pré-hospitalar, CTI e UTI é essencial para saber qual tipo de suporte buscar em situações críticas. Embora todos estejam relacionados…',
    category: 'Saúde',
    content: aphCtiUtiContent,
    ctaText:
      'Precisa de orientação sobre serviços de APH, ambulâncias ou soluções de saúde para empresas e condomínios? Preencha o formulário e fale com nossos especialistas.',
  },
  {
    slug: 'como-funciona-o-atendimento-pre-hospitalar',
    title: 'Como funciona o atendimento pré-hospitalar',
    excerpt:
      'O atendimento pré-hospitalar de urgência e emergência (APH) é a porta de entrada para o socorro qualificado: ele começa antes…',
    category: 'Saúde',
    body: PENDING_NOTICE /* corpo PENDENTE — não inventar conteúdo técnico */,
  },
  {
    slug: 'nr-1-e-riscos-psicossociais-guia-completo-para-empresas-em-2025',
    title: 'NR-1 e riscos psicossociais: Guia completo para empresas em 2025',
    excerpt:
      'Saiba como a NR-1 trata os riscos psicossociais no trabalho e descubra soluções práticas para proteger sua empresa e seus…',
    category: 'NR-1',
    body: PENDING_NOTICE /* corpo PENDENTE — não inventar conteúdo normativo */,
  },
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
    slug: 'cuidados-com-idosos-em-casa',
    title: 'Cuidados com idosos em casa',
    excerpt: 'Boas práticas para a segurança e o bem-estar de idosos no ambiente doméstico.',
    category: 'Saúde',
    body: MIGRATION_NOTICE,
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
