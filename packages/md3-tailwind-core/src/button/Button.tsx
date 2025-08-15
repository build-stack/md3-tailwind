import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-slate-900/10 disabled:text-slate-900/38 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
			  elevated: "bg-violet-700 text-white shadow-md hover:bg-violet-800 active:bg-violet-900 focus-visible:ring-violet-700",
			  filled:   "bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800 focus-visible:ring-violet-700",
			  tonal:    "bg-violet-100 text-violet-900 hover:bg-violet-200 active:bg-violet-300 focus-visible:ring-violet-300",
			  outline:  "border border-neutral-600 text-neutral-700 hover:bg-violet-50 active:bg-violet-100 focus-visible:ring-neutral-600 hover:text-neutral-800",
			  text:     "text-violet-700 hover:bg-violet-50 active:bg-violet-100 focus-visible:ring-violet-600",
			},
			shape: { 
				square: "rounded-xl", 
				rounded: "rounded-full",
			},
			size: {
				xs: "px-3 py-1.5 text-xs leading-5",
				sm: "px-4 py-2.5 text-xs leading-5", 
				md: "px-6 py-4 text-md leading-6",
				lg: "px-12 py-8 text-2xl leading-8",
				xl: "px-16 py-12 text-3xl leading-10",
			},
			buttonType: { // TODO: add toggle button type
				default: "",
				toggle: "",
			}
		  },
		defaultVariants: {
			variant: "filled",
			size: "sm",
			shape: "rounded",
			buttonType: "default"
		}
	}
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, shape, buttonType, asChild = false, icon, children, ...props }, ref) => {
        const computedClassName = [
            buttonVariants({ variant, size, shape, buttonType }),
            className,
        ]
            .filter(Boolean)
            .join(" ");

        const Comp = asChild ? Slot : "button";

        if (asChild) {
            return (
                <Comp className={computedClassName} ref={ref} {...props}>
                    <span className="inline-flex items-center gap-2">
                        {icon && icon}
                        {children}
                    </span>
                </Comp>
            );
        }

        return (
            <Comp className={computedClassName} ref={ref} {...props}>
                {icon && icon}
                {children}
            </Comp>
        );
    }
);

Button.displayName = "Button";

export { buttonVariants };


