import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,120,200,0.25)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,80,160,0.2)_0%,_transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <span className="size-2 animate-pulse rounded-full bg-accent" />
            Admissions Open for 2026
          </div>
          <h1 className="text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl lg:text-6xl">
            International MBBS Program in English{" "}
            <span className="text-accent">Start at UMFST-UMCH</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            UMFST-UMCH Hamburg — Germany&apos;s first international medical
            campus. Study MBBS fully in English. EU-accredited, globally
            recognized, and open to{" "}
            <span className="font-medium text-accent">Indian students.</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              variant={"outline"}
              size="lg"
              className="h-12 rounded-full border-none bg-amber-300 px-8 text-base font-semibold text-primary hover:border-amber-400 hover:bg-amber-400 max-sm:w-full"
              asChild
            >
              <Link
                href="https://application-portal.umch.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Link>
            </Button>
            <Button
              variant={"outline"}
              size="lg"
              className="h-12 rounded-full border border-accent/30 bg-accent/10 px-8 text-base font-semibold text-accent hover:bg-accent/20 hover:text-white max-sm:w-full"
              asChild
            >
              <a href="#info-pack">Request Free Information</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <CheckCircle /> EU-Accredited Degree
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle /> Taught 100% in English
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle /> Huge Indian Student Community
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
