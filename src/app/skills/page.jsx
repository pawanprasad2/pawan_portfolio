import React from 'react'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaPython,
  FaGitAlt,
  FaFigma,
  FaBootstrap
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress,
  SiTypescript,
  SiFirebase,
  SiVercel,
  SiPostgresql
} from 'react-icons/si'

function Skillspage() {
  const skillCategories = {
    frontend: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
    ],
    backend: [
      { name: "Node.js", icon: FaNode, color: "#339933" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
    ],
    tools: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" }
    ]
  }

  return (
    <div className='min-h-screen bg-[#1b1f24] text-white'>
      <div className='max-w-7xl mx-auto px-6 py-16'>
        
        {/* Header */}
        <div className='mb-20'>
          <h1 className='text-8xl md:text-9xl font-black text-white mb-4 tracking-tight'>
            TECH
          </h1>
          <h2 className='text-4xl md:text-5xl font-light text-gray-400 -mt-4 ml-2'>
            expertise
          </h2>
        </div>

        {/* Skills Layout */}
        <div className='space-y-20'>
          
          {/* Frontend Section */}
          <div className='grid md:grid-cols-12 gap-8 items-start'>
            <div className='md:col-span-3'>
              <h3 className='text-3xl font-bold text-white mb-2'>Frontend</h3>
              <div className='w-12 h-0.5 bg-white'></div>
            </div>
            <div className='md:col-span-9'>
              <div className='flex flex-wrap gap-4'>
                {skillCategories.frontend.map((skill, index) => (
                  <div 
                    key={index}
                    className='group flex items-center space-x-3 bg-gray-900 hover:bg-gray-800 px-6 py-4 transition-all duration-300 hover:scale-105 border-l-4'
                    style={{ borderLeftColor: skill.color }}
                  >
                    <skill.icon 
                      className='w-6 h-6 group-hover:scale-110 transition-transform' 
                      style={{ color: skill.color }}
                    />
                    <span className='text-lg font-medium text-gray-300 group-hover:text-white'>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Section */}
          <div className='grid md:grid-cols-12 gap-8 items-start'>
            <div className='md:col-span-3'>
              <h3 className='text-3xl font-bold text-white mb-2'>Backend</h3>
              <div className='w-12 h-0.5 bg-white'></div>
            </div>
            <div className='md:col-span-9'>
              <div className='flex flex-wrap gap-4'>
                {skillCategories.backend.map((skill, index) => (
                  <div 
                    key={index}
                    className='group flex items-center space-x-3 bg-gray-900 hover:bg-gray-800 px-6 py-4 transition-all duration-300 hover:scale-105 border-l-4'
                    style={{ borderLeftColor: skill.color }}
                  >
                    <skill.icon 
                      className='w-6 h-6 group-hover:scale-110 transition-transform' 
                      style={{ color: skill.color }}
                    />
                    <span className='text-lg font-medium text-gray-300 group-hover:text-white'>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className='grid md:grid-cols-12 gap-8 items-start'>
            <div className='md:col-span-3'>
              <h3 className='text-3xl font-bold text-white mb-2'>Tools</h3>
              <div className='w-12 h-0.5 bg-white'></div>
            </div>
            <div className='md:col-span-9'>
              <div className='flex flex-wrap gap-4'>
                {skillCategories.tools.map((skill, index) => (
                  <div 
                    key={index}
                    className='group flex items-center space-x-3 bg-gray-900 hover:bg-gray-800 px-6 py-4 transition-all duration-300 hover:scale-105 border-l-4'
                    style={{ borderLeftColor: skill.color }}
                  >
                    <skill.icon 
                      className='w-6 h-6 group-hover:scale-110 transition-transform' 
                      style={{ color: skill.color }}
                    />
                    <span className='text-lg font-medium text-gray-300 group-hover:text-white'>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className='mt-32 text-center'>
          <div className='text-6xl font-black text-gray-800 mb-4'>
            16+
          </div>
          <p className='text-xl text-gray-400'>
            Technologies mastered
          </p>
        </div>

      </div>
    </div>
  )
}

export default Skillspage