'use client';
import { useState } from 'react';

export default function ServiceAccordion({ services }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      {services.map((service, index) => (
        <div key={index} style={{ marginBottom: '1rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
          <button 
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: openIndex === index ? 'var(--color-primary)' : 'white', color: openIndex === index ? 'white' : 'var(--color-text)', border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s ease' }}
          >
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span>{service.icon}</span> {service.title}
            </span>
            <span style={{ fontSize: '1.5rem', color: openIndex === index ? 'var(--color-accent)' : 'inherit' }}>{openIndex === index ? '−' : '+'}</span>
          </button>
          <div style={{ maxHeight: openIndex === index ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease', background: '#f8f9fa' }}>
            <div style={{ padding: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', color: 'var(--color-text-light)' }}>{service.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--color-accent)' }}>✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
