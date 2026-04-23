import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  isLoading = false,
  className = '',
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 py-4 px-6 active:scale-95';
  
  const variants = {
    primary: 'bg-[#53B175] text-white hover:bg-[#489d67] shadow-sm',
    secondary: 'bg-gray-100 text-[#181725] hover:bg-gray-200',
    outline: 'border-2 border-[#E2E2E2] text-[#181725] hover:border-[#53B175] hover:text-[#53B175]',
    ghost: 'bg-transparent text-[#53B175] hover:bg-green-50'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed active:scale-100' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
}
