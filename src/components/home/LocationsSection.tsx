import { MapPin, Phone, ExternalLink } from 'lucide-react'

interface Location {
  city: string
  address: string
  phone: string
  mapsLink: string
}

const locations: Location[] = [
  {
    city: 'São Paulo',
    address: 'Av. Exemplo, 123 - Jardins, São Paulo - SP',
    phone: '(11) 9999-9999',
    mapsLink: 'https://maps.google.com',
  },
  {
    city: 'Belo Horizonte',
    address: 'Rua Exemplo, 456 - Savassi, Belo Horizonte - MG',
    phone: '(31) 9999-9999',
    mapsLink: 'https://maps.google.com',
  },
]

export default function LocationsSection() {
  return (
    <section className="py-24 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossas <span className="text-gold-500">Unidades</span>
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Duas clínicas premium para melhor atendê-lo em São Paulo e Belo
            Horizonte
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-navy-800 rounded-3xl p-8 border border-gold-500/10 hover:border-gold-500/30 transition-all"
            >
              {/* City Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {location.city}
                </h3>
              </div>

              {/* Address */}
              <p className="text-navy-200 mb-4 pl-16">{location.address}</p>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-6 pl-16">
                <Phone className="w-4 h-4 text-gold-500" />
                <a
                  href={`tel:${location.phone.replace(/\D/g, '')}`}
                  className="text-gold-500 hover:text-gold-400 transition-colors"
                >
                  {location.phone}
                </a>
              </div>

              {/* Maps Link */}
              <a
                href={location.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-500 font-medium hover:gap-3 transition-all pl-16"
              >
                Ver no Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
