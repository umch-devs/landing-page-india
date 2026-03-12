import { Button } from "@/components/ui/button"
import CallToActionLink from "../shared/CallToActionLink"

const highlights = [
  {
    icon: "\u{1F3E5}",
    title: "30+ Teaching Hospitals",
    description:
      "Clinical rotations in over 30 teaching hospitals and more than 100 teaching clinics across Germany and Europe. 4-week internships possible from the 1st year of studies.",
  },
  {
    icon: "\u{1F4DC}",
    title: "Accredited by Indian Medical Council",
    description:
      "Listed in the World Directory of Medical Schools. The programme is accredited by the Indian Medical Council, enabling you to take the FMGE if you choose to return to India.",
  },
  {
    icon: "\u{1F5E3}\uFE0F",
    title: "Free German Course Included",
    description:
      "German lessons integrated into the curriculum with teachers on-site. Reach B2 in 2 years and prepare for C1 with a focus on medical terminology \u2014 all at no extra cost.",
  },
  {
    icon: "\u{1F1E9}\u{1F1EA}",
    title: "Made in Germany",
    description:
      "Your degree is automatically recognised in the EU, Switzerland, Norway, the UK (no PLAB required), UAE, India, and enables eligibility in the USA (USMLE) and Canada.",
  },
]

export function StudyExperience() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Your Study Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            World-Class Medical Education &mdash; Right Here in Hamburg
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            At UMFST-UMCH you don&apos;t just get a degree &mdash; you get
            hands-on clinical training, global recognition, and everything you
            need to succeed as a doctor worldwide.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-primary/10 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <span className="text-3xl">{h.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-primary">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {h.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CallToActionLink titel="Apply Now" />
          <Button
            size="lg"
            variant="outline"
            className="h-10 rounded-full border-primary/20 px-8 text-base font-semibold text-primary hover:bg-primary/5"
            asChild
          >
            <a href="#info-pack">Get Our Free UMFST-UMCH Brochure</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
