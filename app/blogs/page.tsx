import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/BlogCard";
import { BlogPagination } from "@/components/BlogPagination";
import { JsonLdScript } from "@/components/JsonLdScript";
import { LegacySiteShell } from "@/components/LegacySiteShell";
import { createBlogListingSchemaGraph } from "@/lib/blogSchema";
import { fetchPosts } from "@/lib/wordpress";

export const revalidate = 300;

const LISTING_DESCRIPTION =
  "Digital marketing insights, SEO guides, and growth strategies from 360 Web Solutions.";

export const metadata: Metadata = {
  title: "Blog | 360 Web Solutions",
  description: LISTING_DESCRIPTION,
  alternates: { canonical: "https://www.360websolutions.co.uk/blogs" },
  openGraph: {
    title: "Blog | 360 Web Solutions",
    description: LISTING_DESCRIPTION,
    url: "https://www.360websolutions.co.uk/blogs",
    type: "website",
  },
};

type BlogsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);

  let postsResult;

  try {
    postsResult = await fetchPosts(currentPage);
  } catch {
    notFound();
  }

  const { posts, totalPages } = postsResult;

  if (currentPage > totalPages && totalPages > 0) {
    notFound();
  }

  return (
    <LegacySiteShell>
      <JsonLdScript
        id="blog-listing-schema"
        data={createBlogListingSchemaGraph(LISTING_DESCRIPTION)}
      />

      <section className="blog-hero">
        <div className="container">
          <span className="blog-hero__eyebrow">
            <span className="blog-hero__eyebrow-line" aria-hidden="true" />
            Insights &amp; guides
          </span>
          <h1 className="blog-hero__title">Blog</h1>
          <p className="blog-hero__lede">
            Practical advice on SEO, content, AI marketing, and conversion from
            our London team.
          </p>
        </div>
      </section>

      <div className="container">
        {posts.length ? (
          <>
            <div className="blog-grid">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </>
        ) : (
          <div className="blog-empty">
            <p>No blog posts published yet. Check back soon.</p>
          </div>
        )}
      </div>
    </LegacySiteShell>
  );
}
