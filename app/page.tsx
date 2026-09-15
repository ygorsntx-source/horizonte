import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { Services } from '@/components/services'
import { Problems } from '@/components/problems'
import { HowItWorks } from '@/components/how-it-works'
import { ServiceArea } from '@/components/service-area'
import { Testimonials } from '@/components/testimonials'
import { ContactSection } from '@/components/contact-section'
import { FinalCta } from '@/components/final-cta'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Problems />
        <HowItWorks />
        <ServiceArea />
        <Testimonials />
        <ContactSection />
        <FinalCta />
        <Faq />
      </main>
      <SiteFooter />
      <MobileCtaBar />
      <WhatsAppFloat />
    </>
  )
}
