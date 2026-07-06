import type { MetadataRoute } from "next";
import { getAllNotices } from "@/lib/notice";

const BASE = "https://exclamath.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const notices = getAllNotices();
  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/timetable`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/notice`, changeFrequency: "weekly", priority: 0.6 },
    ...notices.map((n) => ({
      url: `${BASE}/notice/${n.slug}`,
      lastModified: n.date ? new Date(n.date) : undefined,
      priority: 0.5,
    })),
  ];
}
