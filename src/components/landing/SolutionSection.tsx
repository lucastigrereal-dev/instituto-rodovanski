import { ClipboardCheck, Zap, Shield, HeartHandshake, LucideIcon } from 'lucide-react'

interface Pillar {
  icon: LucideIcon
  title: string
  description: string
  accentColor?: string
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
    accentColor: '#D4AF37', // Dourado
  },
  {
    icon: Zap,
    title: 'Técnica Avançada',
    description: 'Método Intimax com resultados superiores e máximo conforto',
    accentColor: '#F9A8D4', // Rosa
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Produtos ANVISA, ambiente hospitalar e equipe especializada',
    accentColor: '#D4AF37', // Dourado
  },
  {
    icon: HeartHandshake,
    title: 'Acompanhamento Completo',
    description: 'Suporte antes, durante e após o procedimento',
    accentColor: '#F9A8D4', // Rosa
  },
]

export default function SolutionSection({
  title,
  subtitle,
  pillars = defaultPillars,
}: SolutionSectionProps) {
  return (
    <section className="py-24" style={{ backgroundColor: '#1B2A4E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-medium mb-4" style={{ color: '#D4AF37' }}>
            A SOLUÇÃO
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9faace' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const color = pillar.accentColor || '#D4AF37'
            return (
              <div
                key={index}
                className="rounded-2xl p-8 transition-all group text-center"
                style={{ 
                  backgroundColor: '#243469', 
                  border: `1px solid ${color}15` 
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <pillar.icon className="w-8 h-8" style={{ color }} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9faace' }}>
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
