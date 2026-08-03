import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit3 } from 'lucide-react';
import { api } from '../../services/api';

export default function CMSManager() {
  const [moduleName, setModuleName] = useState('projects');
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.getContent(moduleName).then((res) => {
      if (res.data) setItems(res.data);
    });
  }, [moduleName]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>CMS Module Manager</h2>
        <select
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          style={{
            padding: '10px 16px',
            borderRadius: '10px',
            background: 'var(--bg-card)',
            color: '#fff',
            border: '1px solid var(--border-color)',
          }}
        >
          <option value="projects">Projects</option>
          <option value="blogs">Blogs</option>
          <option value="skills">Skills</option>
          <option value="certificates">Certificates</option>
        </select>
      </div>

      <div className="glass-panel" style={{ padding: '24px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
              <th style={{ padding: '12px' }}>Title / Name</th>
              <th style={{ padding: '12px' }}>Status</th>
              <th style={{ padding: '12px' }}>Updated</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px', fontWeight: '600' }}>{item.title || item.name}</td>
                <td style={{ padding: '12px', color: 'var(--primary-accent)' }}>{item.status || 'active'}</td>
                <td style={{ padding: '12px', color: 'var(--text-muted)' }}>{new Date(item.updatedAt || Date.now()).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
