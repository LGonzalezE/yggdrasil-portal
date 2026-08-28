import React, { useState } from 'react';
import { RuneIcon } from '../atoms/RuneIcon';
import { CosmicBadge } from '../atoms/CosmicBadge';
import { RunicButton } from '../atoms/RunicButton';
import { AgentOrb } from './AgentOrb';
import { 
  Bot, 
  ExternalLink, 
  Sparkles, 
  Radio, 
  Compass, 
  ShieldCheck, 
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';

export const RealmCard = ({ realm, onOpenDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isColor = realm.hasApp;

  const colorVariants = {
    amber: {
      card: 'border-amber-500/30 bg-gradient-to-b from-[#0F1420] to-[#080B12]',
      hoverGlow: 'hover:border-amber-400 hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.35)]',
      title: 'text-amber-300',
      badge: 'amber',
      accentBtn: 'primary'
    },
    emerald: {
      card: 'border-emerald-500/30 bg-gradient-to-b from-[#091717] to-[#060D0D]',
      hoverGlow: 'hover:border-emerald-400 hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.35)]',
      title: 'text-emerald-300',
      badge: 'active',
      accentBtn: 'emerald'
    },
    teal: {
      card: 'border-teal-500/30 bg-gradient-to-b from-[#0A1618] to-[#060D0E]',
      hoverGlow: 'hover:border-teal-400 hover:shadow-[0_0_35px_-5px_rgba(20,184,166,0.35)]',
      title: 'text-teal-300',
      badge: 'teal',
      accentBtn: 'teal'
    },
    purple: {
      card: 'border-purple-500/30 bg-gradient-to-b from-[#140F22] to-[#0A0713]',
      hoverGlow: 'hover:border-purple-400 hover:shadow-[0_0_35px_-5px_rgba(139,92,246,0.35)]',
      title: 'text-purple-300',
      badge: 'purple',
      accentBtn: 'purple'
    },
    slate: {
      card: 'border-slate-800 bg-[#090C14]/90',
      hoverGlow: 'hover:border-slate-600 hover:shadow-[0_0_30px_-5px_rgba(148,163,184,0.25)]',
      title: 'text-slate-200',
      badge: 'latent',
      accentBtn: 'outline'
    }
  };

  const themeConfig = colorVariants[realm.accentColor] || colorVariants.slate;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex flex-col justify-between rounded-3xl p-6 border transition-all duration-500 transform ${
        isColor 
          ? `${themeConfig.card} ${themeConfig.hoverGlow} hover:-translate-y-2` 
          : `grayscale contrast-125 opacity-75 hover:grayscale-0 hover:opacity-100 hover:-translate-y-2 ${themeConfig.card} ${themeConfig.hoverGlow}`
      }`}
    >
      {/* Background Subtle Rune Watermark */}
      <div className="absolute right-4 top-2 text-7xl font-serif select-none pointer-events-none opacity-5 text-white">
        {realm.rune}
      </div>

      <div>
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <RuneIcon 
              rune={realm.rune} 
              color={isColor ? realm.accentColor : 'slate'} 
              size="md" 
              active={isColor} 
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className={`text-lg font-bold font-runic tracking-wide ${isColor ? themeConfig.title : 'text-slate-200'}`}>
                  {realm.name}
                </h3>
              </div>
              <p className="text-xs text-slate-400 font-sans">{realm.subtitle}</p>
            </div>
          </div>

          <CosmicBadge variant={isColor ? themeConfig.badge : 'latent'}>
            {isColor ? 'APP ACTIVA' : 'REINO LATENTE'}
          </CosmicBadge>
        </div>

        {/* Application or Category Banner */}
        <div className="mb-4 p-3 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-sm">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">
              {isColor ? 'Suite QA:' : 'Dominio Mitológico:'}
            </span>
            <span className={`font-semibold ${isColor ? themeConfig.title : 'text-slate-300'}`}>
              {realm.appTitle}
            </span>
          </div>
          {isColor && realm.ports && (
            <div className="flex items-center justify-between text-[11px] font-mono mt-1 text-slate-400 pt-1 border-t border-white/5">
              <span>Puertos:</span>
              <span className="text-slate-200 font-bold">
                Frontend :{realm.ports.frontend} · Backend :{realm.ports.backend}
              </span>
            </div>
          )}
        </div>

        {/* Dynamic Animation Lore on Hover */}
        <div className="space-y-3 mb-5">
          <div className="text-xs leading-relaxed text-slate-300 font-sans">
            <p className="line-clamp-3 group-hover:line-clamp-none transition-all">
              {realm.description}
            </p>
          </div>

          {/* Inhabitant Agent Spotlight */}
          {realm.agent && (
            <div className={`p-3 rounded-2xl border transition-all duration-300 ${
              isColor 
                ? 'bg-slate-950/60 border-white/10' 
                : 'bg-slate-900/60 border-slate-800'
            }`}>
              <div className="flex items-center gap-3">
                <AgentOrb 
                  agent={realm.agent} 
                  color={isColor ? realm.accentColor : 'slate'} 
                  size="sm" 
                />
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                      Habitante Divino:
                    </span>
                    <span className={`text-xs font-bold truncate ${isColor ? themeConfig.title : 'text-slate-200'}`}>
                      {realm.agent.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">
                    {realm.agent.title}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
        <button
          type="button"
          onClick={() => onOpenDetails(realm)}
          className="text-xs text-slate-400 hover:text-white transition flex items-center gap-1 font-mono cursor-pointer"
        >
          <Info className="w-3.5 h-3.5" />
          <span>Ver Lore</span>
        </button>

        {isColor ? (
          <RunicButton
            href={realm.url}
            variant={themeConfig.accentBtn}
            size="sm"
          >
            <span>Ingresar al Reino</span>
          </RunicButton>
        ) : (
          <span className="text-[10px] font-mono text-slate-500 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800">
            Próxima Invocación
          </span>
        )}
      </div>
    </div>
  );
};
