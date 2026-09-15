"use client";

import React from "react";
import { MessageSquare, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function FloatingWidgets() {
  const { openModal } = useModal();

  return (
    <>
      {/* Floating Tilted Badge: Let's build your brand */}
      <div className="tiltedbox">
        <button
          onClick={() => openModal()}
          className="tiltedbox-inner group cursor-pointer"
          title="Open enquiry form"
        >
          <span>Let&apos;s build your brand</span>
          <Sparkles size={14} className="text-pink-400 group-hover:rotate-45 transition-transform" />
        </button>
      </div>

      {/* Floating WhatsApp Bubble */}
      <a
        href="https://api.whatsapp.com/send/?phone=%2B919310922550&text=Hi%20Doors%20Studio,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsappicon"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageSquare size={24} />
      </a>
    </>
  );
}
