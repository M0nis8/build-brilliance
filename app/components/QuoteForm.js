'use client';
import { useState } from 'react';

export default function QuoteForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (res.ok) setStatus('success');
      else setStatus('idle'); // Could show error state here
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--color-off-white)', borderRadius: '12px' }}>
        <div style={{ fontSize: '5rem', color: '#10b981', marginBottom: '1rem' }}>?</div>
        <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Quote Request Submitted</h3>
        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '2rem' }}>We have received your project details. Our estimation team will review them and contact you shortly.</p>
        <button onClick={() => setStatus('idle')} className="btn btn--secondary">Submit Another Request</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: 'var(--color-off-white)', padding: '3rem', borderRadius: '12px' }}>
      <h2 className="section__title" style={{ fontSize: '1.75rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Project Details</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">First Name</label>
              <input type="text" name="firstName" className="form-input" required disabled={status === 'submitting'} />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Last Name</label>
              <input type="text" name="lastName" className="form-input" required disabled={status === 'submitting'} />
          </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-input" required disabled={status === 'submitting'} />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Phone</label>
              <input type="tel" name="phone" className="form-input" required disabled={status === 'submitting'} />
          </div>
      </div>
      <div className="form-group">
          <label className="form-label">Project Type</label>
          <select name="projectType" className="form-select" disabled={status === 'submitting'}>
              <option value="New Residential Construction">New Residential Construction</option>
              <option value="Commercial Build">Commercial Build</option>
              <option value="Major Renovation">Major Renovation</option>
          </select>
      </div>
      <div className="form-group">
          <label className="form-label">Detailed Description</label>
          <textarea name="description" className="form-textarea" rows="5" placeholder="Tell us about your vision, location, timeline, and any specific requirements..." required disabled={status === 'submitting'}></textarea>
      </div>
      <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'submitting'} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
        {status === 'submitting' ? (
          <>
            <span className="spinner" style={{ width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></span>
            Processing...
            <style jsx>{`
              @keyframes spin { to { transform: rotate(360deg); } }
            `}</style>
          </>
        ) : 'Submit Quote Request'}
      </button>
    </form>
  );
}
