import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contato | Instituto Rodovanski',
  description: 'Entre em contato com o Instituto Rodovanski. Clínicas em São Paulo e Belo Horizonte. Agende sua avaliação pelo WhatsApp.',
  keywords: 'contato instituto rodovanski, agendar consulta, harmonização íntima são paulo, harmonização íntima belo horizonte',
}

const locations = [
  {
    city: 'São Paulo',
    address: 'Av. Exemplo, 123 - Jardins',
    complement: 'São Paulo - SP, 01234-567',
    phone: '(11) 9999-9999',
    whatsapp: '5511999999999',
    hours: 'Seg-Sex: 9h às 19h | Sáb: 9h às 14h',
    mapsLink: 'https://maps.google.com',
  },
  {
    city: 'Belo Horizonte',
    address: 'Rua Exemplo, 456 - Savassi',
    complement: 'Belo Horizonte - MG, 30140-000',
    phone: '(31) 9999-9999',
    whatsapp: '5531999999999',
    hours: 'Seg-Sex: 9h às 19h | Sáb: 9h às 14h',
    mapsLink: 'https://maps.google.com',
  },
]

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Entre em <span className="text-gold-500">Contato</span>
          </h1>
          <p className="text-navy-200 text-lg md:text-xl max-w-2xl mx-auto">
            Estamos prontos para atendê-lo. Escolha a unidade mais próxima ou
            fale conosco pelo WhatsApp.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 bg-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-navy-950" />
              <span className="text-navy-950 font-semibold">Atendimento via WhatsApp</span>
            </div>
            <Link
              href="https://wa.me/5511999999999?text=Olá! Gostaria de informações sobre os procedimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-950 text-white px-6 py-3 rounded-full font-semibold hover:bg-navy-900 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              FALAR AGORA
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Nossas <span className="text-gold-500">Unidades</span>
          </h2>
          <p className="text-navy-300 text-center mb-12 max-w-2xl mx-auto">
            Duas clínicas premium para melhor atendê-lo
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-navy-800 rounded-3xl p-8 border border-gold-500/10 hover:border-gold-500/30 transition-all"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-gold-500" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {location.city}
                  </h3>
                </div>

                {/* Info */}
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-medium">{location.address}</p>
                    <p className="text-navy-300 text-sm">{location.complement}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-500" />
                    <a
                      href={`tel:${location.phone.replace(/\D/g, '')}`}
                      className="text-gold-500 hover:text-gold-400 transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold-500 mt-0.5" />
                    <span className="text-navy-300 text-sm">{location.hours}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Link
                      href={`https://wa.me/${location.whatsapp}?text=Olá! Gostaria de agendar na unidade ${location.city}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp text-sm flex-1 justify-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Link>
                    <a
                      href={location.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver no Mapa
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Siga nas <span className="text-gold-500">Redes Sociais</span>
          </h2>
          <p className="text-navy-300 mb-10">
            Acompanhe nosso conteúdo e fique por dentro das novidades
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/institutorodovanski"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-2xl bg-navy-800 border border-gold-500/10 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-950 transition-all group"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>

          <p className="text-navy-400 text-sm mt-6">@institutorodovanski</p>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Dúvidas <span className="text-gold-500">Frequentes</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
            <div className="bg-navy-800 rounded-2xl p-6 border border-gold-500/10">
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                Como agendar uma consulta?
              </h3>
              <p className="text-navy-300 text-sm">
                O jeito mais rápido é pelo WhatsApp. Clique em um dos botões acima
                e nossa equipe vai agendar o melhor horário para você.
              </p>
            </div>

            <div className="bg-navy-800 rounded-2xl p-6 border border-gold-500/10">
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                Preciso de encaminhamento médico?
              </h3>
              <p className="text-navy-300 text-sm">
                Não. Você pode agendar diretamente conosco. Na primeira consulta,
                faremos a avaliação completa.
              </p>
            </div>

            <div className="bg-navy-800 rounded-2xl p-6 border border-gold-500/10">
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                A primeira consulta tem custo?
              </h3>
              <p className="text-navy-300 text-sm">
                A avaliação inicial é gratuita e sem compromisso. Você conhece
                nossa estrutura e tira todas as suas dúvidas.
              </p>
            </div>

            <div className="bg-navy-800 rounded-2xl p-6 border border-gold-500/10">
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                Vocês atendem convênio?
              </h3>
              <p className="text-navy-300 text-sm">
                Nossos procedimentos são particulares. Oferecemos condições
                especiais de pagamento que são apresentadas na consulta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="text-navy-200 text-lg mb-10">
            Nossa equipe está pronta para atendê-lo com toda discrição e profissionalismo
          </p>
          <Link
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg inline-flex"
          >
            <MessageCircle className="w-6 h-6" />
            AGENDAR AVALIAÇÃO GRATUITA
          </Link>
        </div>
      </section>
    </>
  )
}
