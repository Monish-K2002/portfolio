import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { projectsData } from "../data/project";

interface Project {
    name: string;
    description: string;
    link?: string;
    default?: boolean;
}

export default function Project() {
    const defaultProject: Project = projectsData.find(p => p.default)!;
    const [selectedProject, setSelectedProject] = useState<Project>(defaultProject);

    return (
        <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:divide-x md:divide-neutral-900 lg:grid-cols-[220px_minmax(0,1fr)]">
            <aside className="min-w-0">
            <nav className="w-full" aria-label="Project navigation">
                <div className="flex gap-2 overflow-x-auto pb-1 project-scrollbar md:flex-col md:overflow-visible md:pb-0">
                    {projectsData.map((project) => (
                        <button 
                        key={project.name}
                        onClick={() => setSelectedProject(project)}
                        aria-pressed={project.name === selectedProject.name}
                        className="min-h-11 shrink-0 rounded-lg p-2 text-left text-sm transition-colors hover:bg-neutral-900 hover:text-customGreen active:bg-neutral-800 md:text-base">
                        <span className={project.name === selectedProject.name ? "text-customGreen" : ""}>{project.name}</span>
                        </button>
                    ))}
                </div>
            </nav>
            </aside>
            <div className="min-w-0 px-0 py-2 md:p-4">
                <h1 className="break-words py-3 text-xl font-bold text-neutral-100 sm:text-2xl">{selectedProject.name || defaultProject?.name} {selectedProject.link && <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-customGreen hover:underline">GitHub</a>}</h1>
                {selectedProject && (
                <div className="max-w-5xl text-neutral-100 text-pretty text-justify prose prose-invert space-y-2">
                    <ReactMarkdown>
                        {selectedProject.description || ""}
                    </ReactMarkdown>
                </div>
)}
            </div>
        </div>
    );
}
