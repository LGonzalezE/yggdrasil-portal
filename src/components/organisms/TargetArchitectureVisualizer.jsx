import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Zap, 
  Flame, 
  Cpu, 
  Database, 
  Layers, 
  Radio, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  Key, 
  Activity, 
  Workflow, 
  ExternalLink,
  Sparkles,
  Server,
  RefreshCw,
  Eye,
  FileCode2
} from 'lucide-react';

export const TargetArchitectureVisualizer = () => {
  const [viewFormat, setViewFormat] = useState('diagram'); // 'diagram' | 'cards'
  const [activeLayer, setActiveLayer] = useState('all'); // 'all' | 'edge' | 'data' | 'control' | 'kafka' | 'storage'
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  const architecturalPlanes = [
    {
      id: 'edge',
      name: '1. Ingress & Identity Boundary (Zero-Trust Edge)',
      badge: 'PERÍMETRO ZERO-TRUST • PDP < 2ms',
      color: 'border-sky-500/40 bg-sky-950/10 text-sky-400',
      description: 'Punto perimetral obligatorio para clientes y agentes. Valida firmas asimétricas JWKS y evalúa políticas en Redis sin tocar los servicios internos.',
      blocks: [
        {
          id: 'valgrind',
          name: 'Valgrind Core API Gateway',
          port: ':8080',
          protocol: 'Spring Cloud Gateway / Netty WebFlux',
          role: 'Ingress Edge único & Acuñador de Tokens Zero-Trust',
          bianDomain: 'Financial Gateway',
          security: 'Validación JWKS asimétrica, Redis PDP (<2ms SLA, Fail-Closed), Minting de JWT efímero (60s)',
          gapResolved: 'Resuelve GAP-A1 (Bypass de pasarela) y GAP-A2 (Centraliza Ingress en :8080 liberando Utgard a :8086)',
          color: 'sky'
        },
        {
          id: 'glitnir',
          name: 'Glitnir Identity Provider',
          port: ':8085',
          protocol: 'Spring Authorization Server / OAuth2 / OIDC',
          role: 'Emisor Centralizado de Identidad & Catálogo RBAC/ABAC',
          bianDomain: 'Party Authentication & Access Governance',
          security: 'Firma RS256, endpoint /.well-known/jwks.json, mTLS para agentes, base de datos aislada glitnir_db',
          gapResolved: 'Resuelve GAP-A3 (Falsa ilusión de auth) y GAP-D2 (Elimina base de datos compartida con Bifrost)',
          color: 'blue'
        },
        {
          id: 'svalinn',
          name: 'Svalinn Guardrails Gateway',
          port: ':8000',
          protocol: 'FastAPI / Pydantic v2 / Colang',
          role: 'Perímetro de Seguridad y Delimitación para Agentes IA',
          bianDomain: 'Fraud Evaluation & Security Boundary',
          security: 'L1: Filtro de Prompt Injection & Luhn PII, L2: Allowlist de Tools & Aprobación HITL, L3: Sanitización JSON',
          gapResolved: 'Formaliza el protocolo Human-in-the-Loop asíncrono y control determinista de herramientas MCP',
          color: 'cyan'
        },
        {
          id: 'redis_pdp',
          name: 'Redis 7 Clúster (PDP)',
          port: ':6379',
          protocol: 'Lettuce Reactive Driver',
          role: 'Caché de Políticas de Autorización en Tiempo Real',
          bianDomain: 'Access Decisioning Engine',
          security: 'SISMEMBER role:<role>:permissions <perm> en memoria con SLA < 2ms y respuesta Fail-Closed',
          gapResolved: 'Garantiza autorización instantánea sin sobrecargar bases de datos relacionales',
          color: 'indigo'
        }
      ]
    },
    {
      id: 'data',
      name: '2. Core Financial Data Plane (Ultra-Low Latency)',
      badge: 'TIEMPO REAL • NETTY SOCKETS • TLS 1.3',
      color: 'border-amber-500/40 bg-amber-950/10 text-amber-400',
      description: 'Procesamiento de tramas financieras ISO 8583 / HPDH en sockets TCP con buffers fuera de heap y evaluación criptográfica de hardware.',
      blocks: [
        {
          id: 'asgard',
          name: 'Asgard QA Switch',
          port: ':8083 (API) | :8087 (HPDH) | :9001 (ISO)',
          protocol: 'Netty 4.1 Multiplexed TCP / mTLS 1.3',
          role: 'Switch Transaccional Conmutador & Ruteo STIP',
          bianDomain: 'Financial Gateway / Payment Execution',
          security: 'Soporte TLS 1.3 mutuo opcional, decodificador zero-copy, circuit breaker de protección contra Utgard',
          gapResolved: 'Resuelve GAP-A2 (Mueve ISO ASCII a :9001 liberando :9000 para MinIO S3) y GAP-T1 (Cifrado de canal TCP)',
          color: 'amber'
        },
        {
          id: 'utgard',
          name: 'Utgard QA Simulator',
          port: ':8086 (Backend) | :5050 (Host Ports)',
          protocol: 'Netty Multi-Port / Spring Expression Language (SpEL)',
          role: 'Emulador Declarativo Multi-Emisor (Visa, Mastercard, Amex)',
          bianDomain: 'Card Authorization / Issuer Processing',
          security: 'Evaluación SpEL en sandbox sin ejecución de código arbitrario, inyección de caos y timeouts deliberados',
          gapResolved: 'Resuelve GAP-A2 (Reubicado al puerto :8086 eliminando colisión con Valgrind API Gateway)',
          color: 'purple'
        },
        {
          id: 'svartalfheim',
          name: 'Svartalfheim HSM Enclave',
          port: ':8088 / Unix Socket',
          protocol: 'Criptografía Financiera Hardware / Bouncy Castle',
          role: 'Emulación HSM & Ceremonia de Llaves Criptográficas',
          bianDomain: 'Cryptographic Key Management',
          security: 'Traducción PIN Block (ISO 0/1/2/3), validación de criptogramas EMV chip (ARQC/ARPC), cálculo CVV y MAC',
          gapResolved: 'Resuelve GAP-T2 (Implementa el módulo criptográfico para certificación de chip EMV real)',
          color: 'emerald'
        }
      ]
    },
    {
      id: 'control',
      name: '3. Control & Governance Plane',
      badge: 'ORQUESTACIÓN DSL • PCI-DSS VAULT',
      color: 'border-emerald-500/40 bg-emerald-950/10 text-emerald-400',
      description: 'Gestión de planes de prueba, banco de pruebas de concurrencia y catálogo maestro de entidades tokenizadas.',
      blocks: [
        {
          id: 'bifrost',
          name: 'Bifrost QA Gate',
          port: ':8081',
          protocol: 'Spring Boot 3.3 / Hermes MCP :8645',
          role: 'Orquestador de Certificación E2E e Inyector de Estrés',
          bianDomain: 'Payment Assessment / Certification Suite',
          security: 'Validación de tokens internos de Valgrind, aislamiento de hilos de estrés, pools de sockets persistentes',
          gapResolved: 'Elimina el consumo de IPs directas cableadas; todo el tráfico transita a través de Valgrind Gateway',
          color: 'emerald'
        },
        {
          id: 'midgard',
          name: 'Midgard QA Entities',
          port: ':8082',
          protocol: 'Spring Data JPA / PostgreSQL 16 (midgard_db)',
          role: 'Bóveda de Tarjetas, Comercios y Terminales (MDM)',
          bianDomain: 'Card Product Directory / Merchant Relations',
          security: 'Envelope Encryption (AES-256-GCM con rotación KEK/DEK), ofuscación nativa de PANs según PCI-DSS v4.0',
          gapResolved: 'Resuelve GAP-D1 (Aisla el entorno CDE eliminando almacenamiento en texto claro de PANs y CVVs)',
          color: 'teal'
        }
      ]
    },
    {
      id: 'kafka',
      name: '4. Enterprise Event-Driven Backbone (Apache Kafka / Redpanda)',
      badge: 'EVENT STREAMING • DESACOPLAMIENTO ASÍNCRONO',
      color: 'border-amber-500/40 bg-amber-950/10 text-amber-400',
      description: 'Bus de eventos de alto volumen que desacopla la telemetría, el sniffer de tráfico y la ingesta de auditoría forense.',
      blocks: [
        {
          id: 'k_sniffer',
          name: 'Topic: asgard.traffic.sniffer',
          port: ':9092',
          protocol: 'Kafka Binary Protocol / KRaft Mode',
          role: 'Streaming de Telemetría Transaccional',
          bianDomain: 'Operational Telemetry Stream',
          security: 'Desacopla el broadcast de paquetes sin saturar los hilos NioEventLoop de Netty en Asgard',
          gapResolved: 'Resuelve GAP-A4 (Elimina cuellos de botella de STOMP directo sobre el switch)',
          color: 'amber'
        },
        {
          id: 'k_audit',
          name: 'Topic: yggdrasil.audit.events',
          port: ':9092',
          protocol: 'Canonical Audit Envelope / Avro Schema',
          role: 'Canal Centralizado de Auditoría Regulatoria',
          bianDomain: 'Audit & Compliance Pipeline',
          security: 'Particionado por tenant y microservicio con retención garantizada de 72 horas para ingesta WORM',
          gapResolved: 'Garantiza registro universal sin pérdida ante picos de pruebas de estrés',
          color: 'indigo'
        },
        {
          id: 'k_exec',
          name: 'Topic: bifrost.execution.results',
          port: ':9092',
          protocol: 'Event Sourcing / JSON Schema',
          role: 'Notificaciones de Finalización de Lotes de Prueba',
          bianDomain: 'Test Batch Lifecycle Notifications',
          security: 'Permite a los reportes y dashboards suscribirse de manera reactiva',
          gapResolved: 'Desacopla la persistencia de resultados de la ejecución activa de Bifrost',
          color: 'emerald'
        }
      ]
    },
    {
      id: 'storage',
      name: '5. Evidence, Analytics & WORM Storage Plane',
      badge: 'CUSTODIA INMUTABLE • S3 OBJECT LOCK',
      color: 'border-indigo-500/40 bg-indigo-950/10 text-indigo-400',
      description: 'Almacenamiento de pruebas forenses inalterables bajo el paradigma WORM (Write Once, Read Many) y analítica de latencia.',
      blocks: [
        {
          id: 'mimir',
          name: 'Mimir Storage Vault',
          port: ':8084 (API) | :9000 (MinIO S3)',
          protocol: 'S3 API / Java 21 Virtual Threads / PostgreSQL',
          role: 'Bóveda de Evidencias y Trazas Criptográficas WORM',
          bianDomain: 'Regulatory Compliance / Audit Ledger',
          security: 'S3 Object Lock en modo Compliance (inmutable), hash encadenado SHA-256 (Merkle Tree), sin borrado físico',
          gapResolved: 'Resuelve GAP-D4 (Elimina mutabilidad de bitácoras exigida por PCI-DSS Req 10 y SOC2)',
          color: 'indigo'
        },
        {
          id: 'timescale',
          name: 'Vanaheim Telemetry & Analytics',
          port: ':8123 / :9090',
          protocol: 'TimescaleDB / ClickHouse / Prometheus',
          role: 'Analítica de Latencias P95/P99 y Detección de Anomalías',
          bianDomain: 'Business & Systems Telemetry',
          security: 'Consumo directo desde topics de Kafka para dashboards en vivo sin penalizar las bases de datos transaccionales',
          gapResolved: 'Satisface el requerimiento de observabilidad E2E con métricas forenses',
          color: 'sky'
        }
      ]
    }
  ];

  // Lookup helper for diagram nodes
  const allBlocks = architecturalPlanes.flatMap(p => p.blocks);
  const getBlock = (id) => allBlocks.find(b => b.id === id);

  const filteredPlanes = activeLayer === 'all' 
    ? architecturalPlanes 
    : architecturalPlanes.filter(p => p.id === activeLayer);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl backdrop-blur-md space-y-8">
      {/* Top Header Banner */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-3">
            <Workflow className="w-3.5 h-3.5 text-amber-400" />
            <span>DIAGRAMA DE ARQUITECTURA OBJETIVO • TO-BE BLUEPRINT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Diagrama Integral de la Arquitectura Objetivo
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
            Representación esquemática formal de la plataforma bancaria Yggdrasil conforme a <strong>TOGAF Standard 10</strong> y <strong>BIAN v11</strong>. Consulta el flujo Zero-Trust, el Data Plane de ultra-baja latencia y el backbone asíncrono con Apache Kafka.
          </p>
        </div>

        {/* View Mode Toggle: Diagrama Visual vs Matriz de Bloques */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setViewFormat('diagram')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
              viewFormat === 'diagram'
                ? 'bg-amber-500 text-black font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>Diagrama Visual To-Be</span>
          </button>
          <button
            type="button"
            onClick={() => setViewFormat('cards')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
              viewFormat === 'cards'
                ? 'bg-amber-500 text-black font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Matriz por Capas</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          VIEW 1: DIAGRAMA VISUAL ARQUITECTÓNICO (SVG INTERACTIVO DE ALTA FIDELIDAD)
      ========================================================================= */}
      {viewFormat === 'diagram' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Controls and Flow Legend */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-300 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Haz clic en cualquier bloque para inspeccionar su especificación técnica, dominio BIAN y mecanismos de seguridad.</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
              <span className="flex items-center gap-1.5 text-sky-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-sky-500/30 border border-sky-400" />
                <span>Zero-Trust Ingress</span>
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-500/30 border border-amber-400" />
                <span>Netty TCP Data Plane</span>
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/30 border border-emerald-400" />
                <span>Control &amp; Bóveda PCI</span>
              </span>
              <span className="flex items-center gap-1.5 text-purple-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-500/30 border border-purple-400" />
                <span>Kafka Event Bus</span>
              </span>
              <span className="flex items-center gap-1.5 text-indigo-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500/30 border border-indigo-400" />
                <span>WORM Storage S3</span>
              </span>
            </div>
          </div>

          {/* SVG Diagram Canvas */}
          <div className="relative rounded-3xl border border-slate-800 bg-[#060813] p-4 sm:p-6 overflow-x-auto shadow-2xl">
            <svg 
              viewBox="0 0 1080 680" 
              className="w-full min-w-[920px] max-w-[1040px] mx-auto h-auto select-none"
            >
              {/* Arrow Head Markers */}
              <defs>
                <marker id="arrow-sky" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8" />
                </marker>
                <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b" />
                </marker>
                <marker id="arrow-emerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#10b981" />
                </marker>
                <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#a855f7" />
                </marker>
                <marker id="arrow-indigo" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#6366f1" />
                </marker>
              </defs>

              {/* =================================================================
                  PLANO 1: INGRESS & ZERO-TRUST BOUNDARY (Y: 20 to 180)
              ================================================================== */}
              <rect x="30" y="20" width="1020" height="170" rx="16" fill="rgba(56, 189, 248, 0.03)" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
              <text x="50" y="44" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
                PLANO 1: INGRESS &amp; IDENTITY BOUNDARY (ZERO-TRUST PERIMETER)
              </text>

              {/* Node: Users & Frontends */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock({ name: 'Clientes & Usuarios', role: 'Usuarios QA, Oficiales CISO y Micro-Frontends', security: 'mTLS / OAuth2 PKCE', bianDomain: 'Client Interface', protocol: 'HTTPS / WSS', port: ':3000', gapResolved: 'Navegación unificada vía Shell' })}>
                <rect x="50" y="65" width="130" height="100" rx="12" fill="#0b1120" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="115" y="105" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Clientes &amp; Frontends</text>
                <text x="115" y="125" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Yggdrasil Portal :3000</text>
                <text x="115" y="145" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace">HTTPS / OAuth2 PKCE</text>
              </g>

              {/* Arrow: Client -> Valgrind */}
              <line x1="180" y1="115" x2="230" y2="115" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-sky)" />
              <text x="205" y="108" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Bearer JWT</text>

              {/* Node: Valgrind Core API Gateway */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('valgrind'))}>
                <rect x="230" y="60" width="220" height="110" rx="12" fill="#071226" stroke="#38bdf8" strokeWidth="2" />
                <text x="340" y="88" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Valgrind API Gateway</text>
                <text x="340" y="105" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">:8080 (Ingress Edge Único)</text>
                <text x="340" y="125" textAnchor="middle" fill="#94a3b8" fontSize="9">JWT Auth • Dynamic PDP Redis</text>
                <text x="340" y="145" textAnchor="middle" fill="#a5f3fc" fontSize="9" fontFamily="monospace">Zero-Trust Internal Token Minting</text>
              </g>

              {/* Arrow: Valgrind <-> Glitnir */}
              <line x1="450" y1="90" x2="520" y2="75" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-sky)" />
              <text x="485" y="75" textAnchor="middle" fill="#93c5fd" fontSize="8" fontFamily="monospace">1. JWKS</text>

              {/* Node: Glitnir Identity Provider */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('glitnir'))}>
                <rect x="520" y="50" width="200" height="50" rx="10" fill="#08142c" stroke="#60a5fa" strokeWidth="1.5" />
                <text x="620" y="72" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Glitnir Identity Provider</text>
                <text x="620" y="88" textAnchor="middle" fill="#60a5fa" fontSize="9" fontFamily="monospace">:8085 • Spring Auth (RS256)</text>
              </g>

              {/* Arrow: Valgrind <-> Redis PDP */}
              <line x1="450" y1="135" x2="520" y2="145" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-sky)" />
              <text x="485" y="152" textAnchor="middle" fill="#a5b4fc" fontSize="8" fontFamily="monospace">2. PDP &lt;2ms</text>

              {/* Node: Redis PDP */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('redis_pdp'))}>
                <rect x="520" y="125" width="200" height="50" rx="10" fill="#0c102c" stroke="#818cf8" strokeWidth="1.5" />
                <text x="620" y="147" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Redis 7 PDP Clúster</text>
                <text x="620" y="163" textAnchor="middle" fill="#818cf8" fontSize="9" fontFamily="monospace">:6379 • SISMEMBER (Fail-Closed)</text>
              </g>

              {/* Node: Svalinn Guardrails */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('svalinn'))}>
                <rect x="790" y="60" width="230" height="110" rx="12" fill="#051922" stroke="#06b6d4" strokeWidth="1.8" />
                <text x="905" y="88" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Svalinn Guardrails Gateway</text>
                <text x="905" y="105" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="monospace" fontWeight="bold">:8000 • AI Security Shield</text>
                <text x="905" y="125" textAnchor="middle" fill="#94a3b8" fontSize="9">Prompt Injection Shield • PII Luhn</text>
                <text x="905" y="145" textAnchor="middle" fill="#67e8f9" fontSize="9" fontFamily="monospace">HITL Approval State Machine</text>
              </g>

              {/* Arrow: Agents <-> Svalinn */}
              <line x1="720" y1="115" x2="790" y2="115" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-sky)" />
              <text x="755" y="108" textAnchor="middle" fill="#67e8f9" fontSize="8" fontFamily="monospace">MCP Tools</text>

              {/* =================================================================
                  PLANO 2: CORE FINANCIAL DATA PLANE (Y: 220 to 420)
              ================================================================== */}
              <rect x="540" y="210" width="510" height="210" rx="16" fill="rgba(245, 158, 11, 0.03)" stroke="rgba(245, 158, 11, 0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
              <text x="560" y="234" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">
                PLANO 2: CORE FINANCIAL DATA PLANE (NETTY TCP &amp; HSM)
              </text>

              {/* Inbound TCP Arrow */}
              <line x1="560" y1="280" x2="610" y2="280" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-amber)" />
              <text x="585" y="272" textAnchor="middle" fill="#fef08a" fontSize="8" fontFamily="monospace">Inbound TCP</text>

              {/* Node: Asgard QA Switch */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('asgard'))}>
                <rect x="610" y="250" width="190" height="120" rx="12" fill="#181206" stroke="#f59e0b" strokeWidth="2" />
                <text x="705" y="278" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Asgard QA Switch</text>
                <text x="705" y="295" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="bold">:8083 | :8087 | :9001</text>
                <text x="705" y="318" textAnchor="middle" fill="#cbd5e1" fontSize="9">Netty Zero-Copy Frame Decoder</text>
                <text x="705" y="335" textAnchor="middle" fill="#94a3b8" fontSize="9">Dynamic STIP Routing Engine</text>
                <text x="705" y="352" textAnchor="middle" fill="#fde68a" fontSize="9" fontFamily="monospace">Co-Piloto Hermod (MCP)</text>
              </g>

              {/* Arrow: Asgard <-> Utgard */}
              <line x1="800" y1="290" x2="840" y2="290" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-amber)" />
              <line x1="840" y1="310" x2="800" y2="310" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
              <text x="820" y="280" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">ISO TCP</text>

              {/* Node: Utgard QA Simulator */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('utgard'))}>
                <rect x="840" y="250" width="190" height="80" rx="12" fill="#160a22" stroke="#a855f7" strokeWidth="1.8" />
                <text x="935" y="275" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Utgard QA Simulator</text>
                <text x="935" y="292" textAnchor="middle" fill="#a855f7" fontSize="10" fontFamily="monospace" fontWeight="bold">:8086 (Reubicado sin conflicto)</text>
                <text x="935" y="310" textAnchor="middle" fill="#e9d5ff" fontSize="9">SpEL Mocks • Chaos Engine</text>
              </g>

              {/* Arrow: Utgard <-> Svartalfheim */}
              <line x1="935" y1="330" x2="935" y2="355" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-emerald)" />

              {/* Node: Svartalfheim HSM Enclave */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('svartalfheim'))}>
                <rect x="840" y="355" width="190" height="55" rx="10" fill="#061b14" stroke="#10b981" strokeWidth="1.5" />
                <text x="935" y="375" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Svartalfheim HSM Enclave</text>
                <text x="935" y="392" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="monospace">PIN Block 0/1/2/3 • EMV ARQC/ARPC</text>
              </g>

              {/* =================================================================
                  PLANO 3: CONTROL & GOVERNANCE PLANE (Y: 220 to 420)
              ================================================================== */}
              <rect x="30" y="210" width="480" height="210" rx="16" fill="rgba(16, 185, 129, 0.03)" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
              <text x="50" y="234" fill="#10b981" fontSize="11" fontWeight="bold" fontFamily="monospace">
                PLANO 3: CONTROL &amp; GOVERNANCE PLANE (DSL &amp; PCI MDM)
              </text>

              {/* Arrow from Valgrind down to Bifrost */}
              <path d="M 340 170 L 340 240 L 140 240 L 140 250" fill="none" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#arrow-sky)" />
              <text x="240" y="235" textAnchor="middle" fill="#a5f3fc" fontSize="8" fontFamily="monospace">Internal JWT Minted</text>

              {/* Node: Bifrost QA Gate */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('bifrost'))}>
                <rect x="50" y="250" width="200" height="120" rx="12" fill="#051912" stroke="#10b981" strokeWidth="2" />
                <text x="150" y="278" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Bifrost QA Gate</text>
                <text x="150" y="295" textAnchor="middle" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold">:8081 • Test Orchestrator</text>
                <text x="150" y="318" textAnchor="middle" fill="#cbd5e1" fontSize="9">Motor DSL de Escenarios Multi-Paso</text>
                <text x="150" y="335" textAnchor="middle" fill="#94a3b8" fontSize="9">Inyector de Estrés (&gt;5000 TPS)</text>
                <text x="150" y="352" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontFamily="monospace">Co-Piloto Heimdall (MCP)</text>
              </g>

              {/* Arrow: Bifrost to Asgard (TCP Transaccional) */}
              <path d="M 250 310 L 610 310" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="6 3" markerEnd="url(#arrow-emerald)" />
              <text x="430" y="303" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontFamily="monospace">TCP Keep-Alive Socket Pool</text>

              {/* Arrow from Valgrind down to Midgard */}
              <path d="M 360 170 L 360 250" fill="none" stroke="#38bdf8" strokeWidth="1.8" markerEnd="url(#arrow-sky)" />

              {/* Node: Midgard QA Entities */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('midgard'))}>
                <rect x="270" y="250" width="220" height="120" rx="12" fill="#061917" stroke="#14b8a6" strokeWidth="2" />
                <text x="380" y="278" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Midgard QA Entities</text>
                <text x="380" y="295" textAnchor="middle" fill="#14b8a6" fontSize="10" fontFamily="monospace" fontWeight="bold">:8082 • Bóveda PCI-DSS</text>
                <text x="380" y="318" textAnchor="middle" fill="#cbd5e1" fontSize="9">Envelope Encryption (AES-256-GCM)</text>
                <text x="380" y="335" textAnchor="middle" fill="#94a3b8" fontSize="9">Catálogo BIAN (MID, TID, Tarjetas)</text>
                <text x="380" y="352" textAnchor="middle" fill="#5eead4" fontSize="9" fontFamily="monospace">Co-Piloto Rig (MCP)</text>
              </g>

              {/* =================================================================
                  PLANO 4: ENTERPRISE EVENT BACKBONE (KAFKA / REDPANDA) (Y: 445 to 535)
              ================================================================== */}
              <rect x="30" y="440" width="1020" height="95" rx="16" fill="rgba(168, 85, 247, 0.04)" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.8" />
              <text x="50" y="462" fill="#a855f7" fontSize="11" fontWeight="bold" fontFamily="monospace">
                PLANO 4: ENTERPRISE EVENT-DRIVEN BACKBONE (APACHE KAFKA / REDPANDA :9092)
              </text>

              {/* Topics Pills */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('k_sniffer'))}>
                <rect x="50" y="475" width="290" height="46" rx="10" fill="#1e102f" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="195" y="495" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Topic: asgard.traffic.sniffer</text>
                <text x="195" y="511" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">Telemetría de Conmutación Asíncrona</text>
              </g>

              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('k_audit'))}>
                <rect x="360" y="475" width="340" height="46" rx="10" fill="#1e102f" stroke="#6366f1" strokeWidth="1.5" />
                <text x="530" y="495" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Topic: yggdrasil.audit.events</text>
                <text x="530" y="511" textAnchor="middle" fill="#818cf8" fontSize="8" fontFamily="monospace">Canonical Audit Envelope • Ingesta WORM</text>
              </g>

              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('k_exec'))}>
                <rect x="720" y="475" width="310" height="46" rx="10" fill="#1e102f" stroke="#10b981" strokeWidth="1.5" />
                <text x="875" y="495" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Topic: bifrost.execution.results</text>
                <text x="875" y="511" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Notificaciones de Lotes Completados</text>
              </g>

              {/* Arrows into Kafka */}
              {/* Asgard -> Kafka sniffer */}
              <path d="M 680 370 L 680 430 L 200 430 L 200 475" fill="none" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
              {/* Bifrost -> Kafka exec */}
              <path d="M 150 370 L 150 430 L 875 430 L 875 475" fill="none" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-emerald)" />
              {/* Valgrind/Svalinn -> Kafka audit */}
              <path d="M 530 175 L 530 475" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow-indigo)" />

              {/* =================================================================
                  PLANO 5: EVIDENCE, ANALYTICS & WORM STORAGE (Y: 555 to 665)
              ================================================================== */}
              <rect x="30" y="555" width="1020" height="105" rx="16" fill="rgba(99, 102, 241, 0.03)" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
              <text x="50" y="578" fill="#818cf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
                PLANO 5: EVIDENCE, ANALYTICS &amp; WORM STORAGE (S3 OBJECT LOCK &amp; TIMESCALEDB)
              </text>

              {/* Arrow from Kafka audit to Mimir */}
              <line x1="530" y1="521" x2="530" y2="590" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow-indigo)" />

              {/* Node: Mimir Storage Vault */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('mimir'))}>
                <rect x="280" y="590" width="370" height="55" rx="12" fill="#0d102a" stroke="#6366f1" strokeWidth="2" />
                <text x="465" y="612" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Mimir Storage Vault</text>
                <text x="465" y="630" textAnchor="middle" fill="#818cf8" fontSize="9" fontFamily="monospace">:8084 • MinIO S3 :9000 (WORM Object Lock • SHA-256 Merkle Ledger)</text>
              </g>

              {/* Arrow from Kafka sniffer to Timescale */}
              <path d="M 195 521 L 195 550 L 850 550 L 850 590" fill="none" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-sky)" />

              {/* Node: Vanaheim Telemetry */}
              <g className="cursor-pointer" onClick={() => setSelectedBlock(getBlock('timescale'))}>
                <rect x="680" y="590" width="350" height="55" rx="12" fill="#081524" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="855" y="612" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Vanaheim Analytics &amp; Telemetría</text>
                <text x="855" y="630" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">TimescaleDB / ClickHouse • Latencias P95/P99 &amp; RCA Forense</text>
              </g>
            </svg>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW 2: MATRIZ DETALLADA POR CAPAS Y BLOQUES (CARDS)
      ========================================================================= */}
      {viewFormat === 'cards' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Layer Filters */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3 text-xs font-semibold">
            <span className="text-slate-500 font-mono text-[11px] mr-1">Filtrar por Plano:</span>
            {[
              { id: 'all', label: 'Ver Arquitectura Completa' },
              { id: 'edge', label: '1. Ingress & Zero-Trust' },
              { id: 'data', label: '2. Data Plane Financiero' },
              { id: 'control', label: '3. Control & Bóveda PCI' },
              { id: 'kafka', label: '4. Bus Kafka / Eventos' },
              { id: 'storage', label: '5. Evidencias WORM' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveLayer(filter.id)}
                className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer font-mono ${
                  activeLayer === filter.id
                    ? 'bg-amber-500 text-black font-bold shadow-md'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredPlanes.map(plane => (
              <div key={plane.id} className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-4">
                {/* Plane Title & Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/60">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span>{plane.name}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{plane.description}</p>
                  </div>
                  <span className={`text-[10px] font-mono px-3 py-1 rounded-full border shrink-0 ${plane.color} font-bold`}>
                    {plane.badge}
                  </span>
                </div>

                {/* Blocks in this Plane */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {plane.blocks.map(block => (
                    <div
                      key={block.id}
                      onClick={() => setSelectedBlock(block)}
                      className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/60 hover:bg-slate-900 transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-3 relative overflow-hidden"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                            {block.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700 font-bold shrink-0">
                            {block.port}
                          </span>
                        </div>

                        <div className="text-[11px] font-mono text-slate-400 line-clamp-1">
                          {block.protocol}
                        </div>

                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {block.role}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-emerald-400 font-bold truncate max-w-[150px]">
                          {block.bianDomain}
                        </span>
                        <span className="text-slate-500 group-hover:text-amber-400 transition-colors flex items-center gap-0.5 font-sans">
                          Inspeccionar <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Block Inspector Drawer / Modal */}
      {selectedBlock && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl rounded-3xl bg-slate-950 border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
                  Inspección de Bloque Arquitectónico (ABB)
                </span>
                <h3 className="text-xl font-extrabold text-white">{selectedBlock.name}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{selectedBlock.protocol} • Puerto {selectedBlock.port}</p>
              </div>
              <button
                onClick={() => setSelectedBlock(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Details Content */}
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-slate-500 font-mono font-bold block uppercase text-[10px]">Rol de Negocio / BIAN Domain:</span>
                <div className="text-sm font-bold text-emerald-400">{selectedBlock.bianDomain}</div>
                <p className="text-slate-300 mt-1">{selectedBlock.role}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
                <span className="text-slate-500 font-mono font-bold block uppercase text-[10px] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  Mecanismos de Seguridad &amp; Zero-Trust:
                </span>
                <p className="text-slate-200 leading-relaxed font-sans">{selectedBlock.security}</p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-1">
                <span className="text-amber-400 font-mono font-bold block uppercase text-[10px] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Mejora y Brecha Resuelta frente al Diseño As-Is:
                </span>
                <p className="text-amber-200/90 leading-relaxed font-sans">{selectedBlock.gapResolved}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedBlock(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
              >
                Cerrar Inspección
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4 Architectural Principles of the Target Design */}
      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
        <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
          <Server className="w-4 h-4 text-amber-400" />
          <span>Principios Arquitectónicos Fundamentales del Diseño Objetivo (To-Be)</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
            <span className="font-bold text-white block">1. Database-per-Service</span>
            <p className="text-slate-400">Cada microservicio tiene su base de datos y credenciales 100% aisladas (glitnir_db separada de bifrost_db).</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
            <span className="font-bold text-white block">2. Ingress Zero-Trust</span>
            <p className="text-slate-400">Ningún cliente se conecta directamente a microservicios; todo el tráfico transita por el PDP de Valgrind.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
            <span className="font-bold text-white block">3. PCI-DSS Envelope Vault</span>
            <p className="text-slate-400">Datos sensibles cifrados en reposo con AES-256-GCM y tokenizados fuera de alcance para minimizar CDE.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1">
            <span className="font-bold text-white block">4. WORM Audit Ledger</span>
            <p className="text-slate-400">Bitácoras y evidencias de pruebas inmutables mediante S3 Object Lock y sellado criptográfico SHA-256.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
