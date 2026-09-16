"use client";

import React from "react";
import Link from "next/link";
import { Asterisk, Mail } from "lucide-react";
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
  highlightClass: string;
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
    highlightClass: "yellow-highlight",
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
    highlightClass: "pink-highlight",
  },
  {
    num: "03",
    title: "Brand Communication",
    tagline: "Turning your brand's voice into a powerful story that speaks to your audience.",
    href: "/brand-communication",
    videoSrc: "https://www.doorsstudio.com/assets/front/videos/brand-communication.mp4",
    col1: ["Integrated Communication Plans", "Storytelling Approach", "Brand Advocacy", "Media Outreach"],
    col2: ["Content Strategy", "Brand Positioning", "Public Relations Strategy & Planning"],
    accentColor: "text-orange-500",
    highlightClass: "orange-highlight",
  },
  {
    num: "04",
    title: "Digital Marketing",
    tagline: "Building your online presence with strategies that engage, excite, and convert.",
    href: "/digital-marketing",
    videoSrc: "https://www.doorsstudio.com/assets/front/videos/digital-marketing.mp4",
    col1: ["Social Media Platform Management", "User-Generated Content (UGC)", "Content Strategy & Curation"],
    col2: ["Community Engagement", "Bloggers & Influencer Outreach", "Analytics & Reporting", "Online Reputation Management"],
    accentColor: "text-green-600",
    highlightClass: "green-highlight",
  },
  {
    num: "05",
    title: "Performance Marketing",
    tagline: "Data-driven campaigns focused on boosting conversions and accelerating your business growth.",
    href: "/performance-marketing",
    videoSrc: "https://www.doorsstudio.com/assets/front/videos/performance-marketing.mp4",
    col1: ["SEO - Search Engine Optimisation", "SEM - Search Engine Marketing", "Social Media Platform Ads"],
    col2: ["Google & Display Ads", "Email & Messaging Platform Marketing", "Media Planning & Buying"],
    accentColor: "text-yellow-500",
    highlightClass: "yellow-highlight",
  },
  {
    num: "06",
    title: "Web Development",
    tagline: "Custom solutions for fast, responsive, and scalable web experiences.",
    href: "/website-designing-development",
    videoSrc: "https://www.doorsstudio.com/assets/front/videos/web-development.mp4",
    col1: ["Website Designing & Development", "Web & Mobile Application Development", "E-commerce Web & App Development"],
    col2: ["UI/UX Designing & Planning", "CRM & ERP Development", "API Integrations"],
    accentColor: "text-blue-600",
    highlightClass: "blue-highlight",
  },
];

export default function StickyCapabilities() {
  const { openModal } = useModal();

  return (
    <section className="relative bg-[#f2f2f2] pt-8 pb-28 overflow-clip">
      {/* Capabilities Section Header */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 pb-6 flex justify-between items-center border-b border-[#CFD5D7] mb-8">
        <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono">
          (Capabilities)
        </span>
        <span className="text-xs font-mono uppercase text-neutral-400">
          Scroll To Stack All 06 Core Services
        </span>
      </div>

      {/* Stacked Cards Container */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 flex flex-col gap-16">
        {capabilities.map((cap) => (
          <div
            key={cap.num}
            className="sticky top-24 bg-[#f2f2f2] border-t border-[#CFD5D7] pt-8 sm:pt-14 pb-14 rounded-2xl shadow-xl transition-all duration-300"
          >
            {/* Header: Title and Big Number */}
            <div className="flex justify-between items-baseline mb-6 border-b border-[#CFD5D7] pb-6">
              <Link href={cap.href} className="group">
                <h2 className="text-3xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-black group-hover:text-neutral-600 transition-colors">
                  {cap.title}
                </h2>
              </Link>
              <span className={`text-4xl sm:text-7xl font-black uppercase font-mono ${cap.accentColor}`}>
                {cap.num}
              </span>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-3xl md:text-4xl font-normal leading-tight text-neutral-800 max-w-5xl mb-12">
              {cap.tagline}
            </p>

            {/* Grid: 2 Columns of Deliverables + Video */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-[#CFD5D7] pt-8">
              {/* Deliverables Col 1 */}
              <div className="lg:col-span-4">
                <ul className="flex flex-col gap-3.5">
                  {cap.col1.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base font-medium text-neutral-800">
                      <Asterisk size={16} className="text-pink-500 shrink-0 mt-1 spin-asterisk" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables Col 2 */}
              <div className="lg:col-span-4">
                <ul className="flex flex-col gap-3.5">
                  {cap.col2.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base font-medium text-neutral-800">
                      <Asterisk size={16} className="text-pink-500 shrink-0 mt-1 spin-asterisk" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Explore with Switch High SVG Arrow & Enquire CTA */}
                <div className="flex flex-wrap items-center gap-6 mt-10">
                  <Link
                    href={cap.href}
                    className="uline-double arrow-svg text-black font-bold uppercase text-sm tracking-wider"
                  >
                    <span>Explore</span>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 67.59 46.46"
                      className="w-8 h-5"
                    >
                      <polygon
                        points="0.5,19.41 50.58,19.41 31.67,0.5 44.26,0.5 66.89,23.13 44.06,45.96 31.83,45.96 50.39,27.4 0.5,27.4"
                        fill="currentColor"
                      />
                    </svg>
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

              {/* Video Preview Card */}
              <div className="lg:col-span-4 service-video-card">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-neutral-900 border border-neutral-300">
                  <video
                    src={cap.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-700"
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
