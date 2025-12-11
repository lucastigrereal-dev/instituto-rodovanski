'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappLink = 'https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os procedimentos.'

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/30 hover:scale-110 transition-transform duration-300 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />

      {/* Pulse animation */}
      <span className="absolute w-full h-full rounded-full bg-whatsapp animate-ping opacity-20"></span>

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-navy-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Fale Conosco
      </span>
    </a>
  )
}
