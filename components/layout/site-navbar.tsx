"use client";

import { AnimatePresence } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import {
  drawerAnimation,
  logoReveal,
  navbarIntro,
  navbarReveal,
  staggerContainer,
  staggerItem,
} from "@/animations";
import { MotionA, MotionDiv, MotionLi, MotionNav, MotionUl } from "@/components/common/motion-primitives";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { IconButton } from "@/components/ui/icon-button";
import { mainNavigation } from "@/config/home";

function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
        >
          <Container
            size="wide"
            className="grid min-h-[5rem] grid-cols-[1fr_auto] items-center gap-24 py-0 lg:min-h-[5.5rem] lg:grid-cols-[auto_1fr_auto]"
          >
            <MotionA
              href="#top"
              aria-label="LUMERIA homepage"
              variants={logoReveal}
              className="font-serif text-[2.5rem] leading-none tracking-[0.08em] text-foreground/82 transition-colors duration-500 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:text-[3rem]"
            >
              LUMERIA
            </MotionA>

            <ul className="hidden items-center justify-center gap-64 lg:flex">
              {mainNavigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group relative inline-flex h-[88px] items-center font-sans text-sm font-medium leading-none text-foreground/58 transition-colors duration-500 hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span>{item.label}</span>
                    <span className="absolute bottom-[28px] left-1/2 h-px w-full origin-center -translate-x-1/2 scale-x-0 bg-primary/80 transition-transform duration-500 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center justify-end gap-40 lg:flex">
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
      className="group relative font-sans text-sm font-medium leading-none text-foreground/56 transition-colors duration-500 hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {children}
      <span className="absolute -bottom-10 left-1/2 h-px w-full origin-center -translate-x-1/2 scale-x-0 bg-primary/80 transition-transform duration-500 group-hover:scale-x-100" />
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
      className="group relative font-sans text-sm font-medium leading-none text-foreground/56 transition-colors duration-500 hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onClick={onClick}
    >
      {children}
      <span className="absolute -bottom-10 left-1/2 h-px w-full origin-center -translate-x-1/2 scale-x-0 bg-primary/80 transition-transform duration-500 group-hover:scale-x-100" />
    </button>
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
      className="fixed inset-0 z-40 bg-background/96 pt-128 backdrop-blur-[12px] lg:hidden"
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
