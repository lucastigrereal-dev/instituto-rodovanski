import Hero from '@/components/home/Hero'
import ProceduresGrid from '@/components/home/ProceduresGrid'
import AboutSection from '@/components/home/AboutSection'
import StatsSection from '@/components/home/StatsSection'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import LocationsSection from '@/components/home/LocationsSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ProceduresGrid />
      <AboutSection />
      <StatsSection />
      <TestimonialsCarousel />
      <WhyChooseUs />
      <LocationsSection />
      <CTASection />
    </>
  )
}
