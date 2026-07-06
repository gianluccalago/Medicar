import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { phones } from '../data/site'
import { services } from '../data/services'

/*
 * Estrutura de navegação — dropdowns fluidos (hover) com as opções da Medicar.
 * "Para Empresas" consome o array de serviços; os demais são listas curtas.
 */
interface MenuItem {
  label: string
  to: string
}
interface Menu {
  label: string
  items: readonly MenuItem[]
}

const menus: readonly Menu[] = [
  {
    label: 'A Medicar',
    items: [
      { label: 'Quem somos', to: '/quem-somos' },
      { label: 'Clínica Medicar', to: '/clinica-medicar' },
      { label: 'Área do cliente', to: '/area-do-cliente' },
    ],
  },
  {
    label: 'Para você',
    items: [
      { label: 'Cartão Medicar', to: '/solucoes/para-voce' },
      { label: 'Lar Protegido', to: '/solucoes/lar-protegido' },
      { label: 'Medicar Pet', to: '/medicar-pet' },
    ],
  },
  {
    label: 'Para Empresas',
    items: [
      { label: 'Todas as soluções', to: '/solucoes/empresa' },
      ...services.map((s) => ({ label: s.cardTitle, to: `/solucoes/empresa/${s.slug}` })),
    ],
  },
]

/* TODO: URL oficial do ATS (Senior) de vagas da Medicar */
const careersUrl = 'https://medicar.senior.com.br'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileSub, setMobileSub] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setOpenMenu(null)
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Hover fluido: abre imediato, fecha com pequena tolerância
  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120)
  }

  return (
    <header className="sticky top-0 z-40 bg-canvas">
      {/* Barra utilitária — Emergência em destaque */}
      <div className="bg-medicar-red text-white">
        <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-2 md:px-6">
          <span className="hidden text-body-sm font-medium sm:block">Seja bem-vindo à Medicar</span>
          <div className="flex flex-1 items-center justify-end gap-4 sm:gap-7">
            <a
              href={phones.emergency.tel}
              className="group inline-flex items-center gap-2.5 rounded-full bg-white/0 px-1 transition-colors hover:bg-white/10"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-medicar-red">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 8v8M8 12h8"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-white/85">
                  Emergência 24h
                </span>
                <span className="block text-body font-bold tracking-tight">
                  {phones.emergency.display}
                </span>
              </span>
            </a>
            <a
              href={phones.commercial.tel}
              className="hidden items-center gap-2 md:inline-flex"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11 11 0 003.4.55 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11 11 0 00.55 3.4 1 1 0 01-.24 1l-2.2 2.4z" />
                </svg>
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] font-medium uppercase tracking-wide text-white/75">
                  Comercial/SAC
                </span>
                <span className="block text-body-sm font-semi">{phones.commercial.display}</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <div className="border-b border-line bg-canvas">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex h-[68px] max-w-page items-stretch justify-between gap-4 px-4 md:px-6"
        >
          <Link to="/" aria-label="Medicar — página inicial" className="flex items-center">
            <Logo />
          </Link>

          {/* Menus desktop */}
          <div className="hidden items-stretch lg:flex">
            {menus.map((menu) => {
              const isOpen = openMenu === menu.label
              return (
                <div
                  key={menu.label}
                  className="relative flex items-stretch"
                  onMouseEnter={() => open(menu.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(isOpen ? null : menu.label)}
                    className={`inline-flex items-center gap-1.5 px-5 text-body-sm font-medium transition-colors ${
                      isOpen ? 'bg-medicar-red text-white' : 'text-ink hover:text-medicar-red-deep'
                    }`}
                  >
                    {menu.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                      className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute left-0 top-full min-w-[240px] rounded-b-card border border-t-0 border-line bg-canvas py-2 shadow-[0_16px_40px_rgba(27,28,30,0.12)]">
                      {menu.items.map((item) => (
                        <Link
                          key={item.to + item.label}
                          to={item.to}
                          className="block px-5 py-2 text-body-sm text-ink-soft transition-colors hover:bg-surface hover:text-medicar-red-deep"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `inline-flex items-center px-5 text-body-sm font-medium transition-colors ${
                  isActive ? 'text-medicar-red-deep' : 'text-ink hover:text-medicar-red-deep'
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contato"
              className={({ isActive }) =>
                `inline-flex items-center px-5 text-body-sm font-medium transition-colors ${
                  isActive ? 'text-medicar-red-deep' : 'text-ink hover:text-medicar-red-deep'
                }`
              }
            >
              Contato
            </NavLink>
          </div>

          {/* Ações à direita */}
          <div className="flex items-center gap-2">
            <a
              href={careersUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-btn border border-medicar-red px-4 py-2 text-body-sm font-medium text-medicar-red transition-colors hover:bg-red-wash xl:inline-flex"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
              </svg>
              Trabalhe Conosco
            </a>
            <Link
              to="/area-do-cliente"
              className="hidden items-center gap-2 rounded-btn bg-medicar-red px-4 py-2 text-body-sm font-medium text-white transition-colors hover:bg-medicar-red-deep sm:inline-flex"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
              </svg>
              Área do Cliente
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
          className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-7rem)] overflow-y-auto border-t border-line bg-canvas shadow-[0_24px_48px_rgba(27,28,30,0.18)] lg:hidden"
        >
          <nav aria-label="Menu móvel" className="flex flex-col px-4 py-4">
            {menus.map((menu) => {
              const isOpen = mobileSub === menu.label
              return (
                <div key={menu.label} className="border-b border-line">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3.5 text-left text-body text-ink"
                    aria-expanded={isOpen}
                    onClick={() => setMobileSub(isOpen ? null : menu.label)}
                  >
                    {menu.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 10 10"
                      aria-hidden="true"
                      className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="bg-surface px-3 py-1">
                      {menu.items.map((item) => (
                        <Link
                          key={item.to + item.label}
                          to={item.to}
                          className="block py-2 text-body-sm text-ink-soft"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <Link to="/blog" className="border-b border-line py-3.5 text-body text-ink">
              Blog
            </Link>
            <Link to="/contato" className="border-b border-line py-3.5 text-body text-ink">
              Contato
            </Link>
            <a
              href={careersUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex justify-center rounded-btn border border-medicar-red px-4 py-2.5 text-body-sm font-medium text-medicar-red"
            >
              Trabalhe Conosco
            </a>
            <Link
              to="/area-do-cliente"
              className="mt-2 inline-flex justify-center rounded-btn bg-medicar-red px-4 py-2.5 text-body-sm font-medium text-white"
            >
              Área do Cliente
            </Link>
            <a
              href={phones.emergency.tel}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-btn border border-medicar-red px-4 py-2.5 text-body-sm font-bold text-medicar-red"
            >
              Emergência 24h: {phones.emergency.display}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
