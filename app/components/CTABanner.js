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
