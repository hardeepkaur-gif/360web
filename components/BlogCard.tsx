import Image from "next/image";
import Link from "next/link";

import {
  formatBlogDate,
  getCategoryTags,
  getFeaturedImage,
  getPostExcerpt,
  stripHtml,
  type WPPostWithMeta,
} from "@/lib/wordpress";

type BlogCardProps = {
  post: WPPostWithMeta;
};

export function BlogCard({ post }: BlogCardProps) {
  const title = stripHtml(post.title.rendered);
  const excerpt = getPostExcerpt(post);
  const image = getFeaturedImage(post);
  const tags = getCategoryTags(post);
  const href = `/blogs/${post.slug}`;

  return (
    <article className="blog-card">
      <div className="blog-card__media-wrap">
        <Link href={href} className="blog-card__media" tabIndex={-1} aria-hidden="true">
          {image ? (
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width ?? 640}
              height={image.height ?? 427}
              sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className="blog-card__img"
            />
          ) : (
            <div className="blog-card__placeholder" aria-hidden="true">
              <span>360</span>
            </div>
          )}
        </Link>

        <div className="blog-card__tags" aria-hidden="true">
          {tags.map((tag) => (
            <span key={tag} className="blog-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="blog-card__body">
        <div className="blog-card__details">
          <ul className="blog-card__meta">
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            </li>
          </ul>

          <h2 className="blog-card__title">
            <Link href={href}>{title}</Link>
          </h2>

          <p className="blog-card__excerpt">{excerpt}</p>

          <Link href={href} className="blog-card__btn">
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
