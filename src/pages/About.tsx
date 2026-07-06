import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { StatsBand } from '../components/StatsBand'
import { AsteriskMark } from '../components/AsteriskMark'
import { BrazilMap } from '../components/BrazilMap'
import { LogoStrip } from '../components/LogoStrip'
import { CtaBand } from '../components/CtaBand'
import { company, values, missionVision, purposeParagraphs } from '../data/site'
import { timeline } from '../data/timeline'
import { bases } from '../data/bases'
import { photos } from '../assets/photos'

/*
 * Pilares sugeridos para "Nossos Diferenciais" (no site anterior o bloco era
 * placeholder). PENDENTE APROVAÇÃO MEDICAR — baseados nos pilares reais.
 */
const differentials = [
  {
    title: 'Central de Regulação 24h',
    text: 'Referência nacional em regulação médica, classificando gravidade e definindo o recurso certo.',
  },
  {
    title: 'Frota própria',
    text: 'Mais de 700 ambulâncias, de UTIs móveis a suporte básico, prontas em todo o Brasil.',
  },
  {
    title: 'Software próprio de gestão',
    text: 'Monitoramento em tempo real, rota e previsão de chegada da ambulância.',
  },
  {
    title: 'Equipe própria',
    text: 'Profissionais com vínculo direto Medicar, sem subcontratação.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="Quem somos | Medicar — Soluções em Saúde"
        description={`Fundada em ${company.founded} em Ribeirão Preto, a Medicar é referência nacional em emergências médicas: +700 ambulâncias, +600 médicos e +4,5 milhões de vidas protegidas.`}
      />

      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
              Quem somos
            </p>
            <h1 className="mt-3 text-heading-sm text-ink md:text-heading">A Medicar</h1>
            <p className="mt-5 text-body-lg text-ink-soft">
              Investimos em tecnologia de ponta e especialização das equipes para que nossos
              clientes tenham o mais moderno e completo atendimento.
            </p>
          </div>
          <Reveal className="hidden lg:block">
            <div className="relative flex items-end justify-center overflow-hidden rounded-card bg-gradient-to-br from-canvas to-red-wash">
              <img
                src={photos.team}
                alt="Equipe Medicar: profissionais de saúde e resgate lado a lado"
                className="h-[360px] w-auto object-contain object-bottom drop-shadow-[0_16px_32px_rgba(27,28,30,0.14)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bloco "A Medicar" — história */}
      <section className="mx-auto max-w-3xl px-4 py-section md:px-6">
        <Reveal>
          <p className="text-body text-ink-soft">
            Nascemos em 1993, em Ribeirão Preto (SP), como uma pequena empresa de serviços de
            emergências médicas, com um propósito claro e inabalável: salvar vidas. Com o passar
            dos anos, evoluímos para nos tornar uma das maiores e mais respeitadas empresas de
            soluções em saúde do Brasil.
          </p>
          <p className="mt-4 text-body text-ink-soft">
            Nossa trajetória é marcada pela expansão constante e pelo compromisso com a inovação.
            Cada passo foi pensado para estar mais perto de quem precisa. Hoje, cada nova unidade e
            cada serviço inovador reafirmam a missão que nos move desde o primeiro dia.
          </p>
        </Reveal>
      </section>

      {/* Grandes números — faixa vermelha */}
      <StatsBand />

      {/* Nosso Propósito — faixa vermelha */}
      <section className="relative overflow-hidden bg-medicar-red">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <AsteriskMark variant="white" size={420} className="absolute -right-28 -top-28 rotate-12 opacity-[0.10]" />
          <AsteriskMark variant="white" size={280} className="absolute -bottom-20 -left-16 opacity-[0.10]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 py-section md:px-6">
          <p className="text-caption font-medium uppercase tracking-[0.08em] text-white/75">
            Nosso propósito
          </p>
          <div className="mt-6 space-y-4">
            {purposeParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p
                  className={
                    i === purposeParagraphs.length - 1
                      ? 'text-subheading text-white'
                      : 'text-body-lg text-white/90'
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-card border border-line bg-canvas p-8">
              <AsteriskMark size={22} />
              <h2 className="mt-4 text-subheading text-ink">Missão</h2>
              <p className="mt-3 text-body text-ink-soft">{missionVision.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-card border border-line bg-canvas p-8">
              <AsteriskMark size={22} />
              <h2 className="mt-4 text-subheading text-ink">Visão</h2>
              <p className="mt-3 text-body text-ink-soft">{missionVision.vision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-section md:px-6">
          <SectionHeading
            eyebrow="Nossa história"
            title="Uma linha do tempo em expansão"
            lead="De uma base em Ribeirão Preto à presença nas principais regiões do país."
          />
          <ol className="mt-12 border-l border-line-strong">
            {timeline.map((entry, i) => (
              <Reveal key={entry.year} delay={i * 0.03}>
                <li className="relative pb-8 pl-8 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-medicar-red"
                  />
                  <p className="text-body-lg text-ink">{entry.year}</p>
                  <p className="mt-1 text-body-sm text-ink-soft">{entry.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Nossos Diferenciais — PENDENTE APROVAÇÃO (pilares sugeridos) */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <SectionHeading eyebrow="Nossos diferenciais" title="O que nos torna referência" />
        <p className="mt-3 inline-block rounded-badge bg-red-wash px-2 py-1 text-[11px] text-medicar-red-deep">
          Bloco em aprovação — pilares sugeridos
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={(i % 4) * 0.05}>
              <div className="h-full rounded-card border border-line bg-canvas p-6">
                <AsteriskMark size={20} />
                <h3 className="mt-3 text-body text-ink">{d.title}</h3>
                <p className="mt-1.5 text-body-sm text-ink-soft">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-section md:px-6">
          <SectionHeading eyebrow="Nossos valores" title="O que nos guia todos os dias" />
          <ul className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v} delay={(i % 2) * 0.04}>
                <li className="flex items-center gap-3 border-b border-line pb-4">
                  <AsteriskMark size={16} />
                  <span className="text-body-sm text-ink-soft">{v}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Presentes em todo o Brasil */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Medicar pelo Brasil"
              title="Presentes em todo o Brasil, prontos para atender"
            />
            <p className="mt-5 text-body text-ink-soft">
              Estamos presentes nas principais capitais e regiões metropolitanas do país —
              Ribeirão Preto, Campinas, Grande São Paulo, Baixada Santista, Rio de Janeiro, Belo
              Horizonte, Brasília e Goiânia — e uma rede com mais de 350 parceiros homologados
              espalhados pelo Brasil.
            </p>
          </div>
          <Reveal className="flex justify-center">
            <BrazilMap />
          </Reveal>
        </div>

        <div className="mt-16">
          <h2 className="text-body-lg text-ink">Nossas bases</h2>
          <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {bases.map((b) => (
              <div key={`${b.city}-${b.address}`} className="border-t border-line pt-4">
                <dt className="text-body-sm font-medium text-ink">{b.city}</dt>
                <dd className="mt-1 text-caption text-ink-muted">{b.address}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-caption text-ink-muted">
            {company.legalName} · CNPJ {company.cnpj} · Responsável técnica:{' '}
            {company.technicalDirector}
          </p>
        </div>
      </section>

      {/* Trabalhe com a gente */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-section md:px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-card border border-line bg-canvas p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <h2 className="text-heading-sm text-ink">Trabalhe com a gente</h2>
              <p className="mt-3 text-body-sm text-ink-soft">
                Estamos sempre em busca de profissionais qualificados e comprometidos. Confira
                nossas oportunidades e venha fazer parte da Medicar.
              </p>
            </div>
            {/* TODO: URL oficial do ATS (Senior) de vagas da Medicar */}
            <ButtonLink to="https://medicar.senior.com.br" variant="primary">
              Ver oportunidades
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-section">
        <LogoStrip />
      </section>

      <CtaBand />
    </>
  )
}
