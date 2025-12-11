'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: string
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { value: '2500', label: 'Procedimentos Realizados', suffix: '+' },
  { value: '10', label: 'Anos de Experiência', suffix: '+' },
  { value: '3000', label: 'Pacientes Atendidos', suffix: '+' },
  { value: '98', label: 'Taxa de Satisfação', suffix: '%' },
]

function AnimatedNumber({
  value,
  suffix = '',
}: {
  value: string
  suffix?: string
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const numericValue = parseInt(value)
    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setDisplayValue(numericValue)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span ref={ref}>
      {suffix === '+' && '+'}
      {displayValue.toLocaleString('pt-BR')}
      {suffix === '%' && '%'}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-y border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-heading text-4xl md:text-5xl font-bold text-gold-500 mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-navy-300 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
