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
    <section className="py-24 bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            O que nossos <span className="text-gold-500">pacientes</span> dizem
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            Histórias reais de transformação e confiança renovada
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-navy-800 rounded-3xl p-8 md:p-12 border border-gold-500/10">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center">
                <Quote className="w-8 h-8 text-gold-500" />
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
              <p className="text-gold-500 font-semibold text-lg">
                {testimonials[currentIndex].author},{' '}
                {testimonials[currentIndex].age} anos
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-navy-800 border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-950 transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-navy-800 border border-gold-500/20 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-950 transition-all"
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
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gold-500 w-8'
                    : 'bg-navy-600 hover:bg-navy-500'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
