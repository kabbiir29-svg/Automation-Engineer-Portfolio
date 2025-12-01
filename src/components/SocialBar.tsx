"use client";

import { Github, Linkedin } from "lucide-react";

export default function SocialBar() {
  return (
    <div className="flex gap-6 mt-6 justify-center">
      <a
        href="https://github.com/kabbiir29-svg"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyan-400 transition-all"
      >
        <Github size={30} />
      </a>

      <a
        href="https://www.linkedin.com/in/kabir-sharma29/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-cyan-400 transition-all"
      >
        <Linkedin size={30} />
      </a>
    </div>
  );
}