import React, { useState } from 'react';
import { BookOpen, Clock, Tag, X } from 'lucide-react';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const posts = [
    {
      id: 1,
      title: 'Building Enterprise RAG Systems with Flask & ChromaDB',
      slug: 'building-enterprise-rag-architecture',
      excerpt: 'Learn how to build production-grade Retrieval-Augmented Generation workflows using ChromaDB vector database and local Ollama Mistral LLMs.',
      content: `Retrieval-Augmented Generation (RAG) combines pre-trained language models with external vector search. In this deep dive, we explore how to construct a Flask AI microservice that interfaces with ChromaDB to index custom portfolio data and query local LLMs seamlessly.

Key highlights include:
1. Document chunking & embedding generation using SentenceTransformers.
2. Vector similarity search in ChromaDB.
3. Prompt orchestration and contextual prompt injection.
4. Response validation and citation extraction.`,
      date: 'Oct 15, 2024',
      readTime: '6 min read',
      tag: 'AI Architectures',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Architecting Scalable Node.js API Gateways',
      slug: 'architecting-scalable-nodejs-gateways',
      excerpt: 'Best practices for organizing Express.js API Gateways using Controller, Service, and Repository layers with Redis rate limiting.',
      content: `Designing enterprise Node.js applications requires strict separation of concerns. In this post, we discuss implementing SOLID principles, JWT authentication rotation, dynamic Mongoose schema auditing, and rate limiting with Redis.`,
      date: 'Sep 28, 2024',
      readTime: '8 min read',
      tag: 'Backend Systems',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Insights & Research</span>
          <h2 className="section-title">Latest Articles</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
          {posts.map((post) => (
            <div key={post.id} className="glass-panel hover-card" style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => setSelectedArticle(post)}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--primary-accent)', marginBottom: '12px', fontWeight: '600' }}>
                  <span>{post.tag}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '12px', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>{post.excerpt}</p>
                <span style={{ color: 'var(--secondary-accent)', fontWeight: '600', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>Read Article</span>
                  <BookOpen size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
        }}>
          <div className="glass-panel" style={{
            maxWidth: '720px',
            width: '100%',
            maxHeight: '85vh',
            overflowY: 'auto',
            padding: '40px',
            position: 'relative',
          }}>
            <button 
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                color: 'var(--text-muted)',
                background: 'rgba(255,255,255,0.05)',
                padding: '8px',
                borderRadius: '50%',
              }}
            >
              <X size={20} />
            </button>

            <span style={{ color: 'var(--primary-accent)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              {selectedArticle.tag} • {selectedArticle.date}
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '16px 0 24px 0', lineHeight: 1.2 }}>
              {selectedArticle.title}
            </h2>

            <div style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              {selectedArticle.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
