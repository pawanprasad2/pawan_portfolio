import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";

function Skillspage() {
  const skillCategories = {
    frontend: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#ffffff" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#ff0090" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    ],
    backend: [
      { name: "Node.js", icon: FaNode, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#3776AB" },
    ],
    tools: [{ name: "Git", icon: FaGitAlt, color: "#F05032" }],
  };

  return (
    <div className="min-h-screen p-10 border-t border-gray-700 bg-[#1b1f24] text-white">
      <div className="max-w-7xl  mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-8xl font-sans md:text-9xl font-black text-white mb-4 tracking-tight">
            SKILLS
          </h1>
          <p className="text-gray-400 max-w-2xl ">
            A comprehensive overview of my technical proficiencies
          </p>
        </div>

        {/* Skills Layout */}
        <div className="space-y-20">
          {/* Frontend Section */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <h3 className="text-3xl font-bold text-white mb-2">Frontend</h3>
              <div className="w-13 h-0.5 bg-yellow-500"></div>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-wrap gap-4">
                {skillCategories.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-3 bg-gray-900 hover:bg-gray-800 px-6 py-4 transition-all duration-300 hover:scale-105 border-l-4"
                    style={{ borderLeftColor: skill.color }}
                  >
                    <skill.icon
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                      style={{ color: skill.color }}
                    />
                    <span className="text-lg font-medium text-gray-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Section */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <h3 className="text-3xl font-bold text-white mb-2">Backend</h3>
              <div className="w-12 h-0.5 bg-yellow-500"></div>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-wrap gap-4">
                {skillCategories.backend.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-3 bg-gray-900 hover:bg-gray-800 px-6 py-4 transition-all duration-300 hover:scale-105 border-l-4"
                    style={{ borderLeftColor: skill.color }}
                  >
                    <skill.icon
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                      style={{ color: skill.color }}
                    />
                    <span className="text-lg font-medium text-gray-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <h3 className="text-3xl font-bold text-white mb-2">Tools</h3>
              <div className="w-12 h-0.5 bg-yellow-500"></div>
            </div>
            <div className="md:col-span-9">
              <div className="flex flex-wrap gap-4">
                {skillCategories.tools.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-3 bg-gray-900 hover:bg-gray-800 px-6 py-4 transition-all duration-300 hover:scale-105 border-l-4"
                    style={{ borderLeftColor: skill.color }}
                  >
                    <skill.icon
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                      style={{ color: skill.color }}
                    />
                    <span className="text-lg font-medium text-gray-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skillspage;
