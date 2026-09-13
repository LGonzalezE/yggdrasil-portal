import React from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  ExternalLink, 
  Network, 
  Server, 
  Copy, 
  Check, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export const DeveloperHubSection = () => {
  const mcpAgents = [
    {
      name: "🌈 Heimdall Engine",
      role: "Bifrost QA Gate",
      port: ":8645 / :8081/mcp",
      tools: ["bifrost_run_scenario", "bifrost_launch_stress", "bifrost_analyze_spec", "bifrost_run_batch"],
      description: "Orquestador de escenarios de prueba multi-paso, inyector de estrés y certificación."
    },
    {
      name: "⚡ Hermod Herald",
      role: "Asgard QA Switch",
      port: ":8083/mcp",
      tools: ["asgard_open_port", "asgard_close_port", "asgard_set_stip_rule", "asgard_get_traffic_stats"],
      description: "Control dinámico de sockets Netty, reglas STIP y telemetría de conmutación en vivo."
    },
    {
      name: "🔥 Loki Architect",
      role: "Utgard QA Simulator",
      port: ":8646 / :8080/mcp",
      tools: ["utgard_orchestrate_host", "utgard_chaos_injection", "utgard_rca_diagnostic", "utgard_mock_rule"],
      description: "Emulación de autorizadores, evaluación SpEL en caliente e inyección deliberada de fallas."
    },
    {
      name: "🏛️ Rig Provisioner",
      role: "Midgard QA Entities",
      port: ":8647 / :8082/mcp",
      tools: ["midgard_query_cards", "midgard_provision_merchant", "midgard_generate_track2", "midgard_mask_pan"],
      description: "Aprovisionamiento de comercios, terminales POS y generación de tarjetas con algoritmo de Luhn."
    }
  ];

  const apiContracts = [
    { name: "Valgrind Core API Gateway", url: "http://valgrind-dev.yggdrasil.local:8080/actuator", doc: "/docs", tech: "Spring Cloud Gateway" },
    { name: "Svalinn Guardrails Gateway", url: "http://svalinn-dev.yggdrasil.local:8000/docs", doc: "/docs", tech: "FastAPI / OpenAPI 3.1" },
    { name: "Bifrost QA Gate API", url: "http://bifrost-dev.yggdrasil.local/api/v1/health", doc: "/docs", tech: "Spring Boot 3.3.4" },
    { name: "Midgard QA Entities API", url: "http://midgard-dev.yggdrasil.local:3002/api/v1/cards", doc: "/docs", tech: "Spring Data JPA" },
    { name: "Mimir Storage Vault API", url: "http://mimir-dev.yggdrasil.local:8084/docs", doc: "/docs", tech: "Springdoc OpenAPI" }
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl backdrop-blur-md space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30 mb-2">
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span>DEVELOPER &amp; ARCHITECT HUB</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Recursos Técnicos, Protocolo MCP y APIs
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Integración de agentes autónomos, contratos OpenAPI y guías de desarrollo distribuido para el ecosistema Yggdrasil.
          </p>
        </div>
      </div>

      {/* MCP AI Agent Tool Matrix */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-amber-400" />
          <span>Matriz de Agentes de IA y Herramientas MCP (Model Context Protocol)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mcpAgents.map((agent, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm">{agent.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                  {agent.port}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{agent.description}</p>
              <div>
                <span className="text-[10px] font-mono text-slate-500 block uppercase mb-1.5 font-bold">
                  Herramientas MCP Expuestas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {agent.tools.map((t, tIdx) => (
                    <code key={tIdx} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {t}
                    </code>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OpenAPI & Swagger Directory */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-sky-400" />
          <span>Documentación Interactiva Swagger / OpenAPI</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apiContracts.map((api, idx) => (
            <a
              key={idx}
              href={api.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900/80 transition group flex flex-col justify-between space-y-2 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white group-hover:text-sky-300 transition">
                  {api.name}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 flex justify-between">
                <span>{api.tech}</span>
                <span className="text-sky-400 font-semibold">{api.doc}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
