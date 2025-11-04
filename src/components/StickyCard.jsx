"use client";
import { useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function StickyCard() {
  const container = useRef(null);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Chatty",
      desc: "A full-stack real-time chat application that enables seamless messaging, media sharing, and instant updates between users. Built with Socket.IO for live communication, Redux for state management, and a modern responsive UI using React and Tailwind CSS.",
      stack: ["React", "Redux", "Tailwind", "Socket.io","Express","Mongodb"],
      img: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
      bg: "#242730",
      accent: "#00C2FF",
      live: "https://chat-app-mern-stack-chi.vercel.app/signup",
      github: "https://github.com/pawanprasad2/chat-app-mern-stack-",
    },
    {
      id: 2,
      title: "File Uploader",
      desc: "A secure cloud-based file management system that allows users to upload, store, and access their files safely. Built using Node.js, Express, AWS S3, and JWT authentication to ensure privacy and performance.",
      stack: ["Node.js", "Express", "AWS","EJS", "JWT"],
      img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80",
      bg: "#20262E",
      accent: "#00E676",
      live: "https://secure-file-uploader-ctrj.onrender.com/user/register",
      github: "https://github.com/pawanprasad2/secure-file-uploader",
    },
    {
      id: 3,
      title: "Cynthia Ugwu Portfolio",
      desc: "A visually rich, animation-focused portfolio website inspired by the designer Cynthia Ugwu. Created using pure HTML, CSS, and GSAP for advanced scroll-based animations and transitions",
      stack: ["HTML", "CSS", "JavaScript", "GSAP"],
      img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      bg: "#1E1B2E",
      accent: "#BB86FC",
      live: "https://cynthia-ugwu-website.onrender.com/",
      github: "https://github.com/pawanprasad2/Cynthia-Ugwu---website",
    },
    {
      id: 4,
      title: "NewsHub",
      desc: "A modern news application that curates articles from various categories such as technology, sports, and entertainment. Built using React and TailwindCSS with a clean, responsive UI.",
      stack: ["React", "TailwindCSS"],
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
      bg: "#26211F",
      accent: "#FF9800",
      live: "https://news-hub-flax.vercel.app/",
      github: "https://github.com/pawanprasad2/NewsHub",
    },
  ], []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(container.current.querySelectorAll(".sticky-card"));

      cards.forEach((card, i) => {
        const nextCard = cards[i + 1];
        if (!nextCard) return;

        ScrollTrigger.create({
          trigger: card,
          start: "center center",
          end: () => `+=${window.innerHeight * (cards.length - i - 1)}`,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        gsap.to(card.querySelector(".card-inner"), {
          scale: 0.94,
          opacity: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: nextCard,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, { scope: container });

  return (
    <div className="w-full overflow-x-hidden bg-[#1b1f24]">
      <section ref={container} className="relative">

        {projects.map((project) => (
          <div key={project.id} className="sticky-card h-screen flex items-center justify-center">
            <div
              className="card-inner w-[92%] max-w-6xl min-h-[70vh] rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col gap-8 transition-all duration-300 relative"
              style={{ backgroundColor: project.bg }}
            >
              <div className="absolute top-4 left-4 text-sm md:text-lg font-bold text-white/90 bg-black/40 px-4 py-1 rounded-full z-10 backdrop-blur-sm">
                #{project.id}
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3 rounded-xl overflow-hidden aspect-video">
                  <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="md:w-1/2 flex flex-col justify-center gap-4 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {project.title}
                
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {project.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-black/30 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 flex-wrap justify-center md:justify-start">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-lg font-semibold text-white shadow-md transition-all hover:scale-105"
                      style={{ backgroundColor: project.accent }}
                    >
                      Live Site
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-lg font-semibold border transition-all hover:scale-105"
                      style={{
                        color: project.accent,
                        borderColor: project.accent,
                      }}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}