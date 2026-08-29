export interface ExperienceMetric {
  value: string;
  label: string;
  description: string;
}

export interface ExperienceProject {
  title: string;
  description: string;
  technologies: string[];
  metric?: {
    value: string;
    label: string;
  };
}

export interface ExperienceCategory {
  title: string;
  description: string;
  projects: ExperienceProject[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  current: boolean;
  description: string;
  metrics: ExperienceMetric[];
  categories: ExperienceCategory[];
  impact: string[];
}

export const experienceData: Experience[] = [
  {
    period: "2023 — Present",
    title: "Software Engineer / Technical Consultant",
    company: "ennVee Solutions",
    current: true,
    description:
      "Designing and delivering enterprise platforms, automations, and integrations that make complex business workflows more reliable and easier to operate.",
    metrics: [
      {
        value: "3+",
        label: "Years experience",
        description: "Building enterprise software and integrations.",
      }
    ],
    categories: [
      {
        title: "Enterprise Automation",
        description:
          "Configuration-driven platforms that streamline core business operations and reduce manual effort.",
        projects: [
          {
            title: "PMO Platform",
            description:
              "Architected a configuration-driven NetSuite platform for project management, resource allocation, time and leave tracking, labour classification, and claims.",
            technologies: ["NetSuite", "SuiteScript 2.1", "RESTlet"],
          },
          {
            title: "HRMS & Recruitment",
            description:
              "Engineered a recruitment and resume platform covering candidate lifecycle, interview workflows, employee profiles, and dynamic document generation.",
            technologies: ["NetSuite", "Microsoft Graph", "Teams"],
            metric: { value: "60%", label: "reduction in processing time" },
          },
          {
            title: "Vendor Bill Processing",
            description:
              "Redesigned governance-intensive bill processing around asynchronous queues with duplicate prevention, retries, and automatic resubmission.",
            technologies: ["SuiteScript 2.1", "Map/Reduce", "Queues"],
            metric: { value: "100+", label: "lines / transaction" },
          },
        ],
      },
      {
        title: "Integration Systems",
        description:
          "Connected cloud services and external systems to automate data exchange, communication, and synchronization.",
        projects: [
          {
            title: "Timecard Processing",
            description:
              "Built a multi-stage platform for calendar-aware timecard generation, leave and billing calculations, imports, amendments, retries, and audit tracking.",
            technologies: ["SuiteScript 2.1", "CSV", "Scheduled Scripts"],
          },
          {
            title: "E-invoicing Integration",
            description:
              "Developed a GST-compliant integration that automates invoice submission, validation, and synchronization with external services.",
            technologies: ["REST APIs", "OAuth 2.0", "Integration"],
          },
          {
            title: "PDF & Financial Automation",
            description:
              "Built configuration-driven PDF consolidation and financial workflows for invoices, credit memos, and bill payments.",
            technologies: ["SuiteScript 2.1", "PDF/HTML", "Automation"],
            metric: { value: "100", label: "transactions / execution" },
          },
        ],
      },
    ],
    impact: [
      "75% reduction in manual line entry",
      "100+ line transactions handled reliably in single click",
      "Up to 100 transactions processed per execution",
    ],
  },
];
