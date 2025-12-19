import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Azul Marinho #1B2A4E */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #1B2A4E, #243469, #1B2A4E)' }}>
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

        {/* Gold accent gradient - Dourado #D4AF37 */}
        <div className="absolute top-0 right-0 w-1/2 h-full" style={{ background: 'linear-gradient(to left, rgba(212, 175, 55, 0.05), transparent)' }} />
        
        {/* Rose accent - Rosa #F9A8D4 */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2" style={{ background: 'linear-gradient(to top right, rgba(249, 168, 212, 0.03), transparent)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge - Dourado #D4AF37 */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#D4AF37' }} />
              <span className="text-sm font-medium" style={{ color: '#D4AF37' }}>
                Referência em Harmonização Íntima no Brasil
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              TRANSFORMAÇÃO COM{' '}
              <span style={{ color: '#D4AF37' }}>NATURALIDADE</span>, TÉCNICA E
              DISCRIÇÃO
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: '#c5cce0' }}>
              Procedimentos estéticos de alta precisão realizados pela{' '}
              <span className="font-medium" style={{ color: '#F9A8D4' }}>
                Dra. Karina Goldstein
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação."
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
                style={{ backgroundColor: '#D4AF37', color: '#1B2A4E', boxShadow: '0 10px 15px -3px rgba(212, 175, 55, 0.2)' }}
              >
                AGENDE SUA AVALIAÇÃO
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="#procedimentos" 
                className="font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center"
                style={{ border: '2px solid #D4AF37', color: '#D4AF37' }}
              >
                CONHEÇA OS PROCEDIMENTOS
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Decorative elements - Dourado #D4AF37 */}
              <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: 'linear-gradient(to bottom right, rgba(212, 175, 55, 0.2), transparent)' }} />
              <div className="absolute inset-0 rounded-3xl -rotate-3" style={{ border: '2px solid rgba(212, 175, 55, 0.2)' }} />

              {/* Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden" style={{ border: '2px solid rgba(212, 175, 55, 0.3)' }}>
                <Image
                  src="/images/ByJhon12.25-01.jpeg"
                  alt="Dra. Karina Goldstein"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Dourado #D4AF37 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8" style={{ color: 'rgba(212, 175, 55, 0.5)' }} />
      </div>
    </section>
  )
}
