"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateOnScroll direction="left">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Fred Kendrick — The Artist Behind the Look"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#c9a96e]/20 hidden lg:block" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <div>
              <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
                The Artist Behind the Look
              </span>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#f5f0eb] mt-3 mb-8 tracking-[0.02em]">
                Fred Kendrick
              </h2>

              <div className="space-y-5 text-[#a0998f] leading-relaxed">
                <p>
                  [Fred, this section should tell your story. Below is a placeholder
                  structure you can personalize.]
                </p>
                <p>
                  With a passion for beauty that goes beyond surface level, Fred
                  Kendrick approaches makeup as a form of art — where color,
                  texture, and technique converge to create something truly
                  transformative.
                </p>
                <p>
                  Based in Yaoundé, Cameroon, Fred has built a reputation for
                  delivering exceptional results across bridal, editorial, and
                  celebrity makeup — always with a meticulous eye for detail and
                  a deep understanding of his clients&apos; vision.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { number: "[X]+", label: "Years Experience" },
                  { number: "[X]+", label: "Clients Served" },
                  { number: "[X]+", label: "Students Trained" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-3xl text-[#c9a96e]">
                      {stat.number}
                    </div>
                    <div className="text-[#a0998f] text-xs tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
