'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  title?: string
  subtitle?: string
  faqs: FAQ[]
}

export default function FAQAccordion({
  title = 'Perguntas Frequentes',
  subtitle,
  faqs,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24" style={{ backgroundColor: '#1B2A4E' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Perguntas <span style={{ color: '#D4AF37' }}>Frequentes</span>
          </h2>
          {subtitle && (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9faace' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#243469', border: '1px solid rgba(212, 175, 55, 0.1)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                style={{ backgroundColor: openIndex === index ? 'rgba(36, 52, 105, 0.8)' : 'transparent' }}
              >
                <span className="font-medium text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#D4AF37' }}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
                    <p className="leading-relaxed pt-4" style={{ color: '#c5cce0' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
