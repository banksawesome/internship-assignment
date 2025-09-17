import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ToolsGrid } from "@/components/tools-grid"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-6 mx-auto">
          <HeroSection />
        </main>
        <main className="container mx-auto px-4 pb-6">
          <ToolsGrid />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
