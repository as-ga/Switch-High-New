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
  subtext,
  reverse = false,
  speedSeconds = 25,
}: MarqueeHeaderProps) {
  // Repeat items for seamless infinite marquee
  const items = Array(8).fill(text);

  return (
    <div className="w-full overflow-hidden py-4 select-none">
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speedSeconds}s linear infinite`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-black mr-6"
          >
            <span>{item}</span>
            <span className="inline-block mx-4 sm:mx-8 text-pink-500">
              <Asterisk size={48} className="spin-asterisk" />
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}
