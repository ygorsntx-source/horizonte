import { Clock, MapPin, FileCheck, Building2 } from 'lucide-react'

const items = [
  { icon: Clock, label: 'Atendimento 24 horas' },
  { icon: MapPin, label: 'Belo Horizonte e Região Metropolitana' },
  { icon: FileCheck, label: 'Orçamento antes da execução' },
  { icon: Building2, label: 'Residências, empresas e condomínios' },
]

export function TrustStrip() {
  return (
    <section className="border-b border-black/5 bg-brand-blue text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-4 px-4 py-5 md:grid-cols-4 md:px-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon className="size-5 shrink-0 text-brand-orange" aria-hidden="true" />
            <span className="text-sm font-semibold leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
