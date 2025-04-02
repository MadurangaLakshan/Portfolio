"use client";

import Header from "../components/sections/header";
import Hero from "../components/sections/hero";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
