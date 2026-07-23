import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "lenis/dist/lenis.css";
import "./globals.css";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "ASR Group | Interiors & Construction",
  description:
    "ASR Homes LLP Pvt. Ltd. delivers integrated construction, turnkey interiors, specialist facade systems, kitchens and wardrobes across India.",
  keywords: [
    "ASR Group",
    "turnkey interiors Hyderabad",
    "construction company Hyderabad",
    "structural glazing ACP",
    "commercial interiors",
  ],
  openGraph: {
    title: "ASR Group — From First Line to Final Handover",
    description: "Construction, interiors and specialist systems coordinated through one accountable team.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SmoothScroll>
          <main id="main-content">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
