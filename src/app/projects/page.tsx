import PageWrapper from "@/components/PageWrapper";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="py-10">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-sm text-gray-300 max-w-2xl">
          A selection of automation and AI workflows I’ve built for MSP environments.
        </p>
      </section>
      <Projects />
      <TechStack />
    </PageWrapper>
  );
}