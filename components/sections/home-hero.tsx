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

function HomeHero() {
  return (
    <MotionSection
      id="top"
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(112deg,var(--surface)_0%,var(--background)_46%,#fbfaf7_100%)] lg:min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <MotionDiv
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_12%_18%,var(--primary)_0%,transparent_34%)] opacity-10"
        variants={fadeIn}
      />

      <div className="grid min-h-screen grid-rows-[auto_minmax(0,1fr)] lg:min-h-screen lg:grid-cols-[39%_61%] lg:grid-rows-none">
        <div className="relative z-20 flex items-center px-gutter pb-24 pt-128 lg:min-h-screen lg:pb-80 lg:pl-128 lg:pr-40 lg:pt-128">
          <MotionDiv
            className="max-w-[34rem] space-y-24 lg:space-y-32"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <MotionDiv variants={staggerItem} className="space-y-24">
              <Badge>Timeless Jewelry &middot; Designed To Last</Badge>
            </MotionDiv>

            <div className="space-y-8 lg:space-y-12">
              <MotionDiv variants={heroReveal}>
                <Heading
                  as="h1"
                  size="h1"
                  className="text-[clamp(2.625rem,10vw,5rem)] leading-[0.98] tracking-[-0.015em] lg:leading-[0.92]"
                >
                  Every Light,
                </Heading>
              </MotionDiv>
              <MotionDiv variants={heroReveal}>
                <Heading
                  as="p"
                  size="h1"
                  className="text-[clamp(2.625rem,10vw,5rem)] leading-[0.98] tracking-[-0.015em] lg:leading-[0.92]"
                >
                  Every Story.
                </Heading>
              </MotionDiv>
            </div>

            <MotionDiv variants={fadeUp}>
              <Paragraph size="large" tone="muted" className="max-w-[24rem]">
                Jewelry designed to celebrate the moments that shape your life.
              </Paragraph>
            </MotionDiv>

            <MotionDiv variants={fadeUp} className="flex">
              <MotionLinkButton href="#collections">Explore Collection</MotionLinkButton>
            </MotionDiv>
          </MotionDiv>
        </div>

        <div className="relative h-[20rem] overflow-hidden px-gutter pb-40 sm:h-[28rem] lg:h-auto lg:min-h-screen lg:px-0 lg:pb-0 lg:pt-96">
          <MotionDiv
            className="relative size-full lg:-mr-96 lg:w-[calc(100%+var(--space-96))] lg:[mask-image:linear-gradient(90deg,transparent_0%,black_5%,black_100%)]"
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
