import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";

const projects = [
  {
    title: "Research Draft Reviewer — AI Agent",
    desc: "An AI-powered agent that reviews academic manuscripts for clarity, logical consistency and technical rigor, producing structured section-level feedback. Combines LLM reasoning with rule-based NLP heuristics and retrieval-augmented grounding — cutting hallucinated feedback by 60%.",
    code: "",
    skills: ["Python", "Agentic AI", "LLM", "RAG"],
    featured: true,
  },
  {
    title: "MLOps — MNIST Digit Classification",
    desc: "An end-to-end MLOps pipeline for MNIST digit classification with PyTorch, reaching 99.09% validation / 98.97% test accuracy. YAML-driven config, model checkpointing/versioning, GitHub Actions CI running pytest on Python 3.10–3.12, and a FastAPI REST API for health checks and predictions.",
    code: "https://github.com/ateek-ujjawal",
    skills: ["Python", "PyTorch", "FastAPI", "GitHub Actions"],
    featured: true,
  },
  {
    title: "Peer-to-peer Blockchain",
    desc: "A blockchain consensus algorithm over a distributed peer-to-peer network, built from scratch. Clients contact peers to send transactions and read the chain's status — inspired by the Bitcoin whitepaper.",
    code: "https://github.com/ateek-ujjawal/P2P-Blockchain",
    skills: ["C++", "Networks", "Distributed Systems", "gdb"],
    featured: true,
  },
  {
    title: "Tiny-renderer",
    desc: "A 3D software renderer implementing parts of the OpenGL pipeline — vertex and fragment shaders. Loads and renders 3D meshes with Blinn-Phong shading, textures, normals and specular maps.",
    code: "https://github.com/ateek-ujjawal/tiny-renderer",
    skills: ["C++", "Computer Graphics"],
    featured: true,
  },
  {
    title: "Rusty-OS",
    desc: "A tiny operating system written in Rust for RISC-V (QEMU). Implements a bootloader, virtual memory, trap handler, system calls and process structures.",
    code: "https://github.com/ateek-ujjawal/rusty-os",
    skills: ["Rust", "Operating Systems"],
  },
  {
    title: "ext2-based File System",
    desc: "A simple ext2-based file system running on FUSE. Supports read, write, create, truncate, mkdir, rmdir, chmod and more — with allocation bitmaps and inodes grouped at the start of the disk.",
    code: "https://github.com/ateek-ujjawal/unix-fs",
    skills: ["C", "System Calls", "gdb"],
  },
  {
    title: "Image Processing App",
    desc: "A Java + Swing image processing application: extract color components, apply greyscale/sepia filters, compress (Haar-Wavelet), blur, sharpen, color-correct and dither — with a tabbed UI for working on multiple images at once.",
    code: "",
    skills: ["Java", "Swing"],
  },
  {
    title: "Wash Your Hands",
    desc: "A Covid-19 app that reminds you to wash your hands when you get home, with periodic reminders. Featured in the Times of India.",
    code: "",
    link: "https://timesofindia.indiatimes.com/city/jaipur/students-of-manipal-university-jaipur-create-app-that-gives-hand-washing-reminders/articleshow/75165595.cms",
    skills: ["Flutter"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative px-5 py-24">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          subtitle="Things I've built to explore systems, graphics and the fundamentals I love — most are open source."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const href = project.code || project.link;
            return (
              <Reveal
                key={project.title}
                delay={(i % 3) * 120}
                className={`group relative flex flex-col overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-glow ${
                  project.featured ? "lg:row-span-1" : ""
                }`}
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gradient">
                    {project.title}
                  </h3>
                  {href && (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 group-hover:border-accent/40 group-hover:text-accent">
                      <HiArrowUpRight size={16} />
                    </span>
                  )}
                  {project.featured && !href && (
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.desc}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-accent-light"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  {project.code ? (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-accent"
                    >
                      <AiOutlineGithub size={18} /> GitHub repo
                    </a>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-accent"
                    >
                      <AiOutlineLink size={18} /> Read more
                    </a>
                  ) : (
                    <span className="text-sm text-slate-600">Private project</span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
