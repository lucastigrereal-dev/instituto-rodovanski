import { Shield, Zap, Eye, Lock, Heart, HeadphonesIcon } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  accentColor: string
}

const features: Feature[] = [
  {
    icon: Lock,
    title: 'Discrição Total',
    description: 'Atendimento sigiloso e privativo em todas as etapas',
    accentColor: '#D4AF37', // Dourado
  },
  {
    icon: Zap,
    title: 'Técnica Avançada',
    description: 'Método Intimax exclusivo com resultados superiores',
    accentColor: '#F9A8D4', // Rosa
  },
  {
    icon: Eye,
    title: 'Resultados Naturais',
    description: 'Ninguém percebe, só você sente a diferença',
    accentColor: '#D4AF37', // Dourado
  },
  {
    icon: Shield,
    title: 'Segurança 100%',
    description: 'Produtos ANVISA em ambiente hospitalar',
    accentColor: '#F9A8D4', // Rosa
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description: 'Ambiente acolhedor, sem julgamentos',
    accentColor: '#F9A8D4', // Rosa
  },
  {
    icon: HeadphonesIcon,
    title: 'Acompanhamento Pós',
    description: 'Suporte 24/7 durante toda recuperação',
    accentColor: '#D4AF37', // Dourado
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24" style={{ backgroundColor: '#1B2A4E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que escolher o{' '}
            <span style={{ color: '#D4AF37' }}>Instituto Goldstein</span>?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9faace' }}>
            Diferenciais que fazem nossa clínica ser referência nacional em
            procedimentos estéticos íntimos
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                backgroundColor: 'rgba(36, 52, 105, 0.5)', 
                border: `1px solid ${feature.accentColor}15` 
              }}
            >
              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors"
                style={{ backgroundColor: `${feature.accentColor}15` }}
              >
                <feature.icon className="w-7 h-7" style={{ color: feature.accentColor }} />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#9faace' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
