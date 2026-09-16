"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MessageSquare, Mail, Phone, X, ExternalLink } from "lucide-react";
import { useModal } from "@/context/ModalContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [servicesOpen, setServicesOpen] = useState(false);

  if (!isOpen) return null;

  const services = [
    { name: "Brand Strategy", href: "/brand-strategy" },
    { name: "Brand Identity", href: "/brand-identity" },
    { name: "Brand Communication", href: "/brand-communication" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "Performance Marketing", href: "/performance-marketing" },
    { name: "Web Development", href: "/website-designing-development" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
      {/* Top bar with close button */}
      <div className="flex justify-between items-center px-6 py-6 border-b border-neutral-800">
        <Link href="/" onClick={onClose} className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter uppercase text-white font-sans">
            SWITCH<span className="text-pink-500">.</span>HIGH
          </span>
          <span className="text-[9px] tracking-widest uppercase text-neutral-400">
            Digital Marketing Agency
          </span>
        </Link>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Nav List */}
      <div className="flex flex-col px-6 py-8 gap-6 text-xl uppercase font-semibold tracking-wider">
        <Link
          href="/about-us"
          onClick={onClose}
          className={`py-2 border-b border-neutral-800 flex items-center justify-between transition-colors ${
            pathname === "/about-us" ? "text-pink-500 font-bold" : "text-white hover:text-pink-400"
          }`}
        >
          <span>About Us</span>
          <span className="text-xs opacity-50">01</span>
        </Link>

        {/* Accordion for Services */}
        <div className="border-b border-neutral-800 pb-2">
          <button
            type="button"
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full flex items-center justify-between py-2 text-white hover:text-pink-400 transition-colors uppercase font-semibold text-xl tracking-wider text-left"
          >
            <span>What We Do</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {servicesOpen && (
            <div className="flex flex-col gap-3 pl-4 pt-4 pb-2 text-base font-normal tracking-wide text-neutral-300">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={onClose}
                  className={`py-1.5 flex items-center justify-between border-l-2 pl-3 transition-colors ${
                    pathname === service.href
                      ? "border-pink-500 text-pink-400 font-semibold"
                      : "border-neutral-800 text-neutral-400 hover:text-white"
                  }`}
                >
                  <span>{service.name}</span>
                  <span className="text-xs text-neutral-600">→</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/our-work"
          onClick={onClose}
          className={`py-2 border-b border-neutral-800 flex items-center justify-between transition-colors ${
            pathname === "/our-work" ? "text-pink-500 font-bold" : "text-white hover:text-pink-400"
          }`}
        >
          <span>Our Work</span>
          <span className="text-xs opacity-50">03</span>
        </Link>

        <Link
          href="/career"
          onClick={onClose}
          className={`py-2 border-b border-neutral-800 flex items-center justify-between transition-colors ${
            pathname === "/career" ? "text-pink-500 font-bold" : "text-white hover:text-pink-400"
          }`}
        >
          <span>Career</span>
          <span className="text-xs opacity-50">04</span>
        </Link>

        <Link
          href="/contact-us"
          onClick={onClose}
          className={`py-2 border-b border-neutral-800 flex items-center justify-between transition-colors ${
            pathname === "/contact-us" ? "text-pink-500 font-bold" : "text-white hover:text-pink-400"
          }`}
        >
          <span>Contact Us</span>
          <span className="text-xs opacity-50">05</span>
        </Link>
      </div>

      {/* Bottom info & direct contacts */}
      <div className="px-6 py-8 bg-neutral-950 border-t border-neutral-900 flex flex-col gap-5">
        <button
          onClick={() => {
            onClose();
            openModal();
          }}
          className="w-full py-3.5 bg-white text-black font-semibold rounded-full uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors"
        >
          Chat With An Expert
        </button>

        <div className="flex justify-around items-center pt-2 text-neutral-400 text-xs">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B919310922550"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
          >
            <MessageSquare size={16} /> WhatsApp
          </a>
          <a
            href="mailto:hello@signtific.co.in"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="tel:+919711327111"
            className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors"
          >
            <Phone size={16} /> Call
          </a>
        </div>
      </div>
    </div>
  );
}
