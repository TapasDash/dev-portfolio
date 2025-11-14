'use client'

import { useEffect, useState } from 'react'

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  {
    value: '100k+',
    label: 'Active Users Supported',
  },
  {
    value: '40%',
    label: 'Faster Response Times',
  },
  {
    value: '30%',
    label: 'Faster Release Cycles',
  },
  {
    value: '50%',
    label: 'Boost in User Engagement',
  },
]

export default function StatsBanner() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      data-section="stats"
      className="border-y border-border bg-card py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {mounted && stat.value}
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
