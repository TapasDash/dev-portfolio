'use client'

import { Shield, ShieldAlert, BadgeCheck, ArrowRight, Server, Database, Cpu, Mail, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

export default function Page() {
  const [timeString, setTimeString] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Magnetic Button Hooks/Handlers
  const [heroMagneticStyle, setHeroMagneticStyle] = useState<React.CSSProperties>({});
  const [ctaMagneticStyle, setCtaMagneticStyle] = useState<React.CSSProperties>({});

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setHeroMagneticStyle({
      transform: `translate(${(x / rect.width) * 16}px, ${(y / rect.height) * 16}px)`,
      transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)',
    });
  };

  const handleHeroMouseLeave = () => {
    setHeroMagneticStyle({
      transform: 'translate(0px, 0px)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
    });
  };

  const handleCtaMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCtaMagneticStyle({
      transform: `translate(${(x / rect.width) * 16}px, ${(y / rect.height) * 16}px)`,
      transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)',
    });
  };

  const handleCtaMouseLeave = () => {
    setCtaMagneticStyle({
      transform: 'translate(0px, 0px)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
    });
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface relative overflow-x-hidden">
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-primary-fixed to-secondary transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Animated Mesh Background Blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-fixed/5 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/5 blur-[150px] animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-primary-fixed/3 blur-[100px] animate-blob animation-delay-4000" />
      </div>
      
      {/* Premium Glass Header Navigation */}
      <nav className="sticky top-0 z-40 w-full bg-surface/80 backdrop-blur-md border-b border-outline px-6 py-4 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg text-white tracking-tight">TAPAS DASH</span>
          <span className="text-primary-fixed/80 text-[10px] font-mono border border-primary-fixed/20 px-2 py-0.5 rounded-full bg-primary-fixed/5 font-semibold">/ AI ARCHITECT</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-on-surface-variant">
          <a href="#hero" className="hover:text-white transition-colors">Home</a>
          <a href="#value" className="hover:text-white transition-colors">Value</a>
          <a href="#track-record" className="hover:text-white transition-colors">Projects</a>
          <a href="#timeline" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Connect</a>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-on-surface-variant">
          <span className="hidden sm:inline border-l border-outline pl-4">{timeString} UTC</span>
        </div>
      </nav>

      {/* Main Container Wrapper */}
      <main className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 py-16 md:py-28 flex flex-col gap-24 md:gap-36">

        {/* Hero Section */}
        <section id="hero" className="scroll-mt-24 flex flex-col gap-10">
          <div className="flex items-center gap-2.5 text-xs text-primary-fixed font-mono font-semibold tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-fixed"></span>
            </span>
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>

          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight leading-[0.95] text-white">
              AI Agentic Systems<br />
              <span className="gradient-text-accent">Architecture.</span>
            </h1>
            
            <h2 className="text-xl sm:text-3xl font-display font-medium text-white/95 mt-2 leading-snug">
              I replace manual operations with autonomous AI pipelines.
            </h2>

            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed font-sans normal-case">
              Most tech companies slap a UI on ChatGPT. I build the backend logic. I pull LLMs out of the chatbox, architect complex DAG workflows, and build heavy RAG pipelines.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              onMouseMove={handleHeroMouseMove}
              onMouseLeave={handleHeroMouseLeave}
              style={heroMagneticStyle}
              className="bg-primary-fixed hover:bg-primary-fixed/90 text-surface font-semibold px-6 py-3 rounded-lg text-sm transition-all shadow-lg hover:shadow-primary-fixed/20 flex items-center gap-2 font-display cursor-pointer"
            >
              Request Architecture Audit
              <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="#track-record" 
              className="border border-outline hover:border-on-surface-variant text-on-surface px-6 py-3 rounded-lg text-sm transition-all flex items-center gap-2 font-display"
            >
              Case Studies
            </a>
          </div>
        </section>

        {/* The Pitch (About Me) */}
        <section id="value" className="scroll-mt-24 glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-6 max-w-3xl relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary-fixed">THE PITCH</span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Stop scaling headcount. Scale infrastructure.
            </h2>
            
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed font-sans normal-case">
              I pull LLMs out of the chatbox and build the actual backend logic. I architect complex DAG workflows and heavy RAG pipelines using strict, pure functional Node.js. No classes. No OOP bloat. Just stateless logic handling massive WebSocket traffic without dropping connections.
            </p>
          </div>
        </section>

        {/* Proof of Work (Case Study) */}
        <section id="track-record" className="scroll-mt-24 flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-outline pb-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Proof of Work</h2>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-outline bg-[#0c0c0c] text-[10px] sm:text-xs font-semibold text-on-surface-variant font-sans tracking-wide select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-pulse" />
              Case Study: Automating a Recruiting Agency
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "The Brain",
                icon: Cpu,
                desc: "Designed an autonomous agentic DAG using Mastra and Gemini 1.5 Flash.",
                tags: ["MASTRA", "GEMINI 1.5 FLASH", "DAG"],
              },
              {
                title: "The Data",
                icon: Database,
                desc: "Built a RAG pipeline to dynamically fetch, contextualize, and score candidate profiles.",
                tags: ["RAG", "VECTOR DB", "EMBEDDINGS"],
              },
              {
                title: "The Voice",
                icon: Server,
                desc: "Engineered a sub-800ms voice screening agent using Vapi and WebSockets.",
                tags: ["VAPI", "WEBSOCKETS", "REAL-TIME"],
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl flex flex-col justify-between h-full hover:-translate-y-1.5 transition-all duration-300 relative group"
              >
                <div className="flex justify-between items-center mb-10 text-primary-fixed">
                  <item.icon className="w-6 h-6" />
                  <span className="text-on-surface-variant text-xs font-mono font-semibold">0{index + 1}/03</span>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-3 font-display">{item.title}</h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed mb-6 font-sans normal-case">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="border border-outline bg-surface-variant/50 text-primary-fixed px-2 py-0.5 rounded text-[9px] font-mono tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border border-primary-fixed/20 bg-primary-fixed/5 p-6 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-primary-fixed font-bold tracking-widest text-[10px] font-mono block mb-1">EXECUTION RESULT</span>
              <p className="text-white text-xs sm:text-sm tracking-wider leading-relaxed font-sans normal-case">
                The Result: Agent conducts technical screens and fires webhooks with scores directly to the database.
              </p>
            </div>
            <div className="shrink-0 text-primary-fixed font-mono font-bold text-xs border border-primary-fixed/20 px-3 py-1 rounded bg-primary-fixed/5">
              STATUS: ACTIVE
            </div>
          </div>
        </section>

        {/* Services (The Offer) */}
        <section id="timeline" className="scroll-mt-24 flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-outline pb-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Services</h2>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-outline bg-[#0c0c0c] text-[10px] sm:text-xs font-semibold text-on-surface-variant font-sans tracking-wide select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse" />
              Active Retainers
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "AI INFRASTRUCTURE RETAINER", 
                desc: "Direct-to-architecture integration for US and EU teams. Zero employment overhead.", 
                active: true 
              },
              { 
                title: "AUTONOMOUS RAG/DAG PIPELINES", 
                desc: "Dynamic data retrieval and workflow execution.", 
                active: false 
              },
              { 
                title: "REAL-TIME VOICE AGENTS", 
                desc: "Sub-800ms inbound/outbound voice infrastructure.", 
                active: false 
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className={`glass-card p-6 rounded-xl flex flex-col justify-between h-full border ${service.active ? 'border-primary-fixed/20 shadow-[0_0_20px_rgba(0,255,102,0.05)]' : 'border-outline'} hover:-translate-y-1.5 transition-all duration-300`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono text-on-surface-variant">SERVICE 0{index + 1}</span>
                    {service.active && (
                      <span className="text-[9px] font-mono text-primary-fixed bg-primary-fixed/10 px-2 py-0.5 rounded-full font-bold">RECOMMENDED</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-display">{service.title}</h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed font-sans normal-case">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className="scroll-mt-24 border border-outline rounded-2xl p-8 md:p-14 bg-surface-container relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-fixed/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-12 justify-between items-center relative z-10">
            <div className="max-w-md flex flex-col gap-4 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">Audit Your Manual Workflows</h2>
              <p className="text-on-surface-variant leading-relaxed text-xs sm:text-sm normal-case font-sans">
                Send me your most labor-intensive process. I will send you a 90-second Loom architectural teardown detailing exactly how a stateless Node.js pipeline replaces it.
              </p>
            </div>
            
            <div className="shrink-0 w-full lg:w-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                onMouseMove={handleCtaMouseMove}
                onMouseLeave={handleCtaMouseLeave}
                style={ctaMagneticStyle}
                className="bg-primary-fixed hover:bg-primary-fixed/90 text-surface font-semibold px-8 py-4 rounded-xl text-sm transition-all shadow-lg hover:shadow-primary-fixed/20 flex items-center justify-center gap-2 font-display text-center w-full cursor-pointer"
              >
                Request Architecture Audit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-outline text-xs text-on-surface-variant select-none w-full">
          <div>
            © 2026 TAPAS DASH. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 font-semibold">
            <a 
              href="https://github.com/tapasdash" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white flex items-center gap-1 normal-case"
            >
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tapas-dash-41374a138/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white flex items-center gap-1 normal-case"
            >
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </footer>

      </main>

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
