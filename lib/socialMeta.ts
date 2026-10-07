import type { Metadata } from "next";

export const SITE_NAME = "360 Web Solutions";

export type SocialImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export const DEFAULT_SOCIAL_IMAGE: SocialImage = {
  url: "/assets/images/og-default.webp",
  width: 1200,
  height: 630,
  alt: "360 Web Solutions, digital marketing agency in London and the UK",
};

export function caseStudySocialImage(file: string, client: string): SocialImage {
  return {
    url: `/assets/images/case-studies/${file}`,
    width: 1200,
    height: 630,
    alt: `${client} website, a 360 Web Solutions case study`,
  };
}

type SocialMetaOptions = {
  path: string;
  title: string;
  description: string;
  image?: SocialImage;
  type?: "website" | "article";
};

/** Complete Open Graph + Twitter tags; relative URLs resolve against `metadataBase`. */
export function socialMeta({
  path,
  title,
  description,
  image = DEFAULT_SOCIAL_IMAGE,
  type = "website",
}: SocialMetaOptions): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title,
      description,
      url: path,
      type,
      siteName: SITE_NAME,
      locale: "en_GB",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
