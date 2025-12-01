"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="pt-24">
      <Hero />
      <About />
      <Skills />
      <ExperienceSection />
      <Footer />
    </div>
  );
}