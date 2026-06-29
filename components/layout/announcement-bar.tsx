"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { fadeIn, motionTransitions } from "@/animations";
import { MotionDiv } from "@/components/common/motion-primitives";
import { announcementMessages } from "@/config/home";

function AnnouncementBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % announcementMessages.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <MotionDiv
      aria-label="LUMERIA announcements"
      className="relative flex min-h-32 items-center justify-center border-b border-border/60 px-gutter py-4"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <AnimatePresence mode="wait" initial={false}>
        <MotionDiv
          key={announcementMessages[activeIndex]}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: motionTransitions.fast }}
          variants={fadeIn}
          className="text-center font-sans text-[0.6875rem] uppercase leading-none tracking-[0.08em] text-muted-foreground"
        >
          {announcementMessages[activeIndex]}
        </MotionDiv>
      </AnimatePresence>
    </MotionDiv>
  );
}

export { AnnouncementBar };
