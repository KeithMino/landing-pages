"use client";

import { Check } from "lucide-react";
import { pricing, siteConfig } from "@/lib/content";
import { useInView } from "@/lib/useInView";

export default function Pricing() {
  const { ref, isVisible } = useInView();

  return (
    <section id="pricing" className="bg-mino-gray-50 py-16 sm:py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-mino-dark sm:text-4xl">
            {pricing.heading}
          </h2>
          <p className="mt-4 text-lg text-mino-text/70">
            {pricing.subheading}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-white p-8 transition-shadow hover:shadow-xl ${
                tier.highlighted
                  ? "border-2 border-mino-blue shadow-lg shadow-mino-blue/10"
                  : "border border-mino-gray-200"
              }`}
            >
              {/* Recommended badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-mino-blue px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Recommended
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-mino-dark">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-mino-blue sm:text-5xl">
                    {tier.price}
                  </span>
                  <span className="text-base text-mino-text/60">
                    /{tier.period.replace("per ", "")}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-mino-text/50">
                  {tier.qualifier}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-mino-text/70">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-mino-blue" />
                    <span className="text-sm text-mino-text">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              {tier.note && (
                <p className="mt-6 rounded-lg bg-mino-blue-light px-4 py-2 text-center text-xs font-medium text-mino-blue">
                  {tier.note}
                </p>
              )}

              {/* CTA */}
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block w-full rounded-lg px-6 py-3 text-center text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-mino-cta text-white hover:bg-mino-cta-dark"
                    : "border-2 border-mino-cta text-mino-cta hover:bg-mino-cta hover:text-white"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
