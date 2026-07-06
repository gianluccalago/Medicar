import { AsteriskMark } from './AsteriskMark'
import { company } from '../data/site'

interface LogoProps {
  /** 'default' = tema claro · 'onRed' = wordmark branco para fundos vermelhos */
  variant?: 'default' | 'onRed'
  withTagline?: boolean
}

/** Logo Medicar: asterisco 8 pontas + wordmark minúsculo + tagline. */
export function Logo({ variant = 'default', withTagline = true }: LogoProps) {
  const onRed = variant === 'onRed'
  return (
    <span className="inline-flex items-center gap-2.5">
      {onRed ? (
        <AsteriskMark size={34} variant="white" className="text-white" />
      ) : (
        <AsteriskMark size={34} />
      )}
      <span className="flex flex-col leading-none">
        <span
          className={`text-[22px] font-semi tracking-[-0.02em] lowercase ${
            onRed ? 'text-white' : 'text-ink'
          }`}
        >
          medicar<span className={onRed ? 'text-white/70' : 'text-medicar-red'}>.</span>
        </span>
        {withTagline && (
          <span
            className={`mt-0.5 text-[10.5px] tracking-[0.02em] ${
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
