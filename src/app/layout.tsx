import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/instrument-sans";
import "lenis/dist/lenis.css";
import "./globals.css";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import { businessStructuredData, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ASR Group | Turnkey Interiors & Construction in Hyderabad",
  description:
    "ASR Group delivers turnkey residential and commercial interiors and construction in Hyderabad, with one accountable team from planning to handover.",
  keywords: [
    "ASR Group",
    "turnkey interiors Hyderabad",
    "construction company Hyderabad",
    "structural glazing ACP",
    "commercial interiors",
  ],
  openGraph: {
    title: "ASR Group | Turnkey Interiors & Construction in Hyderabad",
    description:
      "Residential and commercial interiors and construction, coordinated by one accountable Hyderabad team.",
    type: "website",
    url: "/",
    siteName: "ASR Group",
    images: [
      {
        url: "/media/asr-land-to-interior-sketch.png",
        alt: "ASR Group — interiors and construction in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASR Group | Turnkey Interiors & Construction in Hyderabad",
    description:
      "Residential and commercial interiors and construction, coordinated by one accountable Hyderabad team.",
    images: ["/media/asr-land-to-interior-sketch.png"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
        />
        <Preloader />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SmoothScroll>
          <main id="main-content">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
