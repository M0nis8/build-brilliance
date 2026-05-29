'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname?.startsWith('/studio') || pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <Link href="/" className="footer__logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Image src="/brand-logo.png" alt="Build Brilliance" width={45} height={45} style={{ objectFit: 'contain' }} />
            <span>Build <span style={{ color: 'var(--color-accent)' }}>Brilliance</span></span>
          </Link>
          <p className="footer__brand-description">Premium construction contracting services, delivering excellence since 2004.</p>
        </div>
        <div>
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__list">
            <li><Link href="/about" className="footer__link">About Us</Link></li>
            <li><Link href="/projects" className="footer__link">Our Portfolio</Link></li>
            <li><Link href="/blog" className="footer__link">Blog & News</Link></li>
            <li><Link href="/contact" className="footer__link">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="footer__heading">Services</h3>
          <ul className="footer__list">
            <li><Link href="/services" className="footer__link">Residential Construction</Link></li>
            <li><Link href="/services" className="footer__link">Commercial Build</Link></li>
            <li><Link href="/services" className="footer__link">Renovations</Link></li>
            <li><Link href="/services" className="footer__link">Green Building</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="footer__heading">Contact</h3>
          <div className="footer__contact-item">
             <p>123 Construction Ave<br />Building City, BC 10001</p>
          </div>
          <div className="footer__contact-item">
             <p>555-123-4567</p>
          </div>
          <div className="footer__contact-item">
             <p>info@buildbrilliance.com</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Build Brilliance. All rights reserved.</p>
        <p>Built with excellence</p>
      </div>
    </footer>
  );
}
