import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none';
  
  const variantStyles = {
    primary: 'bg-amber-800 text-white hover:bg-amber-900 active:bg-amber-950',
    secondary: 'bg-amber-100 text-amber-900 hover:bg-amber-200 active:bg-amber-300',
    outline: 'bg-transparent border-2 border-amber-800 text-amber-800 hover:bg-amber-50 active:bg-amber-100',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;