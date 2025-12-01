"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">

      {/* background grid */}
      <div className="absolute inset-0 opacity-[0.12] bg-[url('/grid.svg')] bg-cover pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-14"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="
                  flex items-center gap-4 
                  p-6 rounded-2xl 
                  bg-white/5 backdrop-blur-xl 
                  border border-white/10 
                  hover:border-cyan-400/40 
                  shadow-xl hover:shadow-cyan-500/20 
                  hover:-translate-y-2 
                  transition-all
                  cursor-default
                "
              >
                <Icon className={`text-3xl ${skill.color}`} />

                <h3 className="text-lg font-semibold text-white">
                  {skill.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}