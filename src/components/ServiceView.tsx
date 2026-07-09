import { motion, useReducedMotion } from 'framer-motion'
import { Seo } from './Seo'
import { ButtonLink } from './Buttons'
import { Reveal } from './Reveal'
import { AsteriskMark } from './AsteriskMark'
import { MediaFrame } from './MediaFrame'
import { TestimonialCard } from './TestimonialCard'
import { OtherSolutions } from './OtherSolutions'
import { CtaBand } from './CtaBand'
import type { Service } from '../data/services'
import { getTestimonial } from '../data/testimonials'
import { servicePhotos, howPhotos, photos } from '../assets/photos'

interface ServiceViewProps {
  service: Service
  /** Origem pré-selecionada no formulário de contato */
  origin?: string
}

/** Modelos de ambulância para o carrossel da Locação (adendo item 65/66). */
const ambulanceModels = [
  { name: 'Tradicional', text: 'A configuração mais versátil, para a maioria das operações.' },
  { name: '4x4', text: 'Tração para terrenos difíceis e acesso a áreas remotas.' },
  { name: 'Furgão', text: 'Amplo espaço interno para suporte avançado e equipamentos.' },
]

/**
 * Template único das páginas de serviço (adendo seção 6):
 * hero foto + título em 2 linhas (serviço + "Medicar" vermelho), benefícios
 * compactos, "Como funciona" com área de vídeo, vantagens em grid, CTA e
 * "Outras soluções". Seções especiais por serviço.
 */
export function ServiceView({ service, origin }: ServiceViewProps) {
  const reduced = useReducedMotion()
  const testimonial = getTestimonial(service.slug)
  const heroPhoto = servicePhotos[service.slug]
  const contactTo = `/contato?origem=${origin ?? service.slug}&assunto=empresa`

  return (
    <>
      <Seo title={`${service.name} | Medicar`} description={service.summary} />

      {/*
        1. Hero claro com foto do serviço e título em duas linhas:
        nome do serviço (serif) + "Medicar" (vermelho). Header branco padrão,
        sem faixa preta (adendo item 19).
        TODO: substituir por foto de fundo específica do serviço quando o asset chegar.
      */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-surface to-red-wash">
        <AsteriskMark
          variant="solid"
          size={480}
          className="pointer-events-none absolute -right-32 -top-24 opacity-[0.05]"
        />
        <div className="relative mx-auto grid max-w-page items-center gap-8 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl">
            <h1 className="text-heading-sm leading-[1.02] text-ink md:text-heading-lg">
              {service.cardTitle}
              <span className="block text-medicar-red">Medicar</span>
            </h1>
            <p className="mt-5 max-w-lg text-body-sm text-ink-soft">{service.intro}</p>
            {service.pendingApproval && (
              <p className="mt-4 inline-block rounded-badge bg-red-wash px-2 py-1 text-[11px] text-medicar-red-deep">
                Conteúdo rascunhado — pendente de aprovação Medicar
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={contactTo} variant="primary">
                Quero contratar
              </ButtonLink>
              <ButtonLink to="/contato" variant="ghost">
                Falar com um consultor
              </ButtonLink>
            </div>
          </div>
          {heroPhoto && (
            <Reveal className="hidden justify-center lg:flex">
              <img
                src={heroPhoto}
                alt={`Medicar — ${service.cardTitle}`}
                className="h-[360px] w-auto object-contain object-bottom drop-shadow-[0_12px_26px_rgba(27,28,30,0.11)]"
              />
            </Reveal>
          )}
        </div>
      </section>

      {/* 2. Benefícios compactos */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <Reveal>
          <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
            Benefícios
          </p>
          <h2 className="mt-2 max-w-2xl text-heading-sm text-ink">
            Por que contratar {service.cardTitle} com a Medicar
          </h2>
        </Reveal>
        {/* 4 itens → 2×2 (evita card órfão numa grade de 3 colunas) */}
        <div
          className={`mt-10 grid gap-4 sm:grid-cols-2 ${
            service.benefits.length === 4 ? '' : 'lg:grid-cols-3'
          }`}
        >
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.05}>
              <div className="h-full rounded-card border border-line bg-canvas p-5">
                <AsteriskMark size={18} />
                <h3 className="mt-3 text-body text-ink">{b.title}</h3>
                <p className="mt-1.5 text-body-sm text-ink-soft">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Como funciona — mídia (vídeo-ready) + texto enxuto mais estreito */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-section md:px-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            {/* Cena fotográfica própria de cada serviço (sempre ≠ da foto do hero) */}
            <MediaFrame
              poster={
                howPhotos[service.slug] ??
                (heroPhoto === photos.mission ? photos.ambulance : photos.mission)
              }
              cover={service.slug in howPhotos}
              alt={`Como funciona — ${service.cardTitle}`}
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div>
              <h2 className="text-heading-sm text-ink">{service.detail.title}</h2>
              {service.detail.text && (
                <p className="mt-4 text-body-sm text-ink-soft">{service.detail.text}</p>
              )}
              {service.signature && (
                <p className="mt-5 text-body-lg text-medicar-red-deep">“{service.signature}”</p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Vantagens / detalhes em grid */}
      {(service.detail.items || service.steps) && (
        <section className="mx-auto max-w-page px-4 py-section md:px-6">
          {service.detail.items && (
            <dl className="grid gap-x-10 gap-y-6 md:grid-cols-2">
              {service.detail.items.map((item) => (
                <Reveal key={item.title}>
                  <div className="rounded-card border border-line bg-canvas p-5">
                    <dt className="text-body text-ink">{item.title}</dt>
                    <dd className="mt-1.5 text-body-sm text-ink-soft">{item.text}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          )}
          {service.steps && (
            <div className={service.detail.items ? 'mt-12' : ''}>
              {service.stepsTitle && (
                <h2 className="text-heading-sm text-ink">{service.stepsTitle}</h2>
              )}
              {/* Mesma linguagem editorial das etapas da Home (sem card/badge) */}
              <ol className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {service.steps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 0.06}>
                    <li className="h-full border-t-2 border-medicar-red pt-5">
                      <span
                        aria-hidden="true"
                        className="font-display text-[40px] leading-none text-medicar-red"
                      >
                        {i + 1}
                      </span>
                      <h3 className="mt-3 text-body text-ink">{step.title}</h3>
                      <p className="mt-1.5 text-body-sm text-ink-soft">{step.text}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          )}
        </section>
      )}

      {/* Seção especial — Área Protegida: "Um hospital sobre rodas" (texto sobre foto) */}
      {service.slug === 'area-protegida' && (
        <section className="border-t border-line">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-medicar-wine to-medicar-red/60" />
            <AsteriskMark
              variant="white"
              size={460}
              className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 opacity-[0.07]"
            />
            <div className="relative mx-auto max-w-page px-4 py-section md:px-6">
              <div className="max-w-2xl">
                <h2 className="text-heading-sm text-white md:text-heading">Um hospital sobre rodas</h2>
                <p className="mt-5 text-body text-white/85">
                  UTIs móveis equipadas para suporte avançado de vida, com equipe treinada, chegam
                  ao seu estabelecimento em minutos. É a estrutura de um pronto-socorro levada até
                  onde a emergência acontece — sem que a pessoa precise sair do local.
                </p>
                <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {[
                    'Suporte avançado de vida no local',
                    'Equipe médica e de enfermagem treinada',
                    'Estabilização antes de qualquer remoção',
                    'Retaguarda da Central de Regulação 24h',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-body-sm text-white/90">
                      <AsteriskMark variant="white" size={16} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Seção especial — Locação: carrossel dos modelos (rolagem automática) */}
      {service.slug === 'locacao-de-ambulancia' && (
        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-page px-4 py-section md:px-6">
            <h2 className="text-heading-sm text-ink">Modelos de ambulância</h2>
            <p className="mt-3 max-w-xl text-body-sm text-ink-soft">
              Escolha o modelo conforme a operação e o terreno.
            </p>
          </div>
          <div
            className="group relative mt-4 overflow-hidden pb-section"
            style={{
              maskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)',
            }}
          >
            <ul className="flex w-max animate-marquee-slow gap-4 px-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
              {[...ambulanceModels, ...ambulanceModels, ...ambulanceModels].map((m, i) => (
                <li
                  key={`${m.name}-${i}`}
                  aria-hidden={i >= ambulanceModels.length}
                  className="w-72 shrink-0 rounded-card border border-line bg-canvas p-6"
                >
                  <img
                    src={photos.ambulance}
                    alt=""
                    aria-hidden="true"
                    className="h-28 w-full object-contain"
                  />
                  <h3 className="mt-4 text-body-lg text-ink">{m.name}</h3>
                  <p className="mt-1.5 text-body-sm text-ink-soft">{m.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Seção especial — Telemedicina: White Label (B2B) com mockup flutuante */}
      {service.slug === 'telemedicina' && (
        <section className="border-t border-line">
          <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-section md:px-6 lg:grid-cols-2">
            <Reveal>
              <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
                Para operadoras e empresas
              </p>
              <h2 className="mt-2 text-heading-sm text-ink">Telemedicina White Label</h2>
              <p className="mt-4 text-body-sm text-ink-soft">
                Ofereça telemedicina com a marca da sua empresa, sobre a plataforma própria da
                Medicar: 100% dos atendimentos com médicos da Medicar e app para iOS e Android.
              </p>
              <p className="mt-3 inline-block rounded-badge bg-red-wash px-2 py-1 text-[11px] text-medicar-red-deep">
                [COPY PENDENTE DE APROVAÇÃO]
              </p>
              <div className="mt-8">
                <ButtonLink to="/contato?origem=telemedicina-white-label&assunto=empresa" variant="primary">
                  Falar com o comercial
                </ButtonLink>
              </div>
            </Reveal>
            <div className="flex justify-center">
              <motion.div
                animate={reduced ? undefined : { y: [0, -10, 0] }}
                transition={reduced ? undefined : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-52 rounded-[28px] border-4 border-ink bg-ink p-2 shadow-[0_24px_48px_rgba(27,28,30,0.22)]"
              >
                <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-red-wash to-canvas">
                  <div className="flex flex-col items-center gap-3 px-4 py-10 text-center">
                    <AsteriskMark size={40} />
                    <p className="font-display text-body-lg text-ink">sua marca</p>
                    <p className="text-caption text-ink-muted">Telemedicina 24h</p>
                    <span className="mt-2 rounded-btn bg-medicar-red px-4 py-2 text-caption font-medium text-white">
                      Solicitar atendimento
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Depoimento */}
      {testimonial && (
        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-page px-4 py-section md:px-6">
            <h2 className="text-heading-sm text-ink">Na voz de quem opera</h2>
            <div className="mt-8 max-w-2xl">
              <TestimonialCard testimonial={testimonial} />
            </div>
          </div>
        </section>
      )}

      <CtaBand
        // Título escrito à mão por serviço (ctaTitle); fallback só p/ serviços futuros
        title={service.ctaTitle ?? `Leve ${service.cardTitle} para a sua empresa`}
        text="Fale com a nossa equipe e receba uma proposta sob medida."
        primaryLabel="Quero contratar"
        primaryTo={contactTo}
      />

      <OtherSolutions currentSlug={service.slug} />
    </>
  )
}
