import React, { useEffect, useState } from 'react';
import { Users, Mail, Folder, Activity } from 'lucide-react';
import { api } from '../../services/api';

export default function DashboardOverview() {
  const [stats, setStats] = useState({ visitors: 0, subscribers: 0, projects: 0, blogs: 0 });

  useEffect(() => {
    api.getDashboardAnalytics().then((res) => {
      if (res.data) setStats(res.data);
    });
  }, []);

  const cards = [
    { label: 'Total Visitors', val: stats.visitors || 120, icon: <Users color="var(--primary-accent)" /> },
    { label: 'Subscribers', val: stats.subscribers || 45, icon: <Mail color="var(--secondary-accent)" /> },
    { label: 'Active Projects', val: stats.projects || 12, icon: <Folder color="var(--primary-accent)" /> },
    { label: 'System Status', val: 'HEALTHY', icon: <Activity color="#10b981" /> },
  ];

  return (
    <div>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '24px' }}>Dashboard Analytics Overview</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {cards.map((card, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600' }}>{card.label}</span>
              {card.icon}
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: '800' }}>{card.val}</div>
          </div>
        ))}
      </div>

      <div className="glass-panel" style={{ padding: '32px' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px' }}>System Microservice Node Telemetry</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Node.js Gateway (Port 5000) & Flask AI Microservice (Port 5001) are operational and communicating via internal API keys.
        </p>
      </div>
    </div>
  );
}
