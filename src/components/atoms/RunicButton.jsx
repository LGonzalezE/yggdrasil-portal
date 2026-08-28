import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const RunicButton = ({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  external = true,
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-xs sm:text-sm',
    lg: 'px-6 py-2.5 text-sm'
  };

  const variants = {
    primary: 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/20 border border-amber-400/40',
    emerald: 'bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 border border-emerald-400/40',
    purple: 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold shadow-lg shadow-purple-500/20 border border-purple-400/40',
    teal: 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-slate-950 font-bold shadow-lg shadow-teal-500/20 border border-teal-400/40',
    outline: 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 shadow-md',
    ghost: 'bg-transparent hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
  };

  const selectedClass = `${baseClasses} ${sizeClasses[size]} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={selectedClass}
      >
        <span>{children}</span>
        {external ? <ExternalLink className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={selectedClass}
    >
      <span>{children}</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  );
};
