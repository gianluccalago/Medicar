import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/Buttons'
import { AsteriskMark } from '../components/AsteriskMark'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Página não encontrada | Medicar"
        description="A página que você procura não existe ou foi movida."
      />
      <section className="mx-auto flex max-w-page flex-col items-center px-4 py-32 text-center md:px-6">
        <AsteriskMark size={48} />
        <p className="mt-6 font-display text-[64px] leading-none text-medicar-red">404</p>
        <h1 className="mt-4 text-heading-sm text-ink">Essa página não existe</h1>
        <p className="mt-3 max-w-md text-body-sm text-ink-soft">
          O endereço mudou ou nunca esteve por aqui. O nosso atendimento, por outro lado, está
          sempre no mesmo lugar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/" variant="primary">
            Voltar para a Home
          </ButtonLink>
          <ButtonLink to="/contato" variant="ghost">
            Falar com a Medicar
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
