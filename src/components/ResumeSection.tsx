"use client";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Resume</h2>
      <p className="text-gray-300 mb-6">
        View or download my complete professional resume.
      </p>

      <a
        href="/resume/Kabir- Automation Engineer - CV - ITBD.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-cyan-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-400"
      >
        View Resume
      </a>
    </section>
  );
}