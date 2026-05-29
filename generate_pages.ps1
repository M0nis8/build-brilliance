$ErrorActionPreference = "Stop"

# 1. About Page
Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\about\page.js" -Value @"
import PageHero from '../components/PageHero';

export const metadata = { title: 'About Us' };

export default function About() {
  return (
    <>
      <PageHero 
        title="About BuildBrilliance" 
        subtitle="Building Excellence Since 2004"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} 
      />
      
      <section className="section container">
        <div className="section__header">
          <h2 className="section__title">Our Story</h2>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '1rem' }}>BuildBrilliance started with a simple vision: to bring unparalleled quality and transparency to the construction industry. Over the past two decades, we've grown from a small residential remodeling crew into a full-scale construction firm handling multi-million dollar commercial projects.</p>
          <p>Our commitment to excellence remains unchanged. We believe in building not just structures, but lasting relationships with our clients.</p>
        </div>
      </section>

      <section className="section section--gray container">
        <h2 className="section__title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Journey</h2>
        <div className="timeline" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="timeline__item">
            <h3 style={{ color: 'var(--color-primary)' }}>2004 - Founded</h3>
            <p>Started as a residential renovation company.</p>
          </div>
          <div className="timeline__item">
            <h3 style={{ color: 'var(--color-primary)' }}>2010 - Commercial Expansion</h3>
            <p>Took on our first major commercial office build.</p>
          </div>
          <div className="timeline__item">
            <h3 style={{ color: 'var(--color-primary)' }}>2016 - Green Certification</h3>
            <p>Became LEED certified builders focusing on sustainability.</p>
          </div>
          <div className="timeline__item">
            <h3 style={{ color: 'var(--color-primary)' }}>2024 - 500+ Projects</h3>
            <p>Celebrating our 500th successful project completion.</p>
          </div>
        </div>
      </section>
    </>
  );
}
"@

# 2. Services Page
Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\services\page.js" -Value @"
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

export const metadata = { title: 'Our Services' };

export default function Services() {
  const services = [
    { title: 'Residential Construction', desc: 'Custom homes, villas, and modern residential complexes built to your exact specifications with premium finishes.', icon: '🏡' },
    { title: 'Commercial Construction', desc: 'State-of-the-art office buildings, retail spaces, and warehouses designed for operational efficiency.', icon: '🏢' },
    { title: 'Renovation & Remodeling', desc: 'Complete home makeovers, kitchen and bathroom renovations that breathe new life into your property.', icon: '🔨' },
    { title: 'Project Management', desc: 'End-to-end management ensuring your project is delivered on time, within budget, and to standard.', icon: '📊' },
    { title: 'Interior Design', desc: 'Seamless integration of architectural design and premium interior finishing.', icon: '✨' },
    { title: 'Green Building', desc: 'Sustainable, energy-efficient construction using eco-friendly materials and solar integration.', icon: '🌱' }
  ];

  return (
    <>
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive construction solutions tailored to your needs."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]} 
      />
      
      <section className="section container">
        <div className="services__grid">
          {services.map((s, i) => (
             <div key={i} className="service-card">
                <div className="service-card__icon" style={{ fontSize: '2rem' }}>{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__description">{s.desc}</p>
             </div>
          ))}
        </div>
      </section>
      
      <CTABanner 
        title="Have a specific project in mind?"
        description="Try our cost estimator to get a rough idea, or request a formal quote."
        buttonText="Try Cost Estimator"
        buttonHref="/estimate"
      />
    </>
  );
}
"@

# 3. Projects Page
Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\projects\page.js" -Value @"
import PageHero from '../components/PageHero';

export const metadata = { title: 'Portfolio' };

export default function Projects() {
  return (
    <>
      <PageHero 
        title="Our Portfolio" 
        subtitle="A showcase of our finest construction projects."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]} 
      />
      <section className="section container">
        <div className="projects__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} style={{ height: '300px', background: 'var(--color-primary)', borderRadius: '12px', display: 'flex', flexDirection: 'column', padding: '1rem', color: 'white' }}>
                    <div style={{ flex: 1, background: 'var(--color-secondary)', borderRadius: '8px', marginBottom: '1rem' }}></div>
                    <h3 style={{ margin: 0 }}>Project Title {i}</h3>
                    <p style={{ margin: 0, opacity: 0.7, fontSize: '0.9rem' }}>Commercial</p>
                </div>
            ))}
        </div>
      </section>
    </>
  );
}
"@

# 4. Blog Listing Page
Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\blog\page.js" -Value @"
import PageHero from '../components/PageHero';
import Link from 'next/link';

export const metadata = { title: 'Blog & News' };

export default function Blog() {
  return (
    <>
      <PageHero 
        title="Construction Insights" 
        subtitle="News, tips, and updates from the BuildBrilliance team."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} 
      />
      <section className="section container">
        <div className="blog-grid">
            {[1, 2, 3, 4].map(i => (
                <article key={i} className="blog-card">
                    <div style={{ height: '200px', background: 'var(--color-gray-200)' }}></div>
                    <div className="blog-card__content">
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase' }}>Industry News</span>
                        <h3 style={{ margin: '0.5rem 0' }}><Link href={`/blog/post-\${i}`}>The Future of Sustainable Construction \${i}</Link></h3>
                        <p style={{ color: 'var(--color-gray-500)', fontSize: '0.9rem', marginBottom: '1rem' }}>Learn how new materials are changing the way we build for a greener tomorrow.</p>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)' }}>Oct 12, 2024 • 5 min read</div>
                    </div>
                </article>
            ))}
        </div>
      </section>
    </>
  );
}
"@

# 5. Blog Post Detail Page
Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\blog\[slug]\page.js" -Value @"
import PageHero from '../../components/PageHero';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return { title: `Post: \${slug}` };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    
    return (
        <>
            <PageHero 
                title="The Future of Sustainable Construction" 
                breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Article' }]} 
            />
            <section className="section container" style={{ maxWidth: '800px' }}>
                <div style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--color-gray-500)' }}>
                    <span>By Admin</span> | <span>Oct 12, 2024</span>
                </div>
                <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>This is a placeholder for the blog content representing <strong>{slug}</strong>. Once Sanity CMS is connected, this will be populated with rich text content from the database.</p>
                    <p style={{ marginBottom: '1.5rem' }}>Sustainable construction is no longer just a buzzword; it's a necessity. From solar-integrated roofs to advanced insulation materials, the industry is rapidly evolving.</p>
                    <Link href="/blog" className="btn btn--outline" style={{ marginTop: '2rem' }}>&larr; Back to all posts</Link>
                </div>
            </section>
        </>
    );
}
"@

# 6. Contact Page
Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\contact\page.js" -Value @"
import PageHero from '../components/PageHero';

export const metadata = { title: 'Contact Us' };

export default function Contact() {
  return (
    <>
      <PageHero 
        title="Get in Touch" 
        subtitle="We're here to answer your questions and discuss your next project."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} 
      />
      <section className="section container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
        <div>
            <h2 className="section__title" style={{ fontSize: '2rem' }}>Contact Information</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--color-gray-500)' }}>Reach out to us directly using the information below.</p>
            
            <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--color-primary)' }}>Address</h4>
                <p style={{ color: 'var(--color-gray-600)' }}>123 Construction Ave<br/>Building City, BC 10001</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--color-primary)' }}>Phone</h4>
                <p style={{ color: 'var(--color-gray-600)' }}>555-123-4567</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--color-primary)' }}>Email</h4>
                <p style={{ color: 'var(--color-gray-600)' }}>info@buildbrilliance.com</p>
            </div>
        </div>
        
        <div style={{ background: 'var(--color-off-white)', padding: '2.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Send a Message</h3>
            <form>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-input" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" rows="4" required></textarea>
                </div>
                <button type="button" className="btn btn--primary">Send Message</button>
            </form>
        </div>
      </section>
    </>
  );
}
"@

# 7. Estimator Page
Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\estimate\page.js" -Value @"
'use client';
import { useState } from 'react';
import PageHero from '../components/PageHero';
import Link from 'next/link';

export default function Estimate() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ type: 'residential', sqft: '', quality: 'standard' });
  const [result, setResult] = useState(null);

  const calculateEstimate = () => {
      const baseRate = data.type === 'residential' ? 150 : data.type === 'commercial' ? 200 : 120;
      const qualityMult = data.quality === 'standard' ? 1 : data.quality === 'premium' ? 1.3 : 1.6;
      const total = parseInt(data.sqft || 0) * baseRate * qualityMult;
      setResult(total);
      setStep(4);
  };

  return (
    <>
      <PageHero title="Cost Estimator" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Estimator' }]} />
      <section className="section container" style={{ maxWidth: '600px' }}>
        <div className="progress-bar">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className={`progress-bar__step \${step >= i ? 'progress-bar__step--active' : ''}`}>{i}</div>
            ))}
        </div>
        
        <div style={{ background: 'var(--color-off-white)', padding: '2.5rem', borderRadius: '12px', minHeight: '350px' }}>
            {step === 1 && (
                <div>
                    <h3 style={{ marginBottom: '1.5rem' }}>Project Type</h3>
                    <select className="form-select" value={data.type} onChange={e => setData({...data, type: e.target.value})}>
                        <option value="residential">Residential Build</option>
                        <option value="commercial">Commercial Build</option>
                        <option value="renovation">Renovation</option>
                    </select>
                    <button className="btn btn--primary" style={{ marginTop: '2rem' }} onClick={() => setStep(2)}>Next Step</button>
                </div>
            )}
            {step === 2 && (
                <div>
                    <h3 style={{ marginBottom: '1.5rem' }}>Size & Dimensions</h3>
                    <div className="form-group">
                        <label className="form-label">Total Built-up Area (Sq.Ft)</label>
                        <input type="number" className="form-input" value={data.sqft} onChange={e => setData({...data, sqft: e.target.value})} />
                    </div>
                    <button className="btn btn--outline" style={{ marginRight: '1rem' }} onClick={() => setStep(1)}>Back</button>
                    <button className="btn btn--primary" onClick={() => setStep(3)} disabled={!data.sqft}>Next Step</button>
                </div>
            )}
            {step === 3 && (
                <div>
                    <h3 style={{ marginBottom: '1.5rem' }}>Finish Quality</h3>
                    <select className="form-select" value={data.quality} onChange={e => setData({...data, quality: e.target.value})}>
                        <option value="standard">Standard (Basic finishes)</option>
                        <option value="premium">Premium (High-end finishes)</option>
                        <option value="luxury">Luxury (Custom, imported finishes)</option>
                    </select>
                    <div style={{ marginTop: '2rem' }}>
                        <button className="btn btn--outline" style={{ marginRight: '1rem' }} onClick={() => setStep(2)}>Back</button>
                        <button className="btn btn--primary" onClick={calculateEstimate}>Calculate Estimate</button>
                    </div>
                </div>
            )}
            {step === 4 && result !== null && (
                <div className="estimator__result">
                    <h3>Estimated Cost Range</h3>
                    <p style={{ margin: '1rem 0', color: 'var(--color-gray-500)' }}>Based on your inputs, your project may cost between:</p>
                    <div className="estimator__range">
                        $\{(result * 0.85).toLocaleString(undefined, {maximumFractionDigits:0})} - $\{(result * 1.15).toLocaleString(undefined, {maximumFractionDigits:0})}
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-gray-400)', marginTop: '2rem' }}>*This is a rough estimate and does not constitute a binding quote.</p>
                    <Link href="/quote" className="btn btn--primary" style={{ marginTop: '1.5rem', width: '100%' }}>Get a Formal Quote</Link>
                </div>
            )}
        </div>
      </section>
    </>
  );
}
"@

# 8. Quote Page
Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\quote\page.js" -Value @"
import PageHero from '../components/PageHero';
import Link from 'next/link';

export const metadata = { title: 'Get a Quote' };

export default function Quote() {
  return (
    <>
      <PageHero title="Request a Formal Quote" subtitle="Provide details about your project to get a comprehensive proposal." breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Quote' }]} />
      <section className="section container" style={{ maxWidth: '800px' }}>
         <div style={{ background: 'var(--color-off-white)', padding: '3rem', borderRadius: '12px' }}>
            <h2 className="section__title" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Project Details</h2>
            <form action="/api/quote" method="POST">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-input" required />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-input" required />
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Email</label>
                        <input type="email" className="form-input" required />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Phone</label>
                        <input type="tel" className="form-input" required />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Project Type</label>
                    <select className="form-select">
                        <option>New Residential Construction</option>
                        <option>Commercial Build</option>
                        <option>Major Renovation</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Detailed Description</label>
                    <textarea className="form-textarea" rows="5" placeholder="Tell us about your vision, location, timeline, and any specific requirements..." required></textarea>
                </div>
                <button type="button" className="btn btn--primary btn--lg" style={{ width: '100%' }}>Submit Quote Request</button>
            </form>
         </div>
      </section>
    </>
  );
}
"@

# 9. Admin Page
Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\admin\page.js" -Value @"
export const metadata = { title: 'Admin Login' };

export default function Admin() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--color-primary)' }}>
      <div style={{ background: 'var(--color-white)', padding: '3rem', borderRadius: '12px', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '2rem' }}>Build<span>Brilliance</span> CMS</h1>
        <form>
           <div className="form-group" style={{ textAlign: 'left' }}>
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" />
           </div>
           <div className="form-group" style={{ textAlign: 'left' }}>
              <label className="form-label">Password</label>
              <input type="password" className="form-input" />
           </div>
           <button type="button" className="btn btn--primary" style={{ width: '100%', marginTop: '1rem' }}>Login to CMS</button>
        </form>
      </div>
    </div>
  );
}
"@

# 10. API Routes (Stubs for now, so Next.js doesn't crash)
Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\api\quote\route.js" -Value @"
import { NextResponse } from 'next/server';
export async function POST(req) {
    return NextResponse.json({ success: true, message: 'Quote request received' });
}
"@

Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\api\contact\route.js" -Value @"
import { NextResponse } from 'next/server';
export async function POST(req) {
    return NextResponse.json({ success: true, message: 'Message sent' });
}
"@

# 11. Studio Page
Set-Content -LiteralPath "c:\projects\BuildBrilliance\app\studio\[[...index]]\page.js" -Value @"
'use client';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
"@

Write-Output "Script generation part 2 complete."
