import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-serif font-normal tracking-normal text-foreground", {
  variants: {
    size: {
      display: "text-[clamp(4rem,10vw,8rem)] leading-[0.92]",
      h1: "text-[clamp(3rem,7vw,6rem)] leading-[0.98]",
      h2: "text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]",
      h3: "text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.08]",
    },
  },
  defaultVariants: {
    size: "h2",
  },
});

type HeadingProps<T extends ElementType = "h2"> = {
  as?: T;
} & VariantProps<typeof headingVariants> &
  Omit<ComponentPropsWithoutRef<T>, "as">;

function Heading<T extends ElementType = "h2">({
  as,
  size = "h2",
  className,
  ...props
}: HeadingProps<T>) {
  const Comp = as ?? "h2";

  return <Comp className={cn(headingVariants({ size, className }))} {...props} />;
}

export { Heading, headingVariants };
