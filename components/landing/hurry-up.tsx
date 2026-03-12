import CallToActionLink from "../shared/CallToActionLink"

const milestones = [
  { month: "August", label: "Congratulations!\nYou receive your A-Levels" },
  { month: "May", label: "Congratulations!\nYou receive your CBSE or CISCE" },
  { month: "July", label: "" },
  { month: "September", label: "Academic\nyear starts" },
]

export function HurryUp() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold leading-tight text-primary md:text-3xl">
              Boost Your Chances:<br />
              The Perfect Application Timeline for Future Indian Students
            </h2>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="flex size-28 items-center justify-center rounded-full bg-slate-200 md:size-32">
              <span className="text-5xl md:text-6xl mb-3">🇮🇳</span>
            </div>
          </div>
        </div>

        {/* Timeline area */}
        <div className="relative mt-16">
          {/* Callout notes */}
          <div className="mb-8 flex items-start justify-between">
            {/* Don't forget note */}
            <div className="-rotate-3 rounded bg-amber-300 px-4 py-2 shadow-md">
              <p className="text-sm font-bold text-primary">
                Don&apos;t forget to<br />apply early!
              </p>
            </div>
            {/* Deadline note */}
            <div className="text-right">
              <p className="text-sm font-bold text-primary">
                Application deadline!
              </p>
              <p className="text-sm text-muted-foreground">
                Last chance to apply now<br />for autumn
              </p>
            </div>
          </div>

          {/* Best time to apply label */}
          <div className="relative mb-2">
            <div className="inline-flex w-1/2 items-center justify-center rounded-full bg-primary px-6 py-2">
              <div className="text-center">
                <p className="text-sm font-bold text-white">Best time to apply!</p>
                <p className="text-xs text-white/70">(even before or with your diploma)</p>
              </div>
            </div>
          </div>

          {/* Gradient timeline bar */}
          <div className="relative h-5 w-full overflow-hidden rounded-full">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #22c55e 0%, #86efac 25%, #fde68a 50%, #fbbf24 70%, #f97316 85%, #ef4444 100%)",
              }}
            />
          </div>

          {/* Month markers */}
          <div className="relative mt-3">
            <div className="flex justify-between">
              {milestones.map((m) => (
                <div key={m.month} className="flex flex-col items-center text-center" style={{ width: `${100 / milestones.length}%` }}>
                  <span className="text-sm font-bold text-primary">{m.month}</span>
                  {m.label && (
                    <p className="mt-1 whitespace-pre-line text-xs leading-tight text-muted-foreground">
                      {m.label.includes("Academic") ? (
                        <span className="font-semibold text-amber-600">{m.label}</span>
                      ) : (
                        <>
                          <span className="font-semibold text-primary">
                            {m.label.split("\n")[0]}
                          </span>
                          <br />
                          {m.label.split("\n")[1]}
                        </>
                      )}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <CallToActionLink titel="Hurry up to apply now!" />
          </div>
        </div>
      </div>
    </section>
  )
}
