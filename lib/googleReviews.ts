import { readFileSync } from "fs";
import { join } from "path";

type PlacesReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  authorAttribution?: {
    displayName?: string;
  };
};

const ROOT = process.cwd();
const FALLBACK_GRID_PATH = join(ROOT, "content/partials/google-reviews-grid.html");
const GOOGLE_SHARE_URL = "https://share.google/VlClB6KZzYiCQH0vc";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function starsMarkup(rating = 5): string {
  const count = Math.max(1, Math.min(5, Math.round(rating)));
  const star =
    '<svg viewBox="0 0 24 24" fill="#FBBC04" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>';
  return new Array(count).fill(star).join("");
}

function initials(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  if (!parts.length) return "G";
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("") || "G";
}

function reviewCardMarkup(review: PlacesReview, idx: number): string {
  const colors = ["#4285F4", "#EA4335", "#34A853", "#FBBC04", "#9334E6", "#1A73E8"];
  const name = review.authorAttribution?.displayName?.trim() || "Google reviewer";
  const date = review.relativePublishTimeDescription?.trim() || "on Google";
  const text = review.text?.text?.trim() || "";
  const rating = review.rating ?? 5;

  return `
          <article class="gr-card">
            <header class="gr-card__head">
              <div class="gr-avatar" style="--bg:${colors[idx % colors.length]}" aria-hidden="true">${escapeHtml(initials(name))}</div>
              <div class="gr-card__user">
                <div class="gr-card__name">${escapeHtml(name)}</div>
                <div class="gr-card__sub">${escapeHtml(date)}</div>
              </div>
            </header>
            <div class="gr-card__rate">
              <div class="gr-stars" role="img" aria-label="${Math.round(rating)} stars">
                ${starsMarkup(rating)}
              </div>
            </div>
            <p class="gr-card__text">${escapeHtml(text)}</p>
            <footer class="gr-card__foot">
              <a class="gr-action" href="${GOOGLE_SHARE_URL}" target="_blank" rel="nofollow noopener">View on Google <span aria-hidden="true">&rarr;</span></a>
            </footer>
          </article>`;
}

function fallbackGrid(): string {
  return readFileSync(FALLBACK_GRID_PATH, "utf-8").trim();
}

export async function getGoogleReviewsGridHtml(): Promise<string> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackGrid();
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "displayName,userRatingCount,rating,reviews.rating,reviews.relativePublishTimeDescription,reviews.text,reviews.authorAttribution.displayName",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return fallbackGrid();
    }

    const json = (await res.json()) as { reviews?: PlacesReview[] };
    const reviews = (json.reviews ?? []).filter((r) => r.text?.text?.trim()).slice(0, 6);
    if (!reviews.length) return fallbackGrid();

    return reviews.map((review, idx) => reviewCardMarkup(review, idx)).join("\n");
  } catch {
    return fallbackGrid();
  }
}

