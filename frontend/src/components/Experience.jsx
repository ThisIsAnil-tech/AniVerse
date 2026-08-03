import React, { useState } from 'react';

export default function Experience() {
  const [tab, setTab] = useState('experience');

  const experiences = [
    {
      role: 'Senior AI & Backend Architect',
      company: 'AniVerse Systems',
      period: '2024 - Present',
      description: 'Architecting multi-tenant Node.js gateways, RAG retrieval engines, ChromaDB vector indexing, and Ollama local LLM integrations.',
    },
    {
      role: 'Full-Stack Software Engineer',
      company: 'TechCorp Enterprise',
      period: '2022 - 2024',
      description: 'Built high-scale microservices, REST API gateways, MongoDB database architectures, and responsive React web platforms.',
    },
    {
      role: 'Backend Engineering Intern',
      company: 'CloudScale Labs',
      period: '2021 - 2022',
      description: 'Developed automated CI/CD deployment pipelines, Redis caching layers, and Jest unit test suites.',
    },
  ];

  const education = [
    {
      degree: 'M.S. in Computer Science & Artificial Intelligence',
      institution: 'State University',
      period: '2020 - 2022',
      description: 'Specialized in Machine Learning, Natural Language Processing, and Distributed Database Systems.',
    },
    {
      degree: 'B.S. in Computer Science Engineering',
      institution: 'Institute of Technology',
      period: '2016 - 2020',
      description: 'Graduated with Honors. Core coursework in Algorithms, Operating Systems, and Security Engineering.',
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">My Resume & Qualifications</h2>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
          <button
            onClick={() => setTab('experience')}
            style={{
              padding: '12px 32px',
              borderRadius: '30px',
              background: tab === 'experience' ? 'var(--secondary-accent)' : 'rgba(255,255,255,0.04)',
              color: '#fff',
              fontWeight: '700',
              border: '1px solid var(--border-color)',
            }}
          >
            Job Experience
          </button>
          <button
            onClick={() => setTab('education')}
            style={{
              padding: '12px 32px',
              borderRadius: '30px',
              background: tab === 'education' ? 'var(--secondary-accent)' : 'rgba(255,255,255,0.04)',
              color: '#fff',
              fontWeight: '700',
              border: '1px solid var(--border-color)',
            }}
          >
            Education & Degrees
          </button>
        </div>

        {/* Timeline Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {(tab === 'experience' ? experiences : education).map((item, idx) => (
            <div key={idx} className="glass-panel hover-card" style={{ padding: '32px' }}>
              <span style={{
                color: 'var(--primary-accent)',
                fontSize: '0.85rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'block',
                marginBottom: '8px',
              }}>
                {item.period}
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '4px' }}>
                {item.role || item.degree}
              </h3>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--secondary-accent)', fontWeight: '600', marginBottom: '16px' }}>
                {item.company || item.institution}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
