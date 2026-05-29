import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import CTABanner from './components/CTABanner';
import ScrollReveal from './components/ScrollReveal';
import Image from 'next/image';
import SwipeGallery from './components/SwipeGallery';

const projectsData = [
    { id: 1, title: 'Luxury Alpine Residence', category: 'Residential', image: '/luxury-residence.png' },
    { id: 2, title: 'Apex Commercial Hub', category: 'Commercial', image: '/modern-office.png' },
    { id: 3, title: 'Modern Kitchen Remodel', category: 'Remodeling', image: '/interior-remodel.png' }
];

export const metadata = {
  title: 'Build Brilliance | Premium Construction & Renovation',
  description: 'World-class residential and commercial construction services. Experience unparalleled quality and design with Build Brilliance.'
};

const transformationPairs = [
  { before: '/old-kitchen.png', after: '/interior-remodel.png', label: 'Kitchen Remodel' },
  { before: '/old-kitchen.png', after: '/luxury-residence.png', label: 'Exterior Upgrade' },
  { before: '/interior-remodel.png', after: '/modern-office.png', label: 'Commercial Fitout' }
];

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
                    {projectsData.map(project => (
                        <div key={project.id} className="project-card" style={{ position: 'relative', height: '350px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(1, 24, 106, 0.95))', padding: '3rem 1.5rem 1.5rem', color: 'white', transition: 'padding 0.3s ease' }} className="project-card__content">
                                <span style={{ fontSize: '0.875rem', color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.category}</span>
                                <h3 style={{ margin: '0.5rem 0 0', fontSize: '1.25rem', color: 'white' }}>{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </div>
      </section>

      <section className="section container">
        <div className="section__header">
          <span className="section__eyebrow">Transformation</span>
          <h2 className="section__title">See The Difference</h2>
        </div>
        <ScrollReveal>
          <SwipeGallery pairs={transformationPairs} />
        </ScrollReveal>
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
