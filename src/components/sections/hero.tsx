"use client";
import Link from "next/link";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import TypingEffect from "../effects/typingEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero">
      <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden text-white pt6 md:pt-24 ">
        <div className="z-10 flex w-full max-w-4xl flex-col items-center justify-center px-4 py-12">
          <div className="flex flex-col md:flex-row items-center">
            <motion.section
              id="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Avatar className="mb-4 md:mb-0 mr-0 md:mr-6 h-32 w-32 bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500">
                <Image
                  src="/profile_pic.png"
                  alt="Profile Picture"
                  width={128}
                  height={128}
                  priority
                />
              </Avatar>
            </motion.section>

            <motion.section
              id="home"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Hey, I’m{" "}
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Maduranga
                </span>
                <br />A{" "}
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  <TypingEffect />
                </span>
              </h1>
            </motion.section>
          </div>

          <motion.section
            id="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mt-8 max-w-xl text-lg lg:text-2xl text-gray-300 text-center">
              Passionate about building intuitive software that blends
              creativity and functionality to deliver seamless user experiences.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="#projects">
                <Button
                  variant="default"
                  className="px-6 py-3 cursor-pointer text-lg transition transform duration-300 hover:scale-105"
                >
                  View Projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="secondary"
                  className="px-8 py-4.5 cursor-pointer border text-lg transition transform duration-300 hover:scale-105"
                >
                  Contact Me
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex space-x-6 items-center justify-center">
              <Link href="https://github.com/MadurangaLakshan" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaGithub className="h-6 w-6 hover:text-brand-light hover:text-[#181717] transition-all duration-250" />
                </motion.div>
              </Link>

              <Link
                href="https://linkedin.com/in/madurangalakshan"
                target="_blank"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaLinkedin className="h-6 w-6 hover:text-brand-light  hover:text-[#0077B5] transition-all duration-250" />
                </motion.div>
              </Link>

              <Link
                href="https://instagram.com/maduranga_lakshan_03"
                target="_blank"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaInstagram className="h-6 w-6 hover:text-brand-light hover:text-[#b5005b] transition-all duration-250" />
                </motion.div>
              </Link>
            </div>
          </motion.section>
        </div>
      </main>
    </section>
  );
};

export default Hero;
