import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 px-5 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#top" className="font-display text-lg font-bold">
          <span className="text-white">Ateek</span>{" "}
          <span className="text-gradient">Ujjawal</span>
          <span className="text-accent-teal">.</span>
        </a>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Ateek Ujjawal. Built with React &amp; Tailwind.
        </p>

        <a
          href="https://github.com/ateek-ujjawal"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-slate-400 transition-colors hover:text-accent"
        >
          <AiOutlineGithub size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
