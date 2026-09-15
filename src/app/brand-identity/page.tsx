import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Brand Identity & Visual Design Agency | Doors Studio",
  description:
    "Design memorable visual identity systems, logo systems, brand guidelines, and packaging collateral with Doors Studio.",
};

export default function BrandIdentityPage() {
  return (
    <ServicePageTemplate
      serviceName="Brand Identity"
      heroHeadline="From Logos to Language, We Design Every Element to Reflect Your Brand's Essence."
      heroSubhead="Visual identity systems that make your brand magnetic, timeless, and unmistakable."
      videoSrc="https://www.doorsstudio.com/assets/front/videos/brand-identity.mp4"
      aboutTitle="Visual Systems That Command Market Respect"
      aboutDescription={[
        "Your brand identity is your visual handshake with the world. It’s what people see, feel, and remember when your name comes up.",
        "At Doors Studio, we design comprehensive visual languages that speak with authority. From iconic logos and bespoke typography to harmonious color palettes and tactile packaging, we ensure every touchpoint oozes confidence.",
        "We create design guidelines so thorough and intuitive that your team and partners can scale the brand effortlessly across any medium.",
      ]}
      deliverables={[
        {
          title: "Iconic Logo & Mark Design",
          description: "Distinctive primary and secondary logos, monograms, and responsive responsive glyphs.",
        },
        {
          title: "Complete Visual Identity Systems",
          description: "Color psychology palettes, typography hierarchies, layout grids, and graphic motifs.",
        },
        {
          title: "Comprehensive Brand Guidelines",
          description: "A definitive design Bible covering spacing rules, usage do's/don'ts, and media specifications.",
        },
        {
          title: "Brand Architecture & Sub-brands",
          description: "Structuring multi-product portfolios and sub-brand relationships into an organized ecosystem.",
        },
        {
          title: "Tagline & Brand Voice Guidelines",
          description: "Defining tone of voice, copy dos and don'ts, vocabulary, and elevator pitches.",
        },
        {
          title: "Packaging & Physical Collateral",
          description: "Stunning product packaging, business cards, merchandise, and environmental signage.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "Visual Moodboards",
          desc: "We explore distinct aesthetic directions, typography styles, and color palettes aligned with your strategy.",
        },
        {
          step: "Phase 02",
          title: "Concept Design",
          desc: "We craft multiple unique logo and visual system concepts and test them across real mockups.",
        },
        {
          step: "Phase 03",
          title: "Refinement & Systems",
          desc: "We refine the chosen direction and build out the complete iconography, stationery, and packaging assets.",
        },
        {
          step: "Phase 04",
          title: "Brand Book & Handover",
          desc: "We compile the master brand book and export print-ready vectors and digital asset libraries.",
        },
      ]}
      faqs={[
        {
          question: "What formats do you deliver the final logo and assets in?",
          answer:
            "We deliver all vector source files (AI, EPS, SVG, PDF) alongside high-res raster formats (PNG with transparency, JPG, WebP) formatted for digital, print, and billboard sizing.",
        },
        {
          question: "Can you rebrand an existing legacy company?",
          answer:
            "Yes, we specialize in both greenfield brand creation and modernizing legacy brand identities to help established businesses stay contemporary without losing their heritage equity.",
        },
      ]}
    />
  );
}
