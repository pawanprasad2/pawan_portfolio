"use client"
import React, { useState } from "react";
import { FaGithub, FaArrowRight, FaCode, FaEye } from "react-icons/fa";

function Projectpage() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Chatty",
      description:
        "Chatty is a modern messaging app for real-time one-on-one conversations. Share text, images, and media instantly with a clean, lightweight, and secure experience.",
      stack: ["React","Tailwind css","Redux","DaisyUI", "Node.js","Express.js", "MongoDB", "Socket.io"],
      liveLink: "https://taskflow-demo.vercel.app",
      githubLink: "https://github.com/pawanprasad2/chat-app-mern-stack-",
      src:"./image/chatty.png"
    },
    {
      id: 2,
      title: "File Uploader",
      description:
        "A simple and secure file uploader app to upload, delete, and download your files with ease. Clean design, fast performance, and complete control over your data.",
      stack: ["Nodejs", "EJS", "Express.js", "MongoDb","AWS","jwt"],
      liveLink: "https://weatherlens.app",
      githubLink: "https://github.com/pawanprasad2/secure-file-uploader",
      src:"./image/fileUploader.png"
    },
    {
      id: 3,
      title: "Cynthia Ugwu - A Portfolio",
      description:
        "A sleek, minimal, and modern portfolio website inspired by Cynthia Ugwu’s design style. Built with smooth animations, responsive layouts, and an interactive user experience to showcase creative work beautifully.",
      stack: ["HTML", "Javascript", "CSS", "GSAP"],
      liveLink: "https://codeshare-live.com",
      githubLink: "https://github.com/pawanprasad2/Cynthia-Ugwu---website",
      src:"./image/cynthiaugwu.png"
      
    },
        {
      id: 4,
      title: "NewsHub ",
      description:
        "NewsHub is a modern news web app that lets users explore the latest headlines and category-based articles in a clean, responsive interface. It offers fast search, smooth navigation, and an easy-to-read layout for an engaging news-browsing experience.",
      stack: ["React", "TailwindCSS"],
      liveLink: "https://codeshare-live.com",
      githubLink: "https://github.com/pawanprasad2/NewsHub",
      src:"./image/newshub.png"
      
    },
  ];

  return (
    <div className="min-h-screen bg-[#1b1f24] border-t border-gray-700 text-white">
      {/* Header */}
      <div className="py-16 max-w-7xl mx-auto px-6">
        <div className="mb-20 ">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
            PROJECTS{" "}
          </h1>
          <p className="text-gray-400 max-w-2xl ">
            Explore my portfolio of cutting-edge applications leveraging modern
            technologies
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group grid lg:grid-cols-12 gap-10 items-center transition-all duration-500 ${
                hoveredProject && hoveredProject !== project.id
                  ? "opacity-40 scale-[0.98]"
                  : "opacity-100 scale-100"
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Alternate Layout */}
              <div
                className={`relative lg:col-span-6 overflow-hidden rounded-2xl shadow-xl border border-gray-800 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  {project.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div>
                  <div className="text-sm text-gray-500 mb-2 font-mono">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 border border-gray-700 text-gray-300 text-sm rounded-lg hover:border-gray-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all"
                  >
                    <FaEye className="w-4 h-4" /> View Live
                    <FaArrowRight className="w-3 h-3" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:border-gray-400 transition-all"
                  >
                    <FaGithub className="w-4 h-4" /> Source Code
                    <FaCode className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projectpage;
