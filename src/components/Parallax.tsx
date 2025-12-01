"use client";

import { useEffect, useState } from "react";

export default function Parallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handler = () => setOffset(window.scrollY * 0.08);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20" style={{ transform: `translateY(${offset}px)` }}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
    </div>
  );
}