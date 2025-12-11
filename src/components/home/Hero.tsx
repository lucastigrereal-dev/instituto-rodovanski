import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Gold accent gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-gold-500 text-sm font-medium">
                Referência em Harmonização Íntima no Brasil
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              TRANSFORMAÇÃO COM{' '}
              <span className="text-gold-500">NATURALIDADE</span>, TÉCNICA E
              DISCRIÇÃO
            </h1>

            {/* Subtitle */}
            <p className="text-navy-200 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Procedimentos estéticos de alta precisão realizados pela{' '}
              <span className="text-gold-400 font-medium">
                Dra. Karina Rodovansky
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                AGENDE SUA AVALIAÇÃO
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#procedimentos" className="btn-secondary">
                CONHEÇA OS PROCEDIMENTOS
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-transparent rounded-3xl blur-2xl" />
              <div className="absolute inset-0 border-2 border-gold-500/20 rounded-3xl -rotate-3" />

              {/* Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-gold-500/30">
                <Image
                  src="/images/ByJhon12.25-01.jpeg"
                  alt="Dra. Karina Rodovansky"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold-500/50" />
      </div>
    </section>
  )
}
