import { type Project } from "../data/project";
import { FaGithub } from "react-icons/fa";

function FormattedText({ text }: { text: string }) {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                        <span key={index} className="font-semibold text-customGreen">
                            {part.slice(2, -2)}
                        </span>
                    );
                }

                return part;
            })}
        </>
    );
}

export default function Project({ selectedProject }: { selectedProject: Project }) {
    return (
        <div className="min-w-0 w-full px-0 py-2 md:p-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 border-b border-neutral-800 pb-4">
                    <h1 className="min-w-0 break-words text-xl font-bold text-neutral-100 sm:text-2xl">{selectedProject.name}</h1>
                    {selectedProject.link && <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="shrink-0 flex items-center gap-2 text-sm text-customGreen hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-customGreen"><FaGithub /> View on GitHub<span className="sr-only">: {selectedProject.name}</span></a>}
                </div>
                {selectedProject.stack && (
                    <div className="mb-5 mt-4 flex flex-wrap gap-2">
                        {selectedProject.stack.map((tech) => (
                            <span key={tech} className="rounded border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs text-neutral-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
                {selectedProject && (
                    <div className="max-w-6xl break-words text-pretty text-left text-sm leading-7 text-neutral-300 sm:text-base md:text-justify [overflow-wrap:anywhere] [&_strong]:font-semibold [&_strong]:text-customGreen">
                        <FormattedText text={selectedProject.description || ""} />
                        {selectedProject.cards && (
                            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {selectedProject.cards.map((card, index) => (
                                    <div key={index} className="min-w-0 rounded-lg border border-neutral-800 p-4">
                                        <h3 className="mb-2 break-words text-lg font-semibold text-customGreen">{card.title}</h3>
                                        <p className="break-words text-sm leading-6 text-neutral-300 [overflow-wrap:anywhere]">{card.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
        </div>
    );
}
