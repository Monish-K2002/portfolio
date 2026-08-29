type InfoCardProps = {
  value: React.ReactNode;
  label: string;
  description?: string;
};

export function InfoCard({ value, label, description }: InfoCardProps) {
    return (
        <div className="group relative flex min-h-28 flex-col justify-between overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30 p-4 transition-all duration-300 hover:border-customGreen/40 hover:bg-neutral-900/60 sm:min-h-32 sm:p-6">
            <div className="text-4xl font-bold tracking-tight text-customGreen transition-transform duration-300 group-hover:translate-x-1 sm:text-5xl">
            {value}+
            </div>

            <div className="flex items-center justify-between">
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400">
                {label}
            </span>

            <span className="h-px w-8 bg-neutral-800 transition-all duration-300 group-hover:w-12 group-hover:bg-customGreen/50" />
            </div>
            {description && <p className="sr-only">{description}</p>}
        </div>
    );
}
