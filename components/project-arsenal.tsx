'use client'

import ProjectCard from './project-card'

interface Project {
  id: string
  title: string
  businessImpact: string
  techStack: string[]
}

const projects: Project[] = [
  {
    id: 'scale-core',
    title: 'Scalability Overhaul',
    businessImpact: 'Scaled to support 100,000+ active users',
    techStack: ['Node.js', 'AWS', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'api-performance',
    title: 'API Performance Engine',
    businessImpact: '40% reduction in response times',
    techStack: ['Next.js', 'GraphQL', 'CDN', 'Edge Computing', 'TypeScript'],
  },
  {
    id: 'release-pipeline',
    title: 'Release Pipeline Acceleration',
    businessImpact: '30% faster release cycles',
    techStack: ['CI/CD', 'GitHub Actions', 'Terraform', 'Kubernetes', 'Monitoring'],
  },
  {
    id: 'user-engagement',
    title: 'Real-time Analytics Platform',
    businessImpact: '50% boost in user engagement metrics',
    techStack: ['React', 'WebSockets', 'Analytics', 'Machine Learning', 'BigQuery'],
  },
]

export default function ProjectArsenal() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm font-bold tracking-widest text-muted-foreground mb-16 uppercase">
          The Arsenal: Case Studies in Revenue
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
