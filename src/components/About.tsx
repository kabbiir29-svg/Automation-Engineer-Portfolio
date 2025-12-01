"use client";

import { motion } from "framer-motion";
import { FaRocket, FaBrain, FaHeart, FaUserShield } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-cyan-500/20 blur-[140px]" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-purple-500/25 blur-[160px]" />
      <div className="absolute inset-0 opacity-[0.10] bg-[url('/grid.svg')] bg-cover pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-center mb-4"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-14"
        >
          I specialize in building automation and AI workflows for MSP environments —
          taking noisy, manual processes and turning them into clean, scalable systems.
        </motion.p>

        <div className="grid md:grid-cols-[1.6fr,1.2fr] gap-14 items-start">
          {/* LEFT — Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-sm md:text-base text-gray-200 leading-relaxed"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
              Building{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                reliable automation
              </span>{" "}
              that MSP teams can trust in production.
            </h3>

            <p>
              I come from inside the MSP world — from coordinating tickets and
              SLAs to designing automation frameworks. That gives me a unique
              advantage: everything I build is grounded in how real engineers
              work, not just how tools are &quot;supposed&quot; to work.
            </p>

            <p>
              From AI-assisted L1 agents, SOC alert reduction flows, to fully
              automated onboarding and offboarding, I’m focused on one thing:
              <span className="text-cyan-300"> making operations smoother, faster, and more predictable.</span>
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="flex items-center gap-2 text-base font-semibold text-cyan-300 mb-1">
                  <FaRocket className="text-cyan-300" /> Why I Build Automation
                </h4>
                <p className="text-gray-300 text-sm">
                  I love taking messy workflows, scattered tools, and vague
                  requirements — and turning them into clear, repeatable
                  automation that teams actually want to use.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-base font-semibold text-purple-300 mb-1">
                  <FaBrain className="text-purple-300" /> How I Think
                </h4>
                <p className="text-gray-300 text-sm">
                  I think in systems: inputs, outputs, edge cases, and guardrails.
                  Every workflow must be observable, debuggable, and safe to evolve.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-base font-semibold text-pink-300 mb-1">
                  <FaHeart className="text-pink-300" /> What I Care About
                </h4>
                <p className="text-gray-300 text-sm">
                  Experience — both for engineers and end users. Automation should
                  feel like an upgrade, not a fight with a black box.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-base font-semibold text-emerald-300 mb-1">
                  <FaUserShield className="text-emerald-300" /> Principles
                </h4>
                <p className="text-gray-300 text-sm">
                  Secure by default, minimal access, clear logging, and workflows
                  that your team could maintain without me in the room.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { icon: "👨‍💻", label: "Years in MSP Space", value: "2+" },
              { icon: "⚙️", label: "Automation Projects", value: "20+" },
              { icon: "🌐", label: "Client Environments", value: "5+" },
              { icon: "⏱️", label: "Avg. Time Saved", value: "40–80%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="rounded-2xl bg-white/5 border border-white/10 px-4 py-5 text-center shadow-md hover:border-cyan-400/40 hover:-translate-y-1 transition"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}