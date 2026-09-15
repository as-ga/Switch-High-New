"use client";

import React from "react";
import Link from "next/link";
import { Asterisk, ArrowUpRight, Mail } from "lucide-react";
import { useModal } from "@/context/ModalContext";

interface Capability {
  num: string;
  title: string;
  tagline: string;
  href: string;
  videoSrc: string;
  col1: string[];
  col2: string[];
  accentColor: string;
}

const capabilities: Capability[] = [
  {
    num: "01",
    title: "Brand Strategy",
    tagline: "We craft bold, standout strategies to transform your brand into an unforgettable icon.",
    href: "/brand-strategy",
    videoSrc: "https://www.doorsstudio.com/assets/front/videos/brand-strategy.mp4",
    col1: ["Market Analysis", "Brand Audits", "Brand Purpose & Vision"],
    col2: ["Target Audience Profiling", "Strategic Roadmap", "Growth Opportunities"],
    accentColor: "text-yellow-500",
  },
  {
    num: "02",
    title: "Brand Identity",
    tagline: "From logos to language, we design every element to reflect your brand's true essence.",
    href: "/brand-identity",
    videoSrc: "https://www.doorsstudio.com/assets/front/videos/brand-identity.mp4",
    col1: ["Logo Design", "Visual Identity", "Brand Guidelines"],
    col2: ["Brand Architecture", "Tagline & Messaging", "Packaging & Collateral"],
    accentColor: "text-pink-500",
  },
  {
    num: "03",
    title: "Brand Communication",
    tagline: "Turning your brand's voice into a powerful story that speaks to your audience.",
    href: "/brand-communication",
    videoSrc: "https://www.doorsstudio.com/assets/front/videos/brand-communication.mp4",
    col1: ["Integrated Communication Plans", "Storytelling Approach", "Brand Advocacy", "Media Outreach"],
    col2: ["Content Strategy", "Brand Positioning", "PR Strategy & Planning"],
    accentColor: "text-orange-500",
  },
  {
    num: "04",
    title: "Digital Marketing",
    tagline: "Building your online presence with strategies that engage, excite, and convert.",
    href: "/digital-marketing",
    videoSrc: "https://www.doorsstudio.com/assets/front/videos/digital-marketing.mp4",
    col1: ["Social Media Platform Management", "User-Generated Content (UGC)", "Content Strategy & Curation"],
    col2: ["Community Engagement", "Influencer Outreach", "Analytics & Reporting", "Reputation Management"],
    accentColor: "text-green-500",
  },
  {
    num: "05",
    title: "Performance Marketing",
    tagline: "Data-driven campaigns focused on boosting conversions and accelerating your business growth.",
    href: "/performance-marketing",
    videoSrc: "https://www.doorsstudio.com/assets/front/videos/performance-marketing.mp4",
    col1: ["SEO - Search Engine Optimisation", "SEM - Search Engine Marketing", "Paid Performance Ads"],
    col2: ["Email & WhatsApp Marketing", "Media Planning & Buying", "Conversion Rate Optimisation"],
    accentColor: "text-yellow-500",
  },
  {
    num: "06",
    title: "Web Development",
    tagline: "Custom solutions for fast, responsive, and scalable web experiences.",
    href: "/website-designing-development",
    videoSrc: "https://www.doorsstudio.com/assets/front/videos/web-development.mp4",
    col1: ["Website Designing & Development", "Web & Mobile App Development", "E-commerce Solutions"],
    col2: ["UI/UX Designing & Planning", "CRM & ERP Development", "Custom API Integrations"],
    accentColor: "text-blue-500",
  },
];

export default function StickyCapabilities() {
  const { openModal } = useModal();

  return (
    <section className="relative bg-[#f2f2f2] pt-12 pb-24">
      {/* Section Header */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 pb-8 flex justify-between items-center border-b border-neutral-300 mb-8">
        <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono">
          (Capabilities)
        </span>
        <span className="text-xs font-mono uppercase text-neutral-400">
          Scroll To Explore All 06 Core Services
        </span>
      </div>

      {/* Cards container */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 flex flex-col gap-12 sm:gap-20">
        {capabilities.map((cap) => (
          <div
            key={cap.num}
            className="sticky top-28 bg-[#f2f2f2] border-t-2 border-neutral-300 pt-8 sm:pt-12 pb-12 rounded-2xl shadow-sm transition-all"
          >
            {/* Header: Title and Number */}
            <div className="flex justify-between items-baseline mb-8">
              <Link href={cap.href} className="group">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-black group-hover:text-neutral-700 transition-colors">
                  {cap.title}
                </h2>
              </Link>
              <span className={`text-3xl sm:text-6xl font-black uppercase font-mono ${cap.accentColor}`}>
                {cap.num}
              </span>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-3xl md:text-4xl font-normal leading-snug text-neutral-800 max-w-4xl mb-12">
              {cap.tagline}
            </p>

            {/* Grid with 2 columns of bullet points + Video column */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-neutral-300 pt-8">
              {/* Deliverables Col 1 */}
              <div className="lg:col-span-3">
                <ul className="flex flex-col gap-3">
                  {cap.col1.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-neutral-700">
                      <Asterisk size={16} className="text-pink-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables Col 2 */}
              <div className="lg:col-span-4">
                <ul className="flex flex-col gap-3">
                  {cap.col2.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base font-medium text-neutral-700">
                      <Asterisk size={16} className="text-pink-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Explore & Enquire Links */}
                <div className="flex flex-wrap items-center gap-6 mt-8">
                  <Link href={cap.href} className="uline-double text-black font-bold uppercase text-sm">
                    <span>Explore Service</span>
                    <ArrowUpRight size={18} className="ml-1" />
                  </Link>

                  <button
                    onClick={() => openModal(cap.title)}
                    className="speak-btn text-xs uppercase"
                  >
                    <span>Enquire Now</span>
                    <Mail size={14} />
                  </button>
                </div>
              </div>

              {/* Video Preview Col */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] bg-neutral-900 border border-neutral-300">
                  <video
                    src={cap.videoSrc}
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
        ))}
      </div>
    </section>
  );
}
