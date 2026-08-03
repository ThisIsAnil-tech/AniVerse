import React, { useState } from 'react';
import { ExternalLink, Copy } from 'lucide-react';

export default function SeoManager() {
  const [copied, setCopied] = useState('');

  const links = [
    { label: 'XML Sitemap', url: '/api/v1/seo/sitemap.xml' },
    { label: 'Robots.txt', url: '/api/v1/seo/robots.txt' },
    { label: 'RSS 2.0 Feed', url: '/api/v1/seo/rss.xml' },
  ];

  const handleCopy = (url) => {
    navigator.clipboard.writeText(window.location.origin + url);
    setCopied(url);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '24px' }}>SEO & Feed Generator Manager</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {links.map((item, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px' }}>{item.label}</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--primary-accent)' }}>{item.url}</span>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => handleCopy(item.url)} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                <Copy size={14} /> {copied === item.url ? 'Copied!' : 'Copy Link'}
              </button>
              <a href={item.url} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                <ExternalLink size={14} /> Open
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
