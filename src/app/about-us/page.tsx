"use client";

import React from "react";
import Link from "next/link";
import { Asterisk, ArrowDown, ArrowUpRight, Mail, Sparkles, Target, Zap, Shield, Heart } from "lucide-react";
import MarqueeHeader from "@/components/MarqueeHeader";
import ClientMarquee from "@/components/ClientMarquee";
import { useModal } from "@/context/ModalContext";

export default function AboutUsPage() {
  const { openModal } = useModal();

  const values = [
    {
      title: "Fearless Innovation",
      desc: "We don't settle for the safe option. We craft breakthrough creative solutions that command attention and ignite industry conversations.",
      icon: Zap,
      color: "text-pink-500",
    },
    {
      title: "Data-Backed Precision",
      desc: "Bold imagination meets rigorous analytics. Every creative risk is grounded in consumer behavior, market data, and measurable performance.",
      icon: Target,
      color: "text-yellow-500",
    },
    {
      title: "Relentless Ownership",
      desc: "We treat your brand as our own. We stay in the trenches from strategy to execution, optimizing relentlessly until we win.",
      icon: Shield,
      color: "text-green-500",
    },
    {
      title: "Human Connection",
      desc: "Algorithms don't buy products—humans do. We engineer stories and digital experiences that build deep emotional loyalty.",
      icon: Heart,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="w-full bg-[#f2f2f2] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-16 pb-12">
        <MarqueeHeader text="Agency Beings" reverse={true} speedSeconds={25} />

        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-tight">
                We&apos;re the wild, <span className="text-pink-500">creative geniuses</span> who know how to make your brand unforgettable.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-6">
                We craft experiences that captivate, inspire, and leave a lasting impression. Ready to shake things up? <strong className="text-black">Let&apos;s make your brand the next big thing!</strong>
              </p>
              <button
                onClick={() => openModal()}
                className="speak-btn text-xs uppercase"
              >
                <span>Partner With Us</span>
                <Mail size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BIG HERO IMAGE BANNER */}
      <section className="max-w-[1520px] mx-auto px-6 sm:px-10 py-12">
        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] sm:aspect-[21/9] bg-neutral-900 border border-neutral-300">
          <img
            src="https://www.doorsstudio.com/assets/front/img/about-us-image.webp"
            alt="Doors Studio Agency Beings"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. BOLD IDEAS MARQUEE & STORY */}
      <section className="py-20 bg-white border-y border-neutral-300">
        <MarqueeHeader text="Bold Ideas, Big Impact" reverse={false} speedSeconds={30} />
        <MarqueeHeader text="Bold Ideas, Big Impact" reverse={true} speedSeconds={30} />

        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase font-mono tracking-widest text-pink-500 font-bold block mb-2">
                Who We Are
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-tight">
                Not Just An Agency. <br />
                Your Brand Catalyst.
              </h3>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 text-neutral-700 text-base sm:text-lg leading-relaxed">
              <p>
                Founded on the belief that conventional advertising is obsolete, <strong>Doors Studio®</strong> is a powerhouse digital marketing and branding firm operating across India, the UAE, and the USA.
              </p>
              <p>
                We merge razor-sharp creative direction, world-class design engineering, and relentless performance marketing to propel emerging startups and established multinational corporations into category dominance.
              </p>
              <p>
                Whether building a brand from scratch, engineering high-speed web apps, or running multimillion-dollar performance marketing funnels, our team operates with single-minded focus: <strong>creating exponential business growth.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES / PRINCIPLES */}
      <section className="py-24 max-w-[1520px] mx-auto px-6 sm:px-10">
        <div className="mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono block mb-2">
            (The Doors Studio Standard)
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-black leading-none">
            What Drives Our <span className="text-pink-500">Obsession.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center ${v.color} mb-6`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-black mb-4">
                    {v.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Principle 0{idx + 1}</span>
                  <span className={v.color}>●</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. CLIENT TICKER */}
      <ClientMarquee />

      {/* 6. GLOBAL FOOTPRINT BANNER */}
      <section className="py-20 max-w-[1520px] mx-auto px-6 sm:px-10">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-pink-400 font-bold block mb-2">
              Ready to collaborate?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              Let&apos;s build a future-ready brand together.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Our teams in Gurugram, Goa, Dubai, and Austin are ready to engineer your brand&apos;s breakthrough.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={() => openModal()}
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-full hover:bg-pink-500 hover:text-white transition-all shadow-lg cursor-pointer"
            >
              Start Conversation
            </button>
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-neutral-900 border border-neutral-700 text-white font-bold uppercase tracking-wider text-xs rounded-full hover:bg-neutral-800 transition-all"
            >
              Contact Offices
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
