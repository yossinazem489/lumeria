import {
  Gem,
  Gift,
  HeartHandshake,
  Leaf,
  Plane,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

export const announcementMessages = [
  "Complimentary worldwide shipping on orders over $250.",
  "Jewelry made to preserve moments in light.",
  "Private appointments now available for LUMERIA clients.",
] as const;

export const mainNavigation = [
  { label: "Shop", href: "#collections" },
  { label: "Collections", href: "#collections" },
  { label: "Journal", href: "#journal" },
] as const;

export const brandPromises = [
  {
    title: "Premium Materials",
    description: "Gold, stones, and textures chosen for quiet permanence.",
    icon: Gem,
  },
  {
    title: "Ethically Crafted",
    description: "Responsible making, shaped with care and restraint.",
    icon: Leaf,
  },
  {
    title: "Lifetime Care",
    description: "A lasting relationship with every piece you choose.",
    icon: Wrench,
  },
  {
    title: "Worldwide Shipping",
    description: "Thoughtfully prepared for journeys near and far.",
    icon: Plane,
  },
] as const;

export const signatureCollections = [
  {
    title: "Rings",
    image: "/images/home/category-ring.png",
    alt: "Gold rings on warm travertine in morning light",
  },
  {
    title: "Necklaces",
    image: "/images/home/category-necklace.png",
    alt: "Gold necklace on ivory linen near a sunlit window",
  },
  {
    title: "Earrings",
    image: "/images/home/category-earrings.png",
    alt: "Elegant earrings on matte ceramic with warm reflected light",
  },
  {
    title: "Bracelets",
    image: "/images/home/category-bracelet.png",
    alt: "Refined bracelet on limestone with soft side light",
  },
  {
    title: "Collections",
    image: "/images/home/category-collections.png",
    alt: "A refined jewelry collection arranged on natural stone in soft morning light",
  },
  {
    title: "Gifts",
    image: "/images/home/category-gifts.png",
    alt: "Jewelry gift detail styled with ivory fabric and muted gold",
  },
] as const;

export const newArrivals = [
  {
    name: "Solenne Ring",
    material: "Champagne gold - White stone",
    price: "$420",
    image: "/images/home/category-ring.png",
    alt: "Solenne Ring in warm natural light",
  },
  {
    name: "Aure Line Necklace",
    material: "18k gold vermeil",
    price: "$360",
    image: "/images/home/category-necklace.png",
    alt: "Aure Line Necklace on natural linen",
  },
  {
    name: "Linen Light Bracelet",
    material: "Polished gold finish",
    price: "$280",
    image: "/images/home/category-bracelet.png",
    alt: "Linen Light Bracelet on travertine",
  },
  {
    name: "Dawn Stud Earrings",
    material: "Gold - Soft crystal",
    price: "$240",
    image: "/images/home/category-earrings.png",
    alt: "Dawn Stud Earrings on matte ceramic",
  },
] as const;

export const journalArticles = [
  {
    title: "The Meaning of Morning Light",
    category: "Light",
    image: "/images/home/journal-care.png",
    alt: "Warm window light across stone and jewelry",
  },
  {
    title: "Crafted to Be Remembered",
    category: "Craft",
    image: "/images/home/journal-style.png",
    alt: "Jewelry atelier detail in warm natural light",
  },
  {
    title: "Objects That Hold a Promise",
    category: "Moments",
    image: "/images/home/journal-gift.png",
    alt: "Editorial jewelry still life with paper and linen",
  },
] as const;

export const communityImages = [
  {
    image: "/images/home/community-01.png",
    alt: "Lifestyle jewelry moment in warm window light",
  },
  {
    image: "/images/home/community-02.png",
    alt: "Natural linen and jewelry detail in a calm boutique setting",
  },
  {
    image: "/images/home/community-03.png",
    alt: "Quiet jewelry lifestyle scene with oak and stone textures",
  },
  {
    image: "/images/home/community-04.png",
    alt: "Ring detail on warm travertine",
  },
] as const;

export const footerLinks = [
  {
    title: "Maison",
    links: ["Our Story", "Craftsmanship", "Care", "Journal"],
  },
  {
    title: "Collections",
    links: ["Rings", "Necklaces", "Bracelets", "Earrings"],
  },
  {
    title: "Service",
    links: ["Contact", "Shipping", "Returns", "Appointments"],
  },
] as const;

export const footerAssurance = [
  { label: "Secure Care", icon: ShieldCheck },
  { label: "Lifetime Support", icon: HeartHandshake },
  { label: "Meaningful Gifts", icon: Gift },
  { label: "Quietly Crafted", icon: Sparkles },
] as const;
