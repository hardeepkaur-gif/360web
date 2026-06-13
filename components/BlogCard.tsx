import Image from "next/image";
import Link from "next/link";

import {
  formatBlogDate,
  getFeaturedImage,
  getPostCategories,
  stripHtml,
  type WPPost,
} from "@/lib/wordpress";

type BlogCardProps = {
  post: WPPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const title = stripHtml(post.title.rendered);
  const excerpt = stripHtml(post.excerpt.rendered);
  const image = getFeaturedImage(post);
  const categories = getPostCategories(post);
  const href = `/blogs/${post.slug}`;

  return (
    <article className="blog-card">
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

      <div className="blog-card__body">
        <div className="blog-card__meta">
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          {categories[0] ? (
            <>
              <span className="blog-card__dot" aria-hidden="true" />
              <span>{categories[0].name}</span>
            </>
          ) : null}
        </div>

        <h2 className="blog-card__title">
          <Link href={href}>{title}</Link>
        </h2>

        {excerpt ? <p className="blog-card__excerpt">{excerpt}</p> : null}

        <Link href={href} className="blog-card__link">
          Read article <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
