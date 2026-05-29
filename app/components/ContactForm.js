'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
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
      <div style={{ textAlign: 'center', padding: '3rem 2rem', background: 'var(--color-off-white)', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ fontSize: '4rem', color: '#10b981', marginBottom: '1rem' }}>?</div>
        <h3 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Message Sent!</h3>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>Thank you for reaching out. A member of our team will get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="btn btn--secondary">Send Another Message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: 'var(--color-off-white)', padding: '2.5rem', borderRadius: '12px' }}>
      <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Send a Message</h3>
      
      <div className="form-group">
        <label className="form-label">Full Name</label>
        <input type="text" name="name" className="form-input" required disabled={status === 'submitting'} />
      </div>
      
      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input type="email" name="email" className="form-input" required disabled={status === 'submitting'} />
      </div>
      
      <div className="form-group">
        <label className="form-label">Phone Number</label>
        <div style={{ display: 'flex' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', padding: '0 1rem', background: '#e2e8f0', border: '1px solid #cbd5e1', borderRight: 'none', borderRadius: '8px 0 0 8px', color: 'var(--color-gray-600)', fontWeight: 'bold' }}>+91</span>
          <input type="tel" name="phone" className="form-input" style={{ borderRadius: '0 8px 8px 0' }} placeholder="10-digit number" required disabled={status === 'submitting'} />
        </div>
      </div>
      
      <div className="form-group">
        <label className="form-label">Occupation</label>
        <input type="text" name="occupation" className="form-input" placeholder="e.g. Architect, Homeowner, Investor" required disabled={status === 'submitting'} />
      </div>
      
      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea name="message" className="form-textarea" rows="4" required disabled={status === 'submitting'}></textarea>
      </div>
      
      <button type="submit" className="btn btn--primary" disabled={status === 'submitting'} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
        {status === 'submitting' ? (
          <>
            <span className="spinner" style={{ width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></span>
            Sending...
            <style jsx>{
              @keyframes spin { to { transform: rotate(360deg); } }
            }</style>
          </>
        ) : 'Send Message'}
      </button>
    </form>
  );
}
