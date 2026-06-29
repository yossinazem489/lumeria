import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type AspectRatioProps = ComponentPropsWithoutRef<"div"> & {
  ratio?: number;
};

function AspectRatio({ ratio = 16 / 9, className, style, ...props }: AspectRatioProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: ratio, ...style }}
      {...props}
    />
  );
}

export { AspectRatio };
