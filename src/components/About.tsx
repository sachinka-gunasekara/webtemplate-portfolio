import React from 'react';
import { Compass, Target, Brain, Code, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-accent" />;
      case 1:
        return <Target className="w-5 h-5 text-accent" />;
      case 2:
        return <Brain className="w-5 h-5 text-accent" />;
      default:
        return <Compass className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/10 relative overflow-hidden">
      {/* Gentle ambient light in background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 ambient-glow-violet -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
              <span>Background</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
              {personalInfo.aboutHeadline}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {personalInfo.aboutBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Three Information Blocks with Matte-Glass Balance */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {personalInfo.approachCards.map((card, idx) => (
                <div
                  key={card.title}
                  className="bg-white/[0.02] p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3.5">
                    {getIcon(idx)}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1.5">{card.title}</h3>
                  <p className="text-xs text-slate-muted leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Complementary Visual Element */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-glass-md relative overflow-hidden">
              
              {/* Subtle top edge specular reflection */}
              <div 
                aria-hidden="true" 
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" 
              />

              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                  <span className="text-xs font-mono font-medium text-white">Engineering Principles</span>
                </div>
                <Code className="w-4 h-4 text-slate-muted" />
              </div>

              <div className="space-y-3.5 mb-6">
                {[
                  'Clean component architecture',
                  'Accessibility (a11y) first approach',
                  'Zero unnecessary dependencies',
                  'Fluid, responsive layouts at every screen size',
                  'Clear communication and documented deliverables'
                ].map((principle, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-accent font-bold" />
                    </span>
                    <span>{principle}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/10 text-xs text-slate-300 leading-relaxed font-mono">
                <span className="text-cyan-300 font-semibold">Goal:</span> Build software that is a pleasure to use and effortless to maintain.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
