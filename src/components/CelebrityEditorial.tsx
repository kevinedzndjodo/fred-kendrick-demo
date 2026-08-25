"use client";

import { motion } from "framer-motion";
import { celebrityProjects } from "@/data/portfolio";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CelebrityEditorial() {
  return (
    <section className="bg-[#f5f0eb] py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AnimateOnScroll>
          <div className="mb-16">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
              Collaborations
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#0a0a0a] mt-3 tracking-[0.02em]">
              Celebrity & Editorial
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {celebrityProjects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 0.1}>
              <div className="relative group overflow-hidden bg-[#0a0a0a]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.makeupType}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[#c9a96e] text-[10px] tracking-[0.2em] uppercase block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-[#f5f0eb] text-xl md:text-2xl tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-[#a0998f] text-xs tracking-wider mt-1">
                    {project.makeupType}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <p className="text-center text-[#8a847c] text-xs tracking-wider mt-10 italic">
            [Collaborations will be updated with verified projects]
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
