import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Compass, 
  Activity, 
  Github, 
  ExternalLink,
  Bot
} from 'lucide-react';

export const PortalNavbar = ({ viewMode, onViewModeChange }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#03060C]/80 border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-emerald-500 to-purple-600 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-[#070B14] rounded-[14px] flex items-center justify-center text-amber-400 font-serif font-black text-xl">
              ᛦ
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-extrabold font-runic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-sky-300">
                YGGDRASIL
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Cosmic Portal
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans">
              Árbol de la Vida · Ecosistema de QA &amp; Switch Transaccional
            </p>
          </div>
        </div>

        {/* Global Telemetry Chips */}
        <div className="hidden lg:flex items-center gap-3 font-mono text-xs">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>4 Aplicaciones Online</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            <span>6 Reinos Latentes</span>
          </div>
        </div>

        {/* Switch View Mode & Actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-white/10 shadow-inner">
            <button
              type="button"
              onClick={() => onViewModeChange('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Reinos</span>
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange('tree')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'tree'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Cosmograma</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
