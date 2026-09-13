export const TOGAF_REPORT_DATA = {
  meta: {
    title: "Evaluación de Arquitectura Empresarial: Yggdrasil Platform vs. TOGAF 10 & BIAN",
    role: "Senior Enterprise & Financial Systems Architect",
    date: "13 de Septiembre de 2026",
    framework: "TOGAF® Standard (10ª Edición), BIAN v11, SABSA / O-ESA, ISO 8583 / ISO 20022, PCI-DSS v4.0",
    status: "Documento de Evaluación y Arquitectura Objetivo (Architecture Definition Document)",
    version: "2.0.0"
  },
  summary: {
    overview: "La plataforma Yggdrasil combina velocidad de procesamiento binario en sockets Netty con agentes autónomos de IA mediante Model Context Protocol (MCP). No obstante, la evaluación contra TOGAF (BDAT) y BIAN revela divergencias críticas entre el diseño documental y la implementación en código, colisiones de puertos y evasión de la pasarela Zero-Trust.",
    overallMaturity: [
      { domain: "Business Architecture (B)", level: "Nivel 2 (Gestionado)", score: 65, color: "emerald" },
      { domain: "Data Architecture (D)", level: "Nivel 1 (Inicial - Riesgo PCI)", score: 40, color: "amber" },
      { domain: "Application Architecture (A)", level: "Nivel 2 (Repetible)", score: 60, color: "sky" },
      { domain: "Technology Architecture (T)", level: "Nivel 2 (Gestionado)", score: 55, color: "purple" }
    ]
  },
  bdatGaps: [
    {
      id: "business",
      title: "🏢 Arquitectura de Negocio (Business Architecture - TOGAF Fase B)",
      subtitle: "Alineación con Estándares BIAN y Flujos de Valor de Certificación",
      gaps: [
        {
          code: "GAP-B1",
          name: "Ausencia de Taxonomía BIAN Formal",
          description: "Los microservicios crecieron orgánicamente bajo metáforas mitológicas nórdicas sin delimitación estricta de Service Domains BIAN (Financial Gateway, Card Authorization, Clearing & Settlement).",
          impact: "Dificultad de integración con núcleos bancarios heredados y partners de adquirencia global.",
          solution: "Mapear formalmente los 9 reinos a Dominios de Servicio BIAN v11 y adoptar contratos semánticos normalizados."
        },
        {
          code: "GAP-B2",
          name: "Desacoplamiento de Flujos de Valor de Certificación",
          description: "La certificación de una red emisora o adquirente requiere fases secuenciales (Conectividad -> Cripto -> Positivas -> Declinaciones -> Estrés). Bifrost opera escenarios aislados sin un motor BPMN/Saga.",
          impact: "Pruebas de certificación heterogéneas sin trazabilidad de cumplimiento punta a punta.",
          solution: "Integrar un orquestador de procesos de negocio que gobierne el ciclo de vida del Test Plan con hitos de aprobación."
        }
      ]
    },
    {
      id: "data",
      title: "💾 Arquitectura de Datos (Data Architecture - TOGAF Fase C)",
      subtitle: "Aislamiento CDE PCI-DSS, Soberanía y Almacenamiento Inmutable WORM",
      gaps: [
        {
          code: "GAP-D1",
          name: "Riesgo Crítico de Alcance PCI-DSS (CDE Scope)",
          description: "Midgard almacena PANs, CVVs y Track 2 en texto claro en PostgreSQL. Al no existir Envelope Encryption con KMS o tokenización out-of-scope, todo el clúster cae en auditoría estricta PCI-DSS v4.0.",
          impact: "Riesgo de fuga de datos de tarjetahabientes y no conformidad en auditorías bancarias.",
          solution: "Implementar cifrado de sobre (AES-256-GCM) en reposo para tarjetas y tokenización dinámica antes del guardado."
        },
        {
          code: "GAP-D2",
          name: "Violación del Principio Database-per-Service",
          description: "Glitnir Identity conecta por defecto a 'bifrost_db' compartiendo la base de datos con el motor de pruebas de Bifrost.",
          impact: "Acoplamiento de esquemas relacionales y riesgo de elevación de privilegios.",
          solution: "Crear una base de datos aislada 'glitnir_db' y migrar credenciales a secretos independientes."
        },
        {
          code: "GAP-D3",
          name: "Falta de un Modelo Canónico Financiero (CDM)",
          description: "Inexistencia de un esquema canónico neutral intermedio para coexistencia de tramas binarias ISO 8583 (1987, 1993, HPDH) con el estándar ISO 20022.",
          impact: "Duplicación de lógica de parseo y rigidez ante nuevos formatos de pago en tiempo real.",
          solution: "Definir un Canonical Data Model (CDM) en Java/JSON Schema que sirva de puente bidireccional."
        },
        {
          code: "GAP-D4",
          name: "Almacenamiento de Evidencias Mutable en Mimir",
          description: "Mimir Storage Vault permite 'DELETE' físico de evidencias de auditoría sin cumplir la directiva WORM (Write Once, Read Many).",
          impact: "Vulnerabilidad de repudio legal y pérdida de inmutabilidad exigida por SOC2 y PCI-DSS Req 10.",
          solution: "Habilitar S3 Object Lock en modo Compliance y sellado criptográfico Merkle Tree en la cadena de auditoría."
        }
      ]
    },
    {
      id: "application",
      title: "🧩 Arquitectura de Aplicaciones (Application Architecture - TOGAF Fase C)",
      subtitle: "Perímetro Zero-Trust, API Gateway y Desacoplamiento Asíncrono",
      gaps: [
        {
          code: "GAP-A1",
          name: "Evasión Integral del API Gateway (Bypass de Valgrind)",
          description: "Valgrind Core API Gateway cuenta con Policy Decision Point (PDP) en Redis (<2ms) y token minting, pero los frontends y servicios se comunican punto a punto evadiéndolo.",
          impact: "Las reglas de autorización y auditoría del gateway quedan inactivas ante el tráfico real.",
          solution: "Centralizar el enrutamiento a través de Valgrind (:8080) y cerrar los puertos internos a clientes externos."
        },
        {
          code: "GAP-A2",
          name: "Colisiones Críticas de Puertos en el Ecosistema",
          description: "Utgard QA Simulator y Valgrind compiten por el puerto :8080. El canal ISO ASCII de Asgard (:9000) colisiona con el puerto estándar de MinIO S3 en Mimir (:9000).",
          impact: "Fallas inmediatas de arranque y conflictos de socket al desplegar en un mismo nodo.",
          solution: "Estandarizar matriz: Valgrind :8080, Utgard :8086, Asgard ISO :9001, MinIO S3 :9000."
        },
        {
          code: "GAP-A3",
          name: "Discrepancia Crítica en Glitnir Identity",
          description: "El diseño documental describe un proveedor OAuth2/OIDC con firma RS256 y JWKS, pero Glitnir es solo un CRUD sin autenticación real, login ni emisión de JWT.",
          impact: "Falsa sensación de seguridad; Valgrind no puede validar tokens reales.",
          solution: "Integrar Spring Authorization Server en Glitnir con generación de claves asimétricas y endpoint JWKS."
        },
        {
          code: "GAP-A4",
          name: "Acoplamiento Síncrono y Saturación de Hilos",
          description: "Asgard emite eventos de telemetría directamente desde el bucle Netty mediante STOMP, y Bifrost inyecta miles de TPS en la misma JVM que atiende la API REST.",
          impact: "Degradación de latencia y riesgo de saturación ante ráfagas transaccionales extremas.",
          solution: "Implementar Apache Kafka / Redpanda como bus de mensajería asíncrono para sniffer, auditoría y métricas."
        }
      ]
    },
    {
      id: "technology",
      title: "⚙️ Arquitectura Tecnológica (Technology Architecture - TOGAF Fase D)",
      subtitle: "Seguridad de Red, Criptografía HSM y Alta Disponibilidad",
      gaps: [
        {
          code: "GAP-T1",
          name: "Tráfico Transaccional en Texto Claro (No TLS)",
          description: "Los canales Netty de Asgard (:8087, :9000) operan sobre TCP sin cifrado TLS 1.3 / mTLS.",
          impact: "Vulnerabilidad de intercepción man-in-the-middle en redes intermedias.",
          solution: "Incorporar soporte TLS 1.3 mutuo (mTLS) en el pipeline de Netty para canales financieros seguros."
        },
        {
          code: "GAP-T2",
          name: "Inexistencia de Módulo Criptográfico Financiero (HSM)",
          description: "Svartalfheim permanece en estado latente; no hay emulación fidedigna de PIN Blocks (ANSI X9.8 / ISO 9564) ni validación de criptogramas EMV ARQC/ARPC.",
          impact: "Incapacidad de certificar transacciones con tarjeta física con chip EMV de extremo a extremo.",
          solution: "Desarrollar el enclave Svartalfheim con librerías Bouncy Castle para emulación de comandos HSM Thales/Safenet."
        },
        {
          code: "GAP-T3",
          name: "Topología de Switch Volátil en RAM",
          description: "Los sockets dinámicos y reglas STIP en Asgard residen en ConcurrentHashMap en memoria sin clustering ni persistencia distribuida.",
          impact: "Pérdida de la configuración ante caídas o reinicios del proceso.",
          solution: "Sincronizar el estado del switch con Redis distribuido para permitir alta disponibilidad activo-activo."
        }
      ]
    }
  ],
  riskMatrix: [
    {
      id: "R-01",
      risk: "Glitnir sin Token Provider (OAuth2/JWKS ausente)",
      probability: "Muy Alta",
      impact: "Crítico",
      level: "EXTREMO",
      color: "rose",
      mitigation: "Integrar Spring Authorization Server en Glitnir con emisión de tokens RS256."
    },
    {
      id: "R-02",
      risk: "Bypass de Valgrind Gateway por Frontends y Servicios",
      probability: "Muy Alta",
      impact: "Crítico",
      level: "EXTREMO",
      color: "rose",
      mitigation: "Reescribir proxies Vite y clientes REST para ingresar estrictamente por :8080."
    },
    {
      id: "R-03",
      risk: "Fuga de Datos PAN y No Conformidad PCI-DSS en Midgard",
      probability: "Media",
      impact: "Crítico",
      level: "EXTREMO",
      color: "rose",
      mitigation: "Implementar cifrado de sobre AES-256-GCM con rotación KEK/DEK en la capa JPA."
    },
    {
      id: "R-04",
      risk: "Colisiones de Puertos en Host/Contenedores (:8080 y :9000)",
      probability: "Muy Alta",
      impact: "Alto",
      level: "ALTO",
      color: "amber",
      mitigation: "Estandarizar matriz: Utgard a :8086, Asgard ISO a :9001, MinIO S3 a :9000."
    },
    {
      id: "R-05",
      risk: "Base de Datos Compartida Glitnir-Bifrost",
      probability: "Alta",
      impact: "Alto",
      level: "ALTO",
      color: "amber",
      mitigation: "Crear glitnir_db independiente y migrar credenciales por servicio."
    },
    {
      id: "R-06",
      risk: "Tráfico TCP Financiero sin Cifrado de Transporte",
      probability: "Alta",
      impact: "Alto",
      level: "ALTO",
      color: "amber",
      mitigation: "Habilitar mTLS 1.3 con certificados X.509 en sockets Netty de Asgard."
    },
    {
      id: "R-07",
      risk: "Saturación de Event Loops Netty por STOMP Asíncrono",
      probability: "Alta",
      impact: "Medio",
      level: "MEDIO",
      color: "sky",
      mitigation: "Desplegar Apache Kafka / Redpanda como backbone de telemetría y sniffer."
    },
    {
      id: "R-08",
      risk: "Mutabilidad y Borrado Físico de Evidencias en Mimir",
      probability: "Media",
      impact: "Medio",
      level: "MEDIO",
      color: "sky",
      mitigation: "Activar S3 Object Lock en modo Compliance y anular endpoint DELETE físico."
    }
  ],
  bianMapping: [
    { realm: "Asgard QA Switch", bianDomain: "Financial Gateway / Payment Execution", capability: "Switching & Enrutamiento de Canales Transaccionales" },
    { realm: "Utgard QA Simulator", bianDomain: "Card Authorization / Issuer Processing", capability: "Decisión de Autorización y Emulación Declarativa" },
    { realm: "Midgard QA Entities", bianDomain: "Card Product Directory / Merchant Relations", capability: "Master Data Management (MDM) de Tarjetas, Terminales y Comercios" },
    { realm: "Bifrost QA Gate", bianDomain: "Payment Assessment / Certification Suite", capability: "Orquestación de Pruebas E2E y Certificación Adquirente" },
    { realm: "Svartalfheim HSM", bianDomain: "Cryptographic Key Management", capability: "Cálculo PIN Block, Verificación EMV ARQC y Generación MAC" },
    { realm: "Mimir Storage Vault", bianDomain: "Regulatory Compliance / Audit Ledger", capability: "Custodia de Evidencias Forenses e Inmutabilidad WORM" }
  ]
};
