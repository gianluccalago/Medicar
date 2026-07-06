import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/Buttons'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { AsteriskMark } from '../components/AsteriskMark'
import { CtaBand } from '../components/CtaBand'
import { externalLinks, phones, whatsapp } from '../data/site'

const clinicServices = [
  {
    title: 'Consultas a partir de R$ 29,00',
    text: 'Para associados do Cartão Medicar, em mais de 20 especialidades.',
  },
  {
    title: 'Exames laboratoriais e de imagem',
    text: 'Diagnóstico completo no mesmo endereço, com agilidade.',
  },
  { title: 'Odontologia', text: 'Atendimento odontológico completo, incluindo urgências.' },
  { title: 'Harmonização facial', text: 'Procedimentos estéticos com responsáveis habilitados.' },
]

export default function Clinic() {
  return (
    <>
      <Seo
        title="Clínica Medicar em Ribeirão Preto | Medicar"
        description="Clínica Medicar: consultas a partir de R$ 29,00 para associados, +20 especialidades, exames laboratoriais e de imagem, odontologia e harmonização facial em Ribeirão Preto."
      />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-20 md:px-6 md:py-24">
          <div className="max-w-2xl">
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
              Clínica Medicar
            </p>
            <h1 className="mt-3 text-heading-sm font-medium text-ink md:text-heading">
              Cuidado completo, no centro de Ribeirão Preto
            </h1>
            <p className="mt-5 text-body-lg text-ink-soft">
              Consultas em mais de 20 especialidades, exames e odontologia — com preço de
              associado a partir de R$ 29,00.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={externalLinks.clinicBooking} variant="primary">
                Agende on-line
              </ButtonLink>
              <ButtonLink to={whatsapp.clinic.url} variant="ghost">
                WhatsApp da Clínica
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <SectionHeading eyebrow="Serviços" title="O que você encontra na Clínica" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {clinicServices.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 0.06}>
                  <div className="h-full rounded-card border border-line bg-canvas p-6">
                    <AsteriskMark size={20} />
                    <h2 className="mt-4 text-body font-medium text-ink">{s.title}</h2>
                    <p className="mt-2 text-body-sm text-ink-soft">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <aside className="rounded-card border border-line bg-surface p-6">
              <h2 className="text-body-lg font-medium text-ink">Visite a Clínica</h2>
              <dl className="mt-4 space-y-4 text-body-sm text-ink-soft">
                <div>
                  <dt className="text-caption font-medium uppercase tracking-[0.08em] text-ink-muted">
                    Endereço
                  </dt>
                  <dd className="mt-1">
                    Rua Saldanha Marinho, 281 – Centro
                    <br />
                    Ribeirão Preto/SP
                  </dd>
                </div>
                <div>
                  <dt className="text-caption font-medium uppercase tracking-[0.08em] text-ink-muted">
                    Horários
                  </dt>
                  <dd className="mt-1">
                    Segunda a sexta, 7h30–18h
                    <br />
                    Sábado, 8h30–13h
                  </dd>
                </div>
                <div>
                  <dt className="text-caption font-medium uppercase tracking-[0.08em] text-ink-muted">
                    Contato
                  </dt>
                  <dd className="mt-1">
                    <a href={phones.clinic.tel} className="block hover:text-ink hover:underline">
                      Telefone: {phones.clinic.display}
                    </a>
                    <a
                      href={whatsapp.clinic.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-ink hover:underline"
                    >
                      WhatsApp: {whatsapp.clinic.display}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-caption font-medium uppercase tracking-[0.08em] text-ink-muted">
                    Responsáveis técnicos
                  </dt>
                  <dd className="mt-1 text-caption text-ink-muted">
                    Dr. Rafael Motta Vertemati – CRM 119675
                    <br />
                    CRM PJ 981500
                    <br />
                    Dr. Paulo Sérgio Ferreira de Melo Filho – CRO 90.241
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Consultas a partir de R$ 29,00 para associados"
        text="Associe-se ao Cartão Medicar e economize em todas as especialidades da Clínica."
        primaryLabel="Conhecer o Cartão Medicar"
        primaryTo="/solucoes/para-voce"
      />
    </>
  )
}
