import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { HeroVideo } from '../components/HeroVideo'
import { ButtonLink } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { Counter } from '../components/Counter'
import { SectionHeading } from '../components/SectionHeading'
import { AsteriskMark } from '../components/AsteriskMark'
import { BrazilMap } from '../components/BrazilMap'
import { LogoStrip } from '../components/LogoStrip'
import { TestimonialCard } from '../components/TestimonialCard'
import { CtaBand } from '../components/CtaBand'
import { brandMessages, movedByLife, phones } from '../data/site'
import { stats } from '../data/numbers'
import { services, dispatchFlow } from '../data/services'
import { coverageAreas, coverageNote } from '../data/bases'
import { testimonials } from '../data/testimonials'

const homeTestimonials = testimonials.filter((t) =>
  ['area-protegida', 'telemedicina'].includes(t.serviceSlug),
)

export default function Home() {
  return (
    <>
      <Seo
        title="Medicar — Soluções em Saúde | Emergências Médicas 24h"
        description={brandMessages.heroSub}
        withOrgSchema
      />

      {/* 1. Hero em vídeo */}
      <section className="relative flex min-h-[560px] items-center md:min-h-[640px]">
        <HeroVideo />
        <div className="relative mx-auto w-full max-w-page px-4 py-24 md:px-6">
          <div className="max-w-xl">
            <h1 className="text-heading font-medium text-white md:text-heading-lg">
              {brandMessages.hero}
            </h1>
            <p className="mt-5 text-body-lg text-white/90">{brandMessages.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/solucoes/empresa" variant="primary">
                Para sua empresa
              </ButtonLink>
              <ButtonLink to="/solucoes/para-voce" variant="ghostOnRed">
                Para você e sua família
              </ButtonLink>
            </div>
            <a
              href={phones.emergency.tel}
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-ink/40 px-4 py-2 text-body-sm font-medium text-white backdrop-blur hover:border-white/60"
            >
              <span
                aria-hidden="true"
                className="inline-block h-2 w-2 animate-pulse rounded-full bg-medicar-red"
              />
              {phones.emergency.label}: {phones.emergency.display}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Faixa de números */}
      <section aria-label="Grandes números da Medicar" className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-page px-4 py-16 md:px-6">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-7">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="flex flex-col gap-1">
                  <dt className="order-2 text-caption text-ink-muted">{s.label}</dt>
                  <dd className="order-1 text-heading-sm font-medium text-ink">
                    <Counter
                      value={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                    />
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 3. Duas jornadas */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <SectionHeading
          eyebrow="Por onde começar"
          title="Cuidado para cada momento"
          lead="Da proteção completa da sua equipe ao plano da sua família: escolha a jornada certa."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Link
              to="/solucoes/empresa"
              className="group flex h-full flex-col rounded-card border border-line bg-canvas p-8 transition-colors hover:border-line-strong hover:bg-surface"
            >
              <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
                Para sua empresa
              </p>
              <h3 className="mt-3 text-subheading font-medium text-ink">
                Proteja quem faz o seu negócio acontecer
              </h3>
              <p className="mt-3 flex-1 text-body-sm text-ink-soft">
                Área protegida, urgência e emergência 24h, telemedicina, ambulatórios, frota e
                remoções — soluções sob medida para operações de qualquer porte.
              </p>
              <span className="mt-6 text-body-sm font-medium text-ink group-hover:text-medicar-red-deep">
                Conhecer as 8 soluções →
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/solucoes/para-voce"
              className="group flex h-full flex-col rounded-card border border-line bg-canvas p-8 transition-colors hover:border-line-strong hover:bg-surface"
            >
              <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
                Para você e sua família
              </p>
              <h3 className="mt-3 text-subheading font-medium text-ink">
                Cartão Medicar: saúde ao seu alcance
              </h3>
              <p className="mt-3 flex-1 text-body-sm text-ink-soft">
                Telemedicina 24h, UTIs móveis, consultas a partir de R$ 29,00 e descontos em
                exames e medicamentos — por uma mensalidade de associado.
              </p>
              <span className="mt-6 text-body-sm font-medium text-ink group-hover:text-medicar-red-deep">
                Conhecer o Cartão Medicar →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. Grid de soluções B2B */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-section md:px-6">
          <SectionHeading
            eyebrow="Soluções para empresas"
            title="Oito soluções, um só parceiro"
            lead="Tudo o que a sua operação precisa em saúde, com a retaguarda de quem é referência em emergências há mais de 30 anos."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.06}>
                <Link
                  to={`/solucoes/empresa/${s.slug}`}
                  className="group flex h-full flex-col rounded-card border border-line bg-canvas p-6 transition-colors hover:border-line-strong"
                >
                  <AsteriskMark size={22} />
                  <h3 className="mt-4 text-body font-medium text-ink">{s.cardTitle}</h3>
                  <p className="mt-2 flex-1 text-body-sm text-ink-soft">{s.summary}</p>
                  <span className="mt-4 text-caption font-medium text-ink-muted group-hover:text-medicar-red-deep">
                    Saiba mais →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Movidos pela vida — faixa vermelha com motivo do asterisco */}
      <section className="relative overflow-hidden bg-medicar-red">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-white/12">
          <AsteriskMark variant="white" size={480} className="absolute -left-32 -top-40 rotate-12" />
          <AsteriskMark variant="white" size={300} className="absolute -bottom-24 right-10 -rotate-12" />
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

      {/* 6. Fluxo de acionamento */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do chamado ao socorro, em 4 etapas"
          lead="Central de Atendimento 24h com regulação médica: o recurso certo, no menor tempo."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dispatchFlow.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="relative h-full rounded-card border border-line bg-canvas p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-wash text-body-sm font-semi text-medicar-red-deep">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-body font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-body-sm text-ink-soft">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-6">
          <p className="text-caption text-ink-muted">
            Software próprio de gestão: monitoramento em tempo real, rota e previsão de chegada da
            ambulância.
          </p>
        </Reveal>
      </section>

      {/* 7. Cobertura — Medicar pelo Brasil */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-page items-center gap-12 px-4 py-section md:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Medicar pelo Brasil"
              title={brandMessages.reach}
              lead="Bases próprias nas principais regiões do país e abrangência nacional pela rede de parceiros homologados."
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
      </section>

      {/* 8. Prova social */}
      <section className="py-section">
        <LogoStrip />
        <div className="mx-auto mt-16 grid max-w-page gap-6 px-4 md:grid-cols-2 md:px-6">
          {homeTestimonials.map((t, i) => (
            <Reveal key={t.serviceSlug} delay={i * 0.08}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 9. Medicar Pet teaser */}
      <section className="mx-auto max-w-page px-4 pb-section md:px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-card border border-line bg-surface p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
                Medicar Pet
              </p>
              <h2 className="mt-2 text-subheading font-medium text-ink md:text-heading-sm">
                Teleorientação veterinária 24h para cães e gatos
              </h2>
              <p className="mt-3 text-body-sm text-ink-soft">
                Orientação on-line sem limite de uso, em qualquer lugar do Brasil — sem o estresse
                de transporte do seu pet.
              </p>
            </div>
            <ButtonLink to="/medicar-pet" variant="ghost">
              Conhecer o Medicar Pet →
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      {/* 10. CTA final — faixa vermelha */}
      <CtaBand />
    </>
  )
}
