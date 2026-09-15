import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Website Design & Development Agency | Doors Studio",
  description:
    "Custom Next.js, React, and full-stack web development services for fast, responsive, and scalable digital experiences.",
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      serviceName="Web Development"
      heroHeadline="Custom Solutions for Fast, Responsive, and Scalable Web Experiences."
      heroSubhead="Next.js, modern UI/UX engineering, e-commerce, and enterprise web applications."
      videoSrc="https://www.doorsstudio.com/assets/front/videos/web-development.mp4"
      aboutTitle="Engineering High-Converting Digital Flagships"
      aboutDescription={[
        "Your website is the heart of your digital presence. If it’s slow, confusing, or looks like a template from 2018, you are losing high-value customers every second.",
        "At Doors Studio, we engineer bespoke digital flagships that load instantly, enchant visitors with buttery micro-animations, and convert traffic into paying customers.",
        "Using cutting-edge stacks like Next.js, React, TypeScript, and modern headless CMS systems, we build scalable web architectures designed for hyper-growth.",
      ]}
      deliverables={[
        {
          title: "Custom Website Designing & Development",
          description: "Pixel-perfect, ultra-fast corporate websites, marketing landing pages, and interactive brand hubs.",
        },
        {
          title: "Web & Mobile Application Development",
          description: "Full-stack React, Next.js, and React Native applications built with scalable backend architectures.",
        },
        {
          title: "E-commerce Web & App Development",
          description: "Shopify Plus, Headless Commerce, and custom checkout flows engineered for high AOV and zero friction.",
        },
        {
          title: "UI/UX Designing & Design Systems",
          description: "Figma wireframing, high-fidelity interactive prototypes, user journey mapping, and reusable component libraries.",
        },
        {
          title: "CRM & ERP Development & Custom Portals",
          description: "Internal tools, client dashboards, customer portals, and seamless enterprise workflow automation.",
        },
        {
          title: "API Integrations & Performance Optimization",
          description: "Payment gateways, marketing automation APIs, ERP syncs, and 100/100 Google Lighthouse speed optimizations.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "Architecture & Wireframing",
          desc: "We define information architecture, user journeys, sitemaps, and low-fidelity UX wireframes.",
        },
        {
          step: "Phase 02",
          title: "Interactive UI Design",
          desc: "We design complete high-fidelity mockups in Figma with custom animations and interactive states.",
        },
        {
          step: "Phase 03",
          title: "Full-Stack Development",
          desc: "Our engineers build the site in Next.js/React with clean, type-safe TypeScript code and responsive CSS.",
        },
        {
          step: "Phase 04",
          title: "QA, Speed Tuning & Launch",
          desc: "Rigorous cross-browser testing, accessibility checks, 100/100 Core Web Vitals optimization, and zero-downtime deployment.",
        },
      ]}
      faqs={[
        {
          question: "What technology stack do you build websites with?",
          answer:
            "We primarily build with modern full-stack architectures including Next.js, React, TypeScript, Tailwind CSS, Node.js, and headless CMS platforms like Sanity, Strapi, or Shopify Plus.",
        },
        {
          question: "Will the website be mobile-responsive and SEO-friendly?",
          answer:
            "Yes! Every web solution we engineer is 100% responsive across all mobile, tablet, and desktop viewports, with server-rendered SEO tags, schema markup, and optimal Core Web Vitals.",
        },
      ]}
    />
  );
}
