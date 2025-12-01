export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Automation Engineer & Service Coordinator",
    company: "IT By Design",
    period: "Feb 2025 – Present",
    description: [
      "Designed and deployed RPA workflow automations using Rewst, OpenAI, Azure, Google Workspace, Autotask, HaloPSA, ConnectWise, and custom API integrations.",
      "Built scalable onboarding and offboarding workflows for Microsoft and Google environments using crates, forms, and Jinja-based logic with robust error handling.",
      "Developed automation frameworks including AI-driven ticket categorization, first-response engines, and automated troubleshooting generation.",
      "Built an Autonomous L1 Agent capable of full end-to-end ticket handling using automation and AI.",
      "Created reusable workflow modules, Jinja templates, and API integrations to standardize automation delivery.",
      "Leveraged RMM tools to maintain systems proactively and perform automated remediation tasks.",
      "Ensured SLA compliance by triaging incoming tickets, coordinating across L1–L3, NOC, and SOC teams.",
      "Identified automation opportunities and contributed to continuous improvement across MSP operations."
    ]
  },

  {
    role: "Customer Issue Resolution Manager (AT&T)",
    company: "Tech Mahindra",
    period: "Nov 2023 – Feb 2025",
    description: [
      "Acted as the primary POC between enterprise customers and internal Tier teams.",
      "Managed service restoration for hard-down and intermittent network outages.",
      "Coordinated escalations, ensured timely communication, and improved customer satisfaction.",
      "Worked with cross-functional teams to resolve critical infrastructure issues efficiently."
    ]
  },

  {
    role: "Project Coordinator",
    company: "CTS Mobility",
    period: "Mar 2023 – Nov 2023",
    description: [
      "Served as the key coordinator and point-of-contact for SaaS and DaaS client projects.",
      "Conducted 5G site surveys and managed device installation schedules across multiple sites.",
      "Streamlined project execution by automating repetitive operational tasks.",
      "Managed technician vetting, project documentation, and customer communications.",
      "Supported major clients such as JetBlue, TJX, UNFI, Bob Evans, Core & Main, CMS Energy, AmeriGas, and AEG."
    ]
  },

  {
    role: "IT Support Executive",
    company: "Eclerx India Pvt. Ltd",
    period: "Feb 2023 – Sep 2024",
    description: [
      "Provided Tier 1 & Tier 2 IT support for desktop, hardware, and software issues.",
      "Troubleshot system, account, and application issues while maintaining SLA compliance.",
      "Supported end-users by performing diagnostics, access management, and system configuration."
    ]
  }
];