import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

const sectionSpacing = {
  sm: "py-64",
  md: "py-section",
  lg: "py-128",
} as const;

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  spacing?: keyof typeof sectionSpacing;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

function Section<T extends ElementType = "section">({
  as,
  spacing = "md",
  className,
  ...props
}: SectionProps<T>) {
  const Comp = as ?? "section";

  return <Comp className={cn(sectionSpacing[spacing], className)} {...props} />;
}

export { Section, sectionSpacing };
