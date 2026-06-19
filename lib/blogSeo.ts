import type { Metadata } from "next";

import { SITE_URL } from "@/lib/site";
import { stripHtml, type WPPost } from "@/lib/wordpress";

export type BlogSeoMeta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: string;
  canonical?: string;
};

function readMetaTag(html: string, key: string, attr: "name" | "property") {
  const pattern = new RegExp(
    `<meta[^>]+${attr}=["']${key}["'][^>]+content=["']([^"']*)["']|<meta[^>]+content=["']([^"']*)["'][^>]+${attr}=["']${key}["']`,
    "i",
  );
  const match = html.match(pattern);
  return match?.[1] ?? match?.[2] ?? undefined;
}

function readTitleTag(html: string) {
  return html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim();
}

export function parseSeoFromHtml(html: string): BlogSeoMeta {
  return {
    title: readTitleTag(html),
    description: readMetaTag(html, "description", "name"),
    ogTitle: readMetaTag(html, "og:title", "property"),
    ogDescription: readMetaTag(html, "og:description", "property"),
    ogImage: readMetaTag(html, "og:image", "property"),
    robots: readMetaTag(html, "robots", "name"),
    canonical: readMetaTag(html, "canonical", "property"),
  };
}

/** Pull Rank Math / Yoast meta from the WordPress permalink HTML. */
export async function fetchRankMathSeo(
  wpPermalink: string,
): Promise<BlogSeoMeta | null> {
  try {
    const res = await fetch(wpPermalink, {
      next: { revalidate: 300 },
      headers: { Accept: "text/html" },
    });

    if (!res.ok) return null;

    return parseSeoFromHtml(await res.text());
  } catch {
    return null;
  }
}

export function buildFallbackSeo(post: WPPost, sitePath: string): BlogSeoMeta {
  const title = stripHtml(post.title.rendered);
  const description =
    stripHtml(post.excerpt.rendered) ||
    stripHtml(post.content.rendered).slice(0, 160);
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: `${title} | 360 Web Solutions`,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    canonical: `${SITE_URL}${sitePath}`,
  };
}

export async function resolvePostSeo(
  post: WPPost,
  sitePath: string,
): Promise<BlogSeoMeta> {
  const rankMath = await fetchRankMathSeo(post.link);
  const fallback = buildFallbackSeo(post, sitePath);

  return {
    title: rankMath?.title ?? fallback.title,
    description: rankMath?.description ?? fallback.description,
    ogTitle: rankMath?.ogTitle ?? fallback.ogTitle,
    ogDescription: rankMath?.ogDescription ?? fallback.ogDescription,
    ogImage: rankMath?.ogImage ?? fallback.ogImage,
    robots: rankMath?.robots,
    canonical: `${SITE_URL}${sitePath}`,
  };
}

export function seoToMetadata(seo: BlogSeoMeta): Metadata {
  const title = seo.title;
  const description = seo.description;
  const canonical = seo.canonical;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: seo.ogTitle ?? title,
      description: seo.ogDescription ?? description,
      url: canonical,
      type: "article",
      images: seo.ogImage ? [{ url: seo.ogImage }] : undefined,
    },
    twitter: {
      card: seo.ogImage ? "summary_large_image" : "summary",
      title: seo.ogTitle ?? title,
      description: seo.ogDescription ?? description,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  };
}
