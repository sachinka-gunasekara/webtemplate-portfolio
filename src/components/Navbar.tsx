import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'work', 'about', 'skills', 'services', 'process', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Floating Translucent Bar */}
        <div
          className={`relative rounded-full border transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-glass-md ${
            isScrolled
              ? 'bg-navy-900/85 backdrop-blur-xl border-white/15 shadow-glass-lg'
              : 'bg-navy-900/60 backdrop-blur-md border-white/10'
          }`}
        >
          {/* Text-based Personal Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-2.5 text-white font-medium text-sm tracking-tight hover:opacity-90 transition-opacity"
            aria-label="Alex Morgan Homepage"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(56,189,248,0.7)] group-hover:scale-125 transition-transform" />
            <span className="font-semibold text-white tracking-normal">{personalInfo.name}</span>
            <span className="text-[11px] font-mono text-slate-muted hidden sm:inline-block ml-0.5">
              / Dev
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] px-2 py-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 border border-white/10 font-semibold shadow-sm'
                      : 'text-slate-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Let's Talk CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-accent/40 active:scale-95 transition-all shadow-glass-sm group"
            >
              <span>{personalInfo.ctaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-accent" />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-slate-muted hover:text-white hover:bg-white/10 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 p-3 rounded-2xl bg-navy-900/95 backdrop-blur-2xl border border-white/15 shadow-glass-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2 text-sm rounded-xl font-medium transition-colors ${
                    isActive
                      ? 'bg-accent/15 text-accent font-semibold border border-accent/20'
                      : 'text-slate-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
