"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "@/data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";

const filters = ["All", "Bridal", "Editorial", "Photoshoot", "Celebrity", "Personal", "Event"];

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="work" className="bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AnimateOnScroll>
          <div className="mb-16">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
              Portfolio
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f5f0eb] mt-3 tracking-[0.02em]">
              Selected Work
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-[#c9a96e] text-[#c9a96e] bg-[#c9a96e]/5"
                    : "border-white/10 text-[#a0998f] hover:border-white/30 hover:text-[#f5f0eb]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative overflow-hidden cursor-pointer group ${
                  item.aspect === "portrait"
                    ? "row-span-2"
                    : item.aspect === "square"
                    ? "aspect-square"
                    : "aspect-[4/3]"
                } ${index % 5 === 0 ? "md:col-span-2" : ""}`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.makeupType}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent transition-opacity duration-500 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                    hoveredId === item.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <span className="text-[#c9a96e] text-[10px] tracking-[0.2em] uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-[#f5f0eb] text-xl tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[#a0998f] text-xs tracking-wider mt-1">
                    {item.makeupType}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
