import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { HeroVideo } from '../components/HeroVideo'
import { ButtonLink } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { StatsBand } from '../components/StatsBand'
import { AsteriskMark } from '../components/AsteriskMark'
import { BrazilMap } from '../components/BrazilMap'
import { LogoStrip } from '../components/LogoStrip'
import { TestimonialCard } from '../components/TestimonialCard'
import { CtaBand } from '../components/CtaBand'
import { SolutionIcon } from '../components/SolutionIcon'
import { brandMessages, movedByLife, phones } from '../data/site'
import { dispatchFlow } from '../data/services'
import { coverageAreas, coverageNote } from '../data/bases'
import { testimonials } from '../data/testimonials'
import { posts } from '../data/posts'
import { solutions, solutionGroups, solutionsIntro } from '../data/solutions'
import { photos } from '../assets/photos'

const homeTestimonials = testimonials.filter((t) =>
  ['area-protegida', 'telemedicina'].includes(t.serviceSlug),
)

/* Exatamente os 4 posts mais recentes na Home (adendo item 8). */
const recentPosts = posts.slice(0, 4)

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
 <h1 className="text-heading text-white md:text-heading-lg">
              Soluções em saúde para você ou sua empresa
            </h1>
            <p className="mt-5 text-body-lg text-white/90">{brandMessages.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/solucoes/empresa" variant="primary">
                Conheça nossos serviços
              </ButtonLink>
              {/* Rótulo do 2º CTA sugerido (no print o botão vermelho estava sem texto) — confirmar */}
              <ButtonLink to="/contato" variant="ghostOnRed">
                Fale conosco
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

      {/* 2. Faixa de números — vermelha, clone do site anterior */}
      <StatsBand />

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
              className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-canvas transition-colors hover:border-line-strong"
            >
              <div className="relative flex h-52 items-end justify-center overflow-hidden bg-gradient-to-br from-surface to-red-wash">
                <img
                  src={photos.areaProtegida}
                  alt="Profissional Medicar em frente a uma ambulância, representando as soluções para empresas"
                  loading="lazy"
                  className="h-[112%] w-auto object-contain object-bottom drop-shadow-[0_12px_24px_rgba(27,28,30,0.12)] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
                  Para sua empresa
                </p>
 <h3 className="mt-3 text-subheading text-ink">
                  Proteja quem faz o seu negócio acontecer
                </h3>
                <p className="mt-3 flex-1 text-body-sm text-ink-soft">
                  Área protegida, urgência e emergência 24h, telemedicina, ambulatórios, frota e
                  remoções — soluções sob medida para operações de qualquer porte.
                </p>
                <span className="mt-6 text-body-sm font-medium text-ink group-hover:text-medicar-red-deep">
                  Conhecer as soluções →
                </span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/solucoes/para-voce"
              className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-canvas transition-colors hover:border-line-strong"
            >
              <div className="relative flex h-52 items-end justify-center overflow-hidden bg-gradient-to-br from-surface to-red-wash">
                <img
                  src={photos.familia}
                  alt="Senhor sorridente representando o cuidado com você e sua família"
                  loading="lazy"
                  className="h-[112%] w-auto object-contain object-bottom drop-shadow-[0_12px_24px_rgba(27,28,30,0.12)] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
                  Para você e sua família
                </p>
 <h3 className="mt-3 text-subheading text-ink">
                  Cartão Medicar: saúde ao seu alcance
                </h3>
                <p className="mt-3 flex-1 text-body-sm text-ink-soft">
                  Telemedicina 24h, UTIs móveis, consultas a partir de R$ 29,00 e descontos em
                  exames e medicamentos — por uma mensalidade de associado.
                </p>
                <span className="mt-6 text-body-sm font-medium text-ink group-hover:text-medicar-red-deep">
                  Conhecer o Cartão Medicar →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. Nossas Soluções — título à esquerda + grid agrupado por público */}
      <section className="border-y border-line bg-canvas">
        <div className="mx-auto grid max-w-page gap-10 px-4 py-section md:px-6 lg:grid-cols-[300px_1fr] lg:gap-12">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <h2 className="text-heading-sm leading-[1.05] text-ink md:text-heading">
                Nossas
                <br />
                Soluções
              </h2>
              <p className="mt-4 max-w-xs text-body-sm text-ink-soft">{solutionsIntro}</p>
            </div>
          </Reveal>

          <div className="space-y-10">
            {solutionGroups.map((group) => (
              <div key={group.audience}>
                <p className="text-caption font-medium uppercase tracking-[0.1em] text-ink-muted">
                  {group.label}
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {solutions
                    .filter((s) => s.audience === group.audience)
                    .map((s, i) => (
                      <Reveal key={s.slug} delay={(i % 4) * 0.05}>
                        <Link
                          to={s.href}
                          className="group flex h-full flex-col items-center rounded-card bg-surface p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-canvas hover:shadow-[0_10px_28px_rgba(27,28,30,0.08)]"
                        >
                          <span className="text-medicar-red transition-transform duration-200 group-hover:scale-105">
                            <SolutionIcon name={s.icon} size={38} />
                          </span>
                          <h3 className="mt-4 text-body text-ink">{s.title}</h3>
                          <p className="mt-2 text-body-sm text-ink-soft">{s.description}</p>
                        </Link>
                      </Reveal>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Movidos pela vida — faixa vermelha com motivo do asterisco */}
      <section className="relative overflow-hidden bg-medicar-red">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-white/12">
          <AsteriskMark variant="white" size={480} className="absolute -left-32 -top-40 rotate-12 opacity-[0.13]" />
          <AsteriskMark variant="white" size={300} className="absolute -bottom-24 right-10 -rotate-12 opacity-[0.13]" />
        </div>
        <div className="relative mx-auto max-w-page px-4 py-section md:px-6">
          <SectionHeading eyebrow="Nosso propósito" title={brandMessages.movedByLife} onRed />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {movedByLife.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="border-t border-white/30 pt-5">
 <h3 className="text-subheading text-white">{item.title}</h3>
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
          title={'Do chamado ao socorro, em 4 etapas'}
          lead="Central de Atendimento 24h com regulação médica: o recurso certo, no menor tempo."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dispatchFlow.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="relative h-full rounded-card border border-line bg-canvas p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-wash text-body-sm font-semi text-medicar-red-deep">
                  {i + 1}
                </span>
 <h3 className="mt-4 text-body text-ink">{step.title}</h3>
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
        <div className="mx-auto mt-16 max-w-page px-4 md:px-6">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Confiança de quem já é atendido"
            lead="Ao longo dos anos, a Medicar construiu uma trajetória marcada por eficiência, organização e alto volume de atendimentos realizados com qualidade."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {homeTestimonials.map((t, i) => (
              <Reveal key={t.serviceSlug} delay={i * 0.08}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8b. Blog — 4 posts mais recentes, cards compactos */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-section md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Blog" title="Conteúdo para cuidar melhor" />
            <Reveal>
              <Link
                to="/blog"
                className="text-body-sm font-medium text-medicar-red-deep hover:underline"
              >
                Ver todos os posts →
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recentPosts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 0.05}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-canvas transition-colors hover:border-line-strong"
                >
                  {/* Thumb 16:9 com motivo do asterisco (placeholder — sem cortar conteúdo) */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-red-wash to-surface">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <AsteriskMark size={40} className="opacity-50" />
                    </div>
                    <span className="absolute left-3 top-3 rounded-badge bg-canvas/85 px-1.5 py-0.5 text-[11px] font-medium text-medicar-red-deep">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-body-sm leading-snug text-ink group-hover:text-medicar-red-deep">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Medicar Pet teaser */}
      <section className="mx-auto max-w-page px-4 pb-section md:px-6">
        <Reveal>
          <div className="grid items-center gap-8 overflow-hidden rounded-card border border-line bg-surface md:grid-cols-2">
            <div className="p-8 md:p-10">
              <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
                Medicar Pet
              </p>
 <h2 className="mt-2 text-subheading text-ink md:text-heading-sm">
                Teleorientação veterinária 24h para cães e gatos
              </h2>
              <p className="mt-3 text-body-sm text-ink-soft">
                Orientação on-line sem limite de uso, em qualquer lugar do Brasil — sem o estresse
                de transporte do seu pet.
              </p>
              <div className="mt-6">
                <ButtonLink to="/medicar-pet" variant="ghost">
                  Conhecer o Medicar Pet →
                </ButtonLink>
              </div>
            </div>
            <div className="flex h-full items-end justify-center self-end px-8 pt-4 md:px-0">
              <img
                src={photos.pet}
                alt="Um cão e um gato, atendidos pela teleorientação veterinária Medicar Pet"
                loading="lazy"
                className="h-auto w-full max-w-sm object-contain"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* 10. CTA final — faixa vermelha */}
      <CtaBand />
    </>
  )
}
