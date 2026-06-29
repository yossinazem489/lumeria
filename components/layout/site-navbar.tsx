"use client";

import { AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import {
  drawerAnimation,
  logoReveal,
  modalAnimation,
  navbarIntro,
  navbarReveal,
  staggerContainer,
  staggerItem,
} from "@/animations";
import {
  MotionA,
  MotionDiv,
  MotionLi,
  MotionNav,
  MotionUl,
} from "@/components/common/motion-primitives";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { IconButton } from "@/components/ui/icon-button";
import { Image } from "@/components/ui/image";
import { journalArticles, mainNavigation, signatureCollections } from "@/config/home";

const megaMenus = {
  Shop: {
    eyebrow: "Fine jewelry",
    title: "Objects made to hold light.",
    image: "/images/home/category-ring.png",
    alt: "Gold ring styled in warm morning light",
    links: signatureCollections.slice(0, 4).map((item) => item.title),
  },
  Collections: {
    eyebrow: "Signature edit",
    title: "A quiet language of gold, stone, and memory.",
    image: "/images/home/category-collections.png",
    alt: "LUMERIA editorial collection in warm natural light",
    links: signatureCollections.map((item) => item.title),
  },
  Journal: {
    eyebrow: "Light notes",
    title: "Stories on craft, care, and meaningful moments.",
    image: "/images/home/journal-care.png",
    alt: "Editorial jewelry care moment in soft window light",
    links: journalArticles.map((item) => item.title),
  },
} as const;

type PrimaryNavLabel = keyof typeof megaMenus;

function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<PrimaryNavLabel | null>(null);

  const hasOverlay = isMenuOpen || isSearchOpen;

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(
        window.scrollY >
          Number.parseInt(
            getComputedStyle(document.documentElement).getPropertyValue("--space-16"),
            10,
          ),
      );
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    document.body.style.overflow = hasOverlay ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [hasOverlay]);

  return (
    <>
      <MotionDiv
        className="fixed inset-x-0 top-0 z-50"
        initial="transparent"
        animate={isScrolled || hasOverlay ? "glass" : "transparent"}
        variants={navbarReveal}
      >
        <AnnouncementBar />
        <MotionNav
          aria-label="Main navigation"
          initial="hidden"
          animate="visible"
          variants={navbarIntro}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <Container
            size="wide"
            className="grid min-h-[5rem] grid-cols-[1fr_auto] items-center gap-24 py-0 lg:min-h-[5.5rem] lg:grid-cols-[auto_1fr_auto]"
          >
            <MotionA
              href="#top"
              aria-label="LUMERIA homepage"
              variants={logoReveal}
              className="font-serif text-[2.55rem] leading-none tracking-[0.06em] text-foreground transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:text-[2.95rem]"
            >
              LUMERIA
            </MotionA>

            <ul className="ml-96 hidden items-center justify-start gap-48 lg:flex">
              {mainNavigation.map((item) => {
                const label = item.label as PrimaryNavLabel;
                const isActive = activeMegaMenu === label;

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      aria-haspopup="true"
                      aria-expanded={isActive}
                      className="group relative inline-flex h-[88px] items-center gap-6 font-sans text-sm font-medium leading-none text-foreground/78 transition-colors duration-[250ms] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      onClick={(event) => {
                        event.preventDefault();
                        setActiveMegaMenu((current) => (current === label ? null : label));
                      }}
                      onMouseEnter={() => setActiveMegaMenu(label)}
                      onPointerEnter={() => setActiveMegaMenu(label)}
                      onFocus={() => setActiveMegaMenu(label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className="size-12 translate-y-px opacity-0 transition-opacity duration-[250ms] group-hover:opacity-70"
                        strokeWidth={1.4}
                      />
                      <span className="absolute bottom-[26px] left-1/2 h-px w-full origin-center -translate-x-1/2 scale-x-0 bg-primary transition-transform duration-[250ms] group-hover:scale-x-100" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="hidden items-center justify-end gap-32 lg:flex">
              <NavTextButton onClick={() => setIsSearchOpen(true)}>Search</NavTextButton>
              <NavTextLink href="#account">Account</NavTextLink>
              <NavTextLink href="#bag">Bag</NavTextLink>
            </div>

            <IconButton
              label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="justify-self-end rounded-sm text-foreground hover:text-primary lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X aria-hidden="true" className="size-24" strokeWidth={1.4} />
              ) : (
                <Menu aria-hidden="true" className="size-24" strokeWidth={1.4} />
              )}
            </IconButton>
          </Container>

          <AnimatePresence>
            {activeMegaMenu ? (
              <MegaMenu
                key={activeMegaMenu}
                label={activeMegaMenu}
                onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              />
            ) : null}
          </AnimatePresence>
        </MotionNav>
      </MotionDiv>

      <AnimatePresence>
        {isSearchOpen ? <SearchOverlay onClose={() => setIsSearchOpen(false)} /> : null}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen ? (
          <MobileDrawer
            onClose={() => setIsMenuOpen(false)}
            onSearch={() => {
              setIsMenuOpen(false);
              setIsSearchOpen(true);
            }}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

function NavTextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group relative font-sans text-sm font-medium leading-none text-foreground/76 transition-colors duration-[250ms] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {children}
      <span className="absolute -bottom-10 left-1/2 h-px w-full origin-center -translate-x-1/2 scale-x-0 bg-primary transition-transform duration-[250ms] group-hover:scale-x-100" />
    </a>
  );
}

function NavTextButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="group relative font-sans text-sm font-medium leading-none text-foreground/76 transition-colors duration-[250ms] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onClick={onClick}
    >
      {children}
      <span className="absolute -bottom-10 left-1/2 h-px w-full origin-center -translate-x-1/2 scale-x-0 bg-primary transition-transform duration-[250ms] group-hover:scale-x-100" />
    </button>
  );
}

function MegaMenu({
  label,
  onMouseEnter,
  onMouseLeave,
}: {
  label: PrimaryNavLabel;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const menu = megaMenus[label];

  return (
    <MotionDiv
      className="hidden border-y border-border/70 bg-background/96 shadow-soft backdrop-blur-[12px] lg:block"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalAnimation}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Container size="wide" className="grid grid-cols-[1fr_24rem] gap-96 py-40">
        <div className="grid grid-cols-[16rem_1fr] gap-64">
          <div className="space-y-16">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-primary">
              {menu.eyebrow}
            </p>
            <p className="max-w-[15rem] font-serif text-3xl leading-tight text-foreground">
              {menu.title}
            </p>
          </div>

          <MotionUl
            className="grid grid-cols-2 gap-x-64 gap-y-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {menu.links.map((link) => (
              <MotionLi key={link} variants={staggerItem}>
                <a
                  href={label === "Journal" ? "#journal" : "#collections"}
                  className="group inline-flex items-center font-sans text-sm font-medium text-foreground/78 transition-colors duration-[250ms] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span>{link}</span>
                  <span className="ml-16 h-px w-32 origin-left scale-x-0 bg-primary transition-transform duration-[250ms] group-hover:scale-x-100" />
                </a>
              </MotionLi>
            ))}
          </MotionUl>
        </div>

        <div className="relative min-h-[13rem] overflow-hidden">
          <Image src={menu.image} alt={menu.alt} fill className="object-cover" sizes="24rem" />
        </div>
      </Container>
    </MotionDiv>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  return (
    <MotionDiv
      className="fixed inset-0 z-[60] bg-background/92 backdrop-blur-[12px]"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={drawerAnimation.search}
      role="dialog"
      aria-modal="true"
      aria-label="Search LUMERIA"
    >
      <Container size="wide" className="flex min-h-screen flex-col py-32">
        <div className="flex items-center justify-between">
          <p className="font-serif text-[2.55rem] leading-none tracking-[0.06em] text-foreground">
            LUMERIA
          </p>
          <IconButton label="Close search" onClick={onClose}>
            <X aria-hidden="true" className="size-24" strokeWidth={1.4} />
          </IconButton>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <form
            role="search"
            className="w-full max-w-[48rem] space-y-24"
            onSubmit={(event) => event.preventDefault()}
          >
            <label
              htmlFor="site-search"
              className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-primary"
            >
              Search
            </label>
            <div className="flex items-center gap-16 border-b border-border pb-16">
              <Search aria-hidden="true" className="size-22 text-primary" strokeWidth={1.4} />
              <input
                id="site-search"
                type="search"
                autoFocus
                placeholder="Rings, necklaces, care..."
                className="w-full bg-transparent font-serif text-4xl leading-tight text-foreground placeholder:text-muted-foreground/58 focus:outline-none md:text-6xl"
              />
            </div>
          </form>
        </div>
      </Container>
    </MotionDiv>
  );
}

function MobileDrawer({
  onClose,
  onSearch,
}: {
  onClose: () => void;
  onSearch: () => void;
}) {
  return (
    <MotionDiv
      className="fixed inset-0 z-40 bg-background/96 pt-112 backdrop-blur-[12px] lg:hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={drawerAnimation.cart}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <Container size="wide" className="flex h-full flex-col">
        <MotionUl
          className="flex flex-1 flex-col items-center justify-center gap-24"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {mainNavigation.map((item) => (
            <MotionLi key={item.label} variants={staggerItem}>
              <a
                href={item.href}
                className="font-serif text-5xl leading-tight text-foreground transition-colors duration-[250ms] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={onClose}
              >
                {item.label}
              </a>
            </MotionLi>
          ))}
        </MotionUl>

        <Divider />

        <div className="grid grid-cols-3 gap-8 py-24">
          <button
            type="button"
            className="font-sans text-sm font-medium text-foreground/78 transition-colors duration-[250ms] hover:text-primary"
            onClick={onSearch}
          >
            Search
          </button>
          <a
            href="#account"
            className="text-center font-sans text-sm font-medium text-foreground/78 transition-colors duration-[250ms] hover:text-primary"
            onClick={onClose}
          >
            Account
          </a>
          <a
            href="#bag"
            className="text-right font-sans text-sm font-medium text-foreground/78 transition-colors duration-[250ms] hover:text-primary"
            onClick={onClose}
          >
            Bag
          </a>
        </div>
      </Container>
    </MotionDiv>
  );
}

export { SiteNavbar };
