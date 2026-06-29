import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales } from "@/constants/locales";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
