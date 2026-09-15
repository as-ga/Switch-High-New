import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Brand Strategy Agency in India | Doors Studio",
  description:
    "Craft bold, standout brand strategies that define market positioning, audience segmentation, and unstoppable growth with Doors Studio.",
};

export default function BrandStrategyPage() {
  return (
    <ServicePageTemplate
      serviceName="Brand Strategy"
      heroHeadline="Stand Out or Blend In—Your Choice. Powerful Brand Positioning Strategy."
      heroSubhead="We craft bold, standout strategies to transform your brand into an unforgettable icon."
      videoSrc="https://www.doorsstudio.com/assets/front/videos/brand-strategy.mp4"
      aboutTitle="Powerful Brand Positioning Strategy for Impact"
      aboutDescription={[
        "In a world full of noise, how does your brand make its voice heard? A killer brand strategy is your secret weapon. It’s about carving out that unique space where your brand shines, unapologetically standing out in the sea of competition.",
        "We take your vision, values, and goals, mix them into a bold, attention-grabbing concoction, and build a brand positioning strategy that makes your brand unforgettable.",
        "From creating an identity that speaks to your audience to setting you up for long-term success with a solid brand marketing strategy, we make sure your brand doesn’t just survive—it thrives.",
      ]}
      deliverables={[
        {
          title: "Market & Competitor Analysis",
          description: "Deep dive into market dynamics, competitor positioning gaps, and white space opportunities.",
        },
        {
          title: "Brand Audits & Health Checks",
          description: "Evaluating current perception, customer sentiments, touchpoints, and consistency bottlenecks.",
        },
        {
          title: "Brand Purpose, Mission & Vision",
          description: "Clarifying why your brand exists and articulating a guiding north star for culture and customers.",
        },
        {
          title: "Target Audience Profiling & ICP",
          description: "Detailed persona mapping, pain point identification, and behavioral trigger modeling.",
        },
        {
          title: "Strategic Go-To-Market Roadmap",
          description: "Actionable quarterly milestones, resource planning, and execution blueprint for scaling.",
        },
        {
          title: "Growth Opportunities & Expansion",
          description: "Unlocking new product categories, geographic expansion strategies, and monetization levers.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "Discovery & Immersion",
          desc: "We dissect your business model, customer data, and competitive landscape through stakeholder interviews.",
        },
        {
          step: "Phase 02",
          title: "Positioning & Narrative",
          desc: "We pinpoint your singular value proposition and craft the core strategic narrative.",
        },
        {
          step: "Phase 03",
          title: "Roadmap Formulation",
          desc: "We architect tactical rollouts across product, marketing channels, and customer touchpoints.",
        },
        {
          step: "Phase 04",
          title: "Execution & Monitoring",
          desc: "We ensure brand alignment across all internal teams and track ongoing brand equity metrics.",
        },
      ]}
      faqs={[
        {
          question: "Why is brand strategy critical before running performance ads?",
          answer:
            "Without a clear brand strategy, marketing spend is wasted on generic messaging that fails to convert. A solid strategy gives performance campaigns distinct hooks, clear audience targeting, and high lifetime customer value.",
        },
        {
          question: "How long does a brand strategy sprint take?",
          answer:
            "A standard end-to-end brand strategy engagement typically spans 3 to 6 weeks, depending on the complexity of market research, competitor audits, and stakeholder alignment.",
        },
        {
          question: "What deliverables will we receive at the end?",
          answer:
            "You receive a comprehensive Brand Strategy Playbook containing your market audit, ICP personas, positioning matrix, value proposition, messaging architecture, and a 12-month growth roadmap.",
        },
      ]}
    />
  );
}
