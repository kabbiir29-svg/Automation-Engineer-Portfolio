"use client";

import { techStack } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Tech Stack</h2>
      <p className="text-gray-400 mb-8 max-w-2xl">
        Tools and platforms I use to design, automate, and support MSP environments.
      </p>

      <div className="flex flex-wrap gap-3">
        {techStack.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            viewport={{ once: true }}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm backdrop-blur-md"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </section>
  );
}