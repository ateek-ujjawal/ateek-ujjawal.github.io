import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineServerStack,
  HiOutlineWrenchScrewdriver,
  HiOutlineCloud,
  HiOutlineSparkles,
} from "react-icons/hi2";

const groups = [
  {
    icon: HiOutlineCommandLine,
    title: "Languages",
    items: ["Python", "JavaScript", "C++", "C#", "Java", "C", "Rust", "SQL"],
    tint: "text-accent",
  },
  {
    icon: HiOutlineServerStack,
    title: "Backend & Data",
    items: [
      "Django",
      "FastAPI",
      "Java Spring Boot",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "SQL Server",
      "MySQL",
    ],
    tint: "text-accent-light",
  },
  {
    icon: HiOutlineCloud,
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "S3 / EC2 / ECS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
    ],
    tint: "text-accent-teal",
  },
  {
    icon: HiOutlineSparkles,
    title: "AI & ML",
    items: ["PyTorch", "LLMs", "Agentic AI", "RAG"],
    tint: "text-accent",
  },
  {
    icon: HiOutlineCpuChip,
    title: "Systems & Low-level",
    items: ["Operating Systems", "Computer Graphics", "Networks", "Distributed Systems"],
    tint: "text-accent-teal",
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: "Tools & Frameworks",
    items: ["React", "Git", "gdb", "QEMU", "FUSE", "Swing", "Flutter"],
    tint: "text-accent-light",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative px-5 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & Technologies"
          subtitle="A blend of low-level systems knowledge and production backend engineering."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal
                key={group.title}
                delay={i * 100}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-glow"
              >
                <span
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${group.tint} transition-transform duration-500 group-hover:scale-110`}
                >
                  <Icon size={26} />
                </span>
                <h3 className="mb-4 font-display text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:border-accent/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
