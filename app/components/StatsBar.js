'use client';
import { useState, useEffect, useRef } from 'react';

const statsData = [
  { number: 500, suffix: '+', label: 'Projects Completed' },
  { number: 20, suffix: '+', label: 'Years Experience' },
  { number: 150, suffix: '+', label: 'Team Members' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' }
];

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 }); /* Lowered from 0.5 */
    
    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={domRef}>
      <div className="stats__grid">
        {statsData.map((stat, i) => (
          <div key={i} className="stats__item">
            <div className="stats__number">
              {isVisible ? <CountUp to={stat.number} /> : '0'}
              {stat.suffix}
            </div>
            <div className="stats__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CountUp({ to }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTimestamp = null;
    const duration = 4000;
    const end = parseInt(to, 10);
    let animationFrameId;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo function for a fast start and smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    animationFrameId = window.requestAnimationFrame(step);
    
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [to]);
  return <span>{count}</span>;
}
