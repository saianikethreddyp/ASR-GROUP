const fallbackSiteUrl = "https://asrgroupindia.in";

/**
 * Set NEXT_PUBLIC_SITE_URL to the final canonical production domain at deploy
 * time. The fallback preserves the ASR domain already indexed by Google.
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
).origin;

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "ASR Group",
  legalName: "ASR Homes LLP",
  url: siteUrl,
  logo: absoluteUrl("/brand/asr-group-logo-transparent.png"),
  image: absoluteUrl("/media/asr-land-to-interior-sketch.png"),
  description:
    "ASR Group delivers residential and commercial interiors and infra projects in Hyderabad through one accountable team.",
  telephone: "+91-80086-67766",
  email: "info@asrgroupindia.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, Sri Arcade Bldg, Plot No. 34, Jayabheri Enclave, Gachibowli",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500032",
    addressCountry: "IN",
  },
  areaServed: ["Hyderabad", "Bangalore", "Vijayawada"].map((name) => ({
    "@type": "City",
    name,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ASR Group services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Turnkey interior projects" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Residential construction" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Commercial interiors and infra projects" },
      },
    ],
  },
};
