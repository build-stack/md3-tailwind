import * as React from "react";

type AsProp = React.ElementType;
type Props = React.HTMLAttributes<HTMLElement> & {
  size?: "large" | "medium" | "small";
  as?: AsProp;
};

const sizeMap = {
  large: "text-6xl leading-tight",
  medium: "text-5xl leading-tight", 
  small: "text-4xl leading-tight"
} as const;

export function Display({ size = "large", as: Tag = "h1", className, ...rest }: Props) {
  const Element = Tag as React.ElementType;
  return <Element className={`${sizeMap[size]} font-sans ${className ?? ""}`} {...rest} />;
}


