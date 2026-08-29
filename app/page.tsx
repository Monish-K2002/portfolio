"use client"

import { useState } from "react";
import About from "../section/About";
import Experience from "../section/Experience";
import Project from "../section/Project";

const sections = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "projects",
    label: "Projects",
  }
];

export default function Home() {
const [selected, setSelected] = useState("about");

  return (
    <main className="min-h-screen overflow-x-hidden bg-neutral-950 text-white">
		<div className="grid min-h-screen grid-cols-1 gap-8 px-4 py-8 sm:px-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-16">

			<aside className="border-b border-neutral-700 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6 lg:pr-8">
			<nav className="sticky top-20" aria-label="Main navigation">
				<div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
				{sections.map((section) => (
					<button
					key={section.id}
					onClick={() => setSelected(section.id)}
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
					</button>
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
