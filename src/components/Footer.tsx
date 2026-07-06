import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { company, phones, whatsapp, social } from '../data/site'
import { services } from '../data/services'

const colTitle = 'text-caption font-medium uppercase tracking-[0.08em] text-ink'
const colLink = 'text-body-sm text-ink-soft transition-colors hover:text-ink'

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-page px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-body-sm text-ink-soft">
              Soluções completas em saúde para você ou para a sua empresa, desde {company.founded}.
            </p>
            <a
              href={phones.emergency.tel}
              className="mt-4 inline-flex items-center gap-2 text-body-sm font-medium text-medicar-red-deep hover:underline"
            >
              {phones.emergency.label}: {phones.emergency.display}
            </a>
          </div>

          <div>
            <h2 className={colTitle}>Institucional</h2>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/sobre-nos" className={colLink}>Sobre nós</Link></li>
              <li><Link to="/clinica-medicar" className={colLink}>Clínica Medicar</Link></li>
              <li><Link to="/medicar-pet" className={colLink}>Medicar Pet</Link></li>
              <li><Link to="/blog" className={colLink}>Blog</Link></li>
              <li><Link to="/area-do-cliente" className={colLink}>Área do cliente</Link></li>
              <li><Link to="/contato" className={colLink}>Contato</Link></li>
            </ul>
          </div>

          <div>
            <h2 className={colTitle}>Soluções</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/solucoes/empresa/${s.slug}`} className={colLink}>
                    {s.cardTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/solucoes/para-voce" className={colLink}>
                  Cartão Medicar (para você)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={colTitle}>Contatos</h2>
            <ul className="mt-4 space-y-2.5 text-body-sm text-ink-soft">
              <li>
                <a href={phones.emergency.tel} className={colLink}>
                  {phones.emergency.label}: {phones.emergency.display}
                </a>
              </li>
              <li>
                <a href={phones.commercial.tel} className={colLink}>
                  {phones.commercial.label}: {phones.commercial.display}
                </a>
              </li>
              <li>
                <a href={whatsapp.general.url} target="_blank" rel="noopener noreferrer" className={colLink}>
                  WhatsApp: {whatsapp.general.display}
                </a>
              </li>
              <li>
                <a href={whatsapp.clinic.url} target="_blank" rel="noopener noreferrer" className={colLink}>
                  WhatsApp Clínica: {whatsapp.clinic.display}
                </a>
              </li>
              <li>
                <a href={phones.clinic.tel} className={colLink}>
                  Clínica (fixo): {phones.clinic.display}
                </a>
              </li>
            </ul>
            <h2 className={`${colTitle} mt-6`}>Redes sociais</h2>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <li><a href={social.instagram} target="_blank" rel="noopener noreferrer" className={colLink}>Instagram</a></li>
              <li><a href={social.youtube} target="_blank" rel="noopener noreferrer" className={colLink}>YouTube</a></li>
              <li><a href={social.facebook} target="_blank" rel="noopener noreferrer" className={colLink}>Facebook</a></li>
              <li><a href={social.linkedin} target="_blank" rel="noopener noreferrer" className={colLink}>LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line-strong pt-6">
          <p className="text-caption text-ink-muted">
            {company.legalName} · CNPJ {company.cnpj}
            <br />
            {company.headquarters} · Responsável técnica: {company.technicalDirector}
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-caption">
              <li><Link to="/politica-de-privacidade" className="text-ink-muted hover:text-ink">Política de Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="text-ink-muted hover:text-ink">Termos de Uso</Link></li>
              <li><Link to="/politica-de-cookies" className="text-ink-muted hover:text-ink">Política de Cookies</Link></li>
            </ul>
            <p className="text-caption text-ink-muted">
              © {new Date().getFullYear()} Medicar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
