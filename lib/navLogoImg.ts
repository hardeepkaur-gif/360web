import { getImageProps } from "next/image";

/** Display size from CSS: height 44px, width auto → ~78×44 (320×180 intrinsic). */
const NAV_LOGO_WIDTH = 78;
const NAV_LOGO_HEIGHT = 44;

const NAV_LOGO_IMG_RE =
  /<img\b[^>]*\bclass="[^"]*\bnav__logo\b[^"]*"[^>]*>/i;

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function styleToAttr(style: Record<string, string | number>): string {
  return Object.entries(style)
    .map(([key, value]) => {
      const cssKey = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      return `${cssKey}:${value}`;
    })
    .join(";");
}

/** Optimized nav logo markup via next/image (correct aspect + sized srcset). */
export function navLogoImgHtml(): string {
  const { props } = getImageProps({
    src: "/assets/images/logo.webp",
    alt: "360 Web Solutions UK digital marketing agency",
    width: NAV_LOGO_WIDTH,
    height: NAV_LOGO_HEIGHT,
    priority: true,
    className: "nav__logo",
    quality: 65,
  });

  const attrs: string[] = [];
  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || value === null || value === false) continue;

    const attrName =
      key === "className"
        ? "class"
        : key === "srcSet"
          ? "srcset"
          : key === "fetchPriority"
            ? "fetchpriority"
            : key;

    if (value === true) {
      attrs.push(attrName);
      continue;
    }

    if (key === "style" && typeof value === "object") {
      attrs.push(
        `style="${escapeAttr(styleToAttr(value as Record<string, string | number>))}"`,
      );
      continue;
    }

    attrs.push(`${attrName}="${escapeAttr(String(value))}"`);
  }

  return `<img ${attrs.join(" ")} fetchpriority="high" loading="eager" />`;
}

export function injectOptimizedNavLogo(headerHtml: string): string {
  if (!NAV_LOGO_IMG_RE.test(headerHtml)) return headerHtml;
  return headerHtml.replace(NAV_LOGO_IMG_RE, navLogoImgHtml());
}
