import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://akshay-portfolio-six-rho.vercel.app/",
      lastModified: new Date(),
    },
  ]
}
