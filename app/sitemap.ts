import type { MetadataRoute } from "next";

const BASE = "https://exclamath.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/timetable`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
