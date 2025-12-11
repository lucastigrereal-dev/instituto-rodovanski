import type { Metadata } from 'next'
import LandingHero from '@/components/landing/LandingHero'
import ProblemSection from '@/components/landing/ProblemSection'
import SolutionSection from '@/components/landing/SolutionSection'
import BenefitsGrid from '@/components/landing/BenefitsGrid'
import FAQAccordion from '@/components/landing/FAQAccordion'
import FinalCTA from '@/components/landing/FinalCTA'

export const metadata: Metadata = {
  title: 'Harmonização Íntima Masculina | Método Intimax | Instituto Rodovanski',
  description: 'Harmonização Íntima Masculina com Método Intimax. Aumento de 1-4cm, zero perda de sensibilidade, procedimento não-cirúrgico. Resultado dura 12-24 meses. Agende sua avaliação.',
  keywords: 'harmonização íntima masculina, preenchimento peniano, aumento peniano, método intimax, harmonização masculina',
}

const problems = [
  { text: 'Sinto insegurança na hora H' },
  { text: 'Evito situações íntimas por vergonha' },
  { text: 'Minha autoestima foi afetada' },
  { text: 'Já pensei nisso mas tenho medo' },
  { text: 'Não sei se é seguro' },
  { text: 'Tenho vergonha de buscar ajuda' },
]

const faqs = [
  {
    question: 'O procedimento dói?',
    answer: 'Não. O procedimento é realizado com anestesia local potente, garantindo total conforto durante todo o processo. A maioria dos pacientes relata apenas uma leve pressão.',
  },
  {
    question: 'Vou perder sensibilidade?',
    answer: 'Não. O preenchimento é aplicado em camadas específicas que não afetam os nervos sensitivos. A sensibilidade é completamente preservada.',
  },
  {
    question: 'Quanto tempo dura o resultado?',
    answer: 'Depende do produto utilizado. Com ácido hialurônico, o resultado dura de 12 a 18 meses. Com bioestimuladores de colágeno, pode durar 24 meses ou mais.',
  },
  {
    question: 'É seguro?',
    answer: 'Sim, totalmente. O procedimento é aprovado pelo Conselho Federal de Medicina (CFM) e utiliza apenas produtos com registro na ANVISA. É realizado em ambiente hospitalar com todos os protocolos de segurança.',
  },
  {
    question: 'Vai ficar artificial?',
    answer: 'Não. Utilizamos técnicas avançadas para garantir um resultado proporcional e natural. O objetivo é realçar, não modificar de forma artificial.',
  },
  {
    question: 'Qual o tempo de recuperação?',
    answer: 'O repouso sexual recomendado é de 7 a 10 dias. Atividades normais podem ser retomadas em 24 a 48 horas. Evite exercícios físicos intensos por 1 semana.',
  },
  {
    question: 'Minha parceira vai perceber?',
    answer: 'Ela vai perceber sua confiança renovada! Visualmente, o resultado é completamente natural. Não há cicatrizes ou marcas visíveis.',
  },
  {
    question: 'Preciso de acompanhante?',
    answer: 'Não é obrigatório, mas recomendamos ter alguém para levá-lo para casa após o procedimento, já que pode haver leve desconforto ao caminhar nas primeiras horas.',
  },
  {
    question: 'Quanto custa o procedimento?',
    answer: 'O valor varia conforme o protocolo indicado para cada caso. Agende sua avaliação gratuita para receber um orçamento personalizado.',
  },
  {
    question: 'E se eu não gostar do resultado?',
    answer: 'O ácido hialurônico é reversível - pode ser dissolvido caso necessário. Mas nossa taxa de satisfação é de 98%, então isso raramente acontece.',
  },
]

export default function MasculinoPage() {
  return (
    <>
      <LandingHero
        badge="Método Exclusivo Intimax"
        headline="RECUPERE SUA CONFIANÇA"
        subheadline="Harmonização Íntima Masculina com Método Intimax"
        bullets={[
          'Aumento de 1-4cm de circunferência',
          'Zero perda de sensibilidade',
          'Procedimento não-cirúrgico',
          'Resultado dura 12-24 meses',
        ]}
        ctaText="QUERO SABER MAIS"
        ctaLink="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre a Harmonização Íntima Masculina."
        imageSrc="/images/ByJhon12.25-04.jpeg"
        imageAlt="Dra. Karina Rodovansky - Harmonização Íntima Masculina"
      />

      <ProblemSection
        title="Você se identifica?"
        subtitle="Milhares de homens passam por situações semelhantes todos os dias"
        problems={problems}
      />

      <SolutionSection
        title="Método Intimax"
        subtitle="Uma abordagem completa e personalizada para resultados excepcionais"
      />

      <BenefitsGrid
        title="Benefícios do Procedimento"
        subtitle="Resultados reais que transformam vidas"
      />

      <FAQAccordion
        title="Perguntas Frequentes"
        subtitle="Tire todas as suas dúvidas sobre o procedimento"
        faqs={faqs}
      />

      <FinalCTA
        headline="Recupere sua confiança hoje"
        subheadline="Agende sua avaliação gratuita e dê o primeiro passo para uma nova vida"
        ctaText="AGENDAR AVALIAÇÃO GRATUITA"
        ctaLink="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação para Harmonização Íntima Masculina."
      />
    </>
  )
}
