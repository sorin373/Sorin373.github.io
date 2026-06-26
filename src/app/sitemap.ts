import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllNotes, getAllProjects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const staticRoutes = ["", "/projects", "/about", "/experience", "/skills", "/notes", "/publications", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: base + route, lastModified: new Date() })),
    ...getAllProjects().map((project) => ({ url: base + "/projects/" + project.slug, lastModified: new Date() })),
    ...getAllNotes().map((note) => ({ url: base + "/notes/" + note.slug, lastModified: new Date() }))
  ];
}