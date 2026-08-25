"use client";

import {
  Heart,
  Sparkles,
  Camera,
  Palette,
  Star,
  User,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import AnimateOnScroll from "./AnimateOnScroll";

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart size={20} />,
  sparkles: <Sparkles size={20} />,
  camera: <Camera size={20} />,
  palette: <Palette size={20} />,
  star: <Star size={20} />,
  user: <User size={20} />,
};

export default function Services() {
  return (
    <section id="services" className="bg-[#f5f0eb] py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AnimateOnScroll>
          <div className="mb-16">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
              What I Offer
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#0a0a0a] mt-3 tracking-[0.02em]">
              Services
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d6cfc7]">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.id} delay={index * 0.08}>
              <div className="bg-[#f5f0eb] p-8 md:p-10 group hover:bg-[#0a0a0a] transition-colors duration-500">
                <div className="text-[#c9a96e] mb-6 group-hover:text-[#c9a96e] transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-serif text-[#0a0a0a] text-xl mb-3 group-hover:text-[#f5f0eb] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#8a847c] text-sm leading-relaxed mb-6 group-hover:text-[#a0998f] transition-colors">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#c9a96e] text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                >
                  Book / Inquire
                  <ArrowRight size={14} />
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
