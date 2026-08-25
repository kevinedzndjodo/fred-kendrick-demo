"use client";

import { useState } from "react";
import { Send, Phone } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const serviceOptions = [
  "Bridal Makeup",
  "Makeup for Events",
  "Photoshoots",
  "Editorial Makeup",
  "Celebrity / Artist Makeup",
  "Personal Makeup",
  "Training Inquiry",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#f5f0eb] py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimateOnScroll direction="left">
            <div>
              <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase">
                Get in Touch
              </span>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#0a0a0a] mt-3 mb-6 tracking-[0.02em]">
                Let&apos;s Create Something Beautiful
              </h2>
              <p className="text-[#8a847c] leading-relaxed mb-10">
                Whether you&apos;re looking for a makeup artist for your special
                day, a creative collaboration, or interested in training — I&apos;d
                love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#c9a96e]/30 flex items-center justify-center">
                    <Phone size={16} className="text-[#c9a96e]" />
                  </div>
                  <div>
                    <div className="text-[#0a0a0a] text-sm">WhatsApp</div>
                    <div className="text-[#8a847c] text-xs tracking-wider">
                      [Phone number placeholder]
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#c9a96e]/30 flex items-center justify-center">
                    <span className="text-[#c9a96e] text-xs">@</span>
                  </div>
                  <div>
                    <div className="text-[#0a0a0a] text-sm">Email</div>
                    <div className="text-[#8a847c] text-xs tracking-wider">
                      [email placeholder]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <div>
              {submitted ? (
                <div className="bg-white p-10 text-center">
                  <div className="font-serif text-2xl text-[#0a0a0a] mb-3">
                    Thank You
                  </div>
                  <p className="text-[#8a847c] text-sm">
                    Your inquiry has been received. I&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-white border border-[#e5e0da] px-5 py-3.5 text-sm text-[#0a0a0a] placeholder-[#8a847c] focus:outline-none focus:border-[#c9a96e] transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-white border border-[#e5e0da] px-5 py-3.5 text-sm text-[#0a0a0a] placeholder-[#8a847c] focus:outline-none focus:border-[#c9a96e] transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-white border border-[#e5e0da] px-5 py-3.5 text-sm text-[#0a0a0a] placeholder-[#8a847c] focus:outline-none focus:border-[#c9a96e] transition-colors"
                    />
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="bg-white border border-[#e5e0da] px-5 py-3.5 text-sm text-[#0a0a0a] focus:outline-none focus:border-[#c9a96e] transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Preferred Date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="bg-white border border-[#e5e0da] px-5 py-3.5 text-sm text-[#0a0a0a] placeholder-[#8a847c] focus:outline-none focus:border-[#c9a96e] transition-colors w-full"
                  />
                  <textarea
                    placeholder="Tell me about your project or event"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-white border border-[#e5e0da] px-5 py-3.5 text-sm text-[#0a0a0a] placeholder-[#8a847c] focus:outline-none focus:border-[#c9a96e] transition-colors w-full resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#0a0a0a] text-[#f5f0eb] text-sm tracking-[0.15em] uppercase py-4 hover:bg-[#c9a96e] transition-colors duration-300"
                  >
                    <Send size={14} />
                    Send Inquiry
                  </button>
                </form>
              )}

              <div className="mt-6 text-center">
                <a
                  href="https://wa.me/[PHONENUMBER]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] text-sm tracking-wider hover:underline"
                >
                  <Phone size={14} />
                  Prefer WhatsApp? Message directly
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
