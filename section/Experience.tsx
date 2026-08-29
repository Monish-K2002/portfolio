
const experiences = [
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
//   {
//     period: "2023 — 2024",
//     title: "Intern Software Developer / Technical Consultant",
//     company: "ennVee Solutions",
//     experience:  [
//     "Developed a NetSuite customization to accurately track item quantities and units of measure across transactions when items were sold using units different from their base or stock units.",
//     "Implemented UOM conversion logic to normalize transaction quantities against the item's base unit while preserving the original sales unit for accurate inventory and reporting."
//   ],
//   },
];

export default function Experience() {
  return (
    <div className="space-y-8">
        {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col gap-3 md:flex-row md:gap-0">
                <div className="pt-1 text-xs font-medium uppercase tracking-wider text-neutral-100 sm:text-sm md:w-44 md:shrink-0 md:pr-8">
                    {exp.period}
                </div>

                <div className="border-l border-neutral-800 pl-4 sm:pl-6 md:pl-8">
                    <h2 className="text-xl font-semibold text-white sm:text-2xl">
                        {exp.title}
                    </h2>

                    <p className="mt-1 text-customGreen">
                        {exp.company}
                    </p>

                    {/* <p className="mt-4 max-w-5xl leading-7 text-neutral-100 text-pretty text-justify"> */}
                        <ul className="mt-4 max-w-5xl list-inside list-disc space-y-2 leading-7 text-pretty text-neutral-100 md:text-justify">
                        {exp.experience && exp.experience.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                    {/* </p> */}
                </div>
            </div>
        ))}
    </div>
  );
}
