import React, { useState } from 'react';
import { REALMS } from '../../data/realmsData';
import { RealmCard } from '../molecules/RealmCard';
import { Sparkles, Filter, CheckCircle2, Moon } from 'lucide-react';

export const RealmsGrid = ({ onOpenDetails }) => {
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'latent'

  const filteredRealms = REALMS.filter(realm => {
    if (filter === 'active') return realm.hasApp;
    if (filter === 'latent') return !realm.hasApp;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-runic text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Panteón de los Reinos de Yggdrasil</span>
          </h2>
          <p className="text-xs text-slate-400 font-sans mt-0.5">
            Selecciona cualquier reino para abrir su aplicación directa o inspeccionar su lore mitológico.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/10">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
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
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
              filter === 'active'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>Apps Activas (4)</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter('latent')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
              filter === 'latent'
                ? 'bg-slate-800 text-slate-200 border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Moon className="w-3 h-3 text-slate-400" />
            <span>Latentes (6)</span>
          </button>
        </div>
      </div>

      {/* Grid of Realm Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRealms.map(realm => (
          <RealmCard
            key={realm.id}
            realm={realm}
            onOpenDetails={onOpenDetails}
          />
        ))}
      </div>
    </div>
  );
};
