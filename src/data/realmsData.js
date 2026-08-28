export const REALMS = [
  {
    id: 'asgard',
    name: 'Asgard',
    subtitle: 'Reino Celestial de los Æsir',
    appTitle: 'Asgard QA Switch',
    category: 'Switching & Routing Core',
    hasApp: true,
    url: 'http://asgard-qa-switch.yggdrasil.local:3004',
    ports: {
      frontend: 3004,
      backend: 8083,
      tcp: '8087 (HPDH) / 9000 (ISO)'
    },
    agent: {
      name: 'Hermod',
      title: 'El Veloz Mensajero de los Dioses',
      role: 'Switch Controller & AI Herald',
      engine: 'Hermes Engine :8646 / Dynamic TCP',
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
    description: 'La cumbre dorada del cosmos donde residen los dioses. En Asgard opera el switch transaccional de alta velocidad, las compuertas TCP multi-puerto, las reglas de contingencia STIP y el Circuit Breaker de protección.',
    techStack: ['Spring Boot 3.3.4', 'Netty TCP Server', 'ISO-8583 Engine', 'React 18']
  },
  {
    id: 'bifrost',
    name: 'Bifröst',
    subtitle: 'El Puente del Arcoíris',
    appTitle: 'Bifrost QA Gate',
    category: 'QA Gateway & ISO-8583 Orchestrator',
    hasApp: true,
    url: 'http://bifrost-qa-gate.yggdrasil.local:3001',
    ports: {
      frontend: 3001,
      backend: 8081,
      extra: 'Bridge :8645'
    },
    agent: {
      name: 'Heimdall',
      title: 'El Guardián de Visión Infinita',
      role: 'Autonomous QA Agent & Gatekeeper',
      engine: 'Hermes AI Engine :8645',
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
    description: 'El puente ardiente y tricolor que conecta los mundos. Como compuerta de QA, inspecciona, valida y orquesta la inyección de transacciones financieras, pruebas de escenarios y certificación de tramas ISO 8583.',
    techStack: ['Spring Boot 3.3.4', 'Hermes MCP Bridge', 'ISO Packet Inspector', 'React 18']
  },
  {
    id: 'midgard',
    name: 'Midgard',
    subtitle: 'El Mundo de los Mortales',
    appTitle: 'Midgard QA Entities',
    category: 'Financial Entities Provisioner',
    hasApp: true,
    url: 'http://midgard-qa-entities.yggdrasil.local:3002',
    ports: {
      frontend: 3002,
      backend: 8082,
      extra: 'Bridge :8647'
    },
    agent: {
      name: 'Rig',
      title: 'El Dios Caminante y Forjador de Linajes',
      role: 'Entity Provisioner & Merchant Architect',
      engine: 'Hermes AI Engine :8647',
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
    description: 'El reino medio habitado por la humanidad y cercado por la gran serpiente. Aquí se aprovisiona el ecosistema transaccional: emisión de tarjetas Visa/Mastercard/Amex, comercios adquirentes y terminales POS.',
    techStack: ['Spring Boot 3.3.4', 'JPA / H2 Store', 'MCP Financial Tools', 'React 18']
  },
  {
    id: 'utgard',
    name: 'Utgard / Jötunheim',
    subtitle: 'La Fortaleza de los Gigantes & Caos',
    appTitle: 'Utgard QA Simulator',
    category: 'Issuer Simulator & Chaos Engine',
    hasApp: true,
    url: 'http://utgard-qa-simulator.yggdrasil.local:3003',
    ports: {
      frontend: 3003,
      backend: 8080,
      extra: 'Bridge :8646'
    },
    agent: {
      name: 'Loki',
      title: 'El Dios de las Ilusiones y la Astucia',
      role: 'Chaos Engineer & Multi-Issuer Simulator',
      engine: 'Hermes AI Engine :8646',
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
    description: 'La inmensa fortaleza más allá del orden divino donde gobiernan la astucia y las pruebas del caos. Simula las redes autorizadoras (Visa, Mastercard, AMEX) e inyecta latencias, timeouts deliberados y códigos de rechazo.',
    techStack: ['Spring Boot 3.3.4', 'Multi-Port Netty', 'ISO Profile Engine', 'React + TS']
  },
  {
    id: 'alfheim',
    name: 'Alfheim',
    subtitle: 'El Reino de la Luz Primordial',
    appTitle: 'Design System & Semantic Tokens',
    category: 'UI & Visual Aesthetics (Latente)',
    hasApp: false,
    agent: {
      name: 'Freyr & Los Elfos de Luz',
      title: 'Los Artífices de la Luz y la Belleza',
      role: 'Design Tokens & Semantic Consistency',
      engine: 'Arquitectura en Estado Latente'
    },
    rune: 'ᛋ',
    runeName: 'Sowilo',
    runeMeaning: 'El Sol, Energía Radiante y Claridad',
    accentColor: 'slate',
    description: 'Tierra celestial de los Ljósálfar (Elfos Luminosos). En la plataforma representará el catálogo central de componentes visuales, tipografías rúnicas, microinteracciones y contratos semánticos para todos los frontends.',
    techStack: ['Atomic Design', 'Tailwind CSS', 'Figma Tokens']
  },
  {
    id: 'vanaheim',
    name: 'Vanaheim',
    subtitle: 'Hogar de los Dioses Sabios',
    appTitle: 'Analytics & Foresight Engine',
    category: 'Real-time Analytics & Telemetry (Latente)',
    hasApp: false,
    agent: {
      name: 'Njörd & Los Sabios Vanir',
      title: 'Guardianes de los Ciclos y el Destino',
      role: 'Deep Metrics & Foresight Analytics',
      engine: 'Arquitectura en Estado Latente'
    },
    rune: 'ᛁ',
    runeName: 'Isa',
    runeMeaning: 'Quietud, Claridad y Retención',
    accentColor: 'slate',
    description: 'El mundo de los dioses Vanir, maestros de la naturaleza y la predicción del porvenir. Futura sede de los motores de telemetría analítica, detección predictiva de anomalías y reportes ejecutivos de liquidación.',
    techStack: ['ClickHouse / Timescale', 'Prometheus', 'Grafana SDK']
  },
  {
    id: 'svartalfheim',
    name: 'Svartalfheim / Nidavellir',
    subtitle: 'Cavernas de los Herreros Divinos',
    appTitle: 'Cryptographic Core & HSM Emulation',
    category: 'HSM Cryptography & Key Ceremony (Latente)',
    hasApp: false,
    agent: {
      name: 'Brokk & Sindri',
      title: 'Los Forjadores del Martillo Mjölnir',
      role: 'HSM Emulation & Crypto Cryptanalyst',
      engine: 'Arquitectura en Estado Latente'
    },
    rune: 'ᛏ',
    runeName: 'Tiwaz',
    runeMeaning: 'Precisión, Lanza y Ley Inquebrantable',
    accentColor: 'slate',
    description: 'Las profundas forjas subterráneas donde los maestros enanos modelan artefactos mágicos. Diseñado para el subsistema de criptografía de grado financiero: emulación HSM, cálculo PIN Block, validación MAC y llaves CVV/PVV.',
    techStack: ['Thales / SafeNet Mock', 'Bouncy Castle', 'AES/3DES Engine']
  },
  {
    id: 'muspelheim',
    name: 'Muspelheim',
    subtitle: 'El Reino del Fuego y la Alta Tensión',
    appTitle: 'High-TPS Stress Engine',
    category: 'Extreme Load & Concurrency (Latente)',
    hasApp: false,
    agent: {
      name: 'Surtr',
      title: 'El Señor del Fuego Primordial',
      role: 'Extreme Stress & Overload Injector',
      engine: 'Arquitectura en Estado Latente'
    },
    rune: 'ᚲ',
    runeName: 'Kenaz',
    runeMeaning: 'Antorcha, Fuego Devorador y Potencia',
    accentColor: 'slate',
    description: 'El ardiente reino de magma y llamas perpetuas custodiado por Surtr. En la plataforma acogerá el motor de pruebas de estrés masivo, inyección de miles de transacciones por segundo (TPS) y pruebas de resistencia térmica.',
    techStack: ['Locust / Gatling Engine', 'ZeroMQ Pipes', 'Distributed Workers']
  },
  {
    id: 'niflheim',
    name: 'Niflheim',
    subtitle: 'Tierra de la Niebla y el Hielo Frío',
    appTitle: 'Immutable Cold Ledger',
    category: 'Cold Storage & Audit Trail (Latente)',
    hasApp: false,
    agent: {
      name: 'Níðhöggr',
      title: 'El Dragón de las Raíces Cósmicas',
      role: 'Cold Archival & Immutable Evidence',
      engine: 'Arquitectura en Estado Latente'
    },
    rune: 'ᚺ',
    runeName: 'Hagalaz',
    runeMeaning: 'Granizo, Disrupción y Estructura Cristalina',
    accentColor: 'slate',
    description: 'El mundo gélido y brumoso en la base del universo, atravesado por los ríos primordiales. Futura bóveda inmutable para el almacenamiento en frío de bitácoras transaccionales, auditorías regulatorias y trazabilidad forense.',
    techStack: ['S3 Glacier Mock', 'Parquet Compression', 'Merkle Tree Proofs']
  },
  {
    id: 'helheim',
    name: 'Helheim',
    subtitle: 'El Reino de las Sombras y el Silencio',
    appTitle: 'Dead Letter Queue & Post-Mortem',
    category: 'DLQ & Fatal Error Audit (Latente)',
    hasApp: false,
    agent: {
      name: 'Hel',
      title: 'La Reina de los Destinos Irrevocables',
      role: 'Dead Letter Queue & Post-Mortem Investigator',
      engine: 'Arquitectura en Estado Latente'
    },
    rune: 'ᛟ',
    runeName: 'Othala',
    runeMeaning: 'El Legado, Lo Ancestral y lo Inmutable',
    accentColor: 'slate',
    description: 'El recinto de las almas que no cayeron en batalla, custodiado por la soberana Hel. Representará la Dead Letter Queue (DLQ) del switch, depósito de transacciones irrecuperables y asistente de análisis post-mortem.',
    techStack: ['Kafka DLQ', 'Post-Mortem Analyzer', 'Incident Forensics']
  }
];

export const COSMIC_RUNES = [
  'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 
  'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛋ', 
  'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛟ', 'ᛞ'
];
