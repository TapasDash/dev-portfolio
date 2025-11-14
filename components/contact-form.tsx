'use client'

import { FormEvent, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Github, Linkedin, FileText, X } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError('Failed to send message. Please try again.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-sm font-bold tracking-widest text-muted-foreground mb-12 uppercase text-center">
          Let's Talk Leverage
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
              rows={6}
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <Button
            type="submit"
            disabled={loading || submitted}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 transition-all duration-200"
          >
            {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
          </Button>
        </form>

        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-6">Or reach out directly</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/tapasdash"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
            >
              <Github size={18} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="mailto:tapasdash017@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
            >
              <Mail size={18} />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tapas-dash-41374a138/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
            >
              <Linkedin size={18} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://x.com/tapasdash017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
            >
              <X size={18} />
              <span className="text-sm font-medium">X</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1QXE3USq6PO0i0SrlN3nxyfp4JMTjC4L7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
            >
              <FileText size={18} />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
