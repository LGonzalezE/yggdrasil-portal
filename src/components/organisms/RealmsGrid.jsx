import React, { useState } from 'react';
import { REALMS } from '../../data/realmsData';
import { RealmCard } from '../molecules/RealmCard';
import { Sparkles, Filter, CheckCircle2, Moon, Globe } from 'lucide-react';

export const RealmsGrid = ({ onOpenDetails, env = 'dev', onEnvChange }) => {
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'latent'

  const activeCount = REALMS.filter(r => r.hasApp).length;
  const latentCount = REALMS.filter(r => !r.hasApp).length;

  const filteredRealms = REALMS.filter(realm => {
    if (filter === 'active') return realm.hasApp;
    if (filter === 'latent') return !realm.hasApp;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Filter Tabs & Environment Selector */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
        <div>
          <h2 className="text-xl font-bold font-runic text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Módulos y Reinos del Ecosistema Yggdrasil</span>
          </h2>
          <p className="text-xs text-slate-400 font-sans mt-0.5">
            Microservicios financieros distribuidos, pasarelas de seguridad y motores de simulación.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Environment Switcher */}
          {onEnvChange && (
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
              <span className="px-2 text-slate-500 font-bold flex items-center gap-1">
                <Globe className="w-3 h-3" />
                <span>ENV:</span>
              </span>
              <button
                type="button"
                onClick={() => onEnvChange('dev')}
                className={`px-2.5 py-1 rounded-lg transition font-bold ${
                  env === 'dev'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                DOKPLOY DEV
              </button>
              <button
                type="button"
                onClick={() => onEnvChange('local')}
                className={`px-2.5 py-1 rounded-lg transition font-bold ${
                  env === 'local'
                    ? 'bg-amber-500 text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                LOCAL PORTS
              </button>
            </div>
          )}

          {/* Active / Latent Filter */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter === 'all'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos ({REALMS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('active')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                filter === 'active'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Activos ({activeCount})</span>
            </button>
            <button
              type="button"
              onClick={() => setFilter('latent')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                filter === 'latent'
                  ? 'bg-slate-800 text-slate-200 border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Moon className="w-3 h-3 text-slate-400" />
              <span>Planificados ({latentCount})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Realm Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRealms.map(realm => (
          <RealmCard
            key={realm.id}
            realm={realm}
            env={env}
            onOpenDetails={onOpenDetails}
          />
        ))}
      </div>
    </div>
  );
};
