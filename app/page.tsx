"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import About from "../components/section/About";
import Experience from "../components/section/Experience";
import Project from "../components/section/Project";
import { sectionsData } from "../components/data/sections";
import { projectsData } from "../components/data/project";

export default function Home() {
const [selected, setSelected] = useState("about");

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
    <main className="min-h-screen overflow-x-hidden bg-neutral-950 text-white">
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
			</nav>
			</aside>

			<section className="min-w-0">
			{selected === "about" && <About />}
			{selected === "experience" && <Experience />}
			{selected === "projects" && <Project />}
			</section>

		</div>
		</main>
  );
}
