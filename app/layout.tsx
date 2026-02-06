import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "TM Vishnu Mukundan | Portfolio",
  description:
    "Portfolio of TM Vishnu Mukundan - MEng in AI for Product Innovation at Duke University. Passionate about Data Science, AI, and Computer Vision.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="f90c945e-3971-46df-ad9e-b49ca20998e1"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}
