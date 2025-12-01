"use client";

import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <SectionDivider label="Experience" />

        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            My work as an{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Automation Engineer
            </span>
          </h2>
        </ScrollReveal>

        {/* The main experience card */}
        <ScrollReveal delay={0.1}>
          <motion.div
            whileHover={{ y: -6 }}
            className="
              rounded-3xl 
              bg-white/5 backdrop-blur-xl 
              border border-white/10 
              shadow-xl shadow-cyan-500/10 
              p-8 transition-all
            "
          >
            {/* Title + Company + Dates */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <h3 className="text-2xl font-bold text-white">
                Automation Engineer
              </h3>
              <p className="text-gray-400 text-sm mt-1 md:mt-0">
                IT By Design · 2025 – Present
              </p>
            </div>

            {/* Summary */}
            <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-6">
              I design, build, and maintain automation workflows that reduce repetitive
              work, increase SLA adherence, and scale MSP operations using AI and 
              modern automation tooling.
            </p>

            {/* Automation Responsibilities */}
            <div className="space-y-4 text-gray-300 text-sm md:text-[15px]">

              <div>
                <p className="text-cyan-300 font-medium mb-1">Autonomous L1 Engineering</p>
                <ul className="space-y-1.5 ml-3">
                  <li>• Built workflows that classify, route, and resolve tickets end-to-end.</li>
                  <li>• Integrated OpenAI + Rewst to automate triage and add contextual PSA notes.</li>
                  <li>• Eliminated 60–75% of repetitive L1 workload across multiple MSPs.</li>
                </ul>
              </div>

              <div>
                <p className="text-cyan-300 font-medium mb-1">AI-Driven Ticketing Automation</p>
                <ul className="space-y-1.5 ml-3">
                  <li>• Created AI-first-response engines reducing response times to under 30 seconds.</li>
                  <li>• Generated SLA-safe responses, ticket summaries, and troubleshooting steps.</li>
                </ul>
              </div>

              <div>
                <p className="text-cyan-300 font-medium mb-1">Troubleshooting Intelligence</p>
                <ul className="space-y-1.5 ml-3">
                  <li>• Designed AI workflows trained on client-specific documentation.</li>
                  <li>• Delivered environment-aware troubleshooting suggestions reducing escalations by 35%.</li>
                </ul>
              </div>

              <div>
                <p className="text-cyan-300 font-medium mb-1">User Lifecycle Automation</p>
                <ul className="space-y-1.5 ml-3">
                  <li>• Automated Microsoft + Google onboarding/offboarding (accounts, groups, licenses, security).</li>
                  <li>• Reduced provisioning time from 45 minutes to under 5 minutes.</li>
                </ul>
              </div>

              <div>
                <p className="text-cyan-300 font-medium mb-1">SOC & Security Automation</p>
                <ul className="space-y-1.5 ml-3">
                  <li>• Built Build IT–showcased travel SOC alert whitelisting workflows.</li>
                  <li>• Reduced SOC noise by 80% through contextual alert validation.</li>
                </ul>
              </div>

              <div>
                <p className="text-cyan-300 font-medium mb-1">Automation Engineering Practices</p>
                <ul className="space-y-1.5 ml-3">
                  <li>• Built reusable Jinja templates, modular API integrations, and workflow blocks.</li>
                  <li>• Standardized automation deployment across multiple MSP environments.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}