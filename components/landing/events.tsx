import { Button } from "@/components/ui/button"
import Link from "next/link"
import CallToActionLink from "../shared/CallToActionLink"

const admissionDates = [
  { day: "Mo", date: "12. January", year: "2026" },
  { day: "We", date: "18. February", year: "2026" },
  { day: "Mo", date: "30. March", year: "2026" },
  { day: "We", date: "15. April", year: "2026" },
]

export function Events() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Simple Application Process
          </p>
          <h2 className="mt-5 text-3xl font-bold text-primary md:text-4xl">
            Get Informed — Online &amp; In Person
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Info sessions, consultations, and admission deadlines at a glance.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-16 grid items-start gap-12 lg:grid-cols-5">
          {/* LEFT: Events list */}
          <div className="space-y-0 lg:col-span-3">
            {/* Online Info Session */}
            <div className="group flex w-full gap-5 border-b border-border py-7 first:pt-0 last:border-b-0">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-between">
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-primary">
                    Online Info Session
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                      31 OCT
                    </span>
                    <span className="font-medium text-primary">
                      10:00 - 12:00
                    </span>
                    <span className="text-muted-foreground/50">·</span>
                    <span className="rounded-full border border-green-500 bg-green-200 px-3 py-0.5 text-xs font-semibold text-green-700">
                      Online
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Join from the comfort of your home — get all your questions
                    answered live.
                  </p>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="self-center rounded-full border-primary/30 bg-transparent text-sm font-semibold text-primary hover:bg-primary/10 hover:text-primary max-sm:h-8 max-sm:w-full"
                  asChild
                >
                  <Link
                    href="https://go.oncehub.com/OnlineInfoEventinEnglish"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Now
                  </Link>
                </Button>
              </div>
            </div>

            {/* Individual Consultation */}
            <div className="group flex w-full gap-5 border-b border-border py-7">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-between">
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-primary">
                    Individual Consultation
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium">Your Advisor Team</span>
                    <span className="text-muted-foreground/50">·</span>
                    <span className="font-medium text-primary">
                      30 min. personal session
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Personal &amp; confidential — get tailored advice for your
                    application.
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="self-center rounded-full border-primary/30 bg-transparent text-sm font-semibold text-primary hover:bg-primary/10 hover:text-primary max-sm:h-8 max-sm:w-full"
                  asChild
                >
                  <Link
                    href="https://go.oncehub.com/OpenCampusDay"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT: Admission dates timeline */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border bg-slate-50 p-6">
              <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Admission Dates
              </h3>

              {/* Timeline */}
              <div className="relative space-y-0">
                {/* Vertical line */}
                <div className="absolute top-4 bottom-4 left-[18px] w-px bg-primary/20" />

                {admissionDates.map((d, i) => (
                  <div
                    key={d.date}
                    className="relative flex items-center gap-4 py-3.5"
                  >
                    {/* Dot */}
                    <div className="relative z-10 flex size-[38px] shrink-0 items-center justify-center">
                      <div
                        className={`size-3 rounded-full ${i === 0 ? "bg-accent ring-4 ring-accent/20" : "bg-primary"}`}
                      />
                    </div>
                    {/* Content */}
                    <div className="flex flex-1 items-center justify-between">
                      <div>
                        <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                          {d.day}
                        </span>
                        <p className="text-sm font-semibold text-primary">
                          {d.date}{" "}
                          <span className="font-normal text-muted-foreground">
                            {d.year}
                          </span>
                        </p>
                      </div>
                      <span className="rounded-full border border-green-500 bg-green-200 px-3 py-0.5 text-xs font-semibold text-green-700">
                        Available
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <CallToActionLink fullWidth />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
