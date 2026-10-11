import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-white/10 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-semibold text-white tracking-tight text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
              <span>{personalInfo.name}</span>
            </span>
            <span className="hidden sm:inline-block text-white/20">&bull;</span>
            <p className="text-xs text-slate-muted">
              Designed with care. Built for the web.
            </p>
          </div>

          {/* Copyright & Links */}
          <div className="flex items-center gap-6 text-xs text-slate-muted">
            <span>&copy; {currentYear} All rights reserved.</span>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors p-1"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors p-1"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Back to Top */}
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 text-xs text-white hover:text-accent transition-colors ml-2 cursor-pointer"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
