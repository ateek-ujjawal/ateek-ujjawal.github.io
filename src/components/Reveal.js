import React from "react";
import useReveal from "../hooks/useReveal";

/**
 * Wraps children in a scroll-triggered fade-and-rise animation.
 * `delay` (ms) staggers grouped items; `as` picks the rendered element.
 */
const Reveal = ({ children, delay = 0, className = "", as: Tag = "div", ...rest }) => {
  const [ref, isVisible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
