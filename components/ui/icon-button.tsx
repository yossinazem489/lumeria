import type { ComponentPropsWithoutRef } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type IconButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  label: string;
};

function IconButton({ label, className, children, ...props }: IconButtonProps) {
  return (
    <Button
      aria-label={label}
      title={label}
      size="icon"
      variant="ghost"
      className={cn("shrink-0", className)}
      {...props}
    >
      {children}
    </Button>
  );
}

export { IconButton };
