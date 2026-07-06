import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getCookieConsent, setCookieConsent } from '../lib/consent'

/**
 * Banner de cookies (LGPD). Qualquer analytics futuro só pode carregar
 * após consentimento — ver src/lib/consent.ts.
 */
export function CookieBanner() {
  const [consent, setConsent] = useState(getCookieConsent)

  if (consent !== null) return null

  const decide = (value: 'accepted' | 'rejected') => {
    setCookieConsent(value)
    setConsent(value)
  }

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-card border border-line bg-canvas p-4 shadow-[0_12px_32px_rgba(27,28,30,0.12)] sm:inset-x-6"
    >
      <p className="text-body-sm text-ink-soft">
        Usamos cookies essenciais para o funcionamento do site. Cookies de análise só serão
        utilizados com o seu consentimento.{' '}
        <Link to="/politica-de-cookies" className="font-medium text-medicar-red-deep hover:underline">
          Política de Cookies
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => decide('accepted')}
          className="rounded-btn bg-ink px-4 py-2 text-caption font-medium text-white transition-colors hover:bg-ink-soft"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={() => decide('rejected')}
          className="rounded-btn border border-line-strong px-4 py-2 text-caption font-medium text-ink transition-colors hover:bg-surface"
        >
          Recusar
        </button>
      </div>
    </div>
  )
}
