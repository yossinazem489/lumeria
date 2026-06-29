import type { ImageProps } from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

type EditorialImageProps = ImageProps & {
  ratio?: number;
  frameClassName?: string;
};

function EditorialImage({
  ratio = 4 / 5,
  className,
  frameClassName,
  priority,
  alt,
  ...props
}: EditorialImageProps) {
  return (
    <AspectRatio ratio={ratio} className={cn("bg-surface", frameClassName)}>
      <Image
        alt={alt}
        className={cn("absolute inset-0 size-full object-contain", className)}
        priority={priority}
        {...props}
      />
    </AspectRatio>
  );
}

export { EditorialImage };
