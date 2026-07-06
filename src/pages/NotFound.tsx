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
 <h1 className="mt-6 text-heading-sm text-ink">Página não encontrada</h1>
        <p className="mt-3 max-w-md text-body-sm text-ink-soft">
          O endereço que você acessou não existe ou foi movido. Que tal voltar para o início?
        </p>
        <div className="mt-8">
          <ButtonLink to="/" variant="ghost">
            Voltar para a Home
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
