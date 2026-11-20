import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "King's Siva Academy — Win a Trip to Samoa",
  description:
    "To teach, inspire & empower the next generation of Samoans in Australia. Enter for your chance to win a trip to Samoa.",
  openGraph: {
    title: "King's Siva Academy — Win a Trip to Samoa",
    description:
      "To teach, inspire & empower the next generation of Samoans in Australia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      </head>
      <body>{children}</body>
    </html>
  );
}
