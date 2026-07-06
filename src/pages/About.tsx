import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { StatsBand } from '../components/StatsBand'
import { AsteriskMark } from '../components/AsteriskMark'
import { BrazilMap } from '../components/BrazilMap'
import { LogoStrip } from '../components/LogoStrip'
import { CtaBand } from '../components/CtaBand'
import { company, movedByLife, values, brandMessages } from '../data/site'
import { timeline } from '../data/timeline'
import { bases, coverageAreas, coverageNote } from '../data/bases'
import { photos } from '../assets/photos'

export default function About() {
  return (
    <>
      <Seo
        title="Sobre nós | Medicar — Soluções em Saúde"
        description={`Fundada em ${company.founded} em Ribeirão Preto, a Medicar é referência nacional em emergências médicas: +700 ambulâncias, +600 médicos e +4,5 milhões de vidas protegidas.`}
      />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
              Sobre nós
            </p>
            <h1 className="mt-3 text-heading-sm font-semi text-ink md:text-heading">
              Mais de 30 anos salvando vidas pelo Brasil
            </h1>
            <p className="mt-5 text-body-lg text-ink-soft">
              Fundada em {company.founded} em Ribeirão Preto, a Medicar nasceu para levar socorro
              de qualidade a quem precisa — e cresceu até se tornar referência nacional em
              soluções de saúde para pessoas e empresas.
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

      {/* Números — 5 grandes números com contexto */}
      <section aria-label="Grandes números" className="mx-auto max-w-page px-4 py-section md:px-6">
        <SectionHeading
          eyebrow="Grandes números"
          title="A escala de quem cuida do Brasil"
        />
        <div className="mt-10">
          <StatsBand />
        </div>
      </section>

      {/* Movidos pela vida — faixa de missão (vermelho full-bleed) */}
      <section className="relative overflow-hidden bg-medicar-red">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-white/12">
          <AsteriskMark variant="white" size={420} className="absolute -right-28 -top-28 rotate-12 opacity-[0.13]" />
        </div>
        <div className="relative mx-auto max-w-page px-4 py-section md:px-6">
          <SectionHeading eyebrow="Nosso propósito" title={brandMessages.movedByLife} onRed />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {movedByLife.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="border-t border-white/30 pt-5">
                  <h3 className="text-subheading font-medium text-white">{item.title}</h3>
                  <p className="mt-3 text-body-sm text-white/85">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
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
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-medicar-red"
                />
                <p className="text-body-lg font-semi text-ink">{entry.year}</p>
                <p className="mt-1 text-body-sm text-ink-soft">{entry.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
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

      {/* Cobertura + bases */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Medicar pelo Brasil"
              title="Bases próprias e rede nacional"
              lead="Atendimento com bases próprias nas regiões abaixo e abrangência nacional pela rede homologada."
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {coverageAreas.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-line-strong bg-canvas px-3 py-1 text-caption text-ink-soft"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-body-sm text-ink-soft">{coverageNote}</p>
          </div>
          <Reveal className="flex justify-center">
            <BrazilMap />
          </Reveal>
        </div>

        <div className="mt-16">
          <h2 className="text-body-lg font-medium text-ink">Nossas bases</h2>
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

      <section className="border-t border-line py-section">
        <LogoStrip />
      </section>

      <CtaBand />
    </>
  )
}
