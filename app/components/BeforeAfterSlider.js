'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef();

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div 
      className="before-after-container" 
      ref={containerRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      style={{
        position: 'relative',
        width: '100%',
        height: '500px',
        overflow: 'hidden',
        borderRadius: '16px',
        cursor: isDragging ? 'grabbing' : 'ew-resize',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}
    >
      {/* After Image (Background) */}
      <Image src={afterImage} alt="After" fill style={{ objectFit: 'cover' }} draggable={false} />
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(212, 175, 55, 0.9)', color: '#01186a', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 'bold', zIndex: 2 }}>AFTER</div>

      {/* Before Image (Clipped) */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
        }}
      >
        <Image src={beforeImage} alt="Before" fill style={{ objectFit: 'cover' }} draggable={false} />
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 'bold' }}>BEFORE</div>
      </div>

      {/* Slider Handle */}
      <div 
        className="slider-handle"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPosition}%`,
          width: '4px',
          background: 'var(--color-accent)',
          transform: 'translateX(-50%)',
          zIndex: 3
        }}
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px',
          background: 'var(--color-accent)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 15px rgba(0,0,0,0.5)',
          color: 'var(--color-primary)'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 9l-4 3 4 3M16 9l4 3-4 3"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
