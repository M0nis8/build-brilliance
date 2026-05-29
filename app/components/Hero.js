import Link from 'next/link';
import Image from 'next/image';

export default function Hero({ title, subtitle, primaryAction, secondaryAction, isHomePage = false, imgSrc }) {
  return (
    <section className={`hero ${!isHomePage ? 'hero--page' : ''}`}>
      {imgSrc && (
        <div className="hero__cinematic-wrapper">
          <Image src={imgSrc} alt="Construction Site" fill className="hero__cinematic-img" priority />
        </div>
      )}
      <div className="hero__overlay"></div>
      <div className="hero__content">
        {title && <h1 className="hero__title">{title}</h1>}
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {(primaryAction || secondaryAction) && (
          <div className="hero__actions">
            {primaryAction && (
              <Link href={primaryAction.href} className="btn btn--primary btn--lg">
                {primaryAction.text}
              </Link>
            )}
            {secondaryAction && (
              <Link href={secondaryAction.href} className="btn btn--secondary btn--lg">
                {secondaryAction.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
