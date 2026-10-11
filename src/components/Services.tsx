import React from 'react';
import { Layout, AppWindow, Cpu, ArrowUpRight, Check } from 'lucide-react';
import { services } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="w-5 h-5 text-accent" />;
      case 1:
        return <AppWindow className="w-5 h-5 text-accent" />;
      case 2:
        return <Cpu className="w-5 h-5 text-accent" />;
      default:
        return <Layout className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 border-t border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 ambient-glow-cyan -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            <span>Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            How I can help
          </h2>
          <p className="text-base sm:text-lg text-slate-muted leading-relaxed">
            Focused development services for early-stage products, businesses, and ambitious founders.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.number}
              className="group glass-card rounded-3xl p-7 shadow-glass-sm hover:shadow-glass-md hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Header: Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-accent">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:bg-accent/15 group-hover:border-accent/30 flex items-center justify-center transition-all">
                    {getServiceIcon(idx)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-semibold tracking-tight text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-accent transition-colors"
                >
                  <span>Inquire about this service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
