import React from "react";
import Reveal from "./Reveal";

/**
 * Consistent section header: a mono "eyebrow" tag, a large gradient-capable
 * title, and an optional supporting line.
 */
const SectionHeading = ({ eyebrow, title, subtitle, align = "left" }) => {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col ${alignment} gap-4 mb-12`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-6 bg-accent/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-400 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
