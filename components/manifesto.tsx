export default function Manifesto() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-muted-foreground mb-8 uppercase">
              My Manifesto
            </h2>
            <blockquote className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="text-primary">Most people see code.</span>
              <br />
              <span className="text-foreground">I see leverage.</span>
            </blockquote>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I partner with high-growth teams to architect systems that don't just work—they scale. Every decision I make is grounded in business logic. I build technology that compounds leverage, reduces friction, and turns technical complexity into competitive advantage.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              The best engineering isn't flashy. It's invisible. It's the infrastructure that fades into the background while your business accelerates. That's what I deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
