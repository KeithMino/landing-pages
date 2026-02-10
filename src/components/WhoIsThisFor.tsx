"use client";

import {
  Stethoscope,
  Scale,
  Calculator,
  Factory,
  HardHat,
} from "lucide-react";
import { industries } from "@/lib/content";
import { useInView } from "@/lib/useInView";

const iconMap = {
  Stethoscope,
  Scale,
  Calculator,
  Factory,
  HardHat,
} as const;

export default function WhoIsThisFor() {
  const { ref, isVisible } = useInView();

  return (
    <section id="who-its-for" className="bg-white py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-mino-dark sm:text-4xl">
            Who Is Total Coverage For?
          </h2>
          <p className="mt-4 text-lg text-mino-text/70">
            Built for businesses that face compliance audits, insurer reviews, or
            industry scrutiny — and cannot afford cyber incidents, downtime, or
            data loss.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5 lg:gap-8">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon];
            return (
              <div
                key={industry.name}
                className="group flex flex-col items-center rounded-xl border border-mino-gray-200 bg-white p-6 text-center transition-all hover:border-mino-blue/30 hover:shadow-lg hover:shadow-mino-blue/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-mino-blue-light transition-colors group-hover:bg-mino-blue/15">
                  <Icon className="h-7 w-7 text-mino-blue" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-mino-dark sm:text-base">
                  {industry.name}
                </h3>
                <p className="mt-1 hidden text-xs text-mino-text/60 sm:block">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
