"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.6fr,1fr] gap-10 items-center relative z-10">
        {/* LEFT: Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-cyan-300/80 mb-4"
          >
            Automation Engineer · MSP · AI & RPA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
          >
            I build{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              automation systems
            </span>{" "}
            that remove L1 noise for MSPs.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed mb-6"
          >
            I specialize in building AI-driven workflows using Rewst, OpenAI, PSA/RMM
            integrations, and cloud identity platforms like Azure/Entra ID and
            Google Workspace. My focus is simple: reduce repetitive work, protect
            SLAs, and make MSP operations scalable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <Link
              href="#projects"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-sm font-medium text-black shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 transition"
            >
              View Automation Projects
            </Link>

            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-xl border border-white/20 text-sm font-medium text-white/90 hover:border-cyan-300/60 hover:text-cyan-100 transition"
            >
              Let&apos;s talk about automation →
            </Link>
          </motion.div>

          {/* Quick highlights */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-gray-300"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <p className="text-cyan-300 font-semibold text-sm mb-1">60–75%</p>
              <p className="text-[11px] leading-snug">
                L1 workload reduction across AI + automation workflows.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <p className="text-cyan-300 font-semibold text-sm mb-1">Sub-30s</p>
              <p className="text-[11px] leading-snug">
                AI-first-response engines protecting MSP SLAs.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <p className="text-cyan-300 font-semibold text-sm mb-1">Build IT 2025</p>
              <p className="text-[11px] leading-snug">
                Travel SOC alerts automation showcased to MSP partners.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Simple glass panel for now (you already have visuals in BG) */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-xl shadow-cyan-500/20">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-3">
              Focus Areas
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>• AI-driven ticket categorization & first response</li>
              <li>• Autonomous L1 workflows (Rewst + OpenAI)</li>
              <li>• SOC alert reduction & smart whitelisting</li>
              <li>• User onboarding & offboarding at scale</li>
              <li>• PSA/RMM integration patterns for MSPs</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}