import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const trackVariants = cva(
  "relative inline-flex items-center rounded-full transition-all duration-200 ease-out overflow-hidden cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-7 w-11",
        md: "h-8 w-13",
        lg: "h-9 w-15",
      },
      state: {
        default: "",
        error: "",
        success: "",
      },
    },
    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);

const handleVariants = cva(
  "absolute flex items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 ease-out ring-0 z-10",
  {
    variants: {
      size: {
        sm: "h-5 w-5",
        md: "h-6 w-6",
        lg: "h-7 w-7",
      },
      state: {
        default: "",
        error: "",
        success: "",
      },
    },
    defaultVariants: {
      size: "md", 
      state: "default",
    },
  }
);

const stateLayerVariants = cva(
  "absolute inset-0 rounded-full pointer-events-none transition-opacity duration-200 ease-out",
  {
    variants: {
      state: {
        default: "bg-current",
        error: "bg-current", 
        success: "bg-current",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof trackVariants> {
  label?: string;
  helperText?: string;
  error?: boolean;
  success?: boolean;
  icon?: React.ReactNode;
  ripple?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ 
    className, 
    size = "md",
    state, 
    label, 
    helperText, 
    error, 
    success, 
    icon,
    ripple = false,
    checked,
    defaultChecked = false,
    disabled = false,
    onChange,
    onClick,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isPressed, setIsPressed] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isChecked = isControlled ? checked : internalChecked;

    const computedState = error ? "error" : success ? "success" : "default";
    
    const getTrackColors = () => {
      if (disabled) {
        return isChecked 
          ? "bg-slate-300 opacity-50" 
          : "bg-slate-200 opacity-50";
      }
      
      if (computedState === "error") {
        return isChecked 
          ? "bg-red-600" 
          : "bg-slate-300 hover:bg-slate-400";
      }
      
      if (computedState === "success") {
        return isChecked 
          ? "bg-green-600" 
          : "bg-slate-300 hover:bg-slate-400";
      }
      
      return isChecked 
        ? "bg-violet-600 hover:bg-violet-700" 
        : "bg-slate-300 hover:bg-slate-400";
    };

    const getHandleColors = () => {
      if (disabled) {
        return isChecked 
          ? "bg-slate-200 text-slate-400"
          : "bg-slate-200 text-slate-400";
      }
      
      if (computedState === "error") {
        return isChecked 
          ? "bg-white text-red-600"
          : "bg-slate-600 text-white";
      }
      
      if (computedState === "success") {
        return isChecked 
          ? "bg-white text-green-600"
          : "bg-slate-600 text-white";
      }
      
      return isChecked 
        ? "bg-white text-violet-600"
        : "bg-slate-600 text-white";
    };

    const getHandlePosition = () => {
      const positions = {
        sm: isChecked ? "translate-x-5" : "translate-x-1",
        md: isChecked ? "translate-x-6" : "translate-x-1", 
        lg: isChecked ? "translate-x-7" : "translate-x-1",
      };
      return positions[size || "md"];
    };

    const getFocusRing = () => {
      if (!isFocused) return "";
      
      if (computedState === "error") {
        return "ring-2 ring-red-500 ring-offset-2";
      }
      
      if (computedState === "success") {
        return "ring-2 ring-green-500 ring-offset-2";
      }
      
      return "ring-2 ring-violet-500 ring-offset-2";
    };

    const getStateLayerOpacity = () => {
      if (disabled) return "opacity-0";
      if (isPressed) return "opacity-12";
      if (isHovered) return "opacity-8";
      if (isFocused) return "opacity-12";
      return "opacity-0";
    };

    const handleToggle = () => {
      if (disabled) return;
      
      const newChecked = !isChecked;
      
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      
      if (onChange && inputRef.current) {
        const mockEvent = {
          target: {
            ...inputRef.current,
            checked: newChecked,
          },
          currentTarget: inputRef.current,
        } as React.ChangeEvent<HTMLInputElement>;
        
        onChange(mockEvent);
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      
      handleToggle();
      onClick?.(e as any);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;
      
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsPressed(true);
        handleToggle();
      }
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        setIsPressed(false);
      }
    };

    const trackClassName = [
      trackVariants({ size, state: computedState }),
      getTrackColors(),
      getFocusRing(),
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const handleClassName = [
      handleVariants({ size, state: computedState }),
      getHandleColors(),
      getHandlePosition(),
    ]
      .filter(Boolean)
      .join(" ");

    const stateLayerClassName = [
      stateLayerVariants({ state: computedState }),
      getStateLayerOpacity(),
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="flex items-start space-x-4">
        <div className="flex items-center justify-center min-w-12 min-h-12">
          <button
            type="button"
            role="switch"
            aria-checked={isChecked}
            aria-disabled={disabled}
            className={trackClassName}
            disabled={disabled}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
          >
            <div className={stateLayerClassName} />
            
            <span className={handleClassName}>
              {icon && (
                <span className="flex items-center justify-center text-xs">
                  {icon}
                </span>
              )}
            </span>
          </button>
          
          <input
            type="checkbox"
            className="sr-only"
            ref={(node) => {
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
              inputRef.current = node;
            }}
            checked={isChecked}
            disabled={disabled}
            onChange={() => {}}
            {...props}
          />
        </div>

        {(label || helperText) && (
          <div className="flex-1 text-sm">
            {label && (
              <label 
                className={`font-medium cursor-pointer select-none block ${
                  disabled 
                    ? "text-slate-400" 
                    : error 
                    ? "text-red-600" 
                    : success 
                    ? "text-green-600" 
                    : "text-slate-700"
                }`}
                onClick={() => !disabled && inputRef.current?.click()}
              >
                {label}
              </label>
            )}
            {helperText && (
              <p className={`mt-1 ${
                disabled 
                  ? "text-slate-400" 
                  : error 
                  ? "text-red-600" 
                  : success 
                  ? "text-green-600" 
                  : "text-slate-500"
              }`}>
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

export { trackVariants, handleVariants, stateLayerVariants };
