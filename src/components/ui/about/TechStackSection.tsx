const STACK_ITEMS = [
  "ReactJS",
  "NextJS",
  "TailwindCSS",
  "TypeScript",
  "JavaScript",
  "ChartJS",
];

export default function TechStackSection() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          Always learning
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-50">
          My tech stack
        </h3>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {STACK_ITEMS.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-slate-700/60 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-200"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
