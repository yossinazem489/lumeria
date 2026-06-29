import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

function LoadingSkeleton({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-sm bg-surface", className)}
      {...props}
    />
  );
}

export { LoadingSkeleton };
