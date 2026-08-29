import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface Project {
    name: string;
    description: string;
    default: boolean;
    link?: string;
}

const projects: Project[] = [
    {
        name: "SuiteScript Manager - VS Code Extension",
        description: `
While developing SuiteScript files, I found myself repeatedly copying code from VS Code and pasting it into NetSuite just to test small changes. The process became tedious and made the development cycle unnecessarily slow, especially when debugging and comparing changes across NetSuite environments. I built **SuiteScript Manager**, a VS Code extension that brings common NetSuite development workflows directly into the editor.

The extension integrates VS Code with a SuiteScript 2.1 RESTlet backend to provide:

* **Code synchronization with NetSuite**, allowing SuiteScript files to be pushed directly to the NetSuite File Cabinet and pulled back from the current or production environment.
* **Automatic backups before overwriting remote files**, providing a local copy of the previous NetSuite version before a new file is uploaded.
* **Side-by-side code comparison**, allowing local files to be compared directly against their remote NetSuite versions using VS Code's native diff viewer.
* **Environment-aware development**, automatically identifying the NetSuite environment from the workspace structure and displaying the active environment in the VS Code status bar, with additional safeguards when working with production.
* **Saved Search exploration**, allowing developers to browse available NetSuite saved searches, preview their results, and generate SuiteScript 2.x search boilerplate based on the selected search's columns, joins, and summaries.
* **Execution log monitoring**, providing access to recent SuiteScript execution logs directly within VS Code instead of requiring developers to constantly switch back to the NetSuite UI.
* **Direct NetSuite navigation**, allowing developers to open the corresponding script or file record in NetSuite directly from VS Code.
* **Resilient API communication**, with retry handling for transient network failures and rate-limiting/server errors.

The project uses a **TypeScript-based VS Code extension** as the client layer and a **SuiteScript 2.1 RESTlet** as the NetSuite integration layer, with dedicated modules for command orchestration, environment context, configuration, authentication, networking, and UI utilities.`,
        default: true,
        link: "https://github.com/Monish-K2002/suitescript-manager"
    },
    {
        name: "Git Post-Commit Work Tracker",
        description: `
While working across multiple projects, I found it difficult to keep track of the work completed for each project, especially when changes were spread across different repositories and environments. Maintaining this information manually was repetitive and easy to forget, so I developed a **Python-based Git post-commit hook** to automatically maintain a project-level work log.

The hook runs after every Git commit and extracts the **commit message and files changed**, then appends the information to the corresponding **project-specific Excel sheet**. The solution is environment-aware, allowing development work to be tracked separately based on the environment associated with the repository, while also supporting an **optional ticket/issue identifier** to associate commits with specific tasks or requirements.

Key capabilities include:

* **Automatic work tracking** by capturing commit messages and changed files after each commit.
* **Project-specific Excel logs**, keeping development activity organized independently for each project.
* **Environment-aware tracking**, allowing commits to be categorized according to the development environment.
* **Optional ticket identification**, enabling work to be linked to a ticket, issue, or requirement when applicable.
* **Zero manual data entry**, using the Git post-commit lifecycle to update the work log automatically.

The goal was to turn Git commits, which already contain much of the information needed to understand development activity, into a **structured and searchable project work history** without requiring developers to maintain a separate tracker manually.
 `,
        default: false
    },
    {
        name: "SDF Import Helper",
        description: `
While working with NetSuite's SuiteCloud Development Framework (SDF), I found that the native workflow did not provide a convenient way to **bulk import multiple SDF objects or SuiteScript files**. In the VS Code extension, multiple files or objects could be selected through the UI, but the process relied on manually searching and selecting items. Accidentally moving the cursor outside the selection menu could cause the entire selection to be lost, making the process frustrating when importing a large number of files.

To solve this, I developed **SDF Import Helper**, a Python-based CLI utility that simplifies bulk SDF imports by allowing developers to provide a list of objects or files in a text file and import them through the SuiteCloud CLI.

Key capabilities include:

* **Bulk SDF imports**, allowing multiple objects or SuiteScript files to be imported through a single command.
* **Text-based input**, eliminating repetitive UI searching and multi-selection.
* **Input normalization**, automatically cleaning whitespace, quotes, and commas from the provided list.
* **SuiteScript path normalization**, automatically adding the "/SuiteScripts/" path and ".js" extension when required.
* **Configurable imports**, supporting custom SDF destination paths and object-type filters.
* **Live CLI output**, streaming SuiteCloud CLI progress directly to the terminal.
* **Interactive execution feedback**, using colored output and a loading spinner to make long-running imports easier to monitor.
* **Direct integration with the SuiteCloud CLI**, using Python's "subprocess" functionality to execute the underlying "suitecloud object:import" and "suitecloud file:import" commands.

The result is a lightweight automation layer around the existing SuiteCloud CLI that makes large imports **repeatable, less error-prone, and independent of fragile multi-select UI interactions**.
 `,
        default: false,
        link: "https://github.com/Monish-K2002/sdf-import-helper"
    }
];

export default function Project() {
    const [selectedProject, setSelectedProject] = useState<string>(projects.find(p => p.default)?.name || "");

    return (
        <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:divide-x md:divide-neutral-900 lg:grid-cols-[220px_minmax(0,1fr)]">
            <aside className="min-w-0">
            <nav className="w-full" aria-label="Project navigation">
                <div className="flex gap-2 overflow-x-auto pb-1 project-scrollbar md:flex-col md:overflow-visible md:pb-0">
                    {projects.map((project) => (
                        <button 
                        key={project.name}
                        onClick={() => setSelectedProject(project.name)}
                        aria-pressed={project.name === selectedProject}
                        className="min-h-11 shrink-0 rounded-lg p-2 text-left text-sm transition-colors hover:bg-neutral-900 hover:text-customGreen active:bg-neutral-800 md:text-base">
                        <h2 className={project.name === selectedProject ? "text-customGreen" : ""}>{project.name}</h2>
                        </button>
                    ))}
                </div>
            </nav>
            </aside>
            <div className="min-w-0 px-0 py-2 md:p-4">
                <h1 className="break-words py-3 text-xl font-bold text-neutral-100 sm:text-2xl">{selectedProject || projects.find(p => p.default)?.name} {projects.find(p => p.name === selectedProject)?.link && <a href={projects.find(p => p.name === selectedProject)?.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-customGreen hover:underline">GitHub</a>}</h1>
                {selectedProject && (
                <div className="text-neutral-100 prose prose-invert max-w-none space-y-2">
                    <ReactMarkdown>
                        {projects.find(p => p.name === selectedProject)?.description || ""}
                    </ReactMarkdown>
                </div>
)}
            </div>
        </div>
    );
}
