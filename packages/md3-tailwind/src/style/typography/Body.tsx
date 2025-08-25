import * as React from "react";

type AsProp = React.ElementType;
type Props = React.HTMLAttributes<HTMLElement> & {
  size?: "large" | "medium" | "small";
  as?: AsProp;
};

const sizeMap = {
  large: "text-lg leading-relaxed",
  medium: "text-base leading-relaxed",
  small: "text-sm leading-relaxed"
} as const;

export function Body({ size = "medium", as: Tag = "p", className, ...rest }: Props) {
  const Element = Tag as React.ElementType;
  return <Element className={`${sizeMap[size]} font-sans ${className ?? ""}`} {...rest} />;
}


