// const BASE_URL = "http://127.0.0.1:8006/api";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8006/api";

export const dynamic = "force-dynamic";

export async function getHomepage(page = 1) {
  const res = await fetch(`${BASE_URL}/homepage/?page=${page}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch homepage");
  }

  return res.json();
}


export async function getMovieDetail(id) {
  const url = `${BASE_URL}/homepage/detail/${id}/`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch detail");
  }

  return res.json();
}