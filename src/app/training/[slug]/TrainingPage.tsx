"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Users, MapPin, Calendar, CheckCircle } from "lucide-react";
import { trainings } from "@/data/trainings";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function TrainingPage({ slug }: { slug: string }) {
  const training = trainings.find((t) => t.slug === slug);

  if (!training) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl text-[#f5f0eb] mb-4">Training Not Found</h1>
            <Link href="/#academy" className="text-[#c9a96e] text-sm tracking-wider hover:underline">
              Back to Academy
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen pt-24">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16">
          <AnimateOnScroll>
            <Link
              href="/#academy"
              className="inline-flex items-center gap-2 text-[#a0998f] text-sm tracking-wider hover:text-[#c9a96e] transition-colors mb-12"
            >
              <ArrowLeft size={16} />
              Back to Academy
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="aspect-[21/9] overflow-hidden mb-12">
              <img
                src={training.image}
                alt={training.title}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimateOnScroll>
                <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
                  {training.level}
                </span>
                <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#f5f0eb] mt-2 mb-3">
                  {training.title}
                </h1>
                <p className="text-[#c9a96e] text-sm tracking-wider mb-8">
                  {training.subtitle}
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <div className="mb-12">
                  <p className="text-[#a0998f] leading-relaxed text-lg">
                    {training.description}
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.15}>
                <h2 className="font-serif text-2xl text-[#f5f0eb] mb-6">
                  What You&apos;ll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                  {training.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#c9a96e] mt-0.5 shrink-0" />
                      <span className="text-[#a0998f] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <h2 className="font-serif text-2xl text-[#f5f0eb] mb-6">
                  Program
                </h2>
                <div className="space-y-4 mb-12">
                  {training.program.map((item, i) => (
                    <div
                      key={i}
                      className="border-l-2 border-[#c9a96e]/30 pl-6 py-2"
                    >
                      <span className="text-[#a0998f] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.25}>
                <h2 className="font-serif text-2xl text-[#f5f0eb] mb-6">
                  Requirements
                </h2>
                <div className="space-y-3">
                  {training.requirements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#c9a96e] text-xs mt-1">—</span>
                      <span className="text-[#a0998f] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-1">
              <AnimateOnScroll direction="right" delay={0.2}>
                <div className="border border-white/10 p-8 sticky top-28">
                  <h3 className="font-serif text-xl text-[#f5f0eb] mb-6">
                    Training Details
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-[#c9a96e]" />
                      <div>
                        <div className="text-[#a0998f] text-xs tracking-wider uppercase">Duration</div>
                        <div className="text-[#f5f0eb] text-sm">{training.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-[#c9a96e]" />
                      <div>
                        <div className="text-[#a0998f] text-xs tracking-wider uppercase">Next Session</div>
                        <div className="text-[#f5f0eb] text-sm">{training.nextSession}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-[#c9a96e]" />
                      <div>
                        <div className="text-[#a0998f] text-xs tracking-wider uppercase">Location</div>
                        <div className="text-[#f5f0eb] text-sm">{training.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={16} className="text-[#c9a96e]" />
                      <div>
                        <div className="text-[#a0998f] text-xs tracking-wider uppercase">Available Places</div>
                        <div className="text-[#f5f0eb] text-sm">{training.spots} spots</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="text-[#a0998f] text-xs tracking-wider uppercase mb-2">Price</div>
                    <div className="font-serif text-3xl text-[#c9a96e] mb-6">{training.price}</div>
                    <a
                      href="#contact"
                      className="block w-full text-center text-sm tracking-[0.15em] uppercase bg-[#c9a96e] text-[#0a0a0a] py-3.5 hover:bg-[#f5f0eb] transition-colors duration-300"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
