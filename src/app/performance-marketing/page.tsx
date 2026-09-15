import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Performance Marketing Agency in India | Doors Studio",
  description:
    "Data-driven paid media campaigns, Google Ads, Meta Ads, SEO, and conversion optimization to boost your revenue and ROAS.",
};

export default function PerformanceMarketingPage() {
  return (
    <ServicePageTemplate
      serviceName="Performance Marketing"
      heroHeadline="Data-Driven Campaigns Focused on Boosting Conversions and Accelerating Business Growth."
      heroSubhead="Google Ads, Meta Ads, SEO, and omnichannel media buying that maximize ROAS and revenue."
      videoSrc="https://www.doorsstudio.com/assets/front/videos/performance-marketing.mp4"
      aboutTitle="Scientific Growth Engineering & ROI Maximization"
      aboutDescription={[
        "Performance marketing at Doors Studio isn’t guesswork—it’s mathematical rigor, continuous A/B testing, and relentless funnel optimization.",
        "We manage multi-million dollar ad budgets across Google Search, YouTube, Meta, TikTok, and Programmatic Display. Every dollar spent is tracked to revenue, CAC, and LTV.",
        "Combined with technical SEO and retention messaging, we create sustainable customer acquisition machines.",
      ]}
      deliverables={[
        {
          title: "SEO - Search Engine Optimisation",
          description: "Technical SEO audits, keyword ranking strategies, on-page optimization, and high-authority backlink building.",
        },
        {
          title: "SEM & Google Ads Management",
          description: "High-intent Google Search ads, Performance Max campaigns, YouTube video ads, and retargeting display networks.",
        },
        {
          title: "Meta & Social Performance Ads",
          description: "Data-driven creative testing on Facebook and Instagram targeting lookalike and custom in-market audiences.",
        },
        {
          title: "Email & WhatsApp Automated Funnels",
          description: "Lifecycle retention flows, abandoned cart triggers, win-back series, and VIP customer broadcasts.",
        },
        {
          title: "Media Planning & Direct Buying",
          description: "Strategic media planning, programmatic bidding, and cross-channel budget allocation for optimal blended ROAS.",
        },
        {
          title: "Conversion Rate Optimisation (CRO)",
          description: "Landing page heatmapping, multivariate A/B testing, and checkout flow streamlining.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "Tracking & Pixel Architecture",
          desc: "We verify server-side tracking (CAPI), Google Analytics 4, and conversion attribution pipelines.",
        },
        {
          step: "Phase 02",
          title: "Creative Matrix & Testing",
          desc: "We produce 20+ hooks, ad angles, and landing pages to test audience resonance rapidly.",
        },
        {
          step: "Phase 03",
          title: "Scaling Winners",
          desc: "We scale budgets aggressively on winning ad sets while trimming underperforming creatives.",
        },
        {
          step: "Phase 04",
          title: "Retention & LTV Expansion",
          desc: "We deploy automated email, SMS, and WhatsApp funnels to maximize customer lifetime value.",
        },
      ]}
      faqs={[
        {
          question: "What ad spend budgets do you manage?",
          answer:
            "We manage campaigns ranging from high-growth startup budgets ($5k-$20k/month) to enterprise-level multimillion-dollar global ad spends.",
        },
        {
          question: "How do you report results to clients?",
          answer:
            "We provide live 24/7 client dashboards (Looker Studio / customized analytics) alongside weekly strategy reviews with your dedicated Growth Lead.",
        },
      ]}
    />
  );
}
