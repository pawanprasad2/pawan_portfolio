"use client";

import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { HiOutlineDownload } from "react-icons/hi";
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
    // Add CV download functionality here
    console.log("Downloading CV...");
  };

  const handleScrollDown = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="home"
        className="relative   flex justify-center items-center w-full min-h-screen bg-[#1b1f24] overflow-hidden"
      >
        {/* Mobile Portrait Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-30 block md:hidden z-0"
        >
          <Image
            src="/image/pawanpic.png"
            alt="Pawan Developer"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop Portrait */}
        <div
          aria-hidden="true"
          className="
            absolute inset-y-0 right-4 sm:right-6
            hidden md:flex items-center
            md:w-[53vw] lg:w-[42vw] md:h-[90vh] lg:h-[80vh]
            z-10
            pointer-events-none 
            mr-0 md:mr-5 lg:mr-65 xl:mr-100
            mt-0 md:mt-22 lg:mt-36
          "
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
        </div>

        {/* Desktop Side Cards */}
        <aside
          className="
            absolute top-[18%] lg:top-[21%]
            right-4 sm:right-8 md:right-4 lg:right-10 xl:right-10
            hidden  flex-col gap-5 w-[260px] lg:px-2 lg:flex lg:w-[27%]
            z-30
          "
        >
          <div className="rounded-lg  bg-[#131722]/90 backdrop-blur-sm text-white p-5 shadow-xl border border-gray-800/50 hover:bg-[#1a1f2e]/90 transition-all duration-300">
            <h3 className="text-sm font-sans  text-blue-300">ABOUT ME</h3>
            <p className="mt-2 text-xs text-gray-300 leading-relaxed">
              Passionate full-stack developer with expertise in modern web technologies. 
              I create innovative solutions that bridge the gap between design and functionality.
            </p>
            <button 
              className="mt-4 text-xs font-semibold text-blue-300 hover:text-blue-200 transition-colors duration-200 group"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              LEARN MORE <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
            </button>
          </div>

          <div className="rounded-lg bg-[#131722]/90 backdrop-blur-sm text-white p-5 shadow-xl border border-gray-800/50 hover:bg-[#1a1f2e]/90 transition-all duration-300">
            <h3 className="text-sm font-semibold text-blue-300">PROJECTS</h3>
            <p className="mt-2 text-xs text-gray-300 leading-relaxed">
              Explore my portfolio of web applications, featuring responsive designs, 
              efficient backends, and seamless user experiences.
            </p>
            <button 
              className="mt-4 text-xs font-semibold text-blue-300 hover:text-blue-200 transition-colors duration-200 group"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              BROWSE PORTFOLIO <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
            </button>
          </div>

          <div className="btn-1">
            <button 
              onClick={handleDownloadCV}
              className="p-3 bg-blue-500 md:p-2 hover:bg-blue-600 flex items-center text-sm text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <HiOutlineDownload className="mr-2 " size="20" /> 
              Download CV
            </button>
          </div>
        </aside>

        {/* Hero Content */}
        <div
          className="
            relative mt-10 
            z-40 max-w-2xl px-6 py-12 md:px-7 lg:px-12
            text-center md:text-left
            md:mr-50 md:mt-18 lg:mr-135 lg:mt-15 xl:mr-170 
          "
        >
          <span className="text-4xl sm:text-5xl font-sans xl:mr-2 xl:ml-2 lg:ml-2 md:ml-2 md:text-5xl font-bold  text-white animate-fade-in">
            Hi{" "}
          </span>
          
          <div className="mt-6 xl:ml-3 lg:ml-3 md:ml-3 h-1 w-[80px] border border-yellow-500 sm:w-[19%] mx-auto md:mx-0 bg-gradient-to-r from-yellow-500 to-yellow-400 md:w-[80px] rounded-full" />
          
          <div className="mt-8 mb-3 font-sans  flex flex-wrap justify-center md:justify-start items-end">
            <h1 className="text-4xl xl:ml-2 lg:ml-2 md:ml-2 sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white">
              I'm
            </h1>
            <h1 className="text-4xl sm:text-5xl font-sans md:text-5xl lg:text-6xl font-bold text-blue-400 ml-2 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text ">
              Pawan
            </h1>
            <h1 className="text-4xl sm:text-5xl font-sans md:text-5xl lg:text-6xl font-bold text-white ml-2">
              , a
            </h1>
          </div>

          <FlipWords
            className="text-2xl sm:text-3xl font-sans md:text-4xl lg:text-5xl  lg:w-[110%] font-bold dark:text-blue-400"
            words={words}
          />

          <p className="mt-6 xl:ml-2 lg:ml-2 font-sans md:ml-2 text-gray-400 font-semibold text-sm sm:text-base md:w-[75%] lg:w-[45vw] md:text-[12px] lg:text-[14px] leading-relaxed">
            Building beautiful, scalable, and user-friendly web applications
            with responsive front-end designs and efficient back-end systems.
            Passionate about creating digital experiences that make a
            difference.
          </p>

          <button 
            onClick={handleScrollDown}
            className="mt-8 mx-auto md:mx-0 rounded-full bg-[#0b39ef] hover:bg-[#0929d1] p-4 w-[56px] h-[56px] flex justify-center items-center xl:ml-2 lg:ml-2 md:ml-2 transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Scroll to next section"
          >
            <SlArrowDown className="text-white text-xl animate-bounce" />
          </button>
        </div>
      </section>

      {/* Navigation Sections */}
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