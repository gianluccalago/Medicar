import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { company, phones, whatsapp, social } from '../data/site'
import { services } from '../data/services'

const colTitle = 'text-body font-sans text-white'
const colLink = 'text-body-sm text-white/75 transition-colors hover:text-white'

/* Ícones de redes sociais simples (adendo dos prints). */
const socialItems = [
  {
    href: social.instagram,
    label: 'Instagram',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z',
  },
  {
    href: social.youtube,
    label: 'YouTube',
    path: 'M23.5 6.5a3 3 0 00-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 00.5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1c.5-1.9.5-5.5.5-5.5s0-3.6-.5-5.5zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z',
  },
  {
    href: social.facebook,
    label: 'Facebook',
    path: 'M24 12a12 12 0 10-13.9 11.9v-8.4H7.1V12h3v-2.6c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.23 2.6.23v2.9h-1.5c-1.4 0-1.9.9-1.9 1.8V12h3.3l-.53 3.5h-2.8v8.4A12 12 0 0024 12z',
  },
  {
    href: social.linkedin,
    label: 'LinkedIn',
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33 0-3.04-1.85-3.04s-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z',
  },
]

export function Footer() {
  return (
    <footer className="bg-medicar-wine text-white">
      <div className="mx-auto max-w-page px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            {/* Logo sem caixa/box ao redor (adendo item 11) */}
            <Logo variant="onRed" />
            <p className="mt-4 max-w-xs text-body-sm leading-relaxed text-white/75">
              Há mais de {new Date().getFullYear() - company.founded} anos, soluções completas em
              saúde para você ou para a sua empresa.
            </p>
            <a
              href={phones.emergency.tel}
              className="mt-4 inline-flex items-center gap-2 text-body-sm font-medium text-white hover:underline"
            >
              Emergência 24h: {phones.emergency.display}
            </a>
          </div>

          <div>
            <h2 className={colTitle}>Links úteis</h2>
            <ul className="mt-3 space-y-2">
              <li><Link to="/quem-somos" className={colLink}>Quem somos</Link></li>
              <li><Link to="/clinica-medicar" className={colLink}>Clínica Medicar</Link></li>
              <li><Link to="/blog" className={colLink}>Blog</Link></li>
              <li><Link to="/area-do-cliente" className={colLink}>Área do cliente</Link></li>
              <li><Link to="/contato" className={colLink}>Contato</Link></li>
            </ul>
          </div>

          <div>
            <h2 className={colTitle}>Soluções</h2>
            <ul className="mt-3 space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/solucoes/empresa/${s.slug}`} className={colLink}>
                    {s.cardTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/solucoes/para-voce" className={colLink}>
                  Cartão Medicar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={colTitle}>Contatos</h2>
            <ul className="mt-3 space-y-2 text-body-sm text-white/75">
              <li>
                <a href={phones.commercial.tel} className={colLink}>
                  Comercial/SAC: {phones.commercial.display}
                </a>
              </li>
              <li>
                <a href={whatsapp.general.url} target="_blank" rel="noopener noreferrer" className={colLink}>
                  WhatsApp: {whatsapp.general.display}
                </a>
              </li>
              <li>
                <a href={phones.clinic.tel} className={colLink}>
                  Clínica: {phones.clinic.display}
                </a>
              </li>
            </ul>
            <ul className="mt-4 flex gap-3">
              {socialItems.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption leading-relaxed text-white/60">
            {company.legalName} · CNPJ {company.cnpj} · Resp. técnica: {company.technicalDirector}
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-caption">
            <li><Link to="/politica-de-privacidade" className="text-white/60 hover:text-white">Privacidade</Link></li>
            <li><Link to="/termos-de-uso" className="text-white/60 hover:text-white">Termos de Uso</Link></li>
            <li><Link to="/politica-de-cookies" className="text-white/60 hover:text-white">Cookies</Link></li>
          </ul>
        </div>
        <p className="mt-4 text-caption text-white/50">
          © {new Date().getFullYear()} Medicar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
