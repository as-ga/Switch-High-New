"use client";

import React from "react";
import Link from "next/link";
import {
  Asterisk,
  ArrowDown,
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";
import StickyCapabilities from "@/components/StickyCapabilities";
import ClientMarquee from "@/components/ClientMarquee";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import MarqueeHeader from "@/components/MarqueeHeader";
import WorldMapAnimation from "@/components/WorldMapAnimation";
import { useModal } from "@/context/ModalContext";

export default function HomePage() {
  const { openModal } = useModal();

  return (
    <div className="w-full bg-[#f2f2f2]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 px-6 sm:px-10 min-h-[85vh] flex flex-col justify-between w-full">
        <div className="gap-8 items-start">
          {/* Main Giant Typography */}
          <div className=" flex flex-col items-center justify-center w-full">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.9] text-black">
              <div className="flex items-center flex-wrap  w-full gap-2 sm:gap-4">
                <Asterisk
                  size={60}
                  className="spin-asterisk text-black shrink-0"
                />
                <Asterisk size={60} strokeWidth={10.5} absoluteStrokeWidth />
                <Asterisk size={16} strokeWidth={2.25} absoluteStrokeWidth />
                <span>Define</span>
                <span className="pink-highlight">.</span>
                {"\u00A0"}
                <span>Design</span>

                <span className="yellow-highlight">.</span>
              </div>
              <div className="text-left sm:text-right text-neutral-900">
                <span>Build</span>
                <span className="green-highlight">.</span>
              </div>
              <div className="flex items-center gap-4 text-left">
                <ArrowDown
                  size={50}
                  className="text-yellow-500 hidden sm:inline-block shrink-0 animate-bounce"
                />
                <span>Market</span>
                <span className="orange-highlight">.</span>
              </div>
            </h1>
          </div>

          {/* Subtitle & Mission Card */}
          {/* <div className="lg:col-span-4 flex flex-col justify-end pt-6 lg:pt-12">
            <div className="bg-white/90 backdrop-blur-sm border border-neutral-300 rounded-3xl p-6 sm:p-8 shadow-sm">
              <span className="text-xs uppercase tracking-widest font-mono text-pink-500 font-bold block mb-2">
                Brand Transformation
              </span>
              <p className="text-base sm:text-lg font-normal leading-relaxed text-neutral-800">
                <strong>Switch High®</strong> is the best digital marketing
                agency in India that excels in launching, growing, and
                reinventing brands and startups into market leaders.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button
                  onClick={() => openModal()}
                  className="speak-btn text-xs uppercase"
                >
                  <span>Enquire Now</span>
                  <Mail size={14} />
                </button>
                <Link
                  href="/about-us"
                  className="uline text-xs uppercase font-bold tracking-wider text-black"
                >
                  About Us →
                </Link>
              </div>
            </div>
          </div> */}
        </div>

        {/* Scroll Bar Tag */}
        <div className="flex justify-between items-center pt-16 border-t border-neutral-300 mt-16 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-600">
          <div className="uline-double">Turning Big Ideas Into Bold Brands</div>
          <div className="flex items-center gap-2 font-mono text-neutral-400">
            <span>(Scroll Down)</span>
            <ArrowDown size={14} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. HERO VIDEO BANNER */}
      <section className="max-w-[1520px] mx-auto px-6 sm:px-10 pb-20">
        <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl aspect-[16/9] sm:aspect-[21/9]">
          <video
            src="https://www.doorsstudio.com/assets/front/videos/brand-big-idea2.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row justify-between items-start sm:items-end text-white gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-pink-400 font-bold block mb-1">
                Full-Service Capabilities
              </span>
              <p className="text-sm sm:text-lg uppercase tracking-wider font-semibold">
                Brand Strategy * Brand Identity * Brand Communication{" "}
                <br className="hidden sm:block" />
                Digital Marketing * Performance Marketing * Web Development
              </p>
            </div>
            <button
              onClick={() => openModal()}
              className="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-full hover:bg-pink-500 hover:text-white transition-all cursor-pointer shadow-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Big Text: Let's Brand Your Big Idea */}
        <div className="pt-16 pb-8 border-b border-neutral-300">
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tighter leading-none text-black">
            Let&apos;s <span className="pink-highlight">Brand</span> Your Big
            Idea.
          </h2>
        </div>
      </section>

      {/* 3. THINK BIG WITH US SECTION */}
      <section className="py-20 max-w-[1520px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Video */}
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-700 mb-6 font-mono">
              Think big with us.
            </h3>
            {/* <div className="rounded-3xl overflow-hidden bg-black shadow-xl aspect-square sm:aspect-[4/5] border border-neutral-300"> */}
            <video
              src="https://www.doorsstudio.com/assets/front/videos/marketing-is-our-jam.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </div>
          {/* </div> */}

          {/* Right Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs uppercase font-mono tracking-widest text-pink-500 font-bold mb-3 block">
              Strategic Excellence & High ROI
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight text-black mb-6">
              Marketing Is Our Jam & <br />
              <span className="pink-highlight">We Spread It Thick.</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-6 leading-snug">
              Powerful Digital Marketing Agency Solutions, Spread Wide!
            </h3>
            <div className="flex flex-col gap-4 text-neutral-700 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Switch High® is recognized as the best branding and digital
                marketing agency in India, specializing in crafting future-ready
                brands through a perfect fusion of vision, creativity, and
                performance technology.
              </p>
              <p>
                Our team collaborates with visionary leaders and ambitious
                companies to deliver impactful brand strategies, high-converting
                performance marketing, and cutting-edge digital experiences that
                drive measurable growth in a competitive marketplace.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => openModal()}
                className="speak-btn text-sm uppercase px-8 py-4"
              >
                <span>Enquire Now</span>
                <Mail size={16} />
              </button>
              <Link
                href="/about-us"
                className="uline-double text-black font-bold uppercase text-sm"
              >
                Discover Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES (STICKY SECTION) */}
      <StickyCapabilities />

      {/* 5. CLIENT TICKER (TRUSTED BY VISIONARIES) */}
      <ClientMarquee />

      {/* 6. METHOD MARQUEE & SECTION */}
      <section className="py-24 bg-white border-b border-neutral-300 overflow-hidden">
        <MarqueeHeader text="METHOD" reverse={false} speedSeconds={20} />
        <MarqueeHeader text="METHOD" reverse={true} speedSeconds={20} />

        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Pitch */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-xs uppercase font-mono tracking-widest text-pink-500 font-bold mb-3 block">
                The Switch High® Methodology
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-tight text-black mb-6">
                Empowering brands to lead and innovate for what’s next.
              </h2>
              <div className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-8 space-y-4">
                <p>
                  At our core, we partner with brands to help them lead and
                  innovate in an ever-evolving digital landscape. Through
                  strategic thinking and creative problem-solving, we enable
                  businesses to adapt to change and anticipate market trends.
                </p>
                <p>
                  Our focus is on shaping strong brand foundations and
                  meaningful digital experiences that prepare businesses for
                  what’s next.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <button
                  onClick={() => openModal("Growth & Strategy")}
                  className="speak-btn text-xs uppercase"
                >
                  <span>Enquire Now</span>
                  <Mail size={14} />
                </button>
                <Link
                  href="/our-work"
                  className="uline-double text-black font-bold uppercase text-xs"
                >
                  See Our Results →
                </Link>
              </div>
            </div>

            {/* Right Column: Video */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden bg-black shadow-xl aspect-[4/3] border border-neutral-200">
                <video
                  src="https://www.doorsstudio.com/assets/front/videos/explore-method.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL OFFICES / WORLD MAP PRESENCE */}
      <section className="py-24 max-w-[1520px] mx-auto px-6 sm:px-10">
        <div className="mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono block mb-2">
            (Global Operations)
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
            One Studio. Global Thinking. <br />
            <span className="pink-highlight">Built for the World.</span>
          </h2>
        </div>

        {/* Animated World Map */}
        <div className="mb-12">
          <WorldMapAnimation />
        </div>

        {/* 4 Office Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office 1: Gurugram HQ */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all">
            <div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 mb-6">
                <img
                  src="https://www.doorsstudio.com/assets/front/img/doors-gurugram.jpg"
                  alt="Gurugram Global Operations HQ"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-xs font-mono uppercase text-pink-500 font-bold block mb-1">
                Global Operations HQ
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight text-black mb-2">
                Gurugram, India
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Lower Ground Floor, 1319, Sec-43, Sushant Lok Phase I, Gurugram,
                Haryana 122002
              </p>
            </div>
            <a
              href="tel:+919711327111"
              className="text-xs font-semibold text-black hover:text-pink-500 pt-4 border-t border-neutral-100 flex items-center justify-between"
            >
              <span>+91-9711-327-111</span>
              <span>→</span>
            </a>
          </div>

          {/* Office 2: Goa */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all">
            <div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 mb-6">
                <img
                  src="https://www.doorsstudio.com/assets/front/img/doors-goa.jpg"
                  alt="Goa Growth Office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-xs font-mono uppercase text-yellow-500 font-bold block mb-1">
                Growth Office
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight text-black mb-2">
                Goa, India
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Office No. SF1, 2nd Floor, Solsons Trade Center, Block C,
                Porvorim, Goa 403521
              </p>
            </div>
            <a
              href="tel:+919910952002"
              className="text-xs font-semibold text-black hover:text-yellow-500 pt-4 border-t border-neutral-100 flex items-center justify-between"
            >
              <span>+91-991-095-2002</span>
              <span>→</span>
            </a>
          </div>

          {/* Office 3: Dubai */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all">
            <div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 mb-6">
                <img
                  src="https://www.doorsstudio.com/assets/front/img/office-3.jpg"
                  alt="Dubai UAE Growth Office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-xs font-mono uppercase text-green-500 font-bold block mb-1">
                Growth Office
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight text-black mb-2">
                Dubai, UAE
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                Dhanguard Business Center, 12th Floor, Office 022, Citi Bank
                Bldg, Healthcare City, Dubai
              </p>
            </div>
            <a
              href="tel:+971527861181"
              className="text-xs font-semibold text-black hover:text-green-500 pt-4 border-t border-neutral-100 flex items-center justify-between"
            >
              <span>+971-52-786-1181</span>
              <span>→</span>
            </a>
          </div>

          {/* Office 4: Austin USA */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all">
            <div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 mb-6">
                <img
                  src="https://www.doorsstudio.com/assets/front/img/office-4.jpg"
                  alt="Austin USA Growth Office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-xs font-mono uppercase text-orange-500 font-bold block mb-1">
                Growth Office
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight text-black mb-2">
                Austin, USA
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                5900 Balcones Drive, Suite 100, Austin, TX 78731, United States
              </p>
            </div>
            <a
              href="tel:+7375309339"
              className="text-xs font-semibold text-black hover:text-orange-500 pt-4 border-t border-neutral-100 flex items-center justify-between"
            >
              <span>(737) 530 9339</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Callout below offices */}
        <div className="mt-16 p-8 sm:p-12 bg-black text-white rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
              Ideas don&apos;t recognize borders. Neither do we.
            </h3>
            <p className="text-neutral-400 text-sm max-w-2xl">
              Switch High® brings sharp thinking, bold moves, and a fearless
              attitude to turn your brand from just another option into the only
              choice.
            </p>
          </div>
          <button
            onClick={() => openModal()}
            className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-full hover:bg-pink-500 hover:text-white transition-all cursor-pointer shrink-0 shadow-lg"
          >
            Let&apos;s Work Together
          </button>
        </div>
      </section>

      {/* 8. TESTIMONIALS SLIDER */}
      <TestimonialsSlider />

      {/* 9. FEATURED PORTFOLIO HIGHLIGHTS */}
      <section className="py-24 max-w-[1520px] mx-auto px-6 sm:px-10 border-t border-neutral-300">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono block mb-2">
              (Our Portfolio)
            </span>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              Featured <span className="pink-highlight">Works.</span>
            </h2>
          </div>
          <Link
            href="/our-work"
            className="uline-double text-black font-bold uppercase text-sm"
          >
            Explore Full Portfolio →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Work Item 1 */}
          <Link href="/our-work" className="group block">
            <div className="rounded-3xl overflow-hidden bg-black shadow-xl aspect-square border border-neutral-300 relative">
              <video
                src="https://www.doorsstudio.com/assets/front/videos/portfolio.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="pt-6 flex justify-between items-center">
              <div>
                <span className="text-xs font-mono uppercase text-pink-500 font-semibold block mb-1">
                  Brand & Performance
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black group-hover:text-pink-600 transition-colors">
                  Clicks. Conversions. Creativity.
                </h3>
              </div>
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>

          {/* Work Item 2 */}
          <Link href="/our-work" className="group block">
            <div className="rounded-3xl overflow-hidden bg-black shadow-xl aspect-square border border-neutral-300 relative">
              <video
                src="https://www.doorsstudio.com/assets/front/videos/portfolio-two.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="pt-6 flex justify-between items-center">
              <div>
                <span className="text-xs font-mono uppercase text-yellow-500 font-semibold block mb-1">
                  Omnichannel Growth
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black group-hover:text-yellow-600 transition-colors">
                  Master The Market.
                </h3>
              </div>
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
