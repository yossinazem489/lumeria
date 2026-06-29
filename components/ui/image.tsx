import NextImage, { type ImageProps as NextImageProps } from "next/image";

import { cn } from "@/lib/utils";

type ImageProps = NextImageProps;

function Image({ className, sizes = "100vw", ...props }: ImageProps) {
  const src =
    process.env.GITHUB_PAGES === "true" &&
    typeof props.src === "string" &&
    props.src.startsWith("/") &&
    !props.src.startsWith("/lumeria/")
      ? `/lumeria${props.src}`
      : props.src;

  return (
    <NextImage
      className={cn("h-auto w-full object-contain", className)}
      sizes={sizes}
      {...props}
      src={src}
    />
  );
}

export { Image };
export type { ImageProps };
