'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Hide header on studio and admin routes
  if (pathname?.startsWith('/studio') || pathname?.startsWith('/admin')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Design Center', href: '/design' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <Link href="/" className="header__logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image src="/brand-logo.png" alt="Build Brilliance" width={45} height={45} style={{ objectFit: 'contain' }} />
          <span style={{ color: 'var(--color-white)' }}>Build <span style={{ color: 'var(--color-accent)' }}>Brilliance</span></span>
        </Link>
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`nav__link ${pathname === link.href ? 'nav__link--active' : ''}`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav" style={{ gap: '1rem' }}>
            <Link href="/estimate" className="btn btn--secondary btn--sm nav__cta">Estimate</Link>
            <Link href="/quote" className="btn btn--primary btn--sm nav__cta">Get a Quote</Link>
        </div>
        
        <button 
          className={`nav__toggle ${isMenuOpen ? 'nav__toggle--open' : ''}`}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
        </button>
      </div>

      <div className={`nav__overlay ${isMenuOpen ? 'nav__overlay--open' : ''}`}>
        <div className="nav__overlay-inner">
          <ul className="nav__list">
             {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`nav__link ${pathname === link.href ? 'nav__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/quote" className="btn btn--primary nav__cta">Get a Quote</Link>
        </div>
      </div>
    </header>
  );
}
