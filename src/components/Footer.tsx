"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0c0c0c] text-white pt-16 pb-12 overflow-hidden border-t border-neutral-800">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10">
        {/* Top Header Logo Section */}
        <div className="pb-12 border-b border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center font-black text-2xl tracking-tighter">
              DS
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-black uppercase tracking-tighter block leading-none">
                DOORS<span className="text-pink-500">.</span>STUDIO
              </span>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium mt-1 block">
                Best Digital Marketing Agency in India
              </span>
            </div>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs font-mono uppercase text-neutral-500 tracking-widest">
              Turning Big Ideas Into Bold Brands
            </span>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-neutral-800 text-sm">
          {/* Col 1: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-400">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-neutral-300 font-normal">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition-colors">
                  Work With Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Get In Touch
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs uppercase font-bold tracking-widest text-neutral-400">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-neutral-300 font-normal">
              <li>
                <Link href="/brand-strategy" className="hover:text-white transition-colors">
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link href="/brand-identity" className="hover:text-white transition-colors">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/brand-communication" className="hover:text-white transition-colors">
                  Brand Communication
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/performance-marketing" className="hover:text-white transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/website-designing-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Global Operations & Office 1 & 2 */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <h3 className="text-xs uppercase font-bold tracking-widest text-pink-400 mb-2">
                Doors Studio® India (HQ)
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Lower Ground Floor, 1319, Sec-43, Sushant Lok Phase I, Gurugram, Haryana 122002
              </p>
              <a
                href="tel:+919711327111"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-200 mt-2 hover:text-white"
              >
                <Phone size={12} /> +91-9711-327-111
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase font-bold tracking-widest text-yellow-400 mb-2">
                Doors Studio® India (GOA)
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Office No. SF1, 2nd Floor, Solsons Trade Center, Block C, Porvorim, Goa 403521
              </p>
              <a
                href="tel:+919910952002"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-200 mt-2 hover:text-white"
              >
                <Phone size={12} /> +91-991-095-2002
              </a>
            </div>
          </div>

          {/* Col 4: International Offices */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <h3 className="text-xs uppercase font-bold tracking-widest text-green-400 mb-2">
                Doors Studio® UAE (DUBAI)
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Dhanguard Business Center, 12th Floor, Office 022, Citi Bank Bldg, Healthcare City, Dubai
              </p>
              <a
                href="tel:+971527861181"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-200 mt-2 hover:text-white"
              >
                <Phone size={12} /> +971-52-786-1181
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase font-bold tracking-widest text-orange-400 mb-2">
                Doors Studio® USA (AUSTIN)
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                5900 Balcones Drive, Suite 100, Austin, TX 78731, United States
              </p>
              <a
                href="tel:+7375309339"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-200 mt-2 hover:text-white"
              >
                <Phone size={12} /> (737) 530 9339
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials, Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-400">
          <p className="order-2 md:order-1 text-center md:text-left">
            Copyright © 2025 Signtific Advertising Pvt. Ltd. | All rights reserved
          </p>

          <div className="flex items-center gap-5 order-1 md:order-2">
            <a
              href="https://www.facebook.com/doorsstudio.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/doorsstudio.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://in.linkedin.com/company/doors-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-medium hover:text-white transition-colors order-3 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={16} className="text-pink-500" />
          </button>
        </div>
      </div>
    </footer>
  );
}
