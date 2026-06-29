import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

const containerMaxWidths = {
  mobile: "max-w-[var(--container-mobile)]",
  tablet: "max-w-[var(--container-tablet)]",
  desktop: "max-w-[var(--container-desktop)]",
  wide: "max-w-[var(--container-wide)]",
} as const;

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  size?: keyof typeof containerMaxWidths;
  bleed?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

function Container<T extends ElementType = "div">({
  as,
  size = "desktop",
  bleed = false,
  className,
  ...props
}: ContainerProps<T>) {
  const Comp = as ?? "div";

  return (
    <Comp
      className={cn("mx-auto w-full", !bleed && "px-gutter", containerMaxWidths[size], className)}
      {...props}
    />
  );
}

export { Container, containerMaxWidths };
