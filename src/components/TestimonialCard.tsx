import type { Testimonial } from '../data/testimonials'

/** Card de depoimento. Exibe selo enquanto o texto for placeholder (approved=false). */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, role, sector, company, approved } = testimonial
  return (
    <figure className="flex h-full flex-col rounded-card border border-line bg-canvas p-6">
      <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" className="text-red-wash">
        <path
          d="M0 18V10.8C0 4.8 3.6 1.2 9.6 0l1.2 2.4c-3.6 1.2-5.4 3.2-5.4 6h4.2V18H0zm14.4 0V10.8c0-6 3.6-9.6 9.6-10.8l1.2 2.4c-3.6 1.2-5.4 3.2-5.4 6H24V18h-9.6z"
          fill="currentColor"
          transform="scale(0.9)"
        />
      </svg>
      <blockquote className="mt-3 flex-1 text-body-sm text-ink-soft">“{quote}”</blockquote>
      <figcaption className="mt-4 text-caption">
        <span className="font-medium text-ink">{role}</span>
        <span className="text-ink-muted">, {company ?? sector}</span>
      </figcaption>
      {!approved && (
        <p className="mt-3 inline-flex self-start rounded-badge bg-surface px-1.5 py-0.5 text-[11px] text-ink-muted">
          Depoimento ilustrativo — em aprovação
        </p>
      )}
    </figure>
  )
}
