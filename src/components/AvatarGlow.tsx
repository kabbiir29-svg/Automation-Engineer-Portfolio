"use client";

import { motion } from "framer-motion";

export default function AvatarGlow() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-40 h-40 mb-8"
    >
      {/* Glowing Halo */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl animate-pulse" />

      {/* Main Glow Border */}
      <div className="absolute inset-0 rounded-full border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.3)]" />

      {/* Avatar Image */}
      <img
        src="/avatar.jpg"
        alt="Kabir Sharma"
        className="rounded-full object-cover w-full h-full relative z-10 shadow-xl"
      />
    </motion.div>
  );
}