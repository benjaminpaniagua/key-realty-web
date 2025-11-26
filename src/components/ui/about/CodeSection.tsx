export default function CodeSection() {
  return (
    <div className="flex h-full flex-col p-6 lg:p-10">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
        Behind the code
      </p>
      <p className="mt-2 text-lg font-semibold text-white">
        Transforming curiosity into code and ideas into experiences.
      </p>

      <div className="mt-6 flex-1 rounded-2xl bg-slate-950/70 p-4 text-xs sm:text-sm font-mono text-slate-200 border border-slate-800/70">
        <pre className="h-full w-full overflow-auto">
          {`// React & I: a great team

import Next from 'next';
import React from 'react';

const dream = 'Turning ideas into websites';

export default dream;`}
        </pre>
      </div>
    </div>
  );
}
