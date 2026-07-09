/**
 * Fotografia oficial da Medicar, extraída da apresentação institucional e
 * otimizada para web (recortes com fundo transparente e fotos retangulares,
 * WebP). Todas com pessoas/equipes/ativos reais da marca.
 */
import team from './team.webp'
import coletivo from './coletivo.webp'
import areaProtegida from './area_protegida.webp'
import aeromedico from './aeromedico.webp'
import pet from './pet.webp'
import ambulance from './ambulance.webp'
import urgencia from './urgencia.webp'
import mission from './mission.webp'
import doctorHeadset from './doctor_headset.webp'
// Fotos retangulares (cenas) — posters "Como funciona" e painéis
import centralAtendente from './central_atendente.webp'
import centralSoftware from './central_software.webp'
import aphAtendimento from './aph_atendimento.webp'
import colaboradora from './colaboradora.webp'
import telemedicinaApp from './telemedicina_app.webp'
import nr1Worker from './nr1_worker.webp'
import maosCuidado from './maos_cuidado.webp'
import ambulanciaInterior from './ambulancia_interior.webp'
import petTeleorientacao from './pet_teleorientacao.webp'
import remocaoEquipe from './remocao_equipe.webp'
import clinicDoctor from './clinic_doctor.webp'
import oculosVideochamada from './oculos_videochamada.webp'
import doctorMale from './doctor_male.webp'

export const photos = {
  team,
  coletivo,
  areaProtegida,
  aeromedico,
  pet,
  ambulance,
  urgencia,
  mission,
  doctorHeadset,
  centralAtendente,
  centralSoftware,
  aphAtendimento,
  colaboradora,
  telemedicinaApp,
  nr1Worker,
  maosCuidado,
  ambulanciaInterior,
  petTeleorientacao,
  remocaoEquipe,
  clinicDoctor,
  doctorMale,
  oculosVideochamada,
} as const

export type PhotoKey = keyof typeof photos

/** Foto de hero por serviço B2B (slug → import). Recortes com transparência. */
export const servicePhotos: Record<string, string> = {
  'urgencia-e-emergencia-24h': urgencia,
  'area-protegida': areaProtegida,
  'coletivo-empresarial': coletivo,
  telemedicina: doctorHeadset,
  'terceirizacao-de-ambulatorio': team,
  'locacao-de-ambulancia': ambulance,
  'remocao-terrestre': mission,
  'transporte-aeromedico': aeromedico,
  'nr-1': coletivo,
  'lar-protegido': maosCuidado,
}

/**
 * Poster do "Como funciona" por serviço — cena FOTOGRÁFICA (retangular,
 * object-cover), sempre diferente da foto do hero para não repetir imagem
 * na mesma página.
 */
export const howPhotos: Record<string, string> = {
  'urgencia-e-emergencia-24h': centralAtendente,
  'area-protegida': aphAtendimento,
  'coletivo-empresarial': colaboradora,
  telemedicina: telemedicinaApp,
  'terceirizacao-de-ambulatorio': doctorMale,
  'locacao-de-ambulancia': ambulanciaInterior,
  'remocao-terrestre': remocaoEquipe,
  'transporte-aeromedico': centralSoftware,
  'nr-1': nr1Worker,
  'lar-protegido': centralAtendente,
}
