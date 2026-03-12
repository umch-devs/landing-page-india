"use client"

import { useState } from "react"

const testimonials = [
  {
    name: "Priya Sharma",
    country: "India",
    semester: "4. Semester",
    image: "/testimonials/priya.jpg",
    quote:
      "Hamburg is the perfect place to study and live. The international community at UMCH made me feel at home from day one.",
  },
  {
    name: "Arjun Mehta",
    country: "India",
    semester: "6. Semester",
    image: "/testimonials/arjun.jpg",
    quote:
      "The quality of education is outstanding — I feel perfectly prepared for my medical career. The hands-on approach sets UMCH apart.",
  },
  {
    name: "Neha Patel",
    country: "India",
    semester: "8. Semester",
    image: "/testimonials/neha.jpg",
    quote:
      "Direct patient contact from the very first year makes all the difference. UMCH truly combines theory with real-world practice.",
  },
  {
    name: "Rohan Gupta",
    country: "India",
    semester: "10. Semester",
    image: "/testimonials/rohan.jpg",
    quote:
      "Studying medicine in English in Germany was my dream — UMCH made it possible without any language barriers or entrance exams.",
  },
  {
    name: "Ananya Singh",
    country: "India",
    semester: "2. Semester",
    image: "/testimonials/ananya.jpg",
    quote:
      "The free German language course integrated into the curriculum is a huge bonus. I'm already at B1 level after just one year!",
  },
]

export function Testimonials() {
  const [startIndex, setStartIndex] = useState(0)

  const visibleCount = 3

  const next = () => {
    setStartIndex((prev) =>
      prev + 1 > testimonials.length - visibleCount ? 0 : prev + 1
    )
  }

  const prev = () => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - visibleCount : prev - 1
    )
  }

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            First-Hand Insights
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            What Our Students Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Authentic glimpses into everyday student life — straight from our
            students. They share their experiences with the modern medical campus,
            first-class facilities, practice-oriented education, and life in
            Hamburg.
          </p>
        </div>

        <div className="relative">
            {/* Cards grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials
                .slice(startIndex, startIndex + visibleCount)
                .map((t) => (
                  <div
                    key={t.name}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-shadow hover:shadow-lg"
                  >
                    {/* Image area */}
                    <div className="relative h-56 bg-slate-200">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                      {/* Country badge */}
                      <span className="absolute right-3 top-3 rounded-full border border-white/30 bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                        {t.country}
                      </span>

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex size-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="ml-0.5 size-6 text-primary"
                          >
                            <path d="M8 5.14v14l11-7-11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-base font-bold text-primary">
                        {t.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t.semester}
                      </p>

                      <div className="mt-4 flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 size-4 shrink-0 text-amber-500"
                        >
                          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
                          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
                        </svg>
                        <p className="text-sm leading-relaxed text-slate-600">
                          {t.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Navigation arrows */}
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonials"
                className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 transition-colors hover:border-primary hover:text-primary"
              >
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
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next testimonials"
                className="flex size-10 items-center justify-center rounded-full border border-primary bg-primary text-white transition-colors hover:bg-primary/90"
              >
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
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </section>
  )
}
