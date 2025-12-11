import Image from 'next/image'
import Link from 'next/link'
import { Award, GraduationCap, Heart, ArrowRight } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-gold-500/20" />
              <div className="absolute -inset-8 rounded-full border border-gold-500/10" />

              {/* Image container */}
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-gold-500/30">
                <Image
                  src="/images/ByJhon12.25-02.jpeg"
                  alt="Dra. Karina Rodovansky"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-navy-800 border border-gold-500/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-gold-500 font-bold text-lg">+10 anos</p>
                    <p className="text-navy-300 text-sm">de experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-gold-500 font-medium mb-4">
              CONHEÇA A ESPECIALISTA
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Dra. Karina <span className="text-gold-500">Rodovansky</span>
            </h2>

            <p className="text-gold-400 font-medium mb-6">
              CRM 123456 | RQE 12345
            </p>

            <p className="text-navy-200 text-lg leading-relaxed mb-8">
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
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-gold-500" />
                </div>
                <span className="text-navy-200">Especialista em Estética</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-gold-500" />
                </div>
                <span className="text-navy-200">Atendimento Humanizado</span>
              </div>
            </div>

            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:gap-4 transition-all"
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
