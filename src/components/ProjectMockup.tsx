import React from 'react';
import { 
  TrendingUp, Users, DollarSign, Sparkles, Send, Check, 
  ArrowUpRight, Clock, CheckCircle, Flame, Filter
} from 'lucide-react';

interface ProjectMockupProps {
  type: 'saas-dashboard' | 'ai-editor' | 'creative-studio' | 'task-board';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  if (type === 'saas-dashboard') {
    return (
      <div className="w-full h-56 sm:h-64 bg-navy-950 text-white p-4 sm:p-5 rounded-2xl overflow-hidden flex flex-col justify-between font-sans border border-white/10 select-none relative">
        {/* Subtle top edge glow */}
        <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* Top bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
            <span className="font-semibold tracking-wide text-white text-[13px]">Vortex Analytics</span>
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-300 font-mono">ENTERPRISE</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-muted font-mono">
            <span className="flex items-center gap-1 bg-white/[0.04] px-2 py-1 rounded border border-white/5">
              <Filter className="w-3 h-3 text-accent" /> Last 30d
            </span>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-3 gap-2.5 my-3">
          <div className="bg-white/[0.03] backdrop-blur-sm p-2.5 rounded-xl border border-white/10">
            <div className="flex items-center justify-between text-[11px] text-slate-muted mb-1">
              <span>MRR</span>
              <DollarSign className="w-3 h-3 text-accent" />
            </div>
            <div className="text-base font-bold text-white">$42,850</div>
            <div className="text-[10px] text-cyan-300 flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="w-2.5 h-2.5" /> +18.4%
            </div>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm p-2.5 rounded-xl border border-white/10">
            <div className="flex items-center justify-between text-[11px] text-slate-muted mb-1">
              <span>Active</span>
              <Users className="w-3 h-3 text-white/70" />
            </div>
            <div className="text-base font-bold text-white">8,420</div>
            <div className="text-[10px] text-slate-400">+312 this wk</div>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm p-2.5 rounded-xl border border-white/10">
            <div className="flex items-center justify-between text-[11px] text-slate-muted mb-1">
              <span>Retention</span>
              <CheckCircle className="w-3 h-3 text-accent" />
            </div>
            <div className="text-base font-bold text-white">96.8%</div>
            <div className="text-[10px] text-cyan-300">Top 5% tier</div>
          </div>
        </div>

        {/* Visual Mini Chart & Activity Bar */}
        <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5 flex items-end gap-1.5 h-16 w-full pt-4">
          <div className="w-[10%] h-[35%] bg-white/10 rounded-t-sm" />
          <div className="w-[10%] h-[50%] bg-white/15 rounded-t-sm" />
          <div className="w-[10%] h-[40%] bg-white/15 rounded-t-sm" />
          <div className="w-[10%] h-[65%] bg-white/20 rounded-t-sm" />
          <div className="w-[10%] h-[55%] bg-white/20 rounded-t-sm" />
          <div className="w-[10%] h-[75%] bg-cyan-500/50 rounded-t-sm" />
          <div className="w-[10%] h-[70%] bg-cyan-400/60 rounded-t-sm" />
          <div className="w-[10%] h-[85%] bg-accent/80 rounded-t-sm shadow-sm" />
          <div className="w-[10%] h-[92%] bg-accent rounded-t-sm shadow-glow-cyan" />
          <div className="w-[10%] h-[100%] bg-accent rounded-t-sm shadow-glow-cyan" />
        </div>
      </div>
    );
  }

  if (type === 'ai-editor') {
    return (
      <div className="w-full h-56 sm:h-64 bg-navy-950 text-white p-4 sm:p-5 rounded-2xl overflow-hidden flex flex-col justify-between font-sans border border-white/10 select-none relative">
        {/* Subtle top edge glow */}
        <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* Editor Toolbar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-accent/15 text-accent border border-accent/20">
              <Sparkles className="w-3 h-3" />
            </span>
            <span className="font-semibold text-white text-xs">Aura AI Editor</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-muted">Doc: Q3 Strategy.md</span>
            <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30 text-[10px] font-medium font-mono">
              AI Ready
            </span>
          </div>
        </div>

        {/* AI Prompt Input Pill */}
        <div className="bg-white/[0.04] p-2.5 rounded-xl border border-white/10 shadow-glass-sm flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-slate-muted truncate">
            <span className="text-accent font-mono text-[11px]">Prompt:</span>
            <span className="text-slate-200 font-medium truncate">Rewrite second paragraph with punchy value proposition</span>
          </div>
          <button type="button" className="p-1.5 rounded-lg bg-accent text-navy-950 shrink-0 shadow-sm" aria-label="Send prompt">
            <Send className="w-3 h-3" />
          </button>
        </div>

        {/* Generated Text Preview Box */}
        <div className="bg-white/[0.03] p-3 rounded-xl border border-white/10 text-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-muted">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium">
              <Check className="w-3.5 h-3.5 text-accent" /> Refined Streaming Output
            </span>
            <span className="text-[10px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20">
              98% match
            </span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans line-clamp-2">
            "Transform cumbersome workflows into intuitive digital ecosystems that scale effortlessly with customer demand."
          </p>
        </div>
      </div>
    );
  }

  if (type === 'creative-studio') {
    return (
      <div className="w-full h-56 sm:h-64 bg-navy-950 text-white p-4 sm:p-5 rounded-2xl overflow-hidden flex flex-col justify-between font-sans border border-white/10 select-none relative">
        {/* Subtle top edge glow */}
        <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* Editorial Header */}
        <div className="flex items-center justify-between text-xs pb-3 border-b border-white/10">
          <div className="font-mono tracking-widest text-[11px] uppercase text-slate-muted">
            ATELIER NOIR &copy; 2026
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-accent">
            <span>INDEX 04</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>

        {/* Big Editorial Title */}
        <div className="my-auto">
          <p className="text-[10px] font-mono tracking-wider text-slate-muted uppercase mb-1">
            BRAND IDENTITY & ARCHITECTURE
          </p>
          <div className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-none">
            PURITY & <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">FORM</span>
          </div>
        </div>

        {/* Editorial Visual Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="h-12 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center p-2">
            <div className="w-full h-full bg-accent/20 rounded border border-accent/30 flex items-center justify-center text-[10px] font-mono text-accent">
              01
            </div>
          </div>
          <div className="h-12 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center p-2">
            <div className="w-full h-full bg-white/5 rounded flex items-center justify-center text-[10px] font-mono text-slate-400">
              02
            </div>
          </div>
          <div className="h-12 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center p-2">
            <div className="w-full h-full bg-white/10 rounded flex items-center justify-center text-[10px] font-mono text-slate-400">
              03
            </div>
          </div>
        </div>
      </div>
    );
  }

  // task-board
  return (
    <div className="w-full h-56 sm:h-64 bg-navy-950 text-white p-4 sm:p-5 rounded-2xl overflow-hidden flex flex-col justify-between font-sans border border-white/10 select-none relative">
      {/* Subtle top edge glow */}
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* Top bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
          <span className="font-semibold text-white text-xs">Sprint Board</span>
          <span className="text-[11px] text-slate-muted">Sprint 14</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono">
          <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-slate-200">
            8 / 12 completed
          </span>
        </div>
      </div>

      {/* 2 Mini Kanban Columns */}
      <div className="grid grid-cols-2 gap-3 my-auto">
        {/* Column 1 */}
        <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-white">
            <span className="flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-400" /> In Progress
            </span>
            <span className="text-[10px] font-mono text-slate-muted">2</span>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5 space-y-1.5">
            <div className="text-[11px] font-medium text-slate-200 leading-snug">
              Optimize REST API latency
            </div>
            <div className="flex items-center justify-between text-[9px]">
              <span className="px-1.5 py-0.5 rounded bg-accent/20 text-accent font-mono border border-accent/30 font-medium">
                Backend
              </span>
              <span className="text-slate-muted flex items-center gap-0.5">
                <Clock className="w-2.5 h-2.5" /> Today
              </span>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-white">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-accent" /> Review
            </span>
            <span className="text-[10px] font-mono text-slate-muted">1</span>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5 space-y-1.5">
            <div className="text-[11px] font-medium text-slate-200 leading-snug">
              Design tokens sync
            </div>
            <div className="flex items-center justify-between text-[9px]">
              <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-medium">
                UI Kit
              </span>
              <span className="text-slate-muted">Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-muted">
        <span>Team Velocity: 94%</span>
        <span className="font-mono text-accent">100% on schedule</span>
      </div>
    </div>
  );
};
