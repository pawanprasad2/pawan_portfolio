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

  return (
    <>
      <section
        id="home"
        className="relative flex justify-center items-center w-full min-h-screen bg-[#0f1217] overflow-hidden"
      >
        {/* Portrait for mobile (background effect) */}
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

        {/* Portrait for desktop (right side) */}
        <div
          aria-hidden="true"
          className="
            absolute inset-y-0 right-4 sm:right-6
            hidden md:flex items-center
            md:w-[45vw] lg:w-[40vw] md:h-[85vh] lg:h-[80vh]
            z-10
            pointer-events-none 
            mr-0 md:mr-60 lg:mr-65 xl:mr-100
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

        {/* Right-side cards (desktop only) */}
        <aside
          className="
            absolute top-[18%]  md:top-[25%] lg:top-[22%]
            right-4 sm:right-8 md:right-14 lg:right-18 xl:right-34
            hidden md:flex flex-col gap-5 w-[260px] lg:w-[280px]
            z-30
          "
        >
          <div className="rounded-lg bg-[#131722]/90 text-white p-5 shadow-xl">
            <h3 className="text-sm font-semibold">ABOUT ME</h3>
            <p className="mt-2 text-xs text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit leo qui id
              elementum convallis lacus gravida.
            </p>
            <button className="mt-4 text-xs font-semibold text-blue-300 hover:underline">
              LEARN MORE →
            </button>
          </div>

          <div className="rounded-lg bg-[#131722]/90 text-white p-5 shadow-xl">
            <h3 className="text-sm font-semibold">Projects</h3>
            <p className="mt-2 text-xs text-gray-300">
              Purus ut faucibus pulvinar elementum integer enim neque volutpat
              eu non diam phasellus.
            </p>
            <button className="mt-4 text-xs font-semibold text-blue-300 hover:underline">
              BROWSE PORTFOLIO →
            </button>
          </div>

          <div className="btn-1">
            <button className="p-3 bg-blue-500 flex text-sm text-white font-bold rounded-2xl">
              <HiOutlineDownload className="mr-2" size="24" /> Download CV
            </button>
          </div>
        </aside>

        {/* Hero text */}
        <div
          className="
            relative mt-10 
            z-40 max-w-2xl px-6 py-12 md:px-10 lg:px-12
            text-center md:text-left
            md:mr-55  md:mt-20   lg:mr-95 lg:mt-15 xl:mr-140
          "
        >
          <span className="text-4xl sm:text-5xl md:text-5xl font-bold text-white">
            Hi{" "}
          </span>
          <div className="mt-6 h-1 w-[80px] border border-yellow-500 sm:w-[19%] mx-auto md:mx-0 bg-white md:w-[80px]" />
          <div className="mt-8 mb-3 flex flex-wrap justify-center md:justify-start items-end">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              I'm
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 ml-2">
              Pawan
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white ml-2">
              , a
            </h1>
          </div>

          <FlipWords
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold dark:text-blue-400"
            words={words}
          />

          <p className="mt-6 text-gray-400  font-semibold text-sm sm:text-base md:w-[90%] lg:w-[45vw]  md:text-l lg:text-xl">
            Building beautiful, scalable, and user-friendly web applications
            with responsive front-end designs and efficient back-end systems.
            Passionate about creating digital experiences that make a
            difference.
          </p>

          <div className="mt-8 mx-auto md:mx-0 rounded-full bg-[#0b39ef] p-4 w-[56px] flex justify-center items-center">
            <SlArrowDown className="text-white text-xl" />
          </div>
        </div>
      </section>

      {/* other section */}
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
