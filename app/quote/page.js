import PageHero from '../components/PageHero';
import QuoteForm from '../components/QuoteForm';

export const metadata = { 
  title: 'Get a Quote | Build Brilliance',
  description: 'Request a formal construction or renovation quote from Build Brilliance. Fill out your project details and our estimation team will review them.'
};

export default function Quote() {
  return (
    <>
      <PageHero 
        title="Request a Formal Quote" 
        subtitle="Provide details about your project to get a comprehensive proposal." 
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Quote' }]} 
      />
      <section className="section container" style={{ maxWidth: '800px' }}>
         <QuoteForm />
      </section>
    </>
  );
}
