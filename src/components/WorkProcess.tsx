import React from 'react';
import { ArrowRight } from 'lucide-react';
import { processSteps } from '../data/portfolioData';

export const WorkProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            <span>Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            From idea to launch
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            A structured, transparent collaboration process to ensure every project delivers on its promise.
          </p>
        </div>

        {/* Process Steps: Horizontal on desktop, Vertical on mobile */}
        <div className="relative">
          
          {/* Desktop connecting line with subtle glow */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-gradient-to-r from-white/10 via-accent/30 to-white/10 -z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="bg-white/[0.02] p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between hover:-translate-y-0.5"
              >
                <div>
                  {/* Step Indicator Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-navy-900 border border-white/15 text-white flex items-center justify-center font-mono font-bold text-xs shadow-glass-sm ring-1 ring-accent/30">
                      <span className="text-accent">{step.number}</span>
                    </div>
                    {idx < processSteps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-slate-muted/60" />
                    )}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-semibold tracking-tight text-white mb-2.5">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-slate-muted leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-subtle block mb-1">
                    Deliverable
                  </span>
                  <span className="text-xs font-medium text-slate-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_4px_rgba(56,189,248,0.7)]" />
                    {step.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
