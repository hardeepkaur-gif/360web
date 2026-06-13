import { createBreadcrumbNode, createWebPageNode } from "@/lib/breadcrumbSchema";
import { ORG_ID, WEBSITE_ID } from "@/lib/siteSchema";
import { SITE_URL } from "@/lib/site";
import {
  getFeaturedImage,
  getPostAuthorName,
  stripHtml,
  type WPPost,
} from "@/lib/wordpress";

export function createBlogListingSchemaGraph(description: string) {
  const pagePath = "/blogs";

  return {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbNode([{ name: "Blog", path: pagePath }], pagePath),
      createWebPageNode(pagePath, "Blog", description),
    ],
  };
}

export function createBlogPostSchemaGraph(post: WPPost, seoDescription?: string) {
  const pagePath = `/blogs/${post.slug}`;
  const title = stripHtml(post.title.rendered);
  const description =
    seoDescription ||
    stripHtml(post.excerpt.rendered) ||
    stripHtml(post.content.rendered).slice(0, 160);
  const image = getFeaturedImage(post);

  return {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbNode(
        [
          { name: "Blog", path: "/blogs" },
          { name: title, path: pagePath },
        ],
        pagePath,
      ),
      {
        "@type": "BlogPosting",
        "@id": `${SITE_URL}${pagePath}#article`,
        headline: title,
        description,
        datePublished: post.date,
        dateModified: post.modified,
        author: {
          "@type": "Person",
          name: getPostAuthorName(post),
        },
        publisher: {
          "@id": ORG_ID,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${pagePath}#webpage`,
        },
        isPartOf: { "@id": WEBSITE_ID },
        inLanguage: "en-GB",
        ...(image
          ? {
              image: {
                "@type": "ImageObject",
                url: image.url,
                ...(image.width ? { width: image.width } : {}),
                ...(image.height ? { height: image.height } : {}),
              },
            }
          : {}),
      },
      createWebPageNode(pagePath, title, description),
    ],
  };
}
