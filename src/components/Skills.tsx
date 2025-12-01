"use client";

import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        <SectionDivider label="Skills & Stack" />

        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Skills that support{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              real MSP automation work.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-lg shadow-cyan-500/10"
              >
                <p className="text-sm font-semibold text-cyan-300 mb-2">
                  {group.category}
                </p>

                <ul className="space-y-1.5 text-xs text-gray-300">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-cyan-300">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
