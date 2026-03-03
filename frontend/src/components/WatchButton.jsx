"use client";

import { useRouter } from "next/navigation";

export default function WatchButton({ id }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${id}`)}
      className="px-6 py-3 font-semibold bg-green-500 rounded-lg"
    >
      ▶ Watch Online
    </button>
  );
}