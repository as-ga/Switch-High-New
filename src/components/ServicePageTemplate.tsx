"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Asterisk, ArrowUpRight, Mail, ChevronDown, CheckCircle, Sparkles } from "lucide-react";
import MarqueeHeader from "@/components/MarqueeHeader";
import ClientMarquee from "@/components/ClientMarquee";
import { useModal } from "@/context/ModalContext";

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePageProps {
  serviceName: string;
  heroHeadline: string;
  heroSubhead: string;
  videoSrc: string;
  aboutTitle: string;
  aboutDescription: string[];
  deliverables: ServiceDeliverable[];
  processSteps: { step: string; title: string; desc: string }[];
  faqs: ServiceFAQ[];
  accentColorClass?: string;
}

export default function ServicePageTemplate({
  serviceName,
  heroHeadline,
  heroSubhead,
  videoSrc,
  aboutTitle,
  aboutDescription,
  deliverables,
  processSteps,
  faqs,
  accentColorClass = "text-pink-500",
}: ServicePageProps) {
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-[#f2f2f2] overflow-hidden">
      {/* 1. HERO MARQUEE */}
      <section className="pt-12 sm:pt-16 pb-8">
        <MarqueeHeader text={serviceName} reverse={true} speedSeconds={25} />

        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 pt-10">
          <div className="border-b border-neutral-300 pb-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-pink-500 font-bold tracking-widest block mb-2">
                Specialized Service
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-tight max-w-4xl">
                {heroHeadline}
              </h2>
            </div>
            <button
              onClick={() => openModal(serviceName)}
              className="speak-btn text-xs uppercase"
            >
              <span>Enquire About {serviceName}</span>
              <Mail size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. THINK BIG WITH US / VIDEO + POSITIONING */}
      <section className="py-16 max-w-[1520px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Video */}
          <div className="lg:col-span-5">
            <h4 className="font-mono text-sm uppercase font-bold text-neutral-500 mb-4">
              Think big with us.
            </h4>
            <div className="rounded-3xl overflow-hidden bg-black shadow-xl aspect-square border border-neutral-300">
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Description & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase text-pink-500 font-bold tracking-widest block mb-2">
              Strategic Capability
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-4">
              {aboutTitle}
            </h2>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-6">
              {heroSubhead}
            </h3>
            <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed mb-8">
              {aboutDescription.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => openModal(serviceName)}
                className="speak-btn text-xs uppercase px-8 py-4"
              >
                <span>Enquire Now</span>
                <Mail size={16} />
              </button>
              <Link href="/our-work" className="uline-double text-black font-bold uppercase text-xs">
                Explore Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DELIVERABLES / CAPABILITIES */}
      <section className="py-20 bg-white border-y border-neutral-300">
        <div className="max-w-[1520px] mx-auto px-6 sm:px-10">
          <div className="mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono block mb-2">
              (What We Deliver)
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-black leading-none">
              Comprehensive <span className="text-pink-500">Deliverables.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((d, idx) => (
              <div
                key={idx}
                className="bg-[#f8f8f8] border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-mono font-bold mb-6 group-hover:bg-pink-500 transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3 group-hover:text-pink-600 transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {d.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between text-xs font-semibold text-neutral-400">
                  <span>Included in {serviceName}</span>
                  <Asterisk size={14} className="text-pink-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STEP-BY-STEP PROCESS */}
      <section className="py-24 max-w-[1520px] mx-auto px-6 sm:px-10">
        <div className="mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono block mb-2">
            (The Execution Roadmap)
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-black leading-none">
            How We <span className="text-pink-500">Make It Happen.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-500 block mb-4">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Phase 0{idx + 1}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CLIENT TICKER */}
      <ClientMarquee />

      {/* 6. FAQS ACCORDION */}
      <section className="py-24 max-w-[1520px] mx-auto px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono block mb-2">
              (Got Questions?)
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-black">
              Frequently Asked <span className="text-pink-500">Questions.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-base sm:text-lg text-black hover:text-pink-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-pink-500" : "text-neutral-400"}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-neutral-600 text-sm sm:text-base leading-relaxed border-t border-neutral-100 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-16 max-w-[1520px] mx-auto px-6 sm:px-10 pb-24">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl">
          <div>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2">
              Scale your brand with {serviceName}.
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base">
              Get an actionable roadmap and measurable growth plan tailored to your industry.
            </p>
          </div>
          <button
            onClick={() => openModal(serviceName)}
            className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-full hover:bg-pink-500 hover:text-white transition-all shadow-lg cursor-pointer shrink-0"
          >
            Start Your Brief
          </button>
        </div>
      </section>
    </div>
  );
}
