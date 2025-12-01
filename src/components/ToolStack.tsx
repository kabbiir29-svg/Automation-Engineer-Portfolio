"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  { name: "Rewst", logo: "/logos/rewst.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "n8n", logo: "/logos/n8n.svg" },
  { name: "Azure / Entra ID", logo: "/logos/azure.svg" },
  { name: "Google Workspace", logo: "/logos/google-workspace.svg" },
  { name: "PSA Tools", logo: "/logos/psa.svg" },
  { name: "RMM Tools", logo: "/logos/rmm.svg" },
  { name: "API Integrations", logo: "/logos/api.svg" },
  { name: "SOC Automation", logo: "/logos/security.svg" },
];

export default function ToolStack() {
  return (
    <section id="toolstack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
          Tool Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col items-center hover:border-cyan-300/40 hover:shadow-cyan-400/20 transition"
            >
              <div className="relative w-16 h-16 mb-3">
                <Image src={tool.logo} alt={tool.name} fill className="object-contain" />
              </div>
              <span className="text-white text-sm font-semibold tracking-wide">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}