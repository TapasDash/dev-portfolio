import { Shield, ShieldAlert, BadgeCheck, Mail, ArrowRight, Terminal } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 min-h-screen text-on-surface font-mono uppercase tracking-widest text-[10px] sm:text-xs leading-relaxed monitor-scanline">

      {/* Top Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-primary-fixed mb-24 gap-4">
        <div>OPERATOR_ID: REVENUE_TECHNOLOGIST</div>
        <div className="flex items-center gap-6">
          <span>LOCATION: REMOTE_US</span>
          <div className="flex gap-2">
            <div className="w-3 h-2 bg-primary-fixed" />
            <div className="w-4 h-2 bg-primary-fixed opacity-50" />
            <div className="w-2 h-2 bg-primary-fixed" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mb-24">
        <div className="flex items-center gap-2 text-primary-fixed mb-8">
          <div className="w-2 h-2 bg-primary-fixed animate-pulse-block" />
          <span>SYSTEM STATUS: OPERATIONAL</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9] text-white mb-16 uppercase">
          THE DEVELOPER WHO CARES<br />
          MORE ABOUT YOUR <br className="hidden sm:block" />
          <span className="text-primary-fixed">CUSTOMERS</span> THAN MY CODE
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md text-on-surface-variant">
            EXECUTION OF HIGH-PRECISION SOFTWARE ARCHITECTURE DESIGNED FOR MAXIMUM FISCAL IMPACT. REJECTING GENERIC SOLUTIONS IN FAVOR OF MISSION-CRITICAL PERFORMANCE.
          </div>
          <div className="text-right">
            <div className="text-on-surface-variant mb-1 text-[10px]">SUBJECT NAME</div>
            <div className="text-2xl font-display font-bold text-white tracking-widest">TAPAS DASH</div>
          </div>
        </div>
      </section>

      <hr className="border-t border-outline my-16" />

      {/* Philosophy Section */}
      <section className="mb-24">
        <div className="text-primary-fixed mb-8">
          // PHILOSOPHY.SYS
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold italic tracking-tight leading-[1] text-white">
          "I DON'T JUST SHIP FEATURES. I OPTIMIZE FOR THE BOTTOM LINE. IF THE CODE DOESN'T CONTRIBUTE TO THE REVENUE ENGINE, IT IS TECHNICAL DEBT."
        </h2>
      </section>

      {/* Track Record */}
      <section className="mb-24">
        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-12 gap-4">
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">TRACK RECORD</h2>
          <div className="text-on-surface-variant">[ DEPLOYMENT_HISTORY ]</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "FINTECH SECURITY",
              id: "01/03",
              icon: ShieldAlert,
              desc: "HARDENED INFRASTRUCTURE FOR ASSET MANAGEMENT AND CRYPTOGRAPHIC TRANSACTION VALIDATION.",
              tags: ["NODE.JS", "AWS", "POSTGRESQL"],
            },
            {
              title: "HR COMPLIANCE",
              id: "02/03",
              icon: BadgeCheck,
              desc: "AUTOMATED REGULATORY REPORTING AND EMPLOYEE DATA VERIFICATION SYSTEMS AT SCALE.",
              tags: ["TYPESCRIPT", "NEXT.JS", "TESTING"],
            },
            {
              title: "ELITE JOB BOARD",
              id: "03/03",
              icon: Shield,
              desc: "AI-DRIVEN MATCHING ENGINE FOR HIGH-VALUABILITY CANDIDATE ACQUISITION PIPELINES.",
              tags: ["OPENAI", "NEXT.JS", "AWS"],
            },
          ].map((item) => (
            <div key={item.id} className="border border-outline p-6 flex flex-col justify-between h-full bg-black hover:border-primary-fixed/50 transition-colors">
              <div className="flex justify-between items-center mb-12 text-primary-fixed">
                <item.icon className="w-5 h-5" />
                <span className="text-on-surface-variant text-[10px]">{item.id}</span>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-4 tracking-wider">{item.title}</h3>
                <p className="text-on-surface-variant text-[10px] leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-primary-fixed text-black px-2 py-0.5 font-bold text-[9px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deployment Timeline */}
      <section className="mb-24">
        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-12 gap-4">
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">DEPLOYMENT TIMELINE</h2>
          <div className="text-on-surface-variant flex items-center gap-2">
             ARCHIVE_ID <span className="text-primary-fixed">[ LIVE_SESSION ]</span>
          </div>
        </div>

        <div className="space-y-8">
          {[
            { role: "PRESENT // LEAD_ENGINEER", company: "TECHYPE", desc: "ARCHITECTING REVENUE-CRITICAL SYSTEMS AND MANAGING TECHNICAL DEBT MITIGATION STRATEGIES.", active: true },
            { role: "2023 - 2024 // SENIOR_DEV", company: "REAL11 FANTASY SPORTS", desc: "HIGH-CONCURRENCY PLATFORM ENGINEERING FOR REAL-TIME SPORTS DATA AND TRANSACTIONAL INTEGRITY.", active: false },
            { role: "2021 - 2023 // SOFTWARE_ENG", company: "THINK FUTURE TECHNOLOGIES", desc: "ENTERPRISE-GRADE SOLUTION ARCHITECTURE AND LEGACY SYSTEM MODERNIZATION.", active: false },
            { role: "EARLY_CAREER // DEVELOPER", company: "THEFLAK", desc: "FOUNDATIONAL WEB DEVELOPMENT WITH A FOCUS ON CLIENT CONVERSION METRICS.", active: false },
          ].map((job, i) => (
            <div key={i} className="flex flex-col lg:flex-row justify-between items-start gap-4 group">
              <div className="flex gap-6 w-full lg:w-3/4">
                <div className="mt-1">
                  <div className="w-3 h-3 border border-outline group-hover:border-primary-fixed transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-widest mb-2">{job.company}</h3>
                  <div className="text-on-surface-variant max-w-2xl text-[10px]">
                    {job.desc}
                  </div>
                </div>
              </div>
              <div className={`text-[10px] md:text-xs font-bold shrink-0 ${job.active ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                {job.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Establish Connection */}
      <section className="mb-24 border border-outline p-6 md:p-12">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          <div className="max-w-sm">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight mb-6">ESTABLISH<br />CONNECTION</h2>
            <p className="text-on-surface-variant leading-relaxed">
              I AM CURRENTLY SELECTIVE ABOUT NEW ENGAGEMENTS. IF YOUR VENTURE REQUIRES HIGH-PRECISION REVENUE TECHNOLOGY, INITIALIZE CONTACT.
            </p>
          </div>
          
          <div className="flex-1 max-w-lg flex flex-col gap-4">
            <a href="mailto:TAPASDASH017@GMAIL.COM" className="border border-outline hover:border-primary-fixed bg-black text-white p-4 flex justify-between items-center transition-colors group">
              <span className="tracking-widest">TAPASDASH017@GMAIL.COM</span>
              <ArrowRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary-fixed transition-colors" />
            </a>
            <div className="grid grid-cols-2 gap-4">
         <a
  href="https://github.com/tapasdash"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-outline hover:border-primary-fixed bg-black text-white p-4 text-center transition-colors"
>
  GITHUB: TAPASDASH
</a>

<a
  href="https://www.linkedin.com/in/tapas-dash-41374a138/"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-outline hover:border-primary-fixed bg-black text-white p-4 text-center transition-colors"
>
  LINKEDIN
</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-outline text-[9px] sm:text-[10px]">
        <div className="text-primary-fixed">
          © 2024 SOVEREIGN_OPERATOR // ALL RIGHTS RESERVED
        </div>
        <div className="text-on-surface-variant flex gap-6">
          <a href="#" className="hover:text-white transition-colors">GITHUB</a>
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
             TERMINAL_LOG
          </a>
        </div>
      </footer>

    </div>
  );
}
