import { Reveal } from './Reveal'
import { Counter } from './Counter'
import { stats, statsIntro, type StatIconKey } from '../data/numbers'

/* Ícones de linha brancos da faixa de números (clone do site anterior). */
const icons: Record<StatIconKey, React.ReactNode> = {
  // Pergaminho/certificado — anos de história
  scroll: (
    <>
      <path d="M8 4h9a2 2 0 012 2v1.5" />
      <path d="M19 7.5a1.75 1.75 0 100-3.5" />
      <path d="M8 4a2 2 0 00-2 2v12a2 2 0 01-2 2h11a2 2 0 002-2v-6" />
      <path d="M9 9h4M9 12.5h5M9 16h3" />
      <circle cx="16.5" cy="12.5" r="1.5" />
    </>
  ),
  // Sirene/giroflex — ambulâncias
  siren: (
    <>
      <path d="M7 16v-4a5 5 0 0110 0v4" />
      <path d="M5 16h14v3H5z" />
      <path d="M12 4v2M5.5 6.5L7 8M18.5 6.5L17 8M3.5 11H5.5M18.5 11h2" />
    </>
  ),
  // Estetoscópio — médicos
  stethoscope: (
    <>
      <path d="M5 4v4a4 4 0 008 0V4" />
      <path d="M5 4h1.5M13 4h-1.5" />
      <path d="M9 12v3a4.5 4.5 0 009 0v-2" />
      <circle cx="18" cy="10.5" r="2.2" />
    </>
  ),
  // Crachá — colaboradores
  badge: (
    <>
      <rect x="6" y="6" width="12" height="15" rx="2" />
      <path d="M10 6V4.5A1.5 1.5 0 0111.5 3h1A1.5 1.5 0 0114 4.5V6" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M8.5 18c.5-1.8 1.9-2.8 3.5-2.8s3 1 3.5 2.8" />
    </>
  ),
  // Coração com batimento — vidas protegidas
  heart: (
    <>
      <path d="M12 20s-7-4.6-8.6-9A5 5 0 0112 6.5 5 5 0 0120.6 11c-.5 1.4-1.6 2.9-2.9 4.2" />
      <path d="M7 12.5h3l1.2-2.4 1.6 4 1.2-1.6h3" />
    </>
  ),
}

/**
 * Faixa "Grandes números são a nossa especialidade" — clone do site anterior:
 * fundo vermelho full-bleed, título centralizado em duas cores, texto de apoio
 * branco, 5 colunas com ícone branco, número gigante e rótulo em caixa alta,
 * separadas por divisórias verticais sutis.
 */
export function StatsBand() {
  return (
    <section aria-label="Grandes números da Medicar" className="bg-medicar-red">
      <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-heading-sm leading-[1.12] md:text-heading">
            <span className="text-ink">Grandes números são</span>
            <br />
            <span className="text-white">a nossa especialidade</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-body-sm font-medium leading-relaxed text-white">
            {statsIntro}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-white/30">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              // No mobile (2 colunas), o 5º número ocupa a linha inteira centralizado
              className={`lg:px-6 ${i === stats.length - 1 ? 'max-sm:col-span-2' : ''}`}
            >
              <div className="flex h-full flex-col items-center text-center text-white">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icons[s.icon]}
                </svg>
                {/* tabular-nums: dígitos de largura fixa — o número não "dança" ao animar */}
                <span className="mt-5 text-[44px] font-bold leading-none tracking-[-0.02em] tabular-nums">
                  <Counter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </span>
                <span className="mt-3 text-[13.5px] font-bold uppercase leading-snug tracking-[0.04em]">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
