import Link from 'next/link'
import { Shield, Heart, Sparkles, Star, ArrowRight } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Procedure {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

const procedures: Procedure[] = [
  {
    title: 'Harmonização Íntima Masculina',
    description: 'Recupere sua confiança com o Método Intimax',
    href: '/masculino',
    icon: Shield,
  },
  {
    title: 'Harmonização Íntima Feminina',
    description: 'Reconecte-se com seu corpo',
    href: '/feminino',
    icon: Heart,
  },
  {
    title: 'Preenchimento de Glúteos',
    description: 'Glúteos naturais sem prótese',
    href: '/gluteos',
    icon: Sparkles,
  },
  {
    title: 'Harmonização Full Face',
    description: 'Rejuvenescimento facial completo',
    href: '/fullface',
    icon: Star,
  },
]

export default function ProceduresGrid() {
  return (
    <section id="procedimentos" className="py-24 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-gold-500">Procedimentos</span>
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Soluções personalizadas para realçar sua beleza natural com
            segurança e excelência
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {procedures.map((procedure) => (
            <Link key={procedure.href} href={procedure.href} className="group">
              <div className="bg-navy-800 rounded-2xl p-8 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 hover:scale-[1.02] h-full">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <procedure.icon className="w-8 h-8 text-gold-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {procedure.title}
                    </h3>
                    <p className="text-navy-300 mb-4">{procedure.description}</p>
                    <span className="inline-flex items-center text-gold-500 font-medium text-sm group-hover:gap-2 transition-all">
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
