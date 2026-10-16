import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'outline' | 'ghost' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  id,
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: 'py-2 px-4 text-xs min-h-[38px]',
    md: 'py-3 px-6 text-sm min-h-[44px]',
    lg: 'py-4 px-8 text-base min-h-[52px]'
  };

  const variantStyles = {
    primary:
      'bg-[#168BFF] hover:bg-[#18C8FF] text-white shadow-lg shadow-[#168BFF]/25 hover:shadow-[#18C8FF]/40 border border-[#18C8FF]/50 active:scale-[0.98]',
    gold:
      'bg-gradient-to-r from-[#FFB800] to-[#FFC21C] hover:from-[#FFC21C] hover:to-[#FFB800] text-[#050447] font-extrabold shadow-lg shadow-[#FFB800]/30 hover:shadow-[#FFC21C]/50 border border-[#FFC21C] active:scale-[0.98]',
    cyan:
      'bg-[#18C8FF] hover:bg-[#168BFF] text-[#050447] font-extrabold shadow-lg shadow-[#18C8FF]/30 active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-[#168BFF]/15 text-white border border-[#2774FF]/60 hover:border-[#18C8FF] shadow-sm active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-white/10 text-[#D5DCF8] hover:text-white border-transparent'
  };

  return (
    <button
      id={id}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2.5 font-bold uppercase tracking-wide rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
