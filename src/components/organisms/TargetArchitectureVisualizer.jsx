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
  RefreshCw
} from 'lucide-react';

export const TargetArchitectureVisualizer = () => {
  const [activeLayer, setActiveLayer] = useState('all'); // 'all' | 'edge' | 'data' | 'control' | 'kafka' | 'storage'
  const [selectedBlock, setSelectedBlock] = useState(null);

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

  const filteredPlanes = activeLayer === 'all' 
    ? architecturalPlanes 
    : architecturalPlanes.filter(p => p.id === activeLayer);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl backdrop-blur-md space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-3">
            <Workflow className="w-3.5 h-3.5 text-amber-400" />
            <span>BLUEPRINT ARQUITECTÓNICO • TO-BE TARGET ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Arquitectura Objetivo del Ecosistema Yggdrasil
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
            Diseño corporativo de grado bancario alineado con <strong>TOGAF 10</strong>, <strong>BIAN v11</strong> y <strong>PCI-DSS v4.0</strong>. Desacoplamiento de planos, pasarela Zero-Trust centralizada, matriz de puertos sin colisiones y bus de eventos asíncrono.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>ARQUITECTURA CERTIFICABLE</span>
          </span>
        </div>
      </div>

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

      {/* Visual Canvas by Layers */}
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
