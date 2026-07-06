import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { AsteriskMark } from '../components/AsteriskMark'
import { MediaFrame } from '../components/MediaFrame'
import { OtherSolutions } from '../components/OtherSolutions'
import { CtaBand } from '../components/CtaBand'
import { externalLinks } from '../data/site'
import { photos } from '../assets/photos'

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

      {/* Hero claro, título em duas linhas */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-surface to-red-wash">
        <AsteriskMark
          variant="solid"
          size={480}
          className="pointer-events-none absolute -right-32 -top-24 opacity-[0.05]"
        />
        <div className="relative mx-auto grid max-w-page items-center gap-8 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl">
            <h1 className="text-heading-sm leading-[1.02] text-ink md:text-heading-lg">
              Medicar
              <span className="block text-medicar-red">Pet</span>
            </h1>
            <p className="mt-5 max-w-lg text-body-sm text-ink-soft">
              Teleorientação veterinária on-line, 24 horas, para cães e gatos: sem limite de uso,
              em qualquer lugar do Brasil — do comportamento à receita, sem o estresse do transporte.
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
          <Reveal className="hidden justify-center lg:flex">
            <img
              src={photos.pet}
              alt="Cão e gato atendidos pela teleorientação Medicar Pet"
              className="h-[320px] w-auto object-contain object-bottom drop-shadow-[0_18px_36px_rgba(27,28,30,0.16)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <Reveal>
          <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
            Como o Medicar Pet ajuda
          </p>
          <h2 className="mt-2 max-w-2xl text-heading-sm text-ink">
            Tudo pelo app, na hora que precisar
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {petBenefits.map((b, i) => (
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

      {/* Como funciona */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-section md:px-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <MediaFrame poster={photos.pet} alt="Como funciona o Medicar Pet" />
          </Reveal>
          <Reveal delay={0.06}>
            <div>
              <h2 className="text-heading-sm text-ink">Atendimento em poucos toques</h2>
              <p className="mt-4 text-body-sm text-ink-soft">
                Baixe o app, faça login e solicite a teleorientação: um veterinário atende você e o
                seu pet por videochamada, com orientação para o cuidado do dia a dia.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* B2B Pet */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <div className="grid items-center gap-8 rounded-card border border-line bg-surface p-8 md:grid-cols-2 md:p-10">
          <div>
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
              Para o seu negócio
            </p>
            <h2 className="mt-2 text-heading-sm text-ink">Medicar Pet para empresas</h2>
            <p className="mt-3 text-body-sm text-ink-soft">
              Leve a teleorientação veterinária para planos veterinários, cartões de benefício,
              seguradoras e programas de benefícios corporativos.
            </p>
          </div>
          <div className="md:justify-self-end">
            <ButtonLink to="/contato?origem=medicar-pet&assunto=empresa" variant="primary">
              Falar com o comercial
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand
        title="Seu pet cuidado, você tranquilo"
        text="Baixe o app Medicar Pet e fale com um veterinário em minutos."
        primaryLabel="Baixar o app"
        primaryTo={externalLinks.petAppStore}
      />

      <OtherSolutions currentSlug="medicar-pet" />
    </>
  )
}
