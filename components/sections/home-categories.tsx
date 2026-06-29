import {
  categoryHover,
  categoryImageHover,
  fadeUp,
  scrollRevealProps,
  staggerContainer,
  staggerItem,
} from "@/animations";
import { MotionDiv, MotionSection } from "@/components/common/motion-primitives";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Container } from "@/components/ui/container";
import { Image } from "@/components/ui/image";
import { Paragraph } from "@/components/ui/paragraph";
import { signatureCollections } from "@/config/home";

function HomeCategories() {
  return (
    <MotionSection
      id="collections"
      aria-labelledby="collections-title"
      className="border-y border-border/70 bg-background py-32"
      {...scrollRevealProps}
      variants={fadeUp}
    >
      <Container size="wide" className="space-y-24">
        <div className="sr-only">
          <h2 id="collections-title">Explore LUMERIA collections</h2>
        </div>

        <MotionDiv
          variants={staggerContainer}
          className="grid gap-16 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0"
        >
          {signatureCollections.map((category) => (
            <MotionDiv
              key={category.title}
              variants={staggerItem}
              whileHover={categoryHover}
              className="group border-border/70 bg-background px-16 py-24 transition-colors duration-300 hover:border-primary/50 hover:bg-surface/45 lg:border-l lg:first:border-l-0"
            >
              <a
                href="#"
                className="block space-y-16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <AspectRatio ratio={1} className="bg-transparent">
                  <MotionDiv whileHover={categoryImageHover} className="absolute inset-0">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </MotionDiv>
                </AspectRatio>

                <div className="space-y-4 text-center">
                  <h3 className="font-serif text-2xl leading-tight text-foreground">
                    {category.title}
                  </h3>
                  <Paragraph
                    size="caption"
                    tone="muted"
                    className="transition-colors duration-300 group-hover:text-primary"
                  >
                    Explore
                  </Paragraph>
                </div>
              </a>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Container>
    </MotionSection>
  );
}

export { HomeCategories };
