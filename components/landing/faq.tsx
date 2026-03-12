"use client"

import { useState } from "react"

const faqs = [
  {
    q: "What makes UMFST-UMCH unique?",
    a: "UMFST-UMCH is Germany\u2019s first private international medical campus \u2014 a branch of the Romanian University of Medicine, Pharmacy, Science and Technology (UMFST) of T\u00E2rgu Mure\u0219. The entire 6-year MBBS programme is taught in English, combining German clinical excellence with an internationally vibrant campus life in Hamburg.",
  },
  {
    q: "Do I need NEET to apply?",
    a: "No. UMFST-UMCH does not require NEET. There are no minimum grades or specific subject requirements. You just need to have graduated from high school (CBSE or CISCE). Admission is based on a motivation interview and a short evaluation in Biology, Chemistry, and General Knowledge.",
  },
  {
    q: "Is the degree recognised in India?",
    a: "Yes. The programme is accredited by the Indian Medical Council and listed in the World Directory of Medical Schools, enabling you to take the FMGE if you choose to return to India. It is also automatically recognised across the EU, UK (no PLAB), USA (USMLE eligible), Canada, UAE, and many other countries.",
  },
  {
    q: "Do I need to know German before starting?",
    a: "No previous knowledge of German is required. Free German language lessons are integrated into the curriculum with teachers on-site. You\u2019ll reach B2 level in the first 2 years and prepare for C1 with a focus on medical terminology by graduation.",
  },
  {
    q: "When does the programme start and how do I apply?",
    a: "The winter semester typically starts between late September and mid-October. You can apply online at any time \u2014 even before receiving your high school diploma. The process is simple: online document submission, a motivation-based interview, and a short evaluation. Apply early to secure your spot!",
  },
  {
    q: "What about clinical training during studies?",
    a: "UMFST-UMCH offers hands-on learning from the very start. You\u2019ll train in over 30 teaching hospitals and more than 100 teaching clinics across Germany and Europe. 4-week clinical internships are possible from the 1st year of studies.",
  },
  {
    q: "Is Hamburg safe for Indian students?",
    a: "Absolutely. Germany is one of the safest countries in Europe with fair and inclusive immigration laws. Hamburg is a modern, cosmopolitan city with excellent public transport, healthcare, and a growing Indian student community at UMFST-UMCH.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-primary/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-semibold text-primary">
                  {faq.q}
                </span>
                <svg
                  className={`size-5 shrink-0 text-primary/40 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  open === i ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
