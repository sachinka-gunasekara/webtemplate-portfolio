import React, { useState } from 'react';
import { 
  Mail, Github, Linkedin, Send, Copy, Check, ArrowUpRight, AlertCircle, MessageSquare 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please include a brief message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate functional mailto link
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-white/10 relative overflow-hidden">
      {/* Ambient gradient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] ambient-glow-cyan -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-10 w-[450px] h-[450px] ambient-glow-violet -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline and Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] backdrop-blur-md text-xs font-mono font-medium text-accent mb-6 border border-white/10 shadow-glass-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                <span>Contact</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Have an idea <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400 underline decoration-accent/40 decoration-2 underline-offset-8">
                  in mind?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-muted leading-relaxed mb-8 max-w-md">
                Let's talk about what you're building and how I can help bring it to life.
              </p>

              {/* Direct Email Action Box */}
              <div className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 mb-8 shadow-glass-sm">
                <div className="text-xs font-mono text-slate-muted mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <span>Direct Email</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-medium text-white hover:text-accent transition-colors truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer shrink-0 border border-white/5"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-accent" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] font-mono text-accent mt-2 animate-in fade-in">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <div className="text-xs font-mono text-slate-muted uppercase tracking-wider mb-3">
                Online Profiles
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white text-xs font-medium border border-white/10 transition-colors group"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-muted group-hover:text-accent transition-colors" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white text-xs font-medium border border-white/10 transition-colors group"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-muted group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Frosted Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-glass-lg relative overflow-hidden">
              
              {/* Subtle top edge reflection */}
              <div 
                aria-hidden="true" 
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" 
              />

              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-accent/20 text-accent border border-accent/30">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <h3 className="font-semibold text-white text-base">Send a message</h3>
                </div>
                <span className="text-[11px] font-mono text-slate-muted">Quick response</span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-accent/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto shadow-glow-cyan">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Opening Email Client</h4>
                  <p className="text-sm text-slate-muted max-w-sm mx-auto leading-relaxed">
                    Your email client should launch with your draft pre-filled. If it didn't open automatically, you can email directly to:
                  </p>
                  <div className="font-mono text-xs text-accent bg-navy-950/80 p-2.5 rounded-xl border border-white/10 select-all">
                    {personalInfo.email}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-muted hover:text-white underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-200 mb-1.5">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl bg-navy-950/80 text-white placeholder-slate-500 text-sm border focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-accent'
                      }`}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-200 mb-1.5">
                      Your Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-navy-950/80 text-white placeholder-slate-500 text-sm border focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-accent'
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-200 mb-1.5">
                      Project Details & Goals <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell me about what you're planning to build, timeline, or requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-navy-950/80 text-white placeholder-slate-500 text-sm border focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-400 focus:border-red-400' : 'border-white/10 focus:border-accent'
                      }`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Notice about email delivery */}
                  <div className="text-[11px] text-slate-muted font-mono leading-relaxed pt-1">
                    Direct integration: Submitting will open your default email client with your message pre-formatted.
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:via-sky-400 hover:to-blue-500 text-white font-semibold text-sm active:scale-[0.99] transition-all cursor-pointer shadow-[0_0_25px_rgba(14,165,233,0.45)] border border-cyan-300/30 group mt-2"
                    style={{ color: '#ffffff' }}
                  >
                    <span style={{ color: '#ffffff' }}>Get in Touch</span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: '#ffffff' }} />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
