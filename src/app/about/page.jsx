"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight, MapPin, Calendar, Coffee } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Aboutpage() {
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate yellow underline
      gsap.fromTo(
        lineRef.current,
        { width: "0%", opacity: 0 },
        {
          width: "25%",
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 85%",
          },
        }
      );

      // Fade-up for all text sections and timeline items
      sectionsRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen border-t border-gray-700 bg-[#1b1f24] text-white overflow-hidden">
      {/* Header */}
      <div className="mx-auto mt-10 lg:ml-30 text-center md:text-left">
        <h1
          ref={headingRef}
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
        >
          ABOUT ME
        </h1>
        <div
          ref={lineRef}
          className="h-1 w-[25%] border border-yellow-500 sm:w-[19%] md:mx-0 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 space-y-24">
        {/* Intro Section */}
        <div ref={(el) => (sectionsRef.current[0] = el)}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-400 font-medium">
              Available for work
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Pawan Prasad
          </h1>
          <p className="text-2xl text-gray-300 font-light mb-2">
            MERN Stack Developer
          </p>
        </div>

        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="w-full h-px bg-gray-700"
        ></div>

        {/* Main Story */}
        <div ref={(el) => (sectionsRef.current[2] = el)}>
          <div className="max-w-3xl">
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Hey there! I'm a recent BCA graduate with a genuine passion for
              web development. My coding journey started with curiosity and has
              grown into something I truly love doing. I've spent countless
              hours building projects, learning the MERN stack.
            </p>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              What excites me most about development is{" "}
              <span className="text-white font-medium">
                solving problems through code
              </span>
              . Whether it's building a smooth user interface or architecting a
              solid backend, I enjoy the process of turning ideas into working
              applications. I believe in writing clean code that makes sense not
              just today, but months from now when someone else (or future me)
              has to work with it.
            </p>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              I'm looking forward to joining a team where I can contribute,
              learn from experienced developers, and continue growing my skills.
              Every project is an opportunity to get better, and I'm
              <span className="text-white font-medium">
                {" "}
                excited about what we could build together
              </span>
              .
            </p>
          </div>
        </div>

        {/* Education Timeline */}
        <div ref={(el) => (sectionsRef.current[3] = el)}>
          <h2 className="text-3xl font-bold mb-12">My Journey</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700"></div>

            <div className="space-y-10">
              {[
                {
                  title: "Bachelor of Computer Applications",
                  place: "JS University, Shikohabad",
                  time: "2021-2024",
                  tag: "Recent",
                  desc: "Built a strong foundation in programming, data structures, and web technologies",
                  color: "bg-white",
                },
                {
                  title: "Higher Secondary Education",
                  place: "Assam",
                  time: "",
                  tag: "",
                  desc: "",
                  color: "bg-gray-400",
                },
                {
                  title: "Secondary Education",
                  place: "Arunachal Pradesh",
                  time: "",
                  tag: "",
                  desc: "",
                  color: "bg-gray-400",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-6 relative"
                  ref={(el) => (sectionsRef.current[4 + i] = el)}
                >
                  <div
                    className={`w-4 h-4 ${edu.color} rounded-full mt-3 flex-shrink-0 relative z-10 border-4 border-[#1b1f24]`}
                  ></div>
                  <div className="flex-1 pt-1">
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold">{edu.title}</h3>
                        {edu.tag && (
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                            {edu.tag}
                          </span>
                        )}
                      </div>
                      {edu.place && (
                        <p className="text-gray-300 mb-2">{edu.place}</p>
                      )}
                      {edu.time && (
                        <p className="text-sm text-gray-400 mb-3">{edu.time}</p>
                      )}
                      {edu.desc && (
                        <p className="text-gray-300 text-sm">{edu.desc}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
