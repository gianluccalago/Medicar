import { Reveal } from './Reveal'
import { Counter } from './Counter'
import { stats } from '../data/numbers'

/**
 * Faixa dos 5 grandes números com contexto descritivo.
 * Layout editorial: número grande + rótulo + contexto (quando/quem/onde).
 */
export function StatsBand() {
  return (
    <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.06} className="h-full">
          <div className="flex h-full flex-col bg-canvas p-6">
            <span className="text-[40px] font-semi leading-none tracking-[-0.03em] text-ink">
              <Counter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.decimals ?? 0}
              />
            </span>
            <span className="mt-3 text-body-sm font-medium text-medicar-red-deep">{s.label}</span>
            <span className="mt-2 text-caption leading-relaxed text-ink-muted">{s.context}</span>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
