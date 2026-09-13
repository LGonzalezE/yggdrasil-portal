import React, { useState, useMemo } from 'react';
import { FAQ_CATEGORIES, FAQ_ITEMS } from '../../data/faqData';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  ShieldCheck, 
  Layers, 
  Zap, 
  Check, 
  Copy, 
  Sparkles, 
  Filter 
} from 'lucide-react';

/**
 * Utility function to format markdown-like text into styled React nodes
 */
const formatInlineText = (text) => {
  if (!text) return null;
  // Match bold **text** and code `code`
  const parts = [];
  let currentIndex = 0;
  const regex = /(\*\*.*?\*\*|`.*?`)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={`b-${match.index}`} className="font-semibold text-amber-200">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code key={`c-${match.index}`} className="px-1.5 py-0.5 rounded bg-slate-800/90 text-cyan-300 font-mono text-[11px] border border-slate-700/60">
          {token.slice(1, -1)}
        </code>
      );
    }
    currentIndex = regex.lastIndex;
  }

  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }

  return parts;
};

const renderAnswerContent = (rawAnswer) => {
  const lines = rawAnswer.split('\n');
  return lines.map((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      return <div key={idx} className="h-2" />;
    }

    if (trimmed.startsWith('- ')) {
      return (
        <div key={idx} className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
          <div className="flex-1">{formatInlineText(trimmed.substring(2))}</div>
        </div>
      );
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const match = trimmed.match(/^(\d+)\.\s(.*)$/);
      return (
        <div key={idx} className="flex items-start gap-2.5 my-2 text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
          <span className="px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 font-mono font-bold text-[10px] border border-amber-500/30 shrink-0 mt-0.5">
            {match[1]}
          </span>
          <div className="flex-1">{formatInlineText(match[2])}</div>
        </div>
      );
    }

    return (
      <p key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed my-1">
        {formatInlineText(trimmed)}
      </p>
    );
  });
};

export const FaqSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({ 'faq-1': true, 'faq-4': true, 'faq-8': true });
  const [copiedId, setCopiedId] = useState(null);

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen = {};
    FAQ_ITEMS.forEach(item => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const copyToClipboard = (item, e) => {
    e.stopPropagation();
    const textToCopy = `${item.question}\n\n${item.answer}\n\nReferencia: ${item.frameworkReference}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.frameworkReference.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="rounded-3xl border border-slate-800 bg-[#060913] p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>KNOWLEDGE BASE &amp; ARCHITECTURAL FAQ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes &amp; Modelos de Referencia
          </h2>

          <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
            Fundamentos teóricos y normativos aplicados en el análisis del ecosistema Yggdrasil: 
            <strong className="text-slate-200"> TOGAF 10 (TRM &amp; III-RM)</strong>, 
            <strong className="text-slate-200"> BIAN v11</strong>, 
            <strong className="text-slate-200"> SABSA Zero-Trust</strong>, 
            <strong className="text-slate-200"> PCI-DSS v4.0</strong>, 
            <strong className="text-slate-200"> ISO 8583 / ISO 20022</strong> y 
            <strong className="text-slate-200"> NIST AI RMF / MCP</strong>.
          </p>
        </div>

        {/* Global Controls: Expand/Collapse */}
        <div className="flex items-center gap-2.5 self-start lg:self-auto">
          <button
            onClick={expandAll}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition active:scale-95 cursor-pointer"
          >
            Expandir todo
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-300 border border-slate-800 transition active:scale-95 cursor-pointer"
          >
            Colapsar todo
          </button>
        </div>
      </div>

      {/* Search Bar & Category Filter Tabs */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por concepto, norma o término (ej. BIAN, Sockets Netty, Zero-Trust, WORM, CDE, MCP)..."
            className="w-full pl-11 pr-24 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/80 transition cursor-pointer"
            >
              Limpiar
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
          {FAQ_CATEGORIES.map(category => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/10'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{category.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-amber-500/30 text-amber-200' : 'bg-slate-800 text-slate-400'
                }`}>
                  {category.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 space-y-3">
            <HelpCircle className="w-8 h-8 text-slate-600 mx-auto" />
            <p className="text-sm font-semibold text-slate-300">No se encontraron preguntas con ese criterio</p>
            <p className="text-xs text-slate-500">Prueba con otra palabra clave como "TOGAF", "BIAN", "PCI", "Zero-Trust" o "Kafka".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-2 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          filteredItems.map(item => {
            const isOpen = Boolean(openItems[item.id]);
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-amber-500/30 bg-slate-950/90 shadow-lg shadow-black/40' 
                    : 'border-slate-800/80 bg-slate-950/40 hover:border-slate-700'
                }`}
              >
                {/* Question Trigger Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer select-none group"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-900 text-amber-400 border border-amber-500/20">
                        {item.frameworkReference.split('—')[0].trim()}
                      </span>
                      {item.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-slate-500 px-1.5 py-0.5 rounded bg-slate-900/60 border border-slate-800">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 pt-1">
                    <button
                      type="button"
                      onClick={(e) => copyToClipboard(item, e)}
                      title="Copiar contenido de la pregunta"
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition cursor-pointer"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center border transition-all ${
                      isOpen 
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                        : 'bg-slate-900 border-slate-800 text-slate-500 group-hover:text-slate-300'
                    }`}>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Collapsible Answer Body */}
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-slate-800/60 space-y-4">
                    <div className="pt-2">
                      {renderAnswerContent(item.answer)}
                    </div>

                    {/* Footer Reference Metadata */}
                    <div className="pt-3 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3 h-3 text-amber-400/70" />
                        <span>Referencia: <strong className="text-slate-400">{item.frameworkReference}</strong></span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded text-[10px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Enterprise Reference Banner */}
      <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-amber-500/5 via-emerald-500/5 to-sky-500/5 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">
              ¿Deseas profundizar en los diagramas de brechas o contratos de arquitectura?
            </h4>
            <p className="text-[11px] text-slate-400">
              Consulta el visualizador interactivo To-Be y el reporte de madurez TOGAF 10 disponibles en este portal.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#togaf"
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/20 transition cursor-pointer"
          >
            Ver Informe TOGAF 10
          </a>
          <a
            href="#tobe"
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition shadow-sm cursor-pointer"
          >
            Ver Blueprint To-Be
          </a>
        </div>
      </div>
    </div>
  );
};
