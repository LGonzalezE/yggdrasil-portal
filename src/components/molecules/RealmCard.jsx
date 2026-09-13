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
  Info,
  Building2,
  CheckCircle2,
  Zap,
  Tag
} from 'lucide-react';

export const RealmCard = ({ 
  realm, 
  onOpenDetails, 
  env = 'dev', 
  presentationMode = 'commercial' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isColor = realm.hasApp;
  const targetUrl = env === 'dev' ? (realm.devUrl || realm.url) : (realm.localUrl || realm.url);

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
    blue: {
      card: 'border-blue-500/30 bg-gradient-to-b from-[#0B1526] to-[#060B14]',
      hoverGlow: 'hover:border-blue-400 hover:shadow-[0_0_35px_-5px_rgba(59,130,246,0.35)]',
      title: 'text-blue-300',
      badge: 'blue',
      accentBtn: 'primary'
    },
    cyan: {
      card: 'border-cyan-500/30 bg-gradient-to-b from-[#081820] to-[#050D12]',
      hoverGlow: 'hover:border-cyan-400 hover:shadow-[0_0_35px_-5px_rgba(6,182,212,0.35)]',
      title: 'text-cyan-300',
      badge: 'teal',
      accentBtn: 'teal'
    },
    indigo: {
      card: 'border-indigo-500/30 bg-gradient-to-b from-[#101226] to-[#080914]',
      hoverGlow: 'hover:border-indigo-400 hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.35)]',
      title: 'text-indigo-300',
      badge: 'purple',
      accentBtn: 'purple'
    },
    sky: {
      card: 'border-sky-500/30 bg-gradient-to-b from-[#0B1724] to-[#060D14]',
      hoverGlow: 'hover:border-sky-400 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.35)]',
      title: 'text-sky-300',
      badge: 'blue',
      accentBtn: 'primary'
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
  const isCommercial = presentationMode === 'commercial';

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
      {/* Background Subtle Rune or Tech Watermark */}
      <div className="absolute right-4 top-2 text-7xl font-serif select-none pointer-events-none opacity-5 text-white">
        {realm.rune}
      </div>

      <div>
        {/* =========================================================================
            A. PRESENTACIÓN COMERCIAL (BIAN / CLIENTES)
        ========================================================================= */}
        {isCommercial ? (
          <>
            {/* Top Domain & Codename Badges */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-amber-400" />
                  <span>BIAN v11</span>
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-800 flex items-center gap-1">
                  <Tag className="w-2.5 h-2.5 text-slate-500" />
                  <span>Codename: <strong className="text-slate-200">{realm.internalCodename}</strong></span>
                </span>
              </div>

              <CosmicBadge variant={isColor ? themeConfig.badge : 'latent'}>
                {isColor ? 'DISPONIBLE' : 'EN ROADMAP'}
              </CosmicBadge>
            </div>

            {/* Commercial Title & Domain */}
            <div className="mb-4">
              <h3 className={`text-base sm:text-lg font-extrabold tracking-tight leading-snug ${isColor ? 'text-white' : 'text-slate-300'}`}>
                {realm.commercialName}
              </h3>
              <p className="text-xs font-mono text-emerald-400 font-semibold mt-1">
                {realm.bianDomain}
              </p>
              <p className="text-xs text-slate-400 font-sans mt-2 leading-relaxed">
                {realm.commercialTagline}
              </p>
            </div>

            {/* Business Value Highlight Box */}
            <div className="mb-4 p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400/90 font-bold block flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Impacto de Negocio:</span>
              </span>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {realm.businessValue}
              </p>
            </div>

            {/* Client Capabilities Preview (Top 2 bullets) */}
            <div className="space-y-2 mb-5">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold block">
                Capacidades Clave:
              </span>
              <div className="space-y-1.5">
                {(realm.clientFeatures || []).slice(0, 2).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* =========================================================================
              B. PRESENTACIÓN INTERNA (INGENIERÍA & COSMOLOGÍA)
          ========================================================================= */
          <>
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
                  {isColor ? 'Microservicio Interno:' : 'Dominio Mitológico:'}
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
              {realm.bianDomain && (
                <div className="flex items-center justify-between text-[10px] font-mono mt-1 text-emerald-400/90 pt-1 border-t border-white/5">
                  <span className="text-slate-500 uppercase">BIAN Domain:</span>
                  <span className="truncate max-w-[180px]">{realm.bianDomain}</span>
                </div>
              )}
            </div>

            {/* Dynamic Description Lore */}
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
                          Co-Piloto IA:
                        </span>
                        <span className={`text-xs font-bold truncate ${isColor ? themeConfig.title : 'text-slate-200'}`}>
                          {realm.agent.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">
                        {realm.agent.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
        <button
          type="button"
          onClick={() => onOpenDetails(realm)}
          className="text-xs text-slate-400 hover:text-white transition flex items-center gap-1 font-mono cursor-pointer"
        >
          <Info className="w-3.5 h-3.5" />
          <span>{isCommercial ? 'Ficha de Solución' : 'Detalles'}</span>
        </button>

        {isColor ? (
          <RunicButton
            href={targetUrl}
            variant={themeConfig.accentBtn}
            size="sm"
          >
            <span>{isCommercial ? 'Acceder' : 'Abrir'} ({env.toUpperCase()})</span>
          </RunicButton>
        ) : (
          <span className="text-[10px] font-mono text-slate-500 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800">
            {isCommercial ? 'En Desarrollo' : 'Próxima Invocación'}
          </span>
        )}
      </div>
    </div>
  );
};
