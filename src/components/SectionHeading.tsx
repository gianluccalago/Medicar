import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  /** Cores invertidas para faixas vermelhas */
  onRed?: boolean
}

export function SectionHeading({ eyebrow, title, lead, align = 'left', onRed = false }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p
          className={`mb-3 text-caption font-medium uppercase tracking-[0.08em] ${
            onRed ? 'text-white/75' : 'text-medicar-red-deep'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-heading-sm font-medium md:text-heading ${onRed ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-body-lg ${onRed ? 'text-white/85' : 'text-ink-soft'}`}>{lead}</p>
      )}
    </Reveal>
  )
}
