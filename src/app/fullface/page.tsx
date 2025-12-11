import type { Metadata } from 'next'
import LandingHero from '@/components/landing/LandingHero'
import SolutionSection from '@/components/landing/SolutionSection'
import BenefitsGrid from '@/components/landing/BenefitsGrid'
import FAQAccordion from '@/components/landing/FAQAccordion'
import FinalCTA from '@/components/landing/FinalCTA'
import { Sparkles, Shield, Clock, Star, Eye, Smile } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Harmonização Facial Full Face | Instituto Rodovanski',
  description: 'Harmonização Facial Full Face: Botox, Preenchimento, Bioestimuladores. Rejuvenescimento completo com resultados naturais. Dra. Karina Rodovansky.',
  keywords: 'harmonização facial, botox, preenchimento facial, bioestimuladores, rejuvenescimento facial, full face',
}

// Procedures included in Full Face
const procedures = [
  {
    title: 'Toxina Botulínica',
    description: 'Suavização de rugas dinâmicas na testa, entre as sobrancelhas e ao redor dos olhos',
  },
  {
    title: 'Preenchimento Labial',
    description: 'Volume e contorno dos lábios com ácido hialurônico',
  },
  {
    title: 'Preenchimento Malar',
    description: 'Projeção das maçãs do rosto para um visual mais jovial',
  },
  {
    title: 'Preenchimento Mandibular',
    description: 'Definição do contorno facial e correção de papada',
  },
  {
    title: 'Rinomodelação',
    description: 'Correção do perfil nasal sem cirurgia',
  },
  {
    title: 'Bioestimuladores',
    description: 'Estímulo natural de colágeno para firmeza da pele',
  },
]

const benefits = [
  {
    icon: Sparkles,
    title: 'Rejuvenescimento Global',
    description: 'Tratamento completo para todo o rosto',
  },
  {
    icon: Eye,
    title: 'Olhar Renovado',
    description: 'Suavização de rugas e lifting do olhar',
  },
  {
    icon: Smile,
    title: 'Lábios Harmônicos',
    description: 'Volume natural e contorno definido',
  },
  {
    icon: Shield,
    title: 'Seguro e Aprovado',
    description: 'Produtos ANVISA e técnicas consagradas',
  },
  {
    icon: Clock,
    title: 'Sem Downtime',
    description: 'Retorno imediato às atividades',
  },
  {
    icon: Star,
    title: 'Resultado Natural',
    description: 'Você, só que mais descansado e jovem',
  },
]

const faqs = [
  {
    question: 'O que está incluído na Harmonização Full Face?',
    answer: 'O protocolo Full Face pode incluir toxina botulínica, preenchimento com ácido hialurônico em diversas áreas (lábios, maçãs, mandíbula, queixo), rinomodelação e bioestimuladores. O tratamento é personalizado conforme suas necessidades.',
  },
  {
    question: 'Preciso fazer todos os procedimentos de uma vez?',
    answer: 'Não necessariamente. Podemos dividir o tratamento em sessões conforme sua disponibilidade e orçamento. Na avaliação, planejamos juntos a melhor estratégia.',
  },
  {
    question: 'Vou ficar com aparência artificial?',
    answer: 'Não. Nossa filosofia é realçar sua beleza natural. Trabalhamos com volumes moderados e técnicas que respeitam a harmonia do seu rosto.',
  },
  {
    question: 'Quanto tempo duram os resultados?',
    answer: 'A toxina botulínica dura de 4 a 6 meses. Os preenchimentos de 12 a 18 meses. Bioestimuladores têm efeito progressivo que pode durar 2 anos ou mais.',
  },
  {
    question: 'É doloroso?',
    answer: 'Utilizamos anestésicos tópicos e os próprios produtos contêm lidocaína. O desconforto é mínimo e bem tolerado.',
  },
  {
    question: 'Quanto tempo leva o procedimento?',
    answer: 'Depende do que será realizado. Um protocolo completo pode levar de 1 a 2 horas. Procedimentos isolados são mais rápidos.',
  },
  {
    question: 'Posso voltar ao trabalho no mesmo dia?',
    answer: 'Sim. Pode haver leve vermelhidão ou pequenos hematomas, mas são facilmente cobertos com maquiagem.',
  },
  {
    question: 'Com que idade posso começar?',
    answer: 'A harmonização pode ser feita a partir dos 18 anos, mas as indicações variam. Para prevenção, pode-se iniciar aos 25-30 anos. Para correção, não há limite de idade.',
  },
]

export default function FullFacePage() {
  return (
    <>
      <LandingHero
        badge="Rejuvenescimento Completo"
        headline="HARMONIZAÇÃO FACIAL FULL FACE"
        subheadline="Rejuvenescimento global com resultados naturais"
        bullets={[
          'Tratamento facial completo',
          'Resultados naturais e harmônicos',
          'Procedimentos combinados',
          'Sem cirurgia, sem internação',
        ]}
        ctaText="QUERO SABER MAIS"
        ctaLink="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a Harmonização Facial Full Face."
        imageSrc="/images/ByJhon12.25-07.jpeg"
        imageAlt="Dra. Karina Rodovansky - Harmonização Facial"
      />

      {/* Procedures Section */}
      <section className="py-24 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              O que inclui o <span className="text-gold-500">Full Face</span>?
            </h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              Um protocolo completo e personalizado para rejuvenescer todo o rosto
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((procedure, index) => (
              <div
                key={index}
                className="bg-navy-800 rounded-2xl p-6 border border-gold-500/10 hover:border-gold-500/30 transition-all"
              >
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  {procedure.title}
                </h3>
                <p className="text-navy-300 text-sm">{procedure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsGrid
        title="Benefícios do Full Face"
        subtitle="Transformação completa com resultados que você vai amar"
        benefits={benefits}
      />

      <FAQAccordion
        title="Perguntas Frequentes"
        subtitle="Tudo o que você precisa saber sobre a Harmonização Facial"
        faqs={faqs}
      />

      <FinalCTA
        headline="Renove sua aparência"
        subheadline="Agende sua avaliação e descubra o protocolo ideal para você"
        ctaText="AGENDAR AVALIAÇÃO"
        ctaLink="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação para Harmonização Facial Full Face."
      />
    </>
  )
}
