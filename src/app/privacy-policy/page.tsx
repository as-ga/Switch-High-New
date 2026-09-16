import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Switch High",
  description: "Privacy Policy and terms of use for Switch High and Signtific Advertising Pvt. Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#f2f2f2] min-h-screen py-16 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white border border-neutral-200 rounded-3xl p-8 sm:p-14 shadow-lg">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              Privacy Policy
            </h1>
            <span className="text-xs font-mono text-neutral-400">
              Last Updated: January 2025 | Switch High®
            </span>
          </div>
        </div>

        <div className="space-y-6 text-neutral-700 text-sm sm:text-base leading-relaxed border-t border-neutral-100 pt-8">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-tight text-black mb-2">
              1. Overview & Scope
            </h2>
            <p>
              Signtific Advertising Pvt. Ltd. (operating as <strong>Switch High®</strong>) is committed to safeguarding the personal data and privacy of our website visitors, clients, and partners. This policy explains how we collect, process, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-tight text-black mb-2">
              2. Information We Collect
            </h2>
            <p>
              When you submit an inquiry or project brief on our website, we may collect your name, business email address, phone number, company name, and project scope details. We also collect non-identifiable technical data such as browser type, IP location, and browsing analytics to optimize website performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-tight text-black mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              Your information is strictly used to evaluate your business requirements, prepare tailored strategy proposals, communicate project updates, and provide high-caliber agency services. We do not sell or monetize personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-tight text-black mb-2">
              4. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard encryption, firewalls, and access control mechanisms to ensure your data remains secure and confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-tight text-black mb-2">
              5. Contacting Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data modification or deletion, please reach out to us at{" "}
              <a href="mailto:hello@signtific.co.in" className="text-pink-600 font-bold underline">
                hello@signtific.co.in
              </a>{" "}
              or call our Global HQ at +91-9711-327-111.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
