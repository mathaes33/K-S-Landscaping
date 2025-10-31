import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// This combines props for button, anchor, and Link.
interface ButtonProps {
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  [x: string]: any; // To allow other props like type, onClick, disabled, etc.
}

const Button: React.FC<ButtonProps> = ({
  to,
  href,
  variant = 'secondary',
  size = 'md',
  children,
  className = '',
  leftIcon,
  rightIcon,
  ...props
}) => {
  const focusRingClass = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary';
  const baseClasses = `inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 ${focusRingClass}`;

  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl hover:-translate-y-1',
    secondary: 'bg-secondary hover:bg-secondary-light text-white shadow-lg hover:shadow-xl hover:-translate-y-1',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white/20 hover:scale-105',
    'outline-secondary': 'bg-transparent border-2 border-secondary text-white hover:bg-secondary/20',
    ghost: 'bg-transparent text-gray-300 hover:text-secondary-light transition-colors',
  };

  const sizeClasses = {
    sm: 'py-2 px-5 text-sm',
    md: 'py-3 px-8 text-lg',
    lg: 'py-4 px-8 text-lg',
    xl: 'py-5 px-10 text-xl',
  };

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {content}
      </a>
    );
  }
  
  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
};

export default Button;
