"use client";

import { Gift } from "lucide-react";
import { bonuses } from "@/lib/content";
import { useInView } from "@/lib/useInView";

export default function Bonuses() {
  const { ref, isVisible } = useInView();

  return (
    <section id="bonuses" className="bg-white py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-mino-dark sm:text-4xl">
            7 Bonuses Included at No Extra Cost
          </h2>
          <p className="mt-4 text-lg text-mino-text/70">
            These are always included because leaving them out creates risk.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bonuses.map((bonus) => (
            <div
              key={bonus.number}
              className="group relative rounded-xl border border-mino-gray-200 bg-white p-6 transition-all hover:border-mino-blue/30 hover:shadow-lg hover:shadow-mino-blue/5"
            >
              {/* Value badge */}
              <div className="mb-4 inline-flex items-center rounded-full bg-mino-blue-light px-3 py-1 text-xs font-bold text-mino-blue">
                {bonus.value} {bonus.period}
              </div>

              <div className="flex items-start gap-3">
                <Gift className="mt-0.5 h-5 w-5 flex-shrink-0 text-mino-blue" />
                <div>
                  <h3 className="text-sm font-semibold text-mino-dark">
                    {bonus.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mino-text/70">
                    {bonus.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total value summary */}
        <div className="mt-10 rounded-xl bg-gradient-to-r from-mino-blue to-mino-blue-dark p-6 text-center sm:p-8">
          <p className="text-lg font-bold text-white sm:text-xl">
            Total included bonus value:{" "}
            <span className="text-2xl sm:text-3xl">$22,000+</span> per year
          </p>
          <p className="mt-2 text-sm text-white/80">
            Included because risk should never be optional.
          </p>
        </div>
      </div>
    </section>
  );
}
