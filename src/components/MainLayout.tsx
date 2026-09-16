"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingWidgets from "@/components/FloatingWidgets";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f2f2f2] text-black">
      <Header
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1 w-full pt-20">{children}</main>

      <Footer />
      <EnquiryModal />
      <FloatingWidgets />
    </div>
  );
}
