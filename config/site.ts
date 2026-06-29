export const siteConfig = {
  name: "LUMERIA",
  description: "A premium international jewelry house shaped by restraint, light, and permanence.",
  url: "https://lumeria.example.com",
  defaultLocale: "en",
  locales: ["en", "zh"] as const,
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];
