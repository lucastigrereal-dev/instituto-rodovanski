import { ClipboardCheck, Zap, Shield, HeartHandshake, LucideIcon } from 'lucide-react'

interface Pillar {
  icon: LucideIcon
  title: string
  description: string
}

interface SolutionSectionProps {
  title: string
  subtitle?: string
  pillars?: Pillar[]
}

const defaultPillars: Pillar[] = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação Personalizada',
    description: 'Análise completa para entender suas expectativas e indicar o melhor protocolo',
  },
  {
    icon: Zap,
    title: 'Técnica Avançada',
    description: 'Método Intimax com resultados superiores e máximo conforto',
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Produtos ANVISA, ambiente hospitalar e equipe especializada',
  },
  {
    icon: HeartHandshake,
    title: 'Acompanhamento Completo',
    description: 'Suporte antes, durante e após o procedimento',
  },
]

export default function SolutionSection({
  title,
  subtitle,
  pillars = defaultPillars,
}: SolutionSectionProps) {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 font-medium mb-4">
            A SOLUÇÃO
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-navy-800 rounded-2xl p-8 border border-gold-500/10 hover:border-gold-500/30 transition-all group text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500/20 transition-colors">
                <pillar.icon className="w-8 h-8 text-gold-500" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
