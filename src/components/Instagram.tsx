"use client";

import { ExternalLink } from "lucide-react";
import { InstagramIcon } from "./Icons";
import AnimateOnScroll from "./AnimateOnScroll";

const galleryImages = [
  { id: 1, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80" },
  { id: 2, image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80" },
  { id: 3, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&q=80" },
  { id: 4, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80" },
  { id: 5, image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80" },
  { id: 6, image: "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&q=80" },
];

export default function Instagram() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AnimateOnScroll>
          <div className="mb-12 text-center">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
              Follow the Work
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f5f0eb] mt-3 tracking-[0.02em]">
              @fred_kendrick_237
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {galleryImages.map((img, index) => (
            <AnimateOnScroll key={img.id} delay={index * 0.05}>
              <a
                href="https://www.instagram.com/fred_kendrick_237/"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square overflow-hidden group relative"
              >
                <img
                  src={img.image}
                  alt={`Fred Kendrick Instagram — ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/40 transition-colors duration-300 flex items-center justify-center">
                  <InstagramIcon
                    size={24}
                    className="text-[#f5f0eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/fred_kendrick_237/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#a0998f] text-sm tracking-[0.1em] hover:text-[#c9a96e] transition-colors"
            >
              <ExternalLink size={14} />
              Follow on Instagram
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
