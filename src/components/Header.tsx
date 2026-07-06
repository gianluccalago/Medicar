import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { phones, whatsapp } from '../data/site'
import { services } from '../data/services'

const navLinkBase =
  'rounded-btn px-3 py-2 text-body-sm transition-colors hover:text-ink'

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `${navLinkBase} ${isActive ? 'font-medium text-medicar-red-deep' : 'text-ink-soft'}`
}

/** Barra utilitária + navegação sticky com dropdown "Soluções" e drawer mobile. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  // Fecha menus ao navegar
  useEffect(() => {
    setMenuOpen(false)
    setSolutionsOpen(false)
  }, [pathname])

  // Fecha o dropdown ao clicar fora ou apertar Esc
  useEffect(() => {
    if (!solutionsOpen) return
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setSolutionsOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSolutionsOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [solutionsOpen])

  // Trava o scroll com o drawer aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const solutionsActive = pathname.startsWith('/solucoes')

  return (
    <header className="sticky top-0 z-40 bg-canvas">
      {/* Barra utilitária — emergência sempre visível */}
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-1.5 md:px-6">
          <a
            href={phones.emergency.tel}
            className="inline-flex items-center gap-2 text-caption font-medium text-white hover:underline"
          >
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-medicar-red"
            />
            {phones.emergency.label}: {phones.emergency.display}
          </a>
          <div className="hidden items-center gap-5 text-caption text-white/75 sm:flex">
            <a href={phones.commercial.tel} className="hover:text-white hover:underline">
              {phones.commercial.label}: {phones.commercial.display}
            </a>
            <a
              href={whatsapp.general.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline"
            >
              WhatsApp: {whatsapp.general.display}
            </a>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <div className="border-b border-line bg-canvas/95 backdrop-blur">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 md:px-6"
        >
          <Link to="/" aria-label="Medicar — página inicial">
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/sobre-nos" className={navLinkClass}>
              Sobre nós
            </NavLink>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
                onClick={() => setSolutionsOpen((v) => !v)}
                className={`${navLinkBase} inline-flex items-center gap-1 ${
                  solutionsActive ? 'font-medium text-medicar-red-deep' : 'text-ink-soft'
                }`}
              >
                Soluções
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                  className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="absolute left-0 top-full mt-2 w-[520px] rounded-card border border-line bg-canvas p-4 shadow-[0_12px_32px_rgba(27,28,30,0.08)]">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Link
                        to="/solucoes/empresa"
                        className="block rounded-btn px-2 py-1.5 text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep hover:bg-surface"
                      >
                        Para empresa →
                      </Link>
                      <ul className="mt-1">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`/solucoes/empresa/${s.slug}`}
                              className="block rounded-btn px-2 py-1.5 text-body-sm text-ink-soft hover:bg-surface hover:text-ink"
                            >
                              {s.cardTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Link
                        to="/solucoes/para-voce"
                        className="block rounded-btn px-2 py-1.5 text-caption font-medium uppercase tracking-[0.08em] text-medicar-red-deep hover:bg-surface"
                      >
                        Para você →
                      </Link>
                      <p className="mt-1 px-2 py-1.5 text-body-sm text-ink-soft">
                        Cartão Medicar: telemedicina 24h, UTIs móveis, descontos em consultas,
                        exames e medicamentos para você e sua família.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/clinica-medicar" className={navLinkClass}>
              Clínica Medicar
            </NavLink>
            <NavLink to="/medicar-pet" className={navLinkClass}>
              Medicar Pet
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contato" className={navLinkClass}>
              Contato
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/area-do-cliente"
              className="hidden rounded-full border border-line-strong px-4 py-2 text-caption font-medium text-ink transition-colors hover:border-ink-muted hover:bg-surface sm:inline-flex"
            >
              Área do cliente
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-btn border border-line lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                {menuOpen ? (
                  <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" />
                ) : (
                  <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.5" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Drawer mobile */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-line bg-canvas shadow-[0_24px_48px_rgba(27,28,30,0.18)] lg:hidden"
        >
          <nav aria-label="Menu móvel" className="flex flex-col px-4 py-4">
            <Link to="/" className="border-b border-line py-3.5 text-body text-ink">
              Home
            </Link>
            <Link to="/sobre-nos" className="border-b border-line py-3.5 text-body text-ink">
              Sobre nós
            </Link>
            <button
              type="button"
              className="flex items-center justify-between border-b border-line py-3.5 text-left text-body text-ink"
              aria-expanded={mobileSolutionsOpen}
              onClick={() => setMobileSolutionsOpen((v) => !v)}
            >
              Soluções
              <svg
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className={`transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {mobileSolutionsOpen && (
              <div className="border-b border-line bg-surface px-3 py-2">
                <Link
                  to="/solucoes/empresa"
                  className="block py-2 text-body-sm font-medium text-medicar-red-deep"
                >
                  Para empresa →
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/solucoes/empresa/${s.slug}`}
                    className="block py-2 pl-3 text-body-sm text-ink-soft"
                  >
                    {s.cardTitle}
                  </Link>
                ))}
                <Link
                  to="/solucoes/para-voce"
                  className="block py-2 text-body-sm font-medium text-medicar-red-deep"
                >
                  Para você (Cartão Medicar) →
                </Link>
              </div>
            )}
            <Link to="/clinica-medicar" className="border-b border-line py-3.5 text-body text-ink">
              Clínica Medicar
            </Link>
            <Link to="/medicar-pet" className="border-b border-line py-3.5 text-body text-ink">
              Medicar Pet
            </Link>
            <Link to="/blog" className="border-b border-line py-3.5 text-body text-ink">
              Blog
            </Link>
            <Link to="/contato" className="border-b border-line py-3.5 text-body text-ink">
              Contato
            </Link>
            <Link
              to="/area-do-cliente"
              className="mt-4 inline-flex justify-center rounded-full border border-line-strong px-4 py-2.5 text-body-sm font-medium text-ink"
            >
              Área do cliente
            </Link>
            <a
              href={phones.emergency.tel}
              className="mt-3 inline-flex justify-center rounded-btn bg-medicar-red px-4 py-2.5 text-body-sm font-medium text-white"
            >
              Emergência 24h: {phones.emergency.display}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
