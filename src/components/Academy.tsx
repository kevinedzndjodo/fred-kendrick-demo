"use client";

import { Clock, Users, MapPin, ArrowRight } from "lucide-react";
import { trainings } from "@/data/trainings";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Academy() {
  return (
    <section id="academy" className="bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AnimateOnScroll>
          <div className="mb-16 text-center">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
              Education
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f5f0eb] mt-3 tracking-[0.02em]">
              Makeup Academy
            </h2>
            <p className="text-[#a0998f] text-sm tracking-[0.15em] uppercase mt-3">
              Learn. Practice. Create.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.map((training, index) => (
            <AnimateOnScroll key={training.id} delay={index * 0.1}>
              <div className="group border border-white/5 hover:border-[#c9a96e]/30 transition-all duration-500 overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={training.image}
                    alt={training.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#c9a96e] text-[10px] tracking-[0.2em] uppercase border border-[#c9a96e]/30 px-3 py-1">
                      {training.level}
                    </span>
                  </div>
                  <h3 className="font-serif text-[#f5f0eb] text-xl mb-2">
                    {training.title}
                  </h3>
                  <p className="text-[#c9a96e] text-xs tracking-wider mb-3">
                    {training.subtitle}
                  </p>
                  <p className="text-[#a0998f] text-sm leading-relaxed mb-6">
                    {training.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-[#a0998f] text-xs">
                      <Clock size={14} className="text-[#c9a96e]/60" />
                      {training.duration}
                    </div>
                    <div className="flex items-center gap-2 text-[#a0998f] text-xs">
                      <Users size={14} className="text-[#c9a96e]/60" />
                      {training.spots} places available
                    </div>
                    <div className="flex items-center gap-2 text-[#a0998f] text-xs">
                      <MapPin size={14} className="text-[#c9a96e]/60" />
                      {training.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[#c9a96e] text-lg">
                      {training.price}
                    </span>
                    <a
                      href={`/training/${training.slug}/`}
                      className="inline-flex items-center gap-2 text-[#f5f0eb] text-xs tracking-[0.15em] uppercase hover:text-[#c9a96e] transition-colors"
                    >
                      Learn More
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-block text-sm tracking-[0.15em] uppercase border border-[#c9a96e]/40 text-[#c9a96e] px-10 py-4 hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-300"
            >
              Join the Next Class
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
