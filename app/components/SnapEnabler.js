'use client';
import { useEffect } from 'react';

export default function SnapEnabler() {
  useEffect(() => {
    // Enable snap scrolling on the root element
    document.documentElement.style.scrollSnapType = 'y mandatory';
    // Ensure smooth scrolling doesn't fight the snap snapping occasionally
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Clean up when leaving the homepage
      document.documentElement.style.scrollSnapType = 'none';
    };
  }, []);
  return null;
}
