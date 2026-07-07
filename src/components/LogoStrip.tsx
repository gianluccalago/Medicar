import { authorizedClients, clientsFallbackText } from '../data/clients'

/**
 * "Empresas que confiam na Medicar" — marquee CSS contínuo (track duplicado),
 * pausa on-hover, máscara de fade nas bordas. Renderiza SOMENTE clientes com
 * `authorized === true`; fallback agregado só se a lista ficar vazia.
 * prefers-reduced-motion → congela e cai para scroll horizontal manual.
 */
export function LogoStrip() {
  const items = authorizedClients

  return (
    <div>
      <p className="text-center text-caption font-medium uppercase tracking-[0.08em] text-ink-muted">
        Empresas que confiam na Medicar
      </p>

      {items.length > 0 ? (
        <div
          className="group relative mt-8 overflow-hidden"
          aria-label="Empresas que confiam na Medicar"
          role="group"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)',
          }}
        >
          {/*
            Track duplicado (2x) para loop contínuo sem emenda. Pausa no hover.
            Em prefers-reduced-motion o track não anima e o container permite
            rolagem horizontal manual (ver classe motion-reduce abaixo).
          */}
          <ul className="flex w-max animate-marquee items-center gap-x-14 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
            {[...items, ...items].map((c, i) => (
              <li
                key={`${c.name}-${i}`}
                aria-hidden={i >= items.length}
                className="flex h-10 shrink-0 items-center"
              >
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-9 w-auto opacity-70 grayscale transition group-hover:opacity-100"
                  />
                ) : (
                  // Placeholder textual até o asset do logo chegar.
                  <span className="whitespace-nowrap text-body-lg font-medium text-ink-muted">
                    {c.name}
                  </span>
                )}
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
