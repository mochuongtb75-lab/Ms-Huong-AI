import React from 'react';

interface IconBoxProps {
  icon: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
}

export const IconBox: React.FC<IconBoxProps> = ({
  icon,
  variant = 'blue',
  size = 'md',
  className = '',
  id
}) => {
  const sizeStyles = {
    sm: 'w-10 h-10 rounded-xl text-lg',
    md: 'w-13 h-13 rounded-2xl text-2xl',
    lg: 'w-16 h-16 rounded-2xl text-3xl'
  };

  const variantStyles = {
    blue: 'bg-[#168BFF]/20 text-[#18C8FF] border border-[#168BFF]/50 shadow-[0_0_15px_rgba(22,139,255,0.2)]',
    cyan: 'bg-[#18C8FF]/20 text-[#18C8FF] border border-[#18C8FF]/60 shadow-[0_0_15px_rgba(24,200,255,0.25)]',
    gold: 'bg-[#FFB800]/20 text-[#FFC21C] border border-[#FFB800]/60 shadow-[0_0_15px_rgba(255,184,0,0.25)]'
  };

  return (
    <div
      id={id}
      className={`inline-flex items-center justify-center shrink-0 transition-transform duration-300 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon}
    </div>
  );
};
