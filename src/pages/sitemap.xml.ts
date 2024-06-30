import { getProductList } from "@/helpers/rajaKertas";
import { getCollection } from "astro:content";

export async function GET() {
  const pages = [
    { path: "", lastModified: new Date().toLocaleDateString("en-CA") },
    {
      path: "/product",
      lastModified: new Date().toLocaleDateString("en-CA"),
    },
    {
      path: "/contact-us",
      lastModified: new Date().toLocaleDateString("en-CA"),
    },
  ];
  const siteUrl = import.meta.env.SITE;
  const product = await getProductList();
  product.results.map((detail: any) => {
    pages.push({
      path: "/product/" + detail.url_slug,
      lastModified: new Date().toLocaleDateString("en-CA"),
    });
  });
  //   const posts = await getCollection("post");

  const result = `  
<?xml version="1.0" encoding="UTF-8"?>  
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  
${pages.map(
  ({ path, lastModified }) => `
<url>
  <loc>${siteUrl}${path}</loc>
  <lastmod>${lastModified}</lastmod>
  <priority>1.0</priority>
</url>
`
)}
 
</urlset>  
  `.trim();

  return new Response(result, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
