"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import CardNav, { type CardNavItem } from "@/components/ui/CardNav";

// 1. Define your logo as a reusable component
const Logo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
      <span className="text-primary-foreground font-bold text-sm">S</span>
    </div>
    <span className="font-bold text-xl hidden sm:inline-block">Shahid</span>
  </Link>
);

// 2. Group your original navigation links into the card format
const navigationItems: CardNavItem[] = [
  {
    label: "Explore",
    bgColor: "#0D0716", // Feel free to change these colors
    textColor: "#fff",
    links: [
      { label: "Home", href: "/", ariaLabel: "Go to Home page" },
      { label: "About", href: "/about", ariaLabel: "Learn more about me" },
    ],
  },
  {
    label: "My Work",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "Projects", href: "/projects", ariaLabel: "View my projects" },
      { label: "Resume", href: "/resume", ariaLabel: "View my resume" },
    ],
  },
  {
    label: "Connect",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Blog", href: "/blog", ariaLabel: "Read my blog" },
      { label: "Contact", href: "/contact", ariaLabel: "Get in touch with me" },
    ],
  },
];

// 3. Export the new Navigation component
export default function Navigation() {
  return (
    <header>
      <CardNav
        logo={<Logo />}
        items={navigationItems}
        ctaComponent={<ThemeToggle />}
      />
    </header>
  );
}
