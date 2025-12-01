"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  label: string;
  className?: string;
}

export default function SectionDivider({ label, className = "" }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-4 my-16 ${className}`}
    >
      <div className="flex-1 h-px bg-white/10" />
      <span className="text-xs tracking-[0.3em] uppercase text-white/60">
        {label}
      </span>
      <div className="flex-1 h-px bg-white/10" />
    </motion.div>
  );
}