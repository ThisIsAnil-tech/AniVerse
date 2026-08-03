import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '40px 0',
      background: '#0a0b0e',
      color: 'var(--text-subtle)',
      fontSize: '0.9rem',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          © {new Date().getFullYear()} AniVerse — All Rights Reserved. Built with Node.js, Python Flask & React.
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
        </div>
      </div>
    </footer>
  );
}
