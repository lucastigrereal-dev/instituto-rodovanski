import type { Metadata } from 'next'
import LandingHero from '@/components/landing/LandingHero'
import ProblemSection from '@/components/landing/ProblemSection'
import SolutionSection from '@/components/landing/SolutionSection'
import BenefitsGrid from '@/components/landing/BenefitsGrid'
import FAQAccordion from '@/components/landing/FAQAccordion'
import FinalCTA from '@/components/landing/FinalCTA'
import { Sparkles, Shield, TrendingUp, Clock, Stethoscope, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Preenchimento de Glúteos sem Prótese | Instituto Rodovanski',
  description: 'Preenchimento de Glúteos com ácido hialurônico e bioestimuladores. Volume e contorno natural sem cirurgia. Dra. Karina Rodovansky. Agende sua avaliação.',
  keywords: 'preenchimento de glúteos, bumbum sem prótese, aumento de glúteos sem cirurgia, bioestimulador glúteos',
}

const problems = [
  { text: 'Quero mais volume, mas tenho medo de cirurgia' },
  { text: 'Meus glúteos perderam firmeza com o tempo' },
  { text: 'Busco um contorno mais definido' },
  { text: 'Não quero prótese de silicone' },
  { text: 'Quero resultado natural, não artificial' },
  { text: 'Preciso de recuperação rápida' },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Aumento de Volume',
    description: 'Ganho de volume proporcional e natural',
  },
  {
    icon: Sparkles,
    title: 'Contorno Definido',
    description: 'Modelagem que realça as curvas naturais',
  },
  {
    icon: Stethoscope,
    title: 'Sem Cirurgia',
    description: 'Procedimento minimamente invasivo',
  },
  {
    icon: Shield,
    title: 'Seguro',
    description: 'Produtos aprovados ANVISA',
  },
  {
    icon: Clock,
    title: 'Recuperação Rápida',
    description: 'Retorno às atividades em poucos dias',
  },
  {
    icon: Star,
    title: 'Resultado Natural',
    description: 'Ninguém percebe que foi feito',
  },
]

const faqs = [
  {
    question: 'Qual produto é utilizado no preenchimento?',
    answer: 'Utilizamos ácido hialurônico de alta densidade e/ou bioestimuladores de colágeno, ambos com registro ANVISA e amplamente utilizados em procedimentos estéticos.',
  },
  {
    question: 'Quanto de volume é possível ganhar?',
    answer: 'O ganho depende de cada caso. Em média, é possível adicionar de 300ml a 600ml de volume distribuídos em sessões. O protocolo é personalizado na avaliação.',
  },
  {
    question: 'O procedimento substitui a prótese?',
    answer: 'Para aumentos moderados e melhora de contorno, sim. Para aumentos muito significativos, a prótese ainda pode ser mais indicada. Avaliamos cada caso individualmente.',
  },
  {
    question: 'Quanto tempo dura o resultado?',
    answer: 'Com ácido hialurônico, de 18 a 24 meses. Com bioestimuladores, os resultados são progressivos e podem durar ainda mais com sessões de manutenção.',
  },
  {
    question: 'Posso sentar normalmente após o procedimento?',
    answer: 'Nas primeiras 48-72 horas, recomendamos evitar pressão direta prolongada. Após esse período, atividades normais podem ser retomadas.',
  },
  {
    question: 'O procedimento é doloroso?',
    answer: 'Utilizamos anestesia local para garantir conforto total. A maioria dos pacientes relata apenas leve desconforto nos dias seguintes.',
  },
  {
    question: 'Quantas sessões são necessárias?',
    answer: 'Depende do resultado desejado. Geralmente, 1 a 3 sessões com intervalo de 30-60 dias entre elas.',
  },
  {
    question: 'Posso fazer exercícios depois?',
    answer: 'Recomendamos evitar exercícios físicos intensos por 7-10 dias. Caminhadas leves podem ser feitas após 48 horas.',
  },
]

export default function GluteosPage() {
  return (
    <>
      <LandingHero
        badge="Sem Cirurgia, Sem Prótese"
        headline="GLÚTEOS NATURAIS E DEFINIDOS"
        subheadline="Preenchimento de Glúteos com técnicas avançadas"
        bullets={[
          'Aumento de volume sem prótese',
          'Contorno natural e proporcional',
          'Sem cortes ou cicatrizes',
          'Recuperação em poucos dias',
        ]}
        ctaText="QUERO SABER MAIS"
        ctaLink="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o Preenchimento de Glúteos."
        imageSrc="/images/ByJhon12.25-06.jpeg"
        imageAlt="Dra. Karina Rodovansky - Preenchimento de Glúteos"
      />

      <ProblemSection
        title="Você se identifica?"
        subtitle="Muitas pessoas buscam melhorar o contorno dos glúteos de forma natural"
        problems={problems}
      />

      <SolutionSection
        title="Preenchimento de Glúteos"
        subtitle="A alternativa moderna e segura para quem busca curvas naturais"
      />

      <BenefitsGrid
        title="Benefícios do Procedimento"
        subtitle="Volume e definição sem os riscos de uma cirurgia"
        benefits={benefits}
      />

      <FAQAccordion
        title="Perguntas Frequentes"
        subtitle="Tire suas dúvidas sobre o preenchimento"
        faqs={faqs}
      />

      <FinalCTA
        headline="Conquiste as curvas que você deseja"
        subheadline="Agende sua avaliação e conheça o melhor protocolo para você"
        ctaText="AGENDAR AVALIAÇÃO"
        ctaLink="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação para Preenchimento de Glúteos."
      />
    </>
  )
}
