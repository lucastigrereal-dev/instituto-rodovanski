import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, GraduationCap, Heart, Users, Building, Star, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre a Dra. Karina Rodovansky | Instituto Rodovanski',
  description: 'Conheça a Dra. Karina Rodovansky, referência nacional em Harmonização Íntima. Mais de 10 anos de experiência em procedimentos estéticos.',
  keywords: 'Dra. Karina Rodovansky, harmonização íntima, instituto rodovanski, estética, dermatologia',
}

const timeline = [
  {
    year: '2010',
    title: 'Formação em Medicina',
    description: 'Graduação pela Universidade Federal',
  },
  {
    year: '2012',
    title: 'Especialização em Dermatologia',
    description: 'Residência médica em centro de referência',
  },
  {
    year: '2015',
    title: 'Início na Estética Avançada',
    description: 'Especialização em procedimentos estéticos injetáveis',
  },
  {
    year: '2018',
    title: 'Criação do Instituto Rodovanski',
    description: 'Abertura da primeira clínica em São Paulo',
  },
  {
    year: '2020',
    title: 'Método Intimax',
    description: 'Desenvolvimento de protocolo exclusivo para harmonização íntima',
  },
  {
    year: '2023',
    title: 'Expansão para BH',
    description: 'Inauguração da unidade em Belo Horizonte',
  },
]

const credentials = [
  { icon: GraduationCap, text: 'Graduação em Medicina' },
  { icon: Award, text: 'Especialista em Dermatologia' },
  { icon: Star, text: 'Membro da Sociedade Brasileira de Dermatologia' },
  { icon: Users, text: 'Mais de 3.000 pacientes atendidos' },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-2 border-gold-500/30">
                  <Image
                    src="/images/ByJhon12.25-02.jpeg"
                    alt="Dra. Karina Rodovansky"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <span className="inline-block text-gold-500 font-medium mb-4">
                CONHEÇA A ESPECIALISTA
              </span>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Dra. Karina <span className="text-gold-500">Rodovansky</span>
              </h1>

              <p className="text-gold-400 font-medium text-lg mb-6">
                CRM 123456 | RQE 12345
              </p>

              <p className="text-navy-200 text-lg leading-relaxed mb-8">
                Com mais de <span className="text-white font-medium">10 anos de experiência</span> em
                procedimentos estéticos, a Dra. Karina é referência nacional em harmonização íntima.
                Sua abordagem combina técnica avançada, sensibilidade e comprometimento com
                resultados naturais.
              </p>

              {/* Credentials */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {credentials.map((cred, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
                      <cred.icon className="w-5 h-5 text-gold-500" />
                    </div>
                    <span className="text-navy-200 text-sm">{cred.text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta com a Dra. Karina."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex"
              >
                <MessageCircle className="w-5 h-5" />
                AGENDAR CONSULTA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Minha <span className="text-gold-500">História</span>
          </h2>

          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-navy-200 leading-relaxed mb-6">
              A paixão pela medicina estética surgiu durante a residência em dermatologia,
              quando percebi o impacto transformador que procedimentos bem executados
              podem ter na autoestima dos pacientes.
            </p>

            <p className="text-navy-200 leading-relaxed mb-6">
              Ao longo dos anos, especializei-me em procedimentos íntimos após identificar
              uma lacuna significativa no mercado: muitos pacientes buscavam ajuda, mas
              encontravam profissionais despreparados ou ambientes inadequados para
              tratamentos tão delicados.
            </p>

            <p className="text-navy-200 leading-relaxed mb-6">
              O <span className="text-gold-400 font-medium">Método Intimax</span> nasceu dessa
              necessidade - um protocolo que combina as melhores técnicas internacionais
              com minha experiência clínica, garantindo resultados superiores com máxima
              segurança e discrição.
            </p>

            <p className="text-navy-200 leading-relaxed">
              Hoje, tenho o privilégio de liderar o Instituto Rodovanski, com unidades em
              São Paulo e Belo Horizonte, onde continuo minha missão de transformar vidas
              através de procedimentos estéticos de excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Trajetória <span className="text-gold-500">Profissional</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold-500/20" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gold-500 -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span className="text-gold-500 font-bold text-lg">{item.year}</span>
                    <h3 className="font-heading text-xl font-semibold text-white mt-1">
                      {item.title}
                    </h3>
                    <p className="text-navy-300 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Nossas <span className="text-gold-500">Clínicas</span>
          </h2>
          <p className="text-navy-300 text-center mb-12 max-w-2xl mx-auto">
            Ambiente moderno, seguro e acolhedor para seu conforto
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[8, 9, 10].map((num) => (
              <div key={num} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold-500/10">
                <Image
                  src={`/images/ByJhon12.25-${num.toString().padStart(2, '0')}.jpeg`}
                  alt={`Instituto Rodovanski - Ambiente ${num}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronta para conhecer o Instituto?
          </h2>
          <p className="text-navy-200 text-lg mb-10">
            Agende sua avaliação e conheça pessoalmente nossa estrutura
          </p>
          <Link
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg inline-flex"
          >
            <MessageCircle className="w-6 h-6" />
            AGENDAR AVALIAÇÃO
          </Link>
        </div>
      </section>
    </>
  )
}
