import React from 'react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/90">
    {children}
  </span>
);

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills Highlights</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
            <h3 className="text-sm font-semibold text-white/90">Frontend</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-white/80">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind</Badge>
              <Badge>CSS Modules</Badge>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
            <h3 className="text-sm font-semibold text-white/90">Backend</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-white/80">
              <Badge>Node.js</Badge>
              <Badge>FastAPI</Badge>
              <Badge>Firebase</Badge>
              <Badge>MongoDB</Badge>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
            <h3 className="text-sm font-semibold text-white/90">AI / ML</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-white/80">
              <Badge>Python</Badge>
              <Badge>Scikit-Learn</Badge>
              <Badge>Model Training</Badge>
              <Badge>Evaluation</Badge>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
            <h3 className="text-sm font-semibold text-white/90">Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-white/80">
              <Badge>Git</Badge>
              <Badge>VS Code</Badge>
              <Badge>Postman</Badge>
              <Badge>Android Studio</Badge>
              <Badge>Firestore</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
