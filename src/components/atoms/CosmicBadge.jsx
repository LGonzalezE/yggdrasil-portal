import React from 'react';

export const CosmicBadge = ({ 
  variant = 'active', 
  children, 
  className = '',
  dot = true 
}) => {
  const variants = {
    active: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-emerald-950/40',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30 shadow-amber-950/40',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30 shadow-purple-950/40',
    teal: 'bg-teal-500/10 text-teal-300 border-teal-500/30 shadow-teal-950/40',
    latent: 'bg-slate-800/60 text-slate-400 border-slate-700/50 shadow-slate-950/40',
    agent: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30 shadow-indigo-950/40'
  };

  const dotColors = {
    active: 'bg-emerald-400',
    amber: 'bg-amber-400',
    purple: 'bg-purple-400',
    teal: 'bg-teal-400',
    latent: 'bg-slate-500',
    agent: 'bg-indigo-400'
  };

  const selectedVariant = variants[variant] || variants.latent;
  const dotColor = dotColors[variant] || dotColors.latent;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border shadow-sm ${selectedVariant} ${className}`}>
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor} ${variant === 'latent' ? '' : 'animate-pulse'}`} />
      )}
      <span>{children}</span>
    </span>
  );
};
