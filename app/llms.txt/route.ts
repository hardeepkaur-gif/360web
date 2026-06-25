import { generateLlmsTxt } from "@/lib/llmsTxt";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const body = generateLlmsTxt();

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
