import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-2">
        {label && (
          <label className="text-sm font-semibold text-[#7C7C7C]">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-4 text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full py-4 bg-transparent border-b border-[#E2E2E2] focus:border-[#53B175] focus:outline-none transition-colors text-[#181725] placeholder:text-gray-400 ${icon ? 'pl-12' : ''} ${className}`}
            {...props}
          />
        </div>
        {error && (
          <span className="text-xs text-red-500">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
