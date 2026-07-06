/** Soluções B2B — conteúdo canônico das 8 páginas de serviço. */

export interface ServiceBenefit {
  title: string
  text: string
}

export interface ServiceDetailBlock {
  title: string
  text?: string
  items?: readonly ServiceBenefit[]
}

export interface ServiceStep {
  title: string
  text: string
}

export interface Service {
  slug: string
  name: string
  /** Título curto para cards e menus */
  cardTitle: string
  /** Resumo de uma linha para cards */
  summary: string
  headline: string
  intro: string
  benefits: readonly ServiceBenefit[]
  detail: ServiceDetailBlock
  /** Fluxo em etapas (quando aplicável) */
  steps?: readonly ServiceStep[]
  stepsTitle?: string
  /** Frase de assinatura da página */
  signature?: string
  /** Copy rascunhada, pendente de aprovação da Medicar (exibe aviso) */
  pendingApproval?: boolean
}

/** Fluxo de acionamento da Central 24h — usado na Home e na página de urgência. */
export const dispatchFlow: readonly ServiceStep[] = [
  {
    title: 'ARM',
    text: 'Atendimento inicial: validação cadastral e acolhimento de quem liga, com registro imediato da ocorrência.',
  },
  {
    title: 'Médico regulador',
    text: 'Avaliação clínica do caso, classificação de gravidade e definição do recurso adequado.',
  },
  {
    title: 'Controlador de tráfego',
    text: 'Logística viária em tempo real e despacho do recurso: USA, SIV ou USB, conforme a regulação.',
  },
  {
    title: 'Envio do recurso',
    text: 'Ambulância a caminho, com monitoramento em tempo real, rota e previsão de chegada.',
  },
]

export const services: readonly Service[] = [
  {
    slug: 'urgencia-e-emergencia-24h',
    name: 'Atendimento de urgência e emergência 24h',
    cardTitle: 'Urgência e emergência 24h',
    summary:
      'Referência há mais de 30 anos: agilidade, expertise médica e tecnologia a serviço da vida.',
    headline: 'Urgência e emergência 24h, em todo o Brasil',
    intro:
      'Referência em atendimento pré-hospitalar há mais de 30 anos, a Medicar combina agilidade, expertise médica e tecnologia para socorrer quem precisa, onde estiver, a qualquer hora.',
    benefits: [
      {
        title: 'Central de Atendimento 24h',
        text: 'Gestão de operação ininterrupta, com equipe dedicada ao acionamento, regulação e acompanhamento de cada ocorrência.',
      },
      {
        title: 'Referência Nacional em Regulação Médica',
        text: 'Classificação por gravidade e regulação de vagas nas redes SUS e particular, conduzidas por médicos reguladores.',
      },
      {
        title: 'Controladores de Tráfego',
        text: 'Profissionais dedicados à logística viária, garantindo o recurso certo no menor tempo possível.',
      },
      {
        title: 'Software próprio de gestão',
        text: 'Monitoramento em tempo real, rota e previsão de chegada (ETA) da ambulância, em interface responsiva.',
      },
    ],
    detail: {
      title: 'Como funciona o acionamento',
      text: 'Da ligação ao socorro, um fluxo enxuto de 4 etapas garante a resposta adequada a cada caso.',
    },
    steps: dispatchFlow,
    stepsTitle: 'Fluxo de acionamento em 4 etapas',
    signature: 'Socorro que vai até você.',
  },
  {
    slug: 'area-protegida',
    name: 'Área Protegida Medicar',
    cardTitle: 'Área Protegida',
    summary: 'Atendimento emergencial 24h para empresas, clientes e visitantes.',
    headline: 'Emergências atendidas dentro do seu estabelecimento',
    intro:
      'Atendimento emergencial no local com UTIs móveis, 24 horas por dia, para funcionários, clientes e visitantes. Cobertura para mal-estar, desmaios, quadros cardiológicos e respiratórios, traumas, quedas e atropelamentos.',
    benefits: [
      {
        title: 'Cobertura 24h',
        text: 'UTIs móveis prontas para atender qualquer emergência no seu endereço, a qualquer hora.',
      },
      {
        title: 'Segurança no perímetro',
        text: 'Todos que circulam pelo estabelecimento — equipe, clientes e visitantes — ficam protegidos.',
      },
      {
        title: 'Redução de riscos jurídicos',
        text: 'Resposta médica imediata reduz riscos trabalhistas, processos e afastamentos por atestado.',
      },
      {
        title: 'Atendimento no próprio local',
        text: 'A maioria das ocorrências é resolvida no próprio estabelecimento, sem necessidade de remoção.',
      },
      {
        title: 'Marketing positivo',
        text: 'Cuidar de pessoas dentro de casa fortalece a imagem da sua marca com clientes e colaboradores.',
      },
    ],
    detail: {
      title: 'O que a Área Protegida cobre',
      items: [
        { title: 'Mal-estar e desmaios', text: 'Acolhimento e atendimento imediato no local.' },
        {
          title: 'Quadros cardiológicos e respiratórios',
          text: 'Suporte avançado com UTI móvel e equipe médica.',
        },
        {
          title: 'Traumas, quedas e atropelamentos',
          text: 'Atendimento pré-hospitalar completo no perímetro do estabelecimento.',
        },
      ],
    },
  },
  {
    slug: 'coletivo-empresarial',
    name: 'Coletivo Empresarial',
    cardTitle: 'Coletivo Empresarial',
    summary: 'Planos personalizados, com atendimento emergencial e telemedicina.',
    headline: 'Um plano coletivo desenhado para o risco do seu negócio',
    intro:
      'Analisamos os riscos da sua operação — incêndios, quedas, intoxicações químicas — e desenhamos um plano coletivo personalizado para proteger sua equipe.',
    benefits: [
      {
        title: 'Emergencial 24h no local',
        text: 'Atendimento de urgência e emergência no endereço da empresa, a qualquer hora.',
      },
      {
        title: 'Telemedicina 24h',
        text: 'Pronto atendimento on-line para os colaboradores, sem limite de uso com generalista.',
      },
      {
        title: 'Descontos em exames e medicamentos',
        text: 'Economia real para o colaborador na rede de parceiros Medicar.',
      },
      {
        title: 'Orientação médica por telefone',
        text: 'Dúvidas de saúde resolvidas por telefone, 24 horas por dia.',
      },
    ],
    detail: {
      title: 'Vantagens que vão além',
      items: [
        {
          title: 'Extensível a dependentes',
          text: 'O plano pode incluir os dependentes dos colaboradores.',
        },
        {
          title: 'Amplia os benefícios de RH',
          text: 'Um diferencial concreto no pacote de benefícios da empresa.',
        },
        {
          title: 'Economia mensurável',
          text: 'Cerca de 4% de economia em exames e consultas e 7% em despesas de UTI, além da redução de atestados.',
        },
        {
          title: 'Proteção no Trânsito para Terceiros',
          text: 'Associado condutor e terceiros envolvidos atendidos sem custo adicional, via Central 24h.',
        },
      ],
    },
  },
  {
    slug: 'telemedicina',
    name: 'Telemedicina Medicar',
    cardTitle: 'Telemedicina',
    summary: 'Consultas médicas on-line, 24h por dia, 7 dias na semana.',
    headline: 'Pronto atendimento on-line, 24 horas, 7 dias por semana',
    intro:
      'Atendimento por videochamada a qualquer hora: sem limite de uso com clínico generalista e especialistas com agendamento. 100% dos atendimentos são realizados por médicos da Medicar.',
    benefits: [
      {
        title: 'Sem limite com generalista',
        text: 'Consultas com clínico geral por videochamada, quantas vezes forem necessárias.',
      },
      {
        title: 'Especialistas com agendamento',
        text: 'Acesso a médicos especialistas com horário marcado, pelo mesmo app.',
      },
      {
        title: '100% médicos Medicar',
        text: 'Todos os atendimentos são conduzidos por médicos do corpo clínico da Medicar.',
      },
      {
        title: 'Extensível a dependentes',
        text: 'O benefício pode ser estendido à família do colaborador.',
      },
      {
        title: 'Menos atestados e absenteísmo',
        text: 'Resolução rápida reduz afastamentos e faltas ao trabalho.',
      },
      {
        title: 'Orientação Médica por Telefone (OMT)',
        text: 'Serviço complementar de orientação por telefone, disponível 24h.',
      },
    ],
    detail: {
      title: 'Atendimento em 4 passos no app',
      text: 'Simples do download à consulta — pensado para qualquer perfil de usuário.',
    },
    steps: [
      { title: 'Baixe o app', text: 'Disponível para iOS e Android.' },
      { title: 'Faça login com CPF', text: 'Acesso rápido e seguro com seus dados.' },
      { title: 'Toque em "Solicite atendimento"', text: 'Um toque para entrar na fila de atendimento.' },
      { title: 'Fale com o médico', text: 'Videochamada com um médico da Medicar, na hora.' },
    ],
    stepsTitle: 'Fluxo do app em 4 passos',
  },
  {
    slug: 'terceirizacao-de-ambulatorio',
    name: 'Terceirização de Ambulatório',
    cardTitle: 'Terceirização de Ambulatório',
    summary: 'Estruturação e gestão de ambulatórios em empresas, shoppings e condomínios.',
    headline: 'Seu ambulatório, por conta da Medicar',
    intro:
      'Montamos e administramos ambulatórios e postos de enfermagem em shoppings, edifícios corporativos e condomínios — com profissionais de vínculo direto Medicar, sem subcontratação.',
    benefits: [
      {
        title: 'Vínculo direto, sem subcontratação',
        text: 'Todos os profissionais são contratados diretamente pela Medicar.',
      },
      {
        title: 'Estrutura completa',
        text: 'Montagem, administração, materiais, equipamentos e medicamentos por nossa conta.',
      },
      {
        title: 'Cobertura de faltas e férias',
        text: 'Substituições imediatas garantem operação sem interrupções.',
      },
      {
        title: 'Apoio da Central de Regulação',
        text: 'Retaguarda médica da Central 24h para casos que exigem regulação ou remoção.',
      },
      {
        title: 'Isenção de processos trabalhistas',
        text: 'A gestão de pessoas é integralmente da Medicar, blindando o contratante.',
      },
    ],
    detail: {
      title: 'Onde atuamos',
      items: [
        { title: 'Shoppings', text: 'Ambulatórios dimensionados para grande circulação de público.' },
        { title: 'Edifícios corporativos', text: 'Postos de enfermagem e ambulatórios para torres e campi.' },
        { title: 'Condomínios', text: 'Estrutura de primeiros atendimentos para moradores e funcionários.' },
      ],
    },
  },
  {
    slug: 'locacao-de-ambulancia',
    name: 'Locação de Ambulância',
    cardTitle: 'Locação de Ambulância',
    summary: 'Reduza custos com uma frota moderna e gestão completa.',
    headline: 'Por que comprar se você pode alugar?',
    intro:
      'Maior player nacional em número de ambulâncias, a Medicar oferece contratos flexíveis com economia de até 35% nos custos operacionais — e cuida de tudo: documentação, multas, seguros, manutenção completa, carros reserva e logística de peças.',
    benefits: [
      {
        title: 'Economia de até 35%',
        text: 'Redução direta nos custos operacionais em relação à frota própria.',
      },
      {
        title: 'Contratos flexíveis',
        text: 'Prazos e escopos ajustados à necessidade da sua operação.',
      },
      {
        title: 'Personalização visual',
        text: 'Ambulâncias caracterizadas com a identidade da sua marca.',
      },
      {
        title: 'Gestão completa da frota',
        text: 'Documentação, multas, seguros, manutenção, carros reserva e logística de peças por nossa conta.',
      },
    ],
    detail: {
      title: 'Tipos e modelos',
      items: [
        {
          title: 'Tipo A — Transporte simples',
          text: 'Remoções eletivas de pacientes sem risco.',
        },
        {
          title: 'Tipo B — Suporte básico',
          text: 'Técnico de enfermagem + condutor socorrista, desfibrilador e oxigenoterapia.',
        },
        {
          title: 'Tipo D — Suporte avançado',
          text: 'UTI sobre rodas: médico + enfermeiro, ventilador mecânico e monitor multiparâmetros.',
        },
        {
          title: 'Modelos disponíveis',
          text: 'Tradicional, 4x4 e furgão — conforme o terreno e a operação.',
        },
      ],
    },
  },
  {
    slug: 'remocao-terrestre',
    name: 'Remoção Terrestre',
    cardTitle: 'Remoção Terrestre',
    summary:
      'Altas, transferências inter-hospitalares e transportes programados com know-how de APH.',
    headline: 'Remoções programadas com o cuidado de quem faz APH',
    intro:
      'Todo o know-how do atendimento pré-hospitalar aplicado a remoções: altas hospitalares, transferências inter-hospitalares, exames, consultas e terapias programadas.',
    benefits: [
      {
        title: 'Solicitação simples',
        text: 'Agendamento por e-mail ou telefone, com confirmação rápida.',
      },
      {
        title: 'Rastreamento completo',
        text: 'Acompanhamento da remoção do início ao fim.',
      },
      {
        title: 'Equipes in loco ou remoto',
        text: 'Modelos de operação ajustados ao volume e à rotina do contratante.',
      },
      {
        title: 'Know-how de APH',
        text: 'Equipes treinadas em atendimento pré-hospitalar conduzem cada transporte.',
      },
    ],
    detail: {
      title: 'O que transportamos',
      items: [
        { title: 'Altas hospitalares', text: 'Do hospital para casa, com conforto e segurança.' },
        {
          title: 'Transferências inter-hospitalares',
          text: 'Entre unidades de saúde, com o suporte adequado ao quadro do paciente.',
        },
        {
          title: 'Exames, consultas e terapias',
          text: 'Transportes programados recorrentes ou pontuais.',
        },
      ],
    },
    signature: 'Mais que transporte: cuidado, controle e confiança a cada remoção.',
  },
  {
    slug: 'transporte-aeromedico',
    name: 'Transporte Aeromédico',
    cardTitle: 'Transporte Aeromédico',
    summary: 'UTI aérea completa, com equipe própria 24h em célula dedicada.',
    headline: 'UTI aérea completa, para qualquer distância',
    intro:
      'Transporte aeromédico com UTI aérea completa, equipe própria disponível 24h em célula dedicada e rede de parcerias homologadas em todo o país.',
    benefits: [
      {
        title: 'UTI aérea completa',
        text: 'Aeronaves equipadas para suporte avançado de vida durante todo o voo.',
      },
      {
        title: 'Equipe própria 24h',
        text: 'Célula dedicada ao aeromédico, pronta para decolar a qualquer hora.',
      },
      {
        title: 'Parcerias homologadas',
        text: 'Rede nacional de parceiros homologados amplia o alcance da operação.',
      },
    ],
    detail: {
      title: 'Quando o aeromédico é a resposta',
      text: 'Longas distâncias, quadros críticos com janela de tempo estreita ou regiões de difícil acesso: o transporte aéreo garante que o paciente chegue ao recurso certo no tempo certo.',
    },
    signature: 'Em terra ou no ar, conte sempre com a Medicar.',
  },
  {
    // PENDENTE APROVAÇÃO MEDICAR — copy rascunhada de forma conservadora.
    // Não afirmar certificações; não citar prazos legais específicos.
    slug: 'nr-1',
    name: 'Gestão de Risco Psicossocial 360º',
    cardTitle: 'Gestão de Risco Psicossocial 360º',
    summary:
      'Programa de ações diagnósticas, preventivas e educativas para promover o bem-estar emocional e atender às normas da NR-1.',
    headline: 'Gestão de Risco Psicossocial 360º',
    intro:
      'A Medicar apoia a sua empresa na jornada de adequação à NR-1, conectando a atenção à saúde e à segurança dos colaboradores — inclusive os riscos psicossociais — ao seu Gerenciamento de Riscos Ocupacionais (GRO) e ao PGR.',
    benefits: [
      {
        title: 'Riscos psicossociais no radar',
        text: 'Apoio à atenção a fatores psicossociais do ambiente de trabalho, com telemedicina e orientação médica.',
      },
      {
        title: 'Integração ao GRO/PGR',
        text: 'Soluções que se conectam ao Gerenciamento de Riscos Ocupacionais e ao PGR da sua empresa.',
      },
      {
        title: 'Atenção à saúde no local',
        text: 'Área Protegida e ambulatórios levam resposta e cuidado para dentro da operação.',
      },
      {
        title: 'Cuidado contínuo',
        text: 'Telemedicina 24h e Orientação Médica por Telefone apoiam o acompanhamento dos colaboradores.',
      },
    ],
    detail: {
      title: 'Como a Medicar apoia a sua gestão',
      text: 'Combinamos Área Protegida, Telemedicina, OMT e ambulatórios para apoiar a sua gestão de riscos ocupacionais. A responsabilidade técnica pela adequação permanece com a empresa e seus profissionais de SST.',
    },
    pendingApproval: true,
  },
]

/**
 * Lar Protegido — serviço residencial (rota própria /solucoes/lar-protegido).
 * Fora do array `services` de empresa; usa o mesmo template.
 * PENDENTE APROVAÇÃO MEDICAR — copy conservadora, sem preço.
 */
export const larProtegido: Service = {
  slug: 'lar-protegido',
  name: 'Lar Protegido Medicar',
  cardTitle: 'Lar Protegido',
  summary:
    'A lógica da Área Protegida aplicada ao lar: emergência com UTI móvel 24h para a sua família.',
  headline: 'Proteção emergencial para a sua casa',
  intro:
    'Toda a experiência da Medicar em emergências, agora dentro de casa: atendimento de urgência e emergência por UTIs móveis, 24 horas por dia, para você e a sua família.',
  benefits: [
    {
      title: 'UTI móvel 24h no seu endereço',
      text: 'Atendimento emergencial em casa, a qualquer hora, com equipe preparada.',
    },
    {
      title: 'Cobertura para a família',
      text: 'Proteção pensada para todos os moradores da residência.',
    },
    {
      title: 'Central 24h com regulação médica',
      text: 'A mesma central que atende empresas, agora a serviço do seu lar.',
    },
    {
      title: 'Tranquilidade em casa',
      text: 'A segurança de saber que o socorro vai até você, onde você mora.',
    },
  ],
  detail: {
    title: 'Como funciona o Lar Protegido',
    text: 'Ao acionar a Central 24h, o médico regulador avalia o caso e envia o recurso adequado até a sua casa — do acolhimento por telefone ao atendimento no local.',
  },
  pendingApproval: true,
}

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
