import Image from "next/image";
import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-mino-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <Image
            src="/images/logo-white.png"
            alt={siteConfig.shortName}
            width={140}
            height={35}
            className="h-8 w-auto"
          />

          {/* Contact info */}
          <div className="flex flex-col items-center gap-2 text-center text-sm text-white/60 md:items-end md:text-right">
            <p>{siteConfig.address}</p>
            <p>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.phone}
              </a>
              {" | "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
              {" | "}
              <a
                href={siteConfig.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {siteConfig.website}
              </a>
            </p>
            <p className="text-xs text-white/40">
              ABN {siteConfig.abn}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
