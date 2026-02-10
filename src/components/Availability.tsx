"use client";

import { Hourglass } from "lucide-react";
import { availabilityContent } from "@/lib/content";
import { useInView } from "@/lib/useInView";

export default function Availability() {
  const { ref, isVisible } = useInView();

  return (
    <section className="bg-mino-gray-50 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center sm:p-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100">
            <Hourglass className="h-7 w-7 text-amber-600" />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-mino-dark sm:text-3xl">
            {availabilityContent.heading}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-mino-text/80 sm:text-lg">
            {availabilityContent.body}
          </p>

          <p className="mt-3 text-sm text-mino-text/60">
            {availabilityContent.detail}
          </p>
        </div>
      </div>
    </section>
  );
}
