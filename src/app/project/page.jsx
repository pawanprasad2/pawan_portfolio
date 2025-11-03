"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StickyCard from "@/components/StickyCard";

gsap.registerPlugin(ScrollTrigger);

export default function Projectpage() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for title + underline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // triggers when section is 80% into viewport
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        lineRef.current,
        { width: "0%", opacity: 0 },
        { width: "60%", opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-[#1b1f24] flex-col border-t border-gray-700 justify-center items-center w-full py-16"
      >
        <div className="flex flex-col justify-center items-center">
          <h1
            ref={titleRef}
            id="h1"
            className="text-6xl md:text-6xl lg:text-8xl mt-25 font-extrabold tracking-tight text-white"
          >
            PROJECTS
            <div
              ref={lineRef}
              className="h-1 w-[60%] border border-yellow-500 sm:w-[19%] md:mx-0 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full mt-2"
            />
          </h1>
        </div>
      </section>

      <StickyCard />
    </>
  );
}
