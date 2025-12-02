"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Skills from "@/components/Skills";
import ExperienceSection from "@/components/ExperienceSection";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Resume from "@/components/ResumeSection"
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeSection from "@/components/ResumeSection";

export default function AboutPage() {
  return (
    <div className="pt-24">
      <Hero />
      <About />
      <CoreValues />
      <Skills />
      <ExperienceSection />
      <Projects />
      <Certifications />
      <ResumeSection />
      <Contact />
    </div>
  );
}