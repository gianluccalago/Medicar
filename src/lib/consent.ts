/**
 * Consentimento de cookies (banner LGPD).
 * Qualquer analytics futuro DEVE checar `getCookieConsent() === 'accepted'`
 * antes de carregar.
 */

const KEY = 'medicar-cookie-consent'

export type CookieConsent = 'accepted' | 'rejected' | null

export function getCookieConsent(): CookieConsent {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'accepted' || v === 'rejected' ? v : null
  } catch {
    return null
  }
}

export function setCookieConsent(value: Exclude<CookieConsent, null>): void {
  try {
    localStorage.setItem(KEY, value)
  } catch {
    /* storage indisponível (modo privado) — banner reaparece na próxima visita */
  }
}
