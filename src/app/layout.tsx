import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Mino IT Total Coverage\u2122 | Managed IT for Regulated Businesses",
  description:
    "Be operationally confident, audit-ready and cyber-secure. Managed IT services for Brisbane businesses with 10\u2013100 staff. 94% first-touch resolution. 100% Australian help desk.",
  keywords: [
    "managed IT services Brisbane",
    "cyber security Brisbane",
    "IT compliance",
    "SMB1001",
    "managed services provider",
    "IT support Brisbane",
  ],
  openGraph: {
    title: "Mino IT Total Coverage\u2122",
    description:
      "Compliance, cyber security and IT support for regulated Brisbane businesses.",
    url: "https://www.minoit.com.au",
    siteName: "Mino IT Managed Services",
    locale: "en_AU",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mino IT Managed Services",
  telephone: "1300700187",
  email: "info@minoit.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2a/31 Anthony Street",
    addressLocality: "West End",
    addressRegion: "QLD",
    postalCode: "4101",
    addressCountry: "AU",
  },
  url: "https://www.minoit.com.au",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
