import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { larProtegido } from '../data/services'

interface OtherSolutionsProps {
  /** Slug da página atual — fica destacada em vermelho e sem link. */
  currentSlug: string
}

/**
 * Seção final "Outras soluções": lista centralizada de links para os demais
 * serviços, com a PÁGINA ATUAL destacada em vermelho e sem link (adendo).
 */
export function OtherSolutions({ currentSlug }: OtherSolutionsProps) {
  const items = [
    ...services.map((s) => ({ slug: s.slug, label: s.cardTitle, to: `/solucoes/empresa/${s.slug}` })),
    { slug: larProtegido.slug, label: larProtegido.cardTitle, to: '/solucoes/lar-protegido' },
    { slug: 'medicar-pet', label: 'Medicar Pet', to: '/medicar-pet' },
  ]
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-page px-4 py-16 text-center md:px-6">
        <h2 className="text-subheading text-ink">Outras soluções Medicar</h2>
        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((it) =>
            it.slug === currentSlug ? (
              <li key={it.slug} className="text-body font-medium text-medicar-red">
                {it.label}
              </li>
            ) : (
              <li key={it.slug}>
                <Link to={it.to} className="text-body text-ink-soft transition-colors hover:text-ink">
                  {it.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
