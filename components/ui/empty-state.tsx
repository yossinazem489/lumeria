import type { ReactNode } from "react";

import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
};

function EmptyState({ title, description, icon, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-64 flex-col items-center justify-center gap-16 rounded-md border border-border bg-surface px-24 py-40 text-center",
        className,
      )}
    >
      {icon ? <div className="text-primary">{icon}</div> : null}
      <div className="space-y-8">
        <Heading as="h3" size="h3">
          {title}
        </Heading>
        {description ? (
          <Paragraph tone="muted" className="mx-auto max-w-[36rem]">
            {description}
          </Paragraph>
        ) : null}
      </div>
      {action ? <div className="pt-8">{action}</div> : null}
    </div>
  );
}

export { EmptyState };
