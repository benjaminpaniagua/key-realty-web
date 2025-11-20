"use client";

export default function EmailSection() {
  const handleCopy = () => {
    navigator.clipboard.writeText("tu-email@ejemplo.com");
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-50">
          Do you want contact me?
        </p>
        <p className="mt-2 text-sm text-slate-400">
          Im open to collaborations and new challenges.
        </p>
      </div>

      <button
        onClick={handleCopy}
        className="
          mt-4 w-full rounded-xl bg-slate-800 px-4 py-3 text-sm
          text-slate-200 transition hover:bg-slate-700
        "
      >
        Copy my email address
      </button>
    </div>
  );
}
