"use client";

import React from "react";
import { SlArrowDown } from "react-icons/sl";
import Contactpage from "./contactMe/page";
import Projectpage from "./project/page";
import Aboutpage from "./about/page";
import Skillspage from "./skills/page";
import Footer from "@/components/Footer";
import { FlipWords } from "../components/ui/flip-words";
import Image from "next/image";

function Homepage() {
  const words = [
    "MERN Stack Devloper",
    "Frontend Devloper",
    "Backed Devloper",
    "Problem Slover",
  ];

  return (
    <>
      <section id="home" className="relative w-full min-h-screen bg-[#1b1e23] overflow-hidden">
        {/* Overflowing hero image */}
        <div className="
          absolute left-1/2 top-0 
          -translate-x-1/2 
          md:left-auto md:right-0 md:translate-x-0
          w-[320px] h-[400px] md:w-[520px] md:h-[640px]
          z-10 pointer-events-none
        ">
          <Image
            src="/image/pawanpic.png"
            alt="Pawan Developer"
            fill
            className="object-cover rounded-lg shadow-2xl opacity-95"
            priority
            sizes="(max-width: 600px) 320px, 520px"
          />
        </div>
        {/* Foreground text block */}
        <div className="relative z-20 flex flex-col justify-center md:flex-row items-center w-full min-h-screen px-6 py-12 md:px-12">
          <div className="w-full md:w-[60%] flex flex-col items-start">
            <span className="text-5xl font-bold font-sans ml-2 text-white">Hi</span>
            <div className="border-b-4 border-white ml-3 w-[12%] mt-8"></div>
            <div className="flex flex-wrap mt-9 mb-2 items-end">
              <h1 className="text-5xl md:text-7xl font-bold ml-2 text-white">I'm</h1>
              <h1 className="text-5xl md:text-7xl font-bold text-blue-400 ml-2">Pawan</h1>
              <h1 className="text-5xl md:text-7xl font-bold text-white ml-2">,a</h1>
            </div>
            <FlipWords className="dark:text-blue-500 font-bold mb-6 text-3xl md:text-6xl" words={words} />
            <h4 className="text-gray-400 ml-3 w-full md:w-[76%] font-semibold truncate overflow-hidden text-ellipsis whitespace-nowrap md:whitespace-normal">
              Building beautiful, scalable, and user-friendly web applications with responsive front-end designs and efficient back-end systems. Passionate about creating digital experiences that make a difference
            </h4>
            <div id="skills" className="mt-9 ml-3 rounded-full bg-[#0b39ef] p-6 w-[60px] flex justify-center items-center">
              <SlArrowDown className="size-6" />
            </div>
          </div>
          {/* Spacer for right image alignment */}
          <div className="hidden md:block md:w-[40%]" />
        </div>

        <section id="skills"><Skillspage /></section>
        <section id="projects"><Projectpage /></section>
        <section id="about"><Aboutpage /></section>
        <section id="contact"><Contactpage /></section>
        <section id="footer"><Footer /></section>
      </section>
    </>
  );
}

export default Homepage;
