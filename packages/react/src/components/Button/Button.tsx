import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ButtonProps } from '../../types';

const buttonVariants = {
  filled: 'bg-primary-500 text-white hover:bg-primary-600 focus:bg-primary-700',
  outlined: 'border border-primary-500 text-primary-500 hover:bg-primary-50 focus:bg-primary-100',
  text: 'text-primary-500 hover:bg-primary-50 focus:bg-primary-100',
  elevated: 'bg-white text-primary-500 shadow-3 hover:shadow-4 focus:shadow-4',
  tonal: 'bg-primary-100 text-primary-700 hover:bg-primary-200 focus:bg-primary-300',
};

const buttonSizes = {
  small: 'h-8 px-3 text-label-medium',
  medium: 'h-10 px-4 text-label-large',
  large: 'h-12 px-6 text-label-large',
  xlarge: 'h-16 px-8 text-label-large',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'filled',
      size = 'medium',
      color = 'primary',
      disabled = false,
      fullWidth = false,
      startIcon,
      endIcon,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      // Base styles
      'inline-flex items-center justify-center',
      'rounded-xl font-medium',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      
      // Variant styles
      buttonVariants[variant],
      
      // Size styles
      buttonSizes[size],
      
      // Full width
      fullWidth && 'w-full',
      
      // Custom className
      className
    );

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {startIcon && (
          <span className="mr-2 flex items-center">
            {startIcon}
          </span>
        )}
        {children}
        {endIcon && (
          <span className="ml-2 flex items-center">
            {endIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';