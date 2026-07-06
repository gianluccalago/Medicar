import { AsteriskMark } from './AsteriskMark'
import { ButtonLink } from './Buttons'
import { phones, whatsapp } from '../data/site'

interface CtaBandProps {
  title?: string
  text?: string
  primaryLabel?: string
  primaryTo?: string
}

/**
 * CTA final em faixa vermelha full-bleed com o motivo do asterisco em outline
 * branco — uma das duas seções de impacto permitidas com fundo vermelho.
 */
export function CtaBand({
  title = 'A melhor opção em saúde para você ou sua empresa',
  text = 'Fale com a nossa equipe e descubra a solução certa para o seu momento.',
  primaryLabel = 'Falar com a Medicar',
  primaryTo = '/contato',
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-medicar-red">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-white/12">
        <AsteriskMark variant="white" size={420} className="absolute -right-24 -top-24 rotate-12 opacity-[0.13]" />
        <AsteriskMark variant="white" size={260} className="absolute -bottom-20 -left-16 -rotate-6 opacity-[0.13]" />
      </div>
      <div className="relative mx-auto max-w-page px-4 py-20 text-center md:px-6">
 <h2 className="mx-auto max-w-2xl text-heading-sm text-white md:text-heading">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-body-lg text-white/85">{text}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink to={primaryTo} variant="onRed">
            {primaryLabel}
          </ButtonLink>
          <ButtonLink to={whatsapp.general.url} variant="ghostOnRed">
            WhatsApp {whatsapp.general.display}
          </ButtonLink>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-body-sm text-white/85">
          <a href={phones.emergency.tel} className="font-medium text-white hover:underline">
            {phones.emergency.label}: {phones.emergency.display}
          </a>
          <a href={phones.commercial.tel} className="hover:text-white hover:underline">
            {phones.commercial.label}: {phones.commercial.display}
          </a>
        </div>
      </div>
    </section>
  )
}
