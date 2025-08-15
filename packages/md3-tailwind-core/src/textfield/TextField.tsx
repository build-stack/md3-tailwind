import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useMemo } from "react";

const textFieldVariants = cva(
  "w-full px-4 py-3 text-base leading-6 transition-all duration-200 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-transparent",
  {
    variants: {
      variant: {
        filled: "bg-slate-100 border-b-2 border-slate-300 rounded-t-md text-slate-950 hover:bg-slate-200 focus:bg-slate-50 focus:border-violet-500 focus:border-b-2",
        outlined: "bg-transparent border-0 rounded-md text-slate-950 hover:border-slate-400 focus:border-violet-500",
        standard: "bg-transparent border-b-2 border-slate-300 text-slate-950 hover:border-slate-400 focus:border-violet-500 focus:border-b-2",
      },
      density: {
        sm: "px-3 pt-5 pb-2 text-sm leading-5",
        md: "px-4 pt-5.5 pb-2 text-base leading-6",
        lg: "px-6 pt-5 pb-2 text-lg leading-7",
      },
      state: {
        default: "",
        error: "border-red-500 focus:border-red-500 focus:ring-red-500/20",
        success: "border-green-500 focus:border-green-500 focus:ring-green-500/20",
      },
    },
    defaultVariants: {
      variant: "filled",
      density: "md",
      state: "default",
    },
  }
);

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textFieldVariants> {
  label?: string;
  helperText?: string;
  error?: boolean;
  success?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ 
    className, 
    variant, 
    density, 
    state, 
    label, 
    helperText, 
    error, 
    success, 
    leftIcon, 
    rightIcon, 
    value,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const computedState = error ? "error" : success ? "success" : "default";
    const computedClassName = [
      textFieldVariants({ variant, density, state: computedState }),
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Handle input value changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    // Handle focus/blur
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    // Check initial value
    React.useEffect(() => {
      if (inputRef.current) {
        setHasValue(inputRef.current.value.length > 0);
      }
    }, []);

    // Determine label state
    const isLabelFloating = isFocused || hasValue;

    // Calculate label positioning based on variant and density
    const getLabelPosition = useMemo(() => {
      if (!isLabelFloating) {
        if (variant === 'filled') {
          return density === 'sm' ? 'translate-y-1.5' : density === 'md' ? 'translate-y-1.5' : 'translate-y-2.5';
        } else if (variant === 'outlined') {
          return density === 'sm' ? 'translate-y-1.5' : density === 'md' ? 'translate-y-2' : 'translate-y-2.5';
        } else { // standard
          return density === 'sm' ? 'translate-y-1.5' : density === 'md' ? 'translate-y-2' : 'translate-y-2.5';
        }
      } else {
        // Floating position - stay within input bounds, just above the text
        if (variant === 'filled') {
          return density === 'sm' ? '-translate-y-0.5 scale-75' : density === 'md' ? '-translate-y-1 scale-75' : '-translate-y-1.5 scale-75';
        } else if (variant === 'outlined') {
          // For outlined variant, move label up to overlap with the top border
          return density === 'sm' ? '-translate-y-4 scale-75' : density === 'md' ? '-translate-y-4 scale-75' : '-translate-y-4 scale-75';
        } else { // standard
          return density === 'sm' ? '-translate-y-0.5 scale-75' : density === 'md' ? '-translate-y-1 scale-75' : '-translate-y-1.5 scale-75';
        }
      }
    }, [variant, density, isLabelFloating]);

    // Calculate left positioning for label based on variant and icon
    const getLabelLeftPosition = () => {
      if (variant === 'filled') {
        return leftIcon ? 'left-10' : 'left-4';
      } else if (variant === 'outlined') {
        return leftIcon ? 'left-10' : 'left-4';
      } else { // standard
        return leftIcon ? 'left-10' : 'left-0';
      }
    };

    // Calculate input padding based on variant and icons
    const getInputPadding = () => {
      const basePadding = variant === 'standard' ? 0 : undefined;
      return {
        paddingLeft: leftIcon ? (variant === 'standard' ? '2.5rem' : '2.5rem') : basePadding,
        paddingRight: rightIcon ? (variant === 'standard' ? '2.5rem' : '2.5rem') : basePadding,
      };
    };

    return (
      <div className="w-full">
        <div className="relative">
          {leftIcon && (
            <div className={`absolute z-10 flex items-center ${
              variant === 'filled' ? 'left-3 top-1/2 transform -translate-y-1/2' :
              variant === 'outlined' ? 'left-3 top-1/2 transform -translate-y-1/2' :
              'left-0 top-1/2 transform -translate-y-1/2'
            }`}>
              {leftIcon}
            </div>
          )}
          <input
            className={computedClassName}
            ref={(node) => {
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
              inputRef.current = node;
            }}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
            style={getInputPadding()}
          />
          {/* Outlined variant border gap using fieldset/legend */}
          {variant === 'outlined' && (
            <fieldset 
              aria-hidden="true" 
              className={`absolute -top-1.5 left-0 right-0 bottom-0 m-0 px-2 pointer-events-none border-2 rounded-md border-solid overflow-hidden min-w-0 transition-colors duration-200 ${
                isFocused ? 'border-violet-500' : 
                error ? 'border-red-500' : 
                success ? 'border-green-500' : 
                'border-slate-300 hover:border-slate-400'
              }`}
            >
              <legend 
                className={`text-xs text-transparent float-none w-auto overflow-hidden p-0 leading-[11px] h-[11px] text-[0.75em] whitespace-nowrap transition-all duration-100 ease-out ${
                  isLabelFloating ? 'max-w-full delay-50' : 'max-w-[0.01px]'
                }`}
              >
                <span className="px-1.5 inline-block opacity-0 visible">
                  {label}
                </span>
              </legend>
            </fieldset>
          )}
          {label && (
            <label 
              className={`
                absolute pointer-events-none transition-all duration-200 ease-out origin-left
                ${getLabelLeftPosition()}
                ${getLabelPosition}
                ${isLabelFloating 
                  ? 'text-sm text-violet-600' 
                  : 'text-base text-slate-500'
                }
                ${variant === 'filled' ? 'top-2' : variant === 'outlined' ? 'top-2' : 'top-2'}
                ${variant === 'standard' ? 'px-0' : ''}
              `}
            >
              {label}
            </label>
          )}
          {rightIcon && (
            <div className={`absolute z-10 flex items-center ${
              variant === 'filled' ? 'right-3 top-1/2 transform -translate-y-1/2' :
              variant === 'outlined' ? 'right-3 top-1/2 transform -translate-y-1/2' :
              'right-0 top-1/2 transform -translate-y-1/2'
            }`}>
              {rightIcon}
            </div>
          )}
        </div>
        {helperText && (
          <p className={`mt-2 text-sm ${error ? "text-red-600" : success ? "text-green-600" : "text-slate-500"}`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export { textFieldVariants };
