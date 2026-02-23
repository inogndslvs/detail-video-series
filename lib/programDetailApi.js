const DUMMY_THUMB = "/gambar%20card%20detail.png";

function makeFallbackData({ slug, q, page }) {
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;
  const queryTag = q?.trim() ? ` · hasil untuk "${q.trim()}"` : "";

  return {
    title: "Hysteria Berkelana",
    subtitle:
      "Perayaan seni, budaya, dan kehidupan kampung melalui kerja kolektif warga dan seniman.",
    posts: Array.from({ length: 10 }, (_, i) => ({
      id: `${safePage}-${i + 1}`,
      thumbnailUrl: DUMMY_THUMB,
      alt: `${slug} Post ${i + 1}${queryTag}`,
    })),
    totalPages: 5,
  };
}

function normalizeProgramDetailResponse(payload, fallback) {
  if (!payload || typeof payload !== "object") return fallback;

  const title =
    typeof payload.title === "string" && payload.title.trim()
      ? payload.title
      : fallback.title;

  const subtitle =
    typeof payload.subtitle === "string" && payload.subtitle.trim()
      ? payload.subtitle
      : fallback.subtitle;

  const totalPages =
    typeof payload.totalPages === "number" && payload.totalPages > 0
      ? payload.totalPages
      : fallback.totalPages;

  const rawPosts = Array.isArray(payload.posts)
    ? payload.posts
    : Array.isArray(payload.items)
      ? payload.items
      : [];

  const posts = rawPosts.length
    ? rawPosts.map((item, index) => ({
        id: String(item?.id ?? `${index + 1}`),
        thumbnailUrl:
          item?.thumbnailUrl || item?.thumbnail || item?.image || DUMMY_THUMB,
        alt: item?.alt || item?.caption || `Post ${index + 1}`,
      }))
    : fallback.posts;

  return {
    title,
    subtitle,
    posts,
    totalPages,
  };
}

export async function getProgramDetailData({ slug, q = "", page = 1 }) {
  const fallback = makeFallbackData({ slug, q, page });

  const apiBaseUrl =
    process.env.PROGRAM_API_BASE_URL || process.env.NEXT_PUBLIC_PROGRAM_API_BASE_URL;

  if (!apiBaseUrl) return fallback;

  const url = new URL("/program-detail", apiBaseUrl);
  url.searchParams.set("slug", slug);
  if (q?.trim()) url.searchParams.set("q", q.trim());
  url.searchParams.set("page", String(page));

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });

    if (!res.ok) return fallback;

    const payload = await res.json();
    return normalizeProgramDetailResponse(payload, fallback);
  } catch {
    return fallback;
  }
}
