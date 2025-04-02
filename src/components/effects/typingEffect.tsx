"use client";

import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Software Engineer",
        "Lifelong Learner",
        "Tech Enthusiast",
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      ref={el}
      className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
    />
  );
};

export default TypingEffect;
