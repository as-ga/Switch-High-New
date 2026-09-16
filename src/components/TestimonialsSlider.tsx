"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  img: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Avinash Ojha",
    role: "Managing Director & CEO - RG Hospitals",
    quote:
      "Switch High has completely transformed our online presence! Their team not only understood our brand but also developed a performance-driven marketing strategy that delivered impressive results. We saw a significant boost in leads and conversions within the first month. Highly recommend their services!",
    img: "https://www.doorsstudio.com/assets/front/img/testimonials/avinash.webp",
  },
  {
    name: "Vinamra Agarwal",
    role: "Head - Sales & Marketing, Dhampure",
    quote:
      "The team at Switch High took the time to understand our goals and crafted a tailored marketing plan that exceeded expectations. Their expertise in digital and performance marketing has been instrumental in our growth. We've seen a clear ROI from our campaigns and continue to trust them with our brand.",
    img: "https://www.doorsstudio.com/assets/front/img/testimonials/vinamra.webp",
  },
  {
    name: "Seema Vig",
    role: "Facility Director - Paras Health, Gurugram",
    quote:
      "Working with Switch High has been a game-changer for our business. Their data-driven approach to digital marketing and their commitment to achieving measurable results has helped us grow our customer base significantly. They're more than just a marketing agency; they're true partners in our success.",
    img: "https://www.doorsstudio.com/assets/front/img/testimonials/seema-vig.webp",
  },
  {
    name: "Gaurav Bansal",
    role: "Director - Polo Elevators",
    quote:
      "Partnering with Switch High was one of the best decisions we made for our business. Their performance marketing strategies have brought in tangible results, and their expertise in the digital space has made a real difference in how we engage with our audience. The team's dedication to our success is unmatched.",
    img: "https://www.doorsstudio.com/assets/front/img/testimonials/gaurav.webp",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#f2f2f2] border-t border-neutral-300 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10">
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 font-mono block mb-2">
              (Client Words)
            </span>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-black leading-none">
              Words of <br />
              <span className="text-pink-500">Thanks.</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm font-mono text-neutral-500">
              0{currentIndex + 1} — 0{testimonials.length}
            </span>

            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Active Card */}
        <div className="bg-white border border-neutral-200 rounded-3xl p-8 sm:p-14 shadow-lg relative overflow-hidden transition-all duration-300">
          <Quote
            size={120}
            className="absolute top-6 right-6 text-neutral-100 -rotate-12 pointer-events-none"
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 relative z-10">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-neutral-200 shrink-0 border-2 border-pink-500 shadow-md">
              <img
                src={current.img}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-black">
                {current.name}
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm font-medium">
                {current.role}
              </p>
            </div>
          </div>

          <blockquote className="text-lg sm:text-2xl md:text-3xl font-normal leading-relaxed text-neutral-800 relative z-10">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-8 relative z-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? "w-8 bg-black" : "w-2 bg-neutral-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
