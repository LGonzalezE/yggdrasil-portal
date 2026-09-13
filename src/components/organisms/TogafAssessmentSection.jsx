import React, { useState } from 'react';
import { TOGAF_REPORT_DATA } from '../../data/togafReportData';
import { TargetArchitectureVisualizer } from './TargetArchitectureVisualizer';
import { 
  Building2, 
  Database, 
  Layers, 
  Cpu, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  FileText,
  Compass
} from 'lucide-react';

export const TogafAssessmentSection = () => {
  const [activeTab, setActiveTab] = useState('summary'); // 'summary' | 'gaps' | 'risks' | 'bian' | 'tobe'
  const [selectedBdatDomain, setSelectedBdatDomain] = useState('business');
  const [riskFilter, setRiskFilter] = useState('ALL'); // 'ALL' | 'EXTREMO' | 'ALTO' | 'MEDIO'

  const { meta, summary, bdatGaps, riskMatrix, bianMapping } = TOGAF_REPORT_DATA;

  const filteredRisks = riskFilter === 'ALL' 
    ? riskMatrix 
    : riskMatrix.filter(r => r.level === riskFilter);

  const activeBdatData = bdatGaps.find(b => b.id === selectedBdatDomain);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl backdrop-blur-md space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>ARQUITECTURA EMPRESARIAL • TOGAF 10 &amp; BIAN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {meta.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
            Evaluación técnica formal bajo el método ADM de The Open Group. Análisis de brechas en los 4 dominios BDAT, evaluación de riesgos de ciberseguridad y diseño del estado objetivo de grado bancario.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 shrink-0 text-xs font-mono">
          <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            <span className="text-slate-500 block text-[10px]">VERSIÓN INFORME</span>
            <span className="font-bold text-amber-400">{meta.version}</span> • {meta.date}
          </div>
          <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            <span className="text-slate-500 block text-[10px]">ROL AUDITOR</span>
            <span className="font-bold text-emerald-400">{meta.role}</span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3 text-xs font-semibold">
        {[
          { id: 'summary', label: '1. Resumen y Madurez BDAT', icon: TrendingUp },
          { id: 'gaps', label: '2. Gap Analysis Detallado (BDAT)', icon: AlertTriangle },
          { id: 'risks', label: '3. Matriz de Riesgos ISO 31000', icon: ShieldAlert },
          { id: 'bian', label: '4. Mapeo Canónico BIAN', icon: Building2 },
          { id: 'tobe', label: '5. Arquitectura Objetivo (To-Be)', icon: Layers }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition ${
                isActive
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Resumen & Madurez */}
      {activeTab === 'summary' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400">
              Veredicto del Arquitecto Senior
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {summary.overview}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
              Índice de Madurez Arquitectónica por Dominio TOGAF (0 a 100%)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {summary.overallMaturity.map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400">{m.domain}</span>
                    <span className="font-bold text-white">{m.score}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        m.color === 'emerald' ? 'bg-emerald-500' :
                        m.color === 'amber' ? 'bg-amber-500' :
                        m.color === 'sky' ? 'bg-sky-500' : 'bg-purple-500'
                      }`}
                      style={{ width: `${m.score}%` }}
                    />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 font-semibold">
                    {m.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Gap Analysis (BDAT) */}
      {activeTab === 'gaps' && (
        <div className="space-y-6 animate-fadeIn">
          {/* BDAT Domain Selector */}
          <div className="flex flex-wrap gap-2">
            {bdatGaps.map(domain => (
              <button
                key={domain.id}
                onClick={() => setSelectedBdatDomain(domain.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition border ${
                  selectedBdatDomain === domain.id
                    ? 'bg-slate-800 text-white border-amber-500/50 shadow-sm'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {domain.title.split(' ')[0]} {domain.id.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Active Domain Info */}
          {activeBdatData && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                <h3 className="text-base font-bold text-white">
                  {activeBdatData.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {activeBdatData.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeBdatData.gaps.map((gap) => (
                  <div
                    key={gap.code}
                    className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        {gap.code}
                      </span>
                      <span className="text-sm font-bold text-white flex-1 truncate">
                        {gap.name}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {gap.description}
                    </p>

                    <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                      <div className="text-rose-400/90">
                        <strong className="font-semibold">Riesgo / Impacto:</strong> {gap.impact}
                      </div>
                      <div className="text-emerald-400/90">
                        <strong className="font-semibold">Solución TOGAF:</strong> {gap.solution}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Risk Matrix */}
      {activeTab === 'risks' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-slate-400 font-mono">
              Filtrar por nivel de riesgo (ISO 31000 / CVSS):
            </p>
            <div className="flex gap-2 text-xs font-mono">
              {['ALL', 'EXTREMO', 'ALTO', 'MEDIO'].map(level => (
                <button
                  key={level}
                  onClick={() => setRiskFilter(level)}
                  className={`px-3 py-1.5 rounded-lg border transition font-bold ${
                    riskFilter === level
                      ? 'bg-amber-500 text-black border-amber-400'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-900 text-slate-300 font-mono uppercase text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-3.5">ID</th>
                  <th className="p-3.5">Vulnerabilidad o Brecha</th>
                  <th className="p-3.5">Probabilidad</th>
                  <th className="p-3.5">Impacto</th>
                  <th className="p-3.5">Severidad</th>
                  <th className="p-3.5">Acción Mitigadora Inmediata</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {filteredRisks.map(r => (
                  <tr key={r.id} className="hover:bg-slate-900/40 transition">
                    <td className="p-3.5 font-mono font-bold text-amber-400">{r.id}</td>
                    <td className="p-3.5 font-semibold text-white">{r.risk}</td>
                    <td className="p-3.5 font-mono text-slate-300">{r.probability}</td>
                    <td className="p-3.5 font-mono text-slate-300">{r.impact}</td>
                    <td className="p-3.5">
                      <span className={`px-2 py-0.5 rounded-md font-mono text-[10px] font-bold ${
                        r.level === 'EXTREMO' ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30' :
                        r.level === 'ALTO' ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30' :
                        'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                      }`}>
                        {r.level}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-300 leading-relaxed">{r.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: BIAN Canonical Mapping */}
      {activeTab === 'bian' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400">
              Homologación Bancaria BIAN (Banking Industry Architecture Network v11)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mapeo de los módulos y reinos del ecosistema Yggdrasil a las capacidades y dominios canónicos de servicio definidos por la banca global.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bianMapping.map((b, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white font-sans">{b.realm}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                    BIAN ALIGNED
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">Dominio de Servicio</span>
                  <div className="text-xs font-bold text-amber-300 font-mono mt-0.5">{b.bianDomain}</div>
                </div>
                <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-slate-400">Capacidad:</strong> {b.capability}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: To-Be Blueprint */}
      {activeTab === 'tobe' && (
        <div className="space-y-6 animate-fadeIn">
          <TargetArchitectureVisualizer />
        </div>
      )}
    </div>
  );
};
