"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionDivider from "./SectionDivider";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/grid.svg')] bg-cover pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionDivider label="Automation Projects" />

        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Automation projects built{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              for MSP environments.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-gray-300 max-w-3xl mb-10 text-sm md:text-[15px]">
            These are real-world workflows built around Rewst, OpenAI, PSA/RMM tools,
            and cloud identity platforms. Each project is designed to reduce noise,
            protect SLAs, and give engineers more time to focus on complex work.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <ScrollReveal key={project.title} delay={0.1 + index * 0.05}>
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.01
                  }}
                  className="
                    p-8 rounded-3xl 
                    bg-white/5 backdrop-blur-xl 
                    border border-white/10 
                    hover:border-cyan-400/40 
                    shadow-xl hover:shadow-cyan-500/20 
                    transition-all
                  "
                >
                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-white/10 border border-white/10 shadow-md shadow-cyan-400/20">
                      <Icon className="text-3xl text-cyan-300" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-[11px] rounded-md bg-cyan-400/10 text-cyan-300 border border-cyan-300/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Short description */}
                  <p className="text-gray-300 text-sm mb-4">{project.short}</p>

                  {/* Bullets */}
                  {project.bullets && (
                    <ul className="text-gray-300 text-xs space-y-1.5 mb-4">
                      {project.bullets.map((b: string, i: number) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-cyan-300">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Achievements */}
                  {project.achievements && (
                    <div className="mb-4">
                      <p className="text-cyan-300 font-semibold text-xs mb-1">
                        Key Outcomes:
                      </p>
                      <ul className="text-gray-300 text-xs space-y-1.5">
                        {project.achievements.map((a: string, i: number) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-cyan-300">✔</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Problem / Solution / Impact */}
                  <div className="space-y-2 text-xs text-gray-300">
                    <p>
                      <span className="text-cyan-300 font-semibold">Problem: </span>
                      {project.problem}
                    </p>
                    <p>
                      <span className="text-blue-300 font-semibold">Solution: </span>
                      {project.solution}
                    </p>
                    <p>
                      <span className="text-purple-300 font-semibold">Impact: </span>
                      {project.impact}
                    </p>
                  </div>

                  {/* Tech */}
                  {project.tech && (
                    <div className="mt-5">
                      <p className="text-blue-300 font-semibold text-xs mb-2">
                        Tech Used:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t: string) => (
                          <span
                            key={t}
                            className="px-2 py-1 rounded-md bg-white/10 border border-white/10 text-gray-300 text-[11px]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}