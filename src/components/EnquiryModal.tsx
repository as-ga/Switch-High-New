"use client";

import React, { useState } from "react";
import { X, CheckCircle, Send, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import confetti from "canvas-confetti";

const countryCodes = [
  { code: "+91", country: "India (IN)" },
  { code: "+971", country: "UAE (AE)" },
  { code: "+1", country: "USA / Canada (US/CA)" },
  { code: "+44", country: "United Kingdom (UK)" },
  { code: "+65", country: "Singapore (SG)" },
  { code: "+61", country: "Australia (AU)" },
  { code: "+49", country: "Germany (DE)" },
  { code: "+33", country: "France (FR)" },
  { code: "+966", country: "Saudi Arabia (SA)" },
  { code: "+974", country: "Qatar (QA)" },
  { code: "+965", country: "Kuwait (KW)" },
  { code: "+968", country: "Oman (OM)" },
  { code: "+973", country: "Bahrain (BH)" },
];

export default function EnquiryModal() {
  const { isOpen, closeModal, serviceSelected, careerSelected } = useModal();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    countryCode: "+91",
    phone: "",
    service: serviceSelected || "Digital Marketing",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger celebration confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Fallback
      }
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      email: "",
      company: "",
      countryCode: "+91",
      phone: "",
      service: "Digital Marketing",
      message: "",
    });
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#141414] text-white border border-neutral-800 rounded-3xl w-full max-w-xl p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-mono text-pink-400 font-semibold flex items-center gap-1.5 mb-1">
                <Sparkles size={14} /> Switch High Global
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                {careerSelected ? `Apply For ${careerSelected}` : "Let's Connect"}
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Tell us about your brand goals and our strategists will get back within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs sm:text-sm">
              <div>
                <label className="block text-neutral-400 font-medium mb-1 uppercase tracking-wider text-[11px]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="eg: John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-400 font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="eg: john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    placeholder="eg: Acme Corporation"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-5">
                  <label className="block text-neutral-400 font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Country *
                  </label>
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code} className="bg-neutral-900 text-white">
                        {c.code} {c.country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-7">
                  <label className="block text-neutral-400 font-medium mb-1 uppercase tracking-wider text-[11px]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-pink-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 font-medium mb-1 uppercase tracking-wider text-[11px]">
                  Service Requirement
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
                >
                  <option value="Brand Strategy">Brand Strategy</option>
                  <option value="Brand Identity">Brand Identity</option>
                  <option value="Brand Communication">Brand Communication</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="Web Development">Web Development</option>
                  <option value="SEO & Growth">SEO & Growth</option>
                  <option value="Comprehensive 360 Agency">Comprehensive 360 Agency</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-400 font-medium mb-1 uppercase tracking-wider text-[11px]">
                  Message / Project Scope *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about your brand challenge, timeline, or current goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold rounded-2xl uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-600/20 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-6">
              <CheckCircle size={36} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
              Message Received!
            </h3>
            <p className="text-neutral-400 text-sm max-w-md mb-8">
              Thank you for reaching out to Switch High. Our strategy team will review your requirements and reach out via phone/email shortly.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-white text-black font-bold rounded-full uppercase tracking-wider text-xs hover:bg-neutral-200 transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
