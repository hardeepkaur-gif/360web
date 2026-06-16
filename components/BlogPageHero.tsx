import Link from "next/link";

export type BlogHeroCrumb = {
  label: string;
  href?: string;
};

type BlogPageHeroProps = {
  title: string;
  crumbs: BlogHeroCrumb[];
  eyebrow?: string;
  subtitle?: string;
  variant?: "listing" | "single";
};

export function BlogPageHero({
  title,
  crumbs,
  eyebrow,
  subtitle,
  variant = "listing",
}: BlogPageHeroProps) {
  return (
    <section
      className={`contact-page-hero about-page-hero blog-page-hero blog-page-hero--${variant} reveal`}
      aria-labelledby="blog-page-title"
    >
      <div
        className="contact-page-hero__media about-page-hero__media blog-page-hero__media"
        aria-hidden="true"
      />
      <div className="contact-page-hero__overlay" aria-hidden="true" />

      <div className="container contact-page-hero__inner">
        {eyebrow ? <p className="about-page-hero__eyebrow">{eyebrow}</p> : null}
        <h1 id="blog-page-title" className="contact-page-hero__title">
          {title}
        </h1>
        {subtitle ? (
          <p className="contact-page-hero__desc about-page-hero__vision">
            {subtitle}
          </p>
        ) : null}

        <nav className="contact-page-hero__crumb" aria-label="Breadcrumb">
          <ol className="contact-page-hero__crumb-track btn btn--primary btn--compact">
            {crumbs.flatMap((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              const items = [
                <li
                  key={`crumb-${index}`}
                  {...(isLast ? { "aria-current": "page" as const } : {})}
                >
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  ) : (
                    crumb.label
                  )}
                </li>,
              ];

              if (!isLast) {
                items.push(
                  <li
                    key={`sep-${index}`}
                    className="contact-page-hero__crumb-sep"
                    aria-hidden="true"
                  >
                    <span>→</span>
                  </li>,
                );
              }

              return items;
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
