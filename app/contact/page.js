import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

export const metadata = { 
  title: 'Contact Us | Build Brilliance',
  description: 'Get in touch with Build Brilliance to discuss your next luxury construction or renovation project. Our team is ready to answer your questions.'
};

export default function Contact() {
  return (
    <>
      <PageHero 
        title="Get in Touch" 
        subtitle="We're here to answer your questions and discuss your next project."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} 
      />
      <section className="section container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
        <div>
            <h2 className="section__title" style={{ fontSize: '2rem' }}>Contact Information</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--color-gray-500)', lineHeight: '1.6' }}>Reach out to us directly using the information below. We aim to respond to all inquiries within one business day.</p>
            
            <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.5rem' }}>📍</div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)' }}>Headquarters</h4>
                  <p style={{ color: 'var(--color-gray-600)' }}>H3, 337, Urban Cluster Layout,<br/>Brindavan Layout, Battarahalli,<br/>Bengaluru, Karnataka 560036</p>
                </div>
            </div>
            <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.5rem' }}>📞</div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)' }}>Phone</h4>
                  <p style={{ color: 'var(--color-gray-600)' }}>+91 98765 43210</p>
                </div>
            </div>
            <div style={{ marginBottom: '2.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.5rem' }}>✉️</div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)' }}>Email</h4>
                  <p style={{ color: 'var(--color-gray-600)' }}>info@buildbrilliance.com</p>
                </div>
            </div>

            {/* Simulated Map Placeholder */}
            <div style={{ width: '100%', height: '250px', background: '#e2e8f0', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#64748b' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🗺️</div>
                <p style={{ fontWeight: 'bold' }}>HQ Location Map</p>
              </div>
            </div>
        </div>
        
        <div>
           <ContactForm />
        </div>
      </section>
    </>
  );
}
