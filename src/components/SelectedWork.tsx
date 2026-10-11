import React, { useState } from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectMockup } from './ProjectMockup';
import { ProjectModal } from './ProjectModal';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            <span>Selected Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            A few projects that show how I approach design, development, and problem-solving.
          </p>
        </div>

        {/* 4 Frosted Glass Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group glass-card rounded-3xl p-6 sm:p-7 shadow-glass-sm hover:shadow-glass-md hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Visual Preview Container */}
                <div 
                  className="mb-6 rounded-2xl overflow-hidden cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 relative border border-white/5"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  aria-label={`View details for ${project.title}`}
                >
                  <ProjectMockup type={project.visualType} />
                  
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none backdrop-blur-[2px]">
                    <span className="bg-navy-900/90 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/20 shadow-glass-sm flex items-center gap-1.5">
                      <span>Inspect Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                    </span>
                  </div>
                </div>

                {/* Number & Category */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono font-semibold text-accent tracking-wider">
                    {project.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 font-medium border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-muted leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 text-[11px] font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-accent transition-colors cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="p-1.5 rounded-lg text-slate-muted hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    title="View stack specs"
                    aria-label={`View specs for ${project.title}`}
                  >
                    <Code2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
