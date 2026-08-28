import React from 'react';
import { RuneIcon } from '../atoms/RuneIcon';
import { CosmicBadge } from '../atoms/CosmicBadge';
import { RunicButton } from '../atoms/RunicButton';
import { AgentOrb } from '../molecules/AgentOrb';
import { 
  X, 
  ExternalLink, 
  Bot, 
  Cpu, 
  Layers, 
  Radio, 
  Sparkles, 
  Scroll,
  BookOpen
} from 'lucide-react';

export const RealmDetailModal = ({ realm, onClose }) => {
  if (!realm) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#070A14] p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Background Ambient Rune */}
        <div className="absolute right-6 top-6 text-9xl font-serif opacity-5 select-none pointer-events-none text-white">
          {realm.rune}
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white transition border border-white/10 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Section */}
        <div className="flex items-start gap-4 mb-6">
          <RuneIcon 
            rune={realm.rune} 
            color={realm.hasApp ? realm.accentColor : 'slate'} 
            size="lg" 
            active={realm.hasApp}
          />
          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-2xl font-bold font-runic text-white">
                {realm.name}
              </h2>
              <CosmicBadge variant={realm.hasApp ? 'active' : 'latent'}>
                {realm.hasApp ? 'APP ACTIVA' : 'REINO LATENTE'}
              </CosmicBadge>
            </div>
            <p className="text-sm text-slate-400 font-sans mt-0.5">{realm.subtitle}</p>
            <p className="text-xs text-amber-400 font-mono mt-1">
              Runa: <strong>{realm.runeName}</strong> ({realm.runeMeaning})
            </p>
          </div>
        </div>

        {/* Description / Lore */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5 font-bold">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Cosmología &amp; Función en la Plataforma</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {realm.description}
            </p>
          </div>

          {/* Inhabitant Agent Profile */}
          {realm.agent && (
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center gap-4">
              <AgentOrb 
                agent={realm.agent} 
                color={realm.hasApp ? realm.accentColor : 'slate'} 
                size="md" 
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{realm.agent.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {realm.agent.role}
                    </span>
                  </h4>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{realm.agent.title}</p>
                {realm.agent.engine && (
                  <p className="text-[11px] font-mono text-slate-500 mt-1">
                    Motor: {realm.agent.engine}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Technical Specs & Ports */}
          {realm.hasApp && realm.ports && (
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 font-mono text-xs space-y-1.5">
              <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                Telemetría de Red Local:
              </h4>
              <div className="flex justify-between text-slate-300">
                <span>Frontend UI:</span>
                <span className="text-emerald-400 font-bold">Puerto :{realm.ports.frontend}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Backend REST / WS:</span>
                <span className="text-sky-400 font-bold">Puerto :{realm.ports.backend}</span>
              </div>
              {realm.ports.tcp && (
                <div className="flex justify-between text-slate-300">
                  <span>Canales TCP ISO-8583:</span>
                  <span className="text-amber-400 font-bold">{realm.ports.tcp}</span>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Pills */}
          {realm.techStack && (
            <div>
              <span className="text-[10px] uppercase font-mono text-slate-500 block mb-2 font-bold">
                Arquitectura Tecnológica:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {realm.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 transition cursor-pointer"
          >
            Cerrar
          </button>

          {realm.hasApp ? (
            <RunicButton
              href={realm.url}
              variant="primary"
              size="md"
            >
              <span>Lanzar {realm.name}</span>
            </RunicButton>
          ) : (
            <span className="text-xs font-mono text-slate-500 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
              Invocación en Desarrollo
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
