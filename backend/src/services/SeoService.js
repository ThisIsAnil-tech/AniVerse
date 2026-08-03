const Project = require('../models/Project');
const Blog = require('../models/Blog');
const config = require('../config');

class SeoService {
  async generateSitemap(baseUrl = 'http://localhost:3000') {
    const [projects, blogs] = await Promise.all([
      Project.find({ status: 'active' }).select('slug updatedAt'),
      Blog.find({ status: 'active', isPublished: true }).select('slug updatedAt'),
    ]);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n`;

    // Static pages
    xml += `  <url><loc>${baseUrl}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>\n`;
    xml += `  <url><loc>${baseUrl}/#about</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>\n`;
    xml += `  <url><loc>${baseUrl}/#projects</loc><changefreq>daily</changefreq><priority>0.9</priority></url>\n`;
    xml += `  <url><loc>${baseUrl}/#blog</loc><changefreq>daily</changefreq><priority>0.9</priority></url>\n`;

    // Projects
    projects.forEach((p) => {
      xml += `  <url><loc>${baseUrl}/#projects/${p.slug}</loc><lastmod>${new Date(p.updatedAt).toISOString()}</lastmod><priority>0.7</priority></url>\n`;
    });

    // Blogs
    blogs.forEach((b) => {
      xml += `  <url><loc>${baseUrl}/#blog/${b.slug}</loc><lastmod>${new Date(b.updatedAt).toISOString()}</lastmod><priority>0.7</priority></url>\n`;
    });

    xml += `</urlset>`;
    return xml;
  }

  generateRobotsTxt(baseUrl = 'http://localhost:3000') {
    return `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin/\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
  }

  async generateRssFeed(baseUrl = 'http://localhost:3000') {
    const blogs = await Blog.find({ status: 'active', isPublished: true }).sort({ createdAt: -1 }).limit(20);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<rss version="2.0">\n`;
    xml += `  <channel>\n`;
    xml += `    <title>AniVerse AI Portfolio Blog Feed</title>\n`;
    xml += `    <link>${baseUrl}</link>\n`;
    xml += `    <description>Latest insights on Full-Stack Systems, RAG Architectures, and Security Engineering</description>\n`;
    xml += `    <language>en-us</language>\n`;

    blogs.forEach((b) => {
      xml += `    <item>\n`;
      xml += `      <title><![CDATA[${b.title}]]></title>\n`;
      xml += `      <link>${baseUrl}/#blog/${b.slug}</link>\n`;
      xml += `      <description><![CDATA[${b.excerpt || ''}]]></description>\n`;
      xml += `      <pubDate>${new Date(b.createdAt).toUTCString()}</pubDate>\n`;
      xml += `      <guid>${baseUrl}/#blog/${b.slug}</guid>\n`;
      xml += `    </item>\n`;
    });

    xml += `  </channel>\n`;
    xml += `</rss>`;
    return xml;
  }
}

module.exports = new SeoService();
