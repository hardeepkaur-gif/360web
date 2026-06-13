import Image from "next/image";
import Link from "next/link";

import { BlogSidebarSearch } from "@/components/BlogSidebarSearch";
import {
  formatBlogDateShort,
  getFeaturedImage,
  stripHtml,
  type WPCategory,
  type WPPostWithMeta,
} from "@/lib/wordpress";

type BlogPostSidebarProps = {
  recentPosts: WPPostWithMeta[];
  categories: WPCategory[];
};

export function BlogPostSidebar({
  recentPosts,
  categories,
}: BlogPostSidebarProps) {
  return (
    <aside className="blog-sidebar" aria-label="Blog sidebar">
      <div className="blog-sidebar__widget blog-sidebar__widget--search">
        <BlogSidebarSearch />
      </div>

      <div className="blog-sidebar__widget">
        <h2 className="blog-sidebar__heading">Latest Post</h2>
        <ul className="blog-sidebar__posts">
          {recentPosts.map((post) => {
            const title = stripHtml(post.title.rendered);
            const image = getFeaturedImage(post);
            const href = `/blogs/${post.slug}`;

            return (
              <li key={post.id} className="blog-sidebar__post">
                <Link href={href} className="blog-sidebar__post-link">
                  <span className="blog-sidebar__post-thumb">
                    {image ? (
                      <Image
                        src={image.url}
                        alt=""
                        width={80}
                        height={80}
                        sizes="80px"
                      />
                    ) : (
                      <span className="blog-sidebar__post-placeholder" aria-hidden="true">
                        360
                      </span>
                    )}
                  </span>
                  <span className="blog-sidebar__post-body">
                    <span className="blog-sidebar__post-date">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="12 7 12 12 15 14" />
                      </svg>
                      <time dateTime={post.date}>{formatBlogDateShort(post.date)}</time>
                    </span>
                    <span className="blog-sidebar__post-title">{title}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {categories.length ? (
        <div className="blog-sidebar__widget">
          <h2 className="blog-sidebar__heading">Categories</h2>
          <ul className="blog-sidebar__categories">
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/blogs?category=${encodeURIComponent(category.slug)}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </aside>
  );
}
