"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Database,
  Users,
  Headphones,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import { servicePillars } from "@/lib/content";
import { useInView } from "@/lib/useInView";

const iconMap = {
  ShieldCheck,
  Lock,
  Database,
  Users,
  Headphones,
  BarChart3,
} as const;

export default function ServicePillars() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { ref, isVisible } = useInView();

  return (
    <section id="whats-included" className="bg-mino-gray-50 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-mino-dark sm:text-4xl">
            What&apos;s Included in Total Coverage
          </h2>
          <p className="mt-4 text-lg text-mino-text/70">
            Six pillars of protection that work together to keep your business
            compliant, secure, and running.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicePillars.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            const isExpanded = expanded === pillar.number;

            return (
              <div
                key={pillar.number}
                className="group rounded-xl border border-mino-gray-200 bg-white transition-all hover:border-mino-blue/30 hover:shadow-lg hover:shadow-mino-blue/5"
              >
                <button
                  onClick={() =>
                    setExpanded(isExpanded ? null : pillar.number)
                  }
                  className="flex w-full items-start gap-4 p-6 text-left"
                  aria-expanded={isExpanded}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-mino-blue-light">
                    <Icon className="h-6 w-6 text-mino-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-mino-blue">
                        {String(pillar.number).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold text-mino-dark sm:text-lg">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-mino-text/70">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-mino-text/40 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-mino-gray-100 px-6 pb-6 pt-4">
                    <ul className="space-y-2">
                      {pillar.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-mino-text"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mino-blue" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
