import { getService } from '@/lib/services'
import { ServicePage, serviceMetadata } from '@/components/service-page'

const service = getService('limpeza-de-caixa-de-gordura')

export const metadata = serviceMetadata(service)

export default function Page() {
  return <ServicePage service={service} />
}
