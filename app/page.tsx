'use client'

import { Shield, ShieldAlert, BadgeCheck, Mail, ArrowRight, Terminal, X, ExternalLink, Cpu } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [timeString, setTimeString] = useState('');
  
  // Terminal interaction history state
  const [terminalHistory, setTerminalHistory] = useState<{
    type: 'input' | 'output' | 'error' | 'success';
    text: string;
  }[]>([
    { type: 'output', text: 'SOVEREIGN OS v4.1.9-STABLE (x86_64-port)' },
    { type: 'output', text: 'INITIALIZING SECURE LINK TO REMOTE HOST...' },
    { type: 'output', text: 'CONNECTION ESTABLISHED VIA ENCRYPTED PORT 3005.' },
    { type: 'output', text: 'TYPE "HELP" FOR A LIST OF SECURE SYSTEM COMMANDS.' },
    { type: 'output', text: '---------------------------------------------------' }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal history to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Update timezone clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut listener: Escape closes terminal, Backtick (`) toggles terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isTerminalOpen) {
        setIsTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTerminalOpen]);

  // Handle submit in interactive terminal shell
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = terminalInput.trim().toLowerCase();
    if (!input) return;

    const newHistory = [...terminalHistory, { type: 'input' as const, text: terminalInput.toUpperCase() }];
    let reply = '';
    let replyType: 'output' | 'error' | 'success' = 'output';

    switch (input) {
      case 'help':
        reply = `AVAILABLE SYSTEM UTILITIES:
  HELP       - DISPLAY THIS ACTIVE DIRECTORY
  ABOUT      - RETRIEVE OPERATOR PROFILE & PHILOSOPHY
  PROJECTS   - RETRIEVE ARCHIVED SYSTEM ARCHITECTURES
  TIMELINE   - RETRIEVE CHRONOLOGICAL EXP LOGS
  CONTACT    - CONNECT WITH THE SOVEREIGN OPERATOR
  CLEAR      - CLEAR SYSTEM HISTORY
  EXIT       - TERMINATE SECURE SHELL SESSION`;
        break;
      case 'about':
        reply = `OPERATOR DOSSIER:
  NAME: TAPAS DASH
  ROLE: REVENUE-FOCUSED TECHNOLOGIST & LEAD ENGINEER
  MISSION: DESIGNING SOFTWARE ARCHITECTURE FOR MAXIMUM FISCAL IMPACT.
  PHILOSOPHY: "IF CODE DOES NOT CONTRIBUTE TO THE REVENUE ENGINE, IT IS AN ELIMINABLE EXPENSE."`;
        replyType = 'success';
        break;
      case 'projects':
        reply = `PROJECT RECORD INTEGRITY CHECK: SECURE.

[PROJECT 01/03] - FINTECH SECURITY
  - DESCRIPTION: HARDENED INFRASTRUCTURE FOR ASSET MANAGEMENT & CRYPTO VALIDATION.
  - STACK: NODE.JS // AWS // POSTGRESQL

[PROJECT 02/03] - HR COMPLIANCE
  - DESCRIPTION: AUTOMATED REGULATORY COMPLIANCE SYSTEM AT SCALE.
  - STACK: TYPESCRIPT // NEXT.JS // TESTING

[PROJECT 03/03] - ELITE JOB BOARD
  - DESCRIPTION: MACHINE-LEARNING MATCHING ENGINE OPTIMIZED FOR PIPELINE CONVERSIONS.
  - STACK: OPENAI // NEXT.JS // AWS`;
        replyType = 'success';
        break;
      case 'timeline':
        reply = `DEPLOYMENT TIMELINE DECRYPTED:

  [PRESENT] LEAD ENGINEER @ TECHYPE
            - ARCHITECTING REVENUE-CRITICAL PLATFORMS AND REFACTORS.
  [2023-24] SENIOR DEV @ REAL11 FANTASY SPORTS
            - PLATFORM ENGINEERING FOR HIGH-CONCURRENCY TRANSACTIONAL INTEGRITY.
  [2021-23] SOFTWARE ENG @ THINK FUTURE TECHNOLOGIES
            - SYSTEM MODERNIZATION & SOLUTION ARCHITECTURE.
  [EARLIER] DEVELOPER @ THEFLAK
            - FOUNDATIONAL WEB AND CONVERSION PIPELINE DEVELOPMENT.`;
        break;
      case 'contact':
        reply = `ESTABLISH SECURE LINK VIA:
  - EMAIL:    TAPASDASH017@GMAIL.COM
  - GITHUB:   HTTPS://GITHUB.COM/TAPASDASH
  - LINKEDIN: HTTPS://WWW.LINKEDIN.COM/IN/TAPAS-DASH-41374A138/`;
        replyType = 'success';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'exit':
        setIsTerminalOpen(false);
        setTerminalInput('');
        return;
      default:
        reply = `COMMAND NOT FOUND: "${input.toUpperCase()}". TYPE "HELP" FOR A LIST OF VALID COMMANDS.`;
        replyType = 'error';
    }

    setTerminalHistory([...newHistory, { type: replyType, text: reply }]);
    setTerminalInput('');
  };

  return (
    <div className="w-full min-h-screen bg-black text-on-surface font-mono uppercase tracking-widest text-[10px] sm:text-xs leading-relaxed monitor-scanline relative selection:bg-primary-fixed selection:text-black">
      
      {/* Sticky Top HUD Header */}
      <nav className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-outline px-4 sm:px-8 py-3 flex justify-between items-center text-[10px] sm:text-xs tracking-widest text-primary-fixed font-mono select-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-fixed animate-ping rounded-full" />
            <span className="font-bold text-white">SOVEREIGN.OS</span>
          </div>
          <span className="hidden md:inline text-on-surface-variant font-normal">|</span>
          <span className="hidden md:inline text-on-surface-variant">OP_ID: REVENUE_TECH</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 md:gap-6 text-on-surface-variant">
          <a href="#hero" className="hover:text-primary-fixed transition-colors font-bold">[ HOME ]</a>
          <a href="#philosophy" className="hover:text-primary-fixed transition-colors font-bold">[ PHILOSOPHY ]</a>
          <a href="#track-record" className="hover:text-primary-fixed transition-colors font-bold">[ PROJECTS ]</a>
          <a href="#timeline" className="hover:text-primary-fixed transition-colors font-bold">[ TIMELINE ]</a>
          <a href="#contact" className="hover:text-primary-fixed transition-colors font-bold">[ CONNECT ]</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsTerminalOpen(true)}
            className="flex items-center gap-1.5 border border-primary-fixed/40 bg-primary-fixed/5 hover:bg-primary-fixed hover:text-black px-2.5 py-1 text-[9px] sm:text-[10px] text-primary-fixed font-bold tracking-wider transition-all duration-200 cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>TERMINAL.EXE</span>
          </button>
          <span className="hidden lg:inline text-on-surface-variant">{timeString}</span>
        </div>
      </nav>

      {/* Main Container Wrapper */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 py-12 md:py-24">

        {/* Top Header Information Panel */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-primary-fixed mb-20 md:mb-28 gap-4 border-b border-outline/30 pb-6">
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
        <section id="hero" className="mb-24 md:mb-32 scroll-mt-24">
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
            <div className="max-w-md text-on-surface-variant text-[11px] sm:text-xs leading-relaxed">
              EXECUTION OF HIGH-PRECISION SOFTWARE ARCHITECTURE DESIGNED FOR MAXIMUM FISCAL IMPACT. REJECTING GENERIC SOLUTIONS IN FAVOR OF MISSION-CRITICAL PERFORMANCE.
            </div>
            <div className="text-left md:text-right">
              <div className="text-on-surface-variant mb-1 text-[10px]">SUBJECT NAME</div>
              <div className="text-2xl font-display font-bold text-white tracking-widest">TAPAS DASH</div>
            </div>
          </div>
        </section>

        <hr className="border-t border-outline my-16 opacity-30" />

        {/* Philosophy Section */}
        <section id="philosophy" className="mb-24 md:mb-32 scroll-mt-24">
          <div className="text-primary-fixed mb-8 font-bold">
            // PHILOSOPHY.SYS
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold italic tracking-tight leading-[1.1] text-white max-w-4xl">
            "I DON'T JUST SHIP FEATURES. I OPTIMIZE FOR THE BOTTOM LINE. IF THE CODE DOESN'T CONTRIBUTE TO THE REVENUE ENGINE, IT IS TECHNICAL DEBT."
          </h2>
        </section>

        {/* Track Record */}
        <section id="track-record" className="mb-24 md:mb-32 scroll-mt-24">
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
              <div 
                key={item.id} 
                className="border border-outline p-6 flex flex-col justify-between h-full bg-black/40 backdrop-blur-sm hover:border-primary-fixed hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(0,255,0,0.1)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Visual Scanner Sweep overlay */}
                <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-fixed/20 to-transparent -translate-y-full group-hover:animate-sweep pointer-events-none" />

                <div className="flex justify-between items-center mb-12 text-primary-fixed">
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-on-surface-variant text-[10px] group-hover:text-primary-fixed transition-colors font-bold">{item.id}</span>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 tracking-wider group-hover:text-primary-fixed transition-colors">{item.title}</h3>
                  <p className="text-on-surface-variant text-[10px] leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="border border-primary-fixed/20 bg-primary-fixed/5 text-primary-fixed hover:bg-primary-fixed/20 hover:border-primary-fixed/40 transition-all duration-200 px-2 py-0.5 font-bold text-[9px] tracking-wider rounded-none select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deployment Timeline */}
        <section id="timeline" className="mb-24 md:mb-32 scroll-mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-baseline mb-12 gap-4">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">DEPLOYMENT TIMELINE</h2>
            <div className="text-on-surface-variant flex items-center gap-2">
               ARCHIVE_ID <span className="text-primary-fixed">[ LIVE_SESSION ]</span>
            </div>
          </div>

          <div className="space-y-8 relative before:absolute before:left-[10px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline/30">
            {[
              { role: "PRESENT // LEAD_ENGINEER", company: "TECHYPE", desc: "ARCHITECTING REVENUE-CRITICAL SYSTEMS AND MANAGING TECHNICAL DEBT MITIGATION STRATEGIES.", active: true },
              { role: "2023 - 2024 // SENIOR_DEV", company: "REAL11 FANTASY SPORTS", desc: "HIGH-CONCURRENCY PLATFORM ENGINEERING FOR REAL-TIME SPORTS DATA AND TRANSACTIONAL INTEGRITY.", active: false },
              { role: "2021 - 2023 // SOFTWARE_ENG", company: "THINK FUTURE TECHNOLOGIES", desc: "ENTERPRISE-GRADE SOLUTION ARCHITECTURE AND LEGACY SYSTEM MODERNIZATION.", active: false },
              { role: "EARLY_CAREER // DEVELOPER", company: "THEFLAK", desc: "FOUNDATIONAL WEB DEVELOPMENT WITH A FOCUS ON CLIENT CONVERSION METRICS.", active: false },
            ].map((job, i) => (
              <div key={i} className="flex flex-col lg:flex-row justify-between items-start gap-4 group relative">
                <div className="flex gap-6 w-full lg:w-3/4">
                  {/* Glowing, styled active indicators instead of empty brackets */}
                  <div className="mt-1 shrink-0 font-bold select-none z-10 bg-black text-[10px] sm:text-xs">
                    {job.active ? (
                      <span className="text-primary-fixed animate-pulse shadow-[0_0_8px_rgba(0,255,0,0.4)]">[▶]</span>
                    ) : (
                      <span className="text-outline group-hover:text-primary-fixed transition-colors">[✓]</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-widest mb-2 group-hover:text-primary-fixed transition-colors duration-200">{job.company}</h3>
                    <div className="text-on-surface-variant max-w-2xl text-[10px] leading-relaxed">
                      {job.desc}
                    </div>
                  </div>
                </div>
                <div className={`text-[10px] md:text-xs font-bold shrink-0 pl-10 lg:pl-0 ${job.active ? 'text-primary-fixed' : 'text-on-surface-variant group-hover:text-white transition-colors duration-200'}`}>
                  {job.role}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Establish Connection */}
        <section id="contact" className="mb-24 md:mb-32 border border-outline p-6 md:p-12 bg-black/35 backdrop-blur-sm scroll-mt-24 hover:border-primary-fixed/40 transition-colors duration-300">
          <div className="flex flex-col lg:flex-row gap-12 justify-between">
            <div className="max-w-sm">
              <h2 className="text-3xl font-display font-bold text-white tracking-tight mb-6">ESTABLISH<br />CONNECTION</h2>
              <p className="text-on-surface-variant leading-relaxed text-[11px] sm:text-xs">
                I AM CURRENTLY SELECTIVE ABOUT NEW ENGAGEMENTS. IF YOUR VENTURE REQUIRES HIGH-PRECISION REVENUE TECHNOLOGY, INITIALIZE CONTACT.
              </p>
            </div>
            
            <div className="flex-1 max-w-lg flex flex-col gap-4 w-full">
              <a 
                href="mailto:TAPASDASH017@GMAIL.COM" 
                className="border border-outline hover:border-primary-fixed bg-black text-white p-4 flex justify-between items-center transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,255,0,0.05)] group w-full"
              >
                <span className="tracking-widest truncate mr-4">TAPASDASH017@GMAIL.COM</span>
                <ArrowRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary-fixed group-hover:translate-x-1 transition-all shrink-0" />
              </a>
              
              {/* Stack vertically on mobile, grid-cols-2 on tablet/desktop */}
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 w-full">
                <a
                  href="https://github.com/tapasdash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-outline hover:border-primary-fixed hover:text-primary-fixed bg-black text-white p-4 text-center transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,255,0,0.05)] text-[10px] sm:text-xs truncate font-bold"
                >
                  GITHUB: TAPASDASH
                </a>

                <a
                  href="https://www.linkedin.com/in/tapas-dash-41374a138/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-outline hover:border-primary-fixed hover:text-primary-fixed bg-black text-white p-4 text-center transition-all duration-200 hover:shadow-[0_0_15px_rgba(0,255,0,0.05)] text-[10px] sm:text-xs truncate font-bold"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-outline text-[9px] sm:text-[10px] w-full">
          <div className="text-primary-fixed text-center sm:text-left">
            © 2024 SOVEREIGN_OPERATOR // ALL RIGHTS RESERVED
          </div>
          <div className="text-on-surface-variant flex flex-wrap justify-center gap-6 font-bold select-none">
            <a 
              href="https://github.com/tapasdash" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white hover:underline transition-all"
            >
              GITHUB
            </a>
            <a 
              href="https://www.linkedin.com/in/tapas-dash-41374a138/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white hover:underline transition-all"
            >
              LINKEDIN
            </a>
            <button 
              onClick={() => setIsTerminalOpen(true)}
              className="hover:text-primary-fixed transition-colors flex items-center gap-1.5 cursor-pointer font-bold uppercase"
            >
              <Terminal className="w-3.5 h-3.5 text-primary-fixed animate-pulse" />
              <span>TERMINAL_LOG</span>
            </button>
          </div>
        </footer>

      </div>

      {/* Interactive Cyberpunk CLI Terminal Modal */}
      {isTerminalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-3xl h-[75vh] md:h-[65vh] bg-[#020802] border-2 border-primary-fixed flex flex-col shadow-[0_0_40px_rgba(0,255,0,0.25)] rounded-none overflow-hidden font-mono text-primary-fixed">
            
            {/* Simulated CRT Screen scanlines */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(0,255,0,0.03)_50%,rgba(0,0,0,0.12)_50%)] bg-[length:100%_4px] z-10" />
            
            {/* Terminal Top Window Bar */}
            <div className="flex justify-between items-center bg-primary-fixed text-black px-4 py-2 text-[10px] md:text-xs font-bold select-none shrink-0">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span className="tracking-wider">SECURE SHELL - OPERATOR@SOVEREIGN_SYSTEM</span>
              </div>
              <button 
                onClick={() => setIsTerminalOpen(false)}
                className="hover:bg-black hover:text-primary-fixed px-2 py-0.5 transition-colors cursor-pointer text-xs"
                aria-label="Close terminal"
              >
                <X className="w-4 h-4 stroke-[3px]" />
              </button>
            </div>

            {/* Terminal Log Console */}
            <div 
              className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4 text-[10px] md:text-xs select-text leading-relaxed font-mono"
            >
              {/* Output history */}
              {terminalHistory.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap tracking-wider">
                  {line.type === 'input' && <span className="text-white font-bold">{"> "}</span>}
                  <span className={
                    line.type === 'error' 
                      ? 'text-red-500 font-bold' 
                      : line.type === 'success' 
                        ? 'text-white font-bold' 
                        : 'text-primary-fixed'
                  }>
                    {line.text}
                  </span>
                </div>
              ))}
              
              {/* Target scroll hook */}
              <div ref={terminalEndRef} />
            </div>

            {/* Interactive Shell Input Field */}
            <form 
              onSubmit={handleTerminalSubmit}
              className="bg-black/60 border-t border-primary-fixed/30 p-3 flex items-center gap-2 shrink-0 select-none"
            >
              <span className="text-white font-bold select-none text-[11px] sm:text-xs">{"> "}</span>
              <input 
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0 text-[11px] sm:text-xs uppercase font-mono caret-primary-fixed select-text"
                placeholder="ENTER COMMAND (E.G. 'HELP', 'ABOUT')..."
                autoFocus
              />
              <button 
                type="submit"
                className="hidden sm:inline border border-primary-fixed/40 px-3 py-1 text-[9px] text-primary-fixed hover:bg-primary-fixed hover:text-black font-bold uppercase transition-colors"
              >
                EXECUTE
              </button>
            </form>
            
            {/* Terminal Status bar */}
            <div className="bg-black border-t border-outline/30 px-4 py-2 flex justify-between items-center text-[8px] md:text-[9px] text-on-surface-variant select-none shrink-0">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-ping" />
                STATUS: ENCRYPTED_TUNNEL
              </span>
              <span>ESC / TYPE 'EXIT' TO CLOSE TERMINAL</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
