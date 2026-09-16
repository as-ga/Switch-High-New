"use client";

import React, { useState } from "react";
import { ArrowUpRight, Briefcase, Coffee, Heart, MapPin, Sparkles, Star, Users, Zap } from "lucide-react";
import MarqueeHeader from "@/components/MarqueeHeader";
import { useModal } from "@/context/ModalContext";

interface JobRole {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

const jobOpenings: JobRole[] = [
  {
    title: "Performance Marketing Manager",
    department: "Growth & Paid Media",
    location: "Gurugram / Hybrid",
    type: "Full-Time",
    experience: "3-5 Years",
    description: "Lead multi-channel performance advertising campaigns (Google Ads, Meta Ads, TikTok) with high ROAS and data-driven scaling.",
  },
  {
    title: "Senior Brand Strategist",
    department: "Brand & Creative",
    location: "Gurugram / Goa",
    type: "Full-Time",
    experience: "4-6 Years",
    description: "Architect brand positioning narratives, market analysis frameworks, and go-to-market strategies for global enterprise and startup clients.",
  },
  {
    title: "Full Stack Next.js / TS Engineer",
    department: "Engineering",
    location: "Remote / Gurugram",
    type: "Full-Time",
    experience: "2-4 Years",
    description: "Develop cutting-edge, high-performance web applications, interactive web experiences, and scalable APIs using Next.js, React, and TypeScript.",
  },
  {
    title: "Creative Copywriter & Content Strategist",
    department: "Creative",
    location: "Gurugram",
    type: "Full-Time",
    experience: "2-4 Years",
    description: "Craft witty, high-converting copy, viral video scripts, taglines, and integrated brand stories across digital and print media.",
  },
  {
    title: "Senior UI/UX Product Designer",
    department: "Design",
    location: "Gurugram / Remote",
    type: "Full-Time",
    experience: "3-5 Years",
    description: "Design sleek, world-class digital interfaces, design systems, interactive prototypes, and conversion-focused web architectures in Figma.",
  },
  {
    title: "Social Media & UGC Growth Lead",
    department: "Digital Marketing",
    location: "Gurugram",
    type: "Full-Time",
    experience: "2-3 Years",
    description: "Spearhead creator outreach, trend analysis, short-form video production, and viral community engagement strategies.",
  },
];

const perks = [
  {
    title: "High-Octane Culture",
    desc: "Work alongside energetic strategists, designers, and growth hackers who love breaking boundaries.",
    icon: Zap,
    color: "text-pink-500",
  },
  {
    title: "Unlimited Fuel",
    desc: "Premium artisanal coffee, craft snacks, and energetic team brainstorming sessions every single day.",
    icon: Coffee,
    color: "text-yellow-500",
  },
  {
    title: "Accelerated Growth",
    desc: "No corporate red tape. Fast-track promotions, project ownership, and continuous learning budgets.",
    icon: Star,
    color: "text-green-500",
  },
  {
    title: "Global Projects",
    desc: "Work on international campaigns across India, UAE, and USA with industry-defining brands.",
    icon: Users,
    color: "text-orange-500",
  },
];

export default function CareerPage() {
  const { openModal } = useModal();

  return (
    <div className="w-full bg-[#f2f2f2] overflow-hidden">
      {/* 1. HERO MARQUEE */}
      <section className="pt-12 sm:pt-16 pb-12">
        <MarqueeHeader text="Jobs at Switch High" reverse={true} speedSeconds={25} />

        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-neutral-300 pb-10">
            <div>
              <span className="text-xs font-mono uppercase text-pink-500 font-bold tracking-widest block mb-2">
                Join The Movement
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-tight">
                The Doors Are Open for <br />
                <span className="text-pink-500">Bold Ideas & Brilliant People.</span>
              </h2>
            </div>
            <a
              href="https://doorsstudio.zohorecruit.com/jobs/Careers"
              target="_blank"
              rel="noopener noreferrer"
              className="speak-btn text-xs uppercase"
            >
              <span>Zoho Portal Openings</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. CULTURE & VIDEO SECTION */}
      <section className="py-16 max-w-[1520px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h3 className="text-xl font-mono uppercase font-bold text-neutral-600 mb-4">
              Think big with us.
            </h3>
            <div className="rounded-3xl overflow-hidden bg-black shadow-xl aspect-square border border-neutral-300">
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
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase text-pink-500 font-bold tracking-widest block mb-2">
              Life At Switch High
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-6">
              Bold Ideas, Big Laughs, <br />
              <span className="text-pink-500">Better Mondays!</span>
            </h2>
            <div className="space-y-4 text-neutral-700 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                At Switch High, work isn’t just a checklist—it’s an exhilarating ride. We fuel up on creativity, collaboration, and copious amounts of caffeine to turn wild ideas into campaigns that make people stop, stare, and share.
              </p>
              <p>
                Here, every voice counts, and every idea gets its moment in the spotlight. No challenge is too big, no concept too crazy—we break rules and rewrite the playbook to create something that wows.
              </p>
            </div>
            <div>
              <button
                onClick={() => openModal(undefined, "General Application")}
                className="speak-btn text-xs uppercase px-8 py-4"
              >
                <span>Submit Open Application</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERKS & CULTURE */}
      <section className="py-20 bg-white border-y border-neutral-300">
        <div className="max-w-[1520px] mx-auto px-6 sm:px-10">
          <div className="mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono block mb-2">
              (Why You&apos;ll Love It Here)
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-black leading-none">
              Built for <span className="text-pink-500">High Performers.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f2f2f2] border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center ${p.color} mb-6 shadow-sm`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-3">
                    {p.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CURRENT OPEN ROLES LIST */}
      <section className="py-24 max-w-[1520px] mx-auto px-6 sm:px-10">
        <div className="mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono block mb-2">
              (Open Roles)
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-black leading-none">
              Current <span className="text-pink-500">Openings.</span>
            </h2>
          </div>
          <span className="text-xs font-mono uppercase text-neutral-500">
            {jobOpenings.length} Active Positions
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {jobOpenings.map((job, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 group"
            >
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-[11px] font-mono font-bold uppercase rounded-full">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-500">
                    <MapPin size={12} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-500">
                    <Briefcase size={12} /> {job.type} ({job.experience})
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2 group-hover:text-pink-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="shrink-0 w-full lg:w-auto">
                <button
                  onClick={() => openModal(undefined, job.title)}
                  className="w-full lg:w-auto px-6 py-3 bg-black text-white font-bold rounded-full uppercase tracking-wider text-xs hover:bg-pink-500 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
