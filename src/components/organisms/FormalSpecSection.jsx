import React, { useState } from 'react';
import { FORMAL_SPEC_DATA } from '../../data/formalSpecData';
import { 
  GitBranch, 
  Tag, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Code, 
  Terminal, 
  FileCheck2,
  Calendar
} from 'lucide-react';

export const FormalSpecSection = () => {
  const { header, context, acceptanceCriteria, phases } = FORMAL_SPEC_DATA;
  const [criteria, setCriteria] = useState(acceptanceCriteria);

  const toggleCriteria = (id) => {
    setCriteria(prev => prev.map(c => c.id === id ? { ...c, done: !c.done } : c));
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl backdrop-blur-md space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-3">
            <FileCheck2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>ESPECIFICACIÓN TÉCNICA FORMAL • GEMINI DIRECTIVE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {header.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
            Directiva obligatoria de ingeniería previa a la codificación de producción. Define el contrato técnico, criterios de aceptación verificables y el desglose de fases atómicas.
          </p>
        </div>

        {/* Spec Meta Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono shrink-0">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-slate-500 block">TIPO</span>
            <span className="font-bold text-amber-400 uppercase">{header.type}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-slate-500 block">ALCANCE</span>
            <span className="font-bold text-emerald-400 uppercase">{header.scope}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-slate-500 block">VERSIÓN</span>
            <span className="font-bold text-sky-400">{header.artifactVersion}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-[10px] text-slate-500 block">FECHA</span>
            <span className="font-bold text-slate-300">{header.date}</span>
          </div>
        </div>
      </div>

      {/* Suggested Branch & Convention */}
      <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <GitBranch className="w-4 h-4 text-amber-400" />
          <span>RAMA TRUNK-BASED:</span>
          <code className="px-2.5 py-1 rounded-lg bg-slate-800 text-amber-300 font-bold border border-slate-700">
            {header.suggestedBranch}
          </code>
        </div>
        <div className="text-slate-500">
          SemVer: <strong className="text-slate-300">{header.versionIncrement}</strong>
        </div>
      </div>

      {/* Acceptance Criteria Checklist */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Criterios de Aceptación (Acceptance Criteria)</span>
          </h3>
          <span className="text-xs font-mono text-slate-500">
            {criteria.filter(c => c.done).length} de {criteria.length} completados
          </span>
        </div>

        <div className="space-y-2">
          {criteria.map((c) => (
            <div
              key={c.id}
              onClick={() => toggleCriteria(c.id)}
              className={`p-4 rounded-2xl border transition cursor-pointer flex items-start gap-3.5 ${
                c.done 
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200' 
                  : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <input
                type="checkbox"
                checked={c.done}
                onChange={() => toggleCriteria(c.id)}
                className="mt-1 rounded text-amber-500 focus:ring-0 cursor-pointer"
              />
              <div className="flex-1 text-xs">
                <span className="font-mono font-bold text-amber-400 mr-2">{c.id}:</span>
                <span className={c.done ? 'line-through opacity-80' : 'font-medium'}>{c.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Implementation Phases */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-400" />
          <span>Fases Atómicas de Implementación</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {phases.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-amber-400">{p.phase}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-bold ${
                    p.status === 'en_progreso'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {p.status === 'en_progreso' ? 'En Progreso' : 'Planificado'}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-3">{p.name}</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {p.tasks.map((task, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
