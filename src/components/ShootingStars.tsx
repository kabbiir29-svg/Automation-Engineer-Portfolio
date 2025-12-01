"use client";

import { useEffect, useState } from "react";

export default function ShootingStars() {
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStars((prev) => [...prev.slice(-15), Math.random()]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
      {stars.map((x, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            left: `${x * 100}vw`,
            top: `${Math.random() * 50}vh`,
          }}
        />
      ))}
    </div>
  );
}