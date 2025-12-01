"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT SIDE - Logo + Avatar */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/avatar.jpg"
            width={36}
            height={36}
            alt="Kabir avatar"
            className="rounded-full border border-white/20 group-hover:border-cyan-400/50 transition"
          />
          <span className="text-white font-semibold tracking-widest text-sm group-hover:text-cyan-300 transition">
            KABIR SHARMA
          </span>
        </Link>

        {/* RIGHT SIDE NAVIGATION */}
        <div className="flex items-center gap-8 text-sm">
          <Link href="#projects" className="hover:text-cyan-300 transition">Projects</Link>
          <Link href="#experience" className="hover:text-cyan-300 transition">Experience</Link>
          <Link href="#contact" className="hover:text-cyan-300 transition">Contact</Link>

          <a
            href="/resume/Kabir- Automation Engineer - CV - ITBD.pdf"
            target="_blank"
            className="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-black font-semibold"
          >
            Resume
          </a>
        </div>

      </div>
    </nav>
  );
}