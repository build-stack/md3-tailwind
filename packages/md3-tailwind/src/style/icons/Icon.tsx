import * as React from "react";

export type IconProps = {
  name: string;
  family?: "rounded" | "outlined" | "sharp";
  size?: 20 | 24 | 40 | 48 | 64;
  fill?: 0 | 1;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  grade?: -50 | 0 | 200;
  className?: string;
  title?: string;
  decorative?: boolean;
} & Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;

const familyClassMap = {
  rounded: "material-symbols-rounded",
  outlined: "material-symbols-outlined",
  sharp: "material-symbols-sharp",
} as const;

export function Icon({
  name,
  family = "rounded",
  size = 24,
  fill = 0,
  weight = 400,
  grade = 0,
  className,
  title,
  decorative = true,
  style,
  ...rest
}: IconProps) {
  const cls = familyClassMap[family];
  const combinedStyle = {
    fontVariationSettings: `"FILL" ${fill}, "wght" ${weight}, "GRAD" ${grade}, "opsz" ${size}`,
    fontSize: size,
    ...(style ?? {}),
  } as React.CSSProperties;

  return (
    <span
      className={`${cls} ${className ?? ""}`}
      style={combinedStyle}
      aria-hidden={decorative || !title}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : title}
      title={title}
      {...rest}
    >
      {name}
    </span>
  );
}


