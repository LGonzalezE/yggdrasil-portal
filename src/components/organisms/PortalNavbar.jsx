import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Compass, 
  Activity, 
  ExternalLink,
  Shield,
  FileCheck2,
  Code2,
  Workflow,
  Server,
  HelpCircle,
  Building2,
  Terminal,
  Briefcase
} from 'lucide-react';

export const PortalNavbar = ({ 
  activeSection, 
  onSectionClick, 
  env, 
  onEnvChange,
  presentationMode = 'commercial',
  onPresentationModeChange
}) => {
  const isCommercial = presentationMode === 'commercial';

  const navItems = [
    { id: 'topology', label: 'Topología', icon: Server },
    { id: 'commercial', label: 'Solución Comercial', icon: Sparkles },
    { id: 'realms', label: isCommercial ? 'Soluciones BIAN' : 'Reinos & Módulos', icon: isCommercial ? Building2 : Layers },
    { id: 'tobe', label: 'Arquitectura To-Be', icon: Workflow },
    { id: 'togaf', label: 'Informe TOGAF 10', icon: Shield },
    { id: 'spec', label: 'Especificación', icon: FileCheck2 },
    { id: 'devhub', label: 'Dev Hub', icon: Code2 },
    { id: 'faq', label: 'FAQ & Modelos', icon: HelpCircle }
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#040711]/90 border-b border-slate-800/80 px-6 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand & Logo */}
        <a href="#top" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-emerald-500 to-sky-500 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/15 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#070B14] rounded-[14px] flex items-center justify-center text-amber-400 font-serif font-black text-xl">
              ᛦ
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold font-runic tracking-wider text-white group-hover:text-amber-300 transition-colors">
                YGGDRASIL
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                FINTECH PLATFORM
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans">
              Switching Financiero · Agentes MCP · QA Bancario
            </p>
          </div>
        </a>

        {/* Section Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition cursor-pointer ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Perspective Switcher (Commercial vs Internal) & Environment Selector */}
        <div className="flex items-center gap-2">
          {onPresentationModeChange && (
            <div className="hidden sm:flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => onPresentationModeChange('commercial')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition cursor-pointer ${
                  isCommercial
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Vista Comercial BIAN para Clientes"
              >
                <Building2 className="w-3 h-3" />
                <span>BIAN</span>
              </button>
              <button
                type="button"
                onClick={() => onPresentationModeChange('internal')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition cursor-pointer ${
                  !isCommercial
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Vista Interna de Sistema para Ingeniería"
              >
                <Terminal className="w-3 h-3" />
                <span>Interno</span>
              </button>
            </div>
          )}

          {onEnvChange && (
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => onEnvChange('dev')}
                className={`px-2.5 py-1 rounded-lg transition font-bold ${
                  env === 'dev'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Conectar a dominios Dokploy DEV"
              >
                DEV
              </button>
              <button
                type="button"
                onClick={() => onEnvChange('local')}
                className={`px-2.5 py-1 rounded-lg transition font-bold ${
                  env === 'local'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Conectar a puertos locales"
              >
                LOCAL
              </button>
            </div>
          )}

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold">v3.0.0</span>
          </div>
        </div>
      </div>
    </header>
  );
};
