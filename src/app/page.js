"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoMdCodeDownload } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { GrGithub } from "react-icons/gr";
import Contactpage from "./contactMe/page";
import Projectpage from "./project/page";
import Aboutpage from "./about/page";
import Skillspage from "./skills/page";
import Footer from "@/components/Footer";
import { FlipWords } from "../components/ui/flip-words";
import Image from "next/image";

export default function Homepage() {
  const words = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Problem Solver",
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Pawan_Prasad_cv_MERN_Stack.pdf";
    link.download = "Pawan_Prasad_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <section
        id="home"
        className="relative flex justify-center items-center w-full min-h-screen bg-[#1b1f24] overflow-hidden"
      >
        {/* Mobile Background */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-30 block md:hidden z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/image/pawanpic.png"
            alt="Pawan Developer"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Desktop Portrait */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 right-4 sm:right-6 hidden md:flex items-center md:w-[53vw] lg:w-[42vw] md:h-[90vh] lg:h-[80vh] z-10 pointer-events-none mr-0 md:mr-5 lg:mr-65 xl:mr-100 mt-0 md:mt-22 lg:mt-36"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/image/pawanpic.png"
              alt="Pawan Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Side Cards */}
        <motion.aside
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="absolute top-[18%] lg:top-[21%] right-4 sm:right-8 md:right-4 lg:right-10 xl:right-10 hidden flex-col gap-5 w-[260px] lg:px-2 lg:flex lg:w-[27%] z-30"
        >
          <motion.div variants={fadeInUp} className="text-white p-5">
            <h3 className="text-sm font-extrabold text-gray-300">ABOUT ME</h3>
            <p className="mt-2 text-xs text-gray-400 leading-relaxed">
              Passionate full-stack developer with expertise in modern web
              technologies. I create innovative solutions that bridge the gap
              between design and functionality.
            </p>
            <button
              className="mt-4 text-xs font-semibold text-white hover:text-blue-400 transition-colors duration-200 group"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              LEARN MORE{" "}
              <span className="group-hover:translate-x-1 inline-block ml-1 transition-transform duration-200">
                →
              </span>
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-white p-5">
            <h3 className="text-sm font-extrabold text-gray-300">PROJECTS</h3>
            <p className="mt-2 text-xs text-gray-400 leading-relaxed">
              Explore my portfolio of web applications, featuring responsive
              designs, efficient backends, and seamless user experiences.
            </p>
            <button
              className="mt-4 text-xs font-semibold text-white hover:text-blue-400 transition-colors duration-200 group"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              BROWSE PORTFOLIO{" "}
              <span className="group-hover:translate-x-1 inline-block ml-1 transition-transform duration-200">
                →
              </span>
            </button>
          </motion.div>
        </motion.aside>

        {/* Hero Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mt-10 z-40 max-w-2xl px-6 py-12 md:px-7 lg:px-12 text-center md:text-left md:mr-50 md:mt-18 lg:mr-135 lg:mt-15 xl:mr-170"
        >
          <motion.span variants={fadeInUp} className="text-4xl sm:text-5xl font-sans font-bold text-white">
            Hi
          </motion.span>

          {/* 🟡 Animated Yellow Bar */}
        <motion.div
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="origin-left mt-4 xl:ml-1 lg:ml-1 md:ml-1 h-1 w-[80px] sm:w-[19%] mx-auto md:mx-0 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
/>


          <motion.div
            variants={fadeInUp}
            className="mt-6 mb-3 font-sans flex flex-wrap justify-center md:justify-start items-end"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">I'm</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 ml-2 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text">
              Pawan
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white ml-2">, a</h1>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <FlipWords
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-blue-400"
              words={words}
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-gray-400 font-semibold text-sm sm:text-base md:w-[75%] lg:w-[45vw] md:text-[12px] lg:text-[14px] leading-relaxed"
          >
            Building beautiful, scalable, and user-friendly web applications
            with responsive front-end designs and efficient back-end systems.
            Passionate about creating digital experiences that make a difference.
          </motion.p>

          {/* Buttons + Icons */}
          <motion.div
            variants={staggerContainer}
            className="social-links flex mt-10  gap-5 items-center"
          >
            <motion.button
              variants={fadeInUp}
              onClick={handleDownloadCV}
              className="relative flex items-center gap-2 px-5 py-3 text-white font-medium 
               bg-blue-600/90 rounded-2xl border border-blue-400/40 backdrop-blur-sm
               transition-all duration-300 hover:bg-blue-700 hover:scale-[1.06] 
               hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] active:scale-95"
            >
              Download CV
              <IoMdCodeDownload size={22} />
            </motion.button>

            <motion.a
              variants={fadeInUp}
              href="https://github.com/pawanprasad2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/20 
               bg-white/5 backdrop-blur-sm text-white transition-all duration-300 
               hover:scale-110 hover:text-gray-200 hover:border-white/50 
               hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <GrGithub size={24} />
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="https://www.linkedin.com/in/pawanprasad2l/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/20 
               bg-white/5 backdrop-blur-sm text-white transition-all duration-300 
               hover:scale-110 hover:text-blue-400 hover:border-blue-400/60 
               hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              <BiLogoLinkedin size={26} />
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href="mailto:pawanprasad2322@gmail.com"
              className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/20 
               bg-white/5 backdrop-blur-sm text-white transition-all duration-300 
               hover:scale-110 hover:text-pink-400 hover:border-pink-400/60 
               hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
            >
              <AiOutlineMail size={26} />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <section id="skills">
        <Skillspage />
      </section>
      <section id="projects">
        <Projectpage />
      </section>
      <section id="about">
        <Aboutpage />
      </section>
      <section id="contact">
        <Contactpage />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
