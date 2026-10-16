import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'gold' | 'outline';
  className?: string;
  id?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'blue', 
  className = '',
  id 
}) => {
  const variantStyles = {
    blue: 'bg-[#168BFF]/15 text-[#18C8FF] border border-[#168BFF]/40',
    cyan: 'bg-[#18C8FF]/15 text-[#18C8FF] border border-[#18C8FF]/50',
    gold: 'bg-[#FFB800]/15 text-[#FFC21C] border border-[#FFB800]/50 font-bold',
    outline: 'bg-transparent text-[#D5DCF8] border border-white/20'
  };

  return (
    <span
      id={id}
      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${variantStyles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
};
