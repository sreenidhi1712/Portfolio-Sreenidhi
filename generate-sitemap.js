import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { map } from './app/api/sitemap/route.js'; // Import the defined routes

const generateSitemap = () => {
  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const sitemapFooter = `</urlset>`;

  const sitemapContent = map((route) => {
      return `
  <url>
    <loc>https://sreenidhidev.me${route.loc}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${route.lastmod}</lastmod>
  </url>`;
    })
    .join('');

  const fullSitemap = `${sitemapHeader}${sitemapContent}${sitemapFooter}`;

  const outputDir = join(__dirname, 'out'); // Output directory
  const sitemapPath = join(outputDir, 'sitemap.xml'); // Full path to sitemap.xml

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(sitemapPath, fullSitemap, 'utf8');
  console.log('✅ Sitemap generated at:', sitemapPath);
};

generateSitemap();
