"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Rotating keywords
const rotatingWords = [
  "Automation Specialist",
  "Rewst Expert",
  "AI Workflow Engineer",
  "PSA / RMM Automator",
  "MSP Systems Architect",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Rotate subtitle
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Parallax avatar
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-50, 50], [-2, 2]);

  const handleMouseMove = (e: any) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;

    x.set((clientX - cx) / 18);
    y.set((clientY - cy) / 18);
  };

  return (
    <section
      id="hero"
      className="pt-32 pb-28 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 🌈 Soft gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(128,0,255,0.15),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ========================= */}
        {/* 🔵 HERO TOP SECTION */}
        {/* ========================= */}
        <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="w-3 h-3 rounded-full bg-green-400 shadow-green-500 shadow-md animate-pulse" />
              <p className="text-green-300/90 text-sm tracking-wide">
                Available for advanced MSP automation projects
              </p>
            </motion.div>

            {/* Name Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-5xl md:text-6xl font-black leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-[shimmer_3s_infinite]">
                Kabir Sharma
              </span>
            </motion.h1>

            {/* Rotating Subtitle */}
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-white/90 h-10"
            >
              {rotatingWords[index]}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-gray-300 max-w-lg leading-relaxed text-[20px]"
            >
            I’m an Automation Engineer focused on building AI-driven workflows,
            PSA/RMM integrations, SOC alert reduction, and user lifecycle automation.
            I work on technologies like Rewst, OpenAI, Entra ID, Google Workspace,
            Graph API, Autotask, HaloPSA, and Datto RMM to help MSPs eliminate repetitive
            tasks and improve SLA performance.
            </motion.p>

            <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-300 text-sm md:text-[20px] leading-relaxed mb-8"
          >
            My goal is simple: create scalable automation frameworks that reduce manual
            effort, improve operational consistency, and give engineers more time to
            focus on high-impact work.
          </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex gap-5 pt-2"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-400/40 transition"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-black font-semibold transition"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT – Avatar */}
          <motion.div
            style={{ x, y, rotate }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-[120px]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-64 h-64 rounded-full overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_45px_rgba(0,255,255,0.25)]"
            >
              <Image
                src="/avatar.jpg"
                alt="Kabir Sharma"
                fill
                className="object-cover rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20 max-w-4xl">
          {/* Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/kabbiir29-svg"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10
                         text-white text-sm font-medium backdrop-blur-xl hover:border-cyan-300/50 
                         hover:text-cyan-300 transition"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kabir-sharma-automation"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10
                         text-white text-sm font-medium backdrop-blur-xl hover:border-blue-400/50 
                         hover:text-blue-300 transition"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>
          </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="text-gray-400 text-xs mb-1">Scroll</div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-4 h-4 border-b-2 border-r-2 border-cyan-300 rotate-45"
        />
      </motion.div>
    </section>
  );
}