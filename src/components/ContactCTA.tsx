"use client";

import { Phone, Mail } from "lucide-react";
import { ctaContent, siteConfig } from "@/lib/content";
import { useInView } from "@/lib/useInView";

export default function ContactCTA() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-mino-dark py-16 sm:py-24"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {ctaContent.heading}
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-white/80">
          {ctaContent.subheading}
        </p>

        <div className="mt-10">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-mino-blue px-10 py-4 text-lg font-medium text-white shadow-lg shadow-mino-blue/30 transition-all hover:bg-mino-blue-dark hover:shadow-xl hover:shadow-mino-blue/40"
          >
            {ctaContent.primaryCta}
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm">{siteConfig.phone}</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm">{siteConfig.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
