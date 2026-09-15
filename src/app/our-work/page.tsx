"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Filter, Sparkles, Video, Mail } from "lucide-react";
import MarqueeHeader from "@/components/MarqueeHeader";
import ClientMarquee from "@/components/ClientMarquee";
import { useModal } from "@/context/ModalContext";

interface Project {
  id: string;
  title: string;
  category: "all" | "branding" | "performance" | "digital" | "web";
  categoryLabel: string;
  client: string;
  image: string;
  videoUrl?: string;
  results: string;
}

const projects: Project[] = [
  {
    id: "vi-john-1",
    title: "Reinventing Grooming For The Next Generation",
    category: "branding",
    categoryLabel: "Brand Identity & Strategy",
    client: "Vi John",
    image: "https://www.doorsstudio.com/assets/admin/images/works/1739340219_df5299ceee381286336c.jpg",
    results: "+140% Brand Recall & Modern Repositioning",
  },
  {
    id: "vi-john-2",
    title: "Omnichannel Creative Advertising & Product Launch",
    category: "digital",
    categoryLabel: "Digital Marketing",
    client: "Vi John",
    image: "https://www.doorsstudio.com/assets/admin/images/works/1739340248_b2102790397d56170ffd.jpg",
    results: "2.8M+ Reach & 4.2x ROAS",
  },
  {
    id: "rg-hospitals",
    title: "RG Hospitals Marathon & Public Health Movement",
    category: "performance",
    categoryLabel: "Performance & Campaign",
    client: "RG Hospitals",
    image: "https://www.doorsstudio.com/assets/admin/images/works/1739340054_ce6d9600c80e177623fa.jpg",
    results: "15,000+ Participants & 8M+ Impressions",
  },
  {
    id: "portfolio-video-1",
    title: "Clicks. Conversions. Creativity. High Velocity DaaS",
    category: "performance",
    categoryLabel: "Performance Marketing",
    client: "Tech & DaaS Ecosystem",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://www.doorsstudio.com/assets/front/videos/portfolio.mp4",
    results: "350% Increase in Inbound Pipeline",
  },
  {
    id: "portfolio-video-2",
    title: "Master The Market. Enterprise B2B FinTech Platform",
    category: "web",
    categoryLabel: "Web Development",
    client: "Fintech Leaders",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://www.doorsstudio.com/assets/front/videos/portfolio-two.mp4",
    results: "Sub-Second Latency & 99.99% Uptime",
  },
  {
    id: "dhampure-packaging",
    title: "Dhampure Organic Packaging & D2C Growth Engine",
    category: "branding",
    categoryLabel: "Brand Identity",
    client: "Dhampure",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    results: "+220% D2C Conversions",
  },
  {
    id: "paras-health",
    title: "Paras Health Digital Healthcare Journey & SEO",
    category: "performance",
    categoryLabel: "SEO & Growth",
    client: "Paras Health",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    results: "Top 3 Organic Search Rankings across 40+ Keywords",
  },
  {
    id: "pacific-mall",
    title: "Pacific Mall Omnichannel Footfall & Lifestyle Ads",
    category: "digital",
    categoryLabel: "Digital Marketing",
    client: "Pacific Mall",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop",
    results: "Record Weekend Footfalls & 5M+ Local Reach",
  },
  {
    id: "yamaha-campaign",
    title: "Yamaha High-Octane Digital Experience & Community",
    category: "web",
    categoryLabel: "Web & Digital",
    client: "Yamaha",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop",
    results: "+45% Mobile Engagement",
  },
];

export default function OurWorkPage() {
  const { openModal } = useModal();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filterTabs = [
    { id: "all", label: "ALL" },
    { id: "branding", label: "BRAND STRATEGY & IDENTITY" },
    { id: "performance", label: "PERFORMANCE MARKETING" },
    { id: "digital", label: "DIGITAL MARKETING" },
    { id: "web", label: "WEB DEVELOPMENT" },
  ];

  return (
    <div className="w-full bg-[#f2f2f2] overflow-hidden">
      {/* 1. HERO MARQUEE */}
      <section className="pt-12 sm:pt-16 pb-12">
        <MarqueeHeader text="The Wow We Deliver" reverse={true} speedSeconds={25} />

        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-neutral-300 pb-10">
            <div>
              <span className="text-xs font-mono uppercase text-pink-500 font-bold tracking-widest block mb-2">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-tight">
                Case studies that proved <br />
                <span className="text-pink-500">creativity drives commerce.</span>
              </h2>
            </div>
            <button
              onClick={() => openModal()}
              className="speak-btn text-xs uppercase"
            >
              <span>Start Your Case Study</span>
              <Mail size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="max-w-[1520px] mx-auto px-6 sm:px-10 pb-12">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. PROJECT GRID */}
      <section className="max-w-[1520px] mx-auto px-6 sm:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="aspect-[4/3] bg-neutral-900 overflow-hidden relative">
                {item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest rounded-full">
                    {item.client}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-mono uppercase text-pink-500 font-bold block mb-2">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-4 leading-snug group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex justify-between items-center text-xs font-semibold">
                  <span className="text-neutral-500 font-mono">{item.results}</span>
                  <button
                    onClick={() => openModal(item.title)}
                    className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors cursor-pointer"
                    title="Enquire about this service"
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CLIENT TICKER */}
      <ClientMarquee />

      {/* 5. BOTTOM CTA BANNER */}
      <section className="py-20 max-w-[1520px] mx-auto px-6 sm:px-10">
        <div className="bg-black text-white rounded-3xl p-8 sm:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-2">
              Ready to create the next viral breakthrough?
            </h3>
            <p className="text-neutral-400 text-sm">
              Let&apos;s formulate the strategy and execute campaigns that command attention.
            </p>
          </div>
          <button
            onClick={() => openModal()}
            className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-full hover:bg-pink-500 hover:text-white transition-all shadow-lg cursor-pointer shrink-0"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
