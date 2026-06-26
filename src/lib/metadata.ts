import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: `${siteConfig.name} Engineering Portfolio`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}