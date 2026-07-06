import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { AsteriskMark } from '../components/AsteriskMark'
import { LogoStrip } from '../components/LogoStrip'
import { CtaBand } from '../components/CtaBand'
import { services } from '../data/services'
import { photos } from '../assets/photos'

/** Hub B2B — as 8 soluções para empresas. */
export default function SolutionsBusiness() {
  return (
    <>
      <Seo
        title="Soluções em saúde para empresas | Medicar"
        description="Área protegida, urgência e emergência 24h, telemedicina, terceirização de ambulatório, locação de ambulância, remoções e aeromédico: 8 soluções para a sua empresa."
      />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
              Para sua empresa
            </p>
            <h1 className="mt-3 text-heading-sm font-semi text-ink md:text-heading">
              A saúde da sua operação, de ponta a ponta
            </h1>
            <p className="mt-5 text-body-lg text-ink-soft">
              Da emergência no perímetro à gestão completa de frota e ambulatório: soluções que se
              combinam para proteger pessoas e reduzir riscos do negócio.
            </p>
            <div className="mt-8">
              <ButtonLink to="/contato?assunto=empresa" variant="primary">
                Falar com o comercial
              </ButtonLink>
            </div>
          </div>
          <Reveal className="hidden lg:block">
            <div className="relative flex items-end justify-center overflow-hidden rounded-card bg-gradient-to-br from-canvas to-red-wash">
              <img
                src={photos.ambulance}
                alt="Ambulância Medicar, frota que atende empresas em todo o Brasil"
                className="w-full max-w-md object-contain drop-shadow-[0_16px_32px_rgba(27,28,30,0.14)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <SectionHeading
          eyebrow="Soluções"
          title="Oito formas de cuidar da sua empresa"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.06}>
              <Link
                to={`/solucoes/empresa/${s.slug}`}
                className="group flex h-full flex-col rounded-card border border-line bg-canvas p-7 transition-colors hover:border-line-strong hover:bg-surface"
              >
                <div className="flex items-center gap-3">
                  <AsteriskMark size={22} />
                  <h2 className="text-body-lg font-medium text-ink">{s.cardTitle}</h2>
                </div>
                <p className="mt-3 flex-1 text-body-sm text-ink-soft">{s.summary}</p>
                <span className="mt-5 text-body-sm font-medium text-ink-muted group-hover:text-medicar-red-deep">
                  Conhecer a solução →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-section">
        <LogoStrip />
      </section>

      <CtaBand
        title="Monte a solução certa para a sua operação"
        text="Nossa equipe comercial desenha o escopo com você — do diagnóstico de riscos à implantação."
        primaryLabel="Falar com o comercial"
        primaryTo="/contato?assunto=empresa"
      />
    </>
  )
}
