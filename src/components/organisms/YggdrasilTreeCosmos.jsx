import React, { useState } from 'react';
import { REALMS } from '../../data/realmsData';
import { RuneIcon } from '../atoms/RuneIcon';
import { CosmicBadge } from '../atoms/CosmicBadge';
import { ExternalLink, Sparkles, Compass, ArrowRight, Zap, Eye, Globe2, Flame } from 'lucide-react';

export const YggdrasilTreeCosmos = ({ onSelectRealm }) => {
  const [hoveredRealm, setHoveredRealm] = useState(null);

  // Layout positions for the Tree Cosmology (Percentage coordinates x, y on a 1000x800 canvas)
  const realmNodes = [
    // Celestial Canopy (Upper Branches)
    { id: 'asgard', x: 500, y: 110, branch: 'crown' },
    { id: 'alfheim', x: 280, y: 190, branch: 'upper-left' },
    { id: 'vanaheim', x: 720, y: 190, branch: 'upper-right' },
    // Rainbow Bridge & Center Trunk
    { id: 'bifrost', x: 380, y: 340, branch: 'bridge' },
    { id: 'midgard', x: 500, y: 440, branch: 'center' },
    { id: 'svartalfheim', x: 670, y: 470, branch: 'center-right' },
    // Deep Roots & Primordial Confines
    { id: 'utgard', x: 260, y: 580, branch: 'root-left' },
    { id: 'muspelheim', x: 740, y: 620, branch: 'root-right' },
    { id: 'niflheim', x: 380, y: 730, branch: 'root-deep-left' },
    { id: 'helheim', x: 580, y: 750, branch: 'root-deep-right' }
  ];

  const getRealmData = (id) => REALMS.find(r => r.id === id);

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#060913] via-[#05070D] to-[#020307] p-4 sm:p-8 shadow-2xl">
      {/* Background Ambience / Nordic Runes Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 select-none">
        <div className="w-[600px] h-[600px] rounded-full border border-dashed border-amber-400 animate-spin-slow" />
      </div>

      {/* Title & Legend */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold font-runic text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-sky-300">
            El Árbol Cósmico de los Nueve Reinos
          </h2>
          <p className="text-xs text-slate-400 font-sans mt-0.5">
            Pasa el cursor sobre cada reino para sintonizar con su energía, habitante divino y portal de acceso.
          </p>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Nodos Activos (Color)
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-slate-600" />
            Nodos Latentes (Gris)
          </span>
        </div>
      </div>

      {/* Interactive Cosmos Canvas */}
      <div className="relative w-full aspect-[4/3] max-h-[620px] rounded-2xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center">
        {/* SVG Tree Trunk & Branch Connectors */}
        <svg 
          viewBox="0 0 1000 850" 
          className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-700/40 fill-none"
        >
          <defs>
            <linearGradient id="rainbowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#10b981" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#334155" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Central Trunk */}
          <path d="M 500 110 Q 490 280 500 440 Q 510 600 500 750" stroke="url(#trunkGrad)" strokeWidth="8" strokeLinecap="round" />
          
          {/* Upper Celestial Branches */}
          <path d="M 500 110 Q 380 130 280 190" stroke="#64748b" strokeWidth="3" strokeDasharray="4 4" />
          <path d="M 500 110 Q 620 130 720 190" stroke="#64748b" strokeWidth="3" strokeDasharray="4 4" />
          
          {/* Bifröst Rainbow Arc */}
          <path d="M 500 110 Q 420 220 380 340 Q 440 400 500 440" stroke="url(#rainbowGrad)" strokeWidth="6" strokeLinecap="round" />

          {/* Middle Trunk Branches */}
          <path d="M 500 440 Q 580 450 670 470" stroke="#64748b" strokeWidth="3" strokeDasharray="4 4" />
          <path d="M 500 440 Q 380 500 260 580" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />

          {/* Deep Roots */}
          <path d="M 500 600 Q 620 610 740 620" stroke="#64748b" strokeWidth="3" strokeDasharray="4 4" />
          <path d="M 500 650 Q 440 690 380 730" stroke="#64748b" strokeWidth="3" strokeDasharray="4 4" />
          <path d="M 500 650 Q 540 700 580 750" stroke="#64748b" strokeWidth="3" strokeDasharray="4 4" />
        </svg>

        {/* Nodes Layer */}
        {realmNodes.map((node) => {
          const realm = getRealmData(node.id);
          if (!realm) return null;
          const isColor = realm.hasApp;
          const isHovered = hoveredRealm?.id === realm.id;

          return (
            <div
              key={node.id}
              style={{ left: `${(node.x / 1000) * 100}%`, top: `${(node.y / 850) * 100}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              onMouseEnter={() => setHoveredRealm(realm)}
              onMouseLeave={() => setHoveredRealm(null)}
              onClick={() => onSelectRealm(realm)}
            >
              {/* Node Circular Token */}
              <div className={`relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 transition-all duration-300 ${
                isColor 
                  ? `${realm.borderGlow} ${isHovered ? 'scale-125 z-30 ring-4 ring-white/30' : 'scale-100'} bg-slate-950/90 shadow-2xl` 
                  : `grayscale contrast-125 opacity-70 border-slate-700 bg-slate-900/80 ${isHovered ? 'grayscale-0 opacity-100 scale-125 z-30' : 'scale-100'}`
              }`}>
                <span className="text-xl sm:text-2xl font-serif font-bold text-white select-none">
                  {realm.rune}
                </span>

                {/* Status Ping Dot */}
                {isColor && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                )}
              </div>

              {/* Node Label */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 text-center whitespace-nowrap">
                <span className={`text-xs font-bold font-runic px-2 py-0.5 rounded-md backdrop-blur-md ${
                  isColor 
                    ? `${realm.textColor} bg-black/70 border border-white/10` 
                    : 'text-slate-400 bg-black/60 border border-white/5'
                }`}>
                  {realm.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Hover Spotlight Panel */}
      {hoveredRealm && (
        <div className="mt-4 p-4 rounded-2xl bg-[#090D18]/90 border border-amber-500/30 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <RuneIcon 
              rune={hoveredRealm.rune} 
              color={hoveredRealm.hasApp ? hoveredRealm.accentColor : 'slate'} 
              size="lg" 
              active={hoveredRealm.hasApp}
            />
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold font-runic text-white">
                  {hoveredRealm.name}
                </h4>
                <CosmicBadge variant={hoveredRealm.hasApp ? 'active' : 'latent'}>
                  {hoveredRealm.hasApp ? 'APP ACTIVA' : 'REINO LATENTE'}
                </CosmicBadge>
              </div>
              <p className="text-xs text-slate-300 font-sans mt-0.5 max-w-xl">
                {hoveredRealm.description}
              </p>
              {hoveredRealm.agent && (
                <p className="text-xs text-amber-300/90 font-mono mt-1">
                  ⚡ <strong>Habitante:</strong> {hoveredRealm.agent.name} · {hoveredRealm.agent.title}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 self-end md:self-center">
            {hoveredRealm.hasApp ? (
              <a
                href={hoveredRealm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition shadow-lg shadow-amber-500/20"
              >
                <span>Ingresar a {hoveredRealm.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => onSelectRealm(hoveredRealm)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
              >
                Conocer Lore
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
