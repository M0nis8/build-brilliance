import PageHero from '../components/PageHero';
import Image from 'next/image';
import ProjectMap from '../components/ProjectMap';

export const metadata = { 
  title: 'Our Projects | Build Brilliance',
  description: 'View our portfolio of luxury residential homes, commercial buildings, and renovations. Use our interactive map to explore projects in Bangalore.'
};

const projectsData = [
  { id: 1, title: 'Luxury Alpine Residence', category: 'Residential', image: '/luxury-residence.png' },
  { id: 2, title: 'Apex Commercial Hub', category: 'Commercial', image: '/modern-office.png' },
  { id: 3, title: 'Modern Kitchen Remodel', category: 'Remodeling', image: '/interior-remodel.png' },
  { id: 4, title: 'Downtown Skyscraper', category: 'Commercial', image: '/modern-office.png' },
  { id: 5, title: 'Lakefront Estate', category: 'Residential', image: '/luxury-residence.png' },
  { id: 6, title: 'Luxury Bathroom Upgrade', category: 'Remodeling', image: '/interior-remodel.png' }
];

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
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Locations</span>
            <h2 className="section__title">Our Signature Projects in Bangalore</h2>
          </div>
          <ProjectMap />
        </div>
      </section>
    </>
  );
}
