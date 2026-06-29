import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-sans text-[0.8125rem] font-medium uppercase leading-none tracking-[0.08em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary",
        secondary: "bg-surface text-foreground hover:bg-border",
        outline:
          "border border-border bg-background/40 text-foreground hover:border-primary hover:bg-background/70 hover:text-primary",
        ghost: "text-foreground hover:bg-surface",
        link: "h-auto rounded-none px-0 text-primary underline-offset-8 hover:underline",
      },
      size: {
        default: "px-32 py-[calc(var(--space-16)+var(--space-4))]",
        sm: "px-24 py-16",
        lg: "px-40 py-[calc(var(--space-16)+var(--space-4))]",
        icon: "size-40 px-0 py-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
