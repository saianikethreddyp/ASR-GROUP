import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/newsreader";
import "lenis/dist/lenis.css";
import "./globals.css";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "ASR Group | Interiors & Construction",
  description:
    "ASR Homes LLP delivers premium interiors and construction in Hyderabad — homes, workplaces, branded environments and complete buildings, through one accountable team.",
  keywords: [
    "ASR Group",
    "turnkey interiors Hyderabad",
    "construction company Hyderabad",
    "structural glazing ACP",
    "commercial interiors",
  ],
  openGraph: {
    title: "ASR Group — From structure to soul.",
    description: "Construction, interiors and specialist systems coordinated through one accountable team.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Preloader />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SmoothScroll>
          <main id="main-content">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
