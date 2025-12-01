import PageWrapper from "@/components/PageWrapper";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="py-10">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-sm text-gray-300 max-w-2xl mb-4">
          Want to talk about MSP automation, AI workflows, or building something new?
          Reach out below.
        </p>
      </section>
      <Contact />
    </PageWrapper>
  );
}