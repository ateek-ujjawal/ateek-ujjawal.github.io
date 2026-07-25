import React from "react";
import ProfileImg from "../assets/Ateek_profile.jpg";
import { AiOutlineGithub, AiOutlineArrowDown } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

const RESUME_URL =
  "https://drive.google.com/file/d/1TMnd83kvnVFPqIH8O1o6pHIe_zt6JJ7z/view?usp=sharing";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-16"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-slate [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-float-slow" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-accent-teal/20 blur-[130px] animate-float-slow [animation-delay:-6s]" />
      </div>

      <div className="container mx-auto grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        {/* Left: intro */}
        <div className="animate-fade-up">
          <span className="eyebrow mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-teal" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-teal" />
            </span>
            Available for opportunities
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient animate-gradient-x">Ateek Ujjawal</span>
            <br />
            <span className="text-slate-300">Software Engineer</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            I love diving into low-level concepts —{" "}
            <span className="text-slate-200">operating systems</span>,{" "}
            <span className="text-slate-200">graphics</span>,{" "}
            <span className="text-slate-200">networks</span> and distributed systems.
            Professionally, I build scalable backends and APIs with{" "}
            <span className="text-accent">Python, Django, Java Spring Boot and AWS</span> — and
            increasingly, <span className="text-accent-teal">AI-powered systems</span>.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent-gradient px-7 py-3 font-semibold text-ink shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10 text-ink">See Projects</span>
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition-all duration-300 hover:border-accent/50 hover:bg-white/5"
            >
              <HiOutlineDocumentText size={20} className="text-accent" />
              Resume
            </a>
            <a
              href="https://github.com/ateek-ujjawal"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all duration-300 hover:border-accent/50 hover:text-accent hover:shadow-glow"
            >
              <AiOutlineGithub size={24} />
            </a>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="relative mx-auto flex justify-center md:justify-end">
          <div className="relative animate-float">
            {/* rotating conic ring */}
            <div className="absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,#7dd3fc,#2dd4bf,#5ec4dd,#7dd3fc)] opacity-40 blur-md animate-spin-slow" />
            <div className="absolute -inset-1 rounded-full bg-accent-gradient opacity-70" />
            <img
              src={ProfileImg}
              alt="Ateek Ujjawal"
              className="relative h-60 w-60 rounded-full object-cover ring-4 ring-base sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-accent md:flex"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <AiOutlineArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
