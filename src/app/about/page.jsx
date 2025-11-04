"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Aboutpage() {
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0, transformOrigin: "left" },
        { scaleX: 1, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
      );

      sectionsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            delay: 0.4 + i * 0.2,
            ease: "power2.out",
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen border-t border-gray-700 bg-[#1b1f24] text-white overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto mt-10 px-6 text-center md:text-left">
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
        >
          ABOUT ME
        </h1>
        <div
          ref={lineRef}
          className="h-1 w-1/2 sm:w-1/3 md:w-1/4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full mx-auto md:mx-0"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 space-y-20 sm:space-y-24">
        {/* Intro Section */}
        <div ref={(el) => (sectionsRef.current[0] = el)} className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-green-400 font-medium">
              Available for work
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Pawan Prasad
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light">
            MERN Stack Developer
          </p>
        </div>

        {/* Divider */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="w-full h-px bg-gray-700"
        />

        {/* Story Section */}
        <div ref={(el) => (sectionsRef.current[2] = el)}>
          <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6">
              Hey there! I'm a recent BCA graduate with a genuine passion for
              web development. My coding journey started with curiosity and has
              grown into something I truly love doing. I've spent countless
              hours building projects, learning the MERN stack.
            </p>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-6">
              What excites me most about development is{" "}
              <span className="text-white font-medium">
                solving problems through code
              </span>
              . Whether it's building a smooth user interface or architecting a
              solid backend, I enjoy the process of turning ideas into working
              applications.
            </p>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-12 text-center md:text-left">
            My Journey
          </h2>
          <div className="relative pl-6 sm:pl-10">
            <div className="absolute left-2 sm:left-5 top-0 bottom-0 w-px bg-gray-700"></div>

            <div className="space-y-10">
              {[
                {
                  title: "Bachelor of Computer Applications",
                  place: "JS University, Shikohabad",
                  time: "2021–2024",
                  tag: "Recent",
                  desc: "Built a strong foundation in programming, data structures, and web technologies.",
                  color: "bg-white",
                },
                {
                  title: "Higher Secondary Education",
                  place: "Assam",
                  time: "",
                  desc: "",
                  color: "bg-gray-400",
                },
                {
                  title: "Secondary Education",
                  place: "Arunachal Pradesh",
                  time: "",
                  desc: "",
                  color: "bg-gray-400",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 sm:space-x-6 relative"
                  ref={(el) => (sectionsRef.current[4 + i] = el)}
                >
                  <div
                    className={`w-4 h-4 ${edu.color} rounded-full mt-2 sm:mt-3 flex-shrink-0 relative z-10 border-4 border-[#1b1f24]`}
                  ></div>
                  <div className="flex-1">
                    <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-200">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                        <h3 className="text-lg sm:text-xl font-bold">{edu.title}</h3>
                        {edu.tag && (
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs mt-2 sm:mt-0">
                            {edu.tag}
                          </span>
                        )}
                      </div>
                      {edu.place && (
                        <p className="text-gray-300 mb-2 text-sm sm:text-base">
                          {edu.place}
                        </p>
                      )}
                      {edu.time && (
                        <p className="text-sm text-gray-400 mb-3">{edu.time}</p>
                      )}
                      {edu.desc && (
                        <p className="text-gray-300 text-sm sm:text-base">
                          {edu.desc}
                        </p>
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
