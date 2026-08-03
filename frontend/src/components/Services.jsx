import React from 'react';
import { Cpu, Database, Layout, ShieldCheck, Terminal, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout size={32} color="var(--secondary-accent)" />,
      title: 'Full-Stack Web Development',
      description: 'Designing highly responsive, modern user interfaces using React, Next.js, and Vanilla CSS paired with Node.js REST API gateways.',
    },
    {
      icon: <Cpu size={32} color="var(--primary-accent)" />,
      title: 'AI Microservices & RAG Pipelines',
      description: 'Engineering Retrieval-Augmented Generation workflows using Python Flask, ChromaDB vector stores, and local Ollama Mistral LLMs.',
    },
    {
      icon: <Database size={32} color="var(--secondary-accent)" />,
      title: 'Database Architecture & Security',
      description: 'Architecting 35+ MongoDB schemas with auditing fields, indexing, encryption, and secure JWT role-based access control.',
    },
    {
      icon: <Terminal size={32} color="var(--primary-accent)" />,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Multi-stage Docker containerization, Redis caching, background job queues (Bull/Agenda), and automated CI/CD pipelines.',
    },
    {
      icon: <ShieldCheck size={32} color="var(--secondary-accent)" />,
      title: 'Security Engineering',
      description: 'Implementing Helmet headers, rate limiting, XSS sanitization, CORS protections, and structured audit logging.',
    },
    {
      icon: <Zap size={32} color="var(--primary-accent)" />,
      title: 'Performance Engineering',
      description: 'Optimizing API gateway latency, database query indexing, memory caching, and asset storage via Cloudinary and MEGA.',
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Specialty</span>
          <h2 className="section-title">What I Do</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {services.map((item, index) => (
            <div key={index} className="glass-panel hover-card" style={{ padding: '36px 30px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
