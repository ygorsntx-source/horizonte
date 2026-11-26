import { CITIES, getCity } from '@/lib/cities'
import { CityPage, cityMetadata } from '@/components/city-page'

export const dynamicParams = false

export function generateStaticParams() {
  return CITIES.map((city) => ({ cidade: city.slug }))
}

type Props = { params: Promise<{ cidade: string }> }

export async function generateMetadata({ params }: Props) {
  const { cidade } = await params
  return cityMetadata(getCity(cidade))
}

export default async function Page({ params }: Props) {
  const { cidade } = await params
  return <CityPage city={getCity(cidade)} />
}
