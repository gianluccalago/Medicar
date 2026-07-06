import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { getPost, posts } from '../data/posts'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined
  if (!post) return <NotFound />

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Seo title={`${post.title} | Blog Medicar`} description={post.excerpt} />

      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <nav aria-label="Trilha de navegação" className="text-caption text-ink-muted">
          <Link to="/blog" className="hover:text-ink">
            Blog
          </Link>{' '}
          / <span className="text-ink-soft">{post.category}</span>
        </nav>
 <h1 className="mt-4 text-heading-sm text-ink md:text-heading">{post.title}</h1>
        <p className="mt-4 text-body-lg text-ink-soft">{post.excerpt}</p>

        <div className="mt-10 rounded-card border border-line bg-surface p-6">
          <p className="text-caption font-medium uppercase tracking-[0.08em] text-ink-muted">
            Conteúdo em migração
          </p>
          <p className="mt-2 text-body-sm text-ink-soft">{post.body}</p>
          <Link
            to="/contato"
            className="mt-4 inline-block text-body-sm font-medium text-medicar-red-deep hover:underline"
          >
            Falar com a Medicar →
          </Link>
        </div>
      </article>

      <section className="border-t border-line">
        <div className="mx-auto max-w-page px-4 py-16 md:px-6">
 <h2 className="text-body-lg text-ink">Leia também</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group rounded-card border border-line p-5 transition-colors hover:border-line-strong hover:bg-surface"
              >
                <span className="inline-flex rounded-badge bg-surface px-1.5 py-0.5 text-[11px] font-medium text-ink-muted">
                  {p.category}
                </span>
 <h3 className="mt-2 text-body-sm text-ink group-hover:text-medicar-red-deep">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
