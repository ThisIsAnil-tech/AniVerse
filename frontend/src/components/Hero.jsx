import React from 'react';
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="glass-panel" style={{
          padding: '60px 48px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '48px',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Left Column: Bio & Intro */}
          <div>
            <span className="section-tag">Welcome to my universe</span>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: 1.1, marginBottom: '16px' }}>
              Hello, I'm <br />
              <span className="gradient-text">Anil Kumar</span>
            </h1>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary-accent)', marginBottom: '24px' }}>
              Senior Full-Stack & AI Systems Architect
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '36px', maxWidth: '580px' }}>
              Engineering production-grade microservice platforms, RAG knowledge engines, and scalable Node.js/Python architectures for global enterprise applications.
            </p>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '48px' }}>
              <a href="#contact" className="btn-primary">
                <span>Let's Connect</span>
                <ArrowUpRight size={18} />
              </a>
              <a href="#projects" className="btn-secondary">
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '1px' }}>Find Me On</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { icon: <Github size={18} />, href: 'https://github.com' },
                  { icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
                  { icon: <Mail size={18} />, href: 'mailto:admin@aniverse.io' },
                ].map((item, idx) => (
                  <a key={idx} href={item.href} target="_blank" rel="noreferrer" style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all var(--transition-fast)',
                  }}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo Card & Floating Stats */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '320px',
              height: '380px',
              borderRadius: '24px',
              background: 'linear-gradient(180deg, rgba(0, 242, 254, 0.1) 0%, rgba(255, 42, 95, 0.1) 100%)',
              border: '1px solid var(--border-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
                alt="Profile Avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Floating Stats Badges */}
            <div className="glass-panel" style={{
              position: 'absolute',
              bottom: '-20px',
              left: '10px',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--secondary-accent)' }}>5+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.2 }}>
                Years of <br /><strong>Experience</strong>
              </div>
            </div>

            <div className="glass-panel" style={{
              position: 'absolute',
              top: '20px',
              right: '-10px',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary-accent)' }}>40+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.2 }}>
                Projects <br /><strong>Completed</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
