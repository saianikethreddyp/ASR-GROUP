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
    "ASR Group delivers residential and commercial interiors and construction in Hyderabad through one accountable team.",
  telephone: "+91-80086-67766",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot Nos. 8–9, Krithika Layout, Madhapur",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Hyderabad",
  },
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
        itemOffered: { "@type": "Service", name: "Commercial interiors and construction" },
      },
    ],
  },
};
