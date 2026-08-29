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
    <main className="min-h-screen bg-neutral-950 text-white">
		<div className="grid min-h-screen grid-cols-[220px_minmax(0,1fr)] gap-12 px-8 py-16">

			<aside className="border-r border-neutral-700 pr-8">
			<nav className="sticky top-20">
				<div className="flex flex-col gap-2">
				{sections.map((section) => (
					<button
					key={section.id}
					onClick={() => setSelected(section.id)}
					className={`
						rounded-lg px-4 py-3 text-left text-xl font-semibold
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
