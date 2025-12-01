"use client";

import { useEffect, useState } from "react";

export default function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 transition-all duration-300"
      style={{
        background: `radial-gradient(
          600px at ${pos.x}px ${pos.y}px,
          rgba(0, 255, 255, 0.18),
          transparent 60%
        )`,
      }}
    />
  );
}