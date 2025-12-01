export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "autonomous-l1-agent",
    title: "Autonomous L1 Agent",
    shortDescription:
      "End-to-end workflow blending automation and AI to handle incoming tickets without engineer involvement.",
    longDescription:
      "Built an Autonomous L1 workflow that blends Automation and AI to handle incoming tickets end to end. The workflow uses OpenAI at multiple stages to categorize issues, enrich tickets with contextual notes, and determine whether the request can be fully automated. For automatable requests like password resets or SharePoint access changes, sub-workflows execute the resolution automatically. For non-automatable requests, it sends a first response to the user and adds both general and AI-generated troubleshooting steps for engineers, tailored to each client's environment.",
    tags: ["Rewst", "OpenAI", "PSA", "Automation"],
  },
  {
    slug: "ai-driven-categorization-first-response",
    title: "AI-Driven Categorization & First Response",
    shortDescription:
      "AI-based ticket categorization and first-response emails to protect SLAs across MSP clients.",
    longDescription:
      "Created a workflow that triggers on new incoming tickets, uses OpenAI to categorize them based on existing PSA categories, and sends a first-response email to the user on behalf of the engineer. This offloads repetitive front-line communication, improves SLA adherence, and ensures consistent tone and quality for all outbound messages.",
    tags: ["OpenAI", "Rewst", "PSA", "SLAs"],
  },
  {
    slug: "ai-suggested-troubleshooting",
    title: "AI Suggested Troubleshooting",
    shortDescription:
      "OpenAI Assistant trained on tool-specific documentation to generate troubleshooting steps for engineers.",
    longDescription:
      "Built a workflow that uses an OpenAI Assistant trained on documentation relevant to each client's tools and stack. When a ticket comes in, the workflow sends context and error details to the Assistant, which returns structured troubleshooting steps. These are then added to ticket notes as 'Suggested Troubleshooting Steps for Technician', reducing research time and improving first-time fix rates.",
    tags: ["OpenAI Assistant", "Documentation", "Autotask"],
  },
  {
    slug: "user-travel-soc-alerts-whitelisting",
    title: "User Travel SOC Alerts Whitelisting",
    shortDescription:
      "Build IT 2025–presented solution for whitelisting travel-related SOC alerts in a scalable way.",
    longDescription:
      "Developed an end-to-end workflow for whitelisting travel-related SOC alerts, originally built around Barracuda and then enhanced to work with any SOC provider. The solution normalizes incoming alerts, applies travel-related logic, and pushes whitelisting actions or recommendations in a controlled, auditable way. This project was showcased for ITBD MSP partners as one of the top-rated automation solutions.",
    tags: ["Security", "SOC", "Power Automate"],
  },
  {
    slug: "user-onboarding-offboarding",
    title: "User Onboarding & Offboarding Automation",
    shortDescription:
      "Automated account lifecycle workflows for Google Workspace and Microsoft 365 using Rewst and Azure.",
    longDescription:
      "Built end-to-end onboarding and offboarding workflows for multiple clients, leveraging crates and then customizing them per environment. The automation covers user account creation, license assignment, group membership, mailbox settings, and documentation updates across Google Workspace, Azure AD, Microsoft 365, and IT documentation tools.",
    tags: ["Google Workspace", "Microsoft 365", "Azure AD", "Rewst"],
  },
];

export const certifications = [
  "Rewst Foundations Certificate",
  "Rewst Clean Automation Certificate",
  "ConnectWise PSA",
];

export const techStack = [
  "Rewst",
  "OpenAI",
  "Autotask PSA",
  "ConnectWise PSA",
  "HaloPSA",
  "Datto RMM",
  "Google Workspace",
  "Rest API",
  "Integrations"
];
