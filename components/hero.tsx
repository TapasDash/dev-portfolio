'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToNext = () => {
    const statsSection = document.querySelector('[data-section="stats"]')
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-6 text-center py-20">
        {/* Main Headline */}
        <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
          <span className="gradient-text">TAPAS DASH</span>
        </h1>

        {/* Sub-headline */}
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-16 font-light tracking-wide">
          Revenue-Focused Technologist
        </h2>

        {/* Scroll Chevron */}
        <button
          onClick={scrollToNext}
          className="mx-auto flex justify-center items-center absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          aria-label="Scroll to next section"
        >
          <ChevronDown
            size={32}
            className="text-primary animate-bounce-down"
          />
        </button>
      </div>
    </section>
  )
}
