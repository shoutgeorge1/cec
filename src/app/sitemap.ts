import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const routes = [
  "/",
  "/commercial-bounce-houses",
  "/commercial-water-slides",
  "/inflatable-obstacle-courses",
  "/wholesale",
  "/packages",
  "/products",
  "/request-a-quote",
  "/contact",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("quote") ? 0.9 : 0.8,
  }));
}
