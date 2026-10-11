import React from 'react';
import { ArrowDown, ArrowUpRight, Globe2, Terminal, Code2, Sparkles, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Subtle ambient gradient lighting (blue, violet, cyan) without excessive glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-20 right-1/4 w-[500px] h-[500px] ambient-glow-cyan -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -left-20 w-[450px] h-[450px] ambient-glow-violet -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 right-10 w-[400px] h-[400px] ambient-glow-blue -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Frosted Glass Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs font-medium text-white shadow-glass-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_6px_rgba(56,189,248,0.8)]"></span>
              </span>
              <span className="text-slate-light font-normal">{personalInfo.availability}</span>
            </div>

            {/* Main Headline with Restrained Accent Highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.14] mb-6">
              {personalInfo.headline.prefix}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400 font-bold decoration-accent/40 underline underline-offset-8">
                {personalInfo.headline.highlight}
              </span>
              {personalInfo.headline.suffix}
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-muted max-w-xl leading-relaxed mb-8">
              {personalInfo.shortDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('work')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:via-sky-400 hover:to-blue-500 font-semibold text-sm active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(14,165,233,0.45)] border border-cyan-300/30 group cursor-pointer"
                style={{ color: '#ffffff' }}
              >
                <span style={{ color: '#ffffff' }} className="font-semibold text-white">Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" style={{ color: '#ffffff' }} />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 font-medium text-sm hover:bg-white/[0.12] hover:border-white/25 active:scale-[0.98] transition-all shadow-glass-sm group cursor-pointer"
                style={{ color: '#ffffff' }}
              >
                <span style={{ color: '#ffffff' }} className="text-white">{personalInfo.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
              </button>
            </div>

            {/* Supporting Detail: Location */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-muted">
              <Globe2 className="w-4 h-4 text-accent/80" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Right Column: Layered Frosted-Glass Profile Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Frosted Glass Card Container */}
              <div className="glass-card rounded-3xl p-6 sm:p-7 shadow-glass-lg relative overflow-hidden">
                
                {/* Subtle top edge specular reflection */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" 
                />

                {/* Window header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 text-xs text-slate-muted font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
                  </div>
                  <span className="text-[11px] text-slate-subtle">developer-workspace.tsx</span>
                  <Terminal className="w-3.5 h-3.5 text-slate-subtle" />
                </div>

                {/* Profile Identity in Card */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Frosted Monogram Avatar */}
                  <div className="relative w-14 h-14 rounded-2xl bg-navy-900 border border-white/15 text-white flex items-center justify-center font-mono font-bold text-lg shadow-glass-sm">
                    <span className="text-white">AM</span>
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-accent ring-2 ring-navy-950 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base tracking-tight">{personalInfo.name}</h3>
                    <p className="text-xs text-slate-muted font-medium">{personalInfo.role}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-[11px] font-mono text-slate-muted">Frontend & Modern Web</span>
                    </div>
                  </div>
                </div>

                {/* Code Architecture Translucent Sub-card */}
                <div className="bg-navy-950/70 rounded-2xl p-4 border border-white/10 text-xs font-mono space-y-2 mb-4 shadow-inner">
                  <div className="flex items-center justify-between text-slate-subtle text-[11px] pb-1 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-accent">
                      <Code2 className="w-3.5 h-3.5" /> stack-config.ts
                    </span>
                    <span className="text-[10px]">v3.2</span>
                  </div>
                  <div className="text-slate-300 space-y-1 text-[11px] leading-relaxed pt-1">
                    <p><span className="text-purple-400">const</span> techStack = [</p>
                    <p className="pl-3 text-cyan-300">'React 19', 'TypeScript', 'Next.js',</p>
                    <p className="pl-3 text-cyan-300">'Tailwind CSS', 'Node.js', 'AI APIs'</p>
                    <p>];</p>
                    <p className="text-slate-500">// Core focus: Fast, Accessible, Fluid UI</p>
                  </div>
                </div>

                {/* Mini Metric Badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">Clean Code</div>
                      <div className="text-[10px] text-slate-muted">Strict TypeScript</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-accent shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">Refined UX</div>
                      <div className="text-[10px] text-slate-muted">Fluid micro-motion</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Frosted Pill Detail */}
              <div className="absolute -bottom-4 -left-3 sm:left-4 glass-pill px-3.5 py-2 rounded-xl shadow-glass-md flex items-center gap-2 text-xs font-medium text-white">
                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_rgba(56,189,248,0.7)]" />
                <span>Modern Glassmorphism</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
