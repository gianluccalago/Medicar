import type { SolutionIconKey } from '../data/solutions'

interface SolutionIconProps {
  name: SolutionIconKey
  size?: number
  className?: string
}

/*
 * Ícones de linha (stroke) para os cards de "Nossas Soluções", recriados
 * fiéis à referência do adendo. Cor via currentColor (vermelho Medicar).
 */
const paths: Record<SolutionIconKey, React.ReactNode> = {
  // Hospital — Área Protegida
  hospital: (
    <>
      <path d="M4 21V8l8-4 8 4v13" />
      <path d="M2 21h20" />
      <path d="M12 7.5v3M10.5 9h3" />
      <path d="M9 21v-4h6v4" />
      <path d="M7 12h1.5M15.5 12H17M7 15h1.5M15.5 15H17" />
    </>
  ),
  // Escudo com pessoas — Coletivo Empresarial
  'shield-people': (
    <>
      <path d="M12 3l7 2.5v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10v-5L12 3z" />
      <circle cx="9.5" cy="10" r="1.6" />
      <circle cx="14.5" cy="10" r="1.6" />
      <path d="M7 15.5c0-1.5 1.1-2.5 2.5-2.5s2.5 1 2.5 2.5M12 15.5c0-1.5 1.1-2.5 2.5-2.5s2.5 1 2.5 2.5" />
    </>
  ),
  // Prancheta médica — Terceirização de Ambulatório
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a3 3 0 016 0" />
      <path d="M12 10v5M9.5 12.5h5" />
    </>
  ),
  // Cérebro com coração — Gestão de Risco Psicossocial 360º
  'brain-heart': (
    <>
      <path d="M8.5 5A3 3 0 006 8a2.6 2.6 0 00-1.2 4.8A3 3 0 006 18a3 3 0 003 2.5" />
      <path d="M9 4.8V20.5" />
      <path d="M9 5a3 3 0 013 3" />
      <path d="M15.5 11.2c1.2-1.1 3.2-.3 3.2 1.3 0 1.4-1.8 2.6-3.2 3.7-1.4-1.1-3.2-2.3-3.2-3.7 0-1.6 2-2.4 3.2-1.3z" />
    </>
  ),
  // Casa com coração — Lar Protegido
  'house-heart': (
    <>
      <path d="M4 11l8-6 8 6" />
      <path d="M6 10v10h12V10" />
      <path d="M12 13.4c1-1 2.7-.3 2.7 1 0 1.2-1.5 2.2-2.7 3.1-1.2-.9-2.7-1.9-2.7-3.1 0-1.3 1.7-2 2.7-1z" />
    </>
  ),
  // Celular / telemedicina — cruz médica na tela
  telemedicine: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M12 7.5v4M10 9.5h4" />
      <path d="M9 17h6" />
    </>
  ),
  // Celular com pata — Medicar Pet
  'phone-paw': (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <circle cx="10" cy="9.5" r="0.9" />
      <circle cx="14" cy="9.5" r="0.9" />
      <circle cx="8.6" cy="12" r="0.8" />
      <circle cx="15.4" cy="12" r="0.8" />
      <path d="M10 13.5c0-1.1 1-1.8 2-1.8s2 .7 2 1.8-1 2-2 2-2-.9-2-2z" />
    </>
  ),
  // Ambulância — Locação de Ambulâncias
  ambulance: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="7.5" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
      <path d="M7.5 9.5v3M6 11h3" />
    </>
  ),
}

export function SolutionIcon({ name, size = 34, className }: SolutionIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  )
}
