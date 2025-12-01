import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import Skills from "@/components/Skills";
import ResumeSection from "@/components/ResumeSection";

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="py-10">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="text-sm text-gray-300 max-w-2xl">
          I work as an Automation Engineer focused on building scalable workflows,
          AI-powered automations, and deep integrations for MSP environments.
        </p>
      </section>
      <Hero />
      <ExperienceSection />
      <Skills />
      <ResumeSection />
    </PageWrapper>
  );
}