import { services } from "@/data/services";
import { business, defaultDescription, siteName, siteUrl } from "@/data/seo";

const businessId = `${siteUrl}/#business`;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": businessId,
      name: siteName,
      url: siteUrl,
      description: defaultDescription,
      logo: `${siteUrl}${business.logoPath}`,
      image: `${siteUrl}${business.logoPath}`,
      email: business.email,
      telephone: business.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.streetAddress,
        addressLocality: business.addressLocality,
        addressRegion: business.addressRegion,
        postalCode: business.postalCode,
        addressCountry: business.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.latitude,
        longitude: business.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: business.openingDays,
          opens: business.opens,
          closes: business.closes,
        },
      ],
      areaServed: {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            url: `${siteUrl}/services#${service.slug}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: defaultDescription,
      publisher: { "@id": businessId },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
