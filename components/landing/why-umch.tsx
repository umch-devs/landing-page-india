import CallToActionLink from "../shared/CallToActionLink"

const benefits = [
  {
    icon: "\u{1F393}",
    title: "100% English-Taught MBBS",
    description:
      "Complete your entire medical degree in English. No German language required to start \u2014 no pre-med, foundation year, or Studienkolleg needed.",
  },
  {
    icon: "\u2705",
    title: "Accessible Admission",
    description:
      "No minimum grades or specific subject requirements \u2014 just ensure you have graduated from high school (CBSE or CISCE).",
  },
  {
    icon: "\u{1F1EA}\u{1F1FA}",
    title: "EU-Accredited & Globally Recognised",
    description:
      "Your degree is automatically recognised in the EU, Switzerland, Norway, UK (no PLAB), UAE, India (FMGE eligible), and enables eligibility for USMLE (USA) and Canada.",
  },
  {
    icon: "\u{1F52C}",
    title: "Hands-On Learning in Small Groups",
    description:
      "Benefit from a practice-oriented approach with personalised instruction in small groups. Over 30 teaching hospitals and 100+ clinics for clinical rotations.",
  },
  {
    icon: "\u{1F30D}",
    title: "Global Campus Experience",
    description:
      "No study place limitations for Indian students. Study in a budget-friendly, internationally vibrant environment where cultures converge and ideas flourish.",
  },
  {
    icon: "\u{1F5E3}\uFE0F",
    title: "Free German Language Course",
    description:
      "Free German lessons integrated into the curriculum \u2014 reach B2 level in the first 2 years and C1 with medical terminology focus by graduation.",
  },
]

export function WhyUMFSTUMCH() {
  return (
    <section id="why-UMFST-UMCH" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Why UMFST-UMCH?
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Germany&apos;s First International Medical Campus
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            UMFST-UMCH Hamburg offers Indian students everything they need to
            start a successful medical career &mdash; world-class education,
            accessible admission, and a globally recognised degree.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-3xl">{b.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-primary">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CallToActionLink titel="Secure Your Spot - Apply Now" />
        </div>
      </div>
    </section>
  )
}
