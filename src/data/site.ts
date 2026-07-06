/** Dados institucionais canônicos da Medicar. Fonte única — não duplicar em componentes. */

export const company = {
  name: 'Medicar',
  legalName: 'MEDICAR EMERGÊNCIAS MÉDICAS LTDA',
  cnpj: '68.322.411/0001-37',
  tagline: 'soluções em saúde',
  founded: 1993,
  headquarters: 'Av. Caramuru, 644 – República – Ribeirão Preto/SP – CEP 14030-000',
  technicalDirector: 'Dra. Sandra Saad – CRMSP 129877',
  siteUrl: 'https://medicar.com.br',
} as const

/**
 * Telefones canônicos. Texto exibido e href tel: derivam do MESMO dado —
 * o site antigo tinha inconsistência entre texto e link; não replicar.
 */
export const phones = {
  emergency: { label: 'Emergência 24h', display: '0800 941 5455', tel: 'tel:08009415455' },
  commercial: { label: 'Comercial', display: '0800 943 0550', tel: 'tel:08009430550' },
  clinic: { label: 'Clínica Medicar', display: '(16) 3512-4477', tel: 'tel:+551635124477' },
} as const

export const whatsapp = {
  general: {
    label: 'WhatsApp',
    display: '55 0800 943 0550',
    url: 'https://wa.me/5508009430550',
  },
  clinic: {
    label: 'WhatsApp Clínica',
    display: '55 0800 940 0470',
    url: 'https://wa.me/5508009400470',
  },
} as const

export const social = {
  instagram: 'https://www.instagram.com/medicarsolucoesemsaude',
  youtube: 'https://www.youtube.com/@medicarsolucoesemsaude184',
  facebook: 'https://www.facebook.com/medicarsolucoesemsaude',
  linkedin: 'https://www.linkedin.com/company/28326024',
} as const

export const externalLinks = {
  clientPortal: 'https://portaldocliente.medicar.com.br',
  telemedicine: 'https://telemedicina.medicar.com.br',
  /* PLACEHOLDER: URL oficial de agendamento on-line da Clínica (Feegow/Docplanner) */
  clinicBooking: 'https://medicar.feegow.com/pre/agendamento' /* TODO: confirmar URL oficial */,
  petAppStore: 'https://apps.apple.com/br/app/id6740638062',
  petPlayStore:
    'https://play.google.com/store/apps/details?id=com.irisemergencia.tutorepet.medicar',
} as const

export const brandMessages = {
  hero: 'Nossa missão é salvar vidas',
  heroSub:
    'Soluções completas em saúde para você ou para a sua empresa. Atendimento de urgência e emergência 24 horas, em todo o Brasil.',
  movedByLife: 'Movidos pela vida',
  rescue: 'Socorro que vai até você',
  reach: 'Saúde ao seu alcance onde você estiver',
  bestOption: 'A melhor opção em saúde para você ou sua empresa',
} as const

/** Missão e Visão oficiais (copy do site anterior). */
export const missionVision = {
  mission:
    'Oferecer soluções em saúde com foco em diminuir a dor e salvar vidas por meio de condutas médicas humanizadas, ágeis, eficientes e seguras para os pacientes e equipes.',
  vision:
    'Ser reconhecida nacionalmente como padrão de excelência, oferecendo um conjunto de soluções em saúde, seja ele móvel, local e a distância, utilizando sempre as melhores ferramentas para cuidar das pessoas e salvar vidas.',
} as const

/** "Nosso Propósito" — texto oficial (Quem somos). Parágrafos na ordem. */
export const purposeParagraphs: readonly string[] = [
  'Salvamos vidas. Essa é a nossa essência, o motivo que move cada plantão, cada chamado, cada atendimento.',
  'Há mais de 30 anos, estamos ao lado de quem precisa de segurança e cuidado, levando suporte médico onde e quando for necessário.',
  'Mas o que fazemos vai muito além das ambulâncias. Nós cuidamos de histórias, famílias e empresas — protegendo o que há de mais valioso: a vida.',
  'Acreditamos que excelência não é um ato isolado, é um compromisso diário. Por isso, investimos em tecnologia, capacitação e estrutura, para garantir o mais alto padrão em atendimento para pessoas e empresas.',
  'Trabalhamos com empatia, responsabilidade e propósito.',
  'Cada colaborador é parte essencial dessa missão. Porque cuidar de vidas é um trabalho coletivo — feito com técnica, coragem e coração.',
  'Somos a Medicar. E nossa missão é salvar vidas!',
]

export const movedByLife = [
  {
    title: 'Somos',
    text: 'Uma empresa de soluções em saúde que está em todos os lugares onde nossos clientes estão: em casa, no trabalho ou no consultório.',
  },
  {
    title: 'Cuidamos',
    text: 'de pessoas e das empresas onde elas trabalham para que o cuidado da Medicar esteja em todos os lugares.',
  },
  {
    title: 'Salvamos',
    text: 'vidas, famílias e sonhos, pois quando salvamos uma vida, salvamos também uma história.',
  },
] as const

export const values: readonly string[] = [
  'Agilidade e lealdade',
  'Conduta ética',
  'Confidencialidade da informação',
  'Excelência no atendimento',
  'Foco na saúde',
  'Humanização do atendimento',
  'Responsabilidade social',
  'Resultados financeiros transparentes',
  'Tecnologia em favor da saúde',
  'Valorização dos colaboradores',
]
