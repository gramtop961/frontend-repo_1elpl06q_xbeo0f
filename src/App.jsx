import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-fuchsia-500/20 selection:text-fuchsia-200">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 via-sky-400 to-amber-300" />
            Avinash Jaiswal
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10 bg-slate-950 px-6 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Avinash Jaiswal. All rights reserved.</p>
            <div className="flex gap-3 text-sm">
              <a href="#projects" className="text-sky-300 hover:text-sky-200">Work</a>
              <span className="text-white/20">•</span>
              <a href="#skills" className="text-sky-300 hover:text-sky-200">Skills</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
