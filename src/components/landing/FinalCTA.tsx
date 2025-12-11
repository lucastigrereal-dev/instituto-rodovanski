import Link from 'next/link'
import { MessageCircle, Phone, Clock } from 'lucide-react'

interface FinalCTAProps {
  headline?: string
  subheadline?: string
  ctaText?: string
  ctaLink?: string
  showUrgency?: boolean
}

export default function FinalCTA({
  headline = 'Pronto para dar o primeiro passo?',
  subheadline = 'Agende sua avaliação gratuita e descubra como podemos ajudá-lo',
  ctaText = 'QUERO AGENDAR MINHA AVALIAÇÃO',
  ctaLink = 'https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação.',
  showUrgency = true,
}: FinalCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-whatsapp/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency badge */}
        {showUrgency && (
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-gold-500" />
            <span className="text-gold-500 text-sm font-medium">
              Vagas limitadas esta semana
            </span>
          </div>
        )}

        {/* Headline */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {headline}
        </h2>

        {/* Subheadline */}
        <p className="text-navy-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {subheadline}
        </p>

        {/* CTA Button */}
        <Link
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-lg inline-flex mb-8"
        >
          <MessageCircle className="w-6 h-6" />
          {ctaText}
        </Link>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-navy-400 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Resposta em minutos
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Avaliação 100% gratuita
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Sigilo garantido
          </span>
        </div>
      </div>
    </section>
  )
}
