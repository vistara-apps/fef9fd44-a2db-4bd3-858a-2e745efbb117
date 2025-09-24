'use client';

import { LucideIcon } from 'lucide-react';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  icon: 'p-2 rounded-lg hover:bg-surface transition-colors text-text-secondary hover:text-text-primary'
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
};

export function CTAButton({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  onClick,
  disabled = false,
  className = ''
}: CTAButtonProps) {
  const variantClass = variantClasses[variant];
  const sizeClass = variant !== 'icon' ? sizeClasses[size] : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantClass} 
        ${sizeClass} 
        rounded-lg font-medium transition-all duration-200 
        flex items-center justify-center space-x-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {Icon && <Icon size={variant === 'icon' ? 20 : 16} />}
      {variant !== 'icon' && <span>{children}</span>}
    </button>
  );
}
