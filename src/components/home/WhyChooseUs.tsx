import { Shield, Zap, Eye, Lock, Heart, HeadphonesIcon } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Lock,
    title: 'Discrição Total',
    description: 'Atendimento sigiloso e privativo em todas as etapas',
  },
  {
    icon: Zap,
    title: 'Técnica Avançada',
    description: 'Método Intimax exclusivo com resultados superiores',
  },
  {
    icon: Eye,
    title: 'Resultados Naturais',
    description: 'Ninguém percebe, só você sente a diferença',
  },
  {
    icon: Shield,
    title: 'Segurança 100%',
    description: 'Produtos ANVISA em ambiente hospitalar',
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description: 'Ambiente acolhedor, sem julgamentos',
  },
  {
    icon: HeadphonesIcon,
    title: 'Acompanhamento Pós',
    description: 'Suporte 24/7 durante toda recuperação',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que escolher o{' '}
            <span className="text-gold-500">Instituto Rodovanski</span>?
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Diferenciais que fazem nossa clínica ser referência nacional em
            procedimentos estéticos íntimos
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-navy-800/50 rounded-2xl p-8 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors">
                <feature.icon className="w-7 h-7 text-gold-500" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-navy-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
