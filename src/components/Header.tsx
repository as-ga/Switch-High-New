"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  MessageSquare,
  Phone,
  Mail,
  Menu,
  X,
  Asterisk,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

interface HeaderProps {
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export default function Header({
  onToggleMobileMenu,
  isMobileMenuOpen,
}: HeaderProps) {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Brand Strategy", href: "/brand-strategy" },
    { name: "Brand Identity", href: "/brand-identity" },
    { name: "Brand Communication", href: "/brand-communication" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Performance Marketing", href: "/performance-marketing" },
    { name: "Web Development", href: "/website-designing-development" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f2f2f2]/95 backdrop-blur-md shadow-sm py-4"
          : "bg-[#f2f2f2] py-6"
      }`}
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 flex justify-between items-center relative">
        {/* Brand Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 group relative z-10"
        >
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter uppercase text-black font-sans leading-none flex items-center">
              SWITCH
              <span className="text-pink-500 font-bold ml-0.5">.</span>
              <span className="font-light tracking-widest text-xs uppercase bg-black text-white px-1.5 py-0.5 ml-2 rounded">
                HIGH
              </span>
            </span>
            <span className="text-[9px] tracking-widest uppercase text-neutral-500 font-medium mt-0.5">
              Digital Marketing Agency
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link
            href="/about-us"
            className={`uline text-sm tracking-wider uppercase font-medium py-2 transition-colors ${
              pathname === "/about-us"
                ? "font-bold text-black border-b-2 border-black"
                : "text-neutral-800 hover:text-black"
            }`}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className="uline text-sm tracking-wider uppercase font-medium py-2 text-neutral-800 hover:text-black flex items-center gap-1 cursor-pointer"
            >
              What We Do
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-md shadow-xl border border-neutral-200 rounded-xl py-3 px-2 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setDropdownOpen(false)}
                    className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors flex items-center justify-between ${
                      pathname === service.href
                        ? "bg-black text-white"
                        : "text-neutral-800 hover:bg-neutral-100 hover:text-black"
                    }`}
                  >
                    <span>{service.name}</span>
                    <span className="text-neutral-400 group-hover:text-black text-xs">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/our-work"
            className={`uline text-sm tracking-wider uppercase font-medium py-2 transition-colors ${
              pathname === "/our-work"
                ? "font-bold text-black border-b-2 border-black"
                : "text-neutral-800 hover:text-black"
            }`}
          >
            Our Work
          </Link>

          <Link
            href="/career"
            className={`uline text-sm tracking-wider uppercase font-medium py-2 transition-colors ${
              pathname === "/career"
                ? "font-bold text-black border-b-2 border-black"
                : "text-neutral-800 hover:text-black"
            }`}
          >
            Career
          </Link>

          <Link
            href="/contact-us"
            className={`uline text-sm tracking-wider uppercase font-medium py-2 transition-colors ${
              pathname === "/contact-us"
                ? "font-bold text-black border-b-2 border-black"
                : "text-neutral-800 hover:text-black"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => openModal()}
            className="speak-btn text-xs tracking-wider uppercase"
          >
            <span>Chat with an expert</span>
          </button>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B919310922550&text&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="circle-double"
            aria-label="WhatsApp"
            title="Chat on WhatsApp"
          >
            <MessageSquare size={16} />
          </a>

          <a
            href="mailto:hello@signtific.co.in"
            className="circle-double"
            aria-label="Email"
            title="Email us"
          >
            <Mail size={16} />
          </a>

          <a
            href="tel:+919711327111"
            className="circle-double"
            aria-label="Phone"
            title="Call us"
          >
            <Phone size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => openModal()}
            className="speak-btn text-xs px-3 py-2"
          >
            Enquire
          </button>
          <button
            onClick={onToggleMobileMenu}
            className="p-2 rounded-lg bg-black text-white hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
