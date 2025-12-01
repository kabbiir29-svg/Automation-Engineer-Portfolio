"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLocationArrow, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contact" className="py-28 relative">

      {/* Background overlay */}
      <div className="absolute inset-0 opacity-[0.10] bg-[url('/grid.svg')] bg-cover pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-12"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE — CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're looking to streamline MSP operations, automate complex workflows,
              or explore AI-driven processes — I’d love to collaborate.
            </p>

            <div className="space-y-5 text-gray-200">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-300 text-xl" />
                <a href="mailto:kabbiir29@gmail.com" className="hover:text-cyan-300 transition">
                  kabbiir29@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-300 text-xl" />
                <span className="hover:text-cyan-300 transition">
                  +91 97799-96595
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaLocationArrow className="text-cyan-300 text-xl" />
                <span className="hover:text-cyan-300 transition">
                  Open for Remote Projects Worldwide
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              p-8 rounded-3xl 
              bg-white/5 backdrop-blur-xl 
              border border-white/10 
              shadow-xl hover:shadow-cyan-500/20 
              transition-all
              space-y-6
            "
          >
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input
                required
                className="
                  w-full px-4 py-2.5 rounded-xl 
                  bg-black/30 border border-white/10 text-white 
                  focus:border-cyan-400 transition
                "
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                required
                className="
                  w-full px-4 py-2.5 rounded-xl 
                  bg-black/30 border border-white/10 text-white 
                  focus:border-cyan-400 transition
                "
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea
                required
                rows={4}
                className="
                  w-full px-4 py-3 rounded-xl 
                  bg-black/30 border border-white/10 text-white 
                  focus:border-cyan-400 transition resize-none
                "
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                px-6 py-3 w-full 
                rounded-xl font-semibold text-black
                bg-gradient-to-r from-cyan-400 to-purple-400 
                hover:from-cyan-300 hover:to-purple-300 
                shadow-lg shadow-cyan-500/30
                transition-all flex items-center justify-center gap-3
              "
            >
              {sent ? (
                <span className="text-black font-bold">Message Sent ✓</span>
              ) : (
                <>
                  <FaPaperPlane className="text-black" />
                  Send Message
                </>
              )}
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}