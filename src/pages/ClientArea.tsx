import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { AsteriskMark } from '../components/AsteriskMark'
import { externalLinks } from '../data/site'

const cards = [
  {
    title: 'Portal do Cliente',
    text: 'Segunda via de boletos, contratos e dados cadastrais.',
    href: externalLinks.clientPortal,
    cta: 'Acessar o portal',
  },
  {
    title: 'Telemedicina',
    text: 'Plataforma de pronto atendimento on-line 24h por videochamada.',
    href: externalLinks.telemedicine,
    cta: 'Acessar a plataforma',
  },
  {
    title: 'Teleconsulta',
    text: 'Consultas agendadas com especialistas, on-line.',
    href: externalLinks.telemedicine /* TODO: confirmar URL própria da Teleconsulta */,
    cta: 'Acessar a teleconsulta',
  },
  {
    title: 'App Medicar Pet',
    text: 'Teleorientação veterinária 24h para cães e gatos.',
    href: externalLinks.petAppStore,
    hrefSecondary: externalLinks.petPlayStore,
    cta: 'App Store',
    ctaSecondary: 'Google Play',
  },
]

export default function ClientArea() {
  return (
    <>
      <Seo
        title="Área do cliente | Medicar"
        description="Acesse o Portal do Cliente, a plataforma de Telemedicina, a Teleconsulta e o app Medicar Pet."
      />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
              Área do cliente
            </p>
 <h1 className="mt-3 text-heading-sm text-ink md:text-heading">
              Seus serviços, a um clique
            </h1>
            <p className="mt-4 text-body-lg text-ink-soft">
              Acesse as plataformas da Medicar. Os links abrem em uma nova aba.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.06}>
              <div className="flex h-full flex-col rounded-card border border-line bg-canvas p-7">
                <AsteriskMark size={22} />
 <h2 className="mt-4 text-body-lg text-ink">{c.title}</h2>
                <p className="mt-2 flex-1 text-body-sm text-ink-soft">{c.text}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-btn border border-line-strong px-4 py-2 text-body-sm font-medium text-ink transition-colors hover:border-ink-muted hover:bg-surface"
                  >
                    {c.cta}
                    <span aria-hidden="true">↗</span>
                  </a>
                  {c.hrefSecondary && c.ctaSecondary && (
                    <a
                      href={c.hrefSecondary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-btn border border-line-strong px-4 py-2 text-body-sm font-medium text-ink transition-colors hover:border-ink-muted hover:bg-surface"
                    >
                      {c.ctaSecondary}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
