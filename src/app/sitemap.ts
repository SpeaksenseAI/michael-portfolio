import type { MetadataRoute } from "next";
import { baseURL, routes as routesConfig } from "@/resources";
import { getPosts } from "@/app/utils/utils";

const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
  url: `${baseURL}/work/${post.slug}`,
  lastModified: post.metadata.publishedAt,
  changeFrequency: "monthly" as const,
  priority: 0.8,
}));

const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route as keyof typeof routesConfig]);

const routes = activeRoutes.map((route) => ({
  url: `${baseURL}${route}`,
  lastModified: new Date(),
  changeFrequency: "weekly" as const,
  priority: route === "/" ? 1 : 0.8,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...works];
}
