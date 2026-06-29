"use client";

import { Heart } from "lucide-react";

import { cardHover, imageHover } from "@/animations";
import { MotionArticle, MotionButton, MotionDiv } from "@/components/common/motion-primitives";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Image } from "@/components/ui/image";
import { Paragraph } from "@/components/ui/paragraph";
import { cn } from "@/lib/utils";

type ProductPreviewCardProps = {
  name: string;
  material: string;
  price: string;
  image: string;
  alt: string;
  className?: string;
};

function ProductPreviewCard({
  name,
  material,
  price,
  image,
  alt,
  className,
}: ProductPreviewCardProps) {
  return (
    <MotionArticle whileHover={cardHover} className={cn("group space-y-16", className)}>
      <AspectRatio ratio={4 / 5} className="bg-surface">
        <MotionDiv whileHover={imageHover} className="absolute inset-0">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        </MotionDiv>
        <MotionButton
          aria-label={`Add ${name} to wishlist`}
          className="absolute right-12 top-12 flex size-40 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 shadow-soft backdrop-blur-sm transition-opacity duration-300 focus-visible:opacity-100 group-hover:opacity-100"
          type="button"
        >
          <Heart aria-hidden="true" className="size-16" strokeWidth={1.5} />
        </MotionButton>
      </AspectRatio>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-16">
          <h3 className="font-serif text-2xl leading-tight text-foreground">{name}</h3>
          <span className="pt-4 font-sans text-sm text-foreground">{price}</span>
        </div>
        <Paragraph size="caption" tone="muted">
          {material}
        </Paragraph>
      </div>
    </MotionArticle>
  );
}

export { ProductPreviewCard };
