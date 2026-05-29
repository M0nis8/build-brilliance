import React from 'react';

export default function SplitHero({ leftEyebrow, leftTitle, leftSubtitle, rightEyebrow, rightTitle, rightContent }) {
  return (
    <section style={{ paddingTop: '10rem', paddingBottom: '4rem', position: 'relative' }}>
      <video 
        autoPlay loop muted playsInline 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      >
        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--grad-blue-2)', opacity: 0.8, zIndex: 1 }}></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        
        {/* Left Half: Hero Content */}
        <div style={{ paddingBottom: '2rem' }}>
          {leftEyebrow && (
            <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>
              {leftEyebrow}
            </span>
          )}
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: '1.1', marginBottom: '1.5rem', fontWeight: 'bold' }}>
            {leftTitle}
          </h1>
          {leftSubtitle && (
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', borderLeft: '4px solid var(--color-accent)', paddingLeft: '1rem' }}>
              {leftSubtitle}
            </p>
          )}
        </div>

        {/* Right Half: Content Card with Overlap Effect */}
        <div style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', transform: 'translateY(3rem)', marginBottom: '1rem' }}>
          {rightEyebrow && (
            <span className="section__eyebrow" style={{ display: 'block', marginBottom: '0.5rem' }}>
              {rightEyebrow}
            </span>
          )}
          {rightTitle && (
            <h2 className="section__title" style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'left' }}>
              {rightTitle}
            </h2>
          )}
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-gray-600)' }}>
            {rightContent}
          </div>
        </div>

      </div>
    </section>
  );
}
