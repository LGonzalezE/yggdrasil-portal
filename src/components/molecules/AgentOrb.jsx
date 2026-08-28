import React from 'react';
import { Bot, Zap, Eye, Flame, Globe2, Sparkles } from 'lucide-react';

export const AgentOrb = ({ agent, size = 'md', color = 'amber' }) => {
  if (!agent) return null;

  const icons = {
    Zap: Zap,
    Eye: Eye,
    Globe2: Globe2,
    Flame: Flame,
    Bot: Bot,
  };

  const IconComponent = icons[agent.avatarIcon] || Bot;

  const colorStyles = {
    amber: 'from-amber-500 to-amber-700 text-amber-200 ring-amber-400/40 shadow-amber-500/30',
    emerald: 'from-emerald-500 to-emerald-700 text-emerald-200 ring-emerald-400/40 shadow-emerald-500/30',
    teal: 'from-teal-500 to-teal-700 text-teal-200 ring-teal-400/40 shadow-teal-500/30',
    purple: 'from-purple-500 to-purple-700 text-purple-200 ring-purple-400/40 shadow-purple-500/30',
    slate: 'from-slate-700 to-slate-900 text-slate-400 ring-slate-600/30 shadow-slate-950/50'
  };

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const selectedColor = colorStyles[color] || colorStyles.slate;

  return (
    <div className="relative group">
      <div className={`rounded-xl bg-gradient-to-br flex items-center justify-center ring-1 shadow-lg transition-transform duration-300 group-hover:scale-105 ${sizeClasses[size]} ${selectedColor}`}>
        <IconComponent className={`${iconSizes[size]} animate-pulse-slow`} />
      </div>
      <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
    </div>
  );
};
