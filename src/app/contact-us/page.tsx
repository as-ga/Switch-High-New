"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle, Sparkles, MessageSquare } from "lucide-react";
import MarqueeHeader from "@/components/MarqueeHeader";
import confetti from "canvas-confetti";

const countryCodes = [
  { code: "+91", country: "India (IN)" },
  { code: "+971", country: "UAE (AE)" },
  { code: "+1", country: "USA / Canada (US/CA)" },
  { code: "+44", country: "United Kingdom (UK)" },
  { code: "+65", country: "Singapore (SG)" },
  { code: "+61", country: "Australia (AU)" },
  { code: "+49", country: "Germany (DE)" },
  { code: "+33", country: "France (FR)" },
  { code: "+966", country: "Saudi Arabia (SA)" },
  { code: "+974", country: "Qatar (QA)" },
  { code: "+965", country: "Kuwait (KW)" },
  { code: "+968", country: "Oman (OM)" },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    countryCode: "+91",
    phone: "",
    service: "Digital Marketing",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
        });
      } catch (err) {
        // Fallback
      }
    }, 800);
  };

  return (
    <div className="w-full bg-[#f2f2f2] overflow-hidden">
      {/* 1. HERO MARQUEE */}
      <section className="pt-12 sm:pt-16 pb-8">
        <MarqueeHeader text="Flaunt Your Brand Loud" reverse={true} speedSeconds={25} />

        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 pt-10">
          <div className="border-b border-neutral-300 pb-10">
            <span className="text-xs font-mono uppercase text-pink-500 font-bold tracking-widest block mb-2">
              Let&apos;s Start A Conversation
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-tight max-w-4xl">
              Fill out the contact form below and tell us about your vision for the project.
            </h2>
          </div>
        </div>
      </section>

      {/* 2. FORM & OFFICE INFO GRID */}
      <section className="max-w-[1520px] mx-auto px-6 sm:px-10 py-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-1">
                    Project Inquiry Form
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm">
                    Leave your details and our growth team will connect with a tailored action plan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-neutral-600 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="eg: John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-[#f8f8f8] border border-neutral-300 rounded-xl px-4 py-3.5 text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-neutral-600 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="eg: Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-[#f8f8f8] border border-neutral-300 rounded-xl px-4 py-3.5 text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-neutral-600 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eg: john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f8f8f8] border border-neutral-300 rounded-xl px-4 py-3.5 text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-neutral-600 mb-2">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="eg: Doors Studio"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#f8f8f8] border border-neutral-300 rounded-xl px-4 py-3.5 text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-5">
                    <label className="block text-xs uppercase font-bold tracking-wider text-neutral-600 mb-2">
                      Country Code *
                    </label>
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-full bg-[#f8f8f8] border border-neutral-300 rounded-xl px-3 py-3.5 text-black focus:outline-none focus:border-black transition-colors text-sm"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} {c.country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-7">
                    <label className="block text-xs uppercase font-bold tracking-wider text-neutral-600 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#f8f8f8] border border-neutral-300 rounded-xl px-4 py-3.5 text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-neutral-600 mb-2">
                    Primary Service Requirement
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#f8f8f8] border border-neutral-300 rounded-xl px-4 py-3.5 text-black focus:outline-none focus:border-black transition-colors text-sm"
                  >
                    <option value="Brand Strategy">Brand Strategy</option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="Brand Communication">Brand Communication</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="SEO">SEO - Search Engine Optimisation</option>
                    <option value="Comprehensive 360 Partnership">Comprehensive 360 Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-neutral-600 mb-2">
                    Share Your Message / Project Scope *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you want to achieve, timeline, and current challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#f8f8f8] border border-neutral-300 rounded-xl px-4 py-3.5 text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-black text-white font-bold rounded-2xl uppercase tracking-wider text-sm hover:bg-pink-600 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
                  <CheckCircle size={44} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-black mb-2">
                  Inquiry Sent Successfully!
                </h3>
                <p className="text-neutral-600 text-sm max-w-md mb-8">
                  Thank you for submitting your brief. A Doors Studio account executive will contact you shortly to schedule an introductory strategy session.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 bg-black text-white font-bold rounded-full uppercase tracking-wider text-xs hover:bg-neutral-800 transition-colors"
                >
                  Submit Another Brief
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Office Cards & Direct Connect */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-black text-white rounded-3xl p-8 shadow-xl">
              <span className="text-xs font-mono uppercase text-pink-400 font-bold block mb-2">
                Fast Direct Assistance
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                Chat Directly With A Strategist
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                Have a quick question or urgent campaign timeline? Connect with our leadership team immediately on WhatsApp.
              </p>

              <a
                href="https://api.whatsapp.com/send/?phone=%2B919310922550"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25d366] text-white font-bold rounded-full text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-lg"
              >
                <MessageSquare size={16} />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Office Locations Mini Cards */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
              <h4 className="text-sm font-mono uppercase font-bold text-neutral-400">
                Global Operations
              </h4>

              <div className="border-b border-neutral-100 pb-4">
                <span className="text-xs font-bold text-pink-500 uppercase block mb-1">
                  India (HQ - Gurugram)
                </span>
                <p className="text-xs text-neutral-600 mb-1">
                  Lower Ground Floor, 1319, Sec-43, Sushant Lok Phase I, Gurugram 122002
                </p>
                <a href="tel:+919711327111" className="text-xs font-bold text-black hover:text-pink-500">
                  +91-9711-327-111
                </a>
              </div>

              <div className="border-b border-neutral-100 pb-4">
                <span className="text-xs font-bold text-yellow-500 uppercase block mb-1">
                  India (Goa Office)
                </span>
                <p className="text-xs text-neutral-600 mb-1">
                  SF1, Solsons Trade Center, Block C, Porvorim, Goa 403521
                </p>
                <a href="tel:+919910952002" className="text-xs font-bold text-black hover:text-yellow-500">
                  +91-991-095-2002
                </a>
              </div>

              <div className="border-b border-neutral-100 pb-4">
                <span className="text-xs font-bold text-green-600 uppercase block mb-1">
                  UAE (Dubai Office)
                </span>
                <p className="text-xs text-neutral-600 mb-1">
                  Dhanguard Business Center, 12th Floor, Citi Bank Bldg, Dubai
                </p>
                <a href="tel:+971527861181" className="text-xs font-bold text-black hover:text-green-600">
                  +971-52-786-1181
                </a>
              </div>

              <div>
                <span className="text-xs font-bold text-orange-500 uppercase block mb-1">
                  USA (Austin Office)
                </span>
                <p className="text-xs text-neutral-600 mb-1">
                  5900 Balcones Drive, Suite 100, Austin, TX 78731
                </p>
                <a href="tel:+7375309339" className="text-xs font-bold text-black hover:text-orange-500">
                  (737) 530 9339
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
