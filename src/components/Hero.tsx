"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1600&q=80"
          alt="Fred Kendrick — Makeup Artist"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-light">
            Makeup Artist &middot; Beauty Expert &middot; Educator
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(3rem,8vw,7rem)] text-[#f5f0eb] leading-[0.9] tracking-[0.02em] mb-6"
        >
          Fred
          <br />
          Kendrick
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[#a0998f] text-lg md:text-xl font-light tracking-wide max-w-md mb-10"
        >
          Enhancing beauty. Creating confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="text-sm tracking-[0.15em] uppercase bg-[#f5f0eb] text-[#0a0a0a] px-8 py-3.5 hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="text-sm tracking-[0.15em] uppercase border border-[#f5f0eb]/30 text-[#f5f0eb] px-8 py-3.5 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
          >
            Book a Session
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-[#a0998f]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
