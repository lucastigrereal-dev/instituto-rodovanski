import Image from 'next/image'
import Link from 'next/link'
import { Award, GraduationCap, Heart, ArrowRight } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-24" style={{ backgroundColor: '#1B2A4E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative ring - Rosa #F9A8D4 */}
              <div className="absolute -inset-4 rounded-full" style={{ border: '2px solid rgba(249, 168, 212, 0.2)' }} />
              <div className="absolute -inset-8 rounded-full" style={{ border: '1px solid rgba(249, 168, 212, 0.1)' }} />

              {/* Image container */}
              <div className="relative aspect-square rounded-full overflow-hidden" style={{ border: '4px solid rgba(249, 168, 212, 0.3)' }}>
                <Image
                  src="/images/ByJhon12.25-02.jpeg"
                  alt="Dra. Karina Goldstein"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating badge - Dourado #D4AF37 */}
              <div 
                className="absolute -bottom-4 -right-4 rounded-2xl p-4 shadow-xl"
                style={{ backgroundColor: '#243469', border: '1px solid rgba(212, 175, 55, 0.2)' }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                  >
                    <Award className="w-6 h-6" style={{ color: '#D4AF37' }} />
                  </div>
                  <div>
                    <p className="font-bold text-lg" style={{ color: '#D4AF37' }}>+10 anos</p>
                    <p className="text-sm" style={{ color: '#9faace' }}>de experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block font-medium mb-4" style={{ color: '#F9A8D4' }}>
              CONHEÇA A ESPECIALISTA
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Dra. Karina <span style={{ color: '#D4AF37' }}>Goldstein</span>
            </h2>

            <p className="font-medium mb-6" style={{ color: '#F9A8D4' }}>
              CRM 123456 | RQE 12345
            </p>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#c5cce0' }}>
              Com mais de 10 anos de experiência, a Dra. Karina é referência
              nacional em harmonização íntima. Sua abordagem combina{' '}
              <span className="text-white font-medium">técnica avançada</span>,{' '}
              <span className="text-white font-medium">discrição absoluta</span>{' '}
              e{' '}
              <span className="text-white font-medium">resultados naturais</span>.
            </p>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                >
                  <GraduationCap className="w-5 h-5" style={{ color: '#D4AF37' }} />
                </div>
                <span style={{ color: '#c5cce0' }}>Especialista em Estética</span>
              </div>
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(249, 168, 212, 0.1)' }}
                >
                  <Heart className="w-5 h-5" style={{ color: '#F9A8D4' }} />
                </div>
                <span style={{ color: '#c5cce0' }}>Atendimento Humanizado</span>
              </div>
            </div>

            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 font-semibold hover:gap-4 transition-all"
              style={{ color: '#D4AF37' }}
            >
              CONHEÇA MINHA HISTÓRIA
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
