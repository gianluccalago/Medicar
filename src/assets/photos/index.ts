/**
 * Fotografia oficial da Medicar, extraída da apresentação institucional e
 * otimizada para web (recortes com fundo transparente, WebP).
 * Todas com pessoas/equipes/ativos reais da marca.
 */
import team from './team.webp'
import coletivo from './coletivo.webp'
import areaProtegida from './area_protegida.webp'
import aeromedico from './aeromedico.webp'
import pet from './pet.webp'
import ambulance from './ambulance.webp'
import familia from './familia.webp'
import urgencia from './urgencia.webp'
import mission from './mission.webp'
import doctorHeadset from './doctor_headset.webp'

export const photos = {
  team,
  coletivo,
  areaProtegida,
  aeromedico,
  pet,
  ambulance,
  familia,
  urgencia,
  mission,
  doctorHeadset,
} as const

export type PhotoKey = keyof typeof photos

/** Foto de hero por serviço B2B (slug → import). */
export const servicePhotos: Record<string, string> = {
  'urgencia-e-emergencia-24h': urgencia,
  'area-protegida': areaProtegida,
  'coletivo-empresarial': coletivo,
  telemedicina: doctorHeadset,
  'terceirizacao-de-ambulatorio': team,
  'locacao-de-ambulancia': ambulance,
  'remocao-terrestre': mission,
  'transporte-aeromedico': aeromedico,
}
