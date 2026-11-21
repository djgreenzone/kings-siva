import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.kingssiva.com";
const SITE_NAME = "Kings Siva Academy";
const OG_IMAGE = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Win a Trip to Samoa — Kings Siva Academy giveaway. Return flights plus 3 nights at Samoa Beach Resort.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Win a Trip to Samoa Giveaway | Kings Siva Academy",
    template: "%s | Kings Siva Academy",
  },
  description:
    "Enter free to win a trip to Samoa — return flights plus 3 nights at Samoa Beach Resort. A Kings Siva Academy giveaway with Beautiful Samoa. Open to Brisbane residents 18+.",
  applicationName: SITE_NAME,
  keywords: [
    "win a trip to Samoa",
    "Samoa giveaway",
    "trip to Samoa competition",
    "Kings Siva Academy",
    "Samoan dance academy Brisbane",
    "siva Samoa",
    "FIAFIA 26",
    "Samoa Beach Resort",
    "Beautiful Samoa",
    "Samoa Tourism Authority",
    "Samoan culture Australia",
    "Samoan youth Brisbane",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Culture & Community",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Win a Trip to Samoa Giveaway | Kings Siva Academy",
    description:
      "Enter free to win return flights plus 3 nights at Samoa Beach Resort. A Kings Siva Academy giveaway with Beautiful Samoa. Entries close 29 November 2026.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Win a Trip to Samoa Giveaway | Kings Siva Academy",
    description:
      "Enter free to win return flights plus 3 nights at Samoa Beach Resort. A Kings Siva Academy giveaway with Beautiful Samoa.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "Kings Siva Academy Australia",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/og.jpg`,
      description:
        "Kings Siva Academy teaches, inspires and empowers the next generation of Samoans in Australia through siva (Samoan dance) and cultural education.",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      knowsAbout: [
        "Samoan dance",
        "siva",
        "Samoan culture",
        "Pacific Islander youth education",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-AU",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Kaushan+Script&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
