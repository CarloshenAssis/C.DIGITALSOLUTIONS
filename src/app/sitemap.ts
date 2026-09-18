import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site-url";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/projetos", priority: 0.9 },
    { path: "/solucoes", priority: 0.9 },
    { path: "/sobre", priority: 0.8 },
    { path: "/experiencia", priority: 0.7 },
    { path: "/journal", priority: 0.7 },
    { path: "/contato", priority: 0.8 },
  ].map((route) => ({
    url: absoluteUrl(route.path || "/"),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));

  const projectRoutes = projects.map((project) => ({
    url: absoluteUrl(`/projetos/${project.slug}`),
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const articleRoutes = articles.map((article) => ({
    url: absoluteUrl(`/journal/${article.slug}`),
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
