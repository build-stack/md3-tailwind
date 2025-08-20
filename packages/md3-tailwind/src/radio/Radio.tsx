import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// Utility function for combining class names
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Radio container (outer circle) - Material 3 anatomy
const radioContainerVariants = cva(
  // Base: 20x20dp container with 2dp border, positioned in 48x48dp touch target
  "relative w-5 h-5 border-2 border-purple-900/70 rounded-full transition-all duration-150 ease-out focus:outline-none",
  {
    variants: {
      state: {
        default: "",
        error: "",
      },
      checked: {
        true: "",
        false: "",
      },
      disabled: {
        true: "cursor-not-allowed !border-slate-400 opacity-60",
        false: "cursor-pointer ",
      },
    },
    compoundVariants: [
      // Default unselected
      {
        checked: false,
        disabled: false,
        state: "default",
        className: "bg-transparent",
      },
      // Default selected
      {
        checked: true,
        disabled: false,
        state: "default",
        className: "",
      },
      // Error unselected
      {
        checked: false,
        disabled: false,
        state: "error",
        className: "bg-transparent",
      },
      // Error selected
      {
        checked: true,
        disabled: false,
        state: "error",
        className: "bg-red-500",
      },
      // Disabled unselected
      {
        checked: false,
        disabled: true,
        className: "bg-transparent",
      },
      // Disabled selected
      {
        checked: true,
        disabled: true,
        className: "bg-slate-400",
      },
    ],
    defaultVariants: {
      state: "default",
      checked: false,
      disabled: false,
    },
  }
);

// Selection dot (inner circle) - appears when selected
const radioSelectionVariants = cva(
  // 8x8dp dot centered in container (smaller for better proportions)
  "absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ease-out",
  {
    variants: {
      checked: {
        true: "scale-100 opacity-100",
        false: "scale-0 opacity-0",
      },
      disabled: {
        true: "bg-purple-900/70 opacity-60",
        false: "bg-purple-900/70",
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
    },
  }
);

// State layer for hover/focus/pressed interactions
const radioStateLayerVariants = cva(
  // 40x40dp state layer centered on radio (fits within 48x48dp touch target)
  "absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ease-out pointer-events-none",
  {
    variants: {
      interaction: {
        none: "opacity-0",
        hover: "opacity-10", // 8% opacity approximated to 10%
        focus: "opacity-0", // Focus shows ring instead
        pressed: "opacity-20", // 12% opacity approximated to 20%
      },
      checked: {
        true: "bg-purple-900/70",
        false: "bg-slate-500",
      },
    },
    defaultVariants: {
      interaction: "none",
      checked: false,
    },
  }
);

// Focus ring for focus state
const radioFocusRingVariants = cva(
  // Focus ring around the radio button
  "absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-3 transition-all duration-150 ease-out pointer-events-none",
  {
    variants: {
      visible: {
        true: "opacity-100",
        false: "opacity-0",
      },
      checked: {
        true: "border-purple-900/10",
        false: "border-slate-300",
      },
    },
    defaultVariants: {
      visible: false,
      checked: false,
    },
  }
);



export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Text label for the radio button */
  label?: string;
  /** Supporting text shown below the label */
  helperText?: string;
  /** Error state - shows error styling and message */
  error?: boolean;
  /** Error message to display when error is true */
  errorText?: string;
  /** Additional CSS classes for the container */
  containerClassName?: string;
  /** Additional CSS classes for the label */
  labelClassName?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ 
    className, 
    label, 
    helperText, 
    error = false,
    errorText,
    containerClassName,
    labelClassName,
    disabled = false,
    checked = false,
    id,
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const [isPressed, setIsPressed] = React.useState(false);
    
    const radioId = id || `radio-${React.useId()}`;
    const helperTextId = helperText || errorText ? `${radioId}-helper` : undefined;
    
    const state = error ? "error" : "default";
    
    // Determine current interaction state for state layer
    const interactionState = disabled 
      ? "none" 
      : isPressed 
      ? "pressed" 
      : isHovered 
      ? "hover" 
      : "none";

    const handleMouseEnter = () => !disabled && setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setIsPressed(false);
    };
    const handleMouseDown = () => !disabled && setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleFocus = () => !disabled && setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
      <div className={cn("flex items-center gap-3", containerClassName)}>
        {/* 48x48dp touch target area */}
        <div className="flex items-center justify-center w-10 h-10 relative">
          {/* Native input positioned and sized to cover the touch target */}
          <input
            type="radio"
            id={radioId}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed z-10"
            ref={ref}
            disabled={disabled}
            checked={checked}
            aria-describedby={helperTextId}
            aria-invalid={error}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            {...props}
          />
          
          {/* State layer - hover/pressed feedback */}
          <div 
            className={radioStateLayerVariants({ 
              interaction: interactionState, 
              checked 
            })}
          />
          
          {/* Focus ring - shown only when focused */}
          <div 
            className={radioFocusRingVariants({ 
              visible: isFocused && !disabled, 
              checked 
            })}
          />
          
          {/* Radio container (outer circle) */}
          <div className={radioContainerVariants({ 
            state, 
            checked, 
            disabled,
            className
          })}>
            {/* Selection dot (inner circle) */}
            <div className={radioSelectionVariants({ 
              checked, 
              disabled 
            })} />
          </div>
        </div>
        
        {/* Label and helper text */}
        {(label || helperText || errorText) && (
          <div className="flex-1 min-w-0">
            {label && (
              <label 
                htmlFor={radioId}
                className={cn(
                  "block text-sm font-medium cursor-pointer select-none",
                  disabled 
                    ? "text-slate-400" 
                    : "text-slate-700",
                  labelClassName
                )}
              >
                {label}
              </label>
            )}
            {(helperText || errorText) && (
              <p 
                id={helperTextId}
                className={cn(
                  "mt-1 text-xs",
                  error 
                    ? "text-red-600" 
                    : disabled 
                    ? "text-slate-400" 
                    : "text-slate-500"
                )}
              >
                {error && errorText ? errorText : helperText}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio";

// Export variants for external use if needed
export { 
  radioContainerVariants, 
  radioSelectionVariants, 
  radioStateLayerVariants,
  radioFocusRingVariants
};
