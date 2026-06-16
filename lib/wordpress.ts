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
    author?: Array<{
      name: string;
      slug: string;
      avatar_urls?: Record<string, string>;
    }>;
    "wp:featuredmedia"?: WPEmbeddedMedia[];
    "wp:term"?: WPEmbeddedTerm[][];
  };
};

export type WPPostWithMeta = WPPost & {
  commentCount: number;
};

export type WPPostsResult = {
  posts: WPPostWithMeta[];
  total: number;
  totalPages: number;
};

export type WPPostSitemapEntry = {
  slug: string;
  modified: string;
};

export type WPCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
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

export function getPostExcerpt(post: WPPost): string {
  const excerpt = stripHtml(post.excerpt.rendered).replace(/\[\s*…?\s*\]|\[\.\.\.\]/g, "").trim();

  if (excerpt) {
    return excerpt;
  }

  const fromContent = stripHtml(post.content.rendered);

  if (fromContent.length <= 220) {
    return fromContent;
  }

  return `${fromContent.slice(0, 220).replace(/\s+\S*$/, "").trim()}…`;
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
  const raw = post._embedded?.author?.[0]?.name ?? "360 Web Solutions";
  return raw.includes("@") ? "360 Web Solutions" : raw;
}

export function getPostAuthorAvatar(post: WPPost) {
  return post._embedded?.author?.[0]?.avatar_urls?.["96"] ?? null;
}

/** Category overlay tags on the card image. */
export function getCategoryTags(post: WPPost): string[] {
  const categories = getPostCategories(post);

  if (categories.length >= 2) {
    return categories.slice(0, 2).map((c) => c.name);
  }

  const label = categories[0]?.name ?? "Blog";
  const words = label.split(/\s+/).filter(Boolean);

  if (words.length >= 2) {
    return [words[0], words.slice(1).join(" ")];
  }

  return [label];
}

async function fetchCommentCount(postId: number): Promise<number> {
  try {
    const res = await fetch(
      `${WORDPRESS_API_URL}/wp/v2/comments?post=${postId}&per_page=1&status=approve`,
      { next: { revalidate: BLOG_REVALIDATE_SECONDS } },
    );

    if (!res.ok) return 0;

    return Number.parseInt(res.headers.get("X-WP-Total") ?? "0", 10);
  } catch {
    return 0;
  }
}

async function enrichPostsWithMeta(posts: WPPost[]): Promise<WPPostWithMeta[]> {
  return Promise.all(
    posts.map(async (post) => ({
      ...post,
      commentCount: await fetchCommentCount(post.id),
    })),
  );
}

export function formatBlogDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}

export function formatBlogDateShort(isoDate: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(isoDate));
}

export function formatBlogDateBadge(isoDate: string) {
  const date = new Date(isoDate);

  return {
    day: date.getDate().toString().padStart(2, "0"),
    month: date
      .toLocaleString("en-GB", { month: "short" })
      .replace(".", "")
      .toUpperCase(),
  };
}

export function preparePostContent(html: string): string {
  return html.replace(/<img\b([^>]*?)>/gi, (_match, attrs: string) => {
    let next = attrs;

    if (!/\bloading\s*=/.test(attrs)) {
      next += ' loading="lazy"';
    }

    if (!/\bclass\s*=/.test(attrs)) {
      next += ' class="blog-post__inline-img"';
    } else {
      next = next.replace(
        /class=(["'])(.*?)\1/,
        'class=$1$2 blog-post__inline-img$1',
      );
    }

    return `<img${next}>`;
  });
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
  options?: { search?: string; categorySlug?: string },
): Promise<WPPostsResult> {
  const searchQuery = options?.search?.trim()
    ? `&search=${encodeURIComponent(options.search.trim())}`
    : "";

  let categoryQuery = "";

  if (options?.categorySlug?.trim()) {
    const { data: categories } = await wpFetch<WPCategory[]>(
      `/wp/v2/categories?slug=${encodeURIComponent(options.categorySlug.trim())}`,
    );

    if (categories[0]?.id) {
      categoryQuery = `&categories=${categories[0].id}`;
    }
  }

  const { data, headers } = await wpFetch<WPPost[]>(
    `/wp/v2/posts?page=${page}&per_page=${perPage}&_embed=1&status=publish&orderby=date&order=desc${searchQuery}${categoryQuery}`,
  );

  const posts = await enrichPostsWithMeta(data);

  return {
    posts,
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

export async function fetchPostCommentCount(postId: number): Promise<number> {
  return fetchCommentCount(postId);
}

export async function fetchRecentPosts(
  limit = 4,
  excludeSlug?: string,
): Promise<WPPostWithMeta[]> {
  const fetchCount = excludeSlug ? limit + 3 : limit;
  const { data } = await wpFetch<WPPost[]>(
    `/wp/v2/posts?per_page=${fetchCount}&_embed=1&status=publish&orderby=date&order=desc`,
  );

  const filtered = excludeSlug
    ? data.filter((post) => post.slug !== excludeSlug)
    : data;

  return enrichPostsWithMeta(filtered.slice(0, limit));
}

export async function fetchCategories(): Promise<WPCategory[]> {
  const { data } = await wpFetch<WPCategory[]>(
    `/wp/v2/categories?per_page=100&orderby=count&order=desc&hide_empty=true`,
  );

  return data.filter(
    (category) =>
      category.slug !== "uncategorized" && category.name.toLowerCase() !== "uncategorized",
  );
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
