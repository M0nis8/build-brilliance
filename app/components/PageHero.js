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
