export interface Experience {
    period: string;
    title: string;
    company: string;
    experience: string[];
}

export const experienceData: Experience[] = [
  {
    period: "2023 — Present",
    title: "Software Engineer / Technical Consultant",
    company: "ennVee Solutions",
    experience:  [
  "Architected a configuration-driven PMO platform in NetSuite for project management, resource allocation, time/leave tracking, labour classification, and claims using Client Scripts, Suitelets, and a centralized RESTlet service layer.",

  "Designed a fault-tolerant SuiteScript 2.1 Sales Order closure workflow to automate complex order-closing rules, validate transaction state, and reliably process dependent records with governance-aware execution and recovery.",

  "Redesigned governance-intensive Vendor Bill processing into an asynchronous queue-based architecture, reliably handling 100+ line transactions with duplicate prevention, retry logic, and automatic resubmission.",

  "Built a stateful multi-stage Timecard Processing Platform automating calendar-aware timecard generation, leave/billing calculations, CSV imports, amendments, retries, and audit tracking with caching for high-volume processing.",

  "Architected custom Suitelet applications including a configurable Timesheet Management system with approval workflows and an interactive sales tool that reduced manual line entry by 75% through dynamic sourcing and asynchronous UI processing.",

  "Engineered a configuration-driven HRMS recruitment and resume platform covering candidate lifecycle, interview workflows, employee profiles, and dynamic PDF/Word resume generation.",

  "Integrated Microsoft Graph API and Microsoft Teams using OAuth 2.0 to automate interview scheduling, cancellation, interviewer lookup, calendar events, and meeting synchronization.",

  "Developed a GST-compliant e-invoicing integration for Indian invoices, automating invoice submission, validation, and synchronization between NetSuite and external e-invoicing services.",

  "Built configuration-driven PDF consolidation and financial automation workflows for invoices, credit memos, and bill payments, supporting batch processing of up to 100 transactions per execution.",
],
  },
];