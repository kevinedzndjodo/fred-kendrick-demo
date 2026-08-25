"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Testimonials() {
  return (
    <section className="bg-[#f5f0eb] py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AnimateOnScroll>
          <div className="mb-16 text-center">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
              Kind Words
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#0a0a0a] mt-3 tracking-[0.02em]">
              What They Say
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial.id} delay={index * 0.1}>
              <div className="bg-white p-8 md:p-10 relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-[#c9a96e] fill-[#c9a96e]"
                    />
                  ))}
                </div>
                <p className="text-[#666] text-sm leading-relaxed italic mb-8">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-[#0a0a0a] text-sm font-medium">
                      {testimonial.name}
                    </div>
                    <div className="text-[#8a847c] text-xs tracking-wider">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
