import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const baseClasses = "nav-item";

  const activeClasses = "bg-white text-gray-900";

  return (
    <motion.section
      id="home"
      className="fixed top-0 left-0 w-full z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex justify-center items-center p-3">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`${baseClasses} ${
                active === item.id ? activeClasses : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.section>
  );
};

export default Header;
