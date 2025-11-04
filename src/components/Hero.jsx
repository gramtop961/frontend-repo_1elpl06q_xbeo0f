import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial gradient to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.35)_55%,rgba(2,6,23,0.85)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-6 py-28 text-center md:py-36">
        <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          Full Stack Developer • Problem Solver • Tech Explorer
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-fuchsia-400 via-sky-400 to-amber-300 bg-clip-text text-transparent">Avinash Jaiswal</span>
        </h1>
        <p className="max-w-2xl text-balance text-base text-white/80 sm:text-lg">
          Building ideas into reality using code. I craft modern web apps with React, TypeScript, Firebase, and Node.js, and I’m exploring AI/ML to make products smarter and more human-friendly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow/20 shadow-white/20 transition hover:shadow-lg">
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#skills" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Explore Skills
          </a>
        </div>
      </div>
    </section>
  );
}
