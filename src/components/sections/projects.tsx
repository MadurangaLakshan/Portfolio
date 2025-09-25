import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiAngular,
  SiExpress,
  SiMongodb,
  SiVuetify,
  SiFirebase,
  SiSpringboot,
  SiMui,
  SiShadcnui,
} from "react-icons/si";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";

const techIcons: { [key: string]: IconType } = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Vue: SiVuedotjs,
  Vuetify: SiVuetify,
  Firebase: SiFirebase,
  Angular: SiAngular,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  SpringBoot: SiSpringboot,
  MUI: SiMui,
  PostgreSQL: BiLogoPostgresql,
  "Shadcn/ui": SiShadcnui,
};

const techColors: { [key: string]: string } = {
  React: "#61DAFB",
  "Next.js": "#000000",
  "Tailwind CSS": "#38B2AC",
  Vue: "#42b883",
  Vuetify: "#1867C0",
  Firebase: "#FFCA28",
  Angular: "#DD0031",
  "Node.js": "#68A063",
  Express: "#000000",
  MongoDB: "#47A248",
  SpringBoot: "#6DB33F",
  MUI: "#0883ff",
  PostgreSQL: "#396c94",
  "Shadcn/ui": "#0f172a", // Assuming Shadcn has a dark theme
};

type Project = {
  title: string;
  description: string;
  liveDemo?: string;
  repo: string;
  image: string;
  technologies: string[];
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Streetwear E-commerce Website",
      description:
        "A modern and responsive streetwear clothing eCommerce website built with Next.js",
      liveDemo: "https://oniricastore.netlify.app/",
      repo: "https://github.com/MadurangaLakshan/NextJs-Streetwear-Ecommerce-Website",
      image: "/proj4.png",
      technologies: ["Next.js", "Tailwind CSS", "Shadcn/ui", "PostgreSQL"],
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A modern personal finance tracker built with React, Spring Boot for easy income and expense tracking.",
      liveDemo: "https://personal-finance-tracker5.netlify.app",
      repo: "https://github.com/MadurangaLakshan/Personal-Finance-Tracker-Application",
      image: "/proj1.png",
      technologies: ["React", "MUI", "SpringBoot", "Firebase", "PostgreSQL"],
    },

    {
      title: "Realtime Chat Application",
      description: "A realtime chat application using firebase and react.",
      liveDemo: "https://live-demo.com/project-two",
      repo: "https://github.com/MadurangaLakshan/Realtime-Chat-Application",
      image: "/proj2.png",
      technologies: ["React", "Firebase"],
    },
    {
      title: "Mern Note Application",
      description:
        "A simple CRUD application for managing notes using MERN stack.",
      repo: "https://github.com/MadurangaLakshan/Note-Application",
      image: "/proj3.png",
      technologies: ["React", "MUI", "Express", "MongoDB", "Node.js"],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="pt-24">
      <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden text-white">
        <div className="container mx-auto px-4">
          <motion.section
            id="home"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="col-span-full text-center">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-center text-3xl font-bold">
                My Projects
              </span>

              <p className="max-w-xl mx-auto text-lg text-gray-300 pt-6">
                A collection of my latest work in software development
              </p>
            </div>
          </motion.section>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="shadow-lg border-none pt-0 bg-white/10 md:backdrop-blur hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 w-full rounded-t-xl overflow-hidden hover:shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white">
                      {project.description}
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => {
                        const IconComponent = techIcons[tech];
                        const color = techColors[tech] || "#ffffff";
                        return (
                          <span
                            key={idx}
                            className="flex items-center gap-1 text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                          >
                            {IconComponent && (
                              <IconComponent
                                className="w-4 h-4"
                                style={{ color }}
                              />
                            )}
                            <span>{tech}</span>
                          </span>
                        );
                      })}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {project.liveDemo ? (
                      <Link
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="default"
                          className="cursor-pointer transition transform duration-300 hover:scale-105"
                        >
                          <span className="relative flex h-3 w-3 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="absolute inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          Live Demo
                        </Button>
                      </Link>
                    ) : (
                      <div className="w-[120px]" />
                    )}
                    <Link
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="cursor-pointer transition transform duration-300 hover:scale-105"
                      >
                        <FiGithub />
                        GitHub Repo
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Projects;
