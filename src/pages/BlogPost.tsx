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
        {/* Com conteúdo estruturado, o 1º parágrafo já repete o excerpt — evita duplicar */}
        {!post.content && <p className="mt-4 text-body-lg text-ink-soft">{post.excerpt}</p>}

        {post.content ? (
          <div className="mt-10">
            {post.content.map((block, i) => (
              <div key={i} className="mb-6">
                {block.heading && (
                  <h2 className="mb-3 mt-4 text-subheading text-ink">{block.heading}</h2>
                )}
                {block.subheading && (
                  <h3 className="mb-2 text-body-lg text-ink">{block.subheading}</h3>
                )}
                {block.paragraph && (
                  <p className="text-body text-ink-soft">{block.paragraph}</p>
                )}
                {block.list && (
                  <ul className="mt-2 space-y-1.5 pl-1">
                    {block.list.map((item) => (
                      <li key={item} className="flex gap-2.5 text-body text-ink-soft">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-medicar-red" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {post.ctaText && (
              <div className="mt-10 rounded-card bg-red-wash p-6">
                <p className="text-body text-ink">{post.ctaText}</p>
                <Link
                  to="/contato"
                  className="mt-4 inline-flex rounded-btn bg-medicar-red px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-medicar-red-deep"
                >
                  Falar com nossos especialistas
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-10 rounded-card border border-line bg-surface p-6">
            <p className="text-caption font-medium uppercase tracking-[0.08em] text-ink-muted">
              Conteúdo em preparação
            </p>
            <p className="mt-2 text-body-sm text-ink-soft">{post.body}</p>
            <Link
              to="/contato"
              className="mt-4 inline-block text-body-sm font-medium text-medicar-red-deep hover:underline"
            >
              Falar com a Medicar →
            </Link>
          </div>
        )}
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
