const DEFAULT_WP_API =
  "https://goldenrod-lion-234427.hostingersite.com/wp-json";

export const WORDPRESS_API_URL =
  process.env.WORDPRESS_API_URL?.replace(/\/$/, "") || DEFAULT_WP_API;

export const BLOG_POSTS_PER_PAGE = 9;

export const BLOG_REVALIDATE_SECONDS = 300;

export type WPEmbeddedMedia = {
  source_url: string;
  alt_text: string;
  media_details?: { width?: number; height?: number };
};

export type WPEmbeddedTerm = {
  name: string;
  slug: string;
  taxonomy: string;
};

export type WPPost = {
  id: number;
  slug: string;
  date: string;
  modified: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  _embedded?: {
    author?: Array<{ name: string; slug: string }>;
    "wp:featuredmedia"?: WPEmbeddedMedia[];
    "wp:term"?: WPEmbeddedTerm[][];
  };
};

export type WPPostsResult = {
  posts: WPPost[];
  total: number;
  totalPages: number;
};

export type WPPostSitemapEntry = {
  slug: string;
  modified: string;
};

const entityMap: Record<string, string> = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&#038;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#039;": "'",
  "&rsquo;": "\u2019",
  "&lsquo;": "\u2018",
  "&rdquo;": "\u201D",
  "&ldquo;": "\u201C",
  "&mdash;": "\u2014",
  "&ndash;": "\u2013",
};

export function decodeWpHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&(#x?[0-9a-fA-F]+|\w+);/g, (match) => entityMap[match] ?? match)
    .replace(/\s+/g, " ")
    .trim();
}

export function stripHtml(html: string): string {
  return decodeWpHtml(html);
}

export function getFeaturedImage(post: WPPost) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media?.source_url) return null;

  return {
    url: media.source_url,
    alt: media.alt_text || stripHtml(post.title.rendered),
    width: media.media_details?.width,
    height: media.media_details?.height,
  };
}

export function getPostCategories(post: WPPost) {
  return post._embedded?.["wp:term"]?.[0] ?? [];
}

export function getPostAuthorName(post: WPPost) {
  return post._embedded?.author?.[0]?.name ?? "360 Web Solutions";
}

export function formatBlogDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}

async function wpFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<{ data: T; headers: Headers }> {
  const res = await fetch(`${WORDPRESS_API_URL}${path}`, {
    ...init,
    next: { revalidate: BLOG_REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`WordPress API error ${res.status} for ${path}`);
  }

  return { data: (await res.json()) as T, headers: res.headers };
}

export async function fetchPosts(
  page = 1,
  perPage = BLOG_POSTS_PER_PAGE,
): Promise<WPPostsResult> {
  const { data, headers } = await wpFetch<WPPost[]>(
    `/wp/v2/posts?page=${page}&per_page=${perPage}&_embed=1&status=publish&orderby=date&order=desc`,
  );

  return {
    posts: data,
    total: Number.parseInt(headers.get("X-WP-Total") ?? "0", 10),
    totalPages: Number.parseInt(headers.get("X-WP-TotalPages") ?? "1", 10),
  };
}

export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const { data } = await wpFetch<WPPost[]>(
    `/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=1&status=publish`,
  );

  return data[0] ?? null;
}

export async function fetchAllPostSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const { data, headers } = await wpFetch<WPPost[]>(
      `/wp/v2/posts?page=${page}&per_page=100&_fields=slug&status=publish`,
    );

    slugs.push(...data.map((post) => post.slug));
    totalPages = Number.parseInt(headers.get("X-WP-TotalPages") ?? "1", 10);
    page += 1;
  }

  return slugs;
}

export async function fetchAllPostsForSitemap(): Promise<WPPostSitemapEntry[]> {
  const entries: WPPostSitemapEntry[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const { data, headers } = await wpFetch<
      Array<{ slug: string; modified: string }>
    >(
      `/wp/v2/posts?page=${page}&per_page=100&_fields=slug,modified&status=publish`,
    );

    entries.push(...data);
    totalPages = Number.parseInt(headers.get("X-WP-TotalPages") ?? "1", 10);
    page += 1;
  }

  return entries;
}
