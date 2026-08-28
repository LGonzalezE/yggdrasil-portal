import React from 'react';
import { COSMIC_RUNES } from '../../data/realmsData';

export const PortalLayout = ({ children, header }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#03060C] text-slate-100 selection:bg-amber-500/30 overflow-x-hidden">
      {/* Background Animated Runes Ribbon */}
      <div className="absolute top-20 inset-x-0 overflow-hidden pointer-events-none opacity-5 select-none text-2xl font-serif text-amber-200 flex justify-around">
        {COSMIC_RUNES.map((r, i) => (
          <span key={i} className="animate-pulse-slow">{r}</span>
        ))}
      </div>

      {header}

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {children}
      </main>

      {/* Runic Footer */}
      <footer className="w-full border-t border-white/5 bg-[#020408] py-8 px-6 text-center relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-serif font-bold text-sm">ᛦ</span>
            <span>Yggdrasil QA &amp; Transactional Ecosystem · v1.0.0</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Asgard (:3004)</span>
            <span>·</span>
            <span>Bifröst (:3001)</span>
            <span>·</span>
            <span>Midgard (:3002)</span>
            <span>·</span>
            <span>Utgard (:3003)</span>
          </div>

          <div>
            <span>Trunk-Based Platform · Licencia MIT</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
