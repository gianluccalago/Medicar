import { useParams } from 'react-router-dom'
import { ServiceView } from '../components/ServiceView'
import { getService } from '../data/services'
import NotFound from './NotFound'

/** Rota /solucoes/empresa/:slug — resolve o serviço e aplica o template. */
export default function ServicePage() {
  const { slug } = useParams()
  const service = slug ? getService(slug) : undefined
  if (!service) return <NotFound />
  return <ServiceView service={service} />
}
