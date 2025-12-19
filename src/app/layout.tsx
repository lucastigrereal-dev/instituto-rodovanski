import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Instituto Goldstein | Harmonização Íntima e Estética',
  description: 'Clínica de estética premium especializada em Harmonização Íntima Masculina e Feminina, Preenchimento de Glúteos e Harmonização Facial. Dra. Karina Goldstein - São Paulo e Belo Horizonte.',
  keywords: 'harmonização íntima, harmonização masculina, preenchimento peniano, estética íntima, Dra. Karina Goldstein, método intimax',
  openGraph: {
    title: 'Instituto Goldstein | Harmonização Íntima e Estética',
    description: 'Transformação com naturalidade, técnica e discrição. Procedimentos estéticos de alta precisão.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
