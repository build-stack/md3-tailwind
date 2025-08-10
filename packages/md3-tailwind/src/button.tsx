import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./lib/utils"

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-[var(--md-sys-shape-corner-large)] gap-[var(--md-comp-button-icon-gap)] text-[var(--md-comp-button-label-size)] leading-[var(--md-comp-button-label-line-height)] font-[var(--md-comp-button-label-weight)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-comp-focus-ring-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-comp-focus-ring-offset)] disabled:pointer-events-none",
  {
    variants: {
      variant: {
        elevated: "bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-primary)] shadow-[var(--md-elevation-1-shadow)] hover:shadow-[var(--md-elevation-2-shadow)] active:shadow-[var(--md-elevation-1-shadow)]",
        filled: "bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)]",
        "filled-tonal": "bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]",
        outlined: "bg-transparent text-[var(--md-sys-color-primary)] border-[var(--md-comp-button-outline-width)] border-[var(--md-sys-color-outline)]",
        text: "bg-transparent text-[var(--md-sys-color-primary)]"
      },
      size: {
        default: "min-h-[48px] h-[var(--md-comp-button-container-height-md)] px-[var(--md-comp-button-padding-x-md)]",
        sm: "h-[var(--md-comp-button-container-height-sm)] px-[var(--md-comp-button-padding-x-sm)]",
        lg: "h-[var(--md-comp-button-container-height-lg)] px-[var(--md-comp-button-padding-x-lg)]",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "filled",
      size: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ripple?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ripple = false, onMouseDown, children, ...props }, ref) => {
    const containerRef = React.useRef<HTMLButtonElement | null>(null)

    const handleMouseDown: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      if (ripple && containerRef.current) {
        const button = containerRef.current
        const rect = button.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const rippleEl = document.createElement("span")
        const x = event.clientX - rect.left - size / 2
        const y = event.clientY - rect.top - size / 2

        rippleEl.className = "md3-ripple"
        rippleEl.style.width = rippleEl.style.height = `${size}px`
        rippleEl.style.left = `${x}px`
        rippleEl.style.top = `${y}px`

        button.appendChild(rippleEl)
        rippleEl.addEventListener("animationend", () => {
          rippleEl.remove()
        })
      }

      onMouseDown?.(event)
    }

    return (
      <button
        className={cn(
          "md3-interactive",
          ripple && "md3-ripple-container",
          buttonVariants({ variant, size, className }),
          // Disabled visuals per MD3
          props.disabled && "disabled:shadow-none disabled:md3-disabled-content",
          props.disabled && (variant === 'filled' || variant === 'filled-tonal') && "disabled:md3-disabled-container"
        )}
        ref={(node) => {
          if (typeof ref === "function") ref(node as HTMLButtonElement)
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node
          containerRef.current = node
        }}
        onMouseDown={handleMouseDown}
        {...props}
      >
        {/* State layer for MD3 interactions */}
        <span aria-hidden className="md3-state-layer" />
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
