import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type TextLinkProps = ComponentPropsWithoutRef<"a">;

function TextLink({ className, ...props }: TextLinkProps) {
  return (
    <a
      className={cn(
        "font-sans text-sm leading-none text-primary underline-offset-8 transition-colors duration-300 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    />
  );
}

export { TextLink };
