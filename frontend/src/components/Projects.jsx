import React, { useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AniVerse AI Portfolio Platform',
      tagline: 'Enterprise AI Portfolio with RAG Pipeline',
      description: 'Microservice architecture using Node.js API Gateway, Python Flask AI Microservice, ChromaDB vector DB, and local Ollama Mistral LLM model.',
      technologies: ['Node.js', 'Express', 'Python', 'Flask', 'MongoDB', 'RAG', 'ChromaDB', 'Ollama'],
      demoUrl: 'https://demo.aniverse.io',
      githubUrl: 'https://github.com/aniverse-ai-portfolio',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'NeuralSearch Enterprise RAG Engine',
      tagline: 'High-throughput document indexing & semantic search',
      description: 'Built vector ingestion pipeline supporting PDFs, DOCX, and research papers with SentenceTransformers embeddings.',
      technologies: ['Python', 'FastAPI', 'ChromaDB', 'Docker', 'Redis'],
      demoUrl: 'https://demo.aniverse.io/rag',
      githubUrl: 'https://github.com/neuralsearch-engine',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Distributed Gateway API Manager',
      tagline: 'Zero-trust JWT API Gateway with Redis Rate Limiting',
      description: 'Express-based gateway managing 35+ schemas, audit trails, and multi-tenant security layers.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
      demoUrl: 'https://demo.aniverse.io/gateway',
      githubUrl: 'https://github.com/gateway-api-manager',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects & Demonstrations</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '32px',
        }}>
          {projects.map((project) => (
            <div key={project.id} className="glass-panel hover-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {/* Cover Image */}
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                />
              </div>

              {/* Content Details */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '8px' }}>{project.title}</h3>
                  <p style={{ color: 'var(--primary-accent)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '14px' }}>{project.tagline}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>{project.description}</p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} style={{
                        padding: '4px 12px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.8rem',
                        color: 'var(--text-subtle)',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      fontWeight: '600',
                    }}>
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.9rem',
                      color: 'var(--primary-accent)',
                      fontWeight: '600',
                    }}>
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
