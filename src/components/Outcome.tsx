"use client";

import { outcomeContent } from "@/lib/content";
import { useInView } from "@/lib/useInView";

export default function Outcome() {
  const { ref, isVisible } = useInView();

  return (
    <section className="relative overflow-hidden bg-mino-blue py-16 sm:py-24">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {outcomeContent.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
          {outcomeContent.body}
        </p>
      </div>
    </section>
  );
}
