"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 bg-transparent text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/kabbiir29-svg"
          target="_blank"
          className="text-white/70 hover:text-white transition text-3xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/kabir-sharma-automation"
          target="_blank"
          className="text-white/70 hover:text-white transition text-3xl"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="text-sm text-white/40">
        © 2025 Kabir Sharma • All Rights Reserved
      </p>
    </footer>
  );
}