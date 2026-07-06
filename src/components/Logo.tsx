import { AsteriskMark } from './AsteriskMark'
import { company } from '../data/site'

interface LogoProps {
  /** 'default' = tema claro · 'onRed' = wordmark branco para fundos vermelhos */
  variant?: 'default' | 'onRed'
  withTagline?: boolean
}

/** Logo Medicar: asterisco 8 pontas + wordmark arredondado + tagline. */
export function Logo({ variant = 'default', withTagline = true }: LogoProps) {
  const onRed = variant === 'onRed'
  return (
    <span className="inline-flex items-center gap-2.5">
      <AsteriskMark size={36} variant={onRed ? 'white' : 'brand'} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-rounded text-[23px] font-semi lowercase leading-none tracking-[-0.01em] ${
            onRed ? 'text-white' : 'text-ink'
          }`}
        >
          medicar<span className={onRed ? 'text-white/70' : 'text-medicar-red'}>.</span>
        </span>
        {withTagline && (
          <span
            className={`mt-1 text-[10.5px] tracking-[0.01em] ${
              onRed ? 'text-white/80' : 'text-ink-muted'
            }`}
          >
            {company.tagline}
          </span>
        )}
      </span>
    </span>
  )
}
