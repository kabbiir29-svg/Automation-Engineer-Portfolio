"use client";

import { certifications } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/5 rounded-xl px-4 py-3"
          >
            {cert}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
