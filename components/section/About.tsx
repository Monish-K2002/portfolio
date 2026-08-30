"use client";

import { InfoCard } from "@/components/ui/InfoCard";
import { SkillCard } from "@/components/ui/SkillCard";
import Socials from "@/components/ui/Socials";
import { FaEnvelope, FaCopy, FaCheck, FaPhone, FaCalendar, FaCode, FaDownload } from "react-icons/fa";
import { useState } from "react";
import CountUp from "react-countup";
import { aboutData } from "../data/about";

export default function About() {
    const [copied, setCopied] = useState<string | null>(null);
    const email = "monishk2003@gmail.com";
    const phone = "+91 8667491756";

    const handleCopy = async (id: string) => {
        let value: string | null = null;
        if (id === 'email') {
            value = email;
        } else if (id === 'phone') {
            value = phone;
        }
        if (value) {
            await navigator.clipboard.writeText(value);
            setCopied(id);
            setTimeout(() => {
                setCopied(null);
            }, 1000);
        }
    };
    const yoe = new Date().getFullYear() - 2023;

    return <div>
        <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 max-w-4xl">
                <div className="text-center lg:text-left">
                    <h3 className="flex flex-wrap justify-center sm:justify-start items-center gap-3 text-sm text-center sm:text-lg text-neutral-500 ">
                        SOFTWRARE ENGINEER <span className="h-1 w-1 rounded-full bg-customGreen" /> TECHNICAL CONSOLUTANT
                    </h3>
                    <h2 className="h2">
                    Hello I&apos;m <span className="text-customGreen">{aboutData.name}</span>
                    </h2>
                    <p className="mx-auto mb-4 max-w-2xl text-left text-base leading-relaxed text-pretty text-white/80 sm:text-lg lg:mx-0 lg:text-justify">{aboutData.description}</p>
                    <span className="inline-flex items-center gap-2 border border-neutral-800 px-3 py-2 rounded-full">
                        <span className="h-2 w-2 rounded-full bg-customGreen" />
                        Currently working at <span className="text-customGreen">{aboutData.currentCompany}</span>
                    </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 items-start justify-start gap-2 sm:gap-4">
                    <InfoCard
                        value={<CountUp end={yoe} />}
                        label="Years Experience"
                        description="Building enterprise software and integrations."
                        icon={<FaCalendar />}
                    />

                    <InfoCard
                        value={<CountUp end={6}/>}
                        label="Projects"
                        description="Enterprise and personal projects across multiple domains."
                        icon={<FaCode />}
                    />

                </div>
            </div>

            <div className=" flex flex-wrap items-center gap-3 sm:gap-4 lg:mb-0">
                {/* <div className="hidden sm:block">
                    <a
                        href="/My Resume New.pdf"
                        download="Monish_K_Resume.pdf"
                        className="inline-flex items-center rounded-full border border-customGreen px-5 py-2 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-customGreen/10 hover:text-white hover:shadow-[0_0_20px_rgba(0,255,128,0.08)]"
                    >
                    Download Resume
                    </a>
                </div> */}
                <div className="">
                    <a
                        href="/My Resume New.pdf"
                        download="Monish_K_Resume.pdf"
                        className="inline-flex items-center gap-2 rounded-full border border-customGreen px-5 py-2 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-customGreen/10 hover:text-white hover:shadow-[0_0_20px_rgba(0,255,128,0.08)]"
                    >
                    <FaDownload /> Resume
                    </a>
                </div>
                <Socials 
                    containerStyles="flex gap-3 sm_gap-4" 
                    iconStyles="inline-flex min-h-11 max-w-full items-center gap-2 rounded-full border border-customGreen px-4 py-2 text-base font-semibold text-customGreen hover:underline sm:px-5 sm:text-lg" 
                />
                
            </div>
            <div className="flex flex-nowrap items-center gap-2">
                <button
                    type="button"
                    aria-label="Copy email address"
                    className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-customGreen px-3 py-2 text-sm font-semibold text-customGreen hover:underline cursor-pointer"
                    onClick={async () => {
                        await handleCopy('email');
                    }}
                >
                    <FaEnvelope className="shrink-0" />

                    <span
                        className="text-sm text-white"
                        id="email"
                    >
                        {email}
                    </span>

                    <span id="copy">
                        {copied === 'email' ? <FaCheck /> : <FaCopy />}
                    </span>
                </button>

                <button
                    type="button"
                    aria-label="Copy phone number"
                    className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-customGreen px-3 py-2 text-sm font-semibold text-customGreen hover:underline cursor-pointer"
                    onClick={async () => {
                        await handleCopy('phone');
                    }}
                >
                    <FaPhone className="shrink-0" />

                    <span
                        className="text-sm text-white"
                        id="phone"
                    >
                        {phone}
                    </span>

                    <span id="copy">
                        {copied === 'phone' ? <FaCheck /> : <FaCopy />}
                    </span>
                </button>
            </div>
            {/* Gradient Line */}
            <div className="relative mt-4 max-w-5xl pt-3">
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-customGreen to-transparent" />

                {/* <p className="flex items-center gap-2 font-bold text-xl">
                    <span className="h-2 w-2 rounded-full bg-customGreen" />
                    Skills
                </p> */}
            </div>

            <div className="w-full max-w-5xl ">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {aboutData.skills.map((skill, index) => (
                        <SkillCard key={index} stack={skill.stack} skills={skill.skill} />
                    ))}
                </div>
            </div>
        </section>
    </div>;
}
