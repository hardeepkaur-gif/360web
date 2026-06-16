import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { BlogPageHero } from "@/components/BlogPageHero";
import { BlogPostSidebar } from "@/components/BlogPostSidebar";
import { JsonLdScript } from "@/components/JsonLdScript";
import { LegacySiteShell } from "@/components/LegacySiteShell";
import { resolvePostSeo, seoToMetadata } from "@/lib/blogSeo";
import { createBlogPostSchemaGraph } from "@/lib/blogSchema";
import {
  fetchAllPostSlugs,
  fetchCategories,
  fetchPostBySlug,
  fetchPostCommentCount,
  fetchRecentPosts,
  formatBlogDateBadge,
  getFeaturedImage,
  getPostAuthorName,
  preparePostContent,
  stripHtml,
} from "@/lib/wordpress";

export const revalidate = 300;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const slugs = await fetchAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog post not found | 360 Web Solutions",
      robots: { index: false, follow: false },
    };
  }

  const seo = await resolvePostSeo(post, `/blogs/${slug}`);
  return seoToMetadata(seo);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const [seo, commentCount, recentPosts, categories] = await Promise.all([
    resolvePostSeo(post, `/blogs/${slug}`),
    fetchPostCommentCount(post.id),
    fetchRecentPosts(4, slug),
    fetchCategories(),
  ]);

  const title = stripHtml(post.title.rendered);
  const image = getFeaturedImage(post);
  const author = getPostAuthorName(post);
  const dateBadge = formatBlogDateBadge(post.date);
  const commentLabel =
    commentCount === 1 ? "1 Comment" : `${commentCount} Comments`;

  return (
    <LegacySiteShell>
      <JsonLdScript
        id={`blog-post-schema-${post.id}`}
        data={createBlogPostSchemaGraph(post, seo.description)}
      />

      <BlogPageHero
        title="Blog Details"
        variant="single"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blogs" },
          { label: title },
        ]}
      />

      <section className="blog-single">
        <div className="container blog-single__grid">
          <BlogPostSidebar recentPosts={recentPosts} categories={categories} />

          <article className="blog-single__main">
            {image ? (
              <figure className="blog-single__featured">
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={image.width ?? 1200}
                  height={image.height ?? 675}
                  priority
                  sizes="(max-width: 991px) 100vw, 720px"
                  className="blog-single__featured-img"
                />
                <figcaption className="blog-single__date-badge">
                  <span className="blog-single__date-day">{dateBadge.day}</span>
                  <span className="blog-single__date-month">{dateBadge.month}</span>
                </figcaption>
              </figure>
            ) : null}

            <ul className="blog-single__meta">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M20 21a8 8 0 1 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>By {author}</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>{commentLabel}</span>
              </li>
            </ul>

            <h1 className="blog-single__title">{title}</h1>

            <div
              className="blog-post__content"
              dangerouslySetInnerHTML={{
                __html: preparePostContent(post.content.rendered),
              }}
            />
          </article>
        </div>
      </section>
    </LegacySiteShell>
  );
}
