import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
        <p className="mt-4 max-w-3xl text-pretty text-white/80">
          I’m a Full Stack Developer and technology enthusiast who loves turning ideas into real, working solutions. I enjoy building modern web applications using React, TypeScript, Firebase, and Node.js, and I’m currently exploring AI/ML to create smarter, user-friendly products.
        </p>
        <p className="mt-3 max-w-3xl text-pretty text-white/80">
          I believe in learning by doing. I’ve worked on projects like an IoT-based lie detector, a heart disease prediction system (ML + React + FastAPI + MongoDB), and an eCommerce rental platform with Firestore integration. I love solving problems, simplifying complex concepts, and continuously improving my skills.
        </p>
        <p className="mt-3 max-w-3xl text-pretty text-white/80">
          My goal is to create tech that is useful, meaningful, and accessible — and to grow into a strong full-stack professional while also sharing knowledge through content creation.
        </p>
      </div>
    </section>
  );
}
