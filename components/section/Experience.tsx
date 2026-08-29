import { FaBriefcase, FaChartLine, FaCheck, FaCode, FaCogs } from "react-icons/fa";
import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <div className="max-w-6xl space-y-10">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-customGreen">
          Experience
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Professional work 
          {/* & selected{" "} */}
          {/* <span className="text-customGreen">engineering contributions.</span> */}
        </h1>
        {/* <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
          Building enterprise systems that are reliable, scalable, and designed
          to automate complex business workflows.
        </p> */}
      </header>

      {experienceData.map((experience) => (
        <article key={`${experience.company}-${experience.period}`} className="relative">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
            <div className="relative border-l border-customGreen/30 pl-6 sm:pl-8">
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-customGreen shadow-[0_0_10px_rgba(0,255,110,0.5)]" />

              <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
                <span>{experience.period}</span>
                {experience.current && (
                  <span className="rounded-full border border-customGreen/40 px-2 py-0.5 text-[10px] text-customGreen">
                    Current
                  </span>
                )}
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                {experience.title}
              </h2>
              <p className="mt-1 text-lg text-customGreen">{experience.company}</p>
              <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                {experience.description}
              </p>

              <div className="mt-8 space-y-8">
                {experience.categories.map((category, categoryIndex) => (
                  <section
                    key={category.title}
                    className="rounded-xl border border-neutral-800 bg-neutral-900/20 p-4 sm:p-6"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-customGreen/30 text-customGreen">
                        {categoryIndex === 0 ? <FaCogs aria-hidden="true" /> : <FaCode aria-hidden="true" />}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white sm:text-xl">
                          {category.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-neutral-500">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 divide-y divide-neutral-800">
                      {category.projects.map((project) => (
                        <div key={project.title} className="group py-5 first:pt-0 last:pb-0">
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div className="min-w-0 flex-1">
                              <h4 className="font-semibold text-neutral-100 transition-colors group-hover:text-customGreen">
                                {project.title}
                              </h4>
                              <p className="mt-2 text-sm leading-6 text-neutral-400">
                                {project.description}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                  <span
                                    key={technology}
                                    className="rounded-md border border-neutral-800 px-2.5 py-1 text-xs text-neutral-500"
                                  >
                                    {technology}
                                  </span>
                                ))}
                              </div>
                            </div>
                            {project.metric && (
                              <div className="shrink-0 text-left sm:text-right">
                                <p className="text-xl font-semibold text-customGreen">
                                  {project.metric.value}
                                </p>
                                <p className="max-w-24 text-xs uppercase tracking-wider text-neutral-500">
                                  {project.metric.label}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <aside className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {experience.metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-4 transition-colors hover:border-customGreen/40 sm:p-5"
                >
                  <span className="text-customGreen">
                    {index === 0 ? <FaBriefcase aria-hidden="true" /> : index === 1 ? <FaCode aria-hidden="true" /> : <FaChartLine aria-hidden="true" />}
                  </span>
                  <p className="mt-4 text-3xl font-semibold tracking-tight text-customGreen">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                    {metric.label}
                  </p>
                  <p className="sr-only">{metric.description}</p>
                </div>
              ))}
            </aside>
          </div>

          <section className="mt-8 border-y border-neutral-800 py-5" aria-label="Impact summary">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-customGreen">
              <FaCheck aria-hidden="true" />
              Impact
            </div>
            <div className="mt-4 grid gap-3 text-sm text-neutral-300 sm:grid-cols-3 sm:gap-6">
              {experience.impact.map((item) => (
                <p key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-customGreen">✓</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </section>
        </article>
      ))}
    </div>
  );
}
