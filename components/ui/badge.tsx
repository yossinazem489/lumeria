import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-12 py-4 font-sans text-[0.75rem] uppercase leading-none tracking-[0.08em]",
  {
    variants: {
      variant: {
        default: "border-border bg-surface text-foreground",
        gold: "border-primary bg-primary text-primary-foreground",
        success: "border-success bg-success text-success-foreground",
        error: "border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeProps = ComponentPropsWithoutRef<"span"> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
