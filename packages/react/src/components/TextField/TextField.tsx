import { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { TextFieldProps } from '../../types';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      label,
      placeholder,
      value,
      onChange,
      error = false,
      helperText,
      required = false,
      disabled = false,
      multiline = false,
      rows = 3,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(value || '');
    
    const currentValue = value !== undefined ? value : internalValue;
    const hasValue = currentValue.length > 0;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      if (onChange) {
        onChange(newValue);
      } else {
        setInternalValue(newValue);
      }
    };

    const baseClasses = cn(
      // Base styles
      'w-full px-4 py-3',
      'bg-white border rounded-lg',
      'text-body-large text-surface-900',
      'transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      
      // Normal state
      !error && !focused && 'border-surface-200 focus:border-primary-500 focus:ring-primary-500',
      
      // Focused state
      focused && !error && 'border-primary-500 ring-2 ring-primary-500',
      
      // Error state
      error && 'border-error-500 focus:border-error-500 focus:ring-error-500',
      
      // Disabled state
      disabled && 'bg-surface-50 text-surface-500 cursor-not-allowed',
      
      // Label positioning
      label && 'pt-6',
      
      // Custom className
      className
    );

    const labelClasses = cn(
      'absolute left-4 transition-all duration-200 pointer-events-none',
      'text-surface-500',
      
      // Label positioning based on focus/value state
      focused || hasValue
        ? 'top-2 text-label-small'
        : 'top-3 text-body-large',
      
      // Error state for label
      error && 'text-error-500',
      
      // Focused state for label
      focused && !error && 'text-primary-500'
    );

    const InputComponent = multiline ? 'textarea' : 'input';

    return (
      <div className="relative">
        <InputComponent
          ref={ref as any}
          className={baseClasses}
          placeholder={focused || !label ? placeholder : ''}
          value={currentValue}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          required={required}
          rows={multiline ? rows : undefined}
          {...props}
        />
        
        {label && (
          <label className={labelClasses}>
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}
        
        {helperText && (
          <p className={cn(
            'mt-1 text-label-small',
            error ? 'text-error-500' : 'text-surface-500'
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';