interface Skill {
    stack: string;
    skill: string[];
}

interface AboutData {
    name: string;
    title: string;
    description: string;
    skills: Skill[];
}

export const aboutData: AboutData = {
    name: "Monish K",
    title: "Software Engineer",
    description: "I am a Software Engineer with 3+ years of experience building high-reliability enterprise applications, RESTful APIs, and automated integration pipelines using JavaScript, TypeScript, and Python. I specialize in state-driven transaction workflows, asynchronous processing, fault-tolerant systems, and configuration-driven full-stack platforms.",
    skills: [
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
    ]
};