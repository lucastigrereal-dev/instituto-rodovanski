import { LucideIcon, TrendingUp, Leaf, Hand, Stethoscope, Clock, CalendarCheck } from 'lucide-react'

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

interface BenefitsGridProps {
  title?: string
  subtitle?: string
  benefits?: Benefit[]
}

const defaultBenefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: 'Aumento Real',
    description: 'De 1 a 4cm de circunferência com resultados visíveis',
  },
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Aspecto e sensação totalmente naturais',
  },
  {
    icon: Hand,
    title: 'Sensibilidade Mantida',
    description: 'Zero perda de sensibilidade durante ou após',
  },
  {
    icon: Stethoscope,
    title: 'Sem Cirurgia',
    description: 'Procedimento minimamente invasivo sem cortes',
  },
  {
    icon: Clock,
    title: 'Recuperação Rápida',
    description: 'Retorne às atividades em poucos dias',
  },
  {
    icon: CalendarCheck,
    title: 'Resultado Duradouro',
    description: 'Efeito que dura de 12 a 24 meses',
  },
]

export default function BenefitsGrid({
  title = 'Benefícios do Procedimento',
  subtitle,
  benefits = defaultBenefits,
}: BenefitsGridProps) {
  return (
    <section className="py-24 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gold-500">
              {title.split(' ').slice(-1)[0]}
            </span>
          </h2>
          {subtitle && (
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-navy-800 rounded-2xl p-8 border border-gold-500/10 hover:border-gold-500/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-gold-500" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-navy-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
