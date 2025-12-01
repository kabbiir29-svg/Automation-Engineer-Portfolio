"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

// Typewriter text rotate
const rotatingWords = [
  "Automation Specialist",
  "Rewst Expert",
  "AI Workflow Engineer",
  "PSA / RMM Automator",
  "MSP Systems Architect",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Rotating text every 2.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // PARALLAX AVATAR MOVEMENT
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-50, 50], [-2, 2]);

  const handleMouseMove = (e: any) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    x.set((clientX - centerX) / 15);
    y.set((clientY - centerY) / 15);
  };

  return (
    <section
      className="pt-32 pb-24 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* FLOATING COLOR SHAPES */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-cyan-400/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* AVAILABLE BADGE */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400 shadow-green-500 shadow-md animate-pulse" />
            <p className="text-green-300/90 text-sm tracking-wide">
              Available for advanced MSP automation projects
            </p>
          </div>

          {/* HEADLINE */}
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-[shimmer_3s_infinite]">
              Kabir Sharma
            </span>
          </h1>

          {/* TYPEWRITER / ROTATING SUBTITLE */}
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white/90 h-10"
          >
            {rotatingWords[index]}
          </motion.h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 max-w-md">
            I design and build intelligent automation systems for MSPs — blending
            Rewst, AI, PSA/RMM tooling, and cloud platforms to remove repetitive work,
            reduce noise, and deliver workflows that scale across client environments.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-black font-semibold shadow-lg hover:shadow-cyan-400/40 transition"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black font-semibold transition"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE ====================================================== */}
        <motion.div
          style={{ x, y, rotate }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="relative flex justify-center cursor-pointer"
        >
          {/* Outer animated glow */}
          <motion.div
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-[120px]"
          />

          {/* Avatar container */}
          <div className="relative w-64 h-64 rounded-full overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.25)]">
            <Image
              src="/avatar.jpg"
              alt="Kabir Sharma"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="text-sm text-gray-400 mb-1">Scroll</div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-4 h-4 border-b-2 border-r-2 border-cyan-300 rotate-45"
        />
      </motion.div>
    </section>
  );
}