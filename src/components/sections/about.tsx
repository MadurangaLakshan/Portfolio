import React from "react";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const about = () => {
  return (
    <section id="about" className="relative">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-500/50"></div> */}

      <main className=" relative flex min-h-screen flex-col md:flex-row items-center justify-center overflow-hidden text-white pt-12 sm:pt-0 gap-24 lg:gap-20 2xl:gap-48">
        <motion.section
          id="home"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="col-span-full p-6 text-center ">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-center text-3xl font-bold">
              About Me
            </span>

            <p className="mt-8 max-w-xl text-lg lg:text-2xl text-gray-300">
              I&apos;m a passionate Software Engineer & Web Developer dedicated
              to creating beautiful, functional digital experiences. I bring
              ideas to life through clean code and intuitive interfaces.
            </p>
            <span className="block mt-12 bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent text-2xl font-bold">
              What I Can Do
            </span>
            <p className="mt-4 max-w-xl text-lg lg:text-2xl text-gray-300">
              I help develop solutions that grow your business:
            </p>
            <ul className="mt-4 max-w-xl text-lg lg:text-xl text-gray-300 list-disc list-inside text-left">
              <li>Fullstack Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Database Design</li>
              <li>API Integration</li>
            </ul>
            <div className=" flex items-center justify-center pt-6 md:pt-8">
              <a href={process.env.NEXT_PUBLIC_CV_URL} download>
                <Button
                  variant={"default"}
                  className="cursor-pointer transition transform duration-300 hover:scale-105"
                >
                  <FaDownload />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="home"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="col-span-full p-6">
            <div className="flex flex-row p-3">
              <img
                src="web-programming.png"
                alt="icon"
                className="w-12 h-12 mr-2"
              />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-center text-3xl font-bold">
                Tools I Use
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-2xl">Programming Languages</span>
              <div className="flex flex-row gap-3 p-2 pb-4">
                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <span className="text-2xl">Web Development</span>
              <div className="flex flex-row gap-3 p-2 pb-4">
                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />

                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />

                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <span className="text-2xl">Frameworks & Libraries</span>
              <div className="flex flex-row gap-3 p-2 pb-4">
                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />

                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />

                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />

                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-2xl">Database Systems</span>

              <div className="flex flex-row gap-3 p-2 pb-4">
                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />

                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />

                <motion.img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg"
                  alt="JavaScript Icon"
                  className="w-12 h-12 mr-2 cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </section>
  );
};

export default about;
