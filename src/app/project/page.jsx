import React, { useState } from "react";
import { FaGithub, FaArrowRight, FaCode, FaEye } from "react-icons/fa";

function Projectpage() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "TaskFlow",
      description:
        "A comprehensive project management solution with real-time collaboration, timeline tracking, and team analytics.",
      stack: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveLink: "https://taskflow-demo.vercel.app",
      githubLink: "https://github.com/yourusername/taskflow",
      thumbnail:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "WeatherLens",
      description:
        "Advanced weather forecasting with AI-powered predictions and interactive climate data visualization.",
      stack: ["Next.js", "TypeScript", "D3.js", "OpenAI"],
      liveLink: "https://weatherlens.app",
      githubLink: "https://github.com/yourusername/weatherlens",
      thumbnail:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "CodeShare",
      description:
        "Real-time code sharing platform with syntax highlighting, live cursors, and version control integration.",
      stack: ["Vue.js", "Express", "Redis", "WebRTC"],
      liveLink: "https://codeshare-live.com",
      githubLink: "https://github.com/yourusername/codeshare",
      thumbnail:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format",
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
                  src={project.thumbnail}
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
