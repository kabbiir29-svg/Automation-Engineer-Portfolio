"use client";

import { motion } from "framer-motion";
import { FaBolt, FaShieldAlt, FaChartLine } from "react-icons/fa";

export default function CoreValues() {
  const values = [
    {
      title: "Precision & Performance",
      description:
        "Every automation I build is engineered for accuracy, speed, and reliability. High-performance workflows that scale without breaking are non-negotiable.",
      icon: <FaBolt className="text-cyan-300 text-4xl" />,
      gradient: "from-cyan-400 to-blue-400",
    },
    {
      title: "Security & Privacy",
      description:
        "Secure architectures, clean access boundaries, and privacy-first engineering guide every decision. Strong security is built in — not added later.",
      icon: <FaShieldAlt className="text-purple-300 text-4xl" />,
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "Scalable Innovation",
      description:
        "Whether it's building multi-tenant automation systems or designing AI workflows, everything is built with long-term growth and adaptability in mind.",
      icon: <FaChartLine className="text-green-300 text-4xl" />,
      gradient: "from-green-400 to-cyan-400",
    },
  ];

  return (
    <section id="values" className="py-28 relative">

      {/* background particles */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.10] bg-[url('/grid.svg')] bg-cover"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Core Values
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                p-8 rounded-3xl 
                bg-white/5 
                border border-white/10 
                backdrop-blur-xl 
                shadow-xl 
                hover:shadow-cyan-400/20 
                hover:-translate-y-2 
                transition-all 
                cursor-default
              "
            >
              {/* Icon */}
              <div
                className={`
                  w-16 h-16 rounded-2xl 
                  flex items-center justify-center mx-auto 
                  bg-gradient-to-r ${value.gradient} 
                  shadow-lg shadow-black/40 
                  mb-6
                `}
              >
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center text-white mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                {value.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}