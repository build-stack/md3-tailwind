import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        filled: "bg-gray-200 focus:ring-violet-500 checked:bg-violet-600",
        outlined: "bg-transparent border-2 border-gray-300 focus:ring-violet-500 checked:border-violet-600 checked:bg-violet-600",
        text: "bg-gray-200 focus:ring-violet-500 checked:bg-violet-600",
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },
      state: {
        default: "",
        error: "focus:ring-red-500 checked:bg-red-600",
        success: "focus:ring-green-500 checked:bg-green-600",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
      state: "default",
    },
  }
);

const thumbVariants = cva(
  "inline-block transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-200",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof switchVariants> {
  label?: string;
  helperText?: string;
  error?: boolean;
  success?: boolean;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ 
    className, 
    variant, 
    size, 
    state, 
    label, 
    helperText, 
    error, 
    success, 
    ...props 
  }, ref) => {
    const computedState = error ? "error" : success ? "success" : "default";
    const computedClassName = [
      switchVariants({ variant, size, state: computedState }),
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const thumbClassName = thumbVariants({ size });

    return (
      <div className="flex items-start space-x-3">
        <div className="flex items-center">
          <button
            type="button"
            role="switch"
            aria-checked={props.checked}
            className={computedClassName}
            disabled={props.disabled}
          >
            <span
              className={`${thumbClassName} ${
                props.checked ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <input
            type="checkbox"
            className="sr-only"
            ref={ref}
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

Switch.displayName = "Switch";

export { switchVariants, thumbVariants };
