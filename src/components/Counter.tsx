import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  durationMs?: number
}

function format(n: number, decimals: number): string {
  return n.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

/** Contador animado ao entrar na viewport; estático com prefers-reduced-motion. */
export function Counter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  durationMs = 1400,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-48px' })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    // Sem animação: mostra o valor final direto, sem depender do scroll
    if (reduced) {
      setDisplay(value)
      return
    }
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduced, value, durationMs])

  return (
    <span ref={ref}>
      {prefix}
      {format(display, decimals)}
      {suffix}
    </span>
  )
}
