'use client';

export default function TestimonialSlider({ testimonials }) {
  return (
    <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
      <div 
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '2rem',
          paddingBottom: '2rem',
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>
        {testimonials.map((t, index) => (
          <div 
            key={index} 
            style={{
              flex: '0 0 100%',
              scrollSnapAlign: 'center',
              background: 'white',
              padding: '3rem',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              textAlign: 'center',
              borderTop: '4px solid var(--color-accent)'
            }}
          >
            <div style={{ color: 'var(--color-accent)', fontSize: '2rem', marginBottom: '1rem' }}>★★★★★</div>
            <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>"{t.quote}"</p>
            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>{t.author}</h4>
            <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '0.875rem', textTransform: 'uppercase' }}>{t.role}</span>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
        <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(0,0,0,0.05)', borderRadius: '20px' }}>
          ← Swipe to read more reviews →
        </span>
      </div>
    </div>
  );
}
