import * as React from "react";

type AsProp = React.ElementType;
type Props = React.HTMLAttributes<HTMLElement> & {
  size?: "large" | "medium" | "small";
  as?: AsProp;
};

const sizeMap = {
  large: "text-display-lg",
  medium: "text-[45px] leading-[52px]",
  small: "text-[36px] leading-[44px]"
} as const;

export function Display({ size = "large", as: Tag = "h1", className, ...rest }: Props) {
  const Element = Tag as React.ElementType;
  return <Element className={`${sizeMap[size]} font-sans ${className ?? ""}`} {...rest} />;
}


