import React from 'react';
import { Layers, Database, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Frontend')) {
      return <Layers className="w-4 h-4 text-accent" />;
    }
    if (category.includes('Backend')) {
      return <Database className="w-4 h-4 text-accent" />;
    }
    return <Wrench className="w-4 h-4 text-accent" />;
  };

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            <span>Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            What I work with
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            A practical toolkit focused on modern web ecosystems, type safety, and clean design implementation.
          </p>
        </div>

        {/* 3 Skill Groups with Frosted Glass Containers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-3xl p-6 sm:p-7 shadow-glass-sm hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-white/10">
                  <span className="p-2 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {getCategoryIcon(group.category)}
                  </span>
                  <h3 className="font-semibold text-white text-base tracking-tight">
                    {group.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 hover:bg-white/[0.08] hover:border-accent/40 transition-all group cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform shadow-[0_0_4px_rgba(56,189,248,0.7)]" />
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[10px] font-mono text-slate-muted group-hover:text-cyan-300 transition-colors">
                          · {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal category footer */}
              <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-slate-muted">
                {group.skills.length} focused capabilities
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
