"use client";

import { ShieldCheck } from "lucide-react";
import { guaranteeContent } from "@/lib/content";
import { useInView } from "@/lib/useInView";

export default function Guarantee() {
  const { ref, isVisible } = useInView();

  return (
    <section id="guarantee" className="bg-white py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-mino-blue-light">
          <ShieldCheck className="h-8 w-8 text-mino-blue" />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-mino-dark sm:text-4xl">
          {guaranteeContent.heading}
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-mino-text/80">
          {guaranteeContent.body}
        </p>

        <p className="mt-4 text-xl font-bold text-mino-blue">
          {guaranteeContent.tagline}
        </p>
      </div>
    </section>
  );
}
