import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { AsteriskMark } from '../components/AsteriskMark'
import { CtaBand } from '../components/CtaBand'
import { externalLinks } from '../data/site'

const petBenefits = [
  {
    title: 'Teleorientação 24h',
    text: 'Veterinários on-line a qualquer hora, para cães e gatos, sem limite de uso.',
  },
  {
    title: 'Atenção primária',
    text: 'Primeiro acolhimento e orientação para a maioria das dúvidas e sintomas do dia a dia.',
  },
  {
    title: 'Sem estresse de transporte',
    text: 'Resolva de casa o que não precisa de deslocamento — melhor para o pet e para você.',
  },
  {
    title: 'Cobertura nacional',
    text: 'Atendimento on-line em qualquer lugar do Brasil.',
  },
  {
    title: 'Apoio completo',
    text: 'Ajuda com exames, encaminhamentos, tratamentos, medicações, receitas e comportamento.',
  },
]

export default function Pet() {
  return (
    <>
      <Seo
        title="Medicar Pet — teleorientação veterinária 24h | Medicar"
        description="Teleorientação veterinária on-line 24h para cães e gatos, sem limite de uso e com cobertura nacional. Baixe o app Medicar Pet."
      />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-20 md:px-6 md:py-24">
          <div className="max-w-2xl">
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
              Medicar Pet
            </p>
            <h1 className="mt-3 text-heading-sm font-medium text-ink md:text-heading">
              Cuidado veterinário on-line, 24 horas, para cães e gatos
            </h1>
            <p className="mt-5 text-body-lg text-ink-soft">
              Teleorientação veterinária sem limite de uso, em qualquer lugar do Brasil — do
              comportamento à receita, sem o estresse do transporte.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={externalLinks.petAppStore} variant="primary">
                Baixar na App Store
              </ButtonLink>
              <ButtonLink to={externalLinks.petPlayStore} variant="ghost">
                Baixar no Google Play
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <SectionHeading eyebrow="Como o Medicar Pet ajuda" title="Tudo pelo app, na hora que precisar" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {petBenefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-card border border-line bg-canvas p-6">
                <AsteriskMark size={20} />
                <h2 className="mt-4 text-body font-medium text-ink">{b.title}</h2>
                <p className="mt-2 text-body-sm text-ink-soft">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* B2B Pet */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-section md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Para o seu negócio"
              title="Medicar Pet para empresas"
              lead="Leve a teleorientação veterinária para planos veterinários, cartões de benefício, seguradoras e programas de benefícios corporativos."
            />
            <Reveal className="lg:justify-self-end">
              <ButtonLink to="/contato?origem=medicar-pet&assunto=empresa" variant="ghost">
                Falar com o comercial →
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Seu pet cuidado, você tranquilo"
        text="Baixe o app Medicar Pet e fale com um veterinário em minutos."
        primaryLabel="Baixar o app"
        primaryTo={externalLinks.petAppStore}
      />
    </>
  )
}
