/**
 * Depoimentos — ATENÇÃO (regra obrigatória):
 * Os textos abaixo são PLACEHOLDERS ilustrativos, atribuídos apenas a
 * cargo + setor genérico. NUNCA atribuir frase inventada a empresa nomeada real.
 * Enquanto `approved === false`, o card exibe o selo
 * "Depoimento ilustrativo — em aprovação".
 * Quando os depoimentos reais e autorizados chegarem, basta substituir o texto,
 * preencher `company` (opcional) e marcar `approved: true` — o selo some.
 */

export interface Testimonial {
  serviceSlug: string
  quote: string
  role: string
  sector: string
  company?: string
  approved: boolean
}

export const testimonials: readonly Testimonial[] = [
  {
    serviceSlug: 'urgencia-e-emergencia-24h',
    quote:
      'Tivemos uma parada cardíaca no turno da noite e a ambulância chegou antes do que o protocolo interno previa. A regulação médica por telefone orientou nossa brigada até a chegada da equipe. É o tipo de resposta que não se negocia.',
    role: 'Gerente de Facilities',
    sector: 'multinacional de tecnologia',
    approved: false,
  },
  {
    serviceSlug: 'area-protegida',
    quote:
      'Desde que contratamos a Área Protegida, todo mal-estar de cliente ou colaborador é resolvido aqui dentro, com discrição e rapidez. Os afastamentos por atestado caíram visivelmente no primeiro ano.',
    role: 'Diretor de Operações',
    sector: 'shopping center em São Paulo',
    approved: false,
  },
  {
    serviceSlug: 'coletivo-empresarial',
    quote:
      'O plano coletivo virou o benefício mais citado na nossa pesquisa interna. A análise de riscos que a Medicar fez da operação nos ajudou até a revisar processos de segurança do trabalho.',
    role: 'Coordenadora de RH',
    sector: 'indústria química de médio porte',
    approved: false,
  },
  {
    serviceSlug: 'telemedicina',
    quote:
      'A adesão à telemedicina superou 60% da equipe nos três primeiros meses. Consultas resolvidas em minutos, sem deslocamento — o impacto no absenteísmo foi imediato.',
    role: 'Head de Benefícios',
    sector: 'rede de varejo nacional',
    approved: false,
  },
  {
    serviceSlug: 'terceirizacao-de-ambulatorio',
    quote:
      'Entregamos o espaço e a Medicar cuidou de todo o resto: equipe, materiais, medicamentos e cobertura de férias. Nunca ficamos um dia sem enfermagem no posto.',
    role: 'Síndica profissional',
    sector: 'complexo de torres corporativas',
    approved: false,
  },
  {
    serviceSlug: 'locacao-de-ambulancia',
    quote:
      'Migrar da frota própria para a locação reduziu nosso custo operacional em cerca de um terço e eliminou a dor de cabeça de manutenção e documentação. O carro reserva já nos salvou em auditoria.',
    role: 'Gerente de Suprimentos',
    sector: 'rede hospitalar privada',
    approved: false,
  },
  {
    serviceSlug: 'remocao-terrestre',
    quote:
      'Fazemos dezenas de transferências inter-hospitalares por mês e o rastreamento da Medicar nos dá visibilidade de ponta a ponta. As famílias dos pacientes elogiam o cuidado das equipes.',
    role: 'Coordenadora de Regulação',
    sector: 'operadora de saúde regional',
    approved: false,
  },
  {
    serviceSlug: 'transporte-aeromedico',
    quote:
      'Precisávamos transferir um paciente crítico entre capitais em poucas horas. A célula aeromédica da Medicar resolveu a logística completa, do leito ao leito. Impecável.',
    role: 'Diretor Médico',
    sector: 'hospital de alta complexidade',
    approved: false,
  },
]

export function getTestimonial(serviceSlug: string): Testimonial | undefined {
  return testimonials.find((t) => t.serviceSlug === serviceSlug)
}
