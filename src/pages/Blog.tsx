import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { AsteriskMark } from '../components/AsteriskMark'
import { posts } from '../data/posts'

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog | Medicar — Soluções em Saúde"
        description="Conteúdo sobre saúde corporativa, NR-1, atendimento pré-hospitalar, frota de ambulâncias e cuidados com a família."
      />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep">
              Blog
            </p>
 <h1 className="mt-3 text-heading-sm text-ink md:text-heading">
              Saúde, segurança e gestão em dia
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-section md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.05}>
              <Link
                to={`/blog/${p.slug}`}
                className="group flex h-full flex-col rounded-card border border-line bg-canvas p-6 transition-colors hover:border-line-strong hover:bg-surface"
              >
                {/* Placeholder de capa: motivo do asterisco sobre wash — sem fotos de banco */}
                <div
                  aria-hidden="true"
                  className="flex h-32 items-center justify-center rounded-btn bg-gradient-to-br from-red-wash to-surface"
                >
                  <AsteriskMark size={44} className="opacity-60" />
                </div>
                <span className="mt-4 inline-flex self-start rounded-badge bg-surface px-1.5 py-0.5 text-[11px] font-medium text-ink-muted">
                  {p.category}
                </span>
 <h2 className="mt-3 flex-1 text-body text-ink group-hover:text-medicar-red-deep">
                  {p.title}
                </h2>
                <p className="mt-2 text-body-sm text-ink-soft">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
