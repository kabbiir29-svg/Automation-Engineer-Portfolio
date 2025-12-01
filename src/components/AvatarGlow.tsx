"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AvatarGlow({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex items-center justify-center w-[200px] h-[200px]"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30 blur-2xl"></div>

      <div className="relative z-10 rounded-full overflow-hidden shadow-2xl shadow-cyan-500/40">
        {children}
      </div>
    </motion.div>
  );
}