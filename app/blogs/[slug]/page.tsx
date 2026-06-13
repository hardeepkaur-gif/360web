import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLdScript } from "@/components/JsonLdScript";
import { LegacySiteShell } from "@/components/LegacySiteShell";
import { resolvePostSeo, seoToMetadata } from "@/lib/blogSeo";
import { createBlogPostSchemaGraph } from "@/lib/blogSchema";
import {
  fetchAllPostSlugs,
  fetchPostBySlug,
  formatBlogDate,
  getFeaturedImage,
  getPostAuthorName,
  getPostCategories,
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

  const seo = await resolvePostSeo(post, `/blogs/${slug}`);
  const title = stripHtml(post.title.rendered);
  const image = getFeaturedImage(post);
  const categories = getPostCategories(post);
  const author = getPostAuthorName(post);

  return (
    <LegacySiteShell>
      <JsonLdScript
        id={`blog-post-schema-${post.id}`}
        data={createBlogPostSchemaGraph(post, seo.description)}
      />

      <article className="blog-post">
        <div className="container">
          <Link href="/blogs" className="blog-post__back">
            ← Back to blog
          </Link>

          <header className="blog-post__header">
            <div className="blog-post__meta">
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              <span>{author}</span>
              {categories.map((category) => (
                <span key={category.slug} className="blog-post__category">
                  {category.name}
                </span>
              ))}
            </div>
            <h1 className="blog-post__title">{title}</h1>
          </header>

          {image ? (
            <figure className="blog-post__featured">
              <Image
                src={image.url}
                alt={image.alt}
                width={image.width ?? 1200}
                height={image.height ?? 675}
                priority
                sizes="(max-width: 900px) 100vw, 820px"
              />
            </figure>
          ) : null}

          <div
            className="blog-post__content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>
    </LegacySiteShell>
  );
}
