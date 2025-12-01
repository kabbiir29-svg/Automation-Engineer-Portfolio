"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient blobs */}
      <motion.div
        className="absolute -top-40 -left-40 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 20, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-40 -right-32 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff0f,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ffffff0a_1px,_transparent_1px),linear-gradient(to_bottom,_#ffffff08_1px,_transparent_1px)] bg-[size:80px_80px]" />
    </div>
  );
}
