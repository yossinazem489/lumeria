import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("rounded-md border border-border bg-background shadow-soft", className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("space-y-12 p-24", className)} {...props} />;
}

function CardContent({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("p-24 pt-0", className)} {...props} />;
}

function CardFooter({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex items-center gap-12 p-24 pt-0", className)} {...props} />;
}

export { Card, CardContent, CardFooter, CardHeader };
