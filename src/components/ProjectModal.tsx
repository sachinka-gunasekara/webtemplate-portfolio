import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectMockup } from './ProjectMockup';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-navy-900/95 backdrop-blur-2xl rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/15 shadow-glass-lg p-6 sm:p-8 relative text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top edge specular reflection */}
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" 
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-muted hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-accent">
            PROJECT {project.number}
          </span>
          <span className="text-white/30 text-xs">&bull;</span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/10">
            {project.category}
          </span>
        </div>

        <h2 id="modal-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">
          {project.title}
        </h2>

        {/* Mockup Preview */}
        <div className="mb-6 rounded-2xl overflow-hidden shadow-glass-md border border-white/10">
          <ProjectMockup type={project.visualType} />
        </div>

        {/* Detailed Description */}
        <div className="space-y-4 mb-6 text-sm text-slate-300 leading-relaxed">
          <p className="font-medium text-white text-base">
            {project.description}
          </p>
          <p>
            {project.detailedDescription}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-muted font-semibold mb-3">
            Key Architecture & Features
          </h3>
          <ul className="space-y-2.5">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-muted font-semibold mb-3">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-white/[0.04] text-cyan-300 font-mono text-xs font-medium border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            <a
              href="#contact"
              onClick={() => {
                onClose();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] border border-cyan-300/30"
              style={{ color: '#ffffff' }}
            >
              <span style={{ color: '#ffffff' }}>Discuss Similar Project</span>
              <ExternalLink className="w-3.5 h-3.5" style={{ color: '#ffffff' }} />
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs text-slate-muted hover:text-white font-medium underline cursor-pointer ml-auto"
          >
            Close preview
          </button>
        </div>

      </div>
    </div>
  );
};
