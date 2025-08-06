import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { ComponentProps } from '../../types';

interface IconButtonProps extends ComponentProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'filled' | 'outlined' | 'text';
  disabled?: boolean;
  onClick?: () => void;
}

const iconButtonVariants = {
  filled: 'bg-primary-500 text-white hover:bg-primary-600 focus:bg-primary-700',
  outlined: 'border border-primary-500 text-primary-500 hover:bg-primary-50 focus:bg-primary-100',
  text: 'text-primary-500 hover:bg-primary-50 focus:bg-primary-100',
};

const iconButtonSizes = {
  small: 'h-8 w-8 text-sm',
  medium: 'h-10 w-10 text-base',
  large: 'h-12 w-12 text-lg',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      className,
      size = 'medium',
      variant = 'text',
      disabled = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      // Base styles
      'inline-flex items-center justify-center',
      'rounded-full',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      
      // Variant styles
      iconButtonVariants[variant],
      
      // Size styles
      iconButtonSizes[size],
      
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
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';