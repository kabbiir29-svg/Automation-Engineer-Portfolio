import { FaRobot, FaBolt, FaTools, FaUserShield, FaNetworkWired, FaFileInvoiceDollar } from "react-icons/fa";

export const projects = [
  {
    title: "Billing Reconciliation Automation",
    role: "Full Stack Automation Engineer",
    icon: FaFileInvoiceDollar,
    tags: ["n8n", "QuickBooks", "MS Easy Auth", "Finance Automation"],
    tech: ["n8n", "QuickBooks API", "Ingram Micro API", "Microsoft Easy Auth", "React"],
    short: "Automated invoice ingestion from Ingram to QuickBooks with human-in-loop approval.",
    bullets: [
      "n8n workflows extract invoices from Ingram Micro.",
      "Frontend dashboard shows invoices pending review with date filtering.",
      "MS Easy Auth secures the approval interface.",
      "Human review gates bill creation in QuickBooks."
    ],
    achievements: [
      "Reduced manual invoice entry time by 90%.",
      "Eliminated duplicate billing entries through review process.",
      "Achieved 100% QBO bill accuracy with human validation.",
      "Streamlined month-end reconciliation process."
    ],
    problem:
      "Manual invoice imports from Ingram to QuickBooks were error-prone, time-consuming, and lacked approval governance.",
    solution:
      "Built an n8n-powered automation with a React dashboard for human review. Frontend uses MS Easy Auth for secure access, displays filtered invoices, and triggers QBO bill creation after approval.",
    impact:
      "Cut bookkeeping workload by 80%, eliminated billing errors, and created an auditable approval trail for finance teams."
  },

  {
    title: "Autonomous L1 Agent",
    role: "Lead Automation Engineer",
    icon: FaRobot,
    tags: ["AI", "RPA", "Rewst", "OpenAI", "PSA Automation"],
    tech: ["Rewst", "OpenAI", "Azure AD", "Autotask API", "HaloPSA API"],
    short: "AI-driven ticket triage, classification & automated resolution.",
    bullets: [
      "Uses Rewst + OpenAI to classify, route, and resolve tickets.",
      "Auto-writes SLA-compliant responses.",
      "Executes sub-workflows for full issue resolution."
    ],
    achievements: [
      "Reduced L1 workload by 60–75% across MSP environments.",
      "Cut average response time from minutes to under 20 seconds.",
      "Achieved 100% standardized ticket notes across all clients."
    ],
    problem:
      "MSP engineers were overwhelmed with repetitive L1 queues and inconsistent triage accuracy.",
    solution:
      "Built an AI-powered routing and self-healing engine using Rewst + OpenAI with contextual memory and multi-step verification.",
    impact:
      "Tripled response speed, removed up to 70% repetitive workloads, and greatly improved SLA compliance."
  },

  {
    title: "AI First Response System",
    role: "Automation Architect",
    icon: FaBolt,
    tags: ["AI", "PSA", "Automation", "Rewst", "Ticketing"],
    tech: ["Rewst", "OpenAI", "PSA API", "Microsoft 365"],
    short: "Instant AI-generated replies, SLA protection, and auto-resolve capabilities.",
    bullets: [
      "Generates context-aware PSA notes.",
      "Resolves simple tickets automatically.",
      "Writes tailored troubleshooting advice."
    ],
    achievements: [
      "Reduced engineer workload by 40%.",
      "Achieved sub-30-second first responses.",
      "Improved client satisfaction and SLA adherence."
    ],
    problem:
      "High ticket volume of simple issues slowed engineers and harmed SLAs.",
    solution:
      "Created an automated AI-first-response engine that drafts replies, logs work, and triggers workflows.",
    impact:
      "Cut initial response times from hours to seconds; increased team efficiency significantly."
  },

  {
    title: "AI Suggested Troubleshooting",
    role: "AI Workflow Engineer",
    icon: FaTools,
    tags: ["AI", "Documentation Intelligence", "Rewst"],
    tech: ["OpenAI Assistants", "Rewst", "Client-specific documentation"],
    short: "Automated troubleshooting suggestions based on client environments.",
    bullets: [
      "AI trained on MSP and client-specific documentation.",
      "Returns step-by-step troubleshooting actions.",
      "Reduces error rates and improves consistency."
    ],
    achievements: [
      "Lowered L2 escalations by 35%.",
      "Standardized troubleshooting quality across engineers.",
      "Reduced time-to-resolution for technical issues."
    ],
    problem:
      "Troubleshooting quality varied widely by engineer experience.",
    solution:
      "Built AI-driven guidance that understands each environment and recommends tailored steps.",
    impact:
      "Improved accuracy, reduced escalations, and empowered junior engineers."
  },

  {
    title: "Travel SOC Alerts Automation",
    role: "SOC Automation Developer",
    icon: FaUserShield,
    tags: ["SOC", "Security Automation", "Power Automate", "Rewst"],
    tech: ["Power Automate", "Barracuda", "Security APIs"],
    short: "Build IT 2025–featured workflow reducing travel alert noise.",
    bullets: [
      "Auto-parses travel-based login alerts.",
      "Validates travel patterns.",
      "Suppresses false positives intelligently."
    ],
    achievements: [
      "Reduced SOC alert noise by 80%.",
      "Featured at Build IT 2025 for innovation.",
      "Made SOC teams 5× more efficient."
    ],
    problem:
      "Travel login alerts flooded SOC teams, causing fatigue and missed real threats.",
    solution:
      "Built a context-aware validation workflow using geo-awareness, travel patterns, and automated whitelisting.",
    impact:
      "Significantly reduced noise while improving security posture."
  },

  {
    title: "User Onboarding & Offboarding Automation",
    role: "Automation Engineer",
    icon: FaNetworkWired,
    tags: ["M365", "Google Workspace", "Provisioning", "Rewst", "Security"],
    tech: ["Azure AD", "Google Admin SDK", "Rewst", "Graph API"],
    short: "Provisioning & deprovisioning automation for multiple clients.",
    bullets: [
      "Creates users, groups, licenses, mailboxes & signatures.",
      "Handles permissions, documentation, and access removal.",
      "Secure, auditable offboarding workflow."
    ],
    achievements: [
      "Reduced provisioning time from 45 minutes to 5 minutes.",
      "Eliminated human errors in provisioning.",
      "Improved security by enforcing consistent offboarding steps."
    ],
    problem:
      "Manual onboarding was slow, inconsistent, and error-prone.",
    solution:
      "Built a fully automated onboarding/offboarding engine with standardized processes.",
    impact:
      "Dramatically increased efficiency and reduced onboarding delays across clients."
  }
];