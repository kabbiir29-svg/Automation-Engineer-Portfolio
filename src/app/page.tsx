import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Skills from "@/components/Skills";
import ExperienceSection from "@/components/ExperienceSection";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import PageWrapper from "@/components/PageWrapper";
import ToolStack from "@/components/ToolStack";


export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <CoreValues />
      <Skills />
      <ToolStack />
      <ExperienceSection />
      <Projects />
      <Contact />
    </PageWrapper>
  );
}