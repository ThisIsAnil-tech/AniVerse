import React, { useState } from 'react';
import { ShieldCheck, Key, Lock } from 'lucide-react';

export default function SecurityPanel() {
  const [cspEnabled, setCspEnabled] = useState(true);

  return (
    <div>
      <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '24px' }}>Security Controls & Audit Center</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <div className="glass-panel" style={{ padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <ShieldCheck color="var(--primary-accent)" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Content Security Policy</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
            Enforces strict HTTP security headers, framing restrictions, and XSS script execution guards.
          </p>
          <button onClick={() => setCspEnabled(!cspEnabled)} className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
            Status: {cspEnabled ? 'ACTIVE (Protected)' : 'DISABLED'}
          </button>
        </div>

        <div className="glass-panel" style={{ padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Key color="var(--secondary-accent)" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Two-Factor Authentication</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
            TOTP authenticator app integration for SuperAdmin authentication.
          </p>
          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Setup 2FA Authenticator
          </button>
        </div>
      </div>
    </div>
  );
}
