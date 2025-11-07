// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const { posts, SITE } = require('../src/data/posts.js');

const staticRoutes = ['/', '/Contact', '/Resume', '/education', '/james']; // add others as needed

const urls = [...staticRoutes, ...posts.map(p => p.path)].map((p) => {
  const loc = new URL(p, SITE.origin).toString();
  return `<url><loc>${loc}</loc></url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

const out = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(out, xml);
console.log('✓ sitemap.xml written to public/');
