import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import useActiveSection from "../hooks/useActiveSection";

const RESUME_URL =
  "https://drive.google.com/file/d/1TMnd83kvnVFPqIH8O1o6pHIe_zt6JJ7z/view?usp=sharing";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(["about", "skills", "projects", "contact"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-base/70 border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5">
        <a href="#top" className="group font-display text-xl font-bold tracking-tight">
          <span className="text-white">Ateek</span>{" "}
          <span className="text-gradient">Ujjawal</span>
          <span className="text-accent-teal">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active === link.id ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent-gradient transition-transform duration-300 ${
                  active === link.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-3 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-ink hover:shadow-glow"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="relative z-50 md:hidden text-white"
        >
          {open ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-base/95 backdrop-blur-xl transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link, i) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setOpen(false)}
            className={`font-display text-3xl font-semibold transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } ${active === link.id ? "text-gradient" : "text-slate-300"}`}
            style={{ transitionDelay: open ? `${i * 70}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="mt-4 rounded-full border border-accent/40 bg-accent/10 px-8 py-3 text-lg font-semibold text-accent"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Navbar;
