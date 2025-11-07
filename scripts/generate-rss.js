// scripts/generate-rss.js
const fs = require('fs');
const path = require('path');
const { posts, SITE } = require('../src/data/posts.js');

const items = posts
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .map(({ path: p, title, date }) => {
    const link = new URL(p, SITE.origin).toString();
    return `
<item>
  <title>${escapeXml(title)}</title>
  <link>${link}</link>
  <guid>${link}</guid>
  <pubDate>${new Date(date).toUTCString()}</pubDate>
  <description>${escapeXml(title)} — by ${SITE.author}</description>
</item>`;
  });

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${escapeXml(SITE.author)} — Blog</title>
  <link>${SITE.origin}</link>
  <description>Posts by ${escapeXml(SITE.author)}</description>
  ${items.join('\n')}
</channel>
</rss>`;

const out = path.join(process.cwd(), 'public', 'rss.xml');
fs.writeFileSync(out, rss);
console.log('✓ rss.xml written to public/');

function escapeXml(s) {
  return s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));
}
