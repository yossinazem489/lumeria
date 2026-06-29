import NextImage, { type ImageProps as NextImageProps } from "next/image";

import { cn } from "@/lib/utils";

type ImageProps = NextImageProps;

function Image({ className, sizes = "100vw", ...props }: ImageProps) {
  return (
    <NextImage className={cn("h-auto w-full object-contain", className)} sizes={sizes} {...props} />
  );
}

export { Image };
export type { ImageProps };
