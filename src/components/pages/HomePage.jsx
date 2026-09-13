import React, { useState } from 'react';
import { PortalLayout } from '../templates/PortalLayout';
import { PortalNavbar } from '../organisms/PortalNavbar';
import { PlatformTopologyAnimation } from '../organisms/PlatformTopologyAnimation';
import { CommercialShowcaseSection } from '../organisms/CommercialShowcaseSection';
import { TargetArchitectureVisualizer } from '../organisms/TargetArchitectureVisualizer';
import { TogafAssessmentSection } from '../organisms/TogafAssessmentSection';
import { FormalSpecSection } from '../organisms/FormalSpecSection';
import { DeveloperHubSection } from '../organisms/DeveloperHubSection';
import { FaqSection } from '../organisms/FaqSection';
import { RealmsGrid } from '../organisms/RealmsGrid';
import { YggdrasilTreeCosmos } from '../organisms/YggdrasilTreeCosmos';
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
  ArrowRight,
  Server,
  FileCheck2,
  Compass,
  Code2,
  Lock,
  Workflow,
  HelpCircle
} from 'lucide-react';

export const HomePage = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'tree'
  const [selectedRealm, setSelectedRealm] = useState(null);
  const [env, setEnv] = useState('dev'); // 'dev' | 'local'
  const [activeSection, setActiveSection] = useState('topology');

  const activeApps = REALMS.filter(r => r.hasApp);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <PortalLayout
      header={
        <PortalNavbar 
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          env={env}
          onEnvChange={setEnv}
        />
      }
    >
      <div id="top" className="space-y-20 pb-16">
        {/* =========================================================================
            1. HERO CORPORATIVO & PROPUESTA DE VALOR
        ========================================================================= */}
        <section className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-slate-800 bg-gradient-to-b from-[#0B101E] via-[#070A14] to-[#04060C] shadow-2xl">
          {/* Subtle Ambient Light Effects */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Watermark Rune */}
          <div className="absolute right-6 top-6 bottom-6 w-1/4 opacity-5 flex items-center justify-center font-serif text-[260px] text-amber-300 pointer-events-none select-none">
            ᛦ
          </div>

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>YGGDRASIL ENTERPRISE PLATFORM • ARQUITECTURA FINTECH 3.0</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Switching Financiero Reactivo y Aseguramiento Agéntico de Calidad
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-3xl">
              La primera infraestructura bancaria que une la velocidad extrema de procesamiento en sockets Netty (<strong className="text-white">&gt;10,000 TPS</strong> con latencias sub-5ms) con la autonomía de agentes de inteligencia artificial coordinados vía <strong className="text-white">Model Context Protocol (MCP)</strong> y blindados bajo el estándar <strong className="text-white">PCI-DSS v4.0</strong>.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('topology')}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition shadow-lg shadow-amber-500/25 active:scale-95 cursor-pointer"
              >
                <Server className="w-4 h-4" />
                <span>Explorar Topología Interactiva</span>
              </button>

              <button
                onClick={() => scrollToSection('tobe')}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition active:scale-95 cursor-pointer"
              >
                <Workflow className="w-4 h-4 text-amber-400" />
                <span>Arquitectura Objetivo (To-Be)</span>
              </button>

              <button
                onClick={() => scrollToSection('togaf')}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 transition active:scale-95 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Ver Informe TOGAF 10 &amp; BIAN</span>
              </button>

              <button
                onClick={() => scrollToSection('spec')}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:text-white transition active:scale-95 cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-cyan-400" />
                <span>Especificación Técnica</span>
              </button>

              <button
                onClick={() => scrollToSection('faq')}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:text-amber-300 hover:border-amber-500/30 transition active:scale-95 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>FAQ &amp; Modelos</span>
              </button>
            </div>

            {/* Quick Launch Direct App Access */}
            <div className="pt-6 border-t border-slate-800/80 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block flex items-center gap-2">
                <span>Acceso Rápido a Microservicios ({env.toUpperCase()} Environment):</span>
              </span>
              <div className="flex flex-wrap gap-2.5">
                {activeApps.map(app => {
                  const targetUrl = env === 'dev' ? (app.devUrl || app.url) : (app.localUrl || app.url);
                  return (
                    <a
                      key={app.id}
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-400/50 text-white transition shadow-sm active:scale-95 group cursor-pointer"
                    >
                      <span className="text-sm font-serif font-bold text-amber-400">{app.rune}</span>
                      <span>{app.name}</span>
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-amber-300">
                        :{app.ports.frontend}
                      </span>
                      <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. ANIMACIÓN DE TOPOLOGÍA INTERACTIVA (OVERVIEW GENERAL)
        ========================================================================= */}
        <section id="topology" className="space-y-6 scroll-mt-24">
          <PlatformTopologyAnimation />
        </section>

        {/* =========================================================================
            3. VITRINA COMERCIAL B2B
        ========================================================================= */}
        <section id="commercial" className="scroll-mt-24">
          <CommercialShowcaseSection />
        </section>

        {/* =========================================================================
            4. VISUALIZACIÓN DE LA ARQUITECTURA OBJETIVO (TO-BE BLUEPRINT)
        ========================================================================= */}
        <section id="tobe" className="scroll-mt-24">
          <TargetArchitectureVisualizer />
        </section>

        {/* =========================================================================
            5. INFORME DE ARQUITECTURA TOGAF 10 & BIAN
        ========================================================================= */}
        <section id="togaf" className="scroll-mt-24">
          <TogafAssessmentSection />
        </section>

        {/* =========================================================================
            5. ESPECIFICACIÓN TÉCNICA FORMAL SEGÚN GEMINI DIRECTIVE
        ========================================================================= */}
        <section id="spec" className="scroll-mt-24">
          <FormalSpecSection />
        </section>

        {/* =========================================================================
            6. CATÁLOGO COMPLETO DE REINOS & MÓDULOS
        ========================================================================= */}
        <section id="realms" className="space-y-6 scroll-mt-24">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold font-runic text-white">
                Directorio de Reinos Transaccionales
              </h2>
              <p className="text-xs text-slate-400">
                Cambia entre la vista en cuadrícula o el árbol cósmico interactivo
              </p>
            </div>

            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Cuadrícula</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('tree')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  viewMode === 'tree'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Cosmograma</span>
              </button>
            </div>
          </div>

          {viewMode === 'tree' ? (
            <YggdrasilTreeCosmos onSelectRealm={setSelectedRealm} />
          ) : (
            <RealmsGrid 
              onOpenDetails={setSelectedRealm} 
              env={env}
              onEnvChange={setEnv}
            />
          )}
        </section>

        {/* =========================================================================
            7. DEVELOPER & ARCHITECT HUB
        ========================================================================= */}
        <section id="devhub" className="scroll-mt-24">
          <DeveloperHubSection />
        </section>

        {/* =========================================================================
            8. PREGUNTAS FRECUENTES (FAQ) & MODELOS DE REFERENCIA
        ========================================================================= */}
        <section id="faq" className="scroll-mt-24">
          <FaqSection />
        </section>

        {/* =========================================================================
            9. FOOTER CORPORATIVO
        ========================================================================= */}
        <footer className="border-t border-slate-800/80 pt-10 text-xs text-slate-400 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-runic font-bold text-base text-white">YGGDRASIL PLATFORM</span>
              <span className="text-slate-600">•</span>
              <span>Edición Empresarial v3.0.0</span>
            </div>

            <div className="flex flex-wrap gap-4 font-mono text-[11px]">
              <span className="text-slate-500">Alineación: TOGAF 10 &amp; BIAN v11</span>
              <span className="text-slate-500">Seguridad: PCI-DSS v4.0 &amp; SABSA</span>
              <span className="text-emerald-400 font-bold">Dokploy DEV: Operativo</span>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-500">
            © 2026 Yggdrasil Financial Platform. Plataforma Agéntica Distribuida de Aseguramiento de Calidad y Switching Transaccional.
          </div>
        </footer>
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
