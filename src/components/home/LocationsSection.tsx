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
    <section className="py-24" style={{ backgroundColor: 'rgba(27, 42, 78, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossas <span style={{ color: '#D4AF37' }}>Unidades</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9faace' }}>
            Duas clínicas premium para melhor atendê-lo em São Paulo e Belo
            Horizonte
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 transition-all"
              style={{ 
                backgroundColor: '#243469', 
                border: '1px solid rgba(212, 175, 55, 0.1)' 
              }}
            >
              {/* City Header */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                >
                  <MapPin className="w-6 h-6" style={{ color: '#D4AF37' }} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {location.city}
                </h3>
              </div>

              {/* Address */}
              <p className="mb-4 pl-16" style={{ color: '#c5cce0' }}>{location.address}</p>

              {/* Phone */}
              <div className="flex items-center gap-3 mb-6 pl-16">
                <Phone className="w-4 h-4" style={{ color: '#F9A8D4' }} />
                <a
                  href={`tel:${location.phone.replace(/\D/g, '')}`}
                  className="transition-colors"
                  style={{ color: '#F9A8D4' }}
                >
                  {location.phone}
                </a>
              </div>

              {/* Maps Link */}
              <a
                href={location.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all pl-16"
                style={{ color: '#D4AF37' }}
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
