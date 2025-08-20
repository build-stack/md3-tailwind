import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva(
  "w-5 h-5 border-2 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        filled: "border-gray-300 bg-white text-violet-600 hover:border-violet-400 focus:ring-violet-500 checked:bg-violet-600 checked:border-violet-600",
        outlined: "border-gray-300 bg-transparent text-violet-600 hover:border-violet-400 focus:ring-violet-500 checked:bg-violet-600 checked:border-violet-600",
        text: "border-gray-300 bg-transparent text-violet-600 hover:border-violet-400 focus:ring-violet-500 checked:bg-violet-600 checked:border-violet-600",
      },
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
      state: {
        default: "",
        error: "border-red-500 focus:ring-red-500 checked:bg-red-600 checked:border-red-600",
        success: "border-green-500 focus:ring-green-500 checked:bg-green-600 checked:border-green-600",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
      state: "default",
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  helperText?: string;
  error?: boolean;
  success?: boolean;
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    className, 
    variant, 
    size, 
    state, 
    label, 
    helperText, 
    error, 
    success, 
    indeterminate,
    ...props 
  }, ref) => {
    const computedState = error ? "error" : success ? "success" : "default";
    const computedClassName = [
      checkboxVariants({ variant, size, state: computedState }),
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate || false;
      }
    }, [indeterminate]);

    return (
      <div className="flex items-start space-x-3">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className={computedClassName}
            ref={(node) => {
              // Handle both refs
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
              inputRef.current = node;
            }}
            {...props}
          />
        </div>
        {(label || helperText) && (
          <div className="text-sm">
            {label && (
              <label className="font-medium text-gray-700 cursor-pointer select-none">
                {label}
              </label>
            )}
            {helperText && (
              <p className={`mt-1 ${error ? "text-red-600" : success ? "text-green-600" : "text-gray-500"}`}>
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { checkboxVariants };
