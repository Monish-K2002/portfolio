export interface Project {
    name: string;
    description: string;
    default: boolean;
    link?: string;
    stack?: string[];
    cards?: ProjectCard[];
}

interface ProjectCard {
    title: string;
    description: string;
}

export const projectsData: Project[] = [
    {
        name: "SuiteScript Manager - VS Code Extension",
        description: `While developing SuiteScript files, I found myself repeatedly copying code from VS Code and pasting it into NetSuite just to test small changes. The process became tedious and made the development cycle unnecessarily slow, especially when debugging and comparing changes across NetSuite environments. I built **SuiteScript Manager**, a VS Code extension that brings common NetSuite development workflows directly into the editor.`,
        default: true,
        link: "https://github.com/Monish-K2002/suitescript-manager",
        stack: ["TypeScript", "VS Code Extension API", "SuiteScript 2.1", "RESTlet"],
        cards: [
            {
                title: "Code Synchronization",
                description:
                    "Push SuiteScript files directly to the NetSuite File Cabinet or pull files from the current or production environment through the VS Code extension.",
            },
            {
                title: "Automatic Backups",
                description:
                    "Automatically backs up the existing remote NetSuite file locally before overwriting it, preserving the previous version for recovery.",
            },
            {
                title: "Side-by-Side Diff",
                description:
                    "Compare local SuiteScript files directly against their remote NetSuite versions using VS Code's native diff viewer.",
            },
            {
                title: "Environment-Aware Development",
                description:
                    "Automatically identifies the active NetSuite environment from the workspace and displays it in the VS Code status bar, with additional safeguards for production.",
            },
            {
                title: "Saved Search Explorer",
                description:
                    "Browse NetSuite saved searches, preview their results, and generate SuiteScript 2.x search boilerplate from selected columns, joins, and summary definitions.",
            },
            {
                title: "Execution Log Monitoring",
                description:
                    "View recent SuiteScript execution logs directly within VS Code, reducing the need to switch between the editor and NetSuite.",
            },
            {
                title: "Direct NetSuite Navigation",
                description:
                    "Open the corresponding NetSuite script or file record directly from VS Code for faster navigation between local development and the NetSuite environment.",
            },
            {
                title: "Resilient API Communication",
                description:
                    "Handles transient network failures and rate-limiting or server errors with retry logic to improve reliability when communicating with NetSuite.",
            },
        ],
    },
    {
        name: "Git Post-Commit Work Tracker",
        description: `
While working across multiple projects, I found it difficult to keep track of the work completed for each project, especially when changes were spread across different repositories and environments. Maintaining this information manually was repetitive and easy to forget, so I developed a **Python-based Git post-commit hook** to automatically maintain a project-level work log.
 `,
        default: false,
        stack: ["Python", "Git", "Excel", "Automation"],
        cards: [
            {
                title: "Automatic Work Tracking",
                description:
                    "Captures the commit message and changed files automatically after every Git commit using the post-commit lifecycle.",
            },
            {
                title: "Project-Specific Logs",
                description:
                    "Appends development activity to the corresponding project-specific Excel sheet, keeping work history organized independently for each project.",
            },
            {
                title: "Environment-Aware Tracking",
                description:
                    "Identifies the development environment associated with the repository and categorizes commit activity accordingly.",
            },
            {
                title: "Ticket & Issue Linking",
                description:
                    "Supports an optional ticket or issue identifier to associate commits with specific tasks, requirements, or development work.",
            },
            {
                title: "Zero Manual Entry",
                description:
                    "Uses Git's post-commit lifecycle to maintain the work log automatically, eliminating the need for developers to update a separate tracker.",
            },
            {
                title: "Structured Work History",
                description:
                    "Transforms existing Git commit metadata into a structured and searchable project work history for easier tracking and review.",
            },
        ]
    },
    {
        name: "SDF Import Helper",
        description: `
While working with NetSuite's SuiteCloud Development Framework (SDF), I found that the native workflow did not provide a convenient way to **bulk import multiple SDF objects or SuiteScript files**. In the VS Code extension, multiple files or objects could be selected through the UI, but the process relied on manually searching and selecting items. Accidentally moving the cursor outside the selection menu could cause the entire selection to be lost, making the process frustrating when importing a large number of files.
 `,
        default: false,
        link: "https://github.com/Monish-K2002/sdf-import-helper",
        stack: ["Python", "NetSuite", "CLI", "Automation"],
        cards: [
            {
                title: "Bulk SDF Imports",
                description:
                    "Import multiple SDF objects or SuiteScript files through a single command instead of handling each import individually.",
            },
            {
                title: "Text-Based Input",
                description:
                    "Accepts object and file lists from a text file, eliminating repetitive UI searching and multi-selection during large imports.",
            },
            {
                title: "Input Normalization",
                description:
                    "Automatically cleans whitespace, quotes, and commas from input lists before passing them to the SuiteCloud CLI.",
            },
            {
                title: "SuiteScript Path Normalization",
                description:
                    "Automatically adds the /SuiteScripts/ path and .js extension to SuiteScript files when they are not already specified.",
            },
            {
                title: "Configurable Imports",
                description:
                    "Supports custom SDF destination paths and object-type filters to control what gets imported and where it is placed.",
            },
            {
                title: "Live CLI Output",
                description:
                    "Streams SuiteCloud CLI import progress directly to the terminal so developers can monitor long-running operations in real time.",
            },
            {
                title: "Interactive Feedback",
                description:
                    "Uses colored terminal output and a loading spinner to provide clear execution status and feedback during imports.",
            },
            {
                title: "SuiteCloud CLI Integration",
                description:
                    "Uses Python subprocess execution to invoke the underlying suitecloud object:import and suitecloud file:import commands directly.",
            },
        ]
    }
];
