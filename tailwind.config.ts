import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./animations/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        medium: "var(--shadow-medium)",
        large: "var(--shadow-large)",
      },
      spacing: {
        4: "var(--space-4)",
        8: "var(--space-8)",
        12: "var(--space-12)",
        16: "var(--space-16)",
        24: "var(--space-24)",
        32: "var(--space-32)",
        40: "var(--space-40)",
        64: "var(--space-64)",
        96: "var(--space-96)",
        128: "var(--space-128)",
        section: "var(--spacing-section)",
        gutter: "var(--spacing-gutter)",
      },
    },
  },
};

export default config;
