"use client";

import React from "react";
import { Asterisk } from "lucide-react";

interface MarqueeHeaderProps {
  text: string;
  subtext?: string;
  reverse?: boolean;
  speedSeconds?: number;
  highlightWords?: string[];
  highlightColors?: string[];
}

export default function MarqueeHeader({
  text,
  reverse = false,
  speedSeconds = 25,
}: MarqueeHeaderProps) {
  // A clean set of items duplicated so the translation from 0% to -50% is mathematically seamless
  const repetitions = Array(6).fill(text);

  return (
    <div className="w-full overflow-hidden py-3 select-none pointer-events-none">
      <div
        className={reverse ? "marquee-track-right" : "marquee-track-left"}
        style={{
          animationDuration: `${speedSeconds}s`,
        }}
      >
        {/* First Half */}
        <div className="flex shrink-0 items-center">
          {repetitions.map((item, idx) => (
            <div key={`track-a-${idx}`} className="inline-flex items-center">
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-black">
                {item}
              </span>
              <span className="inline-block mx-4 sm:mx-8 text-pink-500">
                <Asterisk size={52} className="spin-asterisk" />
              </span>
            </div>
          ))}
        </div>

        {/* Second Half (Exact Duplicate for seamless infinite loop) */}
        <div className="flex shrink-0 items-center">
          {repetitions.map((item, idx) => (
            <div key={`track-b-${idx}`} className="inline-flex items-center">
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-black">
                {item}
              </span>
              <span className="inline-block mx-4 sm:mx-8 text-pink-500">
                <Asterisk size={52} className="spin-asterisk" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
