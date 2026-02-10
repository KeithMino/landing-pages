import { heroContent, siteConfig } from "@/lib/content";
import TrustBar from "./TrustBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mino-blue-light to-white">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0A73BA 1px, transparent 1px), linear-gradient(to bottom, #0A73BA 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-mino-blue/10 px-4 py-1.5 text-sm font-medium text-mino-blue">
            {heroContent.badge}
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-mino-dark sm:text-5xl lg:text-6xl">
            {heroContent.headline}
            <sup className="text-lg font-normal text-mino-blue">
              {heroContent.trademark}
            </sup>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg leading-relaxed text-mino-text sm:text-xl">
            {heroContent.subheadline}
          </p>

          {/* Quote */}
          <p className="mt-4 text-base italic text-mino-text/70">
            {heroContent.quote}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-mino-blue px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-mino-blue/25 transition-all hover:bg-mino-blue-dark hover:shadow-xl hover:shadow-mino-blue/30"
            >
              {heroContent.primaryCta}
            </a>
            <a
              href="#whats-included"
              className="inline-flex items-center rounded-lg border-2 border-mino-blue px-8 py-3.5 text-base font-medium text-mino-blue transition-colors hover:bg-mino-blue hover:text-white"
            >
              {heroContent.secondaryCta}
            </a>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 lg:mt-20">
          <TrustBar />
        </div>
      </div>
    </section>
  );
}
