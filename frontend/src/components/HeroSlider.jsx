"use client";

import { useState, useEffect, memo } from "react";
import Image from "next/image";

function HeroSlider({ items = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [items]);

  const item = items[index];
  if (!item) return null;

  return (
    <div className="relative w-full overflow-hidden h-96">
      <Image
        src={item.cover_image}
        alt={item.title}
        fill
        priority
        unoptimized
        className="object-cover"
     />

      <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

      <div className="absolute max-w-xl bottom-10 left-10">
        <h1 className="mb-4 text-4xl font-bold">{item.title}</h1>
        <p className="text-gray-300">{item.description}</p>
      </div>
    </div>
  );
}

export default memo(HeroSlider);
