import { SiteNavbar } from "@/components/layout/site-navbar";
import { HomeCategories } from "@/components/sections/home-categories";
import { HomeHero } from "@/components/sections/home-hero";

export default function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <HomeHero />
        <HomeCategories />
      </main>
    </>
  );
}
