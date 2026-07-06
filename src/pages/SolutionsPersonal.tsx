import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { AsteriskMark } from '../components/AsteriskMark'
import { CtaBand } from '../components/CtaBand'
import { cardBenefits, priceTiers } from '../data/prices'

/** Hub B2C — Cartão Medicar. */
export default function SolutionsPersonal() {
  return (
    <>
      <Seo
        title="Cartão Medicar — plano para você e sua família | Medicar"
        description="Telemedicina 24h, UTIs móveis, consultas a partir de R$ 29,00 e descontos em exames e medicamentos: conheça o Cartão Medicar."
      />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-20 md:px-6 md:py-24">
          <div className="max-w-2xl">
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
              Para você e sua família
            </p>
            <h1 className="mt-3 text-heading-sm font-medium text-ink md:text-heading">
              Cartão Medicar: saúde ao seu alcance onde você estiver
            </h1>
            <p className="mt-5 text-body-lg text-ink-soft">
              Uma mensalidade de associado que reúne telemedicina 24h, UTIs móveis, consultas com
              desconto e vantagens em farmácias e laboratórios.
            </p>
            <div className="mt-8">
              <ButtonLink to="/contato?origem=cartao-medicar&assunto=familia" variant="primary">
                Quero me associar
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <SectionHeading eyebrow="Benefícios" title="Tudo o que o Cartão Medicar inclui" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cardBenefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-card border border-line bg-canvas p-6">
                <AsteriskMark size={20} />
                <h2 className="mt-4 text-body font-medium text-ink">{b.title}</h2>
                <p className="mt-2 text-body-sm text-ink-soft">{b.text}</p>
                {b.note && <p className="mt-2 text-caption text-ink-muted">{b.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tabela de preços */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-section md:px-6">
          <SectionHeading
            eyebrow="Consultas na Clínica Medicar"
            title="Preço de associado, sem letra miúda"
            lead="Compare o valor de associado com o valor particular por especialidade."
          />
          <Reveal className="mt-12">
            <div className="overflow-x-auto rounded-card border border-line bg-canvas">
              <table className="w-full min-w-[560px] text-left">
                <caption className="sr-only">
                  Tabela de preços de consultas: associado versus particular
                </caption>
                <thead>
                  <tr className="border-b border-line-strong">
                    <th scope="col" className="px-5 py-4 text-caption font-medium uppercase tracking-[0.08em] text-ink-muted">
                      Especialidades
                    </th>
                    <th scope="col" className="px-5 py-4 text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
                      Associado
                    </th>
                    <th scope="col" className="px-5 py-4 text-caption font-medium uppercase tracking-[0.08em] text-ink-muted">
                      Particular
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {priceTiers.map((tier) => (
                    <tr key={tier.associate} className="border-b border-line align-top last:border-0">
                      <td className="px-5 py-4 text-body-sm text-ink-soft">
                        {tier.specialties.join(', ')}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-body font-semi text-medicar-red-deep">
                        {tier.associate}
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 text-body-sm text-ink-muted line-through">
                        {tier.regular}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Associe-se ao Cartão Medicar"
        text="Proteção 24h e economia real em saúde para você e quem você ama."
        primaryLabel="Quero me associar"
        primaryTo="/contato?origem=cartao-medicar&assunto=familia"
      />
    </>
  )
}
