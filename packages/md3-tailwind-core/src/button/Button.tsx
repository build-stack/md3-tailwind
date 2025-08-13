import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
	
	" bg-[#65558f] text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-violet-600 text-primary-foreground hover:bg-violet-300/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				icon: "h-10 w-10",
			},
			size: {
				xs: "h-8 rounded-xl px-3 text-xs",
				sm: "h-9 rounded-xl px-4 text-sm",
				md: "h-10 rounded-xl px-6 text-sm",
				lg: "h-11 rounded-xl px-12 text-sm",
				xl: "h-12 rounded-xl px-16 text-sm",
				icon: "h-10 w-10 px-0",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	}
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

export function Button({
	className,
	variant,
	size,
	...props
}: ButtonProps) {
	const computedClassName = [
		buttonVariants({ variant, size }),
		className,
	]
		.filter(Boolean)
		.join(" ");

	return <button className={computedClassName} {...props} />;
}

export { buttonVariants };


