
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://edwardeddie10.github.io/edward-portfolio/",
      lastModified: new Date("2026-10-09"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}