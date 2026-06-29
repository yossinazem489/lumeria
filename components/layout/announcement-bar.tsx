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
    }, 6200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <MotionDiv
      aria-label="LUMERIA announcements"
      className="relative flex h-[28px] items-center justify-center border-b border-border/35 px-gutter"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <AnimatePresence mode="wait" initial={false}>
        <MotionDiv
          key={announcementMessages[activeIndex]}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: motionTransitions.standard }}
          variants={fadeIn}
          className="text-center font-sans text-[0.64rem] uppercase leading-none tracking-[0.11em] text-muted-foreground/80"
        >
          {announcementMessages[activeIndex]}
        </MotionDiv>
      </AnimatePresence>
    </MotionDiv>
  );
}

export { AnnouncementBar };
