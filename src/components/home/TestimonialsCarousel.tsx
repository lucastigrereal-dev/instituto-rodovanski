'use client'

import { useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  age: number
}

const testimonials: Testimonial[] = [
  {
    quote: 'O procedimento mudou minha vida. Recuperei minha confiança e autoestima. A Dra. Karina é extremamente profissional e acolhedora.',
    author: 'Carlos',
    age: 42,
  },
  {
    quote: 'Estava com muito medo de fazer, mas o resultado foi incrível! Natural e discreto, exatamente como eu queria.',
    author: 'Marcelo',
    age: 35,
  },
  {
    quote: 'Discreto, profissional e natural. Perfeito! Recomendo a todos que estão pensando em fazer.',
    author: 'Roberto',
    age: 48,
  },
  {
    quote: 'Atendimento humanizado e resultado excepcional. Me sinto muito mais confiante agora.',
    author: 'André',
    age: 39,
  },
  {
    quote: 'Pesquisei muito antes de escolher e não me arrependo. Equipe incrível e resultado surpreendente.',
    author: 'Fernando',
    age: 45,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24" style={{ backgroundColor: 'rgba(27, 42, 78, 0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            O que nossos <span style={{ color: '#F9A8D4' }}>pacientes</span> dizem
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9faace' }}>
            Histórias reais de transformação e confiança renovada
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div 
            className="rounded-3xl p-8 md:p-12"
            style={{ backgroundColor: '#243469', border: '1px solid rgba(249, 168, 212, 0.1)' }}
          >
            {/* Quote Icon - Rosa */}
            <div className="flex justify-center mb-8">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(249, 168, 212, 0.1)' }}
              >
                <Quote className="w-8 h-8" style={{ color: '#F9A8D4' }} />
              </div>
            </div>

            {/* Quote Text */}
            <blockquote className="text-center mb-8">
              <p className="text-xl md:text-2xl text-white leading-relaxed">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="font-semibold text-lg" style={{ color: '#F9A8D4' }}>
                {testimonials[currentIndex].author},{' '}
                {testimonials[currentIndex].age} anos
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full flex items-center justify-center transition-all"
            style={{ backgroundColor: '#243469', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#D4AF37' }}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full flex items-center justify-center transition-all"
            style={{ backgroundColor: '#243469', border: '1px solid rgba(212, 175, 55, 0.2)', color: '#D4AF37' }}
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className="h-3 rounded-full transition-all"
                style={{ 
                  backgroundColor: index === currentIndex ? '#D4AF37' : '#3f57a0',
                  width: index === currentIndex ? '2rem' : '0.75rem'
                }}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
