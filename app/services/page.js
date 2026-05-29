import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import ServiceAccordion from '../components/ServiceAccordion';
import TestimonialSlider from '../components/TestimonialSlider';

export const metadata = { 
  title: 'Our Services | Build Brilliance',
  description: 'Explore our premium construction services including residential builds, commercial development, and luxury renovations.'
};

export default function Services() {
  const servicesDetailed = [
    { 
      title: 'Residential Construction', 
      desc: 'Custom homes, villas, and modern residential complexes built to your exact specifications with premium finishes.', 
      icon: '🏡',
      features: ['Architectural Design & Planning', 'Permitting & City Approvals', 'Premium Material Sourcing', 'Turnkey Construction & Handover']
    },
    { 
      title: 'Commercial Construction', 
      desc: 'State-of-the-art office buildings, retail spaces, and warehouses designed for operational efficiency.', 
      icon: '🏢',
      features: ['Office Buildings & Corporate Parks', 'Retail & Showrooms', 'Structural Engineering', 'HVAC & MEP Systems Integration']
    },
    { 
      title: 'Renovation & Remodeling', 
      desc: 'Complete home makeovers, kitchen and bathroom renovations that breathe new life into your property.', 
      icon: '🔨',
      features: ['Full Kitchen & Bath Remodels', 'Structural Alterations', 'Basement Finishing', 'Exterior Facelift']
    },
    { 
      title: 'Interior Design', 
      desc: 'Seamless integration of architectural design and premium interior finishing.', 
      icon: '✨',
      features: ['Space Planning', 'Custom Millwork & Cabinetry', 'Lighting Design', 'Furniture & Fixture Procurement']
    }
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', desc: 'We meet to discuss your vision, budget, and timeline.' },
    { step: '02', title: 'Design & Pre-Construction', desc: 'Our architects draft blueprints and we secure all necessary permits.' },
    { step: '03', title: 'Construction Phase', desc: 'Our expert crew brings the blueprints to life with rigorous quality control.' },
    { step: '04', title: 'Final Handover', desc: 'We conduct a thorough walkthrough and hand over the keys to your new space.' }
  ];

  const testimonials = [
    { quote: "Build Brilliance transformed our outdated kitchen into a modern masterpiece. Their attention to detail and transparency regarding pricing was a breath of fresh air in this industry.", author: "Sarah Jenkins", role: "Residential Client" },
    { quote: "We hired them to build our new 20,000 sq ft corporate office. They finished 2 weeks ahead of schedule and the craftsmanship is phenomenal. Highly recommended.", author: "Michael Chang", role: "CEO, TechNova Solutions" },
    { quote: "From the initial consultation to the final walkthrough, the team was professional, clean, and incredibly skilled. I wouldn't trust anyone else with my home.", author: "David & Emma Reed", role: "Home Renovation" }
  ];

  return (
    <>
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive construction solutions tailored to your needs."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]} 
      />
      
      {/* Detailed Services Accordion */}
      <section className="section container">
        <div className="section__header">
          <span className="section__eyebrow">What We Do</span>
          <h2 className="section__title">Our Expertise</h2>
        </div>
        <ServiceAccordion services={servicesDetailed} />
      </section>

      {/* Our Process Flow */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">How We Work</span>
            <h2 className="section__title">Our Proven Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', position: 'relative' }}>
            {processSteps.map((p, index) => (
              <div key={index} style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>
                  {p.step}
                </div>
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Slider */}
      <section className="section container">
        <div className="section__header">
          <span className="section__eyebrow">Success Stories</span>
          <h2 className="section__title">What Our Clients Say</h2>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </section>
      
      <CTABanner 
        title="Ready to begin your journey?"
        description="Try our cost estimator to get a rough idea, or request a formal quote."
        buttonText="Try Cost Estimator"
        buttonHref="/estimate"
      />
    </>
  );
}
