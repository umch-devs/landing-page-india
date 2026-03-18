import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import Certificates from "@/components/certificates"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/shared/BackToTop"
import { cn } from "@/lib/utils"
import "./globals.css"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "UMFST-UMCH — Your Pathway to a Medical Career in Germany",
  description:
    "From MBBS at UMFST-UMCH Hamburg to a paid residency in Germany. No entrance exam, no tuition fees for specialist training, and a work contract from Day 1.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        fontSans.variable
      )}
    >
      <body>
        {children}
        <Certificates />
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
