import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const paragraphVariants = cva("font-sans font-normal tracking-normal", {
  variants: {
    size: {
      large: "text-lg leading-[1.75]",
      body: "text-base leading-[1.7]",
      caption: "text-[0.8125rem] leading-normal tracking-[0.04em]",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "body",
    tone: "default",
  },
});

type ParagraphProps = ComponentPropsWithoutRef<"p"> & VariantProps<typeof paragraphVariants>;

function Paragraph({ className, size, tone, ...props }: ParagraphProps) {
  return <p className={cn(paragraphVariants({ size, tone, className }))} {...props} />;
}

export { Paragraph, paragraphVariants };
