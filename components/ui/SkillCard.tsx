interface SkillCardProps {
  stack: string;
  skills: string[];
}

export function SkillCard({ stack, skills }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30 p-4 sm:p-6 transition-all duration-300 hover:border-customGreen/40 hover:bg-neutral-900/60">
      {/* Stack */}
      <div className="flex items-center justify-between">
        <h3 className="text-md sm:text-xl font-semibold text-white">
          {stack}
        </h3>

        <span className="h-2 w-2 rounded-full bg-neutral-700 transition-colors duration-300 group-hover:bg-customGreen" />
      </div>

      {/* Skills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((item) => (
          <span
            key={item}
            className="rounded-md border border-neutral-800 bg-neutral-950/50 px-3 py-1.5 text-xs sm:text-sm text-neutral-400 transition-colors duration-300 group-hover:border-neutral-700 group-hover:text-neutral-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}