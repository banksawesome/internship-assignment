"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    badge: "NEW IMAGE MODEL",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the latest real and cinematic WAN 2.2 model. Exceptional prompt adherence and ultra-realistic features.",
    buttonText: "Try WAN 2.2",
    backgroundImage: "/futuristic-woman-face-with-neural-network-overlay.jpg",
    baseColor: "bg-slate-900",
  },
  {
    id: 2,
    badge: "NEW IMAGE MODEL",
    title: "Open Source",
    subtitle: "FLUX1 Krea",
    description:
      "We've made it our mission to FLUX1 Krea model open-source. Download and run our models entirely, read the technical report, or generate with it in Krea Image.",
    buttonText: "Try Open Source",
    backgroundImage: "/whiskey-bottle-on-wooden-table-luxury-setting.jpg",
    baseColor: "bg-amber-900",
  },
  {
    id: 3,
    badge: "NEW IMAGE MODEL",
    title: "Open Source",
    subtitle: "FLUX1 Krea",
    description:
      "We've made it our mission to FLUX1 Krea model open-source. Download and run our models entirely, read the technical report, or generate with it in Krea Image.",
    buttonText: "Try Open Source",
    backgroundImage: "/whiskey-bottle-on-wooden-table-luxury-setting.jpg",
    baseColor: "bg-amber-900",
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(slideInterval)
  }, [])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index)
  }

  return (
    <div className="flex flex-col mb-8 p-4">
      <div className="flex w-full overflow-hidden rounded-2xl mb-4">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4" 
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
          onTransitionEnd={() => setIsTransitioning(false)}
        >
          {slides.map((slide) => (
            <Card
              key={slide.id}
              className={`relative overflow-hidden ${slide.baseColor} border-0 flex-shrink-0 rounded-2xl`}
              style={{ width: "calc(50% - 8px)", height: "400px", padding: "0px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity duration-500"
                style={{
                  backgroundImage: `url('${slide.backgroundImage}')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
              <div className="relative h-full flex flex-col justify-end text-white z-10">
                <Badge
                  variant="secondary"
                  className={`absolute top-4 left-4 text-white text-xs px-2 py-1 rounded-full bg-transparent uppercase font-semibold tracking-wider`}
                >
                  {slide.badge}
                </Badge>
                <div className="justify-end p-8 text-white">
                  <div className="relative w-full text-center mb-10 pointer-events-none">
                    <h2 className="text-5xl font-extrabold mb-2 drop-shadow-2xl">{slide.title}</h2>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full">
                            <div className="max-w-xl">
                                <p className="text-3xl font-bold mb-2">{slide.subtitle}</p>
                                <small className="text-gray-200">{slide.description}</small>
                            </div>
                            <div className="mt-4 sm:mt-0">
                                {slide.buttonText && (
                                    <Button className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-colors duration-200">
                                        {slide.buttonText}
                                    </Button>
                                )}
                            </div>
                        </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2 mb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent" onClick={prevSlide}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent" onClick={nextSlide}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
