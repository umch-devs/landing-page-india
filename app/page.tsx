import { Hero } from "@/components/landing/hero"
import { Footer } from "@/components/landing/footer"
import { Faq } from "@/components/landing/faq"
import { Events } from "@/components/landing/events"
import { Comparison } from "@/components/landing/comparison"
import { HowItWorks } from "@/components/landing/how-it-works"
import { HurryUp } from "@/components/landing/hurry-up"
import { StudyExperience } from "@/components/landing/settlement-benefits"
import { CtaFinal } from "@/components/landing/cta-final"
import { KeyHighlights } from "@/components/landing/key-highlights"
import { InfoPack } from "@/components/landing/info-pack"
import { WhyUMFSTUMCH } from "@/components/landing/why-umch"
import { Testimonials } from "@/components/landing/testimonials"

export default function Page() {
  return (
    <main>
      <Hero />
      <KeyHighlights />
      <WhyUMFSTUMCH />
      <Comparison />
      <StudyExperience />
      <HowItWorks />
      <Testimonials />
      <Events />
      <HurryUp />
      <InfoPack />
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  )
}
