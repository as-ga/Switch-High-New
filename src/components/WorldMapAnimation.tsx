"use client";

import React from "react";
import { MapPin } from "lucide-react";

interface OfficeLocation {
  id: string;
  name: string;
  country: string;
  role: string;
  x: number; // percentage
  y: number; // percentage
  color: string;
}

const offices: OfficeLocation[] = [
  {
    id: "austin",
    name: "Austin",
    country: "USA",
    role: "Growth Office",
    x: 22,
    y: 42,
    color: "#f97316",
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    role: "Growth Office",
    x: 62,
    y: 44,
    color: "#22c55e",
  },
  {
    id: "gurugram",
    name: "Gurugram (HQ)",
    country: "India",
    role: "Global Operations HQ",
    x: 70,
    y: 43,
    color: "#f20574",
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    role: "Growth Office",
    x: 70,
    y: 52,
    color: "#f59e0b",
  },
];

export default function WorldMapAnimation() {
  return (
    <div className="relative w-full rounded-3xl bg-[#111111] p-6 sm:p-12 overflow-hidden border border-neutral-800 shadow-2xl text-white">
      {/* Background World Grid */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* SVG Connecting Paths */}
      <svg
        className="w-full h-64 sm:h-96"
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curving Global Flight Lines */}
        {/* Austin (220, 210) to Dubai (620, 220) */}
        <path
          d="M 220 210 Q 420 120 620 220"
          stroke="#f97316"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="animate-pulse"
          opacity="0.6"
        />

        {/* Dubai (620, 220) to Gurugram (700, 215) */}
        <path
          d="M 620 220 Q 660 190 700 215"
          stroke="#f20574"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-pulse"
          opacity="0.8"
        />

        {/* Gurugram (700, 215) to Goa (700, 260) */}
        <path
          d="M 700 215 L 700 260"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-pulse"
          opacity="0.8"
        />

        {/* Austin Pulse Beacon */}
        <g transform="translate(220, 210)">
          <circle r="16" fill="#f97316" opacity="0.2" className="animate-ping" />
          <circle r="8" fill="#f97316" />
          <circle r="3" fill="#ffffff" />
          <text x="14" y="5" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace">
            AUSTIN (USA)
          </text>
        </g>

        {/* Dubai Pulse Beacon */}
        <g transform="translate(620, 220)">
          <circle r="16" fill="#22c55e" opacity="0.2" className="animate-ping" />
          <circle r="8" fill="#22c55e" />
          <circle r="3" fill="#ffffff" />
          <text x="14" y="5" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace">
            DUBAI (UAE)
          </text>
        </g>

        {/* Gurugram Pulse Beacon (HQ) */}
        <g transform="translate(700, 215)">
          <circle r="22" fill="#f20574" opacity="0.25" className="animate-ping" />
          <circle r="10" fill="#f20574" />
          <circle r="4" fill="#ffffff" />
          <text x="16" y="-6" fill="#f20574" fontSize="13" fontWeight="900" fontFamily="monospace">
            GURUGRAM HQ
          </text>
        </g>

        {/* Goa Pulse Beacon */}
        <g transform="translate(700, 260)">
          <circle r="16" fill="#f59e0b" opacity="0.2" className="animate-ping" />
          <circle r="8" fill="#f59e0b" />
          <circle r="3" fill="#ffffff" />
          <text x="14" y="16" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">
            GOA OFFICE
          </text>
        </g>
      </svg>

      {/* Mini Legend */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500" /> Gurugram Global HQ
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" /> Goa Growth Office
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" /> Dubai UAE Office
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> Austin USA Office
          </span>
        </div>
        <span className="text-neutral-500 uppercase tracking-wider">
          Unified Global Operations Network
        </span>
      </div>
    </div>
  );
}
