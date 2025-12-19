import Link from 'next/link'
import { Shield, Heart, Sparkles, Star, ArrowRight } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Procedure {
  title: string
  description: string
  href: string
  icon: LucideIcon
  accentColor?: string
}

const procedures: Procedure[] = [
  {
    title: 'Harmonização Íntima Masculina',
    description: 'Recupere sua confiança com o Método Intimax',
    href: '/masculino',
    icon: Shield,
    accentColor: '#D4AF37', // Dourado
  },
  {
    title: 'Harmonização Íntima Feminina',
    description: 'Reconecte-se com seu corpo',
    href: '/feminino',
    icon: Heart,
    accentColor: '#F9A8D4', // Rosa
  },
  {
    title: 'Preenchimento de Glúteos',
    description: 'Glúteos naturais sem prótese',
    href: '/gluteos',
    icon: Sparkles,
    accentColor: '#F9A8D4', // Rosa
  },
  {
    title: 'Harmonização Full Face',
    description: 'Rejuvenescimento facial completo',
    href: '/fullface',
    icon: Star,
    accentColor: '#D4AF37', // Dourado
  },
]

export default function ProceduresGrid() {
  return (
    <section id="procedimentos" className="py-24" style={{ backgroundColor: 'rgba(27, 42, 78, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos <span style={{ color: '#D4AF37' }}>Procedimentos</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9faace' }}>
            Soluções personalizadas para realçar sua beleza natural com
            segurança e excelência
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {procedures.map((procedure) => (
            <Link key={procedure.href} href={procedure.href} className="group">
              <div 
                className="rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] h-full"
                style={{ 
                  backgroundColor: '#243469', 
                  border: `1px solid ${procedure.accentColor === '#F9A8D4' ? 'rgba(249, 168, 212, 0.1)' : 'rgba(212, 175, 55, 0.1)'}` 
                }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors"
                      style={{ backgroundColor: `${procedure.accentColor}15` }}
                    >
                      <procedure.icon className="w-8 h-8" style={{ color: procedure.accentColor }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-white mb-2 transition-colors group-hover:opacity-90">
                      {procedure.title}
                    </h3>
                    <p className="mb-4" style={{ color: '#9faace' }}>{procedure.description}</p>
                    <span 
                      className="inline-flex items-center font-medium text-sm group-hover:gap-2 transition-all"
                      style={{ color: procedure.accentColor }}
                    >
                      Saiba mais
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
