import React, { useState } from 'react';
import { REALMS } from '../../data/realmsData';
import { RealmCard } from '../molecules/RealmCard';
import { 
  Sparkles, 
  Filter, 
  CheckCircle2, 
  Moon, 
  Globe, 
  Building2, 
  Terminal, 
  Layers, 
  Briefcase 
} from 'lucide-react';

export const RealmsGrid = ({ 
  onOpenDetails, 
  env = 'dev', 
  onEnvChange,
  presentationMode = 'commercial',
  onPresentationModeChange
}) => {
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'latent'

  const activeCount = REALMS.filter(r => r.hasApp).length;
  const latentCount = REALMS.filter(r => !r.hasApp).length;

  const filteredRealms = REALMS.filter(realm => {
    if (filter === 'active') return realm.hasApp;
    if (filter === 'latent') return !realm.hasApp;
    return true;
  });

  const isCommercial = presentationMode === 'commercial';

  return (
    <div className="space-y-6">
      {/* Header Banner & Controls */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 p-5 rounded-3xl bg-slate-900/40 border border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
              isCommercial 
                ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' 
                : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
            }`}>
              {isCommercial ? 'PERSPECTIVA CLIENTES • BIAN DOMAINS' : 'PERSPECTIVA INTERNA • INGENIERÍA & RUNAS'}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2 tracking-tight">
            {isCommercial ? (
              <>
                <Briefcase className="w-5 h-5 text-amber-400" />
                <span>Catálogo de Soluciones Financieras &amp; Dominios BIAN</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>Módulos y Reinos del Ecosistema Yggdrasil</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1">
            {isCommercial 
              ? 'Capacidades bancarias canónicas según BIAN v11: switching, orquestación ISO, gobernanza IA y cumplimiento regulatorio.' 
              : 'Microservicios distribuidos, compuertas Zero-Trust, sockets Netty y agentes de inteligencia artificial.'}
          </p>
        </div>

        {/* Global Selectors */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Perspective Switcher (Commercial vs Internal) */}
          {onPresentationModeChange && (
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-semibold shadow-inner">
              <button
                type="button"
                onClick={() => onPresentationModeChange('commercial')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition cursor-pointer ${
                  isCommercial
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Mostrar dominios BIAN y lenguaje comercial para clientes y ejecutivos"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Comercial (BIAN)</span>
              </button>

              <button
                type="button"
                onClick={() => onPresentationModeChange('internal')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition cursor-pointer ${
                  !isCommercial
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Mostrar nombres mitológicos nórdicos, telemetría y puertos de ingeniería"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Interno (Sistema)</span>
              </button>
            </div>
          )}

          {/* Environment Switcher */}
          {onEnvChange && (
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono">
              <span className="px-2 text-slate-500 font-bold flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span>ENV:</span>
              </span>
              <button
                type="button"
                onClick={() => onEnvChange('dev')}
                className={`px-2.5 py-1 rounded-xl transition font-bold ${
                  env === 'dev'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                DEV
              </button>
              <button
                type="button"
                onClick={() => onEnvChange('local')}
                className={`px-2.5 py-1 rounded-xl transition font-bold ${
                  env === 'local'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                LOCAL
              </button>
            </div>
          )}

          {/* Active / Latent Filter */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition cursor-pointer ${
                filter === 'all'
                  ? 'bg-slate-800 text-amber-300 border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos ({REALMS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('active')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                filter === 'active'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>{isCommercial ? 'Operativos' : 'Activos'} ({activeCount})</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter('latent')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                filter === 'latent'
                  ? 'bg-slate-800 text-slate-200 border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Moon className="w-3 h-3 text-slate-400" />
              <span>{isCommercial ? 'Roadmap' : 'Planificados'} ({latentCount})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Realm / BIAN Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRealms.map(realm => (
          <RealmCard
            key={realm.id}
            realm={realm}
            env={env}
            onOpenDetails={onOpenDetails}
            presentationMode={presentationMode}
          />
        ))}
      </div>
    </div>
  );
};
