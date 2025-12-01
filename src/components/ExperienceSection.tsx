"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
          Professional Experience
        </h2>

        <div className="space-y-10">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="
                p-8 rounded-2xl 
                bg-white/5 
                border border-white/10 
                backdrop-blur-xl 
                shadow-xl 
                hover:border-cyan-300/40 
                hover:shadow-cyan-400/20 
                transition
              "
            >
              {/* ROLE + PERIOD */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-2xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-gray-400 mt-2 md:mt-0">{item.period}</p>
              </div>

              {/* COMPANY */}
              <p className="text-cyan-300 font-medium mt-1">
                {item.company}
              </p>

              {/* BULLET POINTS */}
              <ul className="mt-5 space-y-3 text-gray-300">
                {item.description.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-cyan-300 text-lg leading-6">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}