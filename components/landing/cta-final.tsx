import { Button } from "@/components/ui/button"
import CallToActionLink from "../shared/CallToActionLink"

export function CtaFinal() {
  return (
    <section id="apply" className="bg-accent py-20 text-primary md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left: CTA text */}
          <div className="text-center lg:flex-1 lg:text-left">
            <h2 className="text-3xl font-bold md:text-4xl">
              Your Journey to Becoming a Doctor Starts Here
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-primary lg:mx-0">
              Apply now to UMFST-UMCH Hamburg &mdash; Germany&apos;s first
              international medical campus. <br />
              Fully English-taught.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <CallToActionLink titel="Apply Now &mdash; Free &amp; Non-Binding" />
              <Button
                size="lg"
                variant="outline"
                className="h-10 rounded-full border border-white bg-accent/10 px-8 text-base font-semibold text-white hover:border-primary hover:bg-primary/20 hover:text-primary"
                asChild
              >
                <a
                  href="https://edu.UMFST-UMCH.de/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Online Consultation
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-primary">
              Including a virtual campus tour. Our admissions team will get back
              to you within 24 hours.
            </p>
          </div>

          {/* Right: Contact form */}
          <div className="w-full lg:max-w-md">
            <form className="space-y-5 rounded-2xl bg-white p-8 shadow-lg md:p-10">
              <h3 className="text-xl font-bold text-primary">Contact Us</h3>
              <p className="text-sm text-muted-foreground">
                Have questions? Our admissions team will get back to you within
                24&nbsp;hours.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1.5 block text-sm font-medium text-primary"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1.5 block text-sm font-medium text-primary"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-primary"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-primary text-sm font-semibold text-white hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
