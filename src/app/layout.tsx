import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Particles from "@/components/Particles";
import Spotlight from "@/components/Spotlight";
import Aurora from "@/components/Aurora";
import Fog from "@/components/Fog";
import ShootingStars from "@/components/ShootingStars";
import Parallax from "@/components/Parallax";
import GradientNoise from "@/components/GradientNoise";

export const metadata = {
  title: "Kabir Sharma | Automation Architect",
  description: "Automation & AI workflows for MSP environments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="
          bg-gradient-to-b 
          from-[#050510] 
          via-[#0a0b17] 
          to-[#050510] 
          text-white 
          relative 
          min-h-screen 
          overflow-x-hidden
        "
      >
        {/* Interactive Spotlight */}
        <Spotlight />

        {/* Starfield */}
        <Particles />

        {/* Shooting Stars */}
        <ShootingStars />

        {/* Animated Aurora */}
        <Aurora />

        {/* Fog Layers */}
        <Fog />

        {/* Gradient Noise Overlay */}
        <GradientNoise />

        {/* Parallax Background Scroll Depth */}
        <Parallax />

        {/* Deep Glow + Nebula + Grid */}
        <div className="pointer-events-none absolute inset-0 -z-10">

          {/* Strong Hero Glow */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-cyan-500/25 blur-[180px]" />

          {/* Purple Nebula (Color cycling) */}
          <div className="absolute right-0 top-0 w-[900px] h-[900px] bg-purple-700/40 blur-[220px] nebula-shift" />

          {/* Deep Blue Aura */}
          <div className="absolute left-0 bottom-0 w-[700px] h-[700px] bg-blue-600/20 blur-[200px]" />

          {/* Aqua Mist */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-cyan-400/20 blur-[240px]" />

          {/* Glow Blobs */}
          <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
          <div className="absolute top-32 -right-32 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse" />

          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.12] bg-[url('/grid.svg')] bg-cover" />
        </div>

        <Navbar />

        <main className="max-w-6xl mx-auto px-4 pt-28 pb-24">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}