export const FORMAL_SPEC_DATA = {
  header: {
    title: "Spec: Modernización y Alineación del Ecosistema Yggdrasil con TOGAF 10 y BIAN",
    date: "2026-09-13",
    type: "refactor",
    scope: "fullstack",
    suggestedBranch: "refactor/fullstack-togaf-architecture-alignment",
    artifactVersion: "v3.0.0",
    versionIncrement: "MAJOR"
  },
  context: "El ecosistema Yggdrasil Platform ha evolucionado desde un switch transaccional ISO 8583 hacia una constelación de microservicios con agentes MCP. La evaluación contra TOGAF 10th Edition, BIAN y SABSA demanda resolver colisiones de red, habilitar Zero-Trust efectivo en Valgrind, aislar el entorno CDE de tarjetas según PCI-DSS v4.0 e incorporar un backbone asíncrono con Apache Kafka.",
  acceptanceCriteria: [
    { id: "CA-1", text: "Mapear cada componente y capacidad del ecosistema a los Dominios de Servicio BIAN (Financial Gateway, Card Authorization, Merchant MDM).", done: true },
    { id: "CA-2", text: "Estandarizar matriz de puertos sin colisiones (Utgard a :8086, Asgard ISO ASCII a :9001, MinIO S3 a :9000).", done: true },
    { id: "CA-3", text: "Enrutar el 100% del tráfico externo (Frontends y Agentes) a través de Valgrind API Gateway con validación JWKS y Zero-Trust Token Minting.", done: false },
    { id: "CA-4", text: "Aislar base de datos de Glitnir (glitnir_db), implementar cifrado de sobre (AES-256-GCM) para PANs en Midgard y tokenización out-of-scope.", done: false },
    { id: "CA-5", text: "Introducir Kafka / Redpanda para desacoplar el sniffer de tráfico de Asgard, la ingesta masiva de Mimir y los reportes de Bifrost.", done: false },
    { id: "CA-6", text: "Proveer en Glitnir los endpoints canónicos de emisión y verificación OAuth2 (/oauth2/token, /.well-known/jwks.json).", done: false },
    { id: "CA-7", text: "Formalizar el protocolo de intercepción Svalinn con cuotas de tokens, límites transaccionales y circuito HITL asíncrono.", done: false }
  ],
  phases: [
    {
      phase: "Fase 1",
      name: "Contratos, Dominio y Topología de Red (TOGAF Fases B & C)",
      status: "en_progreso",
      tasks: [
        "Definir Modelo Canónico Financiero (CDM) unificado para ISO 8583 y formato ISO 20022.",
        "Reestructurar matriz de puertos corporativa: Valgrind :8080, Utgard :8086, Asgard ISO :9001.",
        "Separar la base de datos de Glitnir Identity hacia su propio esquema/instancia glitnir_db.",
        "Publicar especificación y contratos OpenAPI unificados en el Yggdrasil Portal."
      ]
    },
    {
      phase: "Fase 2",
      name: "Lógica Core, Pasarela Zero-Trust y Event Bus (TOGAF Fases C & D)",
      status: "pendiente",
      tasks: [
        "Implementar en Glitnir Identity el motor de emisión de tokens JWT RS256 con soporte JWKS público.",
        "Configurar enrutamiento inverso completo en Valgrind API Gateway con validación fail-closed de Redis PDP.",
        "Integrar Apache Kafka / Redpanda como backbone de eventos para asgard.traffic.sniffer y yggdrasil.audit.events.",
        "Implementar Envelope Encryption (AES-256-GCM) en Midgard para aislar el entorno CDE.",
        "Evolucionar Yggdrasil Portal hacia un Shell Micro-Frontend con Vite Module Federation."
      ]
    },
    {
      phase: "Fase 3",
      name: "Testing, Resiliencia, Cumplimiento y Verificación (TOGAF Fases E & F)",
      status: "pendiente",
      tasks: [
        "Pruebas unitarias de enrutamiento y validación fail-closed de Valgrind PDP con Lettuce.",
        "Suite E2E de validación de tránsito ISO 8583 a través de los puertos :9001 y :8087.",
        "Benchmark de concurrencia y latencia del nuevo pipeline con Kafka vs. STOMP anterior.",
        "Auditoría de seguridad y escaneo SAST/DAST para certificación de cero fugas PAN según PCI-DSS 4.0."
      ]
    }
  ]
};
