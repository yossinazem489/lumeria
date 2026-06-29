import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type DividerProps = ComponentPropsWithoutRef<"hr"> & {
  orientation?: "horizontal" | "vertical";
};

function Divider({ orientation = "horizontal", className, ...props }: DividerProps) {
  return (
    <hr
      aria-orientation={orientation}
      className={cn(
        "border-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full min-h-24 w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Divider };
