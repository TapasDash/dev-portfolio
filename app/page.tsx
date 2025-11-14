'use client'

import Hero from '@/components/hero'
import StatsBanner from '@/components/stats-banner'
import Manifesto from '@/components/manifesto'
import ProjectArsenal from '@/components/project-arsenal'
import ContactForm from '@/components/contact-form'

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <StatsBanner />
      <Manifesto />
      <ProjectArsenal />
      <ContactForm />
    </main>
  )
}
