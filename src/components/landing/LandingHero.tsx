import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, Check } from 'lucide-react'

interface LandingHeroProps {
  badge?: string
  headline: string
  subheadline: string
  bullets: string[]
  ctaText: string
  ctaLink: string
  imageSrc: string
  imageAlt: string
}

export default function LandingHero({
  badge,
  headline,
  subheadline,
  bullets,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
}: LandingHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background - Azul Marinho #1B2A4E */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #1B2A4E, #243469, #1B2A4E)' }}>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        {/* Dourado #D4AF37 */}
        <div className="absolute top-0 right-0 w-1/2 h-full" style={{ background: 'linear-gradient(to left, rgba(212, 175, 55, 0.05), transparent)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge - Dourado #D4AF37 */}
            {badge && (
              <div 
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.2)' }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#D4AF37' }} />
                <span className="text-sm font-medium" style={{ color: '#D4AF37' }}>
                  {badge}
                </span>
              </div>
            )}

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-8" style={{ color: '#c5cce0' }}>
              {subheadline}
            </p>

            {/* Bullets - Dourado #D4AF37 */}
            <ul className="space-y-4 mb-10">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#D4AF37' }}
                  >
                    <Check className="w-4 h-4" style={{ color: '#1B2A4E' }} />
                  </div>
                  <span className="text-white text-lg">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg inline-flex"
            >
              <MessageCircle className="w-6 h-6" />
              {ctaText}
            </Link>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Dourado #D4AF37 */}
              <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: 'linear-gradient(to bottom right, rgba(212, 175, 55, 0.2), transparent)' }} />
              <div className="absolute inset-0 rounded-3xl -rotate-3" style={{ border: '2px solid rgba(212, 175, 55, 0.2)' }} />
              <div className="relative w-full h-full rounded-3xl overflow-hidden" style={{ border: '2px solid rgba(212, 175, 55, 0.3)' }}>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
