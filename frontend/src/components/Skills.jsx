import React, { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'DevOps', 'Database'];

  const skills = [
    { name: 'JavaScript / TypeScript', category: 'Frontend', level: 95 },
    { name: 'React.js / Next.js', category: 'Frontend', level: 92 },
    { name: 'HTML5 / CSS3 / Tailwind', category: 'Frontend', level: 90 },
    { name: 'Node.js / Express.js', category: 'Backend', level: 96 },
    { name: 'Python / Flask / FastAPI', category: 'Backend', level: 90 },
    { name: 'REST & GraphQL APIs', category: 'Backend', level: 94 },
    { name: 'RAG Systems & Vector DBs', category: 'AI/ML', level: 88 },
    { name: 'ChromaDB / LangChain / Ollama', category: 'AI/ML', level: 85 },
    { name: 'SentenceTransformers', category: 'AI/ML', level: 82 },
    { name: 'MongoDB / Mongoose', category: 'Database', level: 95 },
    { name: 'Redis (Caching & Pub/Sub)', category: 'Database', level: 88 },
    { name: 'Docker / Multi-Stage Builds', category: 'DevOps', level: 90 },
    { name: 'CI/CD (GitHub Actions)', category: 'DevOps', level: 86 },
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-title">Skills & Capabilities</h2>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '24px',
                background: activeCategory === cat ? 'var(--secondary-accent)' : 'rgba(255,255,255,0.04)',
                color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                fontWeight: '600',
                fontSize: '0.9rem',
                border: '1px solid var(--border-color)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Bars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
        }}>
          {filteredSkills.map((skill, index) => (
            <div key={index} className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontWeight: '600', fontSize: '1rem' }}>{skill.name}</span>
                <span style={{ color: 'var(--primary-accent)', fontWeight: '700' }}>{skill.level}%</span>
              </div>
              <div style={{
                height: '8px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.05)',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${skill.level}%`,
                  background: 'linear-gradient(90deg, var(--secondary-accent), var(--primary-accent))',
                  borderRadius: '4px',
                  transition: 'width 1s ease-in-out',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
