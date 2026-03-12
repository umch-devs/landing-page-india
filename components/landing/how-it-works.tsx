import CallToActionLink from "../shared/CallToActionLink"

const steps = [
  {
    number: "01",
    title: "Online Application",
    description:
      "Submit your application documents online from the comfort of your home. No minimum grades or specific subject requirements \u2014 just your high school diploma (CBSE or CISCE).",
  },
  {
    number: "02",
    title: "Interview & Short Evaluation",
    description:
      "Complete a short online interview about your motivation for studying medicine, followed by a brief assessment in Biology, Chemistry, and General Knowledge \u2014 no trick questions.",
  },
  {
    number: "03",
    title: "Receive & Sign Your Contract",
    description:
      "Once you\u2019ve passed, you\u2019ll receive your study contract. Sign it and secure your spot \u2014 you\u2019re ready to start your medical studies at UMFST-UMCH Hamburg!",
  },
]

export function HowItWorks() {
  return (
    <section id="pathway" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Simple Application Process
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Apply in 3 Easy Steps &mdash; Entirely Online
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Complete the entire application process online from the comfort of
            your sofa.
            <br /> No need to travel for entrance exams or interviews.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="absolute top-8 right-0 hidden h-0.5 w-8 translate-x-full bg-accent md:block" />
              )}
              <div className="flex flex-col">
                <span className="mb-4 text-4xl font-black text-accent">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <CallToActionLink titel="Start Your Application Now" />
          <p className="mt-3 text-sm text-muted-foreground">
            Free and non-binding. Apply early &mdash; even before or with your
            diploma.
          </p>
        </div>
      </div>
    </section>
  )
}
