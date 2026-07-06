import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { AsteriskMark } from '../components/AsteriskMark'
import { TestimonialCard } from '../components/TestimonialCard'
import { CtaBand } from '../components/CtaBand'
import { getService, services } from '../data/services'
import { getTestimonial } from '../data/testimonials'
import { servicePhotos } from '../assets/photos'
import NotFound from './NotFound'

/** Template das 8 páginas de serviço B2B. */
export default function ServicePage() {
  const { slug } = useParams()
  const service = slug ? getService(slug) : undefined
  if (!service) return <NotFound />

  const testimonial = getTestimonial(service.slug)
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)
  const heroPhoto = servicePhotos[service.slug]

  return (
    <>
      <Seo
        title={`${service.name} | Medicar`}
        description={service.summary}
      />

      {/* Hero do serviço */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-page items-center gap-8 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <nav aria-label="Trilha de navegação" className="text-caption text-ink-muted">
              <Link to="/solucoes/empresa" className="hover:text-ink">
                Soluções para empresa
              </Link>{' '}
              / <span className="text-ink-soft">{service.cardTitle}</span>
            </nav>
            <h1 className="mt-6 text-heading-sm font-semi text-ink md:text-heading">
              {service.headline}
            </h1>
            <p className="mt-5 text-body-lg text-ink-soft">{service.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={`/contato?origem=${service.slug}&assunto=empresa`} variant="primary">
                Quero contratar
              </ButtonLink>
              <ButtonLink to="/contato" variant="ghost">
                Falar com um consultor
              </ButtonLink>
            </div>
          </div>
          {heroPhoto && (
            <Reveal className="hidden lg:block">
              <div className="relative flex items-end justify-center overflow-hidden rounded-card bg-gradient-to-br from-canvas to-red-wash">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                >
                  <AsteriskMark variant="solid" size={340} className="absolute -right-16 -top-12" />
                </div>
                <img
                  src={heroPhoto}
                  alt={`Medicar — ${service.cardTitle}`}
                  className="relative h-[380px] w-auto object-contain object-bottom drop-shadow-[0_16px_32px_rgba(27,28,30,0.14)]"
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <SectionHeading eyebrow="Benefícios" title="Por que contratar com a Medicar" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-card border border-line bg-canvas p-6">
                <AsteriskMark size={20} />
                <h3 className="mt-4 text-body font-medium text-ink">{b.title}</h3>
                <p className="mt-2 text-body-sm text-ink-soft">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Detalhe */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-section md:px-6">
          <SectionHeading title={service.detail.title} lead={service.detail.text} />
          {service.detail.items && (
            <dl className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {service.detail.items.map((item) => (
                <Reveal key={item.title}>
                  <div className="border-t border-line-strong pt-4">
                    <dt className="text-body font-medium text-ink">{item.title}</dt>
                    <dd className="mt-2 text-body-sm text-ink-soft">{item.text}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          )}

          {service.steps && (
            <div className="mt-12">
              {service.stepsTitle && (
                <h3 className="text-body-lg font-medium text-ink">{service.stepsTitle}</h3>
              )}
              <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {service.steps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 0.08}>
                    <li className="h-full rounded-card border border-line bg-canvas p-6">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-wash text-body-sm font-semi text-medicar-red-deep">
                        {i + 1}
                      </span>
                      <h4 className="mt-4 text-body font-medium text-ink">{step.title}</h4>
                      <p className="mt-2 text-body-sm text-ink-soft">{step.text}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          )}

          {service.signature && (
            <Reveal className="mt-12">
              <p className="text-body-lg font-medium text-medicar-red-deep">
                “{service.signature}”
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Depoimento */}
      {testimonial && (
        <section className="mx-auto max-w-page px-4 py-section md:px-6">
          <SectionHeading eyebrow="Quem contrata, recomenda" title="Na voz de quem opera" />
          <div className="mt-10 max-w-2xl">
            <TestimonialCard testimonial={testimonial} />
          </div>
        </section>
      )}

      {/* Outras soluções */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-page px-4 py-16 md:px-6">
          <h2 className="text-body-lg font-medium text-ink">Outras soluções para empresas</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/solucoes/empresa/${s.slug}`}
                className="group rounded-card border border-line p-5 transition-colors hover:border-line-strong hover:bg-surface"
              >
                <h3 className="text-body-sm font-medium text-ink">{s.cardTitle}</h3>
                <span className="mt-2 block text-caption text-ink-muted group-hover:text-medicar-red-deep">
                  Saiba mais →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Leve ${service.cardTitle} para a sua empresa`}
        text="Fale com a nossa equipe comercial e receba uma proposta sob medida."
        primaryLabel="Quero contratar"
        primaryTo={`/contato?origem=${service.slug}&assunto=empresa`}
      />
    </>
  )
}
