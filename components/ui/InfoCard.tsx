type InfoCardProps = {
  value: React.ReactNode;
  label: string;
  description?: string;
  icon?: React.ReactNode;
};

export function InfoCard({ value, label, description, icon }: InfoCardProps) {
    return (
        <div className="group relative flex min-h-14 max-w-[40vw] sm:max-w-[15vw] flex-col justify-between overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30 p-4 transition-all duration-300 hover:border-customGreen/40 hover:bg-neutral-900/60 sm:min-h-32 sm:p-6">
            <div className="text-4xl font-bold tracking-tight text-customGreen transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl">
                {value}+
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400">
                    {label}
                </span>

                {/* <span className="h-px w-8 bg-neutral-800 transition-all duration-300 group-hover:w-12 group-hover:bg-customGreen/50" /> */}
                {icon && <div className="text-2xl text-customGreen">{icon}</div>}
            </div>
            {/* {description && <p className="sr-only">{description}</p>} */}
        </div>
    );
}
