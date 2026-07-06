import { authorizedClients, clientsFallbackText } from '../data/clients'

/**
 * Faixa "Empresas que confiam na Medicar".
 * Renderiza SOMENTE clientes com autorização de uso de marca, em carrossel de
 * rolagem automática contínua (marquee) com pausa on-hover. Enquanto nenhum
 * cliente estiver autorizado, exibe a contagem agregada sem citar nomes.
 */
export function LogoStrip() {
  return (
    <div>
      <p className="text-center text-caption font-medium uppercase tracking-[0.08em] text-ink-muted">
        Empresas que confiam na Medicar
      </p>

      {authorizedClients.length > 0 ? (
        <div
          className="group relative mt-8 overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          }}
        >
          {/* Trilha duplicada para loop contínuo; pausa quando o mouse entra */}
          <ul className="flex w-max animate-marquee items-center gap-x-12 group-hover:[animation-play-state:paused]">
            {[...authorizedClients, ...authorizedClients].map((c, i) => (
              <li
                key={`${c.name}-${i}`}
                aria-hidden={i >= authorizedClients.length}
                className="shrink-0 text-body-lg font-sans text-ink-muted"
              >
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mx-auto mt-6 max-w-xl text-center text-body-lg text-ink-soft">
          {clientsFallbackText}
        </p>
      )}
    </div>
  )
}
