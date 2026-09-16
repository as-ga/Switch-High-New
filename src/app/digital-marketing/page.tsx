import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Digital Marketing Agency in India | Switch High",
  description:
    "Scale your digital presence with social media management, viral UGC content, creator outreach, and community engagement.",
};

export default function DigitalMarketingPage() {
  return (
    <ServicePageTemplate
      serviceName="Digital Marketing"
      heroHeadline="Building Your Online Presence With Strategies That Engage, Excite, and Convert."
      heroSubhead="Social media management, viral creator content, and digital community building."
      videoSrc="https://www.doorsstudio.com/assets/front/videos/digital-marketing.mp4"
      aboutTitle="Cultivating Cult Followings & Active Online Communities"
      aboutDescription={[
        "Modern digital marketing isn’t just posting pretty images—it’s about commanding algorithms, generating viral attention, and nurturing active communities that champion your brand.",
        "At Switch High, we manage your brand's digital ecosystem with precision. From Instagram reels and LinkedIn thought-leadership to creator UGC pipelines and online reputation management, we ensure you dominate the conversation.",
      ]}
      deliverables={[
        {
          title: "Social Media Platform Management",
          description: "End-to-end strategy, copywriting, graphic production, scheduling, and community response on Instagram, LinkedIn, X, and YouTube.",
        },
        {
          title: "User-Generated Content (UGC) Engine",
          description: "High-converting UGC video creative pipelines designed to look native, authentic, and engaging.",
        },
        {
          title: "Content Strategy & Video Curation",
          description: "Trending short-form reels, TikToks, carousel decks, and long-form thought-leadership assets.",
        },
        {
          title: "Community Management & Engagement",
          description: "Active comment moderation, direct message nurturing, and building loyal brand superfans.",
        },
        {
          title: "Blogger & Influencer Outreach",
          description: "Vetting, negotiating, and executing influencer campaigns with measurable referral tracking.",
        },
        {
          title: "Online Reputation Management (ORM)",
          description: "Monitoring review platforms, sentiment analysis, and proactive brand protection protocols.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "Audience & Platform Audit",
          desc: "We analyze your past performance, competitor content strategies, and platform-specific demographic behavior.",
        },
        {
          step: "Phase 02",
          title: "Content Pillars & Themes",
          desc: "We establish 4-5 core content pillars designed for education, entertainment, and conversion.",
        },
        {
          step: "Phase 03",
          title: "Production & Deployment",
          desc: "Our creative studio shoots, edits, designs, and distributes high-fidelity daily and weekly content.",
        },
        {
          step: "Phase 04",
          title: "Analytics & Iteration",
          desc: "We monitor engagement rate, viral reach, and conversion signals to continually double down on winning formats.",
        },
      ]}
      faqs={[
        {
          question: "Which social media platforms do you manage?",
          answer:
            "We manage all major digital platforms including Instagram, LinkedIn, YouTube, X (Twitter), Facebook, TikTok, and Pinterest depending on your target customer profile.",
        },
      ]}
    />
  );
}
