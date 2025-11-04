import React from 'react';

function ProjectCard({ title, description, tags = [] }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]">
      <div className="absolute -inset-px pointer-events-none bg-gradient-to-tr from-fuchsia-500/0 via-sky-400/0 to-amber-300/0 opacity-0 blur-2xl transition group-hover:opacity-30" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/75">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/80">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const items = [
    {
      title: 'IoT-based Lie Detector',
      description:
        'Sensor-driven detection pipeline with real-time visualization and edge-to-cloud data flow.',
      tags: ['IoT', 'Microcontrollers', 'Data Viz'],
    },
    {
      title: 'Heart Disease Prediction',
      description:
        'End-to-end app combining ML with React UI and FastAPI + MongoDB backend for predictions.',
      tags: ['React', 'FastAPI', 'MongoDB', 'ML'],
    },
    {
      title: 'eCommerce Rental Platform',
      description:
        'Rental workflows, user auth, and inventory with Firestore integration and modern UI.',
      tags: ['Firebase', 'Firestore', 'Auth'],
    },
  ];

  return (
    <section id="projects" className="relative w-full bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Selected Projects</h2>
          <a href="#contact" className="text-sm font-medium text-sky-300 hover:text-sky-200">Get in touch</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.title} title={p.title} description={p.description} tags={p.tags} />
          ))}
        </div>
      </div>
    </section>
  );
}
