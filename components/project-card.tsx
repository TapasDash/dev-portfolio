'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    businessImpact: string
    techStack: string[]
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showTech, setShowTech] = useState(false)

  return (
    <Card
      className="bg-card border border-border p-6 md:p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          {project.title}
        </h3>
        <button
          onClick={() => setShowTech(!showTech)}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
            showTech
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground border border-border'
          }`}
        >
          {showTech ? 'TECH' : 'IMPACT'}
        </button>
      </div>

      {/* Content Area - Toggle between Impact and Tech Stack */}
      <div className="min-h-32">
        {!showTech ? (
          // Business Impact
          <div className="border border-primary bg-primary/5 rounded-lg p-6">
            <div className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-widest">
              Business Impact
            </div>
            <p className="text-lg md:text-xl font-semibold text-primary">
              {project.businessImpact}
            </p>
          </div>
        ) : (
          // Tech Stack
          <div className="space-y-3">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="bg-muted text-foreground border-border hover:border-primary hover:text-primary transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
