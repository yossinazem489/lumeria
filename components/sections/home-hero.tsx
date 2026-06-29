import {
  fadeIn,
  fadeUp,
  heroImageReveal,
  heroImageMotion,
  heroReveal,
  staggerContainer,
  staggerItem,
} from "@/animations";
import { MotionDiv, MotionSection } from "@/components/common/motion-primitives";
import { MotionLinkButton } from "@/components/common/motion-link-button";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Paragraph } from "@/components/ui/paragraph";
import { brandPromises } from "@/config/home";

function HomeHero() {
  return (
    <MotionSection
      id="top"
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(112deg,var(--surface)_0%,var(--background)_42%,#fbfaf7_100%)] lg:min-h-[90vh]"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <MotionDiv
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_12%_18%,var(--primary)_0%,transparent_34%)] opacity-10"
        variants={fadeIn}
      />

      <div className="grid min-h-screen grid-rows-[auto_minmax(0,1fr)] lg:min-h-[90vh] lg:grid-cols-[40%_60%] lg:grid-rows-none">
        <div className="relative z-20 flex items-center px-gutter pb-32 pt-128 lg:min-h-[90vh] lg:pb-64 lg:pl-96 lg:pr-64 lg:pt-128">
          <MotionDiv
            className="max-w-[36rem] space-y-24 lg:space-y-40"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <MotionDiv variants={staggerItem} className="space-y-24">
              <Badge>Timeless Jewelry &middot; Designed To Last</Badge>
            </MotionDiv>

            <div className="space-y-12 lg:space-y-16">
              <MotionDiv variants={heroReveal}>
                <Heading
                  as="h1"
                  size="h1"
                  className="text-[clamp(2.625rem,11vw,5.35rem)] leading-[0.98] tracking-[-0.015em] lg:leading-[0.91]"
                >
                  Every Light,
                </Heading>
              </MotionDiv>
              <MotionDiv variants={heroReveal}>
                <Heading
                  as="p"
                  size="h1"
                  className="text-[clamp(2.625rem,11vw,5.35rem)] leading-[0.98] tracking-[-0.015em] lg:leading-[0.91]"
                >
                  Every Story.
                </Heading>
              </MotionDiv>
            </div>

            <MotionDiv variants={fadeUp}>
              <Paragraph size="large" tone="muted" className="max-w-[28rem]">
                Jewelry designed to celebrate the moments that shape your life.
              </Paragraph>
            </MotionDiv>

            <MotionDiv variants={fadeUp} className="flex flex-col gap-12 sm:flex-row">
              <MotionLinkButton href="#collections">Explore Collection</MotionLinkButton>
              <MotionLinkButton href="#story" variant="outline">
                Our Story
              </MotionLinkButton>
            </MotionDiv>

            <MotionDiv
              variants={fadeUp}
              className="grid gap-16 pt-8 sm:grid-cols-3 lg:max-w-[34rem]"
            >
              {brandPromises.slice(0, 3).map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex items-start gap-12">
                  <Icon
                    aria-hidden="true"
                    className="mt-4 size-24 text-primary"
                    strokeWidth={1.3}
                  />
                  <div className="space-y-4">
                    <p className="font-sans text-xs font-medium uppercase leading-tight tracking-[0.08em] text-foreground">
                      {title}
                    </p>
                    <p className="font-sans text-[0.75rem] leading-normal text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </MotionDiv>
          </MotionDiv>
        </div>

        <div className="relative h-[18rem] overflow-hidden px-gutter pb-32 sm:h-[24rem] lg:h-auto lg:min-h-[90vh] lg:px-0 lg:pb-0 lg:pt-128">
          <MotionDiv
            className="relative size-full lg:-mr-gutter lg:w-[calc(100%+var(--spacing-gutter))] lg:[mask-image:linear-gradient(90deg,transparent_0%,black_7%,black_100%)]"
            initial="hidden"
            animate="visible"
            variants={heroImageReveal}
          >
            <MotionDiv className="relative size-full" {...heroImageMotion}>
              <Image
                src="/images/home/hero-banner.png"
                alt="LUMERIA fine jewelry illuminated by warm natural light"
                fill
                priority
                className="object-contain object-right"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}

export { HomeHero };
