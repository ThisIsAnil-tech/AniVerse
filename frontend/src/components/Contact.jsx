import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { api } from '../services/api';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    const res = await api.subscribe(email, name);
    if (res.success) {
      setStatusMsg('Thank you for subscribing! Verification email dispatched.');
      setEmail('');
      setName('');
    } else {
      setStatusMsg(res.error || 'Failed to subscribe');
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="glass-panel" style={{ padding: '60px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <span className="section-tag">Let's Connect</span>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>Have a Project in Mind?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '32px' }}>
              Whether you are looking to architect scalable Node.js microservices, deploy custom RAG AI applications, or optimize your cloud infrastructure, let's talk.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary-accent)', fontWeight: '600' }}>
              <Mail size={20} />
              <span>admin@aniverse.io</span>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>Subscribe to Newsletter</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  padding: '14px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-color)',
                  color: '#fff',
                  outline: 'none',
                }}
              />
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: '14px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-color)',
                  color: '#fff',
                  outline: 'none',
                }}
              />
              <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                <span>Subscribe</span>
                <Send size={18} />
              </button>

              {statusMsg && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-accent)', fontSize: '0.9rem', marginTop: '8px' }}>
                  <CheckCircle size={16} />
                  <span>{statusMsg}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
