"use client";

import { InfoCard } from "@/components/ui/InfoCard";
import { SkillCard } from "@/components/ui/SkillCard";
import Socials from "@/components/ui/Socials";
import { FaEnvelope, FaCopy, FaCheck, FaPhone } from "react-icons/fa";
import { useState } from "react";

export default function About() {
    const skills = [
        {
            stack: "Languages",
            skill: ["JavaScript", "TypeScript", "Python"]
        },
        {
            stack: "Frontend",
            skill: ["Next.js", "React", "HTML", "CSS", "TailwindCSS"]
        },
        {
            stack: "Backend",
            skill: ["Node.js", "FastAPI", "REST APIs"]
        },
        {
            stack: "Enterprise",
            skill: ["SuiteScript 2.1", "SuiteQL", "SDF", "Advanced PDF/HTML Templates"]
        },
        {
            stack: "Systems & APIs",
            skill: ["NetSuite", "REST APIs", "GraphQL"]
        }
    ];
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = async (id: string) => {
        const value = document.getElementById(id)?.textContent;
        if (value) {
            await navigator.clipboard.writeText(value);
            setCopied(id);
            setTimeout(() => {
                setCopied(null);
            }, 1000);
        }
    };

    return <div>
        <section className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="text-center lg:text-left">
                    <h1 className="h1">
                    Hello I&apos;m<br /><span className="text-customGreen">Monish K</span>
                    </h1>
                    <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-pretty text-white/80 sm:text-lg lg:mx-0 lg:text-justify">I am a Software Engineer with 3+ years of experience building high-reliability enterprise applications, RESTful APIs, and automated integration pipelines using JavaScript, TypeScript, and Python. I specialize in state-driven transaction workflows, asynchronous processing, fault-tolerant systems, and configuration-driven full-stack platforms.
                    </p>
                </div>
                <div className="grid grid-cols-2 items-center justify-center gap-4">
                    <InfoCard
                        value={`${new Date().getFullYear() - 2023}+`}
                        label="Years Experience"
                        description="Building enterprise software and integrations."
                    />

                    <InfoCard
                    value="10+"
                    label="Projects"
                    description="Enterprise and personal projects across multiple domains."
                    />

                </div>
            </div>

            <div className="mb-8 flex flex-wrap items-center gap-3 sm:gap-4 lg:mb-0">
                <div className="">
                    <a
                        href="/My Resume New.pdf"
                        download="Monish_K_Resume.pdf"
                        className="inline-flex items-center rounded-full border border-customGreen px-5 py-2 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-customGreen/10 hover:text-white hover:shadow-[0_0_20px_rgba(0,255,128,0.08)]"
                    >
                    Download Resume
                    </a>
                </div>
              <Socials containerStyles="flex gap-6" iconStyles="flex h-9 w-9 items-center justify-center rounded-full border border-customGreen/70 text-customGreen text-base transition-all duration-300 hover:-translate-y-1 hover:border-customGreen hover:bg-customGreen/10 hover:text-customGreen hover:shadow-[0_0_16px_rgba(0,255,128,0.12)]" />
              <button
                type="button"
                aria-label="Copy email address"
                className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-full border border-customGreen px-4 py-2 text-base font-semibold text-customGreen hover:underline sm:px-5 sm:text-lg"
                onClick={async () => {
                    await handleCopy('email');
                }}
              >
                <FaEnvelope /> 
                <span 
                    className="ml-2 text-sm text-white"
                    id="email"
                >
                    monishk2002@gmail.com
                </span>
                <span id="copy">{copied === 'email' ? <FaCheck /> : <FaCopy />}</span>
              </button>
              <button
                type="button"
                aria-label="Copy phone number"
                className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-full border border-customGreen px-4 py-2 text-base font-semibold text-customGreen hover:underline sm:px-5 sm:text-lg"
                onClick={async () => {
                    await handleCopy('phone');
                }}
              >
                <FaPhone /> 
                <span 
                    className="ml-2 text-sm text-white"
                    id="phone"
                >
                    +91 8667491756
                </span>
                <span id="copy">{copied === 'phone' ? <FaCheck /> : <FaCopy />}</span>
              </button>
            </div>

            <div className="w-full max-w-5xl">
                {/* <h2 className="h2">Technical Skills</h2> */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} stack={skill.stack} skills={skill.skill} />
                    ))}
                </div>
            </div>
        </section>
    </div>;
}
