"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl">Shahid</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary nav-link"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

{/* Mobile Navigation */}
<div className="flex items-center gap-2 md:hidden">
  <ThemeToggle />
  <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-full hover:bg-primary/10 hover:scale-105 transition-transform"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </Button>
    </SheetTrigger>
    <SheetContent
      side="right"
      className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl p-0 overflow-hidden"
    >
      {/* Logo */}
      <div className="px-8 pt-16 pb-8">
        <Link
          href="/"
          className="flex items-center space-x-3 font-bold text-xl"
          onClick={() => setIsOpen(false)}
        >
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground">S</span>
          </div>
          <span>Shahid</span>
        </Link>
      </div>

      {/* Links */}
      <div className="px-8 pb-10 flex flex-col space-y-2">
        {navigation.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-lg font-medium py-2 px-2 hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <div className="my-4 h-px bg-border"></div>
      </div>
    </SheetContent>
  </Sheet>
</div>
        </div>
      </div>
    </nav>
  );
}