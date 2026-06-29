import type { TargetAndTransition, Transition, Variants } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;
const easeInOut = [0.65, 0, 0.35, 1] as const;

export const motionDurations = {
  fast: 0.35,
  hover: 0.45,
  drawer: 0.55,
  navbar: 0.65,
  standard: 0.9,
  page: 1,
  hero: 1.35,
  ambient: 24,
} as const;

export const motionTransitions = {
  fast: {
    duration: motionDurations.fast,
    ease: easeOut,
  },
  hover: {
    duration: motionDurations.hover,
    ease: easeOut,
  },
  drawer: {
    duration: motionDurations.drawer,
    ease: easeOut,
  },
  navbar: {
    duration: motionDurations.navbar,
    ease: easeOut,
  },
  standard: {
    duration: motionDurations.standard,
    ease: easeOut,
  },
  page: {
    duration: motionDurations.page,
    ease: easeOut,
  },
  hero: {
    duration: motionDurations.hero,
    ease: easeOut,
  },
  ambient: {
    duration: motionDurations.ambient,
    ease: easeInOut,
    repeat: Infinity,
    repeatType: "mirror",
  },
} satisfies Record<string, Transition>;

export const motionConfig = {
  reducedMotion: "user",
  easeOut,
  easeInOut,
  durations: motionDurations,
  transitions: motionTransitions,
} as const;

export const viewportOnce = {
  once: true,
  amount: 0.24,
} as const;

export const scrollRevealProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: viewportOnce,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: motionTransitions.standard },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: motionTransitions.standard },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: motionTransitions.standard },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: motionTransitions.standard },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: motionTransitions.standard },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: motionTransitions.standard },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: { opacity: 1, scale: 1, transition: motionTransitions.hero },
};

export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { ...motionTransitions.hero, delay: 0.08 } },
};

export const navbarIntro: Variants = {
  hidden: { opacity: 0, y: -8, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...motionTransitions.standard, delay: 0.28, duration: 0.95 },
  },
};

export const logoReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { ...motionTransitions.standard, delay: 0.42, duration: 1.05 },
  },
};

export const heroImageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.995 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...motionTransitions.hero, delay: 1.7, duration: 1.35 },
  },
};

export const heroImageMotion = {
  initial: { scale: 1 },
  animate: { scale: 1.035 },
  transition: motionTransitions.ambient,
} as const;

export const hoverLift: TargetAndTransition = {
  y: -4,
  transition: motionTransitions.hover,
};

export const hoverScale: TargetAndTransition = {
  scale: 1.03,
  transition: motionTransitions.hover,
};

export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: motionTransitions.page },
  exit: { opacity: 0, transition: motionTransitions.fast },
};

export const modalAnimation: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: motionTransitions.drawer },
  exit: { opacity: 0, y: 12, scale: 0.985, transition: motionTransitions.fast },
};

export const drawerAnimation = {
  search: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: motionTransitions.drawer },
    exit: { opacity: 0, y: -16, transition: motionTransitions.fast },
  },
  cart: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: motionTransitions.drawer },
    exit: { opacity: 0, x: 32, transition: motionTransitions.fast },
  },
} satisfies Record<string, Variants>;

export const navbarReveal: Variants = {
  transparent: {
    backgroundColor: "rgba(248, 246, 242, 0)",
    backdropFilter: "blur(0px)",
    boxShadow: "0 0 0 rgba(74, 64, 54, 0)",
    transition: motionTransitions.navbar,
  },
  glass: {
    backgroundColor: "rgba(248, 246, 242, 0.78)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 1px 18px rgba(74, 64, 54, 0.045)",
    transition: motionTransitions.navbar,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: motionTransitions.standard },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: "0.65em" },
  visible: { opacity: 1, y: "0em", transition: motionTransitions.standard },
};

export const buttonHover: TargetAndTransition = {
  y: -2,
  boxShadow: "var(--shadow-medium)",
  transition: motionTransitions.fast,
};

export const cardHover: TargetAndTransition = {
  y: -4,
  boxShadow: "0 19px 50px rgb(74 64 54 / 0.084)",
  transition: motionTransitions.hover,
};

export const imageHover: TargetAndTransition = {
  scale: 1.03,
  transition: motionTransitions.hover,
};

export const categoryHover: TargetAndTransition = {
  y: -4,
  boxShadow: "var(--shadow-medium)",
  transition: motionTransitions.hover,
};

export const categoryImageHover: TargetAndTransition = {
  scale: 1.04,
  transition: motionTransitions.hover,
};

export const skeletonFade: Variants = {
  initial: { opacity: 0.48 },
  animate: {
    opacity: [0.48, 0.78, 0.48],
    transition: {
      duration: 1.8,
      ease: easeInOut,
      repeat: Infinity,
    },
  },
};

export const logoFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { ...motionTransitions.standard, duration: 0.9 } },
  exit: { opacity: 0, transition: motionTransitions.fast },
};

export const pageFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: motionTransitions.page },
  exit: { opacity: 0, transition: motionTransitions.fast },
};

export const progressBar = {
  style: {
    height: 1,
    backgroundColor: "#B08D57",
    transformOrigin: "0% 50%",
  },
  variants: {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: motionTransitions.standard },
  },
} as const;

export const productCardMotion = {
  whileHover: cardHover,
  imageWhileHover: imageHover,
} as const;

export const loadingMotion = {
  skeletonFade,
  logoFade,
  pageFade,
} as const;
