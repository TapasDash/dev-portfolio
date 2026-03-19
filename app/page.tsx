import { BentoCard } from "@/components/ui/bento-card";
import { Button } from "@/components/ui/button";
import { 
  TerminalSquare, 
  TrendingUp, 
  ShieldCheck, 
  ShieldAlert, 
  Briefcase,
  History,
  Cpu,
  Mail,
  Code,
  Layers
} from "lucide-react";

export default function Page() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 md:p-12 pt-24 md:pt-32 space-y-10">
      
      {/* Hero Section */}
      <BentoCard className="relative overflow-hidden monitor-glow border-none ring-1 ring-white/5">
        <div className="absolute top-8 right-8 text-on-surface-variant/10">
          <TerminalSquare className="w-48 h-48" strokeWidth={1} />
        </div>
        
        <div className="relative z-10 flex flex-col items-start gap-8">
          <div className="flex items-center gap-2 rounded-full border border-primary-fixed/20 bg-primary-fixed/10 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-primary-fixed animate-pulse-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed">
              System Online: Reliability 99.9%
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl md:text-7xl font-display font-medium tracking-tight text-on-surface leading-[1.1]">
            The Developer Who Cares More About Your <span className="text-primary-fixed drop-shadow-[0_0_15px_rgba(121,255,91,0.4)]">Customers</span> Than My Code.
          </h1>

          <p className="text-xl md:text-2xl text-on-surface-variant font-display">
            Revenue-Focused Technologist.
          </p>
        </div>
      </BentoCard>

      {/* Philosophy & ROI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <BentoCard className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-display font-bold">Philosophy</h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              You know that feeling about three months after a big launch? When the initial excitement is gone and you realize your backend is held together with duct tape, hope, and the sheer willpower of your one overworked DevOps guy.
            </p>
            <p className="text-primary-fixed font-medium glow-text">
              Yeah, I fix that. Most people see code. I see leverage. I see the difference between a slow API that kills your conversion rates and a fast one that feels like magic.
            </p>
          </div>
        </BentoCard>

        <div className="rounded-xl bg-primary-fixed p-7 text-on-primary-fixed shadow-[0_0_30px_rgba(121,255,91,0.2)] flex flex-col justify-between h-full">
          <div className="flex justify-end">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-6xl font-display font-bold tracking-tighter mb-2">
              $2.4M
            </div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-8">
              ROI Delivered
            </div>
            <div className="w-full bg-on-primary-fixed/20 h-1 rounded-full overflow-hidden">
              <div className="bg-on-primary-fixed w-[85%] h-full" />
            </div>
            <div className="text-xs font-medium mt-3 opacity-90">
              Infrastructure Efficiency
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "FinTech Security",
            case: "CASE 001",
            icon: ShieldAlert,
            desc: "Built an investment platform with rock-solid KYC and payment integrations. Designed for high-trust institutional environments.",
            tags: ["Node.js", "PostgreSQL"],
          },
          {
            title: "HR Compliance",
            case: "CASE 002",
            icon: ShieldCheck,
            desc: "Architected an HR system to manage payroll and highly sensitive compliance data. Scaled to handle 10k+ concurrent staff nodes.",
            tags: ["Next.js", "AWS"],
          },
          {
            title: "Elite Job Board",
            case: "CASE 003",
            icon: Briefcase,
            desc: "Single-handedly architected a job board for the super-rich, complete with an AI that writes decent job descriptions.",
            tags: ["TypeScript", "OpenAI"],
          },
        ].map((item, i) => (
          <BentoCard key={i} className="flex flex-col justify-between gap-6 hover:bg-surface-container-highest transition-colors decoration-slice">
            <div className="flex items-center justify-between">
              <item.icon className="w-5 h-5 text-primary-fixed" />
              <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">{item.case}</span>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>
            <div className="flex gap-2 mt-auto">
              {item.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 ghost-border rounded bg-surface-container-highest text-on-surface-variant">
                  {tag}
                </span>
              ))}
            </div>
          </BentoCard>
        ))}
      </div>

      {/* Timeline & Stack */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <BentoCard className="md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <History className="w-5 h-5 text-primary-fixed" />
            <h2 className="text-xl font-display font-bold">Career Timeline</h2>
          </div>
          <div className="space-y-8 pl-2">
            {[
              { role: "Software Developer", company: "Techype", date: "AUG 2023 - PRESENT", active: true },
              { role: "Full Stack Developer", company: "REAL11 FANTASY SPORTS", date: "DEC 2022 - PRESENT", active: false },
              { role: "Software Engineer", company: "Think Future Technologies", date: "OCT 2021 - NOV 2022", active: false },
              { role: "Software Developer", company: "theflak", date: "DEC 2020 - OCT 2021", active: false },
            ].map((job, i) => (
              <div key={i} className="relative pl-6">
                <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full ${job.active ? 'bg-primary-fixed shadow-[0_0_8px_#79ff5b]' : 'bg-surface-variant'}`} />
                {i !== 3 && <div className="absolute left-[0px] top-4 w-[1px] h-full bg-surface-variant/50" />}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-on-surface">{job.company}</h3>
                    <div className="text-sm text-on-surface-variant mt-1">{job.role}</div>
                  </div>
                  <div className={`text-[10px] font-bold tracking-wider ${job.active ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                    {job.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        <BentoCard>
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-5 h-5 text-primary-fixed" />
            <h2 className="text-xl font-display font-bold">Tech Stack</h2>
          </div>
          <div className="space-y-4">
            {[
              { name: "Node.js", level: "EXPERT" },
              { name: "TypeScript", level: "CORE" },
              { name: "Next.js", level: "MASTER" },
              { name: "Backend Architecture", level: "SENIOR" },
              { name: "Mobile Applications", level: "HYBRID" },
              { name: "Chatbot Development", level: "AI FLOW" },
            ].map(tech => (
              <div key={tech.name} className="flex items-center justify-between p-3 rounded-lg bg-surface-container-highest ghost-border">
                <span className="text-sm font-medium">{tech.name}</span>
                <span className="text-[10px] font-bold tracking-widest text-primary-fixed">{tech.level}</span>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>

      {/* Footer / CTA */}
      <div className="py-20 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Let's build something <span className="text-primary-fixed">valuable.</span>
        </h2>
        <p className="text-on-surface-variant max-w-lg mb-10">
          Available for select high-stakes engineering roles and high-impact consultations.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <Button size="lg" className="px-8">
            <Mail className="w-4 h-4 mr-2" />
            TAPASDASH017@GMAIL.COM
          </Button>
          <Button variant="secondary" size="icon-lg">
            <Code className="w-4 h-4" />
          </Button>
          <Button variant="secondary" size="icon-lg">
            <Layers className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-[10px] font-bold tracking-widest text-on-surface-variant uppercase gap-4">
          <span>COPYRIGHT © 2024 SOVEREIGN ENGINE</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-fixed transition-colors">GITHUB: TAPASDASH</a>
            <a href="#" className="hover:text-primary-fixed transition-colors">LINKEDIN: TAPAS-DASH-41374A138</a>
          </div>
        </div>
      </div>

    </div>
  );
}
