import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
return [
{ url: "https://yonovipplay.net/en", lastModified: new Date(), changeFrequency: "daily", priority: 1 },
{ url: "https://yonovipplay.net/hi", lastModified: new Date(), changeFrequency: "daily", priority: 1 },
];
}
