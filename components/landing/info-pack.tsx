"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function InfoPack() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !consent) return
    // TODO: connect to backend / email service
    setSubmitted(true)
  }

  return (
    <section id="info-pack" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
            Free Resources
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
            Your Admission Pack &mdash; Free Download
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Get all the important information about the application process, key
            dates, and programme structure &mdash; as a free PDF.
          </p>
        </div>

        {/* Content: image left + form right */}
        <div className="overflow-hidden rounded-2xl border shadow-lg md:grid md:grid-cols-2">
          {/* Left: visual card */}
          <div className="relative flex flex-col justify-end bg-primary p-8 md:p-10">
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit -rotate-2 rounded bg-amber-300 px-4 py-1.5 shadow-md">
              <p className="text-xs font-bold text-primary">
                All About Medical Studies at UMCH
              </p>
            </div>

            <h3 className="text-2xl leading-snug font-bold text-white md:text-3xl">
              Your Admission Pack &mdash;
              <br />
              Free Download
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              A complete guide covering programme structure, application steps,
              key dates &amp; important details &mdash; free as PDF.
            </p>
          </div>

          {/* Right: form */}
          <div className="bg-slate-50 p-8 md:p-10">
            {!submitted ? (
              <>
                <p className="mb-6 text-sm font-semibold text-primary">
                  Fill out the form &mdash; download instantly
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name *"
                      className="h-12 w-full rounded-lg border border-border bg-white px-4 pr-10 text-sm text-foreground transition outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                    <svg
                      className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-muted-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.5-1.632z"
                      />
                    </svg>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address *"
                      className="h-12 w-full rounded-lg border border-border bg-white px-4 pr-10 text-sm text-foreground transition outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                    <svg
                      className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2 text-muted-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 size-4 shrink-0 rounded border-border accent-primary"
                      required
                    />
                    I agree to the processing of my data in accordance with the{" "}
                    <a
                      href="https://edu.umch.de/privacy-policy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary"
                    >
                      privacy policy
                    </a>
                    .
                  </label>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 w-full rounded-full bg-primary px-8 text-base font-semibold text-white hover:bg-primary/90"
                  >
                    <svg
                      className="mr-2 size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    Download Now &mdash; Free
                  </Button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <span className="text-5xl">✅</span>
                <h3 className="mt-4 text-xl font-bold text-primary">
                  Thank you!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your Admission Pack is on its way to your inbox.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
