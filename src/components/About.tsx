"use client";

import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        <SectionDivider label="About Me" />

        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            I help MSPs scale by removing repetitive work.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-4">
            I’m an Automation Engineer focused on building AI-driven workflows,
            PSA/RMM integrations, SOC alert reduction, and user lifecycle automation.
            I work on technologies like Rewst, OpenAI, Entra ID, Google Workspace,
            Graph API, Autotask, HaloPSA, and Datto RMM to help MSPs eliminate repetitive
            tasks and improve SLA performance.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-10">
            My goal is simple: create scalable automation frameworks that reduce manual
            effort, improve operational consistency, and give engineers more time to
            focus on high-impact work.
          </p>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={0.2}>
          <div className="flex items-center gap-4">
            
            {/* GitHub */}
            <a
              href="https://github.com/kabbiir29-svg"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2 rounded-xl
                bg-white/5 border border-white/10 backdrop-blur-xl
                text-white text-sm font-medium
                hover:border-cyan-300/50 hover:text-cyan-300
                transition
              "
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kabir-sharma-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2 rounded-xl
                bg-white/5 border border-white/10 backdrop-blur-xl
                text-white text-sm font-medium
                hover:border-blue-400/50 hover:text-blue-300
                transition
              "
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}