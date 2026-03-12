import { Button } from "@/components/ui/button"

const cards = [
  {
    flag: "🇩🇪",
    badge: "No German knowledge required",
    title: "Free German Lessons for UMCH Students",
    description:
      "German lessons integrated into the curriculum with on-site teachers. Reach B2 in 2 years and prepare for C1 with medical terminology focus.",
    cta: "Medicine Degree Program",
    href: "https://edu.umch.de/medicine-degree-program/",
  },
  {
    flag: "🇮🇳",
    badge: "Accreditation for Indian Students",
    title: "Accreditation & International Recognition",
    description:
      "Accredited by the Indian Medical Council and listed in the World Directory of Medical Schools — enabling you to take the FMGE if you return to India.",
    cta: "Accreditation & Recognition",
    href: "https://edu.umch.de/accreditation-recognition/",
  },
  {
    flag: "",
    badge: "Early Integration into Clinical Practice",
    title: "Career Booster: Teaching Hospitals from 3rd Year",
    description:
      "Over 30 teaching hospitals and 100+ clinics in Germany and Europe. A 4-week internship per year is possible from the 1st year of studies.",
    cta: "Teaching Hospitals & Practices",
    href: "https://edu.umch.de/teaching-hospitals/",
  },
]

export function KeyHighlights() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            What Sets Us Apart
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Built for International Medical Students
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From free German courses to globally recognised accreditations and
            early clinical practice &mdash; discover what makes UMFST-UMCH the ideal
            choice for Indian students.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Image area */}
              <div className="relative h-52 bg-slate-200">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />

                {/* Flag */}
                {card.flag && (
                  <span className="absolute bottom-3 left-4 text-3xl drop-shadow-md">
                    {card.flag}
                  </span>
                )}

                {/* Yellow badge */}
                <div className="absolute bottom-4 right-4 -rotate-3 rounded bg-amber-300 px-3 py-1.5 shadow-md">
                  <p className="text-xs font-bold text-primary">{card.badge}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col bg-primary p-6">
                <h3 className="text-lg font-bold leading-snug text-white">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
                  {card.description}
                </p>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-white/30 bg-transparent text-sm font-semibold text-white hover:bg-white/10"
                    asChild
                  >
                    <a href={card.href} target="_blank" rel="noopener noreferrer">
                      {card.cta}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
