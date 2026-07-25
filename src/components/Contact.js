import React from "react";
import Reveal from "./Reveal";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const contacts = [
  {
    icon: HiOutlineEnvelope,
    label: "Email",
    value: "ateekujjawal@gmail.com",
    href: "mailto:ateekujjawal@gmail.com",
  },
  {
    icon: HiOutlinePhone,
    label: "Phone",
    value: "+1 602-328-7464  ·  +91 9879-368-551",
    href: "tel:+16023287464",
  },
  {
    icon: AiOutlineLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ateek-ujjawal",
    href: "https://linkedin.com/in/ateek-ujjawal",
  },
  {
    icon: HiOutlineMapPin,
    label: "Location",
    value: "Boston, MA",
    href: "#contact",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative px-5 py-24">
      <div className="container mx-auto max-w-4xl">
        <Reveal className="relative overflow-hidden rounded-3xl glass p-8 text-center sm:p-14">
          {/* ambient glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-accent/60" />
            Get in touch
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's build something <span className="text-gradient">great</span> together.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-400">
            Have an idea, a role, or just want to talk systems? My inbox is always open.
          </p>

          <div className="mx-auto mt-10 grid gap-4 sm:grid-cols-2">
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal
                  key={c.label}
                  delay={i * 120}
                  as="a"
                  href={c.href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-glow"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-mono uppercase tracking-wider text-slate-500">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-slate-200">
                      {c.value}
                    </span>
                  </span>
                </Reveal>
              );
            })}
          </div>

          <a
            href="https://github.com/ateek-ujjawal"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-7 py-3 font-semibold text-ink shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
          >
            <AiOutlineGithub size={20} className="text-ink" />
            <span className="text-ink">Find me on GitHub</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
