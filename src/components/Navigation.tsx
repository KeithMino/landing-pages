"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/content";

const navLinks = [
  { label: "What\u2019s Included", href: "#whats-included" },
  { label: "Bonuses", href: "#bonuses" },
  { label: "Pricing", href: "#pricing" },
  { label: "Guarantee", href: "#guarantee" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/images/logo-blue.png"
              alt={siteConfig.shortName}
              width={160}
              height={40}
              priority
              className="h-8 w-auto lg:h-10"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-mino-text transition-colors hover:text-mino-blue"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-mino-blue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-mino-blue-dark"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-mino-text md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-mino-gray-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-mino-text transition-colors hover:bg-mino-blue-light hover:text-mino-blue"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-lg bg-mino-blue px-3 py-2.5 text-center text-base font-medium text-white transition-colors hover:bg-mino-blue-dark"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
