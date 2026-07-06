import { authorizedClients, clientsFallbackText } from '../data/clients'

/**
 * Faixa "Alguns dos nossos clientes".
 * Renderiza SOMENTE clientes com autorização de uso de marca; enquanto não
 * houver nenhum, mostra a contagem agregada sem citar nomes.
 */
export function LogoStrip() {
  return (
    <div className="mx-auto max-w-page px-4 md:px-6">
      <p className="text-center text-caption font-medium uppercase tracking-[0.08em] text-ink-muted">
        Alguns dos nossos clientes
      </p>
      {authorizedClients.length > 0 ? (
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {authorizedClients.map((c) => (
            <li key={c.name} className="text-body-lg font-medium text-ink-muted">
              {c.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mx-auto mt-6 max-w-xl text-center text-body-lg text-ink-soft">
          {clientsFallbackText}
        </p>
      )}
    </div>
  )
}
