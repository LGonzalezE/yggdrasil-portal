import React, { useState } from 'react';
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
  BookOpen,
  Building2,
  Terminal,
  CheckCircle2,
  ShieldCheck,
  Tag,
  Zap,
  Lock,
  Globe
} from 'lucide-react';

export const RealmDetailModal = ({ 
  realm, 
  onClose, 
  initialMode = 'commercial',
  env = 'dev'
}) => {
  if (!realm) return null;

  const [activeTab, setActiveTab] = useState(initialMode); // 'commercial' | 'internal'
  const isCommercial = activeTab === 'commercial';
  const targetUrl = env === 'dev' ? (realm.devUrl || realm.url) : (realm.localUrl || realm.url);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#070A14] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Background Ambient Rune */}
        <div className="absolute right-6 top-6 text-9xl font-serif opacity-5 select-none pointer-events-none text-white">
          {realm.rune}
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white transition border border-white/10 cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header Row */}
        <div className="flex items-start gap-4 mb-5 shrink-0">
          <RuneIcon 
            rune={realm.rune} 
            color={realm.hasApp ? realm.accentColor : 'slate'} 
            size="lg" 
            active={realm.hasApp}
          />
          <div className="flex-1 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {isCommercial ? realm.commercialName : realm.name}
              </h2>
              <CosmicBadge variant={realm.hasApp ? 'active' : 'latent'}>
                {realm.hasApp ? (isCommercial ? 'OPERATIVO' : 'APP ACTIVA') : (isCommercial ? 'ROADMAP' : 'REINO LATENTE')}
              </CosmicBadge>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              <span className="text-xs font-mono font-bold text-amber-400">
                {isCommercial ? realm.bianDomain : realm.subtitle}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Tag className="w-3 h-3 text-slate-500" />
                <span>Nombre Clave: <strong className="text-slate-200">{realm.internalCodename}</strong></span>
              </span>
            </div>
          </div>
        </div>

        {/* Presentation Switcher Tabs */}
        <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-800 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('commercial')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              isCommercial
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Ficha Comercial BIAN (Clientes)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('internal')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              !isCommercial
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Especificación Interna (Ingeniería)</span>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto space-y-5 pr-1 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-slate-800 flex-1">
          {/* =========================================================================
              TAB 1: FICHA COMERCIAL BIAN
          ========================================================================= */}
          {isCommercial ? (
            <div className="space-y-4">
              {/* Business Overview & Value */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Propuesta de Valor &amp; Resumen Ejecutivo</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  {realm.commercialDescription}
                </p>
                <div className="pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                    Impacto en el Negocio Financiero:
                  </span>
                  <p className="text-xs text-amber-200 font-medium bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20">
                    {realm.businessValue}
                  </p>
                </div>
              </div>

              {/* BIAN Canonical Mapping Card */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                    Dominio Canónico BIAN v11:
                  </span>
                  <span className="font-mono text-emerald-300 font-bold">
                    {realm.bianDomain}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                    Grupo de Servicio Funcional:
                  </span>
                  <span className="font-mono text-slate-300 font-bold">
                    {realm.bianGroup || 'Core Banking Operations'}
                  </span>
                </div>
              </div>

              {/* Client Capabilities & Features */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Capacidades de la Solución para Clientes</span>
                </h4>
                <div className="space-y-2">
                  {(realm.clientFeatures || []).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* =========================================================================
                TAB 2: ESPECIFICACIÓN INTERNA DE SISTEMA (INGENIERÍA)
            ========================================================================= */
            <div className="space-y-4">
              {/* Mythology Lore */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>Cosmología &amp; Arquetipo Mitológico</span>
                  </h4>
                  <span className="text-xs font-mono text-amber-300">
                    Runa {realm.runeName} ({realm.rune})
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {realm.description}
                </p>
                <p className="text-[11px] text-slate-500 italic pt-1">
                  Significado Rúnico: {realm.runeMeaning}
                </p>
              </div>

              {/* Resident Agent Profile */}
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

              {/* Telemetry and Local Ports */}
              {realm.hasApp && realm.ports && (
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 font-mono text-xs space-y-1.5">
                  <h4 className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                    Telemetría y Puertos de Red Internos:
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
                  {realm.ports.extra && (
                    <div className="flex justify-between text-slate-300">
                      <span>Subsistema Extra:</span>
                      <span className="text-purple-400 font-bold">{realm.ports.extra}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Tech Stack */}
              {realm.techStack && (
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-500 block mb-2 font-bold">
                    Stack Tecnológico de Ingeniería:
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
          )}
        </div>

        {/* Modal Actions Footer */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10 shrink-0 mt-3">
          <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
            <span>Código Interno:</span>
            <code className="text-slate-300 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
              {realm.systemCode || realm.id}
            </code>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 transition cursor-pointer"
            >
              Cerrar
            </button>

            {realm.hasApp ? (
              <RunicButton
                href={targetUrl}
                variant="primary"
                size="md"
              >
                <span>{isCommercial ? 'Acceder a Solución' : `Lanzar ${realm.name}`}</span>
              </RunicButton>
            ) : (
              <span className="text-xs font-mono text-slate-500 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
                Solución en Desarrollo
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
