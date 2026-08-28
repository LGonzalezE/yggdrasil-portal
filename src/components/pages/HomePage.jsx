import React, { useState } from 'react';
import { PortalLayout } from '../templates/PortalLayout';
import { PortalNavbar } from '../organisms/PortalNavbar';
import { YggdrasilTreeCosmos } from '../organisms/YggdrasilTreeCosmos';
import { RealmsGrid } from '../organisms/RealmsGrid';
import { RealmDetailModal } from '../organisms/RealmDetailModal';
import { REALMS } from '../../data/realmsData';
import { 
  Sparkles, 
  ExternalLink, 
  Bot, 
  ShieldCheck, 
  Layers, 
  Zap, 
  Flame, 
  Eye, 
  Globe2,
  ArrowRight
} from 'lucide-react';

export const HomePage = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'tree'
  const [selectedRealm, setSelectedRealm] = useState(null);

  const activeApps = REALMS.filter(r => r.hasApp);

  return (
    <PortalLayout
      header={
        <PortalNavbar 
          viewMode={viewMode} 
          onViewModeChange={setViewMode} 
        />
      }
    >
      {/* Hero Welcome Banner */}
      <div className="relative mb-12 rounded-3xl p-8 sm:p-12 overflow-hidden border border-white/10 bg-gradient-to-r from-amber-950/20 via-slate-950/80 to-purple-950/20 shadow-2xl">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-no-repeat bg-right pointer-events-none flex items-center justify-center font-serif text-[240px] text-amber-400 select-none">
          ᛦ
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Cosmología Nórdica &amp; Arquitectura Agéntica de QA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-runic text-white tracking-wide leading-tight mb-4">
            El Árbol Cósmico de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400">Yggdrasil</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mb-8">
            En el principio no había tierra ni cielo, solo el fresno sagrado cuyas ramas abrazan la totalidad de la existencia. 
            En nuestra plataforma, <strong>Yggdrasil</strong> unifica la simulación de redes de pago, el switch transaccional de alta velocidad y el aprovisionamiento de entidades financieras bajo la tutela de agentes autónomos divinos.
          </p>

          {/* Quick Access Pills for the 4 Active Apps */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
              Acceso Rápido a las Suites en Vivo:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {activeApps.map(app => (
                <a
                  key={app.id}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-amber-400/50 text-white transition-all shadow-md active:scale-95 group cursor-pointer"
                >
                  <span className="text-sm font-serif font-bold text-amber-400">{app.rune}</span>
                  <span>{app.name}</span>
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-amber-300">
                    :{app.ports.frontend}
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main View Area (Interactive Cosmogram Tree OR Realms Grid) */}
      <div className="mb-12">
        {viewMode === 'tree' ? (
          <YggdrasilTreeCosmos onSelectRealm={setSelectedRealm} />
        ) : (
          <RealmsGrid onOpenDetails={setSelectedRealm} />
        )}
      </div>

      {/* Modal Detailed Lore */}
      {selectedRealm && (
        <RealmDetailModal
          realm={selectedRealm}
          onClose={() => setSelectedRealm(null)}
        />
      )}
    </PortalLayout>
  );
};
