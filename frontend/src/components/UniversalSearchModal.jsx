import React, { useState } from 'react';
import { Search, X, FileText, Folder, Sparkles } from 'lucide-react';
import { api } from '../services/api';

export default function UniversalSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const data = await api.search(query);
    setResults(data.data || null);
    setLoading(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(14, 15, 20, 0.85)',
      backdropFilter: 'blur(16px)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '100px',
    }}>
      <div className="glass-panel" style={{
        maxWidth: '640px',
        width: '100%',
        padding: '24px',
        boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
      }}>
        {/* Search Input Bar */}
        <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <Search size={20} color="var(--primary-accent)" />
          <input
            type="text"
            placeholder="Search blogs, projects, skills, patents..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff',
              fontSize: '1.1rem',
            }}
          />
          <button type="button" onClick={onClose} style={{ color: 'var(--text-muted)' }}>
            <X size={20} />
          </button>
        </form>

        {loading && <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)' }}>Searching platform...</div>}

        {/* Results */}
        {results && (
          <div style={{ maxHeight: '400px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', textTransform: 'uppercase' }}>
              Found {results.totalResults || 0} Results
            </div>

            {results.results?.projects?.map((item) => (
              <div key={item._id} style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-accent)', fontWeight: '600', fontSize: '0.9rem' }}>
                  <Folder size={14} /> Project
                </div>
                <h4 style={{ fontSize: '1rem', margin: '4px 0' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.description}</p>
              </div>
            ))}

            {results.results?.blogs?.map((item) => (
              <div key={item._id} style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-accent)', fontWeight: '600', fontSize: '0.9rem' }}>
                  <FileText size={14} /> Blog Post
                </div>
                <h4 style={{ fontSize: '1rem', margin: '4px 0' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.excerpt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
