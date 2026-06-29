"use client";

import type { HTMLMotionProps } from "framer-motion";

import { buttonHover } from "@/animations";
import { MotionA } from "@/components/common/motion-primitives";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MotionLinkButtonProps = HTMLMotionProps<"a"> & {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

function MotionLinkButton({
  variant = "default",
  size = "default",
  className,
  ...props
}: MotionLinkButtonProps) {
  const primaryHover = {
    ...buttonHover,
    backgroundColor: "color-mix(in srgb, var(--primary) 90%, var(--foreground))",
  };

  return (
    <MotionA
      whileHover={variant === "default" ? primaryHover : buttonHover}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { MotionLinkButton };
