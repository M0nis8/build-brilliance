'use client';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function SwipeGallery({ pairs }) {
  return (
    <div style={{ position: 'relative' }}>
      <div 
        className="swipe-gallery"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '1.5rem',
          paddingBottom: '1.5rem',
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE/Edge */
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <style jsx>{`
          .swipe-gallery::-webkit-scrollbar {
            display: none; /* Chrome/Safari */
          }
        `}</style>
        
        {pairs.map((pair, index) => (
          <div 
            key={index} 
            style={{
              flex: '0 0 85%', /* Shows a peek of the next image */
              scrollSnapAlign: 'center',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <BeforeAfterSlider beforeImage={pair.before} afterImage={pair.after} />
            {pair.label && (
               <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'rgba(1, 24, 106, 0.95)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 'bold', border: '1px solid var(--color-accent)', zIndex: 10, pointerEvents: 'none' }}>
                 {pair.label}
               </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
        <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(0,0,0,0.05)', borderRadius: '20px' }}>
          ← Swipe to explore →
        </span>
      </div>
    </div>
  );
}
