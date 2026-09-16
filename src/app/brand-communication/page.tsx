import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Brand Communication & Storytelling Agency | Switch High",
  description:
    "Turn your brand voice into powerful storytelling and integrated communication campaigns that captivate your audience.",
};

export default function BrandCommunicationPage() {
  return (
    <ServicePageTemplate
      serviceName="Brand Communication"
      heroHeadline="Turning Your Brand's Voice Into a Powerful Story That Speaks to Your Audience."
      heroSubhead="Storytelling, PR strategy, and omnichannel communication campaigns that build lasting loyalty."
      videoSrc="https://www.doorsstudio.com/assets/front/videos/brand-communication.mp4"
      aboutTitle="Narratives That Move Markets & Shape Culture"
      aboutDescription={[
        "Great products without compelling stories get overlooked. We help your brand find its authentic voice and communicate it with irresistible resonance.",
        "From high-impact launch campaigns and influencer advocacy to PR strategy and ongoing brand content, we create unified messaging that cuts through the noise.",
        "We ensure your brand shows up with purpose across press, social media, customer emails, and public events.",
      ]}
      deliverables={[
        {
          title: "Integrated Communication Plans",
          description: "360-degree campaign roadmaps unifying PR, advertising, social media, and direct messaging.",
        },
        {
          title: "Strategic Storytelling Frameworks",
          description: "Developing compelling founder stories, brand origin narratives, and customer transformation arcs.",
        },
        {
          title: "Brand Advocacy & Influencer Co-creation",
          description: "Partnering with respected creators and industry voices to amplify credible brand endorsements.",
        },
        {
          title: "Media Outreach & Public Relations",
          description: "Press releases, journalist relations, editorial placements, and feature article distributions.",
        },
        {
          title: "Content Strategy & Editorial Calendars",
          description: "Quarterly content themes, thought-leadership articles, whitepapers, and viral social hooks.",
        },
        {
          title: "Crisis Communications & PR Protocols",
          description: "Protecting brand reputation with pre-empted response templates and rapid-action response playbooks.",
        },
      ]}
      processSteps={[
        {
          step: "Phase 01",
          title: "Narrative Discovery",
          desc: "We extract your brand's unique stories, core values, and emotional hooks through deep stakeholder interviews.",
        },
        {
          step: "Phase 02",
          title: "Channel Architecture",
          desc: "We select the highest-leverage channels for your target demographics across digital, print, and PR.",
        },
        {
          step: "Phase 03",
          title: "Content Creation",
          desc: "Our copywriters and creative directors produce press materials, campaign assets, and video scripts.",
        },
        {
          step: "Phase 04",
          title: "Outreach & Amplification",
          desc: "We coordinate media distribution, influencer seeding, and digital PR to maximize reach and engagement.",
        },
      ]}
      faqs={[
        {
          question: "How does brand communication differ from digital marketing?",
          answer:
            "Brand communication focuses on the overarching narrative, PR, and emotional perception across all touchpoints, whereas digital marketing emphasizes technical execution and distribution across specific online channels.",
        },
      ]}
    />
  );
}
