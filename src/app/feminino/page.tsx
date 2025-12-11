import type { Metadata } from 'next'
import LandingHero from '@/components/landing/LandingHero'
import ProblemSection from '@/components/landing/ProblemSection'
import SolutionSection from '@/components/landing/SolutionSection'
import BenefitsGrid from '@/components/landing/BenefitsGrid'
import FAQAccordion from '@/components/landing/FAQAccordion'
import FinalCTA from '@/components/landing/FinalCTA'
import { Heart, Sparkles, Shield, Smile, Clock, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Harmonização Íntima Feminina | Instituto Rodovanski',
  description: 'Harmonização Íntima Feminina para rejuvenescimento e bem-estar. Procedimentos seguros e discretos com a Dra. Karina Rodovansky. Agende sua avaliação.',
  keywords: 'harmonização íntima feminina, rejuvenescimento íntimo, estética íntima feminina, ninfoplastia sem cirurgia',
}

const problems = [
  { text: 'Sinto desconforto ou vergonha com minha aparência íntima' },
  { text: 'Perdi a confiança após gestação ou envelhecimento' },
  { text: 'Sinto flacidez ou perda de volume' },
  { text: 'Tenho desconforto em atividades do dia a dia' },
  { text: 'Gostaria de melhorar minha autoestima' },
  { text: 'Busco reconectar-me com meu corpo' },
]

const benefits = [
  {
    icon: Heart,
    title: 'Rejuvenescimento',
    description: 'Restauração da aparência e firmeza da região íntima',
  },
  {
    icon: Sparkles,
    title: 'Mais Confiança',
    description: 'Sinta-se bem consigo mesma e reconecte-se com seu corpo',
  },
  {
    icon: Shield,
    title: '100% Seguro',
    description: 'Procedimentos aprovados com produtos de alta qualidade',
  },
  {
    icon: Smile,
    title: 'Bem-Estar',
    description: 'Melhora funcional e estética para sua qualidade de vida',
  },
  {
    icon: Clock,
    title: 'Rápido',
    description: 'Procedimentos realizados em consultório com rápida recuperação',
  },
  {
    icon: Star,
    title: 'Resultados Naturais',
    description: 'Aparência harmônica e natural',
  },
]

const faqs = [
  {
    question: 'Quais procedimentos estão incluídos na Harmonização Íntima Feminina?',
    answer: 'A harmonização pode incluir preenchimento labial, bioestimuladores para firmeza, radiofrequência para rejuvenescimento e outros tratamentos personalizados conforme a necessidade de cada paciente.',
  },
  {
    question: 'O procedimento é doloroso?',
    answer: 'Não. Utilizamos anestesia tópica e/ou local para garantir total conforto. A maioria das pacientes relata apenas uma leve sensação de pressão.',
  },
  {
    question: 'Quanto tempo dura o resultado?',
    answer: 'Dependendo do procedimento realizado, os resultados podem durar de 12 a 24 meses. Protocolos de manutenção podem prolongar os efeitos.',
  },
  {
    question: 'Há risco de perda de sensibilidade?',
    answer: 'Não. Nossos procedimentos são realizados com técnicas que preservam totalmente a sensibilidade da região.',
  },
  {
    question: 'Qual o tempo de recuperação?',
    answer: 'A maioria dos procedimentos permite retorno às atividades normais em 24-48 horas. Relações íntimas devem ser evitadas por 7-10 dias.',
  },
  {
    question: 'Preciso de preparo antes do procedimento?',
    answer: 'Orientações específicas serão fornecidas na consulta de avaliação. Geralmente, recomenda-se evitar depilação na região 3 dias antes.',
  },
  {
    question: 'É possível fazer durante o período menstrual?',
    answer: 'Recomendamos evitar agendar o procedimento durante o período menstrual para maior conforto e higiene.',
  },
  {
    question: 'Os resultados são permanentes?',
    answer: 'Os resultados são duradouros, mas não permanentes. Sessões de manutenção são recomendadas para preservar os resultados ao longo do tempo.',
  },
]

export default function FemininoPage() {
  return (
    <>
      <LandingHero
        badge="Cuidado e Delicadeza"
        headline="RECONECTE-SE COM SEU CORPO"
        subheadline="Harmonização Íntima Feminina com resultados naturais"
        bullets={[
          'Rejuvenescimento e firmeza',
          'Procedimentos não-invasivos',
          'Recuperação rápida',
          'Atendimento acolhedor e discreto',
        ]}
        ctaText="QUERO SABER MAIS"
        ctaLink="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a Harmonização Íntima Feminina."
        imageSrc="/images/ByJhon12.25-05.jpeg"
        imageAlt="Dra. Karina Rodovansky - Harmonização Íntima Feminina"
      />

      <ProblemSection
        title="Você se identifica?"
        subtitle="Muitas mulheres passam por situações semelhantes e buscam reconectar-se com seu corpo"
        problems={problems}
      />

      <SolutionSection
        title="Harmonização Íntima Feminina"
        subtitle="Tratamentos personalizados para realçar sua beleza natural e bem-estar"
      />

      <BenefitsGrid
        title="Benefícios do Tratamento"
        subtitle="Cuide de você com procedimentos seguros e resultados reais"
        benefits={benefits}
      />

      <FAQAccordion
        title="Perguntas Frequentes"
        subtitle="Tire todas as suas dúvidas sobre os procedimentos"
        faqs={faqs}
      />

      <FinalCTA
        headline="Cuide de você hoje"
        subheadline="Agende sua avaliação e descubra como podemos ajudá-la"
        ctaText="AGENDAR AVALIAÇÃO"
        ctaLink="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação para Harmonização Íntima Feminina."
      />
    </>
  )
}
