import React from 'react';

export const RuneIcon = ({ 
  rune, 
  size = 'md', 
  active = false, 
  color = 'gold',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-10 h-10 text-base',
    lg: 'w-14 h-14 text-xl',
    xl: 'w-20 h-20 text-3xl'
  };

  const colorStyles = {
    amber: 'text-amber-400 border-amber-500/40 bg-amber-500/10 shadow-amber-500/20',
    emerald: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10 shadow-emerald-500/20',
    teal: 'text-teal-400 border-teal-500/40 bg-teal-500/10 shadow-teal-500/20',
    purple: 'text-purple-400 border-purple-500/40 bg-purple-500/10 shadow-purple-500/20',
    slate: 'text-slate-400 border-slate-700/60 bg-slate-900/60 shadow-slate-900/40'
  };

  const styleClass = colorStyles[color] || colorStyles.slate;

  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-xl border font-bold font-serif select-none transition-all duration-300 shadow-lg ${sizeClasses[size]} ${styleClass} ${active ? 'ring-2 ring-white/20 animate-pulse-slow' : ''} ${className}`}
      title={`Runa Nórdica: ${rune}`}
    >
      <span className="transform -translate-y-0.5">{rune}</span>
    </div>
  );
};
