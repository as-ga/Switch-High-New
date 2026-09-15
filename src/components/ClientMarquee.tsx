"use client";

import React from "react";

const clientLogos = [
  { name: "Medanta", img: "https://www.doorsstudio.com/assets/front/img/clients/medanta.jpg" },
  { name: "OYO", img: "https://www.doorsstudio.com/assets/front/img/clients/oyo.jpg" },
  { name: "Mankind", img: "https://www.doorsstudio.com/assets/front/img/clients/mankind.jpg" },
  { name: "Pansari", img: "https://www.doorsstudio.com/assets/front/img/clients/pansari.jpg" },
  { name: "Paras Health", img: "https://www.doorsstudio.com/assets/front/img/clients/paras.jpg" },
  { name: "VI John", img: "https://www.doorsstudio.com/assets/front/img/clients/v-jhon.jpg" },
  { name: "Tata Bluescope", img: "https://www.doorsstudio.com/assets/front/img/clients/tata.jpg" },
  { name: "ShardaCare", img: "https://www.doorsstudio.com/assets/front/img/clients/sharda.jpg" },
  { name: "Yamaha", img: "https://www.doorsstudio.com/assets/front/img/clients/yamaha.png" },
  { name: "RG Hospitals", img: "https://www.doorsstudio.com/assets/front/img/clients/rg.jpg" },
  { name: "Pacific Mall", img: "https://www.doorsstudio.com/assets/front/img/clients/pacific-mall.jpg" },
  { name: "Amrita University", img: "https://www.doorsstudio.com/assets/front/img/clients/amrita.jpg" },
  { name: "Dhampure", img: "https://www.doorsstudio.com/assets/front/img/clients/dhampure.jpg" },
  { name: "Diagnear", img: "https://www.doorsstudio.com/assets/front/img/clients/diagnear.jpg" },
  { name: "Eastman", img: "https://www.doorsstudio.com/assets/front/img/clients/eastman.jpg" },
  { name: "Fevicol", img: "https://www.doorsstudio.com/assets/front/img/clients/favicol.jpg" },
];

export default function ClientMarquee() {
  const row1 = [...clientLogos, ...clientLogos];
  const row2 = [...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()];

  return (
    <section className="py-20 bg-[#f2f2f2] overflow-hidden border-y border-neutral-300">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 mb-10">
        <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono">
          (Trusted by Visionaries & Market Leaders)
        </span>
      </div>

      {/* Row 1 - Leftward */}
      <div className="flex overflow-hidden py-3 mb-4 select-none">
        <div className="flex animate-marquee whitespace-nowrap gap-6 will-change-transform">
          {row1.map((client, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-44 h-24 sm:w-52 sm:h-28 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center p-4 shrink-0 shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0"
            >
              <img
                src={client.img}
                alt={`${client.name} logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Rightward */}
      <div className="flex overflow-hidden py-3 select-none">
        <div className="flex animate-marquee-reverse whitespace-nowrap gap-6 will-change-transform">
          {row2.map((client, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-44 h-24 sm:w-52 sm:h-28 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center p-4 shrink-0 shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0"
            >
              <img
                src={client.img}
                alt={`${client.name} logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
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
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
