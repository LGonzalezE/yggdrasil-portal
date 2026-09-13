/**
 * Catálogo de Preguntas Frecuentes (FAQ) y Fundamentos Teóricos / Normativos
 * Yggdrasil Enterprise Platform
 * 
 * Modelos de Referencia:
 * - TOGAF 10 (TRM & III-RM)
 * - BIAN Service Landscape v11
 * - SABSA / O-ESA Zero-Trust Architecture
 * - PCI-DSS v4.0 CDE Scope & WORM
 * - ISO 8583 / ISO 20022 Canonical Data Model (CDM)
 * - NIST AI Risk Management Framework (AI RMF) & Anthropic MCP
 */

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'Todas las Preguntas', badge: '14' },
  { id: 'frameworks', label: 'TOGAF 10 & TRM/III-RM', badge: '3' },
  { id: 'bian', label: 'Estándar Bancario BIAN v11', badge: '2' },
  { id: 'security', label: 'Seguridad SABSA & Zero-Trust', badge: '2' },
  { id: 'compliance', label: 'Cumplimiento PCI-DSS v4.0', badge: '3' },
  { id: 'iso', label: 'Normas ISO 8583 & ISO 20022', badge: '2' },
  { id: 'ai_mcp', label: 'Gobernanza IA (NIST & MCP)', badge: '2' }
];

export const FAQ_ITEMS = [
  // =========================================================================
  // TOGAF 10, TRM & III-RM
  // =========================================================================
  {
    id: 'faq-1',
    category: 'frameworks',
    question: '¿Qué modelos y marcos de referencia internacionales sustentan el diseño y la auditoría de Yggdrasil Platform?',
    answer: `El ecosistema Yggdrasil fue evaluado y diseñado siguiendo una convergencia de los marcos de referencia más rigurosos del sector financiero y tecnológico:
- **TOGAF® 10 (The Open Group Architecture Framework):** Gobierna el método ADM (Fases B, C, D) y estructura la arquitectura empresarial en los planos de Negocio, Datos, Aplicaciones y Tecnología (BDAT).
- **TOGAF TRM (Technical Reference Model) & III-RM (Integrated Information Infrastructure):** Estandarizan los servicios de infraestructura de aplicaciones de ultra baja latencia y el desacoplamiento mediante brokers asíncronos (*Boundaryless Information Flow*).
- **BIAN v11 (Banking Industry Architecture Network):** Provee el catálogo canónico de capacidades bancarias y delimita formalmente los dominios de servicio transaccionales.
- **SABSA / O-ESA:** Establecen la arquitectura Zero-Trust con separación estricta entre puntos de cumplimiento de políticas (PEP) y de decisión (PDP).
- **PCI-DSS v4.0:** Define las barreras de aislamiento del entorno de datos de tarjeta (CDE), cifrado de sobre (AES-256-GCM) y almacenamiento inmutable WORM (Requisito 10).
- **ISO 8583 & ISO 20022 CDM:** Normalizan los esquemas de mensajería binaria y XML/JSON mediante un modelo canónico unificado.
- **NIST AI RMF & Anthropic MCP:** Regulan la seguridad, la prevención de alucinaciones y la autorización de herramientas para agentes inteligentes.`,
    tags: ['TOGAF 10', 'BIAN', 'PCI-DSS', 'SABSA', 'ISO 8583', 'NIST AI'],
    frameworkReference: 'TOGAF 10 Enterprise Metamodel & Architecture Governance'
  },
  {
    id: 'faq-2',
    category: 'frameworks',
    question: '¿Qué es el TOGAF TRM (Technical Reference Model) y cómo se aplica a la capa de alta velocidad de Bifrost?',
    answer: `El **TOGAF TRM (Technical Reference Model)** es una taxonomía fundamental de The Open Group que clasifica los servicios de plataforma comunes que soportan las aplicaciones de negocio:
1. **Servicios de Red y Comunicaciones:** Bifrost implementa sockets TCP asíncronos gobernados por Netty con buffers de memoria directa (*Off-Heap Direct Memory Buffers*), evitando pausas por Garbage Collection y garantizando latencias <5ms a 10,000 TPS.
2. **Servicios de Gestión de Datos en Memoria:** Empleo de cachés de ultra alta velocidad y colas atómicas sin bloqueo para el despacho de autorizaciones financieras.
3. **Servicios de Confiabilidad y Disponibilidad:** Definición de SLAs transaccionales de 99.999% con circuit breakers automáticos y fallback resiliente ante fallas de procesadores externos.`,
    tags: ['TOGAF TRM', 'Netty', 'Sockets TCP', 'Low-Latency', 'Direct Memory'],
    frameworkReference: 'TOGAF Standard 10th Ed. — Technical Reference Model (TRM)'
  },
  {
    id: 'faq-3',
    category: 'frameworks',
    question: '¿En qué consiste el TOGAF III-RM y cómo resuelve el flujo Boundaryless Information Flow en Yggdrasil?',
    answer: `El **TOGAF III-RM (Integrated Information Infrastructure Reference Model)** describe la arquitectura necesaria para lograr el concepto de **"Boundaryless Information Flow"** (Flujo de Información sin Fronteras) dentro de la empresa extendida:
- **Problema Detectado:** El acoplamiento punto a punto sincrónico genera cuellos de botella y cascadas de fallas cuando los servicios se comunican directamente vía HTTP REST bajo alto tráfico.
- **Solución III-RM Aplicada:** Se introduce un bus transaccional distribuido basado en **Apache Kafka** como *Event Spine*. Bifrost publica eventos de autorización particionados por el hash del PAN, permitiendo que subsistemas como Niflheim (Fraude), Mimir (BI) y Vanaheim (Auditoría) consuman el flujo de datos de forma asíncrona, desacoplada y a su propio ritmo de ingesta sin degradar el tiempo de respuesta al POS o cajero.`,
    tags: ['TOGAF III-RM', 'Kafka', 'Boundaryless Flow', 'Event-Driven', 'Asíncrono'],
    frameworkReference: 'TOGAF Standard 10th Ed. — Integrated Information Infrastructure RM'
  },

  // =========================================================================
  // BIAN v11 (Banking Industry Architecture Network)
  // =========================================================================
  {
    id: 'faq-4',
    category: 'bian',
    question: '¿Qué es BIAN v11 y por qué es el estándar canónico para la arquitectura bancaria?',
    answer: `**BIAN (Banking Industry Architecture Network)** es una organización global sin fines de lucro integrada por bancos líderes, procesadores de pago y empresas de software. Define un marco estándar no propietario (*Service Landscape v11*) que modela la banca por capacidades atómicas:
- **Service Domains:** Bloques elementales de funcionalidad que no se solapan entre sí y representan responsabilidades únicas de negocio.
- **Service Operations & Semantic APIs:** Contratos estandarizados que facilitan la interoperabilidad entre diferentes proveedores, núcleos bancarios (core banking) y procesadores adquirentes/emisores.
- **Reducción de Costos:** Evita la reinvención de modelos bancarios y permite que Yggdrasil se conecte de forma transparente con redes como Visa, Mastercard, Prosa o SWIFT.`,
    tags: ['BIAN v11', 'Service Landscape', 'Core Banking', 'Capacidades Bancarias'],
    frameworkReference: 'BIAN Service Landscape v11.0 — Reference Architecture'
  },
  {
    id: 'faq-5',
    category: 'bian',
    question: '¿Cómo se mapean los 9 Reinos de Yggdrasil con los Dominios de Servicio BIAN?',
    answer: `Cada microservicio ("Reino") de Yggdrasil corresponde exactamente con un Service Domain canónico de BIAN v11:
- ⚡ **Bifrost Core:** *Financial Gateway* & *Card Authorization* (Switching de transacciones en caliente y procesamiento de tramas).
- 📜 **Midgard:** *Card Product Directory* & *Product Master Data Management (MDM)* (Gestión de bines, cuentas y catálogos de tarjetas).
- ❄️ **Niflheim:** *Payment Assessment / Risk & Fraud Scoring* (Evaluación de patrones anómalos y bloqueo reactivo).
- 🛡️ **Valgrind:** *Enterprise Access & Security Policy Enforcement (PEP)* (Autenticación Zero-Trust, rate limiting y mTLS).
- 👁️ **Mimir:** *Business & Financial Performance Analytics* (Métricas transaccionales, KPIs y reportes ejecutivos).
- 📯 **Gjallarhorn:** *Party Notification & Real-Time Webhooks* (Despacho de alertas a clientes y webhooks bancarios).
- ⚔️ **Svalinn:** *AI Behavioral Oversight & Automated Model Assessment* (Supervisión y control de agentes autónomos).
- 🏛️ **Vanaheim:** *Financial Audit Ledger & Immutable Transaction Journal* (Libro mayor inmutable y auditoría WORM).
- ⚖️ **Glitnir:** *Party Authentication & Cryptographic Identity* (Gestión de identidades federadas OIDC/Keycloak).`,
    tags: ['BIAN Mapping', 'Service Domains', 'Bifrost', 'Valgrind', 'Svalinn'],
    frameworkReference: 'BIAN Service Landscape v11.0 — Domain Mapping Specification'
  },

  // =========================================================================
  // SABSA & Zero-Trust
  // =========================================================================
  {
    id: 'faq-6',
    category: 'security',
    question: '¿Cómo se implementa el modelo SABSA y la arquitectura Zero-Trust (ZTA) en Yggdrasil?',
    answer: `Yggdrasil implementa los principios de **SABSA (Sherwood Applied Business Security Architecture)** y las directrices **NIST SP 800-207**:
1. **Nunca Confiar, Siempre Verificar:** Ningún microservicio interno asume confianza implícita por estar en la red privada. Todo tráfico inter-servicio requiere cifrado mTLS mutuo con rotación de certificados.
2. **Separación Estricta PEP / PDP:**
   - **PEP (Policy Enforcement Point):** El API Gateway **Valgrind** (puerto :8080) intercepta todo el tráfico perimetral. Si una petición no pasa por Valgrind, los puertos internos rechazan la conexión a nivel de firewall.
   - **PDP (Policy Decision Point):** El motor de políticas evalúa RBAC/ABAC dinámicamente con respuesta en caché Redis (<2ms) y política *Fail-Closed* (ante caída del PDP, el acceso se niega por defecto).`,
    tags: ['SABSA', 'Zero-Trust', 'NIST SP 800-207', 'PEP', 'PDP', 'Valgrind'],
    frameworkReference: 'SABSA Enterprise Security Architecture & NIST SP 800-207'
  },
  {
    id: 'faq-7',
    category: 'security',
    question: '¿Qué es la Arquitectura de Doble Identidad Criptográfica (Humanos vs. Agentes de IA)?',
    answer: `En Yggdrasil coexisten dos tipos de actores que interactúan con la infraestructura financiera:
- **Identidad Humana (Usuarios & Operadores):** Autenticados mediante Glitnir/Keycloak vía OpenID Connect (OIDC) y JWT con expiración corta (15 min), MFA obligatorio y roles basados en principios de mínimo privilegio (Least Privilege).
- **Identidad Agéntica (Agentes de IA / MCP Tools):** Los agentes autónomos como Svalinn operan con identidades criptográficas no humanas basadas en credenciales de servicio mTLS con firmas Ed25519, delimitación estricta de scopes en tiempo de compilación y firma HMAC de cada acción invocada para prevenir la impersonación o ejecución de herramientas no autorizadas.`,
    tags: ['Doble Identidad', 'JWT', 'OIDC', 'mTLS', 'MCP Security', 'Ed25519'],
    frameworkReference: 'O-ESA Enterprise Security Architecture & RFC 8705'
  },

  // =========================================================================
  // PCI-DSS v4.0
  // =========================================================================
  {
    id: 'faq-8',
    category: 'compliance',
    question: '¿Cómo se gestiona y reduce el alcance del CDE (Cardholder Data Environment) bajo PCI-DSS v4.0?',
    answer: `El estándar **PCI-DSS v4.0** exige aislar de forma absoluta cualquier sistema que almacene, procese o transmita datos de tarjetas de pago (PAN, CVV, fecha de expiración, Track 2):
- **Segmentación de Red:** Solo **Bifrost** y **Midgard** tienen acceso al perímetro del CDE. Todos los demás componentes (Mimir, Gjallarhorn, Svalinn) operan *Out-of-Scope* y solo reciben identificadores tokenizados (UUIDs opacos) o PANs enmascarados (primeros 6 dígitos y últimos 4 dígitos: \`411111******1111\`).
- **Eliminación de CVV en Reposo:** Cumpliendo estrictamente el Requisito 3 de PCI-DSS, los códigos de validación (CVV/CVC) se descartan de memoria inmediatamente después de recibir la respuesta de autorización y jamás se persisten en disco bajo ninguna circunstancia.`,
    tags: ['PCI-DSS v4.0', 'CDE Isolation', 'Tokenización', 'PAN Masking', 'Zero CVV Storage'],
    frameworkReference: 'PCI-DSS v4.0 Standard — Requirements 3 & 11'
  },
  {
    id: 'faq-9',
    category: 'compliance',
    question: '¿Qué es Envelope Encryption (Cifrado de Sobre) y cómo protege los datos de pago en reposo?',
    answer: `El cifrado de sobre (*Envelope Encryption*) es el estándar de la industria bancaria para proteger grandes volúmenes de datos sensibles sin comprometer la seguridad de las claves maestras:
1. **Data Encryption Key (DEK):** Cada registro de tarjeta sensible se cifra individualmente utilizando el algoritmo simétrico **AES-256-GCM** con un vector de inicialización único (IV de 96 bits) generado criptográficamente.
2. **Key Encryption Key (KEK / Master Key):** La clave DEK se cifra a su vez mediante una KEK administrada por un módulo de seguridad de hardware (**HSM**) o HashiCorp Vault.
3. **Resultado:** En la base de datos PostgreSQL de Midgard se almacena únicamente el criptograma de los datos y el criptograma de la clave DEK envuelta (*wrapped DEK*). Incluso ante un volcado no autorizado de la base de datos, los datos son indecifrables sin acceso al HSM.`,
    tags: ['Envelope Encryption', 'AES-256-GCM', 'HSM', 'KMS', 'Vault', 'CDE'],
    frameworkReference: 'NIST SP 800-57 Part 1 & PCI-DSS v4.0 Requirement 3.5'
  },
  {
    id: 'faq-10',
    category: 'compliance',
    question: '¿Por qué es obligatorio el almacenamiento inmutable WORM y cómo cumple con el Requisito 10 de PCI-DSS?',
    answer: `El **Requisito 10 de PCI-DSS v4.0** exige el registro y monitoreo exhaustivo de todos los accesos a datos de tarjetahabientes, garantizando que los registros no puedan ser alterados, borrados o manipulados ni siquiera por administradores de sistemas (*Non-Repudiation*):
- **Almacenamiento WORM (Write Once, Read Many):** En el To-Be de Yggdrasil, el microservicio **Vanaheim** almacena las bitácoras de auditoría en buckets S3 compatibles con **Object Lock en Modo Compliance**, donde la política de retención legal (1 año de retención obligatoria y 90 días online para consulta inmediata) es irreversible a nivel de hardware/almacenamiento.
- **Encadenamiento Criptográfico Merkle Tree:** Cada lote de transacciones registradas genera un hash SHA-256 encadenado matemáticamente con el bloque anterior, impidiendo la alteración silenciosa de evidencias forenses.`,
    tags: ['PCI-DSS Req 10', 'WORM Storage', 'S3 Object Lock', 'Merkle Tree', 'Auditoría'],
    frameworkReference: 'PCI-DSS v4.0 Requirement 10.3 & SOC 2 Trust Criteria'
  },

  // =========================================================================
  // Mensajería ISO 8583 & ISO 20022
  // =========================================================================
  {
    id: 'faq-11',
    category: 'iso',
    question: '¿Qué es el Modelo Canónico de Datos (CDM) y cómo resuelve la convivencia entre ISO 8583 e ISO 20022?',
    answer: `En el ecosistema financiero coexisten redes tradicionales de switching basadas en **ISO 8583** (empaquetado binario / ASCII con bitmaps de bits) y los nuevos rieles de pago en tiempo real regulados bajo **ISO 20022** (mensajes ricos en sintaxis XML/JSON, formato MX):
- **Problema:** Crear transformadores dedicados punto a punto entre cada protocolo genera una complejidad combinatoria inmanejable de orden O(N²).
- **Solución CDM:** Yggdrasil implementa un **Canonical Data Model (CDM)** interno neutral. La pasarela traduce cualquier trama entrante (ej. ISO 8583 MTI 0100 o 0200) al modelo canónico común, y luego el motor de reglas enruta o despacha la respuesta en el formato requerido por el destino (ISO 20022 \`pacs.008\`, JSON REST o ISO 8583 MTI 0110) reduciendo la complejidad a O(N).`,
    tags: ['ISO 8583', 'ISO 20022', 'Canonical Data Model', 'CDM', 'pacs.008', 'MTI'],
    frameworkReference: 'ISO 20022 Financial Services & ISO 8583 Banking Telecommunication'
  },
  {
    id: 'faq-12',
    category: 'iso',
    question: '¿Cómo soporta Bifrost las diferentes variantes y dialectos de ISO 8583 (1987, 1993 y HPDH)?',
    answer: `Bifrost cuenta con un motor de parsing modular y declarativo basado en perfiles de dialecto:
- **Especialización por Procesador:** Permite definir diccionarios de datos dinámicos para redes como Prosa, E-Global, Mastercard CIS o Visa Base I, especificando longitud (fija vs variable LLVAR/LLLVAR), codificación (ASCII, EBCDIC, BCD) y empaquetado del bitmap (primario de 64 bits o secundario de 128 bits).
- **Inyección de Escenarios DSL:** A través de Bifrost Test Scenarios, los ingenieros pueden simular transacciones de compra (0200), reversas automáticas (0420), consultas de saldo (0100) y pruebas de echo-test (0800) parametrizando campos críticos como DE-3 (Processing Code), DE-4 (Amount), DE-11 (STAN) y DE-39 (Response Code).`,
    tags: ['ISO 8583 Dialects', '1987 vs 1993', 'HPDH', 'Bifrost DSL', 'LLVAR', 'STAN'],
    frameworkReference: 'ISO 8583:1987 / 1993 Standard Specification'
  },

  // =========================================================================
  // Gobernanza IA (NIST & MCP)
  // =========================================================================
  {
    id: 'faq-13',
    category: 'ai_mcp',
    question: '¿Qué directivas del NIST AI RMF y del estándar MCP protegen a Yggdrasil contra riesgos de IA?',
    answer: `La integración de Inteligencia Artificial en entornos bancarios críticos exige un marco de gobernanza indestructible. Yggdrasil adopta las 4 funciones del **NIST AI RMF (Govern, Map, Measure, Manage)** junto con el **Model Context Protocol (MCP)** de Anthropic:
1. **Frontera de Seguridad de 3 Capas (Svalinn Guardrails):**
   - **Capa 1 (Filtro Semántico):** Análisis de intenciones y prevención de ataques de inyección indirecta de prompts (*Prompt Injection*).
   - **Capa 2 (Inspección DLP):** Detección y bloqueo automático de filtraciones de datos personales (PII) o PAN antes de enviar contexto a los LLMs.
   - **Capa 3 (Circuito de Corte):** Monitoreo estricto del comportamiento y deshabilitación preventiva de herramientas MCP ante fallos o llamadas anómalas.
2. **Gobernanza MCP:** Los servidores MCP de Yggdrasil exponen exclusivamente herramientas deterministas de solo lectura o con transacciones reversibles para generación de pruebas y diagnósticos.`,
    tags: ['NIST AI RMF', 'MCP', 'Svalinn', 'Prompt Injection', 'DLP', 'Guardrails'],
    frameworkReference: 'NIST AI 100-1 Artificial Intelligence Risk Management Framework'
  },
  {
    id: 'faq-14',
    category: 'ai_mcp',
    question: '¿Cómo funciona el circuito Human-in-the-Loop (HITL) para operaciones financieras sensibles?',
    answer: `Ningún agente autónomo de inteligencia artificial posee autorización unilateral para modificar tablas de enrutamiento en caliente, alterar montos transaccionales o autorizar certificaciones de adquirencia:
- **Flujo HITL Criptográfico:** Cuando un agente o módulo analítico de Svalinn propone un cambio de configuración en producción, genera un ticket de propuesta inmutable en Vanaheim firmado digitalmente.
- **Autorización Dual:** Para que la regla sea aplicada en el API Gateway Valgrind o en Bifrost, se requiere la aprobación explícita y firma criptográfica de dos oficiales humanos autorizados (*Four-Eyes Principle / Regla de los Cuatro Ojos*), garantizando cumplimiento normativo estricto y trazabilidad forense integral.`,
    tags: ['HITL', 'Human-in-the-Loop', 'Four-Eyes Principle', 'Svalinn', 'Vanaheim'],
    frameworkReference: 'NIST AI RMF Govern 1.2 & ISO/IEC 42001 (AI Management System)'
  }
];
