import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Database, 
  Cpu, 
  Layers, 
  Radio, 
  Sliders, 
  Info,
  CheckCircle2,
  Lock,
  Flame,
  Key
} from 'lucide-react';

export const PlatformTopologyAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedFlow, setSelectedFlow] = useState('iso'); // 'iso' | 'mcp' | 'stress' | 'audit'
  const [activeNode, setActiveNode] = useState(null);
  const [packetProgress, setPacketProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPacketProgress((prev) => (prev >= 100 ? 0 : prev + 1.2));
    }, 30);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const flowDescriptions = {
    iso: {
      title: "Flujo de Autorización Financiera ISO 8583 / HPDH",
      badge: "DATA PLANE • LATENCIA < 4ms",
      description: "Trama 0200 ingresa por socket TCP Netty en Asgard, consulta reglas STIP en memoria, valida con Utgard Simulator y genera respuesta 0210 cifrada.",
      steps: [
        "1. Ingress TCP (:8087 / :9001)",
        "2. Zero-Copy Frame Decoder (Netty)",
        "3. Decisión STIP y Fallback",
        "4. Emulador Host Utgard (0210 RC: 00)"
      ]
    },
    mcp: {
      title: "Orquestación Agéntica con Model Context Protocol (MCP)",
      badge: "CONTROL PLANE • ZERO-TRUST & GUARDRAILS",
      description: "Los agentes autónomos (Heimdall, Hermod, Loki, Rig) invocan herramientas MCP cruzando el perímetro Svalinn para escaneo de prompt y límites de ejecución.",
      steps: [
        "1. Prompt / Intención del Agente",
        "2. Svalinn Guardrails (Layer 1-3)",
        "3. Validación de Token JWT y PDP",
        "4. Ejecución Segura de Tool MCP"
      ]
    },
    stress: {
      title: "Inyección Transaccional de Alta Concurrencia (Stress Test)",
      badge: "BURST ENGINE • > 10,000 TPS",
      description: "Bifrost inyecta hasta 200 hilos concurrentes mediante pools de sockets persistentes directamente contra el pipeline multiplexado de Asgard.",
      steps: [
        "1. Bifrost Multi-Thread Workers",
        "2. Socket Pool Keep-Alive",
        "3. Medición de Latencia P95/P99",
        "4. Exportación de Métricas en Vivo"
      ]
    },
    audit: {
      title: "Pipeline de Auditoría Inmutable WORM & Evidencias",
      badge: "STORAGE PLANE • MERKLE CHAIN",
      description: "Cada evento de conmutación o tool call es encapsulado en un Canonical Audit Envelope y persistido con SHA-256 en Mimir Storage Vault.",
      steps: [
        "1. Canonical Envelope Generado",
        "2. Enmascaramiento PCI-DSS Luhn",
        "3. Hash-Chained Sha256",
        "4. S3 Object Lock (Compliance)"
      ]
    }
  };

  const nodes = [
    {
      id: 'valgrind',
      x: 180,
      y: 110,
      title: 'Pasarela Zero-Trust',
      codename: 'Valgrind',
      bian: 'Enterprise Access PEP',
      port: ':8080',
      tag: 'Edge PDP <2ms',
      color: '#38bdf8',
      icon: ShieldCheck,
      details: 'Punto de cumplimiento de políticas (PEP). Valida tokens JWKS con Glitnir y acuña JWTs internos efímeros con política Fail-Closed.'
    },
    {
      id: 'svalinn',
      x: 400,
      y: 110,
      title: 'Escudo IA & DLP',
      codename: 'Svalinn',
      bian: 'AI Safety Boundary',
      port: ':8000',
      tag: 'AI Safety & PII',
      color: '#06b6d4',
      icon: Lock,
      details: 'Barrera perimetral para agentes IA. Detección de Prompt Injection, enmascaramiento PAN y circuito Human-in-the-Loop.'
    },
    {
      id: 'asgard',
      x: 620,
      y: 230,
      title: 'Switch Transaccional',
      codename: 'Asgard',
      bian: 'Financial Gateway',
      port: ':8083 / :8087',
      tag: 'Netty Switching',
      color: '#f59e0b',
      icon: Zap,
      details: 'Switch conmutador ISO 8583/HPDH en sockets reactivos Netty. Ruteo STIP de alta velocidad y sniffer de tráfico en vivo.'
    },
    {
      id: 'utgard',
      x: 840,
      y: 230,
      title: 'Simulador Multi-Host',
      codename: 'Utgard',
      bian: 'Card Authorization',
      port: ':8086 / :5050',
      tag: 'Multi-Host SpEL',
      color: '#a855f7',
      icon: Flame,
      details: 'Emulador de autorizadores Visa/MC/Amex con reglas SpEL declarativas en caliente e inyección de contingencias de red.'
    },
    {
      id: 'bifrost',
      x: 400,
      y: 350,
      title: 'Certificación de Pagos',
      codename: 'Bifröst',
      bian: 'Payment Assessment',
      port: ':8081',
      tag: 'DSL Orchestrator',
      color: '#10b981',
      icon: Cpu,
      details: 'Orquestación de escenarios E2E, inyección de estrés masivo concurrente (>10,000 TPS) y puente MCP gobernado.'
    },
    {
      id: 'midgard',
      x: 180,
      y: 350,
      title: 'Directorio de Cuentas',
      codename: 'Midgard',
      bian: 'Card Product Directory',
      port: ':8082',
      tag: 'PCI-DSS Vault',
      color: '#14b8a6',
      icon: Database,
      details: 'Gestión de datos maestros (MDM): catálogo de comercios, terminales POS y tarjetas de prueba tokenizadas con algoritmo de Luhn.'
    },
    {
      id: 'mimir',
      x: 620,
      y: 390,
      title: 'Bóveda Inmutable WORM',
      codename: 'Mímir',
      bian: 'Audit Ledger',
      port: ':8084 / S3',
      tag: 'WORM Archival',
      color: '#6366f1',
      icon: Layers,
      details: 'Bóveda inmutable de evidencias transaccionales y trazabilidad forense con sellado criptográfico SHA-256 en cadena.'
    }
  ];

  return (
    <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Top Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-slate-800/80 bg-slate-900/40">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Radio className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
              Topología Interactiva en Tiempo Real
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono">
                SISTEMA OPERATIVO
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Visualización de arquitectura distribuida, Data Plane y flujos de conmutación
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pausar' : 'Reanudar'}</span>
          </button>
          <button
            onClick={() => setPacketProgress(0)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition"
            title="Reiniciar animación"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Flow Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 border-b border-slate-800/60 bg-slate-900/20 text-xs font-medium">
        {[
          { id: 'iso', label: '1. Autorización ISO 8583', icon: Zap, color: 'text-amber-400 border-amber-500/40 bg-amber-500/10' },
          { id: 'mcp', label: '2. Agentes de IA (MCP)', icon: Cpu, color: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10' },
          { id: 'stress', label: '3. Inyección de Estrés', icon: Activity, color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10' },
          { id: 'audit', label: '4. Auditoría WORM S3', icon: Layers, color: 'text-indigo-400 border-indigo-500/40 bg-indigo-500/10' }
        ].map((f) => {
          const Icon = f.icon;
          const isActive = selectedFlow === f.id;
          return (
            <button
              key={f.id}
              onClick={() => {
                setSelectedFlow(f.id);
                setPacketProgress(0);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition text-left border ${
                isActive
                  ? f.color + ' font-semibold shadow-sm'
                  : 'text-slate-400 border-slate-800/80 hover:bg-slate-800/40 hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{f.label}</span>
            </button>
          );
        })}
      </div>

      {/* Canvas / SVG Topology Display */}
      <div className="relative p-6 sm:p-8 flex justify-center items-center bg-[#050811] overflow-x-auto min-h-[460px]">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #334155 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        <svg viewBox="0 0 1000 480" className="w-full max-w-[960px] h-auto drop-shadow-md select-none">
          {/* Connection Lines (Bus & Links) */}
          <g stroke="rgba(51, 65, 85, 0.4)" strokeWidth="2" strokeDasharray="4 4">
            {/* Valgrind to Svalinn */}
            <line x1="180" y1="110" x2="400" y2="110" />
            {/* Svalinn to Asgard */}
            <line x1="400" y1="110" x2="620" y2="230" />
            {/* Valgrind to Bifrost */}
            <line x1="180" y1="110" x2="400" y2="350" />
            {/* Midgard to Bifrost */}
            <line x1="180" y1="350" x2="400" y2="350" />
            {/* Bifrost to Asgard */}
            <line x1="400" y1="350" x2="620" y2="230" />
            {/* Asgard to Utgard */}
            <line x1="620" y1="230" x2="840" y2="230" />
            {/* Asgard to Mimir */}
            <line x1="620" y1="230" x2="620" y2="390" />
            {/* Bifrost to Mimir */}
            <line x1="400" y1="350" x2="620" y2="390" />
          </g>

          {/* Active Flow Animated Paths */}
          {selectedFlow === 'iso' && (
            <g>
              <path
                d="M 100 230 L 620 230 L 840 230"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="3"
                strokeOpacity="0.7"
              />
              {/* Packet particle moving */}
              <circle
                cx={100 + (840 - 100) * (packetProgress / 100)}
                cy="230"
                r="6"
                fill="#fef08a"
                className="filter drop-shadow-[0_0_8px_#f59e0b]"
              />
              <text x="110" y="215" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">
                TCP Inbound [0200 ISO]
              </text>
            </g>
          )}

          {selectedFlow === 'mcp' && (
            <g>
              <path
                d="M 180 110 L 400 110 L 620 230"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeOpacity="0.8"
              />
              <circle
                cx={180 + (620 - 180) * (packetProgress / 100)}
                cy={110 + (230 - 110) * (packetProgress / 100)}
                r="6"
                fill="#a5f3fc"
                className="filter drop-shadow-[0_0_8px_#06b6d4]"
              />
              <text x="220" y="95" fill="#06b6d4" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Agent Tool Call (Svalinn Rail)
              </text>
            </g>
          )}

          {selectedFlow === 'stress' && (
            <g>
              <path
                d="M 400 350 L 620 230 L 840 230"
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeDasharray="6 3"
              />
              <circle
                cx={400 + (620 - 400) * (packetProgress / 100)}
                cy={350 + (230 - 350) * (packetProgress / 100)}
                r="7"
                fill="#6ee7b7"
                className="filter drop-shadow-[0_0_10px_#10b981]"
              />
              <text x="440" y="320" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">
                Parallel Workers [5,000 TPS Burst]
              </text>
            </g>
          )}

          {selectedFlow === 'audit' && (
            <g>
              <path
                d="M 620 230 L 620 390"
                fill="none"
                stroke="#6366f1"
                strokeWidth="3"
                strokeOpacity="0.8"
              />
              <circle
                cx="620"
                cy={230 + (390 - 230) * (packetProgress / 100)}
                r="6"
                fill="#c7d2fe"
                className="filter drop-shadow-[0_0_8px_#6366f1]"
              />
              <text x="635" y="310" fill="#6366f1" fontSize="10" fontFamily="monospace" fontWeight="bold">
                WORM Envelope [SHA-256]
              </text>
            </g>
          )}

          {/* Render Nodes */}
          {nodes.map((node) => {
            const isHovered = activeNode?.id === node.id;
            return (
              <g
                key={node.id}
                className="cursor-pointer transition-transform duration-200"
                onMouseEnter={() => setActiveNode(node)}
                onMouseLeave={() => setActiveNode(null)}
              >
                {/* Node Outer Glow / Halo */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? 40 : 34}
                  fill={node.color}
                  fillOpacity={isHovered ? 0.25 : 0.12}
                  stroke={node.color}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  className="transition-all duration-300"
                />

                {/* Inner Core */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="24"
                  fill="#0b0f19"
                  stroke={node.color}
                  strokeWidth="1.5"
                />

                {/* Node Text Info */}
                <text
                  x={node.x}
                  y={node.y - 48}
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  {node.title}
                </text>

                <text
                  x={node.x}
                  y={node.y - 35}
                  textAnchor="middle"
                  fill="#fbbf24"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  [{node.codename}]
                </text>

                <text
                  x={node.x}
                  y={node.y + 46}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  {node.port}
                </text>

                <text
                  x={node.x}
                  y={node.y + 58}
                  textAnchor="middle"
                  fill={node.color}
                  fontSize="9"
                  fontWeight="600"
                  fontFamily="monospace"
                >
                  {node.tag}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover Popover Box */}
        {activeNode && (
          <div className="absolute bottom-4 right-4 max-w-xs p-4 rounded-2xl bg-slate-900/95 border border-slate-700 shadow-2xl text-xs backdrop-blur-md pointer-events-none transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeNode.color }} />
              <span className="font-bold text-white text-sm">{activeNode.title}</span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 font-bold">[{activeNode.codename}]</span>
              <span className="text-[10px] font-mono text-slate-400 ml-auto">{activeNode.port}</span>
            </div>
            <div className="text-[10px] font-mono text-emerald-400 font-semibold mb-1">
              BIAN: {activeNode.bian}
            </div>
            <p className="text-slate-300 leading-relaxed">{activeNode.details}</p>
          </div>
        )}
      </div>

      {/* Bottom Live Explainer Box */}
      <div className="p-6 border-t border-slate-800/80 bg-slate-900/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-1">
              {flowDescriptions[selectedFlow].badge}
            </div>
            <h3 className="text-base font-bold text-white">
              {flowDescriptions[selectedFlow].title}
            </h3>
            <p className="text-xs text-slate-400 max-w-2xl mt-0.5">
              {flowDescriptions[selectedFlow].description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] font-mono">
            {flowDescriptions[selectedFlow].steps.map((step, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-slate-800/70 border border-slate-700/60 text-slate-300 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
