import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom right, #243469, #1B2A4E, #243469)' }}
    >
      {/* Background decorations - Dourado e Rosa */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(249, 168, 212, 0.05)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge - Rosa #F9A8D4 */}
        <div 
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
          style={{ backgroundColor: 'rgba(249, 168, 212, 0.1)', border: '1px solid rgba(249, 168, 212, 0.2)' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#F9A8D4' }} />
          <span className="text-sm font-medium" style={{ color: '#F9A8D4' }}>
            Avaliação Gratuita
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto para transformar sua{' '}
          <span style={{ color: '#D4AF37' }}>autoestima</span>?
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#c5cce0' }}>
          Agende sua avaliação gratuita e descubra como podemos ajudá-lo a se
          sentir mais confiante
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação gratuita."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            FALAR COM ESPECIALISTA
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm" style={{ color: '#7989bc' }}>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Atendimento Imediato
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            100% Sigiloso
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Sem Compromisso
          </span>
        </div>
      </div>
    </section>
  )
}
