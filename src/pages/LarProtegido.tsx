import { ServiceView } from '../components/ServiceView'
import { larProtegido } from '../data/services'

/** Rota /solucoes/lar-protegido — proteção emergencial residencial. */
export default function LarProtegido() {
  return <ServiceView service={larProtegido} origin="lar-protegido" />
}
