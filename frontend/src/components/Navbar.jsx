import React from 'react';
import { Bot, Search, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenSearch, onToggleAI }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(14, 15, 20, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
      }}>
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, var(--secondary-accent), var(--primary-accent))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            color: '#fff',
          }}>
            A
          </div>
          <span style={{ fontWeight: '800', fontSize: '1.35rem', letterSpacing: '-0.03em' }}>
            ANI<span style={{ color: 'var(--secondary-accent)' }}>VERSE</span>
          </span>
        </a>

        {/* Nav Links */}
        <nav style={{ display: 'flex', gap: '32px', fontSize: '0.95rem', fontWeight: '500' }}>
          <a href="#about" style={{ transition: 'color var(--transition-fast)' }}>About</a>
          <a href="#services" style={{ transition: 'color var(--transition-fast)' }}>Services</a>
          <a href="#skills" style={{ transition: 'color var(--transition-fast)' }}>Skills</a>
          <a href="#projects" style={{ transition: 'color var(--transition-fast)' }}>Projects</a>
          <a href="#experience" style={{ transition: 'color var(--transition-fast)' }}>Experience</a>
          <a href="#blog" style={{ transition: 'color var(--transition-fast)' }}>Blog</a>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Universal Search trigger */}
          <button 
            onClick={onOpenSearch}
            style={{
              padding: '10px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--transition-fast)',
            }}
            title="Universal Search"
          >
            <Search size={18} />
          </button>

          {/* AI Chat Drawer Trigger */}
          <button
            onClick={onToggleAI}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(255, 42, 95, 0.15))',
              border: '1px solid rgba(0, 242, 254, 0.4)',
              color: '#fff',
              fontWeight: '600',
              fontSize: '0.9rem',
            }}
          >
            <Sparkles size={16} color="var(--primary-accent)" />
            <span>AI Assistant</span>
          </button>
        </div>
      </div>
    </header>
  );
}
