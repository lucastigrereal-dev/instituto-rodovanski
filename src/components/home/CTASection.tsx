import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
          <span className="text-gold-500 text-sm font-medium">
            Avaliação Gratuita
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Pronto para transformar sua{' '}
          <span className="text-gold-500">autoestima</span>?
        </h2>

        {/* Subtitle */}
        <p className="text-navy-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
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
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-navy-400 text-sm">
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
