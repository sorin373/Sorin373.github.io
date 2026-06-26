import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Engineering Portfolio`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.shortBio,
  openGraph: {
    title: `${siteConfig.name} Engineering Portfolio`,
    description: siteConfig.shortBio,
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} Engineering Portfolio`,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} Engineering Portfolio`,
    description: siteConfig.shortBio
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    email: siteConfig.email,
    url: siteConfig.siteUrl,
    sameAs: [siteConfig.linkedInUrl, siteConfig.githubUrl]
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}