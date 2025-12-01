"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/grid.svg')] bg-cover pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Automation Projects
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-3xl mx-auto text-center mb-16"
        >
          A showcase of automation, AI integrations, and efficiency-focused engineering that transformed MSP operations.
        </motion.p>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="
                  p-8 rounded-3xl 
                  bg-white/5 backdrop-blur-xl 
                  border border-white/10 
                  hover:border-cyan-400/40 
                  hover:-translate-y-2 
                  shadow-xl hover:shadow-cyan-500/20 
                  transition-all
                  cursor-default
                "
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10 shadow-md shadow-cyan-400/10">
                    <Icon className="text-3xl text-cyan-300" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.role}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-xs bg-cyan-400/10 border border-cyan-300/20 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Short Description */}
                <p className="text-gray-300 text-sm mb-4">{project.short}</p>

                {/* Bullets */}
                <ul className="text-gray-300 text-sm space-y-1.5 mb-4">
                  {project.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-cyan-300">•</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-cyan-300 font-semibold mb-2 text-sm">Key Achievements:</h4>
                  <ul className="text-gray-300 text-sm space-y-1.5">
                    {project.achievements.map((a, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-cyan-300">✔</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problem / Solution / Impact */}
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="text-cyan-300 font-semibold">Problem: </span>
                    <span className="text-gray-300">{project.problem}</span>
                  </p>

                  <p>
                    <span className="text-blue-300 font-semibold">Solution: </span>
                    <span className="text-gray-300">{project.solution}</span>
                  </p>

                  <p>
                    <span className="text-purple-300 font-semibold">Impact: </span>
                    <span className="text-gray-300">{project.impact}</span>
                  </p>
                </div>

                {/* Tech Used */}
                <div className="mt-6">
                  <h4 className="text-blue-300 font-semibold mb-2 text-sm">Tech Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md bg-white/10 border border-white/10 text-gray-300 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}