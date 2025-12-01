"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 py-14 bg-black/20 backdrop-blur-xl border-t border-white/10">

      {/* background grid */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/grid.svg')] bg-cover pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-24 h-24 mb-5"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-2xl opacity-40"></div>
          <Image
            src="/avatar.jpg"
            alt="Kabir Sharma"
            fill
            className="rounded-full object-cover border border-white/10"
          />
        </motion.div>

        {/* NAME + TITLE */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-white"
        >
          Kabir Sharma
        </motion.h3>

        <p className="text-sm text-gray-400 mt-1">
          Automation Specialist
        </p>

        {/* Divider Line */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 my-5 rounded-full"></div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-6 my-5"
        >
          <a
            href="https://github.com/kabbiir29-svg"
            target="_blank"
            className="text-gray-300 hover:text-cyan-300 transition text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kabir-sharma29/"
            target="_blank"
            className="text-gray-300 hover:text-cyan-300 transition text-xl"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* CONTACT INFO */}
        <div className="text-gray-300 text-sm space-y-1">
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-cyan-300" /> kabbiir29@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhone className="text-cyan-300" /> +91 97799-96595
          </p>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-8">
          © {new Date().getFullYear()} Kabir Sharma • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}