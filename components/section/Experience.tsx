
import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <div className="space-y-8">
        {experienceData.map((exp, index) => (
            <div key={index} className="flex flex-col gap-3 md:flex-row md:gap-0">
                <div className="pt-1 text-xs font-medium uppercase tracking-wider text-neutral-100 sm:text-sm md:w-44 md:shrink-0 md:pr-8">
                    {exp.period}
                </div>

                <div className="border-l border-neutral-800 pl-4 sm:pl-6 md:pl-8">
                    <h2 className="text-xl font-semibold text-white sm:text-2xl">
                        {exp.title}
                    </h2>

                    <p className="mt-1 text-customGreen">
                        {exp.company}
                    </p>

                    {/* <p className="mt-4 max-w-5xl leading-7 text-neutral-100 text-pretty text-justify"> */}
                        <ul className="mt-4 max-w-5xl list-inside list-disc space-y-2 leading-7 text-pretty text-neutral-100 md:text-justify">
                        {exp.experience && exp.experience.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                    {/* </p> */}
                </div>
            </div>
        ))}
    </div>
  );
}
