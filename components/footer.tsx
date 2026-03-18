import Image from "next/image"
import Link from "next/link"
import cisLogo from "../public/images/logos/cis_member_logo.png"
import emilCoin from "../public/images/logos/george_emil_palade_coin.webp"
import umfstLogo from "../public/images/logos/UMFST_Logo.svg"
import umchLogo from "../public/images/logos/university_targu_mures_medical_campus_hamburg_germany_logo.svg"

const quickLinks = [
  {
    label: "About UMFST-UMCH",
    href: "https://edu.UMFST-UMCH.de/about-UMFST-UMCH/",
  },
  {
    label: "Medical Programm",
    href: "https://edu.UMFST-UMCH.de/medical-programm/",
  },
  {
    label: "Medical Foundation Track",
    href: "https://edu.UMFST-UMCH.de/medical-foundation-track/",
  },
  {
    label: "Hamburg Campus",
    href: "https://edu.UMFST-UMCH.de/hamburg-campus/",
  },
  {
    label: "Accreditations",
    href: "https://edu.UMFST-UMCH.de/accreditations/",
  },
  { label: "News & Events", href: "https://edu.UMFST-UMCH.de/news-events/" },
  { label: "Shop", href: "https://edu.UMFST-UMCH.de/shop/" },
  { label: "Contact Us", href: "https://edu.UMFST-UMCH.de/contact-us/" },
  { label: "Imprint", href: "https://edu.UMFST-UMCH.de/imprint/" },
  {
    label: "Privacy Policy",
    href: "https://edu.UMFST-UMCH.de/privacy-policy/",
  },
]

const resources = [
  { label: "Apply Now", href: "https://edu.UMFST-UMCH.de/apply-now/" },
  {
    label: "Application Process",
    href: "https://edu.UMFST-UMCH.de/application-process/",
  },
  { label: "Tuition", href: "https://edu.UMFST-UMCH.de/tuition/" },
]

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/umaborad/",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@UMFST-UMCH_hamburg",
    icon: TikTokIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/UMFST-UMCHamburg",
    icon: FacebookIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@UMFST-UMCH_hamburg",
    icon: YouTubeIcon,
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/r/UMFST-UMCH/",
    icon: RedditIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/UMFST-UMCH-hamburg/",
    icon: LinkedInIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/494020934850",
    icon: WhatsAppIcon,
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto_auto]">
          {/* UMFST-UMCH Hamburg */}
          <div className="flex flex-col gap-3">
            <Link className="flex flex-col" href="https://edu.umch.de/">
              <Image
                src={umchLogo}
                alt="UMFST-UMCH Logo"
                width={350}
                height={140}
              />
              <p className="text-md font-semibold text-accent">
                UMFST-UMCH University Medicine of
                <br />
                Targu Mures Campus Hamburg
              </p>
            </Link>
            <address className="space-y-0.5 text-sm text-white/70 not-italic">
              <p>Albert-Einstein-Ring 11-15</p>
              <p>22761 Hamburg, Germany</p>
              <p>
                <a href="tel:+494020934850" className="hover:text-white">
                  +49 (0) 40-2093485-00
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@edu.UMFST-UMCH.de"
                  className="hover:text-white"
                >
                  info@edu.UMFST-UMCH.de
                </a>
              </p>
            </address>

            {/* Branch divider */}
            <div className="my-6 flex items-center gap-4">
              <span className="shrink-0 text-sm text-white/50">
                A branch of the
              </span>
              <div className="h-px flex-1 bg-white/20" />
            </div>

            {/* UMFST Targu Mures */}
            <div className="flex flex-col gap-3">
              <Link className="flex flex-col" href="https://edu.umch.de/">
                <Image
                  className="mb-3"
                  src={umfstLogo}
                  alt="UMFST Targu Mures Logo"
                  width={300}
                  height={46}
                />
                <p className="text-md font-semibold text-accent">
                  University of Medicine, Pharmacy,
                  <br />
                  Natural Sciences and Technology of
                  <br />
                  Targu Mures
                </p>
              </Link>
              <address className="space-y-0.5 text-sm text-white/70 not-italic">
                <p>Gheorghe Marinescu, 38</p>
                <p>540139 Targu Mures, Romania</p>
                <p>
                  <a href="tel:+40265215551" className="hover:text-white">
                    +40 (0) 265-215-551
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:informatiipublice@umfst.ro"
                    className="hover:text-white"
                  >
                    informatiipublice@umfst.ro
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Spacer on large screens */}
          <div className="hidden lg:block" />

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-accent">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-accent">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Nobel laureate */}
            <div className="flex items-center gap-3">
              <Image
                src={emilCoin}
                alt={"George Emil Palade Coin"}
                width={70}
                height={70}
              />
              <p className="text-sm leading-snug text-white/60">
                <strong className="text-white/80">George Emil Palade</strong>{" "}
                <br />
                Nobel laureate and namesake of our university
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <social.icon />
                </a>
              ))}
            </div>

            {/* CIS Member */}
            <div className="text-sm">
              <Image
                src={cisLogo}
                alt={"CIS Member Logo"}
                width={200}
                height={50}
              />
              <p className="text-white/50">
                Council of international
                <br />
                schools
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="mt-6 text-center text-xs text-white/40">
            ©{new Date().getFullYear()} - UMFST-UMCH - University Medicine of
            Targu Mures Campus Hamburg
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Social Icons ---------- */

function InstagramIcon() {
  return (
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  )
}

function RedditIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="9.5" cy="13.5" r="1.5" />
      <circle cx="14.5" cy="13.5" r="1.5" />
      <path d="M12 18.5c-2 0-3.5-.9-4-2h8c-.5 1.1-2 2-4 2z" />
      <path d="M22 12a10 10 0 1 0-10 10 10 10 0 0 0 10-10zm-4.5-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 4c.6 0 1.1.1 1.6.4L15.4 3a1 1 0 1 1 .7 1.7l-1.3.8A8 8 0 0 1 20 12H4a8 8 0 0 1 5.2-6.5l-1.3-.8A1 1 0 1 1 8.6 3l1.8 1.4c.5-.3 1-.4 1.6-.4z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07a8.16 8.16 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.58a1.1 1.1 0 0 0-.8.38 3.37 3.37 0 0 0-1.05 2.51c0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zm-5.42 7.4A9.87 9.87 0 0 1 7 20.13l-.36-.21-3.73.98.99-3.63-.24-.38a9.87 9.87 0 0 1-1.51-5.26C2.15 6.25 6.4 2 11.78 2a9.6 9.6 0 0 1 6.82 2.83A9.6 9.6 0 0 1 21.42 11.66c0 5.38-4.38 9.75-9.76 9.75l.39.37zm8.33-18.3A11.8 11.8 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93a11.88 11.88 0 0 0 1.59 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.58 0 11.94-5.35 11.94-11.93a11.87 11.87 0 0 0-3.56-8.39z" />
    </svg>
  )
}
