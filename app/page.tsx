import { Comparison } from "@/components/landing/comparison"
import { CtaFinal } from "@/components/landing/cta-final"
import { Events } from "@/components/landing/events"
import { Faq } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { HurryUp } from "@/components/landing/hurry-up"
import { InfoPack } from "@/components/landing/info-pack"
import { KeyHighlights } from "@/components/landing/key-highlights"
import { StudyExperience } from "@/components/landing/settlement-benefits"
import { Testimonials } from "@/components/landing/testimonials"
import { WhyUMFSTUMCH } from "@/components/landing/why-umch"

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
