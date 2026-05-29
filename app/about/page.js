import PageHero from '../components/PageHero';
import Image from 'next/image';

export const metadata = { 
  title: 'About Us | Build Brilliance',
  description: 'Learn about Build Brilliance, our history, core principles, and meet our leadership team of industry experts.'
};

export default function About() {
  return (
    <>
      <PageHero 
        title="About Build Brilliance" 
        subtitle="Building Excellence Since 2004"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} 
      />
      
      <section className="section container">
        <div className="section__header">
          <span className="section__eyebrow">Our Story</span>
          <h2 className="section__title">A Legacy of Excellence</h2>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>Build Brilliance started with a simple vision: to bring unparalleled quality and transparency to the construction industry. Over the past two decades, we've grown from a small residential remodeling crew into a full-scale construction firm handling multi-million dollar commercial projects.</p>
          <p>Our commitment to excellence remains unchanged. We believe in building not just structures, but lasting relationships with our clients.</p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Core Principles</span>
            <h2 className="section__title">Our Philosophy</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '🛡️', title: 'Uncompromising Safety', desc: 'Every project begins and ends with the well-being of our crew and clients.' },
              { icon: '💎', title: 'Premium Quality', desc: 'We source the finest materials and employ master craftsmen for flawless execution.' },
              { icon: '🤝', title: 'Complete Transparency', desc: 'No hidden fees. Honest timelines. You are informed at every step of the journey.' },
            ].map((value, idx) => (
              <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{value.title}</h3>
                <p style={{ color: 'var(--color-text-light)' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Leadership Team */}
      <section className="section container">
        <div className="section__header">
          <span className="section__eyebrow">The People</span>
          <h2 className="section__title">Meet Our Leadership</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { img: '/ceo-headshot.png', name: 'Marcus Sterling', title: 'Chief Executive Officer', bio: 'With 30 years in construction, Marcus drives the strategic vision of Build Brilliance.' },
            { img: '/architect-headshot.png', name: 'Elena Rostova', title: 'Lead Architect', bio: 'Elena brings award-winning modern design and sustainable architecture to every project.' },
            { img: '/manager-headshot.png', name: 'David Vance', title: 'Lead Project Manager', bio: 'David ensures every site operates with military precision, on time and under budget.' },
          ].map((member, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '0.25rem' }}>{member.name}</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1rem' }}>{member.title}</p>
              <p style={{ color: 'var(--color-text-light)' }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety & Sustainability Commitment */}
      <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>Our Commitment</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Building for the Future, Safely and Sustainably.</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>At Build Brilliance, we recognize our responsibility to the environment and to our workforce. We are proud to be fully LEED Certified builders.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>✓</span> Zero-incident safety culture
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>✓</span> Sourcing 100% sustainable lumber
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--color-accent)' }}>✓</span> Advanced waste-reduction protocols
              </li>
            </ul>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative', height: '500px', borderRadius: '16px', overflow: 'hidden' }}>
            <Image src="/interior-remodel.png" alt="Sustainability" fill style={{ objectFit: 'cover', opacity: 0.8 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--color-primary), transparent)' }}></div>
          </div>
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
