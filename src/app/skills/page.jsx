"use client";
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
import { motion } from "framer-motion";

function Skillspage() {
  const skillCategories = {
    frontend: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen p-6 sm:p-10 border-t border-gray-700 bg-[#1b1f24] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Header */}
        <motion.div
          className="mb-12 sm:mb-20 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-2 tracking-tight">
            SKILLS
          </h1>

          {/* ✨ Animated Yellow Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="origin-left h-1 w-2/3 sm:w-1/3 md:w-1/4 mx-auto md:mx-0 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
          />

          <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mt-3 text-sm sm:text-base">
            A comprehensive overview of my technical proficiencies
          </p>
        </motion.div>

        {/* Skills Layout */}
        <div className="space-y-16 sm:space-y-20">
          {Object.entries(skillCategories).map(([category, skills], i) => (
            <motion.div
              key={category}
              className="grid md:grid-cols-12 gap-6 sm:gap-8 items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Section Title */}
              <div className="md:col-span-3 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold capitalize mb-2">
                  {category}
                </h3>
                <div className="w-10 sm:w-12 h-0.5 bg-yellow-500 mx-auto md:mx-0"></div>
              </div>

              {/* Skill Cards */}
              <motion.div
                className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group flex items-center justify-start gap-3 bg-gray-900 hover:bg-gray-800 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 hover:scale-105 border-l-4 rounded-lg"
                    style={{ borderLeftColor: skill.color }}
                  >
                    <skill.icon
                      className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
                      style={{ color: skill.color }}
                    />
                    <span className="text-base sm:text-lg font-medium text-gray-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skillspage;
