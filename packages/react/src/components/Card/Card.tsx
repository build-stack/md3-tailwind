import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { CardProps } from '../../types';

const cardVariants = {
  elevated: 'bg-white shadow-3 hover:shadow-4',
  filled: 'bg-surface-100 border border-surface-200',
  outlined: 'bg-white border border-surface-200 hover:shadow-1',
};

const cardPadding = {
  small: 'p-4',
  medium: 'p-6',
  large: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = 'elevated',
      padding = 'medium',
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      // Base styles
      'rounded-xl',
      'transition-all duration-200',
      
      // Variant styles
      cardVariants[variant],
      
      // Padding styles
      cardPadding[padding],
      
      // Custom className
      className
    );

    return (
      <div
        ref={ref}
        className={baseClasses}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';