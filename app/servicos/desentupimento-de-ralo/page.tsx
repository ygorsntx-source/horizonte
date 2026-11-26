import { getService } from '@/lib/services'
import { ServicePage, serviceMetadata } from '@/components/service-page'

const service = getService('desentupimento-de-ralo')

export const metadata = serviceMetadata(service)

export default function Page() {
  return <ServicePage service={service} />
}
