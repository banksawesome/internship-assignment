import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Banks Awesome Internship Assignment",
  description: "A simple Next.js app with Tailwind CSS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} antialiased bg-background text-foreground`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
