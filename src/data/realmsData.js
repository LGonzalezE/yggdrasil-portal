/**
 * Catálogo Maestro de Dominios de Servicio BIAN y Módulos de la Plataforma Yggdrasil
 * 
 * Enfoque de Presentación Dual:
 * 1. Presentación Comercial (Clientes / Banca Global):
 *    - Nombre Principal: Dominio de Negocio BIAN v11 y Nombre Comercial de Solución.
 *    - Lenguaje: Global, ejecutivo, comercial, orientado a valor de negocio, ROI y SLAs.
 *    - Nombre Clave: Nombre interno/técnico del microservicio (Bifrost, Asgard, etc.) como código secundario.
 * 
 * 2. Presentación Interna (Ingeniería / Cosmología):
 *    - Nombre Principal: Reino Mitológico Nórdico (Bifröst, Asgard, Midgard, etc.).
 *    - Lenguaje: Arquitectura de software, runas nórdicas, puertos de red, protocolos internos y lore técnico.
 */

export const REALMS = [
  {
    id: 'bifrost',
    // Identidad Comercial (BIAN / Orientada a Clientes)
    commercialName: 'Pasarela de Certificación y Orquestación de Pagos',
    bianDomain: 'Payment Assessment & Financial Certification Gateway',
    bianGroup: 'Sales & Service / Payment Services',
    commercialTagline: 'Certificación integral de mensajería financiera, pruebas de estrés masivo y orquestación ISO 8583/20022.',
    commercialDescription: 'Plataforma líder de certificación bancaria y aseguramiento de calidad (QA). Permite a bancos, redes transaccionales y procesadores adquirentes diseñar, orquestar y ejecutar escenarios complejos de prueba, certificar flujos de adquirencia/emisión e inyectar estrés concurrente controlado.',
    businessValue: 'Acelera en un 80% los tiempos de homologación con franquicias internacionales (Visa, Mastercard) y procesadores locales.',
    clientFeatures: [
      'Inyección masiva de transacciones concurrentes (>10,000 TPS) con pools de sockets de ultra-alto rendimiento',
      'Diseñador visual de escenarios multi-paso con validación cruzada de códigos de respuesta ISO',
      'Inspección y decodificación granular de campos y bitmaps ISO 8583 (1987, 1993, HPDH) e ISO 20022',
      'Matriz de certificación automática con exportación de evidencias para cumplimiento de auditoría'
    ],

    // Identidad Interna de Sistema (Ingeniería & Cosmología)
    internalCodename: 'Bifröst',
    systemCode: 'bifrost-qa-gate',
    name: 'Bifröst',
    subtitle: 'El Puente del Arcoíris Transaccional',
    appTitle: 'Bifrost QA Gate',
    category: 'QA Gateway & ISO-8583 Orchestrator',
    hasApp: true,
    status: 'active',
    devUrl: 'http://bifrost-dev.yggdrasil.local',
    localUrl: 'http://localhost:3001',
    url: 'http://bifrost-dev.yggdrasil.local',
    ports: {
      frontend: 3001,
      backend: 8081,
      extra: 'Bridge :8645'
    },
    agent: {
      name: 'Heimdall',
      title: 'El Guardián de Visión Infinita',
      role: 'Autonomous QA Agent & Gatekeeper',
      engine: 'Hermes AI Engine :8645 / MCP :8081/mcp',
      avatarIcon: 'Eye'
    },
    rune: 'ᛒ',
    runeName: 'Berkanan',
    runeMeaning: 'Renovación, Nacimiento y Puente Sagrado',
    accentColor: 'emerald',
    gradient: 'from-emerald-500/20 via-cyan-500/10 to-slate-950',
    borderGlow: 'hover:border-emerald-400/80 hover:shadow-emerald-500/30',
    textColor: 'text-emerald-400',
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    description: 'El puente ardiente que conecta los mundos. Como compuerta de QA, inspecciona, valida y orquesta la inyección de transacciones financieras, pruebas de escenarios multi-paso, inyección de estrés de hasta 200 hilos y certificación de tramas ISO 8583.',
    techStack: ['Spring Boot 3.3.4', 'Hermes MCP Bridge', 'ISO Packet Inspector', 'React 18']
  },

  {
    id: 'asgard',
    // Identidad Comercial (BIAN / Orientada a Clientes)
    commercialName: 'Switch Transaccional y Motor de Ruteo Financiero',
    bianDomain: 'Financial Gateway & Payment Execution',
    bianGroup: 'Operations & Execution / Payment Switching',
    commercialTagline: 'Conmutación de pagos de ultra-alta velocidad en sockets Netty (>10,000 TPS) con resiliencia activa.',
    commercialDescription: 'Núcleo de switching y ruteo financiero de alto rendimiento desarrollado sobre arquitectura reactiva no bloqueante. Administra compuertas multi-puerto para canales ISO 8583 y HPDH, ruteo inteligente hacia adquirentes y reglas de contingencia locales (STIP) para garantizar servicio ininterrumpido.',
    businessValue: 'Garantiza continuidad operativa 24/7 con disponibilidad arquitectónica del 99.999% y latencias sub-4ms.',
    clientFeatures: [
      'Multiplexación de sockets TCP con decodificación de tramas sin copias de memoria (Zero-Copy Buffers)',
      'Conmutación en caliente de múltiples dialectos bancarios (ISO 8583:1987, 1993 y protocolos propietarios)',
      'Motor de autorización local en contingencia (Stand-In Processing / STIP) con límites dinámicos',
      'Circuit Breaker inteligente y telemetría de rendimiento transaccional en tiempo real'
    ],

    // Identidad Interna de Sistema (Ingeniería & Cosmología)
    internalCodename: 'Asgard',
    systemCode: 'asgard-switching-core',
    name: 'Asgard',
    subtitle: 'Reino Celestial de los Dioses & Switching Core',
    appTitle: 'Asgard QA Switch',
    category: 'Switching & Routing Core',
    hasApp: true,
    status: 'active',
    devUrl: 'http://asgard-dev.yggdrasil.local:3004',
    localUrl: 'http://localhost:3004',
    url: 'http://asgard-dev.yggdrasil.local:3004',
    ports: {
      frontend: 3004,
      backend: 8083,
      tcp: '8087 (HPDH) / 9001 (ISO)'
    },
    agent: {
      name: 'Hermod',
      title: 'El Veloz Mensajero de los Dioses',
      role: 'Switch Controller & AI Herald',
      engine: 'Netty EventLoop / Hermes MCP :8083/mcp',
      avatarIcon: 'Zap'
    },
    rune: 'ᚫ',
    runeName: 'Ansuz',
    runeMeaning: 'Comunicación y Sabiduría Divina',
    accentColor: 'amber',
    gradient: 'from-amber-500/20 via-sky-500/10 to-slate-950',
    borderGlow: 'hover:border-amber-400/80 hover:shadow-amber-500/30',
    textColor: 'text-amber-400',
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    description: 'La cumbre dorada del cosmos donde residen los dioses. En Asgard opera el switch transaccional de alta velocidad, las compuertas TCP multi-puerto, las reglas de contingencia STIP, sniffer de tráfico en vivo y el Circuit Breaker de protección.',
    techStack: ['Spring Boot 3.3.4', 'Netty TCP Server', 'ISO-8583 Engine', 'React 18']
  },

  {
    id: 'valgrind',
    // Identidad Comercial (BIAN / Orientada a Clientes)
    commercialName: 'Pasarela Perimetral de Seguridad Zero-Trust',
    bianDomain: 'Enterprise Access & Security Policy Enforcement (PEP)',
    bianGroup: 'Cross-Functional / Enterprise Security',
    commercialTagline: 'Control de acceso unificado de grado bancario con autenticación descentralizada y latencia <2ms.',
    commercialDescription: 'Pasarela perimetral de alta seguridad diseñada para proteger infraestructuras financieras críticas. Intercepta, inspecciona y autoriza todas las conexiones hacia la red bancaria mediante autenticación basada en estándares abiertos (OAuth2/JWKS), evaluación dinámica de políticas y blindaje perimetral.',
    businessValue: 'Elimina riesgos de accesos no autorizados y ataques perimetrales sin degradar el rendimiento transaccional (<2ms overhead).',
    clientFeatures: [
      'Autenticación descentralizada mediante tokens criptográficos JWT validados contra JWKS',
      'Punto de Cumplimiento de Políticas (PEP) perimetral con política de fallo cerrado (Fail-Closed)',
      'Protección activa contra ataques de denegación de servicio (DDoS) y limitación de tasa adaptativa',
      'Terminación segura TLS 1.3 y soporte integral de mTLS entre servicios internos'
    ],

    // Identidad Interna de Sistema (Ingeniería & Cosmología)
    internalCodename: 'Valgrind',
    systemCode: 'valgrind-edge-gateway',
    name: 'Valgrind',
    subtitle: 'La Puerta Sagrada de Entrada & Edge PEP',
    appTitle: 'Valgrind Core API Gateway',
    category: 'Reactive Edge & Zero-Trust Security',
    hasApp: true,
    status: 'active',
    devUrl: 'http://valgrind-dev.yggdrasil.local:8080',
    localUrl: 'http://localhost:8080',
    url: 'http://valgrind-dev.yggdrasil.local:8080',
    ports: {
      frontend: 8080,
      backend: 8080,
      extra: 'Redis PDP <2ms'
    },
    agent: {
      name: 'Valquiria Guardián',
      title: 'Protectora del Umbral y Token Minting',
      role: 'Perimeter PDP & Zero-Trust Interceptor',
      engine: 'Spring Cloud Gateway / Reactive Redis',
      avatarIcon: 'Shield'
    },
    rune: 'ᚹ',
    runeName: 'Wunjo',
    runeMeaning: 'Armonía, Protección y Perfección de Entrada',
    accentColor: 'blue',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-slate-950',
    borderGlow: 'hover:border-blue-400/80 hover:shadow-blue-500/30',
    textColor: 'text-blue-400',
    badgeColor: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
    description: 'Punto de entrada reactivo y de ultra-bajo retardo (<2ms) para toda la plataforma. Aplica autenticación JWT descentralizada vía JWKS, autorización dinámica mediante Redis PDP con resiliencia Fail-Closed y acuñación de tokens Zero-Trust para la red interna.',
    techStack: ['Spring Boot 3.3.4', 'Spring Cloud Gateway', 'Reactive Redis', 'Nimbus JOSE/JWT']
  },

  {
    id: 'midgard',
    // Identidad Comercial (BIAN / Orientada a Clientes)
    commercialName: 'Directorio Maestro de Productos y Cuentas de Pago',
    bianDomain: 'Card Product Directory & Merchant Relations (MDM)',
    bianGroup: 'Product & Channel Management / Card Products',
    commercialTagline: 'Gestión centralizada de bines, comercios adquirentes y catálogo de cuentas tokenizadas.',
    commercialDescription: 'Sistema de gestión de datos maestros (MDM) para el ecosistema de pagos. Administra el catálogo de bines emisores, perfiles de comercios adquirentes (MID), terminales POS (TID), códigos de actividad comercial (MCC) y aprovisionamiento de cuentas tokenizadas bajo aislamiento estricto.',
    businessValue: 'Aprovisionamiento instantáneo de entidades financieras y reducción absoluta del riesgo de fuga de datos de tarjeta.',
    clientFeatures: [
      'Catálogo dinámico de bines emisores (Visa, Mastercard, American Express y marcas locales)',
      'Aprovisionamiento de comercios adquirentes (MID), terminales (TID) y perfiles operativos',
      'Generación y validación de cuentas bancarias y tarjetas con algoritmo de Luhn certificado',
      'Aislamiento de datos sensibles compatible con las directrices de alcance CDE de PCI-DSS v4.0'
    ],

    // Identidad Interna de Sistema (Ingeniería & Cosmología)
    internalCodename: 'Midgard',
    systemCode: 'midgard-entities-mdm',
    name: 'Midgard',
    subtitle: 'El Mundo de los Mortales & Entidades',
    appTitle: 'Midgard QA Entities',
    category: 'Financial Entities & PCI Vault',
    hasApp: true,
    status: 'active',
    devUrl: 'http://midgard-dev.yggdrasil.local:3002',
    localUrl: 'http://localhost:3002',
    url: 'http://midgard-dev.yggdrasil.local:3002',
    ports: {
      frontend: 3002,
      backend: 8082,
      extra: 'Bridge :8647'
    },
    agent: {
      name: 'Rig',
      title: 'El Dios Caminante y Forjador de Linajes',
      role: 'Entity Provisioner & Merchant Architect',
      engine: 'Hermes AI Engine :8647 / MCP :8082/mcp',
      avatarIcon: 'Globe2'
    },
    rune: 'ᛗ',
    runeName: 'Mannaz',
    runeMeaning: 'La Humanidad, Comercio y Sociedad',
    accentColor: 'teal',
    gradient: 'from-teal-500/20 via-emerald-500/10 to-slate-950',
    borderGlow: 'hover:border-teal-400/80 hover:shadow-teal-500/30',
    textColor: 'text-teal-400',
    badgeColor: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    description: 'El reino medio habitado por la sociedad mercantil. Aquí se aprovisiona el catálogo maestro transaccional: emisión de tarjetas Visa/Mastercard/Amex, comercios adquirentes (MID, MCC), terminales POS y tokenización dinámica compatible con PCI-DSS.',
    techStack: ['Spring Boot 3.3.4', 'PostgreSQL / JPA', 'Luhn Generator', 'React 18']
  },

  {
    id: 'utgard',
    // Identidad Comercial (BIAN / Orientada a Clientes)
    commercialName: 'Simulador Multi-Emisor y Emulador Host Bancario',
    bianDomain: 'Card Authorization & Multi-Host Issuer Emulation',
    bianGroup: 'Operations & Execution / Card Authorization',
    commercialTagline: 'Emulación dinámica de procesadores autorizadores y banco de pruebas de resiliencia.',
    commercialDescription: 'Emulador virtual de bancos emisores y procesadores autorizadores de alta fidelidad. Permite recrear el comportamiento de múltiples entidades financieras simultáneamente, evaluando reglas dinámicas SpEL en tiempo real para simular aprobaciones, declinaciones, timeouts o caídas de red.',
    businessValue: 'Elimina los costos de pruebas con procesadores reales y permite certificar la resiliencia del switch ante condiciones extremas.',
    clientFeatures: [
      'Emulación concurrente de múltiples hosts emisores y franquicias con respuesta en microsegundos',
      'Motor de reglas declarativas SpEL en caliente sin necesidad de reinicio de servicios',
      'Simulación de fallas complejas de red: latencias parametrizables, paquetes corruptos y cortes de conexión',
      'Soporte completo de códigos de acción y respuesta ISO 8583 (00, 05, 51, 91, 96, etc.)'
    ],

    // Identidad Interna de Sistema (Ingeniería & Cosmología)
    internalCodename: 'Utgard / Jötunheim',
    systemCode: 'utgard-simulator',
    name: 'Utgard / Jötunheim',
    subtitle: 'La Fortaleza de los Gigantes & Caos',
    appTitle: 'Utgard QA Simulator',
    category: 'Issuer Simulator & Chaos Engine',
    hasApp: true,
    status: 'active',
    devUrl: 'http://utgard-dev.yggdrasil.local:3003',
    localUrl: 'http://localhost:3003',
    url: 'http://utgard-dev.yggdrasil.local:3003',
    ports: {
      frontend: 3003,
      backend: 8086,
      extra: 'Bridge :8646'
    },
    agent: {
      name: 'Loki',
      title: 'El Dios de las Ilusiones y la Astucia',
      role: 'Chaos Engineer & Multi-Issuer Simulator',
      engine: 'Hermes AI Engine :8646 / MCP :8080/mcp',
      avatarIcon: 'Flame'
    },
    rune: 'ᚦ',
    runeName: 'Thurisaz',
    runeMeaning: 'Fuerza Primordial, Caos y Mutación',
    accentColor: 'purple',
    gradient: 'from-purple-500/20 via-violet-500/10 to-slate-950',
    borderGlow: 'hover:border-purple-400/80 hover:shadow-purple-500/30',
    textColor: 'text-purple-400',
    badgeColor: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    description: 'La inmensa fortaleza donde gobiernan la astucia y las pruebas del caos. Simula redes autorizadoras (Visa, Mastercard, AMEX), evalúa reglas declarativas SpEL en tiempo real e inyecta latencias, timeouts deliberados y códigos de rechazo.',
    techStack: ['Spring Boot 3.3.4', 'Netty Multi-Port', 'SpEL Rule Engine', 'React + TS']
  },

  {
    id: 'svalinn',
    // Identidad Comercial (BIAN / Orientada a Clientes)
    commercialName: 'Escudo Perimetral de Seguridad y Gobernanza de IA',
    bianDomain: 'Fraud Evaluation & AI Safety Boundary',
    bianGroup: 'Risk & Compliance / Fraud Assessment',
    commercialTagline: 'Blindaje perimetral para agentes IA con prevención de inyección, DLP y aprobación humana (HITL).',
    commercialDescription: 'Frontera de seguridad perimetral y supervisión conductual para sistemas de inteligencia artificial en finanzas. Analiza semánticamente las intenciones de los agentes, previene la fuga involuntaria de información sensible (PAN/PII) y aplica un circuito de aprobación dual humana para acciones operativas.',
    businessValue: 'Permite a las entidades financieras incorporar agentes autónomos con certeza regulatoria y cero riesgo de fuga de datos.',
    clientFeatures: [
      'Filtro de seguridad en 3 capas contra ataques de inyección indirecta de prompts (Prompt Injection)',
      'Inspección y enmascaramiento de datos en tiempo real (Data Loss Prevention / DLP) para PAN y CVV',
      'Supervisión y auditoría de llamadas a herramientas bajo el estándar Model Context Protocol (MCP)',
      'Circuito criptográfico Human-in-the-Loop (HITL) bajo la regla de los cuatro ojos para cambios críticos'
    ],

    // Identidad Interna de Sistema (Ingeniería & Cosmología)
    internalCodename: 'Svalinn',
    systemCode: 'svalinn-guardrails',
    name: 'Svalinn',
    subtitle: 'El Escudo Primordial & AI Guardrails',
    appTitle: 'Svalinn Agentic Guardrails Gateway',
    category: 'Agentic AI Safety & PII Defense',
    hasApp: true,
    status: 'active',
    devUrl: 'http://svalinn-dev.yggdrasil.local:8000',
    localUrl: 'http://localhost:8000',
    url: 'http://svalinn-dev.yggdrasil.local:8000',
    ports: {
      frontend: 8000,
      backend: 8000,
      extra: 'Swagger /docs'
    },
    agent: {
      name: 'Escudo Svalinn',
      title: 'Protector Ante el Fuego de la Inyección',
      role: 'Prompt Defense & HITL Safety Boundary',
      engine: 'FastAPI / Pydantic / Colang 2.0',
      avatarIcon: 'ShieldAlert'
    },
    rune: 'ᛋ',
    runeName: 'Sowilo',
    runeMeaning: 'El Sol, Claridad y Escudo Defensor',
    accentColor: 'cyan',
    gradient: 'from-cyan-500/20 via-teal-500/10 to-slate-950',
    borderGlow: 'hover:border-cyan-400/80 hover:shadow-cyan-500/30',
    textColor: 'text-cyan-400',
    badgeColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    description: 'El escudo que se alza ante el sol para evitar que los mundos ardan. En la plataforma opera como gateway perimetral de seguridad para agentes de IA: previene inyecciones de prompt, anonimiza PANs con algoritmo de Luhn y activa flujos de aprobación humana (HITL).',
    techStack: ['Python 3.12', 'FastAPI', 'Pydantic v2', 'LLM Guardrails']
  },

  {
    id: 'mimir',
    // Identidad Comercial (BIAN / Orientada a Clientes)
    commercialName: 'Bóveda de Evidencias e Historial Transaccional Inmutable',
    bianDomain: 'Regulatory Compliance & Financial Audit Ledger',
    bianGroup: 'Risk & Compliance / Regulatory Reporting',
    commercialTagline: 'Custodia inmutable de evidencias transaccionales y bitácoras forenses bajo estándar WORM.',
    commercialDescription: 'Almacén de auditoría inmutable de grado bancario para trazabilidad forense de extremo a extremo. Indexa metadatos transaccionales en bases de datos relacionales y custodia los paquetes completos de evidencias en almacenamiento WORM (Write Once, Read Many) con sellado criptográfico SHA-256.',
    businessValue: 'Garantiza cumplimiento inquebrantable del Requisito 10 de PCI-DSS v4.0 y no repudio legal en controversias.',
    clientFeatures: [
      'Almacenamiento WORM compatible con S3 Object Lock en modo Compliance',
      'Cadena de hash Merkle Tree para verificación matemática de inmutabilidad de bitácoras',
      'Indexación forense de eventos transaccionales, tramas ISO conmutadas y llamadas a herramientas',
      'Retención legal parametrizable con políticas de expiración automática conforme a regulaciones'
    ],

    // Identidad Interna de Sistema (Ingeniería & Cosmología)
    internalCodename: 'Mímir',
    systemCode: 'mimir-audit-vault',
    name: 'Mímir',
    subtitle: 'La Fuente del Conocimiento Eterno & WORM Vault',
    appTitle: 'Mimir Storage Vault',
    category: 'Immutable WORM Evidence Vault',
    hasApp: true,
    status: 'active',
    devUrl: 'http://mimir-dev.yggdrasil.local:8084',
    localUrl: 'http://localhost:8084',
    url: 'http://mimir-dev.yggdrasil.local:8084',
    ports: {
      frontend: 8084,
      backend: 8084,
      extra: 'MinIO S3 :9000'
    },
    agent: {
      name: 'Mímir el Sabio',
      title: 'Custodio del Saber y Trazas Forenses',
      role: 'Evidence Archival & Hash-Chain Ledger',
      engine: 'Java 21 Virtual Threads / S3 SDK',
      avatarIcon: 'Database'
    },
    rune: 'ᛁ',
    runeName: 'Isa',
    runeMeaning: 'Quietud, Retención Cristalina e Inmutabilidad',
    accentColor: 'indigo',
    gradient: 'from-indigo-500/20 via-blue-500/10 to-slate-950',
    borderGlow: 'hover:border-indigo-400/80 hover:shadow-indigo-500/30',
    textColor: 'text-indigo-400',
    badgeColor: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    description: 'La gloriosa fuente donde Odín entregó su ojo a cambio de sabiduría suprema. Almacén de evidencias transaccionales y trazas forenses con persistencia híbrida: metadatos indexables en PostgreSQL y payloads pesados en MinIO S3 con verificación SHA-256 inmutable.',
    techStack: ['Spring Boot 3.3', 'Java 21 Virtual Threads', 'MinIO / S3', 'PostgreSQL 16']
  },

  {
    id: 'glitnir',
    // Identidad Comercial (BIAN / Orientada a Clientes)
    commercialName: 'Servicio Central de Identidad y Gobernanza de Acceso',
    bianDomain: 'Party Authentication & Access Governance',
    bianGroup: 'Cross-Functional / Party Management',
    commercialTagline: 'Federación de identidades bancarias, gestión de roles RBAC/ABAC y firma de tokens.',
    commercialDescription: 'Servicio corporativo de gestión de identidad y accesos (IAM) para la plataforma bancaria. Administra credenciales corporativas, autenticación multifactor (MFA), roles basados en atributos y emite firmas criptográficas RS256 con rotación automática de claves.',
    businessValue: 'Garantiza cumplimiento regulatorio en control de accesos y segregación estricta de funciones.',
    clientFeatures: [
      'Servidor de autorización basado en OAuth2 / OpenID Connect (OIDC) de grado financiero',
      'Gestión granular de roles corporativos (RBAC) y políticas dinámicas basadas en atributos (ABAC)',
      'Doble identidad criptográfica: tokens para operadores humanos y credenciales mTLS para agentes IA',
      'Rotación periódica de claves asimétricas y punto de publicación JWKS de alta disponibilidad'
    ],

    // Identidad Interna de Sistema (Ingeniería & Cosmología)
    internalCodename: 'Glitnir',
    systemCode: 'glitnir-iam-service',
    name: 'Glitnir',
    subtitle: 'El Palacio de Justicia y Plata & IAM',
    appTitle: 'Glitnir Identity Provider',
    category: 'Identity & Access Management (IAM)',
    hasApp: true,
    status: 'active',
    devUrl: 'http://glitnir-dev.yggdrasil.local:8085',
    localUrl: 'http://localhost:8085',
    url: 'http://glitnir-dev.yggdrasil.local:8085',
    ports: {
      frontend: 8085,
      backend: 8085,
      extra: 'OAuth2 / JWKS'
    },
    agent: {
      name: 'Forseti',
      title: 'El Juez Imparcial del Olimpo Nórdico',
      role: 'Identity Arbiter & Policy Seeder',
      engine: 'Spring Authorization Server / RS256',
      avatarIcon: 'Key'
    },
    rune: 'ᚷ',
    runeName: 'Gebo',
    runeMeaning: 'El Don, Contrato y Alianza Sagrada',
    accentColor: 'sky',
    gradient: 'from-sky-500/20 via-cyan-500/10 to-slate-950',
    borderGlow: 'hover:border-sky-400/80 hover:shadow-sky-500/30',
    textColor: 'text-sky-400',
    badgeColor: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    description: 'El palacio resplandeciente con pilares de oro rojo y techos de plata. Custodia la gobernanza de identidad centralizada, catálogo dinámico de permisos RBAC+ABAC para usuarios humanos y credenciales mTLS para agentes autónomos.',
    techStack: ['Spring Boot 3.2.3', 'Spring Data JPA', 'PostgreSQL', 'OAuth2 / OIDC']
  },

  {
    id: 'svartalfheim',
    // Identidad Comercial (BIAN / Orientada a Clientes)
    commercialName: 'Módulo de Seguridad Criptográfica y Gestión de Llaves HSM',
    bianDomain: 'Cryptographic Key Management & HSM Enclave',
    bianGroup: 'Operations & Execution / Cryptographic Services',
    commercialTagline: 'Cálculo de PIN blocks, validación criptográfica EMV y custodia de claves bancarias.',
    commercialDescription: 'Enclave criptográfico de grado financiero diseñado para la emulación e integración con Módulos de Seguridad de Hardware (HSM). Procesa operaciones criptográficas sensibles para transacciones con tarjeta presente y comercio electrónico seguro.',
    businessValue: 'Protección de grado militar para la custodia de llaves de cifrado y autenticación de tarjetas bancarias.',
    clientFeatures: [
      'Cálculo y traducción de PIN blocks en formatos estándar de la industria (Formatos 0, 1, 2 y 3)',
      'Validación de criptogramas EMV de chip (ARQC / ARPC) y generación de códigos MAC de integridad',
      'Jerarquía de claves bancarias: Master Keys (ZMK, TMK) y Working Keys (ZPK, TPK)',
      'Simulación de comandos nativos de módulos HSM Thales payShield y SafeNet Luna'
    ],

    // Identidad Interna de Sistema (Ingeniería & Cosmología)
    internalCodename: 'Svartalfheim',
    systemCode: 'svartalfheim-hsm-core',
    name: 'Svartalfheim',
    subtitle: 'Cavernas de los Forjadores & HSM Enclave',
    appTitle: 'Cryptographic Core & HSM Enclave',
    category: 'HSM Cryptography & Key Ceremony',
    hasApp: false,
    status: 'planned',
    agent: {
      name: 'Brokk & Sindri',
      title: 'Forjadores del Martillo Mjölnir',
      role: 'HSM Emulation & Cryptanalyst',
      engine: 'Thales / SafeNet Simulator'
    },
    rune: 'ᛏ',
    runeName: 'Tiwaz',
    runeMeaning: 'Precisión, Lanza y Ley Inquebrantable',
    accentColor: 'slate',
    description: 'Las profundas forjas subterráneas. Diseñado para acoger el enclave criptográfico de grado financiero: emulación de Hardware Security Modules (HSM), cálculo de PIN Blocks (Formatos 0/1/2/3), validación de criptogramas EMV ARQC/ARPC y llaves MAC.',
    techStack: ['Bouncy Castle', 'Thales HSM Mock', 'AES / 3DES Engine']
  }
];

export const COSMIC_RUNES = [
  'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 
  'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛋ', 
  'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛟ', 'ᛞ'
];
