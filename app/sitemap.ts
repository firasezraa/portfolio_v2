import type { MetadataRoute } from "next";
import { getAllProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://firasezra.com";
  const projects = getAllProjects();

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date("2026-10-22"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
