"use client";

import { useRef, memo } from "react";
import Link from "next/link";
import Image from "next/image";

function RowSlider({ items = [] }) {
  const scrollRef = useRef(null);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
      >
        {items.map((item) => (
          <Link
            key={item.subject_id}
            href={`/detail/${item.subject_id}`}
            prefetch={false}
            className="relative block w-48 shrink-0 group"
          >
            <div className="relative w-full overflow-hidden rounded-lg h-72">
              <Image
                src={item.cover_image}
                alt={item.title}
                fill
                sizes="200px"
                unoptimized
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <p className="mt-2 text-sm text-gray-300 line-clamp-1">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default memo(RowSlider);
