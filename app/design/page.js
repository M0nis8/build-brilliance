import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import Image from 'next/image';

export const metadata = { 
  title: 'Design Center | Build Brilliance',
  description: 'Discover our architectural philosophy and explore our premium material showcase featuring marble, timber, and polished concrete.'
};

export default function DesignCenter() {
  const materials = [
    { name: 'Calacatta Gold Marble', desc: 'Imported Italian stone featuring warm gold and grey veining. Perfect for statement kitchen islands and luxury master baths.', img: '/marble-texture.png' },
    { name: 'Reclaimed Oak Timber', desc: 'Sustainable, rich, and historically significant. We source the finest aged timber to bring warmth and natural texture to modern spaces.', img: '/timber-texture.png' },
    { name: 'Architectural Concrete', desc: 'Minimalist, smooth, and structural. Our polished concrete finishes provide the perfect industrial-chic foundation for contemporary designs.', img: '/concrete-texture.png' }
  ];

  return (
    <>
      <PageHero 
        title="Design Center" 
        subtitle="Where visionary architecture meets uncompromising materials."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Design Center' }]} 
      />
      
      {/* Architectural Philosophy */}
      <section className="section container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>Our Philosophy</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2', color: 'var(--color-primary)' }}>Form, Function, and Enduring Beauty.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              We believe that true luxury lies in the spaces between the walls. It is how light plays across a room at sunset, how a floor feels underfoot, and how a structure breathes with its environment.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
              Our architectural philosophy strips away the unnecessary, focusing entirely on spatial harmony, sustainable integration, and the raw, natural beauty of premium materials.
            </p>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative', height: '600px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <Image src="/modern-office.png" alt="Architectural Philosophy" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Premium Materials Showcase */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">The Foundation</span>
            <h2 className="section__title">Premium Materials Showcase</h2>
            <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
              We scour the globe to source materials that don't just look beautiful, but tell a story and stand the test of time.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {materials.map((mat, index) => (
              <div key={index} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ position: 'relative', height: '250px', width: '100%' }}>
                  <Image src={mat.img} alt={mat.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>{mat.name}</h3>
                  <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>{mat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Ready to elevate your space?"
        description="Schedule a consultation with our lead architects to discuss your vision."
        buttonText="Book a Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
