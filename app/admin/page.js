'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError('Invalid username or password');
      setLoading(false);
    } else {
      window.location.href = '/studio';
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--color-primary)' }}>
      <div style={{ background: 'var(--color-white)', padding: '3rem', borderRadius: '12px', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '2rem' }}>Build<span style={{ color: 'var(--color-accent)' }}>Brilliance</span> CMS</h1>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
           <div className="form-group" style={{ textAlign: 'left' }}>
              <label className="form-label">Username</label>
              <input type="text" className="form-input" value={username} onChange={(e) => setUsername(e.target.value)} required />
           </div>
           <div className="form-group" style={{ textAlign: 'left' }}>
              <label className="form-label">Password</label>
              <input type="password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
           </div>
           <button type="submit" className="btn btn--primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
             {loading ? 'Authenticating...' : 'Login to CMS'}
           </button>
        </form>
      </div>
    </div>
  );
}
