import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Server, 
  Lock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const CommercialShowcaseSection = () => {
  const pillars = [
    {
      title: "Conmutación de Ultra-Baja Latencia",
      subtitle: "Motor Netty 4.1 reactivo sin bloqueos",
      description: "Procesamiento de tramas binarias ISO 8583 / HPDH con buffers directos fuera del heap (zero-copy), soportando más de 10,000 transacciones por segundo con latencias P99 inferiores a 5 ms.",
      icon: Zap,
      color: "amber",
      metrics: ">10,000 TPS • P99 < 5ms"
    },
    {
      title: "Co-Pilotos Autónomos con MCP",
      subtitle: "Model Context Protocol & Guardrails",
      description: "Primer switch financiero gobernado por agentes de IA auditables integrados en cada solución (Heimdall, Hermod, Loki, Rig) con delimitación estricta de alcance, análisis forense y circuito Human-in-the-Loop.",
      icon: Cpu,
      color: "cyan",
      metrics: "4 Agentes Autónomos • HITL Seguro"
    },
    {
      title: "Certificación Acelerada de Adquirencia",
      subtitle: "Reducción del 80% en ciclos de homologación",
      description: "Simulación integral de redes autorizadoras (Visa, Mastercard, Amex) con reglas declarativas SpEL en caliente, inyección de latencia y emulación de contingencias sin reiniciar servicios.",
      icon: Activity,
      color: "emerald",
      metrics: "80% Aceleración • 100% Cobertura"
    },
    {
      title: "Cumplimiento PCI-DSS v4.0 Nativo",
      subtitle: "Bóveda tokenizada y almacenamiento WORM",
      description: "Aislamiento estricto de datos de tarjeta (PAN, CVV, Track 2), algoritmo de Luhn automático, ofuscación dinámica en logs y custodia de evidencias con sellado criptográfico SHA-256.",
      icon: ShieldCheck,
      color: "indigo",
      metrics: "Zero PAN Leakage • WORM S3"
    }
  ];

  const stats = [
    { value: "10,000+", label: "TPS de Capacidad Sostenida", detail: "Validado en Netty TCP EventLoop" },
    { value: "< 4 ms", label: "Latencia de Conmutación", detail: "Procesamiento y ruteo STIP" },
    { value: "99.999%", label: "Disponibilidad Arquitectónica", detail: "Diseñado para resiliencia activa" },
    { value: "100%", label: "Trazabilidad Criptográfica", detail: "Hash-Chained Audit Ledger" }
  ];

  const profiles = [
    {
      role: "Bancos y Emisores",
      pain: "Pruebas lentas de certificación y dependencia de autorizadores reales costosos.",
      gain: "Simulación de adquirentes e inyección de contingencias con el Simulador Multi-Emisor [Utgard] y el Switch de Autorización [Asgard]."
    },
    {
      role: "Redes Adquirentes & Switches",
      pain: "Riesgos de caída ante picos de compras y saturación en fechas comerciales críticas.",
      gain: "Inyección de estrés masivo (>10,000 TPS) con la Pasarela de Certificación [Bifröst] y validación de reglas STIP locales."
    },
    {
      role: "Fintechs y Pasarelas de Pago",
      pain: "Altos costos de auditoría PCI-DSS y fricción en la integración de terminales POS.",
      gain: "Catálogo pre-aprovisionado de comercios, terminales y cuentas tokenizadas en el Directorio Maestro de Productos [Midgard]."
    }
  ];

  return (
    <section className="space-y-16 py-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>PROPUESTA DE VALOR EMPRESARIAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          La Plataforma Definitiva de QA Transaccional y Switching Financiero
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Diseñada para modernizar la certificación de pagos, eliminar cuellos de botella en homologaciones con franquicias y habilitar co-pilotos de inteligencia artificial auditables con rigor bancario.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-black/40 group relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-white group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                  {pillar.metrics}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-4 font-semibold uppercase tracking-wider">
                {pillar.subtitle}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Enterprise KPI Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 shadow-xl">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center p-4 border-r last:border-r-0 border-slate-800">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              {stat.value}
            </div>
            <div className="text-xs font-bold text-slate-200 mt-2 font-sans">
              {stat.label}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Target Audiences / Use Cases */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white text-center">
          Casos de Uso por Segmento Financiero
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block">
                {p.role}
              </span>
              <div className="text-xs text-rose-400/90 font-medium">
                <strong>Desafío:</strong> {p.pain}
              </div>
              <div className="text-xs text-emerald-400/90 font-medium pt-2 border-t border-slate-800/60">
                <strong>Solución Yggdrasil:</strong> {p.gain}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
