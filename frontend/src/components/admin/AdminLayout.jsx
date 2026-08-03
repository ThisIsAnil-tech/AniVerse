import React, { useState } from 'react';
import { LayoutDashboard, Database, Globe, Shield, ArrowLeft } from 'lucide-react';
import DashboardOverview from './DashboardOverview';
import CMSManager from './CMSManager';
import SeoManager from './SeoManager';
import SecurityPanel from './SecurityPanel';

export default function AdminLayout({ onBackToSite }) {
  const [activeTab, setActiveTab] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={18} /> },
    { id: 'cms', label: 'CMS Content', icon: <Database size={18} /> },
    { id: 'seo', label: 'SEO & Feeds', icon: <Globe size={18} /> },
    { id: 'security', label: 'Security & Audit', icon: <Shield size={18} /> },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-main)', display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        borderRight: '1px solid var(--border-color)',
        padding: '32px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        background: '#0a0b0e',
      }}>
        <button onClick={onBackToSite} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <ArrowLeft size={16} /> Back to Website
        </button>

        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '4px' }}>Control Center</h3>
          <span style={{ fontSize: '0.75rem', color: 'var(--secondary-accent)', fontWeight: '700' }}>ADMINISTRATION</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '12px',
                background: activeTab === item.id ? 'var(--secondary-accent)' : 'transparent',
                color: activeTab === item.id ? '#fff' : 'var(--text-muted)',
                fontWeight: '600',
                fontSize: '0.95rem',
                textAlign: 'left',
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content View */}
      <main style={{ flex: 1, padding: '40px' }}>
        {activeTab === 'overview' && <DashboardOverview />}
        {activeTab === 'cms' && <CMSManager />}
        {activeTab === 'seo' && <SeoManager />}
        {activeTab === 'security' && <SecurityPanel />}
      </main>
    </div>
  );
}
