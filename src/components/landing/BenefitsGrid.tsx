import { LucideIcon, TrendingUp, Leaf, Hand, Stethoscope, Clock, CalendarCheck } from 'lucide-react'

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
  accentColor?: string
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
    accentColor: '#D4AF37', // Dourado
  },
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Aspecto e sensação totalmente naturais',
    accentColor: '#F9A8D4', // Rosa
  },
  {
    icon: Hand,
    title: 'Sensibilidade Mantida',
    description: 'Zero perda de sensibilidade durante ou após',
    accentColor: '#D4AF37', // Dourado
  },
  {
    icon: Stethoscope,
    title: 'Sem Cirurgia',
    description: 'Procedimento minimamente invasivo sem cortes',
    accentColor: '#F9A8D4', // Rosa
  },
  {
    icon: Clock,
    title: 'Recuperação Rápida',
    description: 'Retorne às atividades em poucos dias',
    accentColor: '#D4AF37', // Dourado
  },
  {
    icon: CalendarCheck,
    title: 'Resultado Duradouro',
    description: 'Efeito que dura de 12 a 24 meses',
    accentColor: '#F9A8D4', // Rosa
  },
]

export default function BenefitsGrid({
  title = 'Benefícios do Procedimento',
  subtitle,
  benefits = defaultBenefits,
}: BenefitsGridProps) {
  return (
    <section className="py-24" style={{ backgroundColor: 'rgba(27, 42, 78, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span style={{ color: '#D4AF37' }}>
              {title.split(' ').slice(-1)[0]}
            </span>
          </h2>
          {subtitle && (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9faace' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const color = benefit.accentColor || '#D4AF37'
            return (
              <div
                key={index}
                className="rounded-2xl p-8 transition-all group"
                style={{ 
                  backgroundColor: '#243469', 
                  border: `1px solid ${color}15` 
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <benefit.icon className="w-6 h-6" style={{ color }} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#9faace' }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
