/**
 * Node.js script to dynamically regenerate public/sitemap.xml
 * Run via: npm run generate-sitemap
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.quizvibe.com';

const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/quizzes', priority: '0.9', changefreq: 'daily' },
  { url: '/this-or-that', priority: '0.9', changefreq: 'weekly' },
  { url: '/categories', priority: '0.8', changefreq: 'weekly' },
  { url: '/about', priority: '0.5', changefreq: 'monthly' },
  { url: '/contact', priority: '0.5', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/disclaimer', priority: '0.3', changefreq: 'yearly' },
];

const quizzesDir = path.join(__dirname, '../src/data/quizzes');
const quizFiles = fs.readdirSync(quizzesDir).filter((file) => file.endsWith('.ts'));

const quizRoutes = quizFiles.map((file) => {
  const slug = file.replace('.ts', '');
  return {
    url: `/quiz/${slug}`,
    priority: '0.85',
    changefreq: 'monthly',
  };
});

const allRoutes = [...staticRoutes, ...quizRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${baseUrl}${r.url}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`✅ Sitemap successfully generated with ${allRoutes.length} URLs at ${outputPath}`);
