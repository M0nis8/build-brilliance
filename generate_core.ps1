$ErrorActionPreference = "Stop"

# Create directories
New-Item -Path "c:\projects\BuildBrilliance\app\components" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\about" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\services" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\projects" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\blog" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\blog\[slug]" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\contact" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\estimate" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\quote" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\admin" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\studio" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\studio\[[...index]]" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\api\auth\[...nextauth]" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\api\quote" -ItemType Directory -Force | Out-Null
New-Item -Path "c:\projects\BuildBrilliance\app\api\contact" -ItemType Directory -Force | Out-Null

# 1. layout.js
Set-Content -Path "c:\projects\BuildBrilliance\app\layout.js" -Value @"
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: {
    template: '%s | BuildBrilliance',
    default: 'BuildBrilliance | Premium Construction Contracting',
  },
  description: 'Premium construction contracting services. We build excellence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`\${outfit.variable} \${inter.variable}`}>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
"@

# 2. Header component
Set-Content -Path "c:\projects\BuildBrilliance\app\components\Header.js" -Value @"
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`header \${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <Link href="/" className="header__logo">
          Build<span>Brilliance</span>
        </Link>
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`nav__link \${pathname === link.href ? 'nav__link--active' : ''}`}
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
          className={`nav__toggle \${isMenuOpen ? 'nav__toggle--open' : ''}`}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
        </button>
      </div>

      <div className={`nav__overlay \${isMenuOpen ? 'nav__overlay--open' : ''}`}>
        <div className="nav__overlay-inner">
          <ul className="nav__list">
             {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`nav__link \${pathname === link.href ? 'nav__link--active' : ''}`}
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
"@

# 3. Footer component
Set-Content -Path "c:\projects\BuildBrilliance\app\components\Footer.js" -Value @"
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <Link href="/" className="footer__logo">Build<span>Brilliance</span></Link>
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
        <p>&copy; {new Date().getFullYear()} BuildBrilliance. All rights reserved.</p>
        <p>Built with excellence</p>
      </div>
    </footer>
  );
}
"@

# 4. Hero component
Set-Content -Path "c:\projects\BuildBrilliance\app\components\Hero.js" -Value @"
import Link from 'next/link';

export default function Hero({ title, subtitle, primaryAction, secondaryAction, isHomePage = false }) {
  return (
    <section className={`hero \${!isHomePage ? 'hero--page' : ''}`}>
      <div className="hero__overlay"></div>
      <div className="hero__content">
        {title && <h1 className="hero__title">{title}</h1>}
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {(primaryAction || secondaryAction) && (
          <div className="hero__actions">
            {primaryAction && (
              <Link href={primaryAction.href} className="btn btn--primary btn--lg">
                {primaryAction.text}
              </Link>
            )}
            {secondaryAction && (
              <Link href={secondaryAction.href} className="btn btn--secondary btn--lg">
                {secondaryAction.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
"@

# 5. PageHero Component
Set-Content -Path "c:\projects\BuildBrilliance\app\components\PageHero.js" -Value @"
import Link from 'next/link';

export default function PageHero({ title, subtitle, breadcrumbs }) {
  return (
    <section className="hero hero--page">
      <div className="hero__overlay"></div>
      <div className="hero__content" style={{paddingTop: '60px'}}>
        {breadcrumbs && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                {index > 0 && <span className="breadcrumbs__separator"> / </span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="breadcrumbs__current" aria-current="page">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href}>{crumb.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
"@

# 6. CTABanner Component
Set-Content -Path "c:\projects\BuildBrilliance\app\components\CTABanner.js" -Value @"
import Link from 'next/link';

export default function CTABanner({ title, description, buttonText, buttonHref }) {
  return (
    <section className="cta-banner">
      <div className="cta-banner__content">
        <h2 className="cta-banner__title">{title}</h2>
        <p className="cta-banner__description">{description}</p>
        <Link href={buttonHref} className="btn btn--primary btn--lg cta-banner__btn">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
"@

# 7. ScrollReveal Component
Set-Content -Path "c:\projects\BuildBrilliance\app\components\ScrollReveal.js" -Value @"
'use client';
import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, delay = 0, threshold = 0.1, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold });
    
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return (
    <div
      className={`reveal \${isVisible ? 'reveal--visible' : ''} \${className}`}
      ref={domRef}
      style={{ transitionDelay: `\${delay}ms` }}
    >
      {children}
    </div>
  );
}
"@

# 8. StatsBar Component
Set-Content -Path "c:\projects\BuildBrilliance\app\components\StatsBar.js" -Value @"
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
    }, { threshold: 0.5 });
    
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
    let start = 0;
    const end = parseInt(to, 10);
    if (start === end) return;
    let incrementTime = (2000 / end);
    let timer = setInterval(() => {
      start += Math.ceil(end / 50); // Speed up counting for large numbers
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [to]);
  return <span>{count}</span>;
}
"@

# 9. Home Page
Set-Content -Path "c:\projects\BuildBrilliance\app\page.js" -Value @"
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import CTABanner from './components/CTABanner';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Hero 
        title={<>Build Your Vision With <span>Brilliance</span></>}
        subtitle="Premium construction and contracting services delivering excellence, innovation, and reliability on every project."
        primaryAction={{ text: 'Get a Quote', href: '/quote' }}
        secondaryAction={{ text: 'View Portfolio', href: '/projects' }}
        isHomePage={true}
      />
      <StatsBar />
      
      <section className="section container">
        <div className="section__header">
          <span className="section__eyebrow">Our Services</span>
          <h2 className="section__title">Comprehensive Construction Solutions</h2>
        </div>
        <ScrollReveal>
          <div className="services__grid">
             <div className="service-card">
                <div className="service-card__icon">🏡</div>
                <h3 className="service-card__title">Residential</h3>
                <p className="service-card__description">Custom homes and renovations built to perfection.</p>
             </div>
             <div className="service-card">
                <div className="service-card__icon">🏢</div>
                <h3 className="service-card__title">Commercial</h3>
                <p className="service-card__description">State-of-the-art offices and retail spaces.</p>
             </div>
             <div className="service-card">
                <div className="service-card__icon">🔨</div>
                <h3 className="service-card__title">Remodeling</h3>
                <p className="service-card__description">Modernizing spaces with exceptional craftsmanship.</p>
             </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="section section--gray">
        <div className="container">
            <div className="section__header">
                <span className="section__eyebrow">Featured Work</span>
                <h2 className="section__title">Recent Projects</h2>
            </div>
            <ScrollReveal>
                <div className="projects__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[1, 2, 3].map(i => (
                        <div key={i} style={{ height: '250px', background: 'linear-gradient(135deg, #3d5a80, #1a1a2e)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                            Project {i}
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </div>
      </section>

      <CTABanner 
        title="Ready to Start Your Project?"
        description="Contact us today for a consultation and let us bring your vision to life."
        buttonText="Get a Free Quote"
        buttonHref="/quote"
      />
    </>
  );
}
"@

# Append missing CSS to globals.css
Add-Content -Path "c:\projects\BuildBrilliance\app\globals.css" -Value @"

/* Additional Forms & Layout CSS added programmatically */
.form-group {
    margin-bottom: 1.5rem;
}
.form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}
.form-input, .form-textarea, .form-select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius-md);
    font-family: var(--font-body);
}
.form-input:focus, .form-textarea:focus, .form-select:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accent-light);
}

.progress-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    position: relative;
}
.progress-bar::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--color-gray-200);
    z-index: 1;
}
.progress-bar__step {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--color-gray-200);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    position: relative;
    font-size: 14px;
}
.progress-bar__step--active {
    background: var(--color-accent);
    color: var(--color-primary);
    font-weight: bold;
}

.estimator__result {
    background: var(--color-off-white);
    padding: 2rem;
    border-radius: var(--radius-lg);
    text-align: center;
    border: 2px solid var(--color-accent);
}
.estimator__range {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--color-primary);
    font-family: var(--font-heading);
}

.timeline {
    border-left: 2px solid var(--color-accent);
    padding-left: 2rem;
    margin-left: 1rem;
}
.timeline__item {
    position: relative;
    margin-bottom: 2rem;
}
.timeline__item::before {
    content: '';
    position: absolute;
    left: -2.4rem;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-accent);
    border: 3px solid var(--color-white);
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}
.blog-card {
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: transform var(--transition-fast);
}
.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
}
.blog-card__content {
    padding: 1.5rem;
}
"@

Write-Output "Script generation part 1 complete."
