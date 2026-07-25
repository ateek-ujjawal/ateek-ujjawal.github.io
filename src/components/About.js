import React from "react";
import NortheasternImg from "../assets/northeastern.png";
import MujImg from "../assets/muj.png";
import DellImg from "../assets/dell.jpg";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";

const education = [
  {
    img: NortheasternImg,
    school: "Northeastern University",
    detail: "MS in Computer Science — GPA 3.87 / 4.0",
    period: "Boston, MA · Sep 2023 – Dec 2025",
  },
  {
    img: MujImg,
    school: "Manipal University Jaipur",
    detail: "B.Tech in Computer Science & Engineering — CGPA 8.14 / 10",
    period: "Jaipur, India · Aug 2017 – Jun 2021",
  },
];

const experience = [
  {
    monogram: "WV",
    company: "WeVote",
    role: "Senior Software Engineer",
    period: "Jan 2026 – Present · Remote",
    points: [
      "Designing and developing a transparent election platform built with Django and React.",
      "Engineered scalable REST APIs with Django REST Framework and PostgreSQL, handling high-concurrency workloads for 10,000+ users.",
    ],
  },
  {
    monogram: "M",
    company: "Method AI",
    role: "Software Engineer Co-op",
    period: "Jan 2025 – Apr 2025 · Needham, MA",
    points: [
      "Cut data-retrieval latency 30% by optimizing AWS S3 access patterns via Boto3 with caching and efficient object handling.",
      "Improved query performance 40% by redesigning S3 ↔ PostgreSQL ETL pipelines with SQLAlchemy in Docker.",
      "Debugged and resolved 15+ critical defects in a C++ medical-imaging rendering pipeline.",
    ],
  },
  {
    img: DellImg,
    company: "Dell Technologies",
    role: "Software Engineer 2",
    period: "Aug 2021 – Aug 2023 · Bangalore, India",
    points: [
      "Built and deployed scalable RESTful microservices in Java Spring Boot with a SQL Server backend.",
      "Increased data throughput 60% with an event-driven architecture using RabbitMQ and StreamSets.",
      "Reduced release cycles 75% by improving CI/CD pipelines with GitHub Actions, SonarQube, Checkmarx and Jenkins.",
    ],
  },
];

const Card = ({ img, monogram, alt, children }) => (
  <div className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow">
    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    <div className="flex items-center gap-5">
      {img ? (
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/90 p-2">
          <img src={img} alt={alt} className="h-full w-full object-contain" />
        </div>
      ) : (
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-accent-gradient font-display text-xl font-bold text-ink">
          {monogram}
        </div>
      )}
      <div className="min-w-0">{children}</div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative px-5 py-24">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Background"
          title="Education & Experience"
          subtitle="The path that shaped how I think about software — from fundamentals to shipping production backends."
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Education */}
          <div>
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <HiOutlineAcademicCap size={22} />
              </span>
              <h3 className="font-display text-2xl font-semibold text-white">Education</h3>
            </Reveal>

            <div className="space-y-5">
              {education.map((item, i) => (
                <Reveal key={item.school} delay={i * 120}>
                  <Card img={item.img} alt={item.school}>
                    <h4 className="text-lg font-semibold text-white">{item.school}</h4>
                    <p className="text-sm text-slate-400">{item.detail}</p>
                    <p className="mt-1 text-xs font-mono uppercase tracking-wider text-accent/80">
                      {item.period}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-teal/10 text-accent-teal">
                <HiOutlineBriefcase size={22} />
              </span>
              <h3 className="font-display text-2xl font-semibold text-white">Experience</h3>
            </Reveal>

            <div className="space-y-5">
              {experience.map((item, i) => (
                <Reveal key={item.company} delay={i * 120}>
                  <Card img={item.img} monogram={item.monogram} alt={item.company}>
                    <h4 className="text-lg font-semibold text-white">{item.company}</h4>
                    <p className="text-sm font-medium text-accent">{item.role}</p>
                    {item.period && (
                      <p className="mt-1 text-xs font-mono uppercase tracking-wider text-slate-500">
                        {item.period}
                      </p>
                    )}
                  </Card>
                  <ul className="mt-4 space-y-2 pl-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gradient" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
