import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  goldBorder?: boolean;
  hoverEffect?: boolean;
  id?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = false,
  goldBorder = false,
  hoverEffect = false,
  id,
  onClick
}) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`bg-[#0B0870]/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
        goldBorder
          ? 'border border-[#FFB800]/60 shadow-[0_4px_24px_rgba(255,184,0,0.12)]'
          : 'border border-[rgba(39,116,255,0.45)]'
      } ${
        glow ? 'shadow-[0_0_30px_rgba(24,139,255,0.25)]' : 'shadow-xl'
      } ${
        hoverEffect
          ? 'hover:-translate-y-1.5 hover:border-[#18C8FF] hover:shadow-[0_12px_35px_rgba(24,200,255,0.22)]'
          : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
