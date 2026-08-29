"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import About from "../components/section/About";
import Experience from "../components/section/Experience";
import Project from "../components/section/Project";
import { sectionsData } from "../components/data/sections";
import { projectsData, type Project as ProjectData } from "../components/data/project";

export default function Home() {
const [selected, setSelected] = useState("about");
const [selectedProject, setSelectedProject] = useState<ProjectData>(
  projectsData.find((project) => project.default) ?? projectsData[0]
);

  useEffect(() => {
    const validSectionIds = new Set(sectionsData.map((section) => section.id));
    const syncSectionWithHash = () => {
      const sectionId = window.location.hash.slice(1);

      if (validSectionIds.has(sectionId)) {
        setSelected(sectionId);
      } else if (!sectionId) {
        setSelected("about");
      }
    };

    syncSectionWithHash();
    window.addEventListener("hashchange", syncSectionWithHash);

    return () => window.removeEventListener("hashchange", syncSectionWithHash);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-foreground">
		<div className="grid min-h-screen grid-cols-1 gap-8 px-4 py-8 sm:px-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-16">

			<aside className="border-b border-neutral-800 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6 lg:pr-8">
			<nav className="sticky top-20" aria-label="Main navigation">
				<div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
				{sectionsData.map((section) => (
					<Link
					key={section.id}
					href={section.href}
					onClick={() => {setSelected(section.id)}}
					aria-current={selected === section.id ? "page" : undefined}
					className={`
						min-h-11 shrink-0 rounded-lg px-4 py-3 text-left text-base font-semibold sm:text-lg lg:text-xl
						transition-all
						${
						selected === section.id
							? "border border-customGreen text-customGreen"
							: "text-neutral-400 hover:bg-neutral-900 hover:text-customGreen"
						}
					`}
					>
					{section.label}
					</Link>
				))}
				</div>

				{selected === "projects" && (
					<div className="mt-4 border-t border-neutral-800 pt-4 md:ml-3 md:border-l md:border-t-0 md:pl-3">
						<p className="mb-2 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
							Selected projects
						</p>
						<div className="project-scrollbar flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0">
							{projectsData.map((project) => (
								<button
									key={project.name}
									type="button"
									onClick={() => setSelectedProject(project)}
									aria-pressed={project.name === selectedProject.name}
									className={`min-h-11 max-w-[78vw] shrink-0 cursor-pointer rounded-lg px-3 py-2 text-left text-sm leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-customGreen md:max-w-none md:text-base ${
										project.name === selectedProject.name
											? "bg-neutral-900 text-customGreen"
											: "text-neutral-400 hover:bg-neutral-900 hover:text-customGreen active:bg-neutral-800"
									}`}
								>
									<span className="block whitespace-normal">{project.name}</span>
								</button>
							))}
						</div>
					</div>
				)}
			</nav>
			</aside>

			<section className="min-w-0">
			{selected === "about" && <About />}
			{selected === "experience" && <Experience />}
			{selected === "projects" && <Project selectedProject={selectedProject} />}
			</section>

		</div>
		</main>
  );
}
