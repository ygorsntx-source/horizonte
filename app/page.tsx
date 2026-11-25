import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { AboutUs } from '@/components/about-us'
import { ServiceArea } from '@/components/service-area'
import { Faq } from '@/components/faq'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <AboutUs />
        <ServiceArea />
        <Faq />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileCtaBar />
      <WhatsAppFloat />
    </>
  )
}
